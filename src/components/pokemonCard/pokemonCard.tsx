"use client";

import { Pokemon } from "@/app/pokemons/pokemons.interface";

export default function PokemonCard(pokemon: Pokemon) {
  return (
    <div
      key={pokemon.number}
      className="p-4 border rounded shadow hover:shadow-lg transition"
    >
      <img
        src={pokemon.image_url}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h3 className="mt-2 text-lg font-semibold">{pokemon.name}</h3>
      <p>#{pokemon.number}</p>
    </div>
  );
}
