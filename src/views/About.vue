<template>
  <div class="about">
    <h1>{{hello}}</h1>
  </div>
</template>
<script>
export default {

  computed:{
    hello(){
      return this.$store.getters["base/getHello"]
    }
  },
  created(){
    this.$store.dispatch('base/getHello',{
      username:"wyue"
    })
  }
}
</script>
