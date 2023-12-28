import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "gfx5cjiu",
  dataset: "production",
  useCdn: true,
});

export default client;
