import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";

const Bold = styled.span`
  font-weight: bold;
  padding: 5px;
`;

const Stat = () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext);

  return (
    <div>
      <Bold>{numOfLikes}</Bold>Retweets <Bold>{numOfRetweets}</Bold>Likes
    </div>
  );
};

export default Stat;
