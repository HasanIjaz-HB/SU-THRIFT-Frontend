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
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item-title :key="index">
            <v-list-item-subtitle>
              {{ item.title }}
            </v-list-item-subtitle>
          </v-list-item-title>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="brown darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/">HOME</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/login-page">LOGIN</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/signup-page">Sign UP</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/cart"
        ><v-icon>mdi-cart</v-icon>CART</v-btn
      >
      <v-btn  text class="hidden-sm-and-down" to="/user/profile"
      ><v-icon>mdi-account</v-icon>Profile</v-btn>
    </v-app-bar>

  </span>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      appTitle: 'SU-THRIFT STORE',
      drawer: false,
      items: [
        {title: 'Home'},
        { title: 'Login' },
        { title: 'Sign Up' },
        { title: 'Cart' },
        { title: 'Profile' }
      ]
    }
  }
}
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
