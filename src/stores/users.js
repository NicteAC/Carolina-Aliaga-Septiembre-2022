import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    characters: [],
    quotes: [],
  }),
  getters: {
    breakingBadCharacters(state) {
      return state.characters.filter((pj) => pj.category === "Breaking Bad");
    },
    betterCallSaulCharacters(state) {
      return state.characters.filter(
        (pj) => pj.category === "Better Call Saul"
      );
    },
    bothCharacters(state) {
      return state.characters.filter(
        (pj) => pj.category === "Breaking Bad, Better Call Saul"
      );
    },
    getRandomCharacter(state) {
      const inicio = 1;
      const fin = 62;
      const id = inicio + Math.floor(Math.random() * fin);
      return state.characters.filter((character) => character.char_id == id);
    },
  },
  mutations: {},
  actions: {
    async getData() {
      try {
        const data = await axios.get(
          `https://breakingbadapi.com/api/characters/`
        );
        this.characters = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getQuotes() {
      try {
        const data = await axios.get(`https://breakingbadapi.com/api/quotes`);
        this.quotes = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
