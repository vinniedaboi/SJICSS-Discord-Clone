export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html>
        <div className="">
          <body>{children}</body>
        </div>
      </html>
    );
  }
  