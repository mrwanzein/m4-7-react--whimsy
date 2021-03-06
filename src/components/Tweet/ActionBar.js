import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import PoppingCircle from '../LikeButton/PoppingCircle';

import {TweetContext} from "../TweetContext";

const ActionBar = () => {
  const { 
    isLiked, isRetweeted, numOfLikes, setNumOfLikes, handleToggleLike, setIsLiked,
    numOfRetweets, setNumOfRetweets, setIsRetweeted, handleToggleRetweet
  } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={() => {
        handleToggleRetweet(isRetweeted, setIsRetweeted, numOfRetweets, setNumOfRetweets);
      }}>
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={() => {
        handleToggleLike(isLiked, setIsLiked, numOfLikes, setNumOfLikes);
      }}>
        <LikeButton isLiked={isLiked} />
        {isLiked && <PoppingCircle size={40} color="#E790F7" />}
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
