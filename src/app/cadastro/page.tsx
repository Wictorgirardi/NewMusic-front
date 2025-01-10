"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterFormData } from "./cadastro.interface";
import { toast } from "@/hooks/use-toast";
import { ERROR_MESSAGE, LOGIN_ROUTE, URL_API } from "@/constants/constants";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const response = await fetch(`${URL_API}/api/auth/register`, {
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
      toast({
        title: "Sucesso",
        description: response.message,
      });
      router.push(LOGIN_ROUTE);
    },
    onError: (response) => {
      console.log(response.message);
      toast({ title: "Erro", description: response.message });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md m-4">
        <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Sua senha"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={registerMutation.status === "pending"}
          >
            {registerMutation.status === "pending"
              ? "Cadastrando..."
              : "Cadastrar"}
          </Button>
          <Button
            className="w-full p-2 text-black bg-white rounded hover:bg-gray-200"
            onClick={() => router.push("/login")}
          >
            Já possui cadastro? Clique aqui.
          </Button>
        </form>
      </div>
    </div>
  );
}
