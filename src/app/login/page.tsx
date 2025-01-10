"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/login",
        { email, password }
      );
      console.log(data);
      Cookies.set("token", data.token);
      Cookies.set("user", data.user.name);
      router.push("/pokemons");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full p-2 text-white bg-blue-500 rounded">
          Entrar
        </button>
        <button className="w-full p-2 text-white bg-blue-500 rounded" onClick={() => router.push("/cadastro")}>
          Cadastro
        </button>
      </form>
    </div>
  );
}
