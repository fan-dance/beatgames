<template lang="pug">
.game-info
  b-container
    .game-info__content
      UIGameIcon.game-info__icon(:url="game.image")
      .game-info__card
        h3.game-info__title
          | {{ game.title }}
        .game-info__tags
          p.game-info__tag(v-for="tag in game.tags") {{ tag }}
        p.game-info__description(v-html="game.description")
        .game-info__links
          a.game-info__link(v-for="link in game.links"
            :href="link.url"
            target="_blank" )
            b-icon-link45deg.game-info__link-icon
            | {{ link.name }}
  .game-info__video(v-if="game.video")
    iframe(
      :src="game.video"
      width="100%"
      height="100%"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    )
</template>

<script>
import {BIconLink45deg} from 'bootstrap-vue';
export default {
  name: "GameInfo",
  components: {
    BIconLink45deg
  },
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./game-info.scss" scoped />
