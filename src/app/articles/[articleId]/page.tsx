import Link from "next/link";

export default async function NewsArticle(
    { params, searchParams }:
        { params: Promise<{ articleID: string }>, searchParams: { lang?: "en" | "fr" | "es" } }
) {
    console.log(params);
    console.log(searchParams);
    const { articleID } = await params;
    const { lang } = await searchParams;
    return <div>
        <h1>News Article {articleID}</h1>
        <p>Reading in Language: {lang}</p>
        <div>
            <Link href={`/articles/${articleID}?${lang}`}>English</Link>
            <Link href={`/articles/${articleID}?${lang}`}>Spanish</Link>
            <Link href={`/articles/${articleID}?${lang}`}>French</Link>
        </div>
    </div>
}