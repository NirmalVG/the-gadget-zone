import { BASE_URL } from "@/constants";

const nextFetch = async (slug) => {
    try {
        const res = await fetch(`http://localhost:5000${slug}`);

        if (!res.ok) {
            return undefined;
        }

        const data = await res.json(); // Wait for the JSON respons

        return data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export default nextFetch;
