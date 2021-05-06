<template>
  <input type="text" v-model="var1" @keypress.enter="handleEnter" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      var1: "",
    };
  },
  methods: {
    handleEnter() {
      this.$emit("add", var1);
    },
  },
  mounted() {
    this.var1 = this.value;
  },
};
</script>

<style></style>
