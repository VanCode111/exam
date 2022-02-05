<template>
  <div :class="'list-element ' + (type == 'apartment' ? 'apartment' : 'car')">
    <img :src="url" alt="" />
    <p v-if="type">{{ type == "apartment" ? "Квартира" : "Машина" }}</p>
    <p v-if="city">Город: {{ city }}</p>
    <p v-if="address">Адрес: {{ address }}</p>
    <p v-if="phone">Телефон: {{ phone }}</p>
    <p v-if="price">Цена: {{ price }}</p>
    <p v-if="model">Модель: {{ model }}</p>
    <p v-if="car_type">Тип машины: {{ car_type }}</p>
    <p v-if="engine_volume">Громкость мотора: {{ engine_volume }}</p>
    <p v-if="engine_power">Сила мотора: {{ engine_power }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    type: String,
    city: String,
    address: String,
    phone: String,
    price: String,
    model: String,
    car_type: String,
    engine_volume: String,
    engine_power: String,
  },
};
</script>

<style lang="scss" scoped>
.list-element {
  border-radius: 10px;
  padding: 15px;
  & p {
    margin-bottom: 15px;
  }
}
.apartment {
  background-color: #9cb8ff;
}
.car {
  background-color: #75ffe6;
}
</style>
