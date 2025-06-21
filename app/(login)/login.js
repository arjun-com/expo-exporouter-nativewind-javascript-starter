import { Text, TouchableOpacity, View } from "react-native"
import { Link } from "expo-router"

export default function LoginScreen() {
	return (
		<View>
			<Text>Hey its the login page</Text>
			<TouchableOpacity
				style={{
					padding: 10,
					backgroundColor: "lightblue",
				}}
			>
				<Link href="/(home)/home">Go to home</Link>
			</TouchableOpacity>
		</View>
	)
}
