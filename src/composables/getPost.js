import { ref } from "vue";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const showPost = ref(true);
  const getData = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, getData };
};
export default getPost;
