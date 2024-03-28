import LinkBar from "./components/LinkBar";
import ProfileBar from "./components/ProfileBar";
import "./globals.css";

export const metadata = {
  title: "Jamie O Doe - My Website",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-background py-4 ">
        <div className="page_grid ">
          <ProfileBar />
          {children}
          <LinkBar />
        </div>
      </body>
    </html>
  );
}
