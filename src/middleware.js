import { NextResponse } from "next/server";

// IP -> { count, timestamp }
const rateLimit = new Map();

const LIMIT = 100;        // max requests
const WINDOW = 60 * 1000; // per 60 seconds (1 minute)

// Purani entries clean karne ke liye (memory leak se bachne ke liye)
function cleanupOldEntries() {
  const now = Date.now();
  for (const [ip, data] of rateLimit.entries()) {
    if (now - data.timestamp > WINDOW) {
      rateLimit.delete(ip);
    }
  }
}

export function middleware(req) {
  // Real IP nikaalna (agar Nginx proxy use ho raha hai toh x-forwarded-for header sahi IP dega)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const entry = rateLimit.get(ip);

  // Har 100 requests ke baad cleanup chala do (thoda random taaki har request pe overhead na ho)
  if (Math.random() < 0.01) cleanupOldEntries();

  if (!entry || now - entry.timestamp > WINDOW) {
    // Naya window shuru
    rateLimit.set(ip, { count: 1, timestamp: now });
  } else {
    entry.count++;
    if (entry.count > LIMIT) {
      return new NextResponse(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  return NextResponse.next();
}

// Kis paths pe yeh middleware chalega
export const config = {
  matcher: [
    /*
     * Static files (_next/static, images, favicon, etc.) ko exclude kiya hai
     * warna har CSS/JS/image request bhi count ho jayegi aur limit jaldi hit ho jayegi
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};