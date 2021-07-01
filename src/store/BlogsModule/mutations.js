export default {
  blogsList(state, blogs) {
    return (state.blogsList = blogs);
  },
  SINGLE_BLOG(state, SingleBlog) {
    state.singleBlog = SingleBlog;
  },
};
