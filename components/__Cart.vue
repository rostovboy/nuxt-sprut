<template>
  <section id="cart">
    <b-container>
      <p class="title text-center text-lg-left">
        Состав заказа
      </p>

      <div class="table-responsive">
        <b-table
          :hover="true"
          :items="items"
          :fields="fields"
        ></b-table>
      </div>

      <hr class="mt-5 mb-3">
      <p class="delivery mb-5">
        Бесплатная доставка по России, до двери вашего дома, при заказе на сумму свыше 4 000 руб.
        (для Ненецкого АО, Республики  Саха (Якутия), Камчатского края, Чукотского АО,
        Магаданской области,  Сахалинской области свыше 30 000 руб.)
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'title', label: 'Наименование' },
        { key: 'quantity', label: 'Количество' },
        { key: 'cost', label: 'Стоимость' }
      ],
      items: [
        {title: 'SPRUT-1', quantity: '2', cost: '1500'},
        {title: 'SPRUT-2', quantity: '3', cost: '3500'}
      ],
    }
  }
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
