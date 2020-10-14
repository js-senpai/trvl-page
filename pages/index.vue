<template>
  <div>
    <header class="bg-dark">
      <div class="container">
        <nav class="flex justify-between items-center font-semibold">
          <Logo />
          <div class="block lg:hidden">
            <button
              class="hidden items-center px-3 py-2 rounded text-white focus:outline-none hover:outline-none"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="items-end hidden lg:block flex items-center">
            <div class="text-sm lg:flex-grow text-white">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-400"
              >
                О подкасте
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-400"
              >
                Гости
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-400"
              >
                Аудитория
              </a>
              <border-button tag="a" class="btn btn-gb-orange" href="#"
                >ПОДПИСАТЬСЯ</border-button
              >
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section
      id="main"
      class="text-white text-left lg:text-center flex lg:items-center flex-wrap"
    >
      <div class="container h-auto">
        <h1 class="mb-0 mt-0">
          TRAVEL MBA - ПОДКАСТ О ПРЕДПРИНИМАТЕЛЯХ, КОТОРЫЕ<br />
          СОЗДАЮТ И РАЗВИВАЮТ ГЕОГРАФИЧЕСКИ СВОБОДНЫЙ БИЗНЕС.
        </h1>
        <hr class="bg-orange-500 ml-0 lg:ml-auto" />
        <p class="description">
          Истории с гостями про предпринимательство, бизнес лайфаки, развитие
          виртуальных компаний, <br />создания удаленных команд, путешествия и
          жизнь в разных городах и странах мира.
        </p>
      </div>
      <div class="container align-bottom max-w-full mt-0 lg:mt-10">
        <div class="wrapper max-w-2xl mx-auto">
          <div
            class="flex items-center lg:max-w-md flex-start lg:justify-center text-left lg:text-center media-providers mx-auto mb-6"
          >
            <div class="image w-auto lg:w-1/2 mb-4 md:mb-0  mr-5 lg:mr-0">
              <a
                ref="nofollow"
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/travel-mba-%D0%BF%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE/id964351447?itsct=podcast_box&itscg=30200"
              >
                <img src="images/mono-white.svg" widht="177" />
              </a>
            </div>
            <div class="image w-auto lg:w-1/2 mb-4 md:mb-0  mr-5 lg:mr-0">
              <a
                ref="nofollow"
                target="_blank"
                href="https://open.spotify.com/show/1eZh7tqqbYurzVmQX0VhiJ"
              >
                <img src="images/soundcloud-logo.svg" widht="71" />
              </a>
            </div>
            <div class="image w-auto lg:w-1/2 mb-4 md:mb-0  mr-5 lg:mr-0">
              <a
                ref="nofollow"
                target="_blank"
                href="https://soundcloud.com/travelmba"
              >
                <img
                  src="images/spotify-logo.png"
                  srcset="images/spotify-logo@2x.png 2x"
                />
              </a>
            </div>
          </div>
          <p class="mb-10">
            Введите ваш емеил, чтобы скачать все выпуски эпизодов подкаста и
            подписаться на новые выпуски
          </p>
          <form @submit.prevent="submitSubscribe">
            <div class="form-group max-w-lg mx-auto">
              <input
                v-model.lazy="subForm.email"
                name="email"
                placeholder="E-Mail"
                type="text"
                class="t-input t-input-size-default t-input-status-default border-none block w-full bg-white p-3 pl-6 text-sm text-gray-800"
              />
              <p v-if="$v.subForm.email.$error" class="error-msg">
                E-Mail указан неверно
              </p>
            </div>
            <div class="flex justify-center">
              <base-button
                :processing="processForm"
                type="submit"
                class="btn btn-g-orange btn-lg w-full max-w-lg font-normal font-medium text-base mt-6"
                >Слушать подкасты</base-button
              >
            </div>
          </form>
        </div>
      </div>
    </section>
    <section id="main-sponsors">
      <div
        class="container flex justify-between items-center max-w-6xl flex-wrap lg:flex-no-wrap"
      >
        <h4 class="normal-case font-bold mb-4 lg:mb-0 mx-0 w-full lg:w-auto">
          О нас говорят:
        </h4>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/rubase-logo.png"
            srcset="images/rubase-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/mctoday-logo.png"
            srcset="images/mctoday-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/lifehacker-logo.png"
            srcset="images/lifehacker-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/vcru-logo.png"
            srcset="images/vcru-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/founder-institute.png"
            srcset="images/founder-institute@2x.png"
            alt=""
          />
        </div>
        <div class="logo w-1/3 lg:w-auto">
          <img
            src="images/mindvalley.png"
            srcset="images/mindvalley@2x.png"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="about-podcast" class="pt-0 lg:text-center">
      <div class="container">
        <h3>О ПОДКАСТЕ</h3>
        <hr class="g-orange mx-0 lg:mx-auto" />
      </div>
      <div class="container text-xl max-w-6xl">
        <p>
          Подкаст о предпринимателях, которые создают и развивают географически
          свободный удаленный бизнес, живут в разных частях мира, путешествуют и
          занимаются тем, что нравится.
        </p>
        <p>
          С гостями мы говорим про предпринимательство, бизнес лайфаки, развитие
          виртуальных компаний, создания удаленных команд и жизнь в разных
          городах и странах мира.
        </p>
      </div>
    </section>
    <section
      id="podcast-info"
      class="pt-4 pb-4 lg:pt-10 lg:pb-10 text-white lg:text-center"
    >
      <div class="container">
        <h3 class="">ПОДКАСТ В ЦИФРАХ</h3>
        <hr class="bg-white mx-0 lg:mx-auto" />
      </div>
      <div class="container flex flex-wrap justify-between lg:mt-20">
        <CounterBlock text="Эпизодов" max="48" />
        <CounterBlock text="Уникальных прослушиваний." max="254000" />
        <CounterBlock
          text="Уникальных прослушиваний <br />каждого эпизода"
          max="7000"
        />
        <CounterBlock
          text="Стран мира охватывает<br />аудитория подкаста"
          max="50"
        />
      </div>
    </section>
    <section id="gusests-podcast" class="pt-2 text-left lg:text-center">
      <div class="container">
        <h3>ГОСТИ ПОДКАСТА</h3>
        <hr class="ml-0 lg:ml-auto g-orange" />
      </div>
      <div class="container text-xl max-w-6xl">
        <p>
          Мы общаемся с предпринимателями из разных стран, разных бизнес
          индустрий.
        </p>
        <p>
          Среди наших гостей:
        </p>
      </div>
      <div
        class="container flex flex-wrap justify-between lg: text-start text-base"
      >
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/adam.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/baransky.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/borychko.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/dektyarov.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/gorshkov.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/kustov.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/latev.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/nazarov.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/stecenko.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/tenderes.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/titovsky.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/vorona.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/zub.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/goldman.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/solovey.png" class="guest-img" alt="" />
          </div>
        </div>
        <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/ko4kin.png" class="guest-img" alt="" />
          </div>
        </div>
        <!-- <div class="image-box w-1/2 md:w-1/3 lg:w-1/4 px-4 lg:px-5">
          <div class="image">
            <img src="images/guests/parabelum.jpg" class="guest-img" alt="" />
          </div>
        </div> -->
      </div>
    </section>
    <!-- <section id="other-sponsors" class="py-10 bg-gray-100">
      <div
        class="container flex justify-between grayscale items-center max-w-6xl flex-wrap lg:flex-no-wrap"
      >
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img src="images/tripmydream-logo.svg" alt="" width="140" />
        </div>
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img
            src="images/aviasales-logo.png"
            srcset="images/aviasales-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img
            src="images/payoneer-logo.png"
            srcset="images/payoneer-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img
            src="images/lifehacker-logo.png"
            srcset="images/lifehacker-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img
            src="images/adizes-logo.png"
            srcset="images/adizes-logo@2x.png 2x"
            alt=""
          />
        </div>
        <div class="logo w-1/2 md:w-1/3 lg:w-auto">
          <img
            src="images/kingservers-logo.png"
            srcset="images/kingservers-logo@2x.png 2x"
            alt=""
          />
        </div>
      </div>
    </section> -->
    <section id="email-form-1" class="py-10">
      <div class="container text-left lg:text-center text-white">
        <div class="wrapper max-w-2xl mx-auto">
          <p class="text-lg mb-10">
            Введите ваш емеил, чтобы скачать все выпуски эпизодов подкаста и
            подписаться на новые выпуски
          </p>
          <div
            class="flex items-center max-w-md lg:justify-end text-center media-providers mx-auto mb-6"
          >
            <div class="image w-1/2">
              <img src="images/mono-white.svg" widht="177" />
            </div>
            <div class="image w-1/3">
              <img src="images/soundcloud-logo.svg" widht="71" />
            </div>
            <div class="image w-1/3">
              <img
                src="images/spotify-logo.png"
                srcset="images/spotify-logo@2x.png 2x"
              />
            </div>
          </div>
          <form @submit.prevent="submitSubscribe">
            <div class="form-group max-w-lg mx-auto">
              <input
                v-model.lazy="subForm.email"
                name="email"
                placeholder="E-Mail"
                type="text"
                class="t-input t-input-size-default t-input-status-default border-none block w-full bg-white p-3 pl-6 text-sm text-gray-800"
              />
              <p v-if="$v.subForm.email.$error" class="error-msg">
                Имя указано неверно
              </p>
            </div>
            <div class="flex justify-center">
              <base-button
                :processing="processForm"
                type="submit"
                class="btn btn-g-orange btn-lg w-full max-w-lg font-normal font-medium text-base mt-6"
                >Слушать подкасты</base-button
              >
            </div>
          </form>
        </div>
      </div>
    </section>
    <section id="author-image" class="lg:hidden p-0">
      <div class="w-full lg:hidden">
        <img src="images/denis-bg.jpg" alt="" />
      </div>
    </section>
    <section
      id="author-info"
      class="bg-black lg:bg-transparent text-white overflow-x-hidden"
    >
      <div class="container lg:flex justify-end text-white -mt-12 lg:mt-0">
        <div class="w-full lg:w-2/5 text-sm">
          <div class="text-left">
            <h3>АВТОР ПОДКАСТА</h3>
            <hr class="mx-0 light-green" />
            <h4>Денис Довгаль</h4>
          </div>
          <div class="content mt-8">
            <strong
              >Предприниматель. Путешественник.<br />
              Практик Развития Удаленного Бизнеса<br />
              Развивает 2 географически свободных бизнеса</strong
            >
            - видео<br />
            продакшн компанию и Amazon e-commerce бренд, в которых<br />
            работает более 20 человек полностью удаленно.<br />
            <strong>Создатель подкаста</strong> про удаленный бизнес и
            консалтингового проекта <strong>Travel MBA</strong>.<br />
            <strong>Финалист Ironman 70.3</strong> и финалист марафона в Риме.
          </div>
        </div>
      </div>
    </section>
    <section
      id="email-form-full"
      class="text-left lg:text-center bg-black text-white py-8"
    >
      <div class="container text-xl">
        <p>
          Если вы хотите стать гостем подкаста или стать партнером подкаста,
          напишите в двух словах о себе
        </p>
        <form @submit.prevent="submitPartner" class="mt-12 text-base">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 lg:pr-2">
              <div class="form-group mx-auto">
                <input
                  v-model="partnerForm.name"
                  name="name"
                  placeholder="Имя"
                  type="text"
                  class="bg-black text-white placeholder-white t-input t-input-size-default t-input-status-default border border-white block w-full p-3 pl-6 text-sm"
                />
                <p v-if="$v.partnerForm.name.$error" class="error-msg">
                  Имя указано неверно
                </p>
              </div>
              <div class="form-group mx-auto">
                <input
                  v-model="partnerForm.email"
                  name="email"
                  placeholder="E-Mail"
                  type="text"
                  class="bg-black text-white placeholder-white t-input t-input-size-default t-input-status-default border border-white block w-full p-3 pl-6 text-sm"
                />
                <p v-if="$v.partnerForm.email.$error" class="error-msg">
                  E-Mail указано неверно
                </p>
              </div>
              <div class="form-group mx-auto">
                <client-only>
                  <vue-tel-input
                    v-model="partnerForm.phone"
                    :enabled-country-code="false"
                    :enabled-flags="true"
                    :dynamic-placeholder="true"
                    :input-options="{ showDialCode: true }"
                    name="phone"
                    input-classes="bg-black text-white placeholder-white t-input t-input-size-default t-input-status-default border border-white block w-full  p-3 pl-6 text-sm"
                    wrapper-classes="text-black"
                  />
                </client-only>
                <p v-if="$v.partnerForm.phone.$error" class="error-msg">
                  Телефон указано неверно
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-2">
              <div class="form-group lg:mt-0 mt-4 h-full">
                <textarea
                  v-model.lazy="partnerForm.description"
                  name="description"
                  class="bg-black text-white placeholder-white t-input t-input-size-default t-input-status-default border border-white block w-full p-3 pl-6 text-sm  h-full"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
            </div>
          </div>
          <base-button
            :processing="processForm"
            type="submit"
            class="btn btn-g-orange btn-lg w-full font-normal font-medium text-base mt-6"
            >Отправить запрос</base-button
          >
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { required, minLength, email } from 'vuelidate/lib/validators'

