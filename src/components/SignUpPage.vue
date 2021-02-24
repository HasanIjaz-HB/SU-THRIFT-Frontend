<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWLC6KXY82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YWLC6KXY82');
</script>
<template>
  <div class="signup">
    <v-container class="brown lighten-2">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card
            class="pa-md-4 ma-5"
            color="white"
            width="500px"
            height="750px"
          >
            <v-container class="text-center">
              <h2 class="text-center"><b>Sign-Up Page</b></h2>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    clearable
                    :rules="genRules"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="fname"
                    label="First Name"
                    clearable
                    :rules="genRules"
                    hide-details="auto"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="lname"
                    label="Last Name"
                    clearable
                    :rules="genRules"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="Email"
                    clearable
                    :rules="emailRules"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        hint="You have to be at least 18."
                        readonly
                        :rules="genRules"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="maxDate()"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    hint="At least 8 characters"
                    :rules="[passwRules.required, passwRules.min]"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    clearable
                    counter
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="passwordc"
                    label="Re-enter password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwcRules1()]"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    clearable
                    counter
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    @click="submit"
                    :class="{
                      'blue darken-4 white--text ': valid,
                      disabled: !valid,
                    }"
                    >Sign-Up</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3 style="font-size: 14px">or login with:</h3>
                </v-col>
              </v-row>
              <v-row class="text-md-center">
                <v-col>
                  <v-btn fab class="btntw"></v-btn>
                </v-col>
                <v-col>
                  <v-btn fab class="btnfb"></v-btn>
                </v-col>
                <v-col>
                  <v-btn fab class="btngp"></v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data () {
    return {
      date: null,
      menu1: false,
      show: false,
      isDisabled: false,
      fname: '',
      lname: '',
      username: '',
      password: '',
      passwordc: '',
      email: '',
      genRules: [(value) => !!value || 'Required'],
      userRules: [
        (value) => !!value || 'Required',
        (value) => value.length >= 8 || 'At least 8 characters.'
      ],
      emailRules: [
        (value) => !!value || 'Required',
        (value) =>
          (value && value.includes('@')) ||
          'Please enter a proper email address.'
      ],
      passwRules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'At least 8 characters.',
        isAscii: (val) =>
          !val.includes('/[p{ASCII}]+/u') || 'Only ASCII characters.'
      }
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    maxDate () {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 18)
      return date.toISOString().substr(0, 10)
    }
  },
  computed: {
    passwcRules1 () {
      return () => this.password === this.passwordc || 'Password must match'
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
  text-align: center;
}
.btntw {
  background: url("../assets/twitter1.svg");
  background-size: contain;
}
.btnfb {
  background: url("../assets/facebook.svg");
  background-size: contain;
}
.btngp {
  background: url("../assets/google-plus.svg");
  background-size: contain;
}
</style>
