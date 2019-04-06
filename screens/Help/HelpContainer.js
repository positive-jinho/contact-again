import React from "react";
import HelpPresenter from "./HelpPresenter";

export default class extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {}

  render() {
    const { loading } = this.state;
    return <HelpPresenter loading={loading} />;
  }
}