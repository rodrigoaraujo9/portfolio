/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["go-skill-icons.vercel.app", "skillicons.dev"],
        localPatterns: [
            {
                pathname: "/**",
            },
        ],
    },
    output: "standalone",
};

export default nextConfig;
