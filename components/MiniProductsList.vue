<template>
  <div v-if="productsFromCart.length > 0">
    <ul class="order-list" v-for="product in productsFromCart" :key="product.productId">
      <li>
        <p class="longtitle">
          {{ product.meta.longtitle }}
          <a href="javascript:"
             title="Заменить модуль"
             class="ml-1 edit-pen"
             @click.prevent="add"
             @click="$bvModal.show(`categoryId-${product.meta.parent}`)">
            <font-awesome-icon :icon="['fas', 'pen']"/>
          </a>
        </p>
        <p class="pagetitle">{{ product.meta.pagetitle }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    productsFromCart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions({
    }),
    add(event) {
      this.btnDisabled = true; // mutate data and let vue disable the element
    }
  }
}
</script>

<style lang="scss" scoped>
ul.order-list {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
ul.order-list li {
  border-bottom: 1px solid #ccc;
  padding: .3rem 0;
}
.edit-pen {
  font-size: .8rem;
}
.longtitle {
  font-size: .8rem;
  font-family: 'VoxRound', sans-serif;
  font-weight: 100;
  color: #7534e4;
  margin-bottom: 0;
}
.pagetitle {
  font-size: .8rem;
  font-family: 'VoxRound', sans-serif;
  font-weight: 100;
  margin-bottom: 0;
}
</style>
