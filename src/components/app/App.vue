<template>
  <div class="app">
    <div class="content">
      <AppInfo
        :allMovieCount="movies.length"
        :favouriteMoviesCount="movies.filter((el) => el.like).length"
      />

      <div class="searchPanel">
        <SearchPanel :onUpdateTErmHandel="onUpdateTErmHandel" />
        <AppFilter :updateFilter="updateFilter" :filterName="filter" />
      </div>
      <Box
        class="mt-4 text-center fs-5 text-danger"
        v-if="
          (!movies.length && !isLoading) ||
          movies.filter((el) => el.like).length
        "
        >Kinolar yo'q!!!</Box
      >

      <Box class="text-center" v-else-if="isLoading"> <Loading /></Box>
      <MovieList
        v-else
        :movies="onCategory(onSearchHandel(movies, term), filter)"
        @onToggle="onToggleHandel"
        @onDelete="onDeleteHandel"
      />
      <Pagin :totalPage="totalPage" :page="page" :activeHandel="activeHandel" />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>
<script>
import Pagin from "../pagination/Pagin.vue";
import MovieAddForm from "../movieAddForm/MovieAddForm.vue";
import MovieList from "../movieList/MovieList.vue";
import AppFilter from "../appFilter/AppFilter.vue";
import SearchPanel from "../searchPanel/SearchPanel.vue";
import AppInfo from "../appInfo/AppInfo.vue";
import axios from "axios";

export default {
  components: {
    Pagin,
    MovieAddForm,
    MovieList,
    AppFilter,
    AppInfo,
    SearchPanel,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPage: 0,
    };
  },
  methods: {
   async createMovie(item) {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", item)
      this.movies.push(response.data);
      } catch (error) {
        alert(error.message)
      }

    },
    onToggleHandel({ id, prop }) {
      this.movies.map((item) => {
        if (item.id === id) {
          if (prop === "like") {
            item.like = !item.like;
          }
          if (prop === "cookie") {
            item.favorute = !item.favorute;
          }
        }
      });
    },
   async onDeleteHandel(id) {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}` )
      console.log(id);
       this.movies = this.movies.filter((c) => c.id !== id);
    } catch (error) {
      alert(error.message)
    }
    },
    onSearchHandel(arr, term) {
      return arr.filter((c) => c.name.toLowerCase().includes(term));
    },
    onUpdateTErmHandel(term) {
      this.term = term;
    },
    onCategory(arr, filter) {
      switch (filter) {
        case "mashxur":
          return arr.filter((e) => e.favorute);
        case "kopKorilganKino":
          return arr.filter((e) => e.viewers > 800);

        default:
          return arr;
      }
    },

    updateFilter(filter) {
      this.filter = filter;
    },
    async fetchMovie() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        const newArr = response.data.map((el) => ({
          id:el.id,
          name: el.title,
          viewers: el.id * 200,
          favorute: true,
          like: false,
        }));
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.movies = newArr;
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    activeHandel(page) {
      this.page = page;
    },
  },
  watch: {
    page() {
      this.fetchMovie();
    },
  },
  mounted() {
    this.fetchMovie();
  },
};
</script>
<style>
.app {
  height: 100vh;
  color: black;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.searchPanel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
