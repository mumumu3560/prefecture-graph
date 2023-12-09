import "./src/env/client.mjs";
import "./src/env/server.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        runtime: 'experimental-edge',
      },
};

export default nextConfig;