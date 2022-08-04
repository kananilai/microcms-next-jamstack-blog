import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "microcms-next-jamstack",
  apiKey: process.env.API_KEY,
});
