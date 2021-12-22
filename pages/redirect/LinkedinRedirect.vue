<template>
  <div>Redirecting to Lok Engineering's LinkedIn Page</div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('https://www.linkedin.com')
  },
}
</script>
