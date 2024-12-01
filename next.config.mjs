// import path from 'path'; // Import module path
/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix:'https://cdn.jsdelivr.net'
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                hostname: 'fiverrnew.cybersoft.edu.vn', // Thêm tên miền này
                pathname: '**'
            },
            {
                protocol: 'http',
                port: '',
                hostname: 'sc04.alicdn.com', // Thêm tên miền này
                pathname: '**'
            }
        ],
        formats:['image/avif','image/webp'],
    },
    // webpack: (config) => {
    //     config.resolve.alias['@app'] = path.resolve(__dirname, 'src/app');
    //     return config;
    //   },
};

export default nextConfig;
