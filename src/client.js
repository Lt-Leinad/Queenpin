import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8ab8bcjd",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});

export default client;
