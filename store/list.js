import axios from "axios";
export const state = () => ({
  list: [],
});

export const actions = {
  loadList({ commit }) {
    axios
      .get("https://demo-api.vsdev.space/api/brom/sales")
      .then((r) => r.data)
      .then((list) => {
        commit("SET_LIST", list);
      });
  },
};

export const mutations = {
  loadList(state, list) {
    state.list = list;
  },

  SET_LIST(state, list) {
    state.list = list;
  },
};
