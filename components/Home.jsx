import { StyleSheet, View, Text } from "react-native"

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"


    }
})