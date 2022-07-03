<template lang="pug">
div.main-slider
  b-container.main-slider__container
    b-row.h-100
      b-col.main-slider__person(lg="10")
        img.main-slider__person-img(src="@/assets/images/slider-girl.png")
      b-col.main-slider__content.d-flex.flex-column.justify-content-center(lg="10" offset="2")
        h3.main-slider__title Добро пожаловать!
        p Приветствуем в мире танцевальных игр – FanDance
        p Смотрите каталог игр на сайте и подписывайтесь на нашу группу ВК!
        .main-slider__buttons
          b-button(variant="secondary") Каталог игр
          b-button(variant="info" href="https://vk.com/fan_dance" target="_blank" ) Мы в VK
</template>

<script>
export default {
  name: "MainSlider"
}
</script>

<style src="./main-slider.scss" lang="scss" scoped/>
