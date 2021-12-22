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
  font-size: 3em;
  padding: 1em;
}

p {
  font-size: 2em;
  padding: 1em;
}
</style>
