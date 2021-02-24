<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWLC6KXY82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YWLC6KXY82');
</script>
<template>
  <div class="thank-you-content align-justify py40 pl20">
      <v-container>
      <p class="display-3 font-weight-light text-center pa-4"><v-icon size="70">mdi-cart-check</v-icon>ORDER CONFIRMATION</p>
      </v-container>
    <div class="container">
        <div class="row">
            <div class="col-md-6 pl20 pr20">
                <h3>Your purchase</h3>
                <p>You have successfuly placed the order. You can check status of your order by using our <b>delivery status</b>  feature. You will receive an order confirmation e-mail with details of your order and a link to track its progress.</p>
                <p>The order number is 100000</p>
                <v-btn class="white--text" block color="green" href="/">RETURN TO SHOPPING</v-btn>
            </div>
            <div class="col-md-6 bg-cl-secondary thank-you-improvment">
                <h3>What we can improve?</h3>
                <p class="mb25">Your feedback is important for us. Let us know what we could improve.</p>
                <form>
                    <div>
                        <div class="col-75">
                            <textarea type="text" name="body" placeholder="Type your opinion" style="width:100%; height:82px"></textarea>
                        </div>
                    </div>
                    <v-btn class="white--text" block color="green" href="/">Submit Feedback</v-btn>
                </form>
                <div></div>
            </div>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderConfirmation'
}
</script>
