import type { Metadata } from "next";
import "./styles/global.scss";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Amidieva – Воплощение элегантности",
  description:
    "Amidieva – это выбор женщин, которые ценят качество, стиль и комфорт. Позвольте нашей одежде стать вашим отражением внутренней гармонии и внешней красоты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="xl:container mx-auto flex flex-col items-center justify-between px-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
