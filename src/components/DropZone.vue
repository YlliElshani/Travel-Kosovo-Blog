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
import removeFile from "../utility/Posts/removeFile";
import getFilesDetails from "../utility/Posts/getFilesDetails";

export default {
	components: {
		VueDropzone,
	},
	props: {
		postId: String,
		initialFiles: String,
	},
	data() {
		return {
			dropzoneOptions: {
				url: `http://localhost:1000/posts/${this.postId}/uploadFile`,
				method: "put",
				thumbnailWidth: 150,
				maxFilesize: 2,
			},
		};
	},
	methods: {
		removeFile(file) {
			removeFile(this.postId, file);
		},
		async handleMount() {
			if (!this.initialFiles || this.initialFiles.length === 0) {
				return;
			}

			const documentFiles = await getFilesDetails(this.initialFiles);

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
