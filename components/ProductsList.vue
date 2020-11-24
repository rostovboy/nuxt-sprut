<template>
  <div v-if="productsFromCart.length > 0">
    <div class="table-responsive">
      <table class="table table-hover">
        <tbody>
        <tr v-for="product in productsFromCart" :key="product.productId">
          <td>
            {{ product.meta.pagetitle }}
            <a href="javascript:"
               title="Заменить модуль"
               class="ml-2 edit-pen"
               @click.prevent="add"
               @click="$bvModal.hide('Cart'), $bvModal.show(`categoryId-${product.meta.parent}`)">
              <font-awesome-icon :icon="['fas', 'pen']"/>
            </a>
          </td>
          <td>{{ product.productId.price }}</td>
          <td>
            <input
              :value="product.qty"
              type="number"
              :min="1"
              :max="1000"
              @input.prevent="onQuantityChangeHandler($event, product)"
            />

            <!--<b-input-group>
              <b-input-group-prepend>
                <b-btn variant="outline-info" @click="decrement()" @input.prevent="onQuantityChangeHandler($event, product)">-</b-btn>
              </b-input-group-prepend>
              <b-form-input type="number" :min="1" :max="1000"
                            :value="qty">
              </b-form-input>
              <b-input-group-append>
                <b-btn variant="outline-secondary" @click="increment()" @input.prevent="onQuantityChangeHandler($event, product)">+</b-btn>
              </b-input-group-append>
            </b-input-group>-->

          </td>
          <td>{{ (product.meta.price * product.qty) | round }}</td>
          <td>
            <a href="#" class="delete" title="Удалить?" @click.prevent="onRemoveClickHandler(product)">
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
  //https://stackoverflow.com/questions/52658814/how-can-i-make-button-minus-and-plus-on-the-bootstrap-vue
  /*data () {
    return {
      qty: 1
    }
  },*/
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
    add(event) {
      this.btnDisabled = true; // mutate data and let vue disable the element
    },
    onRemoveClickHandler(product) {
      this.removeProduct(product.productId)
      this.removeMetaProduct(product.productId)
    },
    onQuantityChangeHandler: debounce(function onQuantityChangeHandler(e, product) {
      const qty = e.target.value
      this.setProductQuantity({productId: product.productId, qty})
    }, 400),

    /*increment() {
      this.qty++;
    },
    decrement() {
      if (this.qty === 1) {
        alert("Нулевое значение недопустимо, если хотите удалить товар, нажмите кнопку удалить справа");
      } else {
        this.qty--;
      }
    }*/

  }
}
</script>

<style lang="scss" module>
td {
  font-size: 1.5rem;
  font-family: 'VoxRound', sans-serif;
  font-weight: 400;
}
</style>
