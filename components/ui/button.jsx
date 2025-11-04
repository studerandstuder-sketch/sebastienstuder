import { cn } from "@/lib/cn";

export function Button({ className, variant = "default", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none rounded-md";
  const sizes = {
    sm: "text-sm h-9 px-3",
    md: "text-sm h-10 px-4",
    lg: "text-base h-11 px-5"
  };
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-300 hover:bg-slate-50"
  };
  return <button className={cn(base, sizes[size], variants[variant], className)} {...props} />;
}
