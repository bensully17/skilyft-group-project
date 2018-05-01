import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Ben Sullivan',
    name: 'Ben',
    image: require('../../Assets/ListPhotos/skilyft-ben.jpg'),
    vehicle: '2011 Range Rover Sport',
    location: 'Denver, CO'
  },
  {
    text: 'Will Sheehan',
    name: 'Will',
    image: require('../../Assets/ListPhotos/will.jpg'),
    vehicle: 'Falcon Heavy Rocket',
    location: 'Denver, CO'
  },
  {
    text: 'Austen Elswick',
    name: 'Austen',
    image: require('../../Assets/ListPhotos/austen.png'),
    vehicle: 'Truck',
    location: 'Denver, CO'
  },
  {
    text: 'Adam Basila',
    name: 'Adam',
    image: require('../../Assets/ListPhotos/Adam.png'),
    vehicle: 'An Ostrich',
    location: 'Denver, CO'
  },
  {
    text: 'Jacob Crane',
    name: 'Jacob',
    image: require('../../Assets/ListPhotos/jacob.png'),
    vehicle: 'Marty McFly\'s DeLorean',
    location: 'Denver, CO'
  },
  {
    text: 'Catfish',
    name: '',
    image: require('../../Assets/ListPhotos/snowbunny.jpg'),
    vehicle: 'Want a ride? ;)'
  }
];
export default class List extends Component {
  render() {
    return (
      <Container>   
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="ios-car" style={{ color: '#333' }} />
                  <Text>{item.name}  -  Vehicle: {item.vehicle}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}