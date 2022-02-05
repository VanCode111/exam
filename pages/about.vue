<template>
  <div class="main">
    <div class="main__block">
      <p class="main__text-block">{{ text }}</p>
      <img :src="urlImg" alt="" class="page-img" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      text: "",
      urlImg: "",
    };
  },
  async asyncData() {
    const data = await axios.get(
      "https://demo-api.vsdev.space/api/brom/about_page"
    );
    return {
      text: data.data.text,
      urlImg: data.data.image,
    };
  },
};
</script>

.
<style lang="scss" scoped>
.main {
  color: black;
  padding: 30px;
  &__text-block {
    width: 70%;
  }
}
.main__block {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
}
.page-img {
  border-radius: 10px;
  width: 30%;
  height: auto;
}
</style>
