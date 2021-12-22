<template>
  <div class="footer">
    <div class="social-media">
      <NuxtLink to="/redirect/yelp">
        <font-awesome-icon :icon="['fab', 'yelp']" />
        <span class="hidden">Yelp</span>
      </NuxtLink>
      <NuxtLink to="/redirect/facebook">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <span class="hidden">Facebook</span>
      </NuxtLink>
      <NuxtLink to="/redirect/linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        <span class="hidden">LinkedIn</span>
      </NuxtLink>
    </div>
    <div class="company-info">
      <p>Copyright © 2021 Lok Engineering. All Rights Reserved</p>
      <p>Oakland, CA</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-primary-contrast);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 0.8rem;
}

.company-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.company-info * {
  text-align: center;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-primary);
  margin: 0.5rem;
  border: 1px solid var(--color-primary);
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}

.hidden {
  display: none;
}
</style>
