<template>
  <section id="contacts">
    <b-container>
      <b-row class="align-items-center">
        <b-col :sm="6" :lg="7" class="text-center text-lg-left">
          <p class="title">Свяжитесь с нами</p>
          <p class="text"><strong>Интернет-магазин</strong></p>
          <p class="text">Ростов-на-Дону,<br>ул. Красноводская, 4/4</p>
          <p class="phone">8-800-200-58-35</p>
        </b-col>
        <b-col :sm="6" :lg="5">

          <div class="text-center text-lg-left">
            <b-form class="ask-call">
              <b-form-group>
                <b-form-input
                  id="ask-call-name"
                  required
                  placeholder="Имя"
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="ask-call-phone"
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

        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
  form a {
    color: #fff;
    text-decoration: underline;
  }
  .title {
    font-weight: bold;
    font-size: 2.4rem;
  }
  .text {
    font-size: 1.6rem;
  }
  .phone {
    font-weight: bold;
    font-size: 2.1rem;
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

  @media (max-width: 576px) {
    form.ask-call {
      margin-top: 2.5rem;
    }
  }
  @media (min-width: 576px) {
    form.ask-call {
      margin-top: 2.5rem;
    }
  }
  @media (min-width: 768px) {
    form.ask-call {
      margin-top: 2.5rem;
    }
  }
  @media (min-width: 992px) {
    form.ask-call {
      margin-top: 0;
    }
  }
</style>
