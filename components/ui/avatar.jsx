export function Avatar({ className="", children }) {
  return <div className={`inline-flex items-center justify-center overflow-hidden bg-slate-100 ${className}`} style={{borderRadius: 12}}>{children}</div>;
}
export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}
export function AvatarFallback({ children }) {
  return <span className="text-slate-600 text-sm">{children}</span>;
}
