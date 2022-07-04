<template lang="pug">
nuxt-link.game-card(:to="`/games/${game.slug}`")
  .game-card__image
    img(:src="require(`@/assets/images/games/${game.image}`)")
  .game-card__title {{ game.title }}
  .game-card__description(v-html="game.description")
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./game-card.scss" lang="scss" scoped/>
