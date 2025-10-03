import React from "react";

export const metadata = {
  title: "Mohsin's App",
  description: "This is my app description",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
