import ProductList from "@/components/ProductList";
import getData from "../../utils/nextFetch";

export default async function ProductListPage() {
    const response = await getData("/api/products");
    return (
        <main className="py-3">
            <ProductList data={response} />
        </main>
    );
}