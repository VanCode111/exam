<template>
  <header class="header">
    <div class="header__inner">
      <h5 class="logo">Brom.ru</h5>
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
}
</style>
