let PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
let DATASET = import.meta.env.VITE_DATASET;

let QUERY = encodeURIComponent('*[_type == "pet"]');
// Compose the URL for your project's endpoint and add the query
export let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
