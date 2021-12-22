<template>
  <div class="container">
    <h1 class="title">Message Not Sent</h1>
    <div class="message">
      <p>There was an error with the request. Please try again.</p>
      <br />
      <p>
        If the problem persists, please contact us directly via email at
        info@lokengineering.com
      </p>
    </div>
  </div>
</template>

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
