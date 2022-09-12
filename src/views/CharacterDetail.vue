<script setup>
import { onMounted, computed, ref } from "vue";
import { useUserStore } from "../stores/users";
const props = defineProps(["id"]);
const store = useUserStore();
const pj = computed(() => {
  return store.characters.filter((character) => character.char_id == props.id);
});
const character = ref(pj.value[0]);
const getQuote = computed(() => {
  return store.quotes.filter((quote) => quote.author == character.value.name);
});
const getAge = computed(() => {
  const date = new Date();
  const birthday = new Date(character.value.birthday);
  const age = date.getFullYear() - birthday.getFullYear();
  return age;
});
const quote = computed(() => {
  return getQuote.value[Math.floor(Math.random() * getQuote.value.length)]
    .quote;
});
onMounted(() => {
  store.getQuotes();
});
</script>

<style></style>
<template>
  <main class="character-main">
    <h1 class="character-main__name text-success">{{ character.name }}</h1>
    <div class="d-lg-flex justify-content-lg-center">
      <div class="">
        <img
          class="character-main__img"
          :src="character.img"
          :alt="character.name"
        />
      </div>
      <div class="ms-4 mt-4 mt-sm-0">
        <p class="character-main__nick">Nickname: {{ character.nickname }}</p>
        <p class="character-main__age">
          Edad: {{ getAge != NaN ? getAge : "Desconocida" }}
        </p>
        <p class="character-main__status">
          Status:
          <span
            :class="{
              'character-main__status--alive': character.status == 'Alive',
              'character-main__status--dead': character.status == 'Deceased',
              'character-main__status--unknown':
                character.status == 'Presumed dead',
            }"
            >{{ character.status }}</span
          >
        </p>
        <p class="character-main__ocupation">
          Ocupacion:
          <span v-for="(ocupation, i) in character.occupation" :key="i">{{
            ocupation
          }}</span>
        </p>
        <p class="character-main__quote">
          Cita:
          <span class="character-main__quote--text"
            >"{{ getQuote.length == 0 ? "." : quote }}"</span
          >
        </p>
      </div>
    </div>
  </main>
</template>
