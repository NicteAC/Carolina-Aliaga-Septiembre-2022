<script setup>
import { onMounted, computed } from "vue";
//import users store
import { useUserStore } from "../stores/users";
import CharacterCard from "../components/CharacterCard.vue";
// declare store variable
const store = useUserStore();
const breakingBadCharacters = computed(() => {
  return store.breakingBadCharacters.concat(store.bothCharacters);
});
onMounted(() => {
  store.getData();
});
</script>

<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col" v-for="c in breakingBadCharacters" :key="c.char_id">
          <CharacterCard :character="c" />
        </div>
      </div>
    </div>
  </div>
</template>
