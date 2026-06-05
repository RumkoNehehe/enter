import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "4gp8julo",
    dataset: "production",
    useCdn: false,
    apiVersion: "2026-06-02",
});