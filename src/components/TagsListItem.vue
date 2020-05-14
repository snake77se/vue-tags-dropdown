<template>
  <div class="col-4">
    <div class="badge badge-light tag-item mb-2">
      <i class="fe fe-tag ml-2"></i>
      <span class="mx-1">{{ tag.name }}</span>
      <a href="#" class="link mr-1" @click="$emit('remove-tag', tag)">
        <i class="fe fe-x"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
};
</script>
