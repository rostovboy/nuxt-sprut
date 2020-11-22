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

    <footer>
      <b-container>

        <b-row class="align-items-center">
          <b-col cols="12" :lg="4" class="d-none d-lg-block">
            <a href="/terms-of-use">Условия использования</a>
          </b-col>
          <b-col cols="12" :lg="5" class="d-none d-lg-block">
            <a href="/privacy-policy">Политика конфиденциальности</a>
          </b-col>
          <b-col cols="12" :lg="3">
            <div class="social-media">
              <b-row class="align-items-center">
                <b-col class="text-center">
                  <a href="https://www.youtube.com/user/wwwbastru/">
                    <img class="img-fluid social-icon" src="@/static/images/social_icons/youtube_icon.svg" alt="YouTube">
                  </a>
                </b-col>
                <b-col class="text-center">
                  <a href="https://www.facebook.com/www.bast.ru">
                    <img class="img-fluid social-icon" src="@/static/images/social_icons/fb_icon.svg" alt="Facebook">
                  </a>
                </b-col>
                <b-col class="text-center">
                  <a href="https://www.instagram.com/bastion.ops/">
                    <img class="img-fluid social-icon" src="@/static/images/social_icons/instagram_icon.svg" alt="Instagram">
                  </a>
                </b-col>
                <b-col class="text-center">
                  <a href="https://vk.com/po_bastion">
                    <img class="img-fluid social-icon" src="@/static/images/social_icons/vk_icon.svg" alt="YouTube">
                  </a>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>

        <hr class="d-none d-lg-block">

        <b-row class="align-items-center">

          <b-col cols="12" :lg="4" class="text-center d-lg-none mt-5 mb-3">
            <a href="/terms-of-use">Условия использования</a>
          </b-col>
          <b-col cols="12" :lg="5" class="text-center d-lg-none mb-5">
            <a href="/privacy-policy">Политика конфиденциальности</a>
          </b-col>

          <b-col :lg="4">
            <div class="mb-4 text-center text-lg-left">
              Закрытое акционерное общество «Бастион»,<br> ИНН 6163127276, ОГРН 1136195000138
            </div>
          </b-col>
          <b-col :lg="4">
            <div class="mb-4 text-center text-lg-left">
              344010, Россия, Ростовская обл.,<br>
              г. Ростов-на-Дону, ул. Красноводская, 8/7
            </div>
          </b-col>
          <b-col :lg="2">
            <div class="mb-4 text-center text-lg-right">
              <a href="https://skat-ups.ru">
                <img class="img-fluid" src="@/static/images/skat_logo.svg" alt="Skat">
              </a>
            </div>
          </b-col>
          <b-col :lg="2">
            <div class="mb-4 text-center text-lg-right">
              <a href="https://bast.ru">
                <img class="img-fluid" src="@/static/images/bastion_logo.svg" alt="Bastion">
              </a>
            </div>
          </b-col>
        </b-row>

      </b-container>
    </footer>
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
