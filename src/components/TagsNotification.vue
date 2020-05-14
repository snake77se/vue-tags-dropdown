<template>
  <div class="row">
    <div class="col">
      <span class="font-size-sm text-muted">
        <i class="fas fa-spinner fa-spin mr-2"></i>
        <span class="font-size-sm">{{ text }}...</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
