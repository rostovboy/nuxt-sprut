<template>
  <section id="configurator">
    <b-container>
      <VueSlickCarousel v-bind="slickSettings" class="category-select">
        <div v-for="category of categories" :key="category.id" class="text-center">
          <a href="#" @click.prevent="">
            <div class="d-lg-none">
              <img class="img-fluid caticon" :src="category.caticon" alt="">
            </div>
          </a>
          <a href="#" @click.prevent="" class="configurator-link">{{ category.pagetitle }}</a>
        </div>
      </VueSlickCarousel>
    </b-container>

    <!--<div class="system">
      <System />
    </div>-->
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import System from "~/components/System";

export default {
  components: {VueSlickCarousel, System},
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    }
  },
  data() {
    return {
      slickSettings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 1,
              "infinite": true,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
    }
  },
}
</script>


<style lang="scss" scoped>

.system {
  position: absolute;
  bottom: 22px;
  left: 65%;
}

.bg-sprut-conf {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (max-width: 576px) {
  .bg-sprut-conf img {
    height: 400px;
  }
}
@media (min-width: 576px) {
  .bg-sprut-conf img {
    height: 500px;
  }
}
@media (min-width: 768px) {
  .bg-sprut-conf img {
    height: 600px;
  }
}
@media (min-width: 992px) {
  .bg-sprut-conf img {
    height: 700px;
  }
}
@media (min-width: 1366px) {
  .bg-sprut-conf img {
    height: 800px;
  }
}
</style>
