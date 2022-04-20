<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <Postlist :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Postlist from "../components/Postlist.vue";
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

import { computed, onMounted, ref } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Postlist, Spinner, TagCloud },
  setup() {
    const { posts, error, getData } = getPosts();
    getData();
    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
