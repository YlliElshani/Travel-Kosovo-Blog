<template>
  <body class="container-fluid">
    <div>
      <v-btn class="primary-btn" tile @click="createPost">
        <v-icon left>
          mdi-plus
        </v-icon>
        Create Post
      </v-btn>
    </div>
    <div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="posts"
          item-key="name"
          loading
          loading-text="Loading data... Please wait"
          :search="search"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn class="success-btn" tile @click="editPost(item._id)">
              <v-icon left>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
            <v-btn class="delete-btn" tile @click="deletePost(item._id)">
              <v-icon left>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </body>
</template>

<script>
export default {
  name: "PostsDashboard",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "blogTitle",
        },
        { text: "Description", value: "blogHTML" },
        { text: "Actions", sortable: false, value: "actions" },
      ],
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$store.dispatch("fetchPost");
    },
    createPost() {
      this.$router.push({ name: "CreatePost" });
    },
    deletePost(postId) {
      this.$store.dispatch("removePost", postId);
    },
    editPost(postId) {
      this.$store.dispatch("editPost", postId);
    },
  },
};
</script>

<style>
.primary-btn {
  color: white !important;
  background-color: rgb(0, 110, 255) !important;
}
.success-btn {
  color: white !important;
  background-color: green !important;
}
.delete-btn {
  color: white !important;
  background-color: red !important;
}
</style>
