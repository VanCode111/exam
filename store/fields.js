export const state = () => ({
  fields: [],
});

export const mutations = {
  add(state, fields) {
    state.fields = fields.fields;
    console.log(state.list);
  },
};
