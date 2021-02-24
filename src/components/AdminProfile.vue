<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWLC6KXY82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YWLC6KXY82');
</script>

<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light text-center pa-4"><v-icon size="70">mdi-account</v-icon>ADMIN ACCOUNT</p>
      <p class="m0 mb5">CAMPAIGNS</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
            <v-layout row wrap>
                <v-flex xs12 sm12 md4>
                    <v-card>
                    <v-card-title primary-title>
                        <h2 class="mb-0">SU-DISCOUNT</h2>
                        <div>
                            <h4 class="mb-0">CAMPAIGN ID: 1</h4>
                            <h4 class="mb-0">50% OFF</h4>
                        <div>
                            GET YOUR SU-NUMBER VERIFIED IN ORDER TO AVAIL THIS DISCOUNT
                        </div>
                            <h4 class="mb-0">START DATE: 22/01/2021</h4>
                            <h4 class="mb-0">END DATE: 30/01/2021</h4>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                                    <v-btn class="white--text" block color="green" href="/product"><v-icon>mdi-hand-okay</v-icon>START CAMPAIGN</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                                    <v-btn class="white--text" block color="green" href="/product"><v-icon>mdi-stop-circle</v-icon>END CAMPAIGN</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-col>
        <v-col :cols="12" md="3" sm="12">
          <p class="headline">MY PROFILE</p>
          <p class="overline">
            Name: Administrator <br>
            E-mail: admin@gmail.com <br>
            Contact: 090078601
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td><v-btn>ADMIN ROLES</v-btn></td>
              </tr>
              <tr>
                <td><v-btn>CONFIGURATION</v-btn></td>
              </tr>
              <tr>
                <td><v-btn href="/product">BACKEND-UI</v-btn></td>
              </tr>
              <tr>
                <td><v-btn href="/product">ANALYSIS</v-btn></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'AdminProfile'
}
</script>
