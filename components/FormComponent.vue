<template>
  <form action="POST" class="form">
    <v-select
      v-model="type"
      item-text="state"
      item-value="abbr"
      label="Select"
      persistent-hint
      return-object
      single-line
    ></v-select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      city: "",
      address: "",
      phone: "",
      price: "",
    };
  },
  methods: {
    addObject() {},
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__input {
    width: 100%;
  }
}
</style>
