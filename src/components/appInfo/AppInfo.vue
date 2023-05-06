<template>
  <Box>
    <p class="fs-3 text-uppercase">Barcha kinolar soni:{{ allMovieCount }}</p>
    <p class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni:{{ favouriteMoviesCount }}
    </p>
  </Box>
</template>
<script>
export default {
  props: {
    allMovieCount: {
      type: Number,
      required: true,
    },
    favouriteMoviesCount: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped></style>
