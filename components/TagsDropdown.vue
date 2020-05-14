<template>
  <div class="dropdown">
    <button
      class="btn btn-primary btn-sm dropdown-toggle"
      type="button"
      id="add-new-tag-btn"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      :disabled="tags.length == 0"
    >
      Nuevo
    </button>
    <div class="dropdown-menu" aria-labelledby="add-new-tag-btn">
      <a
        v-for="tag in tags"
        :key="tag.id"
        class="dropdown-item"
        href="#"
        @click="$emit('add-tag', tag)"
      >
        <i class="fe fe-plus-circle mr-3"></i>{{ tag.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: [],
    },
  },
};
</script>
