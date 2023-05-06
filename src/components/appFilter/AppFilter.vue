<template>
  <div class="btn-group">
    <PrimaryBtn
      v-for="btn in filterButton"
      @click="onClickFilter(btn.name)"
      type="button"
      key="btn.name"
      class="btn"
      :class="[filterName === btn.name ? 'btn-dark' : 'btn-outline-dark']"
    >
      {{ btn.title }}
    </PrimaryBtn>
  </div>
</template>
<script>
export default {
  props: {
    updateFilter: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterButton: [
        {
          title: "Barcha kinolar",
          name: "all",
        },
        {
          title: "Mashxur kinolar",
          name: "mashxur",
        },
        {
          title: "Eng ko'p ko'rilgan kinolar",
          name: "kopKorilganKino",
        },
      ],
      filter: "all",
    };
  },
  methods: {
    onClickFilter(filter) {
      this.filter = filter;
      this.updateFilter(this.filter);
    },
  },
};
</script>
<style></style>
