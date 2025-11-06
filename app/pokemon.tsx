import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokemon() {
    const [loading, setLoading] = useState<any>(true)
    const [items, setItems] = useState<any>(true)
    const [error, setError] = useState<any>(true)


    async function loadPokemon() {
        try {
            setError(null);
            setLoading(true);

            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

            const json = await res.json();
            const results: Array<any> = json.results || [];

            // Contoh: ambil id dari URL Pokémon
            const mapped = results.map((r) => {
                const match = r.url.match(/\/pokemon\/(\d+)\//);
                const id = match ? match[1] : null;
                return {
                    id,
                    name: r.name,
                    image: id
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                        : null,
                };
            });

            setItems(mapped);
        } catch (err: any) {
            setError(err.message || "Terjadi kesalahan saat memuat data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    return (
        <SafeAreaView className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold p-4">PokeApi - Pokemon</Text>

            <TouchableOpacity className="flex-1 m-2 bg-gray-100 rounded-xl items-center p-3 min-2-[140px]">
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }}
                    className="w-24 h-24 mb-2"
                />
                <Text className="capitalize font-semibold">#1 bulbasaur</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}