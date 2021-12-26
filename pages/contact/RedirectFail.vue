<template>
  <div class="failure-container">
    <h1 class="failure-title">Message Not Sent</h1>
    <div class="failure-message">
      <p>There was an error with the request. Please try again.</p>
      <br />
      <p>
        If the problem persists, please contact us directly via email at
        info@lokengineering.com
      </p>
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
    title: 'Lok Engineering - Message Failure',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>

<style scoped>
.failure-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 6rem);
}

.failure-title {
  font-size: 2rem;
  padding: 1rem;
}

.failure-message {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.failure-message p {
  text-align: center;
}
</style>
