<template lang="pug">
b-container
  nuxt-content(:document="game" tag="article")
</template>

<script>
export default {
  async asyncData({params, $content}) {
    const game = await $content('games', params.slug).fetch()
    return {
      game,
      slug: params.slug
    }
  },
  mounted() {
    // this.getGameInfo();
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
