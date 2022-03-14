<template>
  <body>
    <div>
      <h1>Users Dashboard</h1>
    </div>
    <div class="container-fluid">
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
            class="users-table"
            :headers="headers"
            :items="users"
            item-key="username"
            loading
            loading-text="Loading data... Please wait"
            :search="search"
          >
            <template v-slot:[`item.roles`]="{ item }">
              <div
                class="d-flex justify-content-center"
                v-for="role in item.roles"
                :key="role"
              >
                <v-chip class="chip-color ma-2" color="primary">
                  {{ role === 1 ? "Admin" : "User" }}
                </v-chip>
              </div>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                v-if="!item.roles.includes(1)"
                class="primary-btn"
                tile
                @click="makeAdmin(item.id)"
              >
                <v-icon left>
                  mdi-account-edit
                </v-icon>
                Make Admin
              </v-btn>
              <v-btn
                v-else
                class="primary-btn"
                tile
                @click="removeAdmin(item.id)"
              >
                <v-icon left>
                  mdi-account-settings
                </v-icon>
                Remove Admin
              </v-btn>
              <div class="pl-1">
                <v-btn class="delete-btn" tile @click="deleteUser(item.users)">
                  <v-icon left>
                    mdi-delete
                  </v-icon>
                  Delete
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
  </body>
</template>

<script>
import db from "../../../../firebase/firebaseInit";

export default {
  name: "UsersDashboard",

  data: () => {
    return {
      users: [],
      adminEmail: "",
      functionMsg: null,
      search: "",
      headers: [
        {
          text: "Username",
          align: "start",
          value: "username",
        },
        { text: "First Name", value: "firstName" },
        { text: "Email", value: "email" },
        { text: "Roles", value: "roles" },
        { text: "Actions", sortable: false, value: "actions" },
      ],
    };
  },
  mounted: function() {
    this.fetchUsers();
  },
  computed: {
    items: function() {
      return this.users;
    },
  },
  methods: {
    makeAdmin(id) {
      this.$store.dispatch("makeAdmin", id).then(() => {
        window.location.reload();
      }).catch((err) => console.log(err));
    },
    removeAdmin(id) {
      this.$store.dispatch("removeAdmin", id).then(() => {
        window.location.reload();
      }).catch((err) => console.log(err));
    },
    async fetchUsers() {
      this.users = []
      await db
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const user = doc.data();
            user.id = doc.id;
            this.users.push(user);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.users-table {
  ::v:deep {
    table {
      background-color: red;
      padding: 1rem;
    }
  }
}
.chip-color {
  background-color: rgb(0, 110, 255) !important;
}
.container {
  border: 3px solid black;
  padding: 16px;
  margin-top: 3%;
  margin-bottom: 5%;

  .container input {
    padding: 20px;
    font-size: 20px;
    width: 50%;
    border: 1px solid #303030;
  }

  .container button {
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

  .container h2 {
    margin-bottom: 3%;
  }
}
</style>
