import type { Metadata } from "next";
import "./styles/global.scss";


export const metadata: Metadata = {
  title: "Amidieva – Воплощение элегантности",
  description: "Amidieva – это выбор женщин, которые ценят качество, стиль и комфорт. Позвольте нашей одежде стать вашим отражением внутренней гармонии и внешней красоты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
