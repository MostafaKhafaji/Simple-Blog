<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="">Title:</label>
      <input type="text" required v-model="title" />
      <label for="">Content:</label>
      <textarea required v-model="body"></textarea>
      <label for="">Tags (hit enter to add a tag)</label>
      <input
        @keydown.enter.prevent="handleTag"
        type="text"
        v-model.trim="tag"
      />
      <div v-for="tag in tags" :key="tag" @click="removeTag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();
    console.log(router);
    const handleTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const removeTag = (e) => {
      return (tags.value = tags.value.filter((ele) => {
        return !(ele === e.target.textContent.substring(2));
      }));
    };
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      await fetch(" http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      router.push("/");
    };

    return { title, body, tag, tags, handleTag, removeTag, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  position: absolute;
  background: #ff8800;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: -30px;
  padding-right: 40px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:hover {
  box-shadow: 0px 2px 26px 0px rgba(255, 136, 0, 0.75);
  -webkit-box-shadow: 0px 2px 26px 0px rgba(255, 136, 0, 0.75);
  -moz-box-shadow: 0px 2px 26px 0px rgba(255, 136, 0, 0.75);
}
button:active {
  color: rgb(88, 88, 88);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  padding: 8px;
  border-radius: 20px;
  background: #ddd;
  font-size: 14px;
  cursor: pointer;
}
</style>
