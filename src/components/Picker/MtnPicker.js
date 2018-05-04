import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";


const MtnPicker = (props) => {
    return (
      <Container>
      
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Click to select your mountain"
              placeholderStyle={{ color: "black" }}
              placeholderIconColor="#007aff"
              style={{ width: '100%' }}
              selectedValue={props.currentMtn}
              onValueChange={props.changed}
            >
              <Picker.Item label="Vail" value="Vail" />
              <Picker.Item label="Arapahoe Basin" value="Arapahoe Basin" />
              <Picker.Item label="Keystone" value="Keystone" />
              <Picker.Item label="Breck" value="Breck" />
              <Picker.Item label="Winter Park" value="Winter Park" />
              <Picker.Item label="Beaver Creek" value="Beaver Creek" />
              <Picker.Item label="Copper Mountain" value="Copper Mountain" />
              <Picker.Item label="Aspen" value="Aspen" />

            </Picker>
          </Form>
        </Content>
      </Container>
    )
}

export default MtnPicker
  