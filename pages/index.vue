<template>
  <section id="configurator">
    <b-container>

      <VueSlickCarousel v-bind="slickSettingsDesktop" class="category-select">
        <div v-for="category of categories" :key="category.id" class="text-center">
          <a href="#" @click.prevent="">
            <div class="d-lg-none">
              <img class="img-fluid caticon" :src="category.caticon" alt="">
            </div>
          </a>
          <a href="javascript:" @click.prevent="add" @click="$bvModal.show(`categoryId-${category.id}`), isHidden = true"
             class="configurator-link">
            {{ category.pagetitle }}
          </a>
        </div>
      </VueSlickCarousel>


      <div v-for="category of categories" :key="category.id">
        <b-modal :id="'categoryId-' + category.id"
                 size="xl"
                 ref="my-modal"
                 centered
                 hide-footer
                 no-fade
                 hide-backdrop>

          <b-row>
            <b-col :lg="5" :xl="4">
              <div class="position-relative">
                <img src="~/assets/img/system.svg" class="img-fluid" alt="">
                <div class="minicart">
                  <MiniCart />
                </div>
              </div>
            </b-col>
            <b-col :lg="7" :xl="8">
              <div class="media title-media">
                <img src="/images/sprut_violet_logo.svg" class="img-fluid sprut-logo align-self-center mr-3" alt="">
                <div class="media-body align-self-center category-title">{{ category.pagetitle }}</div>
              </div>
              <button class="btn to-order-button"
                      @click="$bvModal.hide(`categoryId-${category.id}`), $bvModal.show(`Cart`)">
                Перейти в состав заказа
              </button>
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
            </b-col>
          </b-row>

        </b-modal>
      </div>

      <!--<div class="start-square d-none d-lg-block" v-if="$device.isDesktop, !isHidden" @click="isHidden = !isHidden">
        Начни с контроллера <span class="close">×</span>
      </div>-->

      <div class="start-square d-none d-lg-block" v-if="$device.isDesktop">
        Начни с контроллера
      </div>

      <div class="door-block">
        <System />
      </div>

    </b-container>

    <b-modal id="Cart" size="xl" centered title="Состав заказа" hide-footer hide-backdrop>
      <Cart />
    </b-modal>

  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import System from "~/components/System"
import Products from "~/components/Products"
import Cart from "~/components/Cart"
import MiniCart from "~/components/MiniCart"

export default {
  components: {Products, VueSlickCarousel, Cart, MiniCart, System},
  methods: {
    add(event) {
      this.btnDisabled = true; // mutate data and let vue disable the element
    },
  },
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    }
  },
  data() {
    return {
      isHidden: false,
      slickSettingsDesktop: {
        "dots": false,
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

.minicart {
  position: absolute;
  bottom: 0;
  right: 1.8rem;
}

.start-square {
  position: relative;
  border-radius: .5rem;
  padding: 1rem 2rem;
  border: 1px solid #fff;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  font-family: 'VoxRound', sans-serif;
  width: 40%;
  margin-top: 4rem;
  margin-bottom: 6rem;
  margin-left: 12%;
}
.start-square::before {
  content: "";
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 8px;
  position: absolute;
  left: 14%;
  top: -35px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.start-square::after {
  content: "";
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 8px;
  position: absolute;
  right: 18%;
  bottom: -35px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.start-square .close {
  position: absolute;
  top: -.3rem;;
  right: .5rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 100;
}

.to-order-button, a.to-order-button {
  position: absolute;
  right: 15%;
  top: -80px;
  bottom: 88.91%;
  padding: .7rem 1.6rem;
  height: 50px;
  background: #972EEA;
  border-radius: 0 0 10px 10px;
  color: #ffffff;
  text-decoration: none;
}
.door-block {
  /*position: absolute;
  bottom: 7px;
  left: 35%*/
  margin-bottom: 10px;
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
