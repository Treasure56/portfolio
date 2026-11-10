import { cn } from "@/lib/utils";

/**
 * Section heading in two parts: the second part gets the highlighter swipe.
 * `parts` comes from src/data/site.ts, for example ["Featured", "projects"].
 */
export default function Heading({
  parts,
  as: Tag = "h2",
  className,
  onDark = false,
}: {
  parts: readonly [string, string] | string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Tag className={cn("h-section", className)}>
      {parts[0]}{" "}
      <span className={onDark ? "text-tint" : "mark"}>{parts[1]}</span>
    </Tag>
  );
}
