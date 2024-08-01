<template>
  <div id="app">
    <billList/>
  </div>
</template>

<script>
  import imageSwitch from '@/components/imageSwitch.vue'
  import notebook from '@/components/notebook.vue'
  import shoppingCart from '@/components/shoppingCart.vue'
  import billList from '@/components/billList.vue'

  export default {
    name: 'App',
    components:{
      imageSwitch,
      notebook,
      shoppingCart,
      billList
    }
  }
</script>

<style lang='less'>

img{
  height:200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  color: #2c3e50;
}

</style>
