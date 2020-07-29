import React from "react";
import styled from "styled-components";

import {TweetContext} from "../TweetContext";

const Stat = () => {
    const { numOfLikes, numOfRetweets } = React.useContext(TweetContext);

    return (
        <Stats>
            <span>
                <Bold>{numOfRetweets}</Bold> <Light>Retweets</Light>
                <Bold>{numOfLikes}</Bold> <Light>Likes</Light>
            </span>
        </Stats>
    )
}

const Stats = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Light = styled.span`
    color: rgb(101, 119, 134);
    margin-right: 10px;
`;

export default Stat;