import Link from "next/link";

export default function NewsArticle(
    { params, searchParams }:
        { params: Promise<{ articleID: string }>, searchParams: { lang?: "en" | "fr" | "es" } }
) {
    console.log(params);
    console.log(searchParams);
    return <div>
        <h1>News Article ID</h1>
        <p>Reading in Language</p>
        <div>
            <Link href="/articles/breaking-news-123?lang=en">English</Link>
            <Link href="/articles/breaking-news-123?lang=es">Spanish</Link>
            <Link href="/articles/breaking-news-123?lang=fr">French</Link>
        </div>
    </div>
}