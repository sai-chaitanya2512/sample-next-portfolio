import "./globals.css";

export const metadata = {
  title: "Chaitanya | Portfolio",
  keywords: ["G. L. Sai Chaitanya", "GL Sai Chaitanya", "GLSC", "Chaitanya", "Sai Chaitanya", "GLSaiChaitanya"],
  description: "Frontend Developer passionate about building beautiful, accessible, and performant web experiences.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-base-100 text-base-content overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}