<template>
  <div id="app">
    <nav>
      <router-link class="nav_item" to="/">Home</router-link>
      <router-link class="nav_item" to="/xiaoTuXian">XiaoTuXian</router-link>
      <router-link class="nav_item" to="/myTable">MyTable</router-link>
    </nav>
    <div>
      <keep-alive :include="['XiaoTuXian']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang='less' scoped>
body,
html {
  margin: 0 0;
  border: none;
  width: 100%;
  height: fit-content;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: fit-content;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: #333333;
}

.nav_item {
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  width: 100px;
  color: rgb(234, 234, 234);
  background-color: #333333;
  text-decoration: none;
}

.nav_item:hover {
  background-color: #626262;
}

.router-link-exact-active {
  background-color: #626262;
  color: rgb(80, 196, 157);
}

.nav_item {
  border-left: 1px solid #0d0d0d;
}

.nav_item:last-child {
  border-right: 1px solid #0d0d0d;
}
</style>
