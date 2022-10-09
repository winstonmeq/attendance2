/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {
    domains: ['res.cloudinary.com'],
  },

  env: {
    //dre eh butang ang domain.. dire lng mag change automatic na ma update ang mga domain

    NEXTAUTH_SECRET: 'v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=',

     NEXTAUTH_URL: 'attendance2-flame.vercel.app',
   // NEXTAUTH_URL: 'http://192.168.102.18:3000',
 },
 
   async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
  
   
}

module.exports = nextConfig

