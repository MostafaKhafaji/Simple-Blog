<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <Singlepost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import Singlepost from "./SinglePost.vue";
export default {
  components: { Singlepost },
  props: ["posts"],
  setup(props) {},
};
</script>

<style></style>
