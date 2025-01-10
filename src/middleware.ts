import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const url = request.nextUrl.clone();

  if (url.pathname === "/" && token) {
    console.log("Usuário logado, redirecionando para /pokemons");
    url.pathname = "/pokemons";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/" && !token) {
    console.log("Usuário logado, redirecionando para /pokemons");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const protectedRoutes = ["/pokemons"];
  if (
    protectedRoutes.some((route) => url.pathname.startsWith(route)) &&
    !token
  ) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/pokemons/:path*"],
};
