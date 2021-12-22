<template>
  <div class="container">
    <swiper
      class="slider-container"
      :options="swiperOption"
      @mouseover.native="stopTimer(timeoutId)"
      @mouseleave.native="hover = false"
    >
      <NavigationBar class="navbar" />
      <swiper-slide
        v-for="project in projectsHome"
        :key="project.id"
        class="slide"
        data-aos="fade"
        data-aos-easing="ease"
        data-aos-duration="500"
      >
        <NuxtLink :to="`/projects/${project.slug}`">
          <h1 class="slide-title">
            {{ project.title }}
          </h1>
          <img
            class="slide-image"
            :src="
              require(`../assets/img/projects/${project.slug}/${project.image}`)
            "
            :alt="`Newly constructed or remodeled house at ${project.title}`"
          />
        </NuxtLink>
        <NuxtLink :to="`/projects/${project.slug}`">
          <div class="overlay" :class="{ animateFade: hover }">
            <div class="content" :class="{ animateShift: hover }">
              <h4>{{ project.header }}</h4>
              <p>{{ project.quote }}</p>
            </div>
          </div>
        </NuxtLink>
      </swiper-slide>

      <ButtonNavigation class="swiper-button swiper-button-prev">
        <div class="swiper-icon-container">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
      </ButtonNavigation>

      <ButtonNavigation class="swiper-button swiper-button-next">
        <div class="swiper-icon-container">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
      </ButtonNavigation>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapGetters } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: { delay: 10000 },
      },
      hover: false,
      timeoutId: undefined,
    }
  },
  computed: {
    ...mapGetters(['projectsHome']),
  },
  created() {
    this.timeoutId = setTimeout(() => {
      this.hover = true
    }, 500)
    this.timeoutId = setTimeout(() => {
      this.hover = false
    }, 8000)
  },
  methods: {
    stopTimer(id) {
      clearTimeout(id)
      this.hover = true
    },
  },
}
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-container {
  width: 100%;
  height: 100%;
}

.slide-title {
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  background-color: rgba(0 0 0 / 50%);
}

.slide-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.swiper-button::after {
  display: none;
}

.overlay {
  position: absolute;
  left: 0;
  top: 20%;
  width: 100%;
  padding: 1rem;
  background-color: rgba(255 255 255 / 50%);
  color: var(--color-primary);
  opacity: 0;
  transition: all 1s ease-in-out;
}

.content {
  transform: translateX(100px);
  transition: all 1s;
  background-color: initial;
}

.content h4 {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  background-color: initial;
}

.content p {
  font-size: 0.75rem;
  padding: 0.5rem 0;
  background-color: initial;
}

.animate-fade {
  opacity: 100;
}

.animate-shift {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .overlay {
    padding: 1.25rem;
  }

  .content h4 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
  }
}
</style>
