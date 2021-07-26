import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import PreSession from "./components/PreSession/PreSession.component";
import Session from "./components/Session/Session.component";
import Circle from "./UI/Circle/Circle.component";

const SESSION_STATES = {
  PRE_SESSION : 'presession',
  SESSION : 'session',
  POST_SESSION : 'postsession', 
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      session : SESSION_STATES.PRE_SESSION
    };
  }

  submit = (mins, secs) => {
    this.setState({mins, secs, session : SESSION_STATES.SESSION});
  }

  render(){
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Just Breathe</Text>
            <View style={styles.centre}>
              {this.state.session === SESSION_STATES.PRE_SESSION && <PreSession submit={this.submit}/>}
              {this.state.session === SESSION_STATES.SESSION && <Session mins={this.state.mins} secs={this.state.secs}/>}
            </View>
          </View>
          <View style={{ backgroundColor: "#14335c", height: 70 }}></View>
        </View>
      </React.Fragment>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
  },
  centre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 30,
    color: "white",
  },
  circle: {
    borderRadius: 300,
    height: 300,
    width: 300,
    backgroundColor: "white",
    flex: 0,
    shadowRadius: 100,
    shadowColor: "white",
    shadowOpacity: 1,
  },
  time: {
    fontSize: 40,
  },
});
