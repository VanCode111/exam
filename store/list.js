export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, list) {
    state.list = list;
  },
};
