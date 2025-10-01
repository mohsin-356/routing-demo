import Link from "next/link";

export const metadata = {
  title: "Saeed's App"
};
export default function Home() {
    return (
        <main>
            <h1>Welcome to Mohsin&apos;s App Home</h1>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog">Blog</Link>
        </main>
    );
}