import { BASE_URL } from "@/constants";

const nextFetch = async (slug) => {
    try {
        const res = await fetch(`${BASE_URL}${slug}`);

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
