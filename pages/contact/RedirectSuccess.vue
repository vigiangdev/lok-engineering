<template>
  <div class="success-container">
    <h1 class="success-title">Success!</h1>
    <div class="success-message">
      <p>
        Please give us some time to review your request and we will get back to
        you as soon as possible.
      </p>
      <br />
      <p>You will be redirected in {{ timer }} seconds.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: 10,
    }
  },
  head: {
    title: 'Lok Engineering - Message Sent',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  created() {
    this.decrementTimer()
    setTimeout(() => {
      this.$router.push({ name: 'index' })
    }, 10000)
  },
  methods: {
    decrementTimer() {
      setInterval(() => {
        if (this.timer > 0) {
          this.timer -= 1
        }
      }, 1000)
    },
  },
}
</script>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 6rem);
}

.success-title {
  font-size: 2rem;
  padding: 1rem;
}

.success-message {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-message p {
  text-align: center;
}
</style>
