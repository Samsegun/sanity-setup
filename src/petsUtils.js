let PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
let DATASET = import.meta.env.VITE_DATASET;

let QUERY = encodeURIComponent('*[_type == "pet"]');
// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export const fetchPet = async ({ queryKey }) => {
    // const id = queryKey[1];
    console.log(queryKey);

    const apiRes = await fetch(URL);

    if (!apiRes.ok) {
        throw new Error("Failed to fetch pets!");
    }

    return apiRes.json();
};
