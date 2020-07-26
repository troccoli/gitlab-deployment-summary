<template>
  <v-app id="app">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col lg="10">
            <v-banner color="blue darken-4" class="rounded text-center">
              <h2 data-e2e="app-title" class="pa-2 text-uppercase white--text">GitLab deployment summary</h2>
            </v-banner>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col lg="10">
            <v-card>
              <v-card-title data-e2e="options-title">Choose your options</v-card-title>
              <v-card-text></v-card-text>
              <v-card-actions>
                <v-btn>Build summary</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col lg="10">
            <v-card>
              <v-card-title data-e2e="summary-title">Summary</v-card-title>
              <v-card-text data-e2e="summary-text" class="ma-3 grey darken-4 white--text" style="font-family: 'Courier 10 Pitch'; font-size: small">
                <span>$ git log --no-merges a32ced9672df201e3fe82daf035012e7ad50ffbc..7226f7654876835773a0b0463ce21b727fe81e38 --format='%aN' | sort -u</span>
                <v-spacer/>
                <span>Giulio Troccoli-Allard</span>
                <v-spacer/>
                <span>Matt Campbell</span>
                <v-spacer/>
                <span>Thomas Grabarczyk</span>
                <v-spacer/>
                <span>$ git log --first-parent master --merges a32ced9672df201e3fe82daf035012e7ad50ffbc..7226f7654876835773a0b0463ce21b727fe81e38 --pretty=format:'%h %s'</span>
                <v-spacer/>
                <span>7226f76548 Merge branch 'PCB-180-lunch-break-cherry-pick' into 'master'</span>
                <v-spacer/>
                <span>6311e882eb Merge branch 'core-306-new-endpoint-for-most-recent-admin-tools' into 'master'</span>
                <v-spacer/>
                <span>bac18b1232 Merge branch 'laravel-self-diagnosis-trans' into 'master'</span>
                <v-spacer/>
                <span>32b46dc1a3 Merge branch 'SHOP-1689-meeting-training-contract-shop' into 'master'</span>
              </v-card-text>
              <v-card-actions>
                <v-btn>Slack it!</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
<!--        <v-row align="center" justify="center">-->
<!--          <v-col cols="12" sm="8" md="4">-->
<!--            <v-card class="elevation-12">-->
<!--              <v-toolbar color="primary" dark flat>-->
<!--                <v-toolbar-title data-e2e="app-title">GitLab Deployment Summary</v-toolbar-title>-->
<!--                <v-autocomplete :items="projects"-->
<!--                                class="mt-7"-->
<!--                                data-e2e="project"-->
<!--                />-->
<!--              </v-toolbar>-->
<!--              <v-card-actions>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-btn color="primary" outlined disabled data-e2e="slack-button">Slack it!</v-btn>-->
<!--              </v-card-actions>-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  // import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',

    components: {
      // HelloWorld,
    },

    data: () => ({
      //
    }),
  };
</script>
