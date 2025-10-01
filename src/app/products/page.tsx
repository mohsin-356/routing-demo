import Link from "next/link";

export default function Products() {
    return (
        <main>
            <h1>Products page</h1>
            here will be a list of products
            <ul>
                <Link href="/products/1">
                    <li>Product 1</li>
                </Link>
                <Link href="/products/2">
                    <li>Product 2</li>
                </Link>
                <Link href="/products/3" replace>
                    <li>Product 3</li>
                </Link>
            </ul>
        </main>
    );
}