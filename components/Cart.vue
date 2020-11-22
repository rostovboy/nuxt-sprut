<template>
  <div id="cart">
    <div v-if="getProductsInCart.length === 0"></div>
    <div v-else>
      <b-container>
        <p class="title text-center text-lg-left">
          Состав заказа
        </p>
        <div class="table-responsive">
          <table class="table table-hover">
            <tbody>
            <tr v-for="product of getProductsInCart" :key="product.id">
              <td>{{ product.pagetitle }}</td>
              <td>1</td>
              <td>{{ product.price }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="total">Итого</div>

        <hr class="mt-5 mb-3">
        <p class="delivery mb-5">
          Бесплатная доставка по России, до двери вашего дома, при заказе на сумму свыше 4 000 руб.
          (для Ненецкого АО, Республики Саха (Якутия), Камчатского края, Чукотского АО,
          Магаданской области, Сахалинской области свыше 30 000 руб.)
        </p>

        <b-row>
          <b-col :lg="6" class="text-center">
            <button class="gradient-button">
              Получить скидку
            </button>
          </b-col>
          <b-col :lg="6" class="text-center">
            <button class="black-button mt-4 mt-lg-0">
              Оформить заказ
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart'
    }),
    getAmount() {
      let amount = 0
      if (this.getProductsInCart && this.getProductsInCart.length > 0) {
        this.getProductsInCart.forEach(product => {
          amount +=
            parseFloat(product.meta.price) *
            parseInt(product.qty)
        })
        return amount
      } else {
        return 0
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  background: -webkit-linear-gradient(#2762B9, #972EEA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'VoxRound', sans-serif;
  font-size: 2.6rem;
  font-weight: bold;
}

.black-button {
  background-color: #000;
  padding: .8rem 2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.black-button:hover, .black-button:focus {
  background: #972EEA;
  box-shadow: none;
}

.delivery {
  font-size: 1rem;
  font-weight: 300;
}

table {
  font-size: 1.3rem;
  font-family: 'VoxRound', sans-serif;
}

@media (max-width: 576px) {
  table {
    font-size: .9rem;
  }
}

@media (min-width: 576px) {
  table {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  table {
    font-size: 1rem;
  }
}

@media (min-width: 992px) {
  table {
    font-size: 1.3rem;
  }
}
</style>
