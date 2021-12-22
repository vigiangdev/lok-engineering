<template>
  <div>Redirecting to Lok Engineering's Yelp Page</div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('https://www.yelp.com')
  },
}
</script>
