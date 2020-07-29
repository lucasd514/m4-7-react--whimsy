import React from "react";
import avatar from "./../../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export function TweetProvider({ children }) {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const date = moment().format("LT - MMM Do, YYYY");

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I? ",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUse: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes,
        numOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
