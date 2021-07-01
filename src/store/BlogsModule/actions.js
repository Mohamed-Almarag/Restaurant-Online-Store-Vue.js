import blogs from "@/api/blogs";

export default {
  getAllBlogsList({ commit, state }, page) {
    return new Promise((resolve, reject) => {
      blogs
        .allBlogs(page)
        .then((response) => {
          commit("blogsList", state.blogsList.concat(response.data));
          resolve(response);
        })
        .catch((error) => {
          window.console.log(error);
          reject(error);
        });
    });
  },
  singleBlogPost({ commit }, singleBlogId) {
    return new Promise((resolve, reject) => {
      blogs
        .singleBlog(singleBlogId)
        .then((response) => {
          commit("SINGLE_BLOG", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
