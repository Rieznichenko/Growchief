export function SectionDescription({ text, className = '' }: { text: string; className: string }) {
  return (
    <span className={`uppercase text-[#BC8CFF] text-[18px] font-normal tracking-[5.4px] text-center ` + className}>
      {text}
    </span>
  );
}
