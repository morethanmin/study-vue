<template>
  <input type="text" v-bind:value="value" v-on="listeners" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    listeners() {
      console.log(this.$listeners);
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style></style>
