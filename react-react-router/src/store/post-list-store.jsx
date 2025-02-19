import { createContext, useState, useEffect } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postList: [],
  //fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  //const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    const deletePost = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(deletePost);
  };

  /*useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);*/

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

/*const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Learning React",
    body: "Learning React Concepts such as Context API and use Reducer and many more.",
    reactions: 2,
    userId: "user-1",
    tags: ["react", "hooks"],
  },
  {
    id: "2",
    title: "Learning Spring Boot",
    body: "Learning Spring Boot Concepts such as Context API and use Reducer and many more.",
    reactions: 12,
    userId: "user-2",
    tags: ["spring", "boot"],
  },
];*/

export default PostListProvider;
