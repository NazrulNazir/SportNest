export const getFeaturedFacilities = async () => {
        const res = await fetch('http://localhost:8000/FeaturedFacilities');
        const data = await res.json();
        return data;
}

export const getAllFacilities = async ()=> {
        const res = await fetch(`http://localhost:8000/allfacilities`);
        const data = await res.json();
        return data;
}

// Details Page
export const allFacilitiesDetails = async (id)=> {
        const res = await fetch(`http://localhost:8000/allfacilities/${id}`);
        const data = await res.json();
        return data;
}