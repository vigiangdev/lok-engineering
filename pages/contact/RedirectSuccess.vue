<template>
  <div class="container">
    <h1 class="title">Success</h1>
    <div class="message">
      <p>Thank you for reaching out.</p>
      <p>
        Please give us some time to review your request, and we will get back to
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: calc(100vh - 8rem);
}

.title {
  font-size: 1.4rem;
  padding: 1rem;
}

.message {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.message p {
  text-align: center;
}
</style>
