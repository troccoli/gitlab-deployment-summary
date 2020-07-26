<template>
  <v-app id="app">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title data-e2e="app-title">GitLab Deployment Summary</v-toolbar-title>
              </v-toolbar>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" outlined disabled data-e2e="slack-button">Slack it!</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
