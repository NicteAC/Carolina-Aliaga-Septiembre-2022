<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({ character: Object });
const viewDetail = (character) => {
  if (
    character.category == "Breaking Bad" ||
    character.category === "Breaking Bad, Better Call Saul"
  ) {
    router.push({
      name: "breaking-bad-detail",
      params: {
        id: character.char_id,
      },
    });
  } else if (
    character.category === "Better Call Saul" ||
    character.category === "Breaking Bad, Better Call Saul"
  ) {
    router.push({
      name: "better-call-sauldetail",
      params: {
        id: character.char_id,
      },
    });
  }
};
</script>

<template>
  <div @click="viewDetail(character)" class="character-cards my-3">
    <img :src="character.img" class="character-img" alt="..." />
    <ul class="character-info">
      <li>
        <span class="character-info__info"> Nombre: </span>
        <span>{{ character.name }}</span>
      </li>
      <li>
        <span class="character-info__info">Nickname: </span>
        {{ character.nickname }}
      </li>
      <li>
        <span class="character-info__info">Status: </span>
        <span
          :class="{
            'character-info__status--alive': character.status == 'Alive',
            'character-info__status--dead': character.status == 'Deceased',
            'character-info__status--unknown':
              character.status == 'Presumed dead',
          }"
          >{{ character.status }}</span
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
