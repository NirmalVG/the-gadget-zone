import FeaturedProducts from "@/components/FeaturedProducts";
import getData from "../utils/nextFetch";

export default async function Home() {
    const response = await getData("/api/products");
    return (
        <main className="py-3">
            <FeaturedProducts data={response} />
        </main>
    );
}
