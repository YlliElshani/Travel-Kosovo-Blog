<template>
	<div class="col-lg-4 mt-4 col-md-6 col-sm-12">
		<div class="card">
			<img
				v-if="src"
				:src="src"
				class="card-img-top"
				style="max-height: 150px"
			/>
			<div class="card-body">
				<h5 class="card-title">{{ post.blogTitle }}</h5>
				<!-- <p class="card-text">Square meters: {{ realEstate.squareMeters }}</p> -->
				<router-link
					class="btn btn-primary"
					:to="{ name: 'View', params: { id: post._id } }"
					>View</router-link
				>
				<button type="button" class="btn btn-danger ml-2" @click="deletePost">
					Delete
				</button>
			</div>
		</div>
	</div>
</template>

<script>
// import apiRequest from "../utility/apiRequest";
import deletePost from "../utility/Posts/deletePost";
// import getPostList from "../utility/Posts/getPostList";
export default {
	props: {
		post: Object,
	},
	computed: {
		src() {
			const filename = this.post.files?.split(";")[0];

			return filename ? `http://localhost:1000/static/${filename}` : null;
		},
	},
	methods: {
		async deletePost() {
			try {
				await deletePost(this.post._id);

				// const result = await getPostList();
				// this.$store.dispatch("fetchPost", result);
			} catch (err) {
				console.log(`errori    ${err.message}`);
			}
		},
	},
};
</script>
