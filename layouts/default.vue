<template>
  <div>
    <nuxt />
    <footer id="footer" class="bg-black text-white pt-40 pb-20">
      <div class="container lg:flex">
        <div class="w-full lg:w-1/3 lg:mt-0">
          <Logo />
          <p class="text-xs opacity-50 mt-5">
            Travel MBA - подкаст о предпринимателях, которые<br />
            создают и развивают географически свободный<br />
            удаленный бизнес, живут в разных частях мира,<br />
            путешествуют и занимаются тем, что нравится.
          </p>
        </div>
        <div class="w-full text-sm lg:w-1/4 mt-6 lg:mt-0">
          <ul class="nav social-links flex-column">
            <li class="nav-item mb-2">
              <a target="_blank" href="https://facebook.com/travelmba">
                <img
                  src="https://travelmba.net/assets/img/facebook-white.svg"
                  alt
                />
                facebook.com/travelmba
              </a>
            </li>
            <li class="nav-item mb-2">
              <a target="_blank" href="https://instagram.com/travelmba">
                <img
                  src="https://travelmba.net/assets/img/instagram-white.svg"
                  alt
                />
                instagram.com/travelmba
              </a>
            </li>
            <li class="nav-item mb-2">
              <a target="_blank" href="https://t.me/travelmba">
                <img
                  src="https://travelmba.net/assets/img/telegram-white.svg"
                  alt
                />
                t.me/travelmba
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full text-sm lg:text-xs lg:w-1/5 mt-6 lg:mt-0">
          <ul class="nav justify-content-end flex-column">
            <li class="nav-item">
              <a target="_blank" href="https://travelmba.net/mail_accept"
                >Согласие с рассылкой</a
              >
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://travelmba.net/publicoffer"
                >Публичная оферта</a
              >
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://travelmba.net/refund"
                >Гарантия возврата</a
              >
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://travelmba.net/disclaimer"
                >Отказ от ответственности</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/4 mt-6 lg:mt-0 lg:text-right text-xs">
          <div
            class="block md:flex items-center lg:justify-end text-left media-providers mb-6"
          >
            <div class="image w-full lg:w-1/2 mb-4 md:mb-0 mr-0 md:mr-5">
              <a
                ref="nofollow"
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/travel-mba-%D0%BF%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE/id964351447?itsct=podcast_box&itscg=30200"
              >
                <img src="images/mono-white.svg" widht="177" />
              </a>
            </div>
            <div class="image w-full lg:w-1/3 mb-4 md:mb-0">
              <a
                ref="nofollow"
                target="_blank"
                href="https://open.spotify.com/show/1eZh7tqqbYurzVmQX0VhiJ"
              >
                <img src="images/soundcloud-logo.svg" widht="71" />
              </a>
            </div>
            <div class="image w-full lg:w-1/3 mb-4 md:mb-0">
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
          <p class="text-sm lg:mt-8">
            Если вы хотите стать гостем или партнером <br />подкаста - пишите на
            <a
              href="mailto:podcast@travelmba.net"
              class="underline hover:no-underline"
              >podcast@travelmba.net</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700,800,900&display=swap&subset=cyrillic');

html {
  font-family: Montserrat, sans-serif;
}

img {
  display: inline-block;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

input::placeholder,
textarea::placeholder {
  color: #000;
  opacity: 0.5;
}

a {
  color: #fb4d14;
}

a:hover {
  text-decoration: underline;
}

nav a {
  @apply text-white;
}

h1,
h2,
h3,
h4,
h5 {
  @apply font-extrabold uppercase mx-auto;
}

h1 {
  @apply text-xl;
}

h2 {
  @apply text-3xl;
}

h3 {
  @apply text-4xl;
}

h4 {
  @apply text-2xl;
}

h5 {
  @apply font-bold text-lg;
}

p:not(:last-of-type) {
  @apply mb-6;
}

header,
#main,
#main-sponsors {
  @apply px-3 py-6;
}

section {
  @apply px-3 py-20;
}

hr {
  max-width: 64px;
  height: 2px;
  @apply mx-auto my-8 border-none bg-black;
}

hr.g-orange {
  background: linear-gradient(230.11deg, #ff4c0e 0%, #e1356d 100.69%);
  background-blend-mode: darken;
  mix-blend-mode: normal;
}

hr.light-green {
  background: #abf43d;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  @apply mx-auto;
}

nav a:not(:last-of-type) {
  @apply mr-12;
}

.bg-g-purple {
  background: linear-gradient(87.24deg, #710ea0 0.47%, #c30d9e 99.92%);
  background-blend-mode: darken;
  mix-blend-mode: normal;
  @apply text-white;
}

.map-bg {
  background: #101010;
  @apply text-white relative;
}

.map-bg::after {
  content: '';
  background: url('https://travelmba.net/podcast/images/map-bg.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  max-width: 1114px;
  max-height: 656px;
  background-size: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  z-index: 0;
}

.map-bg .container {
  position: relative;
  z-index: 1;
}

.image-box > .image {
  @apply mb-2;
}

footer {
  @apply py-6 px-4;
}

footer .nav li a {
  line-height: 1.8;
  @apply text-white;
}

footer .nav li img {
  @apply mr-2;
}

form .form-group:not(:last-of-type) {
  margin-bottom: 15px;
}

.media-providers img {
  max-height: 29px;
}

.grayscale img {
  filter: grayscale(1);
}

.error-msg {
  @apply py-1 bg-red-600;
}

@screen lg {
  h1 {
    @apply text-3xl;
  }
}
</style>
