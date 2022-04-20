<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">
      {{ post.body }}
    </p>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "../components/Spinner.vue";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const { post, error, getData } = getPost(props.id);
    getData();
    return { post, error };
  },
};
</script>

<style></style>
