<template>
	<section>
		<div v-if="this.post" class="row justify-content-center">
			<div class="col-5 col-md-8 col-lg-8">
				<div class="flex">
					<h1>
						{{ this.post.blogTitle }}
					</h1>

					<p>Description: {{ this.post.blogHTML }}</p>

				</div>
				<Dropzone :postId="this.$route.params.id" :initialFiles="post.files" />
			</div>
			<router-link class="goToPosts" :to="{ name: 'Posts' }">
				Go to Posts
			</router-link>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.goToPosts{
		text-decoration: none;
		margin-left:20%;
		margin-right: 60%;
		width: 20%;
		color: black;
		font-size: 20px;
		text-transform: bold;
	}
</style>


<script>
import getPost from "../../utility/Posts/getPost";
import Dropzone from "@/components/DropZone";

export default {
	components: {
		Dropzone,
	},
	created() {
		this.fetchPost();
	},
	data() {
		return {
			post: null,
		};
	},
	methods: {
		async fetchPost() {
			this.post = await getPost(this.$route.params.id);
		},
	},
};
</script>
