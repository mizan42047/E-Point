import { useRouter } from "next/router";

const SingleProduct = () => {
    const { query } = useRouter();
    return (
        <div className="single-product">
            <h1>Single Product</h1>
        </div>
    )
}

export default SingleProduct;