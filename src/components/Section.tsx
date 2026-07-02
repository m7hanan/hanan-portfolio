import { ReactNode } from "react";

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-primary">{index}</span>
      <span className="h-px flex-1 max-w-[60px] bg-border" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </span>
    </div>
  );
}

export function PageHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="border-b border-border/60 bg-secondary/30">
      <div className="container-prose py-20 md:py-28">
        <SectionLabel index={index} title={eyebrow} />
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