import Logo from '~/components/Logo.vue'
import BaseButton from '~/components/BaseButton.vue'
import BorderButton from '~/components/BorderButton.vue'

export default {
  components: {
    Logo,
    BaseButton,
    BorderButton
  },
  data() {
    return {
      subForm: {
        email: ''
      },
      partnerForm: {
        name: '',
        email: '',
        phone: '',
        description: ''
      },
      processForm: false,
      utms: [
        'utm_source',
        'utm_content',
        'utm_medium',
        'utm_term',
        'utm_campaign'
      ]
    }
  },
  validations: {
    subForm: {
      email: { required, email }
    },
    partnerForm: {
      name: { required },
      email: { required, email },
      phone: { required, minLength: minLength(7) }
    }
  },
  methods: {
    submitForm(url, data, formObject) {
      if (formObject.$invalid) {
        formObject.$touch()
        return
      } else {
        formObject.$reset()
      }

      this.utms.forEach((val) => {
        const utm = this.$route.query[val] || Cookies.get(val)

        if (utm) {
          data.append(val, utm)
        }
      })

      if (!this.processForm) {
        this.processForm = true

        this.$axios
          .$post(url, data, {
            progress: !1
          })
          .then((data) => {
            if (data.success) {
              window.location.href = `${data.redirect}?billing_first_name=${this.name}&billing_email=${this.email}&billing_phone=${this.phone}`
            } else {
              this.error = data.message
            }
          })
          .finally(() => {
            this.processForm = false
          })
      }
    },
    submitPartner() {
      this.submitForm(
        'https://travelmba.net/podcast/submit.php',
        {
          name: this.partnerForm.name,
          email: this.partnerForm.email,
          phone: this.partnerForm.phone
        },
        this.$v.partnerForm
      )
    },
    submitSubscribe() {
      this.submitForm(
        'https://travelmba.net/podcast/submit.php',
        {
          email: this.subForm.email
        },
        this.$v.subForm
      )
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#main {
  background-color: #1c1c1c;
  background-blend-mode: darken;
  mix-blend-mode: normal;
  height: calc(100vh - 99px);
  position: relative;
  overflow: hidden;
  min-height: 768px;
}

#main > .container {
  position: relative;
  z-index: 1;
}

#main::after {
  content: '';
  position: absolute;
  background: transparent;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 66.75%
  );
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#main::before {
  content: '';
  position: absolute;
  background: url('https://travelmba.net/podcast/images/main-image.png');
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  z-index: -1;
  background-position: center bottom;
  left: 0;
  top: 0;
}

