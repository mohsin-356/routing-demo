import Link from "next/link";
import { use } from "react";

export default function NewsArticle(
    { params, searchParams }:
        { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang:string }>}
) {
    console.log(params);
    console.log(searchParams);
    const { articleId } = use(params);
    const { lang } = use(searchParams);
    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in Language: {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?${lang}`}>English</Link>
                <Link href={`/articles/${articleId}?${lang}`}>Spanish</Link>
                <Link href={`/articles/${articleId}?${lang}`}>French</Link>
            </div>
        </div>
    )
}