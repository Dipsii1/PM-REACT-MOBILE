import { useLocalSearchParams, useRouter } from "expo-router";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../data.json";
import { Text, Appbar, Card, Chip } from "react-native-paper";

export default function Detail() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const foodID = (params?.id);
    const food = data.foods.find((item) => item.id === foodID);

    if (!food) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Resep tidak ditemukan</Text>
            </SafeAreaView>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* header */}
            <Appbar.Header style={{ backgroundColor: "#fff" }}>
                <Appbar.BackAction onPress={() => router.back()} />
                <Appbar.Content
                    title={food.name}
                    titleStyle={{ fontWeight: "bold", fontSize: 18 }}
                />
            </Appbar.Header>

            <ScrollView>
                {/* image */}
                <Card style={{ margin: 12, borderRadius: 12 }}>
                    <Card.Cover
                        source={{ uri: food.image }}
                        style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                    />
                    <Card.Content>
                        <Text
                            variant="titleLarge"
                            style={{ fontWeight: "bold", marginTop: 8 }}
                        >
                            {food.name}
                        </Text>
                        <Text variant="bodyMedium" style={{ marginTop: 4, color: "#555" }}>
                            {food.description}
                        </Text>
                    </Card.Content>
                </Card>

                {/* info ringkas */}

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginTop: 12,
                    marginHorizontal: 12
                }}>
                    <Chip icon="map-marker" compact>{food.region}</Chip>
                    <Chip icon="food" compact>{food.category}</Chip>
                    <Chip
                        compact
                        style={{
                            backgroundColor: "#ccc",
                        }}
                        textStyle={{ color: "#fff" }}
                    >
                        {food.difficulty}
                    </Chip>
                    <Chip icon="clock" compact>{food.cookingTime}</Chip>

                    {/* bahan bahan */}

                    <Card style={{  marginTop: 8, borderRadius: 12, width:'100%' }}>
                        <Card.Title title="Bahan-bahan" />
                        <Card.Content>
                            {food.ingredients.map((item: string, index: number) => (
                                <Text key={index} style={{ marginVertical: 2 }}>
                                    • {index}{item}
                                </Text>
                            ))}
                        </Card.Content>
                    </Card>

                    {/* langkah langkah */}

                    <Card style={{ marginTop: 8, borderRadius: 12, width:'100%' }}>
                        <Card.Title title="Langkah-Langkah" />
                        <Card.Content>
                            {food.preparation.map((item: string, index: number) => (
                                <Text key={index} style={{ marginVertical: 2 }}>
                                    • {item}
                                </Text>
                            ))}
                        </Card.Content>
                    </Card>

                    {/* nutrisi */}

                    <Card style={{marginTop: 8, borderRadius: 12, width: '100%'}}>
                        <Card.Title title="Nutrition" />
                        <Card.Content>
                            <Text>Calories : {food.nutrition.calories}</Text>
                            <Text>Protein : {food.nutrition.protein}</Text>
                            <Text>Carbs : {food.nutrition.carbs}</Text>
                            <Text>Fat : {food.nutrition.fat}</Text>
                        </Card.Content>
                    </Card>


                    {/* funfact */}
                    <Card style={{marginTop: 8, borderRadius: 12, width: '100%'}}>
                        <Card.Title title="Funfact" />
                        <Card.Content>
                            <Text>{food.funFacts}</Text>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}
