import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Text>Search</Text>
				</View>
				<View style={styles.list}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<StatusBar style='light' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#aaa',
	},
	search: {
		padding: 16,
		backgroundColor: '#04f',
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: '#915',
	},
})
