import Link from "next/link";

export const metadata = {
  title: "Saeed's App"
};
export default function Home() {
    return (
        <main>
            <h1>Welcome to Mohsin&apos;s App Home</h1>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products">Products</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
            </li>
            <li>
                <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
            </li>
            
        </main>
    );
}