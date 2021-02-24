
<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Available Items</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/nWidMEQsnAQ" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Sofa</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">3-Seater Sofa</h3>
              <h2 class="headline mb-0">Price: XX TL</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>

            </div>
          </v-card-title>
          <v-card-actions class="float-right">
            <span class="grey--text caption mb-0 pl-2">
                ({{ rating }})
            </span>
            <v-rating v-model="rating" background-color="white" color="yellow accent-4" dense half-increments size="18"
            ></v-rating>
          </v-card-actions>
          <v-card-actions>
                        <v-btn class="white--text" block color="green"><v-icon>mdi-cart</v-icon>Add to Cart</v-btn>
          </v-card-actions>
          <v-card-actions>
                        <v-btn class="white--text" block color="green" href="/product">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/6l5z2EPrnFc" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Apple Charger</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Charger-30W</h3>
              <h2 class="headline mb-0">Price: XX TL</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-title>
          <v-card-actions class="float-right">
            <span class="grey--text caption mb-0 pl-2">
                ({{ rating }})
            </span>
            <v-rating v-model="rating" background-color="white" color="yellow accent-4" dense half-increments size="18"
            ></v-rating>
          </v-card-actions>
          <v-card-actions>
                        <v-btn class="white--text" block color="green"><v-icon>mdi-cart</v-icon>Add to Cart</v-btn>
          </v-card-actions>
          <v-card-actions>
                        <v-btn class="white--text" block color="green" href="/product">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/-lUDTmj1VUM" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Sweatshirt</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Sweatshirt-Life Explorer</h3>
              <h2 class="headline mb-0">Price: XX TL</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-title>
          <v-card-actions class="float-right">
            <span class="grey--text caption mb-0 pl-2">
                ({{ rating }})
            </span>
            <v-rating v-model="rating" background-color="white" color="yellow accent-4" dense half-increments size="18"
            ></v-rating>
          </v-card-actions>
          <v-card-actions>
            <v-btn class="white--text" block color="green"><v-icon>mdi-cart</v-icon>Add to Cart</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn class="white--text" block color="green" href="/product">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomePlans',
  data: () => ({
    rating: 4.3
  })
}
</script>

<style scoped></style>
