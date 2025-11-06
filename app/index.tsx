import foodJson from "@/data.json";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
    const [foodData, setFoodData] = useState<any>([])

    useEffect(() => {
        try {
            setFoodData(foodJson.foods)
            console.log(foodData)
        } catch (e) {
            console.log("error loading food data", e)
        }
    }, [])

    const renderFood = ({ item }: { item: any }) => (

        <View style={{ flex: 1, margin: 8 }}>
            <Link href={{
                pathname: '/detail',
                params: { id: item.id }
            }}>
                <Card>
                    <View style={{ height: 'auto', backgroundColor: '#fff' }}>
                        <Image
                            source={{
                                uri: item.image
                            }}
                            style={{
                                width: '100%',
                                height: 120,
                                borderRadius: 8,
                                resizeMode: "cover",
                            }}
                        />
                    </View>

                    <Card.Content>
                        <Text variant="titleMedium"
                            style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: 18,
                                marginBottom: 4,
                            }}
                        >
                            {item.name}
                        </Text>
                        <Text variant="bodySmall" style={{ textAlign: "center", color: "#black" }}>
                            {item.origin}
                        </Text>

                        <Text variant="bodySmall" style={{ textAlign: "center", color: "#666", height: 150 }}>
                            {item.description}
                        </Text>

                    </Card.Content>
                </Card>
            </Link>

        </View>
    )

    return (

        <ScrollView>

            <SafeAreaView style={{ backgroundColor: "white" }}>
                <View style={{ padding: 16 }}>
                    <Text
                        variant="headlineMedium"
                        style={{ textAlign: "center", marginBottom: 16, fontWeight: "bold" }}
                    >
                        Makanan Khas Indonesia
                    </Text>
                </View>

                <FlatList

                    data={foodData}
                    renderItem={renderFood}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </ScrollView>
    );
}



