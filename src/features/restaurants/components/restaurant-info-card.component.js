import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: #fff;
`

const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = 'Shiva Foods',
		icon,
		photos = [
			'https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		],
		address = 'shiva street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant
	return (
		<Card>
			<RestaurantCardCover source={{ uri: photos[0] }} />
			<Card.Content>
				<Title>{name}</Title>
				<Paragraph>{address}</Paragraph>
			</Card.Content>
		</Card>
	)
}

export default RestaurantInfoCard
