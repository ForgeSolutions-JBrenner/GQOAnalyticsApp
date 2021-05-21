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

        <!--<v-container>
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
                <label v-for="item in items" :key="item.id"> {{ items }} </label>
                <label> {{files}} </label>
                <v-text-field v-model="form.text"></v-text-field>
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
        </v-container>-->
        <!--Start of file input container-->
        <v-container v-show="code">
          <v-row no-gutters>
            <v-col cols="6" md="4">
              <label class="file-select">
                <!-- We can't use a normal button element here, as it would become the target of the label. -->
                <div class="select-button">
                  <span v-if="imageData"
                    >Selected File: {{ imageData.name }}</span
                  >
                  <!-- Display the filename if a file has been selected. -->
                  <span v-else>Select File</span>
                </div>
                <!-- Now, the file input that we hide. -->
                <input type="file" primary @change="previewImage" />
              </label>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-show="!code" class="text-center">
          <v-progress-circular
            id="progress"
            :value="uploadValue"
            :rotate="360"
            :size="100"
            :width="15"
            color="#ffb500"
          >
            {{ uploadValue.toFixed() + "%" }}
          </v-progress-circular>
        </v-container>
        <v-container class="text-center">
          <label v-if="uploadValue.toFixed() == 100">
            {{ imageData.name + " Uploaded Successfully!" }}
          </label>
        </v-container>
        <!--End of file file upload container-->
        <div class="text-center">
          <br /><br />
          <v-btn primary color="success" v-on:click="code = !code" @click="onUpload"
            >Upload</v-btn
          >
        </div>
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
import firebase from "firebase";
export default {
  props: {
    fileVal: File,
  },
  data() {
    return {
      code: true,
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
            "In the Uplaod Files form please select the Month and Year of your upload, then drag and drop your files in the Cloud Icon container or click the paperclip icon next to the File Input field and upload your files. Once complete click the Submit button to upload to the Azure Cloud Server.",
          link: "",
        },
        {
          name: "File upload confirmation",
          description:
            "Once you click the Submit button under the Upload files section of the page you will receive a browser alert showing Success or Failure",
          link: "",
        },
      ],
      imageData: null,
      picture: null,
      uploadValue: 0,
      interval: {},
      value: 0,
      dialog: false,
    };
  },
  methods: {
    addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach((file) => {
        this.files.push(file);
        alert("File added to que Successfully now click Upload!");
      });
    },
    handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      this.$emit("input", e.target.files[0]);
    },
    onFileChange(event) {
      var fileData = event.target.files[0];
      alert((this.fileName = fileData.name));
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
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },

        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            alert(
              "Your file has been uploaded Successfully, feel free to close the browser"
            );
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.subhead {
  color: black;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.file-select > .select-button {
  padding: 10px;

  color: black;
  background-color: #ffb500;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>
