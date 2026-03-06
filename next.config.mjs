/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["go-skill-icons.vercel.app", "skillicons.dev"],
        localPatterns: [
            { pathname: "/**" },
            { pathname: "/*.png" },
            { pathname: "/*.jpg" },
            { pathname: "/*.svg" },
            { pathname: "/*.gif" },
        ],
    },
    output: "standalone",
};

export default nextConfig;
