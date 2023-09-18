import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ScreenOne = () => {
    return (
        <View>
            <Text>
                ScreenOne
            </Text>
        </View>
    )
}

export default ScreenOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center"
    }
})