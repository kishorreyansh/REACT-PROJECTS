import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
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

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    //console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    const addPost = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    };
    dispatchPostList(addPost);
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
  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
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
