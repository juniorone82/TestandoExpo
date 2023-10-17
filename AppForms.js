import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';

export default function AppForm() {
    return (
        <View style={StyleSheet.container}>
            <Text>Form!</Text>
            <StatusBar style="light" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
});