import "~/app/ui/globals.css";
import Header from "./ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-sage-light-2 dark:bg-sage-dark-2">
        <Header />
        <main className="px-[16px] md:px-[36px]">{children}</main>
      </body>
    </html>
  );
}
