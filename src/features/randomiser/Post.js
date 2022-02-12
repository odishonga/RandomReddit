import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
    border: #ccc 1px solid;
    border-radius: 2%;
    margin: 2%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-height: 50vh;
    overflow: scroll;
    background: white;
    cursor: pointer;
    &:hover {
        border: #ccc 3px solid;
    }
    &:active {
        color: rgb(135, 138, 140);
    }
`
const Embed = styled.object`
    max-height: 100%;
    max-width: 100%;
    align-self: center;
    border-radius: 2%;
`
const StyledH3 = styled.h3`
    font-size: 80%;
    text-align: left;
    @media only screen and (max-width: 1079px) {
        text-align: center;
    }
`
const StyledP = styled.p`
    font-size: 50%;
    border: #ccc 1px solid;
    color: white;
    background: red;
    border-radius: 2%;
    padding: 1%;
    &:hover {
        border: #ccc 3px solid;
    }
    &:active {
        background: lightgrey;
    }
`

export function Post({subreddit, author, title, src, upvotes, comments, awards, onClick, key}) {

    return (
        <StyledPost onClick={onClick} key={key}>
            <h4 style={{fontSize: '70%'}}>r/{`${subreddit}`} • Posted by {`${author}`}</h4>
            <StyledH3>{title}</StyledH3>
            <Embed data={src}><StyledP>Content only available on Reddit. Click through to see!</StyledP></Embed>
            <p style={{fontSize: '60%'}}>{`${upvotes}`} upvotes | {`${comments}`} comments | {`${awards}`} awards</p>
        </StyledPost>
    )
}