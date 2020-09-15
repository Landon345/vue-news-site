<template>
  <div class="bg">
    <Navbar />
    <router-view class="main" />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  color: #2c3e50;
}

.main {
  padding-top: 100px;
  margin: 0 7%;
}
@media (max-width: 900px) {
  .main {
    margin: 0 0%;
  }
}

.bg {
  background-color: #eee;
  min-height: 100vh;
}

.card {
  display: flex;

  flex-direction: column;
  margin: 20px;
  background-color: #fff;
  box-shadow: 3px 3px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
