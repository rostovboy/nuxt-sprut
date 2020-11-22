<template>

  <b-navbar toggleable="lg" type="dark" fixed="top">
    <b-container>

      <!--<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
      <!--<b-collapse id="nav-collapse" is-nav></b-collapse>-->

      <b-navbar-brand href="#begin" @click="goToMain">
        <img class="img-fluid" src="/images/bastion_logo.svg">
      </b-navbar-brand>
      <b-navbar-nav v-for="item in items" :key="item.link" class="d-none d-lg-block">
        <b-nav-item :href="item.link" @click="goToBlock" class="pseudo">{{ item.name }}</b-nav-item>
      </b-navbar-nav>

      <button v-b-modal.askCall class="d-none d-lg-block call-button">
        Заказать звонок
      </button>
      <button v-b-modal.askCall class="call-button call-mobile d-lg-none">
        <font-awesome-icon :icon="['fas', 'phone-alt']"/>
      </button>
    </b-container>

    <b-modal id="askCall" centered title="Обратный звонок" hide-footer>
      <p class="text-center">
        Оставьте заявку и наш специалист свяжется с вами
        в ближайшее время
      </p>
      <div class="text-center">
        <b-form class="ask-call">
          <b-form-group>
            <b-form-input
              id="input-1"
              required
              placeholder="Имя"
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input
              id="input-2"
              required
              placeholder="Номер телефона"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="checkout">
            <b-form-checkbox-group>
              <b-form-checkbox required>Согласие на обработку <a href="/privacy-policy">персональных данных</a></b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <button type="submit" class="call-black-button mt-4">Заказать звонок</button>
        </b-form>
      </div>
    </b-modal>
  </b-navbar>
</template>

<style lang="scss" scoped>
a.nav-link {
  color: #fff !important;
  padding: 0.2rem 0 !important;
}
.navbar-dark {
  background-color: black !important;
}
input {
  height: 3.2rem;
  border-radius: 5rem;
  border: 1px solid #000;
}

.checkout {
  margin: 1.7rem 0 .5rem 0;
  padding-left: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Конфигуратор',
          link: '#configurator'
        },
        {
          name: 'О системе',
          link: '#about'
        },
        {
          name: 'Контакты',
          link: '#contacts'
        }
      ]
    }
  },
  methods: {
    goToBlock: function (event) {
      event.preventDefault()
      let link = event.target.getAttribute('href')
      document.querySelector(link).scrollIntoView({behavior: 'smooth', block: 'start'})
    },
    goToMain: function (event) {
      event.preventDefault()
      let link = '#begin'
      document.querySelector(link).scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
</script>
