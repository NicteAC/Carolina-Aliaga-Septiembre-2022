import { defineStore } from "pinia";
import axios from "axios";

export const randomCharacterStore = defineStore("randomCharacter", {
  state: () => ({
    character: [],
  }),
  getters: {
    getCharacter(state) {
      return state.character;
    },
  },
  actions: {
    async fetchCharacter() {
      try {
        let id = parseInt(Math.random() * 100);
        const data = await axios.get(
          `https://breakingbadapi.com/api/characters/${id}`
        );
        this.character = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
