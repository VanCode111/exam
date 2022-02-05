<template>
  <header class="header">
    <div class="header__inner">
      <h5 class="logo">Brom.ru</h5>
      <p class="second-title">Квартиры и машины</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: black;
  &__inner {
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 30px;
  }
  .logo {
    color: white;
    font-size: 20px;
  }
  .second-title {
    color: white;
    margin: 0;
    margin-left: 20px;
  }
}
</style>
