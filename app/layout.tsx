import "~/app/ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-sage-light-2 dark:bg-sage-dark-2">{children}</body>
    </html>
  );
}
