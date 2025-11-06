import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokemon() {

    return (
        <SafeAreaView className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold p-4">PokeApi-Pokemon</Text>

            <TouchableOpacity className="flex-1 m-2 bg-gray-100 rounded-xl items-center p-3 min-2-[140px] ">
                <Image source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }}/>
                <Text className="capitalize font-semibold">Fetch Pokemon Data</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}   