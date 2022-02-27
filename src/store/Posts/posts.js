export default {
  state: {
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
  },
  getters: {},
  mutations: {
    NEW_BLOG_POST(state, payload) {
      state.blogHTML = payload;
    },
    UPDATE_BLOG_TITLE(state, payload) {
      state.blogTitle = payload;
    },
    SET_FILE_NAME(state, payload) {
      state.blogPhotoName = payload;
    },
    CREATE_FILE_URL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    OPEN_PHOTO_PREVIEW(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    TOGGLE_EDIT_POST(state, payload) {
      state.editPost = payload;
    },
  },
  actions: {},
};
