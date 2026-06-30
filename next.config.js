/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.innerGraph = false;
        }
        return config;
    },
}

module.exports = nextConfig
