export function Subtitle({ content }: { content: string }) {
  return <h2 className="text-center underline px-4">{content}</h2>;
}

export function SubtitleNoUnderline({ content }: { content: string }) {
  return <h2 className="text-center px-4">{content}</h2>;
}
