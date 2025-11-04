export function Card({ className, ...props }) {
  return <div className={`bg-white border border-slate-200 ${className||""}`} {...props} />;
}
export function CardHeader({ className, ...props }) {
  return <div className={`p-6 ${className||""}`} {...props} />;
}
export function CardTitle({ className, ...props }) {
  return <h3 className={`font-semibold text-slate-900 ${className||""}`} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={`p-6 pt-0 ${className||""}`} {...props} />;
}
