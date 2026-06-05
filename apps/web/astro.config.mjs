// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: "4gp8julo",
            dataset: "production",
            useCdn: false,
            apiVersion: "2026-06-02",
        }),
    ],
});