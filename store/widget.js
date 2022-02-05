export const state = () => ({
  widget: [],
});

export const mutations = {
  add(state, widget) {
    state.widget = widget;
  },
};
