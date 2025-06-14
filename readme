# Gemini Ticket Classifier

A Python tool to classify support tickets using Google's **Gemini API**. It processes Zoho ticket data from CSV, uploads cleaned versions to **Google Drive**, runs AI-based classification, and saves structured results back to Drive as Google Sheets.

## Project Structure
```
AILOUNGE/
├── classify/                    
│   ├── __init__.py
│   ├── classify_tickets.py      # Main classification logic
│   └── prompts/                 # Contains prompt templates for Gemini AI
│
├── data_upload/                 
│   ├── __init__.py
│   ├── raw_csvs/                # Place raw CSV files here for processing
│   └── upload_csvs.py           # Script to upload cleaned CSVs to Google Drive
│
├── utils/                       
│   ├── __init__.py
│   ├── classification_utils.py  
│   └── dataparse.py             
│
├── service_account.json         # Google service account credentials
├── requirements.txt             
├── venv/                        
└── .env                         # Environment variables
```
## Setup Instructions

### Create and activate a virtual environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### Install dependencies
```bash
pip install -r requirements.txt
```

## .env Configuration
```bash
# Gemini API
API_KEY=your_gemini_api_key
MODEL_NAME=gemini-2.0-flash

# Google Drive API
GOOGLE_DRIVE_API=https://www.googleapis.com/auth/drive
GOOGLE_DRIVE_FOLDER_ID=your_root_drive_folder_id
```
To get the Google Drive ID, you need to copy the URL from the search bar and extract the string of characters after "folders/."
```
https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoasdfkjasWxZy
```
Your folder ID:
```
1aBcDeFgHiJkLmNoasdfkjasWxZy
```

Also ensure you have a valid service_account.json in the root directory for Google Drive access.

## Google Service Account Setup
You must create and download a service account credential file to access Google Drive and Sheets programmatically.

Steps:\
    1. Go to the Google Cloud Console\
    2. Create a new project or select an existing one\
    3. Go to APIs & Services > Credentials\
    4. Click "Create credentials" > "Service account"\
    5. After creating:\
        - Go to the service account’s Keys section\
        - Add a new key > JSON and download the file\
    6. Rename it to **service_account.json** and place it in the root of this project



## How to Use
### 1. Upload CSV files to Google Drive
Place your raw CSV files inside: 
```
data_upload/raw_csvs/
(e.g., Zoho Tickets 2024-2025.csv)
```

Run the uploader:
```bash
python data_upload/upload_csvs.py
```

### 2. Run the classification
Pass a ticket year at the end of the command.
```bash
python classify/classify_tickets.py -year 2024-2025
```
This will:\
    1. Read the 2024-2025_processed sheet from its corresponding Drive folder\
    2. Classify ticket data using Gemini API\
    3. Upload the final result as a sheet: 2024-2025_result
in the same Drive folder

### Gemini Model Errors
- You may occasionally see 503 UNAVAILABLE — this means the Gemini API is temporarily overloaded.
- This tool will skip affected chunks but continue processing remaining data.