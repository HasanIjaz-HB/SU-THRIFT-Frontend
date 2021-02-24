<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWLC6KXY82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YWLC6KXY82');
</script>
<template>
  <div id="app">
    <v-app id="login">
      <v-container class="brown lighten-2">
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card
              class="pa-md-4 mx-lg-auto"
              color="white"
              width="500px"
              height="500px"
            >
            <v-container class="text-center">
              <h2 class="text-center"><b>Login Page</b></h2>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Email"
                    clearable
                    name="Email"
                    v-model="email"
                    :rules="emailRules"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwRules.required, passwRules.min]"
                    :type="show ? 'text' : 'password'"
                    name="Password"
                    label="Password"
                    clearable
                    @click:append="show = !show"
                  ></v-text-field></v-col>
              </v-row>
              <v-row><v-col style="font-size: 14px" class="text-right"><a href="/forgot-pass">Forgot your password?</a></v-col></v-row>
              <v-row>
                <v-col class="text-center" >
                    <v-btn  @click="submit" :class=" { 'blue darken-4 white--text ' : valid, disabled: !valid }">Login</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col >
                  <p style="font-size: 14px"> Not registered? <a href="/signup-page"> Sign up now</a>, or login with:</p>
                </v-col>
              </v-row>
              <v-row class="text-md-center">
                <v-col>
                  <v-btn fab class='btntw' ></v-btn>
                </v-col>
                <v-col >
                  <v-btn fab class='btnfb'></v-btn>
                </v-col>
                <v-col>
                 <v-btn fab class='btngp'></v-btn>
                </v-col>
              </v-row>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>

</template>

<script>
export default {
  name: 'LogInPage',
  data () {
    return {
      show: false,
      password: '',
      email: '',
      emailRules: [
        (value) => !!value || 'Required',
        (value) =>
          (value && value.includes('@')) ||
          'Please enter a proper email address.'
      ],
      passwRules:
      {required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    emailCheck () {
      if (this.email.includes('@')) {
        alert('Successful!')
      } else {
        alert('Please insert a proper username or e-mail address')
      }
    },
    authentication () {}
  }
}
</script>

<style scoped>
.LoginPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btntw{
  background: url("../assets/twitter1.svg");
  background-size: contain;
}
.btnfb{
  background: url("../assets/facebook.svg");
  background-size: contain;
}
.btngp{
  background: url("../assets/google-plus.svg");
  background-size: contain;
}
h1,
h2 {
  font-weight: normal;
}

#button {
  text-align: center;
  margin-top: 20px;
}

</style>
