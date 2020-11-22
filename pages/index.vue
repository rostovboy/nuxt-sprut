<template>
  <section id="configurator">
    <b-container>
      <VueSlickCarousel v-bind="slickSettings" class="category-select" v-if="$device.isDesktop">
        <div v-for="category of categories" :key="category.id" class="text-center">
          <a href="#" @click.prevent="">
            <div class="d-lg-none">
              <img class="img-fluid caticon" :src="category.caticon" alt="">
            </div>
          </a>
          <a href="javascript:" @click.prevent="add" @click="$bvModal.show(`categoryId-${category.id}`)"
             class="configurator-link">
            {{ category.pagetitle }}
          </a>
          <b-modal :id="'categoryId-' + category.id"
                   size="xl"
                   ref="my-modal"
                   centered
                   hide-footer
                   no-fade
                   hide-backdrop>
            <div class="media title-media">
              <img src="/images/sprut_violet_logo.svg" class="img-fluid sprut-logo align-self-center mr-3" alt="">
              <div class="media-body align-self-center category-title">{{ category.pagetitle }}</div>
            </div>

            <!--<a class="to-order-button"
               href="javascript:"
               @click.prevent="add"
               @click="$bvModal.hide(`categoryId-${category.id}`), $bvModal.show(`Cart`)">
              Перейти в состав заказа
            </a>-->

            <a class="to-order-button"
               href="#cart"
               @click.prevent="add"
               @click="goToCart">
              Перейти в состав заказа
            </a>

            <div class="products-block">
              <Products :category="category.id"/>
            </div>
            <div class="to-next-button pseudo" v-if="category.nextstep != '0'">
              <a href="javascript:"
                 @click.prevent="add"
                 @click="$bvModal.hide(`categoryId-${category.id}`), $bvModal.show(`categoryId-${category.nextstep}`)">
                Далее <font-awesome-icon :icon="['fas', 'arrow-right']"/>
              </a>
            </div>
          </b-modal>
        </div>
      </VueSlickCarousel>

      <div class="door-block">
        <System />
      </div>

      <!--<div class="choice-block">
        <b-row>
          <b-col :lg="5">
            <div class="system">
              <img src="/images/system.svg" class="img-fluid" alt="">
            </div>
          </b-col>
          <b-col :lg="7">
            <b-card class="choice">
              <b-card-body>
                ddd
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>-->

    </b-container>

    <b-modal id="Cart"
             size="xl"
             centered
             hide-footer
             hide-backdrop>
      <Cart />
    </b-modal>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import System from "~/components/System";
import Products from "~/components/Products";
import Cart from "~/components/Cart";

export default {
  components: {Products, VueSlickCarousel, Cart, System},
  methods: {
    add(event) {
      this.btnDisabled = true; // mutate data and let vue disable the element
    },
    goToCart:  function (event) {
      //this.$refs['my-modal'].hide()
      event.preventDefault()
      let link = '#cart'
      document.querySelector(link).scrollIntoView({ behavior: 'smooth', block: 'start'})
    },
  },
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

a.to-order-button {
  position: absolute;
  right: 15%;
  top: -64px;
  bottom: 88.91%;
  padding: .7rem 1.6rem;
  height: 50px;
  background: #972EEA;
  border-radius: 0 0 10px 10px;
  color: #ffffff;
  text-decoration: none;
}
.door-block {
  position: absolute;
  bottom: 7px;
  left: 35%
}
.title-media {
  position: absolute;
  top: -40px;
  left: 2rem;
}
.products-block {
  margin-top: 2rem;
}
.to-next-button {
  position: absolute;
  bottom: 8.7%;
  left: 28%;
}
a.to-next-button {
  color: #193AAE;
}
.choice {
  border-radius: 1rem;
  border: none;
  height: 93%;
}

.bg-sprut-conf {
  position: absolute;
  bottom: 0;
  right: 0;
}

img.sprut-logo {
  max-height: 46px;
}

.category-title {
  font-family: 'VoxRound', sans-serif;
  font-weight: 100;
  font-size: 35px;
  color: #7534e4;
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
