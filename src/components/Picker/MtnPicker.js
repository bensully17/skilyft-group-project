import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class MtnPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        {/* <Header>
          <Body>
            <Title>Choose Destination</Title>
          </Body>
          <Right />
        </Header> */}
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Click to select your mountain"
              placeholderStyle={{ color: "black" }}
              placeholderIconColor="#007aff"
              style={{ width: '100%' }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Vail" value="key0" />
              <Picker.Item label="A Basin" value="key1" />
              <Picker.Item label="Kayestone" value="key2" />
              <Picker.Item label="Breck" value="key3" />
              <Picker.Item label="Winter Park" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}