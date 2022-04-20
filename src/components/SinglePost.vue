<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <template v-for="tag in post.tags" :key="tag">
      <span>#{{ tag }}</span>
    </template>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      if (props.post.body.length >= 75) {
        return props.post.body.substring(0, 75) + "...";
      } else {
        return props.post.body;
      }
    });

    return { snippet };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h3::before {
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
</style>
