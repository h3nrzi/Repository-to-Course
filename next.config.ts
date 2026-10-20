import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // This repository maintains its own agent instructions.
  agentRules: false,
};

export default nextConfig;
