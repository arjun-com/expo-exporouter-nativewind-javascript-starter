import { Link, Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import "../styles/globals.css"

export default function RootLayout() {
	return (
		<SafeAreaView>
			<Slot />
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}
