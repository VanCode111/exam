<template>
  <div class="list-page">
    <Button text="Открыть форму" @clicks="toggleForm" />
    <FormComponent v-if="formOpen" />
    <list-component />
  </div>
</template>

<script>
import axios from "axios";
import Button from "../components/Button.vue";
import ListComponent from "../components/listComponent.vue";
import FormComponent from "../components/FormComponent.vue";
export default {
  name: "ListPage",
  components: {
    ListComponent,
    FormComponent,
    Button,
  },
  data() {
    return {
      formOpen: false,
    };
  },
  async mounted() {
    const data = await axios.get("https://demo-api.vsdev.space/api/brom/sales");
    this.$store.commit("list/add", data.data);
    const datas = await axios.get(
      "https://demo-api.vsdev.space/api/brom/sales/form"
    );
    this.$store.commit("fields/add", datas.data);
    console.log("afassfasf");
  },
  methods: {
    toggleForm() {
      this.formOpen = !this.formOpen;
      console.log(this.formOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-page {
  padding: 30px;
}
</style>
