<template>
  <section id="begin">
    <b-container class="vert-center">
      <div class="text-center box">
        <img class="img-fluid begin-logo" src="@/static/images/sprut_logo.svg" alt="Sprut">
        <p class="begin-slogan">Собери комплект СКУД</p>
        <div class="begin-arrow">
          <Arrow />
        </div>
        <p>
          <a class="black-button" href="#configurator">Собрать</a>
        </p>
      </div>
    </b-container>
  </section>
</template>

<script>
import Arrow from "~/components/Arrow";
export default {
  components: {Arrow}
}
</script>

<style lang="scss" scoped>
.bg-sprut-begin {
  position: absolute;
  top: 58px;
  left: 0;
}
.vert-center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.begin-slogan {
  font-size: 3rem;
  color: #fff;
  font-family: 'VoxRound', sans-serif;
  font-weight: bold;
  margin: 0;
}

.begin-arrow {
  margin-bottom: 4rem;
  position: relative;
  height: 150px;
}

@media (max-width: 576px) {
  .bg-sprut-begin img {
    height: 400px;
  }
  .begin-arrow {
    margin-bottom: 2rem;
  }
  .begin-logo {
    max-height: 90px;
    margin-bottom: 2rem;
  }
}
@media (min-width: 576px) {
  .bg-sprut-begin img {
    height: 500px;
  }
  .begin-arrow {
    margin-bottom: 2rem;
  }
  .begin-logo {
    max-height: 90px;
    margin-bottom: 2rem;
  }
}
@media (min-width: 768px) {
  .bg-sprut-begin img {
    height: 600px;
  }
  .begin-arrow {
    margin-bottom: 3rem;
  }
  .begin-logo {
    max-height: 116px;
    margin-bottom: 4rem;
  }
}
@media (min-width: 992px) {
  .bg-sprut-begin img {
    height: 700px;
  }
  .begin-arrow {
    margin-bottom: 4rem;
  }
  .begin-logo {
    max-height: 116px;
    margin-bottom: 4rem;
  }
}
@media (min-width: 1366px) {
  .bg-sprut-begin img {
    height: 800px;
  }
  .begin-arrow {
    margin-bottom: 4rem;
  }
  .begin-logo {
    max-height: 116px;
    margin-bottom: 4rem;
  }
}
</style>
