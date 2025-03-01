import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "lwqoo27z",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});