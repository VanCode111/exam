<template>
  <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="left_widget_img.jpg"
    >
    </v-img>

    <v-card-text class="text--primary">
      <p>Машин: {{ $store.state.widget.widget.cars }}</p>
      <p>Квартир: {{ $store.state.widget.widget.apartments }}</p>
    </v-card-text>
  </v-card>
</template>
