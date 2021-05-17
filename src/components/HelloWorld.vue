<template>
  <v-container>
    <br /><br />
    <v-card class="container" v-cloak v-model="files" @drop.prevent="addFile" @dragover.prevent>
      <h4>Drag and Drop here</h4>
      <li
        v-for="(file, id) in files"
        :key="id"
        class="list-group-item mb-3 border-top"
      >
        {{ file.name }} ({{ file.size }} kb)
      </li></v-card
    >
    <v-file-input
      v-cloak
      v-model="files"
      @drop.prevent="addFile"
      @dragover.prevent
      show-size
      placeholder="Upload your documents"
      label="File input"
      multiple
      prepend-icon="mdi-paperclip"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    <v-card>
      <v-card-title>
        Upload files
      </v-card-title>
      <!--Start of file input container-->
      <!--<v-container>-->
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <v-card
            v-cloak
            v-model="files"
            @drop.prevent="addFile"
            @dragover.stop.prevent
            @dragover.prevent
            class="mx-auto"
            style="border-radius: 8px; background-color: #ffc600"
            height="150px"
            outlined
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
    </v-card>

    <br /><br />
  </v-container>
</template>

<script>
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
  },
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
