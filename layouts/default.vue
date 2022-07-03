<template lang="pug">
div.default-layout.layout
  main-header
  Nuxt
</template>

<script>
import MainHeader from "~/components/UI/MainHeader";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "DefaultLayout",
  components: {MainHeader}
}
</script>

<style scoped>

</style>
