<template>
	<!--<div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCards
        :post="post"
        v-for="(post, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>-->
	<div class="hello">
		<router-link :to="{ name: 'CreatePost' }">
			<b-button variant="primary">Add Post</b-button>
		</router-link>
		<div v-if="loadingCities">
			<loader />
		</div>
		<div v-else class="cardsWrapper">
			<b-card
				v-for="post in posts"
				:key="post.blogTitle"
				:title="post.blogTitle"
				img-alt="Image"
				img-top
				tag="article"
				class="singleCard"
			>
				<b-card-text>
					<div>
						<h3>{{ post.blogHTML }}</h3>
					</div>
					<!-- <b-form-rating
						id="rating-sm"
						:value="city.rating"
						variant="warning"
						readonly
						size="lg"
					></b-form-rating> -->
				</b-card-text>

				<!-- <router-link :to="{ name: 'SingleCity', params: { name: city.name } }"
					><b-button variant="primary"
						>Visit {{ city.name }}</b-button
					></router-link
				> -->
			</b-card>
		</div>
	</div>
</template>

<script>
// import BlogCards from "../../components/BlogCards";

export default {
	name: "blogs",
	// components: {
	// 	BlogCards,
	// },
	computed: {
		sampleBlogCards() {
			return this.$store.state.sampleBlogCards;
		},
		posts() {
			return this.$store.state.posts.posts;
		},

		//Per arsye se e kemi ni on/off switch ne faqe per editim/delete
		//duhet me pas ni menyre qysh me toggle on/off ato opsione
		//kjo u bo tu e qit ni vlere ne store editPost, edhe tu
		//manipulu me at vlere ktu, ja vendosim ni get per me marr vleren
		//edhe e vendosim ni set per e editu at vlere me ni payload(true/false)
		editPost: {
			get() {
				return this.$store.state.editPost;
			},
			set(payload) {
				this.$store.commit("toggleEditPost", payload);
			},
		},
	},
	created() {
		this.fetchPosts();
	},
	methods: {
		fetchPosts() {
			this.$store.dispatch("fetchPosts");
		},
	},

	beforeDestroy() {
		this.$store.commit("toggleEditPost", false);
	},
};
</script>

<style lang="scss" scoped>
.blog-cards {
	position: relative;

	.toggle-edit {
		display: flex;
		align-items: center;
		position: absolute;
		top: -70px;
		right: 0;

		span {
			margin-right: 16px;
		}

		input[type="checkbox"] {
			position: relative;
			border: none;
			-webkit-appearance: none;
			background: white;
			outline: none;
			width: 80px;
			height: 30px;
			border-radius: 20px;
			box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0, 2px, 4px,
				-1px rgba(0, 0, 0, 0.86);
		}

		input[type="checkbox"]:before {
			content: "";
			position: absolute;
			width: 30px;
			height: 30px;
			border-radius: 20px;
			top: 0;
			left: 0;
			background: #303030;
			transform: scale(1, 1);
			transition: 750ms ease all;
			box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0, 2px, 4px,
				-1px rgba(0, 0, 0, 0.86);
		}

		input:checked[type="checkbox"]:before {
			background: #fff;
			left: 52px;
		}
	}
}
.cardsWrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.singleCard {
		margin: 0.1rem;
		max-width: 20rem;
		img {
			min-height: 12rem;
			max-height: 12rem;
			object-fit: cover;
		}
	}
}
// .hello {
// 	display: flex;
// 	flex-direction: column;

// }
</style>
