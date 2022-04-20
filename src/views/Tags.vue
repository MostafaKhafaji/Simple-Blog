<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <Postlist :posts="postsWithTag" />
      <TagCloud :posts="postsWithTag" />
      <div class="no-posts" v-if="postsWithTag.length === 0">
        No Posts Avaiable For This Tag
      </div>
    </div>

    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import Postlist from "../components/Postlist.vue";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  components: { Postlist, Spinner, TagCloud },
  props: ["tag"],
  setup(props) {
    const { posts, error, getData } = getPosts();
    getData();
    const route = useRoute();
    const postsWithTag = computed(() => {
      return posts.value.filter((p) => {
        return p.tags.includes(props.tag);
      });
    });
    return { postsWithTag, error, posts };
  },
};
</script>

<style>
.no-posts {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 800;
  font-size: 70px;
  text-align: center;
  color: #eee;
}
</style>
