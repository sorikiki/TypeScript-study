import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { getPostsThunk } from '../modules/posts/thunks';
import PostList from './PostList';

const PostListContainer = () => {
    const { loading, data, error } = useSelector((state : RootState) => state.postReducer.posts);
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getPostsThunk());
    }, [dispatch])

    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>오류발생</div>
    if(!data) return <div>정보 없음</div>

    return <PostList postList={data} />
}
export default PostListContainer;