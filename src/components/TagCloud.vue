<template>
  <div class="tag-could">
    <h3>Tags</h3>
    <div v-for="tag in newP" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag: tag } }">
        {{ tag }}
      </router-link>
    </div>
    {{ p }}
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
export default {
  props: ["posts"],
  setup(props) {
    let p = ref([]);
    let posts = props.posts;
    const tags = ref([]);
    const tagSet = new Set();
    posts.forEach((element) => {
      element.tags.forEach((ele) => {
        tagSet.add(ele);
      });
    });
    tags.value = [...tagSet];
    for (let i = 0; i < posts.length; i++) {
      for (let j = 0; j < posts[i].tags.length; j++) {
        p.value.push(posts[i].tags[j]);
      }
    }
    // p.value = new Set();
    console.log(p.value);
    const newP = new Set(p.value);
    console.log(newP);
    return { tags, newP };
  },
};
</script>

<style>
.tag-could {
  padding: 10px;
}

.tag-could h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-could div {
  display: inline-block;
  padding: 10px;
}
.tag-could a {
  color: #ccc;
  text-decoration: none;
}
.tag-could a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
