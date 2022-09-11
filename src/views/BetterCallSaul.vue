<script setup>
import { onMounted, computed } from "vue";
//import users store
import { useUserStore } from "../stores/users";
import CharacterCard from "../components/CharacterCard.vue";
// declare store variable
const store = useUserStore();
const characters = computed(() => {
  return store.characters;
});
const betterCallSaulCharacters = computed(() => {
  return store.betterCallSaulCharacters.concat(store.bothCharacters);
});
onMounted(() => {
  store.getData();
});
</script>

<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div
          class="col"
          v-for="user in betterCallSaulCharacters"
          :key="user.char_id"
        >
          <CharacterCard :character="user" />
        </div>
      </div>
    </div>
  </div>
</template>
