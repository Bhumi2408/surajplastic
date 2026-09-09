/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
            ].join("; "),
          },
        ],
      },
    ];
  },

  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: "/products/semi-automatic-stretch-blow-moulding-machine",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/products/fully-automatic-stretch-blow-moulding-machine",
        destination: "/products/fully-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },

      // Old (pre-rebuild) site URLs still indexed on Google — 301 to the closest
      // current equivalent so old search-result clicks and crawl history don't 404.
      {
        source: "/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
        destination: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/pet-perform-stretch-blow-moulding-machine",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/high-speed-semi-automatic-stretch-blow-moulding-machine",
        destination: "/products/high-speed-pet-perform-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/automatic-pet-blow-moulding-machine.html",
        destination: "/products/fully-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/semiautomatic-pet-blow-moulding-machines.html",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/country-liquor-pet-blow-molding-machines.html",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/auto-drop-pet-perform-stretch-blow-moulding-machine",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/autodrop-pet-bottle-making-machine.html",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/twinseries-stretch-blow-moulding-machine.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/pet-blow-moulding-machines.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/catalogue.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/applications-pet-bottle.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/about-plastic-moulding-machine-manufacturer.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/sitemap.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/preform-stretch-blow-moulding-machine-manufacturer",
        destination: "/products/preform-stretch-blow-moulding-machine-manufacturer",
        permanent: true,
      },
      {
        source: "/semi-automatic-stretch-blow-moulding-machine",
        destination: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
        permanent: true,
      },
      {
        source: "/stretch-blow-moulding-machine-manufacturers",
        destination: "/products/stretch-blow-moulding-machine-manufacturer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;