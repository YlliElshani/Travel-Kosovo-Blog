<template>
	<div class="createPost">
		<form action="" @submit.prevent="addPost">
			<div class="container">
					<input
						required
						type="text"
						placeholder="Enter blog title"
						v-model="post.blogTitle"
					/>
					<textarea v-model="post.blogHTML" />
					<button type="submit">Continue</button>
			</div>
		</form>
	</div>
</template>

<script>
import createPost from "../../../utility/Posts/createPost";

export default {
	name: "CreatePost",

	components:{
	},

	data() {
		return {
			file: null,
			error: null,
			errorMsg: null,
			editorSettings: {
				modules: {
					imageResize: {},
				},
			},
			post: {
				blogTitle: "",
				imgPath: "",
				blogHTML: "",
			},
		};
	},


	methods: {
		fileChange() {
			this.file = this.$refs.blogPhoto.files[0];
			const fileName = this.file.name;
			this.$store.commit("fileNameChange", fileName);
			this.$store.commit("createFileURL", URL.createObjectURL(this.file));
		},


		async addPost() {
			try {
				const newpost = await createPost({
					...this.post,
				});
				this.$router.push({ name: "View", params: { id: newpost._id } });
			} catch (error) {
				console.log(`Errori: ${error}`);
			}
		},

		openPreview() {
			this.$store.commit("openPhotoPreview");
		},
	},

	computed: {
		profileId() {
			return this.$store.state.profileId;
		},

		blogCoverPhotoName() {
			return this.$store.state.blogPhotoName;
		},

		blogTitle: {
			get() {
				return this.$store.state.blogTitle;
			},
			set(payload) {
				this.$store.commit("updateBlogTitle", payload);
			},
		},
		blogHTML: {
			get() {
				return this.$store.state.blogHTML;
			},
			set(payload) {
				this.$store.commit("newBlogPost", payload);
			},
		},
	},
};
</script>

<style lang="scss">


		@media (max-width:900px) {
						.createPost{
					justify-content: center !important;
					margin-right: 0%;
					margin-left: 0%;
			}
		}

.createPost {

	    @media (max-width: 900px) {

				.container{
					width: 100% !important;
					flex-wrap: nowrap;
					justify-content: center;
				}

        }

	margin-right: 5%;
	margin-left: 5%;
	width:90%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding: 15px;

	.container{
		padding: 15px;
		margin-top: 3%;
		margin-bottom: 3%;
		width: 160%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		input{
			border: 1px solid black;
			font-size: 20px;
			height: 20%;
			width: auto;
			padding: 15px;
			margin-bottom: 3%;
			margin-top: 3%;
		}

		textarea{
			font-size: 20px;
			height: 20%;
			width: auto;
			padding: 15px;
			    -webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
			border: 3px solid black;
			margin-bottom: 3%;
			margin-top: 3%;
		}
		button{
			background-color: black;
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			margin-bottom: 3%;
			margin-top: 3%;
		}
	}
}
</style>
