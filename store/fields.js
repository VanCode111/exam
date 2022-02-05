import axios from "axios";
export const state = () => ({
  fields: [],
});



export const mutations = {
  add(state, fields) {
    state.fields = { ...fields };
    console.log(state.fields.fields);
  },
};
