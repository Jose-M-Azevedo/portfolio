import MainHeader from "@/components/MainHeader";
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio of my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className="bg-background text-foreground">
          <MainHeader />
          <div className="container mx-auto max-w-[50%] pt-20">{children}</div>
        </body>
      </LanguageProvider>
    </html>
  );
}
