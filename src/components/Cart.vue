/* eslint-disable */
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

      <p class="display-3 font-weight-light text-center pa-4"><v-icon size="70">mdi-cart</v-icon>SHOPPING CART</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="">ITEM</th>
                <th class="">PRICE</th>
                <th class="">TOTAL</th>
                <th class=""></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 1</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>$60.00</td>
                <td>$60.00</td>
                <td><a>X</a></td>
              </tr>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/img/shop/2.jpg')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 2</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>$40.00</td>
                <td>$40.00</td>
                <td><a>X</a></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12">
          <p class="headline">Order Summary</p>
          <p class="overline">Shipping and additional costs are calculated based on values you have entered.
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px;">$160.00</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td class="text-right" style="width: 50px;">$10.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td class="text-right" style="width: 50px;">$5.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td class="text-right" style="width: 50px;"><b>$175.00</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn outlined block color="green" class=" white--text mt-5" href="/confirmation">PAY</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4.5,
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home'
      },
      {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing'
      },
      {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts'
      }
    ]
  })
}
</script>
