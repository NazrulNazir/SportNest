export const getFeaturedFacilities = async () => {
        const res = await fetch('http://localhost:8000/FeaturedFacilities');
        const data = await res.json();
        return data;
}