export function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-md border border-slate-300 px-3 py-2 text-sm ${props.className||""}`} />;
}
