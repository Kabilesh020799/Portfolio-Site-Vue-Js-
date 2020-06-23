<template>
    <div class="container" >

  <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">{{title}}</h1>

  <hr class="mt-2 mb-5">

  <div class="row text-center text-lg-left" >

    <div class="col-lg-3 col-md-4 col-6"  v-for="u in url" :key="u">
      <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" :src="u">
          </a>
    </div>
  </div>

</div>
</template>
<script>
export default {
    props: {
                url: {
                    type: Array,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                }
            }
}
</script>
<style scoped>
    h1{
        color: white;
        font-family: 'Piedra', cursive;
    }
</style>