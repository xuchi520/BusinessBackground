<template>
  <div id="app">
      <left-nav></left-nav>
      <div class="main">
      <router-view></router-view>
      </div>

    </div>
</template>
<script>
  import LeftNav from './components/leftNav.vue'
    export default {
        data() {
            return {}
        },
        computed: {},
        components: {LeftNav},
        methods: {}
    }
</script>
<style>
  #app {
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    height:100%;
  }

  .main{
  float: left;
  width: 95%;
  background-color: #fff;
  height: 100%;
  overflow: auto;
}
</style>
