import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema",
  outputPath: "../client/interfaces/schema.ts",
};

export default config;
