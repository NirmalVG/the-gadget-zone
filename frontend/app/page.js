import FeaturedProducts from "@/components/FeaturedProducts";
import products from "@/data/products";

export default function Home() {
    return (
        <main className="py-3">
            <FeaturedProducts data={products} />
        </main>
    );
}
