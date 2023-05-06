<template>
  <Box class="text-center"
    ><nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item m-1">
          <span class="page-link"  aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        <li
          v-for="pagesNumber in totalPage"
          class="page-item m-1" key="pagesNumber"
          :class="pagesNumber === page ? 'active' : ''" @click="activeHandel(pagesNumber)"
        >
          <span class="page-link" >{{ pagesNumber }}</span>
        </li>

        <li class="page-item m-1">
          <span class="page-link"  aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav></Box
  >
</template>
<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    activeHandel:{
      type:Function,
      required:true
    }
  },

};

</script>
<style scoped>
li{
  cursor: pointer;
}</style>
