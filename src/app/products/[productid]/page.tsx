export default async function ProductPage({ params }: { params: Promise<{ productid: string }> }) {
    const ProductID=(await params).productid;
    return (
        <main>
            <h1>Product Page</h1>
            <p>Product ID: {ProductID}</p>
        </main>
    );
}
