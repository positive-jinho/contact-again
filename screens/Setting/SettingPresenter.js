import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const Text = styled.Text``;

const SettingPresenter = ({ loading }) =>
  !loading ? <Loader /> : <Text>설정 페이지</Text>;

SettingPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default SettingPresenter;
