<template>
  <Box class="movie-add-form">
    <h3>Yangi kino qo'shish</h3>
    <form @submit.prevent class="add-form d-flex gap-2">
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Qanday kino?"
        :value="name"
        @input="name = $event.target.value"
      />
      <input
        type="number"
        class="form-control new-movie-label"
        placeholder="Necha marotaba ko'rilgan?"
        :value="viewers"
        @input="viewers = $event.target.value"
      />
      <PrimaryBtn class="btn-outline-dark" type="submit" @click="addMovie">
        Qo'shish
      </PrimaryBtn>
    </form>
  </Box>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      const newMovie = {
        name: this.name,
        viewers: this.viewers,
        favorute: false,
        like: false,
        id: Date.now(),
      };
      this.$emit("createMovie", newMovie);
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>
<style scoped>
.movie-add-form {
  margin-top: 1.5rem;
}
</style>
