<template lang="pug">
UIMainSection
  template(#title) Игры на ПК
  template
    b-row
      template(v-for="game in pcGames")
        b-col.mb-4(cols="12" lg="8" :key="game.id")
          UIGameCard(:game="game" :key="game.id")
</template>

<script>
export default {
  name: 'GamesIndex',
  async asyncData({params, $content}) {
    const games = await $content('games').fetch();

    return {
      games,
      slug: params.slug
    }
  },
  computed: {
    pcGames() {
      return this.games.filter(game => game.type === 'pc');
    }
  }
}
</script>

<style scoped>

</style>
