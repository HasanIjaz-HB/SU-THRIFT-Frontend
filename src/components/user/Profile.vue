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

      <p class="display-3 font-weight-light text-center pa-4"><v-icon size="70">mdi-account</v-icon>MY ACCOUNT</p>
      <p class="m0 mb5">My Orders</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="">ORDER ID</th>
                <th class="">ITEM</th>
                <th class="">DATE</th>
                <th class="">PRICE</th>
                <th class="">RECEIPT</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>12344</td>
                <td>
                  <v-list-item
                  key="1"
                >
                  <v-list-item-avatar>
                    <v-img></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 1</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                </td>
                <td>16/08/2020</td>
                <td>$60.00</td>
                <td><v-btn class="white--text" block color="green">Receipt</v-btn></td>
              </tr>
              <tr>
                <td>12344</td>
                <td>
                  <v-list-item
                  key="1"
                >
                  <v-list-item-avatar>
                    <v-img></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 1</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                </td>
                <td>16/08/2020</td>
                <td>$40.00</td>
                <td><v-btn class="white--text" block color="green">Receipt</v-btn></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12">
          <p class="headline">MY PROFILE</p>
          <p class="overline">
            Name: XYZ <br>
            E-mail: XYZ@gmail.com <br>
            Address: Room 108 Yurt B7 <br>
            Contact: 055876382193
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>MY LOYALTY NUMBER</td>
              </tr>
              <tr>
                <td>MY SHIPPING DETAILS</td>
              </tr>
              <tr>
                <td>MY REVIEWS</td>
              </tr>
              <tr>
                <td>PAYMENT METHOD</td>
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
  name: 'Profile'
}
</script>
