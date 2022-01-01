<template>
  <div class="splash">
    <div class="splash-container">
      <div class="title">
        <h1>AN ENGINEERING COMPANY<span>WITH YOU IN MIND</span></h1>
        <br />
        <p>Innovative solutions that are within your budget</p>
        <br />
        <AppButton
          ><NuxtLink v-scroll-to="'#contact'" to="/"
            >GET QUOTE</NuxtLink
          ></AppButton
        >
      </div>
      <div class="composition">
        <img
          src="../assets/img/projects/626-54th-street/01.webp"
          alt="Photo 1"
          class="composition-photo composition-photo-p1"
        />
        <img
          src="../assets/img/projects/626-54th-street/02.webp"
          alt="Photo 2"
          class="composition-photo composition-photo-p2"
        />
        <img
          src="../assets/img/projects/626-54th-street/03.webp"
          alt="Photo 3"
          class="composition-photo composition-photo-p3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['projects']),
    activeProject() {
      return this.projects[0]
    },
    activeImage() {
      return this.projects[0].images[0]
    },
  },
}
</script>

<style scoped>
h1 span {
  display: block;
}

.splash {
  display: flex;
  justify-content: center;
  background-color: var(--color-gray-200);
  width: 100vw;
  padding: 1rem;
}

.splash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
}

.title {
  padding: 1rem;
  text-align: center;
  flex-basis: 40%;
}

.title h1 {
  font-size: 2rem;
  line-height: 3rem;
}

.title p {
  font-size: 1.2rem;
}

a {
  color: var(--color-gray-50);
  text-decoration: none;
}

.composition {
  display: none;
}

.composition-photo:hover {
  transform: scale(1.1);
  box-shadow: 0.5rem 0.5rem 3rem var(--color-primary);
  z-index: 5;
}

@media (min-width: 768px) {
  .title {
    padding: 2rem;
    text-align: center;
    flex-basis: 40%;
  }

  .title h1 {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .title p {
    font-size: 1.4rem;
  }

  .composition {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem 2rem;
    gap: 1rem;
    min-height: 275px;
  }

  .composition-photo {
    width: 30%;
    box-shadow: 0.5rem 0.5rem 1rem var(--color-primary);
    transition: all 0.2s;
  }
}

@media (min-width: 1200px) {
  .splash-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
  }

  .composition {
    position: relative;
    width: 720px;
    height: 480px;
    padding: 1rem;
  }

  .composition-photo {
    position: absolute;
    width: 50%;
  }

  .composition-photo-p1 {
    left: calc(10% + 1rem);
    top: 5%;
  }

  .composition-photo-p2 {
    right: 1rem;
    top: 25%;
  }

  .composition-photo-p3 {
    top: initial;
    left: 25%;
    bottom: 5%;
  }
}
</style>
