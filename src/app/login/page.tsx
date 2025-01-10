"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "./login.interface";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_LOGIN,
  URL_API,
} from "@/constants/constants";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      registerMutation.mutate({ email, password });
    } catch (error) {
      toast({ title: "Erro", description: ERROR_MESSAGE_LOGIN });
    }
  };

  const registerMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await fetch(`${URL_API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }

      return response.json();
    },
    onSuccess: (response) => {
      Cookies.set("token", response.token);
      Cookies.set("user", response.user.name);
      router.push("/pokemons");
    },
    onError: (response) => {
      toast({
        title: "Erro",
        description: response.message,
      });
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="md:w-full max-w-md p-8 bg-white rounded-md shadow-md sm:m-2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full">Entrar</Button>
        </form>
        <Button
          className="w-full p-2 text-black bg-white rounded hover:bg-gray-200 mt-2"
          onClick={() => router.push("/cadastro")}
        >
          Não tem cadastro? Clique aqui.
        </Button>
      </div>
    </div>
  );
}
