<template lang="pug">
div.main-page
  UIMainSlider
  UIMainSection
    template(#title) Игры на ПК
    template
      b-row
        template(v-for="game in pcGames")
          b-col.mb-3.mb-lg-4(cols="24" md="12" lg="8" :key="game.id")
            UIGameCard(:game="game" :key="game.id")
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData({params, $content}) {
    const games = await $content('games').sortBy('order', 'asc').fetch();
    return {
      games
    }
  },
  computed: {
    pcGames() {
      return this.games.filter(game => game.type === 'pc');
    }
  }
}
</script>
