import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row style={{ backgroundColor: "#635DB7" }} />
          <Row>
            <Col />
            <Col>
              <Row />
              <Row>
                <Button
                  style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                  onPress={() => this.props.navigation.navigate("Signup")}
                >
                  <Text style={{ textAlign: "center" }}>Go to signup</Text>
                </Button>
              </Row>
              <Row />
            </Col>
            <Col />
          </Row>
          <Row style={{ backgroundColor: "#00CE9F" }} />
        </Grid>
      </Container>
    );
  }
}

export default Login;
