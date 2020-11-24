<template>
  <div>
    <div v-if="getProductsInCart.length === 0"></div>
    <div v-else>
      <p class="title text-center text-lg-left">Состав заказа</p>
      <MiniProductsList class="products" :products-from-cart="getProductsInCart"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MiniProductsList from '@/components/MiniProductsList.vue'

export default {
  components: {
    MiniProductsList
  },
  methods: {
    add(event) {
      this.btnDisabled = true; // mutate data and let vue disable the element
    },
  },
  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart'
    }),
  },
}
</script>

<style lang="scss" scoped>

</style>
