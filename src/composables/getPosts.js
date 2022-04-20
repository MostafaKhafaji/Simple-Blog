import { ref } from "@vue/runtime-core";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const showPost = ref(true);
  const getData = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No Data Available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, getData };
};
export default getPosts;
