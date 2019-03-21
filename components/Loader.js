import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator />
  </Container>
);