import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken"); // Nome do cookie usado para autenticação

  // Rotas protegidas
  const protectedRoutes = ["/pokemons"];

  // Verifica se a rota é protegida e se o token está ausente
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redireciona para login
  }

  return NextResponse.next(); // Permite acesso se o token existir
}

// Configura para aplicar somente em rotas específicas
export const config = {
  matcher: ["/pokemons/:path*"], // Middleware será aplicado em /pokemons e subrotas
};
