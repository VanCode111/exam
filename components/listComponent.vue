<template>
  <div class="list-component">
    <div class="list-component__grid">
      <ListElement
        :v-if="list.length > 0"
        v-for="item in $store.state.list.list"
        :key="item.id"
        :type="item.type"
        :url="item.image"
        :city="item.city"
        :address="item.city"
        :phone="item.phone"
        :price="item.price"
        :model="item.model"
        :square="item.square"
        :rooms="item.rooms"
        :car_type="item.car_type"
        :engine_volume="item.engine_volume"
        :engine_power="item.engine_power"
      />
    </div>
  </div>
</template>

<script>
import ListElement from "./ListElement.vue";

export default {
  components: {
    ListElement,
  },
  mounted() {
    this.list = this.$store.state.list.list;
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.list-component {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
}
</style>
