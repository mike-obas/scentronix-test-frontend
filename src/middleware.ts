import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: ["/"],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isIndexPage = request.nextUrl.pathname.startsWith("/");

  if (isIndexPage) {
    return NextResponse.redirect(new URL("/recipes", request.url));
  }
}
