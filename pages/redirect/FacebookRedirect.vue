<template>
  <div>Redirecting to Lok Engineering's Facebook Page</div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('https://www.facebook.com')
  },
}
</script>
