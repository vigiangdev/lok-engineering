<template>
  <div class="page-not-found">
    <h1>Resource Not Found!</h1>
    <p>Redirecting...</p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Lok Engineering - Page Not Found',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  created() {
    setTimeout(() => {
      this.$router.push({ name: 'index' })
    }, 10000)
  },
}
</script>

<style scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 6rem);
}

h1 {
  text-align: center;
  font-size: 3rem;
  line-height: 4rem;
  padding: 1rem;
}

p {
  font-size: 2rem;
  padding: 1rem;
}
</style>
