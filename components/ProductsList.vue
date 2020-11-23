<template>
  <div v-if="productsFromCart.length > 0">
    <div class="table-responsive">
      <table class="table table-hover">
        <tbody>
        <tr v-for="product in productsFromCart" :key="product.productId">
          <td>{{ product.meta.pagetitle }}</td>
          <td>{{ product.productId.price }}</td>
          <td>
            <input
              :value="product.qty"
              type="number"
              :min="1"
              :max="1000"
              @input.prevent="onQuantityChangeHandler($event, product)"
            />
          </td>
          <td>{{ (product.meta.price * product.qty) | round }}</td>
          <td>
            <a href="#" title="Удалить?" @click.prevent="onRemoveClickHandler(product)">
              <font-awesome-icon :icon="['fas', 'trash-alt']"/>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import round from '@/mixins/round'
import debounce from 'lodash.debounce'

export default {
  mixins: [round],
  props: {
    productsFromCart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions({
      setProductQuantity: 'cart/setProductQuantity',
      removeProduct: 'cart/removeProduct',
      removeMetaProduct: 'cart/removeMetaProduct',
    }),
    onRemoveClickHandler(product) {
      this.removeProduct(product.productId)
      this.removeMetaProduct(product.productId)
    },
    onQuantityChangeHandler: debounce(function onQuantityChangeHandler(e, product) {
      const qty = e.target.value
      this.setProductQuantity({productId: product.productId, qty})
    }, 400)

  }
}
</script>

<style lang="scss" module>

</style>
