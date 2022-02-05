<template>
  <div class="card">
    <v-card class="mx-auto" max-width="400" v-if="type == 'car'">
      <v-img class="white--text align-end" height="200px" src="car_img.jpg">
        <v-card-title class="title">{{ model }} </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> {{ price }} ₽ </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Город: {{ city }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Адрес: {{ address }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Телефон: {{ phone }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Мощность двигателя: {{ engine_power }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Тип кузова: {{ car_type }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Объем двигателя: {{ engine_volume }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Открыть</v-btn>
      </v-card-actions>
    </v-card>
    <v-card light v-else class="mx-auto apartment" max-width="400">
      <v-img class="white--text align-end" height="200px" src="home_img.jpg">
        <v-card-title class="title">{{ address }} </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> {{ price }} ₽ </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Город: {{ city }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Адрес: {{ address }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Телефон: {{ phone }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Количество комнат: {{ rooms }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Площадь: {{ square }}</div>
      </v-card-text>
      <v-card-text class="text--primary">
        <div>Квартира</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Открыть</v-btn>
      </v-card-actions>
    </v-card>
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
    square: String,
    rooms: String,
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

.title {
  color: #ff9800;
}
.apartment {
  background-color: #9cb8ff;
}
.car {
  background-color: #75ffe6;
}
</style>
