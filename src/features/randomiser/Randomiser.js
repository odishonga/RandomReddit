import logo from '../../logo.svg';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRandomPosts, isLoading, getRandomPosts } from './randomiserSlice';
import { Post } from './Post';
import styled, {keyframes} from 'styled-components';

export function Randomiser() {
    const dispatch = useDispatch();
    const postsLoading = useSelector(isLoading);
    const [randomPosts, setRandomPosts] = useState(useSelector(selectRandomPosts));
    let newPosts = useSelector(selectRandomPosts);
    const spin = keyframes`
        100% { transform: rotate(360deg); }
    `
    const Loading = styled.img`
        animation: ${spin} 1s linear infinite;
        max-height: 40vmin;
    `
    const PostsContainer = styled.div`
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 1079px) {
            flex-direction: column;
        }
    `

    useEffect(
        ()=> setRandomPosts(newPosts),
        [dispatch, newPosts]
    );

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getRandomPosts());
    }

    return (
        <>
            <div onClick={handleClick}>
                {postsLoading ? <Loading src={logo} alt='logo' /> : <img src={logo} className="App-logo" alt="logo" />}
            </div>
            <PostsContainer >
                {randomPosts.map((post) => 
                    (
                        <Post
                            key={post.data.id}
                            onClick={() => {window.open(`https://www.reddit.com/${post.data.permalink}`)}}
                            subreddit={post.data.subreddit}
                            author={post.data.author}
                            title={post.data.title}
                            src={post.data.url}
                            upvotes={post.data.ups}
                            comments={post.data.num_comments}
                            awards={post.data.total_awards_received}
                        />
                    )
                )}
            </PostsContainer>
        </>
    )
}