<template>
  <div class="home">
    <header class="page-header">
      <h1>About</h1>
    </header>
    <p class="about-para">
      This site is about showing cool news articles by using the newsapi from
      newsapi.org. It was build by none other than Landon Schlangen. His website
      can be found at landonschlangen.com.
    </p>
    <p class="about-para">
      Hello, I'm Landon Schlangen, and I am currently learning Vue. I first
      learned React and loved it. I then learned Angular and that was alright
      too. But, now I am learning Vue, and Vue is so much fun! I still prefer
      React, but Vue is definitely better that Angular.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style>
.page-header {
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  padding: 60px;
}

@media (max-width: 1200px) {
  .page-header {
    font-size: 30px;
  }
}
.about-para {
  font-size: 20px;
  line-height: 1.5;
  margin: 0px 30%;
}
</style>
