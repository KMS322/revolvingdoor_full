export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "door",
      },
      content: "내용",
      Images: [
        {
          src: "/iamges/resume_s1_img.png",
        },
        {
          src: "/iamges/resume_s1_img.png",
        },
        {
          src: "/iamges/resume_s1_img.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "revolving1",
          },
          content: "내용1",
        },
        {
          User: {
            nickname: "revolving2",
          },
          content: "내용2",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "더비유저",
  },
  Images: [],
  Comments: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
