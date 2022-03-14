<template>
	<body>
		<div class="container">
      <button>
        <b-button variant="primary"><router-link :to="{ name: 'CreateCity' }">Add a post</router-link></b-button>
      </button>
			<div class="row">
				<Card v-for="entry in postList" :key="entry._id" :post="entry" />
			</div>
		</div>
	</body>
</template>

<script>
import Card from "../../components/Card.vue";
import { mapGetters } from "vuex";

export default {
	components: {
		Card,
	},
	name: "blogs",
	computed: {
		sampleBlogCards() {
			return this.$store.state.sampleBlogCards;
		},
		posts() {
			return this.$store.state.posts.posts;
		},
		...mapGetters({
			postList: "postList",
		}),
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
		this.fetchPost();
	},
	methods: {
		async fetchPost() {
			// const result = await getPostList();
			this.$store.dispatch("fetchPost" /*, result*/);
		},
	},

	beforeDestroy() {
		this.$store.commit("toggleEditPost", false);
	},
};
</script>

<style lang="scss" scoped>

.dark button{
  background-color: #3a3a3a; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}


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
</style>