#main-sponsors .logo img {
  max-height: 65px;
}

@media (max-width: 576px) {
  #main-sponsors .logo img {
    max-width: 80px;
  }
  #main-sponsors .logo {
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  #main-sponsors .logo img {
    max-width: 85px;
  }
}

#podcast-info {
  background: linear-gradient(265.51deg, #ff4c0e 0%, #e1356d 100.69%);
  position: relative;
}

#podcast-info::before,
#podcast-info::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  max-width: 22%;
  background-size: 100% !important;
  position: absolute;
  left: 0;
  bottom: 0;
  background-repeat: no-repeat !important;
  background-position: bottom !important;
}

#podcast-info::before {
  background: url('https://travelmba.net/podcast/images/orange-palm-left.svg');
}
#podcast-info::after {
  background: url('https://travelmba.net/podcast/images/orange-palm-right.svg');
  right: 0;
  left: auto;
}

#podcast-info .container {
  position: relative;
  z-index: 1;
}

.image-box {
  @apply mt-10;
}

#author-info {
  line-height: 1.7;
}

#email-form-1 {
  background-color: #1c1c1c;
}

.guest-img {
  filter: grayscale(1);
  transition: all 100ms ease-in-out;
}

.guest-img:hover {
  filter: grayscale(0);
}

@screen lg {
  #author-info {
    background: url('https://travelmba.net/podcast/images/denis-bg.jpg');
    background-size: cover;
    display: block;
    background-position-y: 65%;
    position: relative;
  }

  #author-info > .container {
    z-index: 1;
    position: relative;
    @apply text-white;
  }

  #author-info::before {
    content: '';
    background: linear-gradient(
      270.18deg,
      rgba(0, 0, 0, 0.8) 9.59%,
      rgba(0, 0, 0, 0) 88.12%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
  }
}
</style>
