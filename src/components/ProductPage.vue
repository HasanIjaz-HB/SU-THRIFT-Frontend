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
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              src="http://source.unsplash.com/-lUDTmj1VUM"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">Sweatshirt-Life Explorer</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">$60.00</p>
              <v-spacer></v-spacer>
              <span class="grey--text caption mb-0 pl-2">
                ({{ rating }})
              </span>
              <v-rating v-model="rating" class="" readonly background-color="white"
                        color="yellow accent-4" dense size="20" halfincrement ></v-rating>
              <span class="body-2 font-weight-thin"> 1 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
            </p>
            <v-btn class="ma-2 white--text" color="green"><v-icon>mdi-cart</v-icon>Add to Cart</v-btn>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab >Description</v-tab>
            <v-tab >Materials</v-tab>
            <v-tab>REVIEWS</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true"
              >
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive=true
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title><v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-container>
  </div>

</template>
<script>
export default {
  data: () => ({
    rating: 4.5,
    item: 1,
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Lorem ipsum dolor?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                        '\n'
      }
    ]
  })
}
</script>
