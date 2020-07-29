import React from 'react';
import moment from 'moment';

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children}) => {
    const date = moment().format('LT - MMM Do, YYYY');

    const [numOfLikes, setNumOfLikes] = React.useState(460);
    const [numOfRetweets, setNumOfRetweets] = React.useState(65);
    const [isLiked, setIsLiked] = React.useState(false);
    const [isRetweeted, setIsRetweeted] = React.useState(false);
    
    return <TweetContext.Provider value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        date: date,
        numOfLikes,
        numOfRetweets,
        isLiked,
        isRetweeted
    }}>
        {children}
    </TweetContext.Provider>;
}