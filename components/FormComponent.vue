<template>
  <v-form lazy-validation ref="form" v-if="$store.state.fields.fields.fields">
    <div
      class="input"
      v-for="field in $store.state.fields.fields.fields
        ? Object.entries($store.state.fields.fields.fields)
        : []"
      :key="field[0]"
    >
      <v-select
        v-model="filledFields[field[0]]"
        v-if="field[1].type == 'select'"
        :items="field[1].values"
        :label="field[1].title"
        :rules="nameRules"
        solo
        required
      ></v-select>
      <v-text-field
        v-else
        required
        :rules="nameRules"
        v-model="filledFields[field[0]]"
        :label="field[1].title"
        solo
      ></v-text-field>
    </div>
    <div
      class="input"
      v-for="field in $store.state.fields.fields.reference_fields &&
      filledFields.type
        ? Object.entries(
            $store.state.fields.fields.reference_fields[
              `type.${filledFields.type}`
            ]
          )
        : []"
      :key="field[0]"
    >
      <v-select
        v-model="filledFields[field[0]]"
        v-if="field[1].type == 'select'"
        :items="field[1].values"
        :label="field[1].title"
        :rules="nameRules"
        solo
        required
      ></v-select>
      <v-text-field
        v-else
        required
        :rules="nameRules"
        v-model="filledFields[field[0]]"
        :label="field[1].title"
        solo
      ></v-text-field>
    </div>
    <v-btn @click="sendForm" class="btn">Добавить</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fields: null,
      nameRules: [(v) => !!v || "Обязательное поле"],
      filledFields: {
        type: "",
        city: "",
        address: "",
        phone: "",
        price: "",
        rooms: "",
        square: "",
        engine_power: "",
        engine_volume: "",
        car_type: "",
        model: "",
      },
    };
  },
  computed: {},
  mounted() {
    this.fields = this.$store.state.fields.fields;
    console.log(this.fields);
  },
  methods: {
    handleFormSubmit(e) {
      e.preventDefault();
    },
    async sendForm() {
      const res = this.$refs.form.validate();
      if (res) {
        const sendForm = await axios.post(
          "https://demo-api.vsdev.space/api/brom/sales",
          this.filledFields
        );
        console.log(sendForm);
        this.$store.dispatch("list/loadList");
        this.$store.dispatch("widget/loadWidget");
        this.$refs.form.reset();
      }
    },

    async addPost() {
      console.log(this.type, this.city, this.address, this.phone, this.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__input {
    width: 100%;
  }
}
.btn {
  margin-bottom: 30px;
}
#inspire {
  background-color: transparent;
  min-height: 0 !important;
  height: auto;
}
</style>
