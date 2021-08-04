// import blogs from "@/api/blogs";
import instance from "../../api/mockBlogs";

export default {
  getAllBlogsList({ commit }) {
    return new Promise((resolve, reject) => {
      instance
        .get("/blogs")
        .then((response) => {
          commit("blogsList", response.data.blogs);
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
      instance
        .get(`/apps/user/users/${singleBlogId}`)
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
