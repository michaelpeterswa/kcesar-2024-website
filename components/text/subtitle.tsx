export function Subtitle({ content }: { content: string }) {
  return <h2 className="text-center underline">{content}</h2>;
}

export function SubtitleNoUnderline({ content }: { content: string }) {
  return <h2 className="text-center">{content}</h2>;
}
