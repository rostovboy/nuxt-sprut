<template>
  <!--<b-row class="align-items-center">
    <b-col :lg="6">
      <div class="form-check" v-for="(product, index) of products.results" :key="product.id">
        <input class="form-check-input"
               type="radio"
               name="productSelector"
               :id="'productId-' + product.id"
               v-model="selected"
               :value="product.id"
               :checked="{ 'checked': index === 0 }">
        <label class="form-check-label" :for="'productId-' + product.id">
          {{ product.pagetitle }}
        </label>
      </div>
    </b-col>
    <b-col :lg="6">
      <div v-if="selected === product.id" v-for="product of products.results" :key="product.id">
        {{ product.pagetitle }}
      </div>
      <div v-else></div>
    </b-col>
  </b-row>-->


  <b-tabs pills card vertical nav-wrapper-class="w-50">
    <b-tab v-for="product of products.results" :key="product.id" :title="product.pagetitle">
      <div class="product-container">
        <b-row class="align-items-center mb-3">
          <b-col :lg="5">
            <img v-if="product.thumb" :src="product.thumb" class="img-fluid" alt="">
            <img v-else src="/images/no-image.svg" class="img-fluid" alt="">
          </b-col>
          <b-col :lg="7">
            <div v-if="product.props" class="product-props" v-html="product.props"></div>
          </b-col>
        </b-row>
        <div v-if="product.feature" class="product-feature" v-html="product.feature"></div>
        <p v-if="product.longtitle" class="product-longtitle" v-html="product.longtitle"></p>
        <p class="product-pagetitle" v-html="product.pagetitle"></p>
        <b-row class="align-items-center mt-3" v-if="product.price != '0'">
          <b-col :lg="6">
            <div class="price">
              {{ formatPrice(product.price) }} <font-awesome-icon :icon="['fas', 'ruble-sign']"/>
            </div>
          </b-col>
          <b-col :lg="6">

          </b-col>
        </b-row>
      </div>

      <BuyButton :product="product" />

    </b-tab>
  </b-tabs>
</template>

<script>
import BuyButton from "@/components/BuyButton";
export default {
  components: {
    BuyButton
  },
  props: ['category'],
  methods: {
    formatPrice(value) {
      let val = value
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  },
  data() {
    return {
      selected: null,
      products: []
    }
  },
  async fetch() {
    this.products = await this.$axios.$get(`https://sprut.fract.ru/api/products&parent=${this.category}`)
  },
  fetchOnServer: false
}
</script>

<style lang="scss" scoped>
.product-container {
  border: 3px solid #02c9f8;
  padding: 1rem 2.2rem;
  position: relative;
  height: 420px;
}
.product-container::after {
  content: "";
  position: absolute;
  top: -3px;
  right: -5px;
  width: 35px;
  height: 100px;
  background-image: url('~assets/img/corner_right.svg') !important;
  background-repeat: no-repeat !important;
}
.product-container::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: -3px;
  width: 35px;
  height: 100px;
  background-image: url('~assets/img/corner_left.svg') !important;
  background-repeat: no-repeat !important;
}
.product-props {
  font-size: .9rem;
  font-family: 'VoxRound', sans-serif;
  color: #000;
  font-weight: 100;
}
.product-feature {
  font-size: .8rem;
  font-family: 'VoxRound', sans-serif;
  color: #7534E4;
  font-weight: 100;
  margin: 1rem 0;
}
.product-longtitle {
  font-weight: 400;
  font-size: 1.4rem;
  font-family: 'VoxRound', sans-serif;
  color: #7534E4;
  margin-bottom: 0 !important;
}
.product-pagetitle {
  font-weight: 400;
  font-size: 1.2rem;
  font-family: 'VoxRound', sans-serif;
  color: #000;
}
.price {
  font-weight: bold;
  font-size: 2.2rem;
  font-family: 'VoxRound', sans-serif;
  color: #7534E4;
}
.price svg {
  font-size: 1.8rem;
  margin-bottom: 2px;
}
</style>
