"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
const authNavLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName=usePathname();

  return (
    <html lang="en">
      <body>
        {authNavLinks.map((link) => {
          const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
             key={link.href} href={link.href}>
              {link.label}
            </Link>
          );
        })}
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
        <p>Footer</p>
      </footer>
    </body>
    </html >
  )
}
