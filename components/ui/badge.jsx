export function Badge({ variant="default", className="", ...props }) {
  const variants = {
    default: "bg-slate-900 text-white",
    secondary: "bg-slate-100 text-slate-900 border border-slate-200"
  };
  return <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded ${variants[variant]} ${className}`} {...props} />;
}
