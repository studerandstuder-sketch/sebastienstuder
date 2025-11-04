import "./globals.css";

export const metadata = {
  title: "Sébastien Studer — Author",
  description:
    "Official website of author Sébastien Studer. Books, essays, and projects exploring love, money, and a life aligned.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800">{children}</body>
    </html>
  );
}
