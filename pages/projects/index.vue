<template>
  <div>
    <SwiperScroll />
  </div>
</template>

<script>
export default {
  name: 'CompanyProjects',
  head: {
    title: `Portfolio - Lok Engineering`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'projects',
        name: 'description',
        content: "Take a look at Lok Engineering's work.",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>
