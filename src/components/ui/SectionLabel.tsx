export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase mb-4 ${light ? "text-blue-light" : "text-blue"}`}>
      <span className={`w-6 h-px ${light ? "bg-blue-light" : "bg-blue"}`} />
      {children}
    </div>
  );
}
