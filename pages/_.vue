<template>
  <div class="page-not-found">
    <h1>Resource Not Found!</h1>
    <p>Redirecting...</p>
  </div>
</template>

<script>
export default {
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
  width: 100%;
  height: calc(100vh - 9em);
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
