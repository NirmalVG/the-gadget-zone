import React from "react";
import ProductDetail from "@/components/ProductDetail";
import products from "@/data/products";

const ProductDetailPage = ({ params }) => {
    const product = products.find((p) => p._id === params?.productId)
    return (
        <main className="py-3">
            <ProductDetail product={product} />
        </main>
    );
};

export default ProductDetailPage;
