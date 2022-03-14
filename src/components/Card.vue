<template>
	<body class="container">
		<h2>
			Our blogposts!
		</h2>
		<div>
			<div class="posts">
				<img v-if="src" :src="src" style="max-height: 150px" />
				<h5>{{ post.blogTitle }}</h5>
				<p>
					{{ post.blogHTML }}
				</p>
				<div class="btns">
					<router-link
						class="link"
						:to="{ name: 'View', params: { id: post._id } }"
						>See more</router-link
					>
					<button type="button" @click="removePost(post._id)">
						Delete
					</button>
				</div>
			</div>
			<hr />
		</div>
	</body>
</template>

<script>
// import deletePost from "../utility/Posts/deletePost";
export default {
	props: {
		post: Object,
	},
	computed: {
		src() {
			const filename = this.post.files?.split(";")[0];

			return filename ? `http://localhost:1000/static/${filename}` : null;
		},
		posts() {
			return this.$store.state.posts.posts;
		},
	},
	methods: {
		removePost(postId) {
			this.$store.dispatch("removePost", postId);
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	h2 {
		text-align: center;
		align-self: center;
	}
}

.posts {
	display: flex;
	flex-direction: row;
	padding: 15px;
	margin-right: 5%;
	margin-left: 5%;
	width: 90%;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		.posts {
			flex-direction: row;
		}

		img {
			display: none;
		}

		h5 {
			margin-left: 5%;
			margin-right: 3%;
			padding: 10px;
			text-align: center !important;
			width: 100% !important;
		}
	}

	img {
		width: 35%;
		height: 100%;
	}

	h5 {
		margin-left: 5%;
		margin-right: 3%;
		font-size: 28px;
		padding: 10px;
		text-align: center;
		width: 15%;
	}

	p {
		margin-top: 3%;
		font-size: 23px;
		margin-bottom: 3%;
	}

	@media (max-width: 700px) {
		.btns {
			width: 190% !important;
			.link {
				width: 150%;
			}
		}
	}

	.btns {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 15px;
		width: 30%;

		.link {
			padding: 15px;
		}

		button {
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
			margin-left: 5%;
		}
	}
}
</style>
