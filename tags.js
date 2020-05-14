import Vue from "vue";
import TagsVue from "./tags.vue";

console.log("Tags.js running.");

new Vue({
  el: ".main-content-vue",
  components: {
    "vue-tags": TagsVue,
  },
});
