<template>
  <div class="footer">
    <div class="social-media">
      <a
        href="https://www.yelp.com/biz/lok-engineering-oakland-2"
        aria-label="Yelp"
      >
        <font-awesome-icon :icon="['fab', 'yelp']" />
      </a>
      <a href="https://www.facebook.com/LokEngineering" aria-label="Facebook">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a
        href="https://www.linkedin.com/company/lok-engineering"
        aria-label="LinkedIn"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
      <a href="mailto:info@lokengineering.com" aria-label="Email">
        <font-awesome-icon :icon="['fas', 'at']" />
      </a>
    </div>
    <div class="company-info">
      <p>Copyright © 2021 Lok Engineering. All Rights Reserved.</p>
      <p>
        <NuxtLink to="/privacypolicy">Privacy Policy</NuxtLink>
      </p>
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

a {
  color: var(--color-primary);
  text-decoration: none;
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

.social-media a:hover {
  color: var(--color-primary-contrast);
  border: 1px solid var(--color-primary-contrast);
  background-color: var(--color-primary);
}
</style>
