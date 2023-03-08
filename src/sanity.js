import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const configuredClient = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: import.meta.env.VITE_DATASET,
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: "2023-03-08", // use current date (YYYY-MM-DD) to target the latest API version
});
