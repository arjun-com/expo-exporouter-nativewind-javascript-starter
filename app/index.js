import { View } from "react-native"
import { Link } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

export default function Index() {
	return (
		<View>
			<Text className="text-blue-300">Hey its the index page.</Text>
			<TouchableOpacity className="bg-red-100">
				<Link href="/login">Go to login</Link>
			</TouchableOpacity>
		</View>
	)
}
