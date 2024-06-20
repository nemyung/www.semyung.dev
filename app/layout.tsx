import "~/app/ui/globals.css";
import Header from "./ui/Header";
import { notoKR } from "~/app/ui/fonts";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="description" content="A personal blog by Semyung Oh" />
      </head>
      <body
        className={clsx(
          "bg-sage-light-2 dark:bg-sage-dark-2",
          notoKR.className
        )}
      >
        <Header />
        <main className="px-[16px] md:px-[36px]">
          <div className="max-w-[1300px] mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
