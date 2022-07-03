<template lang="pug">
section.main-section
  b-container
    h2.main-section__title
      slot(name="title")
    slot
</template>

<script>
export default {
  name: "MainSection"
}
</script>

<style lang="scss" src="./main-section.scss" scoped/>
