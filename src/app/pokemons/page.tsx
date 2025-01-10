"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { URL_API } from "@/constants/constants";
import { Pokemon } from "./pokemons.interface";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import PokemonCard from "@/components/pokemonCard/pokemonCard";
import Skelletons from "@/components/skelletons/skelletons";

export default function PokemonsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();

  const fetchPokemons = async () => {
    const token = Cookies.get("token");
    const response = await fetch(
      `${URL_API}/api/pokemons?search=${search}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons", search, page],
    queryFn: fetchPokemons,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      Cookies.remove("token");
      Cookies.remove("user");
    },
    onSuccess: () => {
      router.push("/login");
    },
  });

  if (isError) return <div>Erro ao carregar os dados</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pokémons da Região de Kanto</h1>
        <Button
          onClick={() => {
            logoutMutation.mutate();
          }}
        >
          Sair
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Pesquisar por nome ou número"
        className="w-full p-2 mb-4 border rounded"
        autoFocus
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setPage(1);
          setSearch(e.target.value);
        }}
      />
      <Skelletons isLoading={isLoading} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {data?.pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.number} {...pokemon} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <Button
          className="disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Anterior
        </Button>
        <Button
          disabled={page === data?.totalPages || data?.totalPages === 0}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
