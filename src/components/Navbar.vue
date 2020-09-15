<template>
  <div id="nav">
    <div class="logo">Newsy</div>
    <div class="links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/articles" class="link">Articles</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: "http://newsapi.org/v2/top-headlines?country=us&",
      news: [],
    };
  },
  methods: {
    async fetchNews() {
      const response = await fetch(`${this.url_base}apiKey=${this.api_key}`);
      const data = await response.json();
      console.log(data.articles);
      this.news = data.articles;
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #333333f0;
}
#nav a.router-link-exact-active {
  color: #42b983;
  background-color: #ccc;
}
.links {
  flex: 0.5;
  display: flex;

  justify-content: flex-end;
}
.link {
  display: block;
  color: white;
  font-size: 23px;
  text-decoration: none;
  padding: 30px 70px;
}
.link:hover {
  background-color: #666;
}
.logo {
  flex: 0.5;
  margin-left: 5%;
  font-size: 30px;
  color: white;
  font-weight: 800;
}
@media (max-width: 1000px) {
  .link {
    font-size: 15px;
    padding: 10px 35px;
  }
}
</style>
