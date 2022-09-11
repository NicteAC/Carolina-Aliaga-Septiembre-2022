<script setup>
import { onMounted, computed, reactive, ref } from "vue";
//import users store
import { useUserStore } from "../stores/users";
import CharacterCard from "../components/CharacterCard.vue";
// declare store variable
const store = useUserStore();
const getRandomCharacter = computed(() => {
  return store.getRandomCharacter;
});
const show_spinner = ref(true);
const search = ref("");
const state = reactive({
  search,
});
const prueba = computed(() => {
  return store.characters.filter((character) =>
    character.name.toLowerCase().includes(state.search.toLowerCase())
  );
});
onMounted(() => {
  store.getData();
  setTimeout(() => (show_spinner.value = false), 2000);
});
</script>

<template>
  <main class="home-section">
    <div class="input-search">
      <input
        type="text"
        placeholder="Busca un personaje por nombre"
        class="home-section__input"
        v-model="state.search"
      />
      <img
        class="home-section__input-img"
        src="@/assets/img/buscador.svg"
        alt=""
      />
    </div>
    <div v-if="show_spinner" class="">
      <img class="spinner" src="@/assets/img/spinner.gif" alt="loading_img" />
    </div>
    <div v-else class="">
      <div v-show="state.search == ''" class="container">
        <div class="row">
          <p class="text-center text-success">
            Tu personaje random del momento es:
          </p>
          <div class="col" v-for="c in getRandomCharacter" :key="c.char_id">
            <CharacterCard :character="c" />
          </div>
        </div>
      </div>
      <div v-show="state.search != ''" class="container">
        <div class="row">
          <div class="col" v-for="c in prueba" :key="c.char_id">
            <CharacterCard :character="c" />
          </div>
        </div>
      </div>
      <div v-show="prueba.length == 0">
        <h2 class="no-info__title">Personaje no encontrado</h2>
        <p class="no-info__text">k</p>
      </div>
    </div>
  </main>
</template>
