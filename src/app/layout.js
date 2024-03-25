import "./globals.css";

export const metadata = {
  title: "Jamie O Doe - My Website",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
