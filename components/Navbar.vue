<template>
  <nav class="top-nav">
    <b-container>
      <b-row>
        <b-col cols="8" :lg="3">
          <a class="navbar-logo" href="/">
            <img class="img-fluid" src="@/static/images/bastion_logo.svg">
          </a>
        </b-col>
        <b-col :lg="6" class="d-none d-lg-block">
          <ul class="top-menu">
            <li>
              <a class="pseudo" href="#configurator">Конфигуратор</a>
            </li>
            <li>
              <a class="pseudo" href="#about">О системе</a>
            </li>
            <li>
              <a class="pseudo" href="#contacts">Контакты</a>
            </li>
          </ul>
        </b-col>
        <b-col cols="4" :lg="3" class="text-right">
          <button v-b-modal.askCall class="d-none d-lg-block call-button">
            Заказать звонок
          </button>
          <button v-b-modal.askCall class="call-button call-mobile d-lg-none">
            <font-awesome-icon :icon="['fas', 'phone-alt']"/>
          </button>
        </b-col>

      </b-row>
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

  </nav>
</template>

<style lang="scss" scoped>
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
