import type { RichText as RichTextValue } from "@content/dpa";

/** Renders the serializable Span[] rich text from @content/dpa — replaces the
 *  original dpa-1stclass page, which stored copy as raw JSX inside a data
 *  array (not zod-validatable, not reusable outside React). */
export function RichText({ value }: { value: RichTextValue }) {
  return (
    <>
      {value.map((span, i) => {
        if (span.href) {
          return (
            <a key={i} href={span.href} className="hover:text-[#004e82] text-[#2ca4f2] underline">
              {span.text}
            </a>
          );
        }
        if (span.bold) {
          return <strong key={i}>{span.text}</strong>;
        }
        return <span key={i}>{span.text}</span>;
      })}
    </>
  );
}
