<template>
  <section id="about">
    <b-container class="vert-center">
      <b-row class="align-items-center">
        <b-col :sm="5" :lg="5">
          <div class="matrix">
            <img class="img-fluid matrix-img" src="/images/about.jpg" alt="">
            <img class="matrix-bg" src="/images/matrix.svg" alt="">
          </div>
        </b-col>
        <b-col :sm="7" :lg="7">
          <h1 class="mb-5 text-center text-lg-left">
            <span class="sprut-title">SPRUT</span> — система контроля и управления доступом
          </h1>
          <p class="desc mb-4 text-center text-lg-left">
            Электронная система СКУД SPRUT обеспечит вам безопасность.<br>
            Технология SPRUT защитит вам дом или офис от
            нежелательных взломов.
          </p>
          <p class="slogan text-center text-lg-left">
            Хорошо подобранный замок — гарант безопасности.
          </p>
          <div v-if="$device.isDesktop">
            <p>Is Desktop</p>
          </div>
          <div v-if="$device.isMobile">
            <p>Is Mobile</p>
          </div>
          <div v-if="$device.isIos">
            <p>Is Ios</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
  .sprut-title {
    font-weight: bold;
  }
  .desc {
    font-size: 1.5rem;
  }
  .slogan {
    font-size: 1.5rem;
    font-family: 'VoxRound', sans-serif;
    color: #7534E4;
  }
  .matrix {
    position: relative;
  }
  .matrix-img {
    padding-right: 15.5%;
  }
  .matrix-bg {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 22.5%;
    left: 8%;
  }
</style>
