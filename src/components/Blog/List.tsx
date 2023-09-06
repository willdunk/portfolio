import React from 'react';
import Post from './Post';
import useGet from '../../hooks/get';

const POSTS_SOURCE_URI = "https://api.github.com/repos/willdunk/blog/contents/"

const List: React.FC<{}> = () => {
  const { data, loading, error } = useGet(POSTS_SOURCE_URI);

  if (loading) {
    return loading.toString();
  }
  if (Array.isArray(data)) {
    return data.map((post, i) => <Post key={i} source={post.download_url} />);
  }

  return <></>
}

export default List