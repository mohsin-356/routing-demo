"use client";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
export default function OrderProductPage() {
    // const router = useRouter();
    const handleClick = () => {
        console.log("Order placed");
        // router.push("/");
        // router.refresh();
        // redirect("/");
    };
    return (
        <>
           <h1>Order Product Page</h1>
           <button onClick={handleClick}>Place Order</button>
        </>
    )
}