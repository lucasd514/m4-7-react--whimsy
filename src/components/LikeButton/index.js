import React, { useContext } from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";

import { TweetContext } from "../Tweet/TweetContext";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLikedByCurrentUser } = useContext(TweetContext);

  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser ? (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
      {isLikedByCurrentUser && <PoppingCircle color="pink" />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
