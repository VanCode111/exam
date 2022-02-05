<template>
  <button class="button" @click="clickButton">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
  methods: {
    clickButton() {
      this.$emit("clicks");
    },
  },
};
</script>

<style scoped>
.button {
  background-color: black;
  padding: 5px 15px;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
  border-radius: 10px;
  outline: none;
  border: none;
}
</style>
