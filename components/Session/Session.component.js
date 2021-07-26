import React from 'react';
import Circle from '../../UI/Circle/Circle.component';
import { StyleSheet, Button, Text } from 'react-native'

export default class Session extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      go : false,
    };
  }

  componentDidMount(){
      const { secs, mins } = this.props;
      const difference = (60 * 1000 * mins) + (1000 * secs)
      this.setState({difference, initialTime : difference});
  }

  onBeginSession = () => {
    const currentTime = Date.parse(new Date());
    const endTime = new Date(currentTime + this.state.difference);
    const interval = setInterval(this.calculateRemainingTime, 1000);
    this.setState({endTime, interval});
  }

  calculateRemainingTime = () => {
    const currentTime = Date.parse(new Date());
    const difference = +this.state.endTime - +currentTime
    this.setState({difference});
  }

  pauseTimer = () => {
    clearInterval(this.state.interval);
  }

  millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render(){
    const { go, difference } = this.state
    return (
              <Circle>
                <Text style={styles.time}>
                  {this.millisToMinutesAndSeconds(difference)}
                </Text>
                {!go ? (
                  <Button
                    onPress={() => {
                      this.onBeginSession();
                      this.setState({go : true})
                    }}
                    color="black"
                    title="begin"
                  ></Button>
                ) : (
                  <Button
                    onPress={() => {
                      this.pauseTimer();
                      this.setState({go : false})
                    }}
                    color="black"
                    title="stop"
                  ></Button>
                )}
              </Circle>
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
