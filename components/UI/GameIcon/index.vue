<template lang="pug">
.game-icon
  .game-icon__content
    .game-icon__cover
      img(:src="require(`@/assets/images/games/${url}`)")
  .game-icon__blur
    img(:src="require(`@/assets/images/games/${url}`)")
</template>

<script>
export default {
  name: "GameIcon",
  props: {
    url: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" src="./game-icon.scss" scoped/>
