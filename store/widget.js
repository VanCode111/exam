import axios from "axios";
export const state = () => ({
  widget: [],
});
export const actions = {
  loadWidget({ commit }) {
    axios
      .get("https://demo-api.vsdev.space/api/brom/left_widget")
      .then((r) => r.data)
      .then((widget) => {
        commit("SET_WIDGET", widget);
      });
  },
};

export const mutations = {
  add(state, widget) {
    state.widget = widget;
  },
  SET_WIDGET(state, widget) {
    state.widget = widget;
  },
};
