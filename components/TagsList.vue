<template>
  <div class="row" v-if="tags.length">
    <tags-list-item
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @remove-tag="$emit('remove-tag', tag)"
    ></tags-list-item>
  </div>
  <div class="row" v-else>
    <div class="col">
      <h1>
        <span class="badge badge-light">Sin etiquetas</span>
      </h1>
    </div>
  </div>
</template>

<script>
import TagsListItemVue from "./TagsListItem.vue";

export default {
  components: {
    "tags-list-item": TagsListItemVue
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>
