// import sanityClient from "@sanity/client";
import { createClient } from "sanity-codegen";
import { Documents } from "../interfaces/schema";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
if (!projectId) throw new Error("missing project id environment variable");

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
if (!dataset) throw new Error("missing dataset environment variable");

export const client = createClient<Documents>({
  projectId,
  dataset,
  fetch: fetch,
  // apiVersion: "2021-05-12", // use current UTC date - see "specifying API version"!
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  // useCdn: true, // `false` if you want to ensure fresh data
});
