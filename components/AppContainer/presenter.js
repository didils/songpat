import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar } from "react-native";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  render() {
    const { isLoggedIn } = this.props;
    return (
      <View>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          <Text>로그인되었음</Text>
        ) : (
          <Text>로그인 해 주세요!</Text>
        )}
      </View>
    );
  }
}

export default AppContainer;
