import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      data: null,
      favorites: 0,
    };
  },
  // Set the fetched data in the store
  mutations: {
    setData(state, data) {
      state.data = data; 
    },
    setFavorites(state, favorites) {
      state.favorites = favorites; 
    },
  },
  actions: {
    fetchData({ commit }) {
      const storedData = localStorage.getItem('data');

      if (storedData) {
        commit('setData', JSON.parse(storedData)); // Set the data from localStorage
      } else {
        axios
          .get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=44a18aede7485fab87072f38693a3d55&hash=a3b32d5c16fab4925172243466b57122') // Replace with your API endpoint
          .then(response => {
            const data = response.data;
            localStorage.setItem('data', JSON.stringify(data)); // Store the data in localStorage
            commit('setData', data); // Call the mutation to store the data
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  },
});

export default store;

