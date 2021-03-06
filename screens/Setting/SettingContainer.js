import React from "react";
import SettingPresenter from "./SettingPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);

    const { navigation } = props;

    this.state = {
      loading: true,
      navigation
    };
  }

  render() {
    const { loading, navigation } = this.state;
    return <SettingPresenter loading={loading} navigation={navigation} />;
  }
}
