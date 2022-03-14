<template>
  <VueDropzone
    id="dropzone"
    ref="filesDropzone"
    :options="dropzoneOptions"
    :useCustomSlot="true"
    @vdropzone-mounted="handleMount"
    @vdropzone-removed-file="removeFile"
    :destroyDropzone="false"
    class="rounded-lg mb-4"
  >
    <div class="justify-content-center">
      <h3 class="text-success font-weight-bold">
        Drag and drop to upload files
      </h3>
      <div>...or click to select a file from your computer</div>
    </div>
  </VueDropzone>
</template>

<script>
import VueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import removeFileCity from "../utility/City/removeFileCity";
import getFilesDetailsCity from "../utility/City/getFilesDetailsCity";

export default {
  components: {
    VueDropzone,
  },
  props: {
    cityId: String,
    initialFilesCity: String,
  },
  data() {
    return {
      dropzoneOptions: {
        url: `http://localhost:1000/cities/${this.cityId}/uploadFile`,
        method: "put",
        thumbnailWidth: 150,
        maxFilesize: 15,
      },
    };
  },
  methods: {
    removeFile(file) {
      removeFileCity(this.cityId, file);
    },
    async handleMount() {
      if (!this.initialFilesCity || this.initialFilesCity.length === 0) {
        return;
      }

      const documentFiles = await getFilesDetailsCity(this.initialFilesCity);

      documentFiles.forEach(({ fileDetails, fileUrl }) => {
        this.$refs.filesDropzone.manuallyAddFile(
          fileDetails,
          `http://localhost:1000/${fileUrl}`
        );
      });
    },
  },
};
</script>
