"use client";

import { ClipboardCopy, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { CATEGORY_MAP, SOURCE_LABELS } from "./category-filter";

interface PromptItem {
  id: number;
  title: string;
  content: string;
  category: string;
  description: string | null;
  input_fields: string | null;
  output_description: string | null;
  model_recommendation: string | null;
  source: string;
  source_url: string | null;
  usage_count: number;
  is_featured: number;
}

export function PromptCard({
  item,
  index,
  expanded,
  onToggle,
  onCopy,
}: {
  item: PromptItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  onCopy: (id: number, content: string) => void;
}) {
  const catLabel = CATEGORY_MAP[item.category] || item.category;
  const srcLabel = SOURCE_LABELS[item.source] || item.source;

  return (
    <div
      className="group relative rounded-xl border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-accent-vibrant/50 animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Source badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        {item.source_url ? (
          <a
            href={item.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-accent/30 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Source: ${srcLabel}`}
          >
            {srcLabel}
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        ) : (
          <span className="inline-flex items-center rounded-md border border-border/50 bg-accent/30 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
            {srcLabel}
          </span>
        )}
      </div>

      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded-full bg-accent/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              {catLabel}
            </span>
          </div>
          <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
        </div>
        <button
          onClick={() => onCopy(item.id, item.content)}
          className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
          aria-label="Copy prompt"
        >
          <ClipboardCopy className="h-4 w-4" />
        </button>
      </div>

      {item.description && (
        <p className="mb-3 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
      )}

      <div className="mb-3 flex flex-wrap gap-1.5">
        {item.model_recommendation && (
          <span className="inline-flex items-center rounded-md border border-border/50 bg-accent/30 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            {item.model_recommendation}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-t pt-3">
        <span className="text-[10px] font-mono text-muted-foreground/60">
          Used {item.usage_count} times
        </span>
        <button
          onClick={onToggle}
          className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {expanded ? "Less" : "More"}
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 animate-slide-down">
          <div className="rounded-lg border bg-background/50 p-3">
            <pre className="whitespace-pre-wrap break-words text-xs font-mono text-foreground/80 leading-relaxed">
              {item.content}
            </pre>
          </div>
          {item.input_fields && (
            <div className="mt-2">
              <span className="text-[10px] font-medium text-muted-foreground">Inputs: </span>
              {JSON.parse(item.input_fields).map((f: string) => (
                <span
                  key={f}
                  className="inline-flex items-center rounded-full bg-accent/30 px-2 py-0.5 text-[10px] font-mono text-muted-foreground mr-1 mb-1"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
          {item.output_description && (
            <p className="mt-2 text-[10px] text-muted-foreground">
              <span className="font-medium">Output: </span>
              {item.output_description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
