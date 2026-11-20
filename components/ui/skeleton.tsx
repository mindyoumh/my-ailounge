import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-shimmer rounded-md bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]", className)}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-4 space-y-3">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16 ml-auto" />
      </div>
      <Skeleton className="h-4 w-3/4" />
      <div className="flex gap-1.5">
        <Skeleton className="h-3 w-12 rounded-full" />
        <Skeleton className="h-3 w-16 rounded-full" />
      </div>
    </div>
  );
}

export { Skeleton };
