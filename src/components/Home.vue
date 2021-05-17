<template>
  <v-container>
    <br /><br />
    <v-card
      class="mt-n4 mx-auto pa-6"
      color="#f5f5f5"
      max-width="1100"
      outlined
      elevation="10"
    >
      <v-card-title>
        Instructions
      </v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th />
            <template v-for="(logo, i) in logos">
              <th
                v-if="i < 3 || $vuetify.breakpoint.mdAndUp"
                :key="logo"
                class="pt-3"
              >
                <v-avatar size="40" color="transparent">
                  <v-img :src="logo" contain />
                </v-avatar>
              </th>
            </template>
          </tr>

          <tr>
            <th>
              Feature
            </th>
            <th>
              Description
            </th>
            <th>
              Links
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            style="hover:not;background:transparent"
            v-for="feature in uploadInstructions"
            :key="feature.name"
          >
            <td>{{ feature.name }}</td>
            <td>{{ feature.description }}</td>
            <td>
              <v-btn v-if="feature.link" :href="feature.link" icon>
                <v-icon> mdi-file-link </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>

        <!--<tfoot class="hidden-sm-and-down">
          <tr>
            <th class="headline font-weight-bold py-6">
              Milestone Date
            </th>
            <td>
              <base-btn alt color="primary" elevation="0">
                March
              </base-btn>
            </td>
            <td>
              <base-btn alt color="primary" elevation="0">
                April
              </base-btn>
            </td>
          </tr>
        </tfoot>-->
      </v-simple-table>
      <br />
      <v-divider></v-divider>
      <br />
      <template>
        <v-card-title>
          Upload files
        </v-card-title>

        <v-container>
          <v-row justify="space-between" no-gutters>
            <v-col cols="12" sm="6" md="8">
              <v-form @submit.prevent="submit">
                <v-layout row wrap>
                  <v-flex xs4 pr-2>
                    <v-select
                      v-model="form.selectedItems"
                      item-text="text"
                      :items="items"
                      label="Select Year of Upload"
                      solo
                    >
                    </v-select>
                  </v-flex>
                  <v-flex xs4 pl-2>
                    <v-select
                      v-model="form.selectedItems"
                      item-text="text"
                      :items="items"
                      label="Select Year of Upload"
                      solo
                    >
                    </v-select>
                  </v-flex>
                </v-layout>
                <label> {{ items }} </label>
                <v-text-field v-model="form.text"></v-text-field>
                <!--Start of file input container-->
                <!--<v-container>-->
                <v-row no-gutters>
                  <v-col cols="6" md="4">
                    <v-card
                      class="mx-auto"
                      style="border-radius: 8px; background-color: #ffc600"
                      height="150px"
                      outlined
                      v-cloak
                      v-model="files"
                      @drop.prevent="addFile"
                      @dragover.stop.prevent
                      @dragover.prevent
                    >
                      <v-card-title primary-title class="justify-center">
                        <v-flex class="wrapper">
                          <v-icon x-large> mdi-cloud-upload </v-icon>
                          <span style="font-size:12px; font-family: Segoe UI"
                            >Drag files here to upload</span
                          >
                        </v-flex>
                        <!--<li
                    v-for="(file, id) in files"
                    :key="id"
                    class="list-group-item mb-3 border-top"
                  >
                    {{ file.name }} ({{ file.size }} kb)
                  </li>-->
                      </v-card-title>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-file-input
                      show-size
                      placeholder="Upload your documents"
                      label="File input"
                      multiple
                      prepend-icon="mdi-paperclip"
                      v-cloak
                      v-model="files"
                      @drop.prevent="addFile"
                      @dragover.stop.prevent
                    >
                      <template v-slot:selection="{ text }">
                        <v-chip small label color="primary">
                          {{ text }}
                        </v-chip>
                      </template>
                    </v-file-input>
                  </v-col>
                </v-row>
                <!--</v-container>-->
                <!--End of file file upload container-->
                <br />
                <v-btn type="submit" color="success">Submit</v-btn>
                <v-btn class="mr-4" @click="submit">
                  submit
                </v-btn>
                <v-btn @click="clear">
                  clear
                </v-btn>
              </v-form>
            </v-col>
            <v-col cols="12" md="6"> </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>

    <br /><br />
  </v-container>
</template>

