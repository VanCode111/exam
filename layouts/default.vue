<template>
  <div class="app">
    <NavBar />
    <main class="content">
      <div class="app__left">
        <LeftMenu />
      </div>
      <div class="app__right">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import leftMenu from "../components/leftMenu.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "DefaultLayout",
  components: {
    leftMenu,
    NavBar,
  },
  async mounted() {
    const data = await axios.get(
      "https://demo-api.vsdev.space/api/brom/left_widget"
    );
    this.$store.commit("widget/add", data.data);
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
.content {
  display: flex;
  min-height: calc(100vh - 60px);
}
.app {
  &__right {
    flex: 100%;
    background-color: #f6f6f6;
  }
}
</style>
