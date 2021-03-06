import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import Layout from "../../constants/Layout";

const LastMessage = styled.Text`
  font-size: 12px;
  margin-left: 55px;
  color: #999999;
`;

const ChatListLastMessage = ({ lastMessage }) => (
  <LastMessage>{lastMessage}</LastMessage>
);

ChatListLastMessage.propTypes = {
  lastMessage: PropTypes.string.isRequired
};

export default ChatListLastMessage;