<script>
//import axios from 'axios';
//import { config } from 'vue/types/umd';
//const months = Array.from({length: 12}, (e, i) => {
//   return new Date(null, i + 1, null).toLocaleDateString("en", {month: "short"});
//})
export default {
  data() {
    return {
      sites: [],
      files: [],
      items: ["Apr-21", "2022", "2023", "2024"],
      form: {
        selectedItems: [],
        text: "",
      },
      uploadInstructions: [
        {
          name: "Upload Template",
          description:
            "Click the icon in the Links section to download the upload template file",
          link:
            "https://stryker.sharepoint.com/:x:/r/sites/sqdpm/Shared%20Documents/Supporting%20Documents/Upload%20File.xlsx?web=0",
        },
        {
          name: "Upload File Details",
          description:
            "Once data is prepared, name the template file to your local Downloads folder as <insert Site Name> - <insert Month & Year",
          link: "",
        },
        {
          name: "Upload How-to",
          description:
            "In the Uplaod Files form please select the Mont and Year of your upload, then drag and drop your files in the Cloud Icon container or click the paperclip icon next to the File Input field and upload your files. Once complete click the Submit button to upload to the Azure Cloud Server.",
          link: "",
        },
        {
          name: "File upload confirmation",
          description:
            "Once you click the Submit button under the Upload files section of the page you will receive a browser alert showing Success or Failure",
          link: "",
        },
      ],
    };
  },
  methods: {
    addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach((file) => {
        this.files.push(file);
        console.log(this.files);
      });
    },
    submit() {
      const formData = this.form;
      //log the form data
      console.log(formData);
      alert(
        formData.text +
          " " +
          formData.selectedItems +
          " " +
          formData.files.values.name
      );
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
    //loadSites(){
    //  axios(config)
    //  .then(function(response){
    //    console.log(JSON.stringify(response.data));
    //  })
    //  .catch(function(error) {
    //    console.log(error);
    //  });
    //}
  },
  //mounted() {
  //  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3RyeWtlci5zaGFyZXBvaW50LmNvbUA0ZTlkYmJmYi0zOTRhLTQ1ODMtODgxMC01M2Y4MWY4MTllM2IiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANGU5ZGJiZmItMzk0YS00NTgzLTg4MTAtNTNmODFmODE5ZTNiIiwiaWF0IjoxNjE5MDE2MTcyLCJuYmYiOjE2MTkwMTYxNzIsImV4cCI6MTYxOTEwMjg3MiwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEA0ZTlkYmJmYi0zOTRhLTQ1ODMtODgxMC01M2Y4MWY4MTllM2IiLCJuYW1laWQiOiI3OGU2ODkzOS1lZDYwLTRhNGQtOTI5NC0zMTVkMjI1ZGE3MDNANGU5ZGJiZmItMzk0YS00NTgzLTg4MTAtNTNmODFmODE5ZTNiIiwib2lkIjoiZGY2OWVlZGUtZWE0YS00NTU2LWIzNzYtYjRhMjc0NWQwNDAyIiwic3ViIjoiZGY2OWVlZGUtZWE0YS00NTU2LWIzNzYtYjRhMjc0NWQwNDAyIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.m91DaSEN41IapHqJ4FPixUln3ys6MkWpROkVj6YztRrUmzFvS2jRaPS1_WV-QgGT9EVYojK32_D1iDk0pJWAMkyHcwSsJSX9ITTeza1hTB2CS8kO_VMd9tWxQpqJuvp-cJrHKmXyuWwHMockkHl-eVRN3ClaHgtZgyPL-MSUF6YdCmt_KnDc5fnGiqqKQMhDAtsqmubOmW_X7UsmAQXjvAJVawVcWSVw3BqEG61JAa_4Rq-RryuM5NxHsZTh1GA0atBsSgZnyS1UI3hXdeR3iooCubHy6KfYxjPQzB3k8TUxcTLwboqJuaZbylTZWNvnQgw9TiveFfEnlo5enAFuJQ'
  //  const url = "https://stryker.sharepoint.com/sites/analytics/_api/web/lists/GetByTitle('GQO Site Target')/items"

  //  var axios = require('axios');

  //    var config = {
  //      method: 'get',
  //      url: 'https://stryker.sharepoint.com/sites/analytics/_api/web/lists/GetByTitle(\'GQO Site Target\')/items',
  //      headers: {
  //        'Accept': 'application/json;odata=verbose',
  //        'Authorization': token
  //      }
  //    };

  //    axios(config)
  //    .then(function (response) {
  //      console.log(JSON.stringify(response.data));
  //    })
  //    .catch(function (error) {
  //      console.log(error);
  //    });

  //}
};
</script>

<style>
.subhead {
  color: black;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
