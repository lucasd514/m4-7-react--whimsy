import React from "react";
import avatar from "./../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export function TweetProvider({ children }) {
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUse: false,
        isLikedByCurrentUser: false,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
