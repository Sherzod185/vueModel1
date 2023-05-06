<template>
  <div>
    <input
      type="search"
      class="form-control search-input"
      placeholder="Kinolarni qidirish"
      :value="term"
      @input="changeHandel"
    />
  </div>
</template>
<script>
export default {
  props: {
    onUpdateTErmHandel: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods:{
    changeHandel(e){
      this.term=e.target.value
    this.onUpdateTErmHandel(this.term)
    }
  }
};
</script>
<style>
.search-input {
  margin-top: 1.5rem;
  padding: 1.1rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  background-color: #fcfaf5;
  margin-bottom: 1rem;
}
</style>
