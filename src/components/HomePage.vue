<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWLC6KXY82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YWLC6KXY82');
</script>
<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>

  </span>
</template>

<script>
import HomeHero from './Home/HomeHero.vue'
import HomeDetails from './Home/HomeDetails.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHero,
    HomeDetails
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>
