/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yourwebsite.com', // Thay thế bằng URL của trang web của bạn
    generateRobotsTxt: true, // Tạo tệp robots.txt
    sitemapSize: 5000, // Số lượng URL tối đa trong một file sitemap
    changefreq: 'daily', // Tần suất thay đổi
    priority: 0.7, // Ưu tiên cho các URL
    exclude: ['/admin'], // Những trang bạn muốn loại trừ khỏi sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: '/secret-page', // Loại trừ trang cụ thể trong robots.txt
        },
      ],
    },
  };
  