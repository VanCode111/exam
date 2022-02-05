<template>
  <div class="left-menu">
    <nav class="left-menu_menu">
      <ul class="left-menu__list">
        <li class="left-menu__item"><nuxt-link to="/">Главная</nuxt-link></li>
        <li class="left-menu__item">
          <nuxt-link to="/about">О нас</nuxt-link>
        </li>
        <li class="left-menu__item">
          <nuxt-link to="/list">Список</nuxt-link>
        </li>
      </ul>
    </nav>
    <widget v-if="$store.state.widget.widget" />
  </div>
</template>

<script>
import widget from "./widget.vue";
export default {
  components: {
    widget,
  },
};
</script>

<style lang="scss" scoped>
.left-menu {
  padding: 15px;
  &__list {
    list-style: none;
    padding: 15px;
  }
  &__item {
    margin-bottom: 10px;
  }
  & a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
  .vidget {
    background-color: black;
    color: white;
    padding: 15px;
    margin: 30px;
    width: 160px;
    border-radius: 18px;
  }
}
</style>
