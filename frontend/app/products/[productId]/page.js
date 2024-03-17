import React from "react";
import ProductDetail from "@/components/ProductDetail";
import getData from "../../../utils/nextFetch";

const ProductDetailPage = async ({ params }) => {
    const response = await getData(`/api/products/${params?.productId}`);

    return (
        <main className="py-3">
            <ProductDetail product={response} />
        </main>
    );
};

export default ProductDetailPage;
