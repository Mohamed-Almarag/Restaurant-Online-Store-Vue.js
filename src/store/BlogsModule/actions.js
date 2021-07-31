// import blogs from "@/api/blogs";
import instance from "../../api/mockBlogs";

export default {
  getAllBlogsList({ commit, state }) {
    return new Promise((resolve, reject) => {
      instance
        .get("/blogs")
        .then((response) => {
          commit("blogsList", state.blogsList.concat(response.data.blogs));
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
          // window.console.log(response);
          commit("SINGLE_BLOG", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

// getAllBlogsList({ commit, state }) {
//   // getAllBlogsList({ commit, state }, page) {
//   return new Promise((resolve, reject) => {
//     // blogs
//     //   .allBlogs(page)
//     instance
//       .get("/blogs")
//       .then((response) => {
//         commit("blogsList", state.blogsList.concat(response.data));
//         window.console.log(response.data);
//         resolve(response);
//       })
//       .catch((error) => {
//         window.console.log(error);
//         reject(error);
//       });
//   });
// },
