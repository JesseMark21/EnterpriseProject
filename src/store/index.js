// store/index.js (or store/index.ts)

import { createStore } from "vuex";

const store = createStore({
  state: {
    favoriteDishes: [],
  },
  mutations: {
    ADD_TO_FAVORITES(state, dish) {
      state.favoriteDishes.push(dish);
    },
    REMOVE_FROM_FAVORITES(state, dishToRemove) {
      state.favoriteDishes = state.favoriteDishes.filter(
        (dish) => dish !== dishToRemove
      );
    }
  },
  actions: {
    addToFavorites({ commit }, dish) {
      commit("ADD_TO_FAVORITES", dish);
    },
    removeFromFavorites({ commit }, dish) {
      commit("REMOVE_FROM_FAVORITES", dish);
    },
  },
  getters: {
    isDishFavorite: (state) => (dish) => {
      return state.favoriteDishes.some(
        (d) => d.name === dish.name && d.restaurantName === dish.restaurantName
      );
    },
    getFavoriteDishes: (state) => {
      return state.favoriteDishes;
    },
  },
});

export default store;
