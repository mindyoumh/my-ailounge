import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime

# Configuration
SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
GITHUB_TRENDING_URL = "https://github.com/trending"
MD_FILE_PATH = "trending.md"

def get_trending_repos():
    # Fetch the trending page
    response = requests.get(GITHUB_TRENDING_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    repos = []
    
    # Scrape the top 5 trending repositories
    for article in soup.find_all('article', class_='Box-row')[:5]:
        h2 = article.find('h2', class_='h3 lh-condensed')
        a_tag = h2.find('a')
        
        # Clean up repository name and construct the full URL
        repo_name = a_tag.text.strip().replace(' ', '').replace('\n', '')
        repo_url = f"https://github.com{a_tag['href']}"
        
        # Get the description (if it exists)
        p_tag = article.find('p', class_='col-9 color-fg-muted my-1 pr-4')
        description = p_tag.text.strip() if p_tag else "No description provided."
        
        repos.append({'name': repo_name, 'url': repo_url, 'description': description})
        
    return repos

def format_slack_message(repos):
    # Format the message using Slack's Block Kit for a cleaner look
    rank_emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"]

    blocks = [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "🔥 Today's Top Trending GitHub Repos"
            }
        },
        {"type": "divider"}
    ]

    for i, repo in enumerate(repos):
        rank = rank_emojis[i] if i < len(rank_emojis) else f"#{i + 1}"
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"{rank}  *<{repo['url']}|{repo['name']}>*\n_{repo['description']}_"
            }
        })
        blocks.append({"type": "divider"})

    return {"blocks": blocks}

def send_to_slack(message):
    if SLACK_WEBHOOK_URL:
        requests.post(
            SLACK_WEBHOOK_URL, 
            data=json.dumps(message), 
            headers={'Content-Type': 'application/json'}
        )

def save_to_markdown(repos):
    # Append the newly fetched repos to the markdown file
    date_str = datetime.now().strftime("%Y-%m-%d")
    with open(MD_FILE_PATH, "a") as f:
        f.write(f"\n## Trending on {date_str}\n\n")
        for i, repo in enumerate(repos, start=1):
            f.write(f"{i}. **[{repo['name']}]({repo['url']})**: {repo['description']}\n")

if __name__ == "__main__":
    trending_repos = get_trending_repos()
    
    if trending_repos:
        save_to_markdown(trending_repos)
        slack_msg = format_slack_message(trending_repos)
        send_to_slack(slack_msg)
        print("Success: Repos fetched, markdown updated, and Slack notified.")
    else:
        print("Error: No repositories found.")