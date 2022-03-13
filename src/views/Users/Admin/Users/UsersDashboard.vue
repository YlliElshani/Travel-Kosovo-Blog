<template>
  <div>
    <div>
      <h1>Users Dashboard</h1>
    </div>
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h3>Add admin</h3>
        <div class="input">
          <input
            placeholder="Enter user email to make them an admin"
            type="text"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
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
          :headers="headers"
          :items="users"
          item-key="username"
          loading
          loading-text="Loading data... Please wait"
          :search="search"
        >
          <template v-slot:[`item.users`]="{ item }">
            <v-chip class="ma-2" color="success" outlined>
              <v-icon left>
                mdi-star
              </v-icon>
              {{ item.users }}
            </v-chip>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn class="delete-btn" tile @click="deleteUser(item.users)">
              <v-icon left>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
  </div>
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
        { text: "Actions", sortable: false, value: "actions" },
      ],
    }
  },
  mounted: function() {
      this.fetchUsers()
      console.info('mounted, users:', this.users) // // => at this point, this.users is not yet ready.
  },
  computed: {
      items: function() {
          return this.users
      }
  },
  methods: {
    async fetchUsers () {
        await db.collection('users').get()
            .then(snapshot => {
                snapshot.forEach( doc => {
                    const user = doc.data()
                    console.log('forEarch:' , user)
                    user.id = doc.id
                    this.users.push(user)
                })
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users)  // => at this point, this.users is not yet ready.
    },
  }

};
</script>

<style scoped lang="scss">
    .container{
      border: 3px solid black;
      padding: 16px;
      margin-top: 3%;
      margin-bottom: 5%;

      .container input{
        padding: 20px;
        font-size: 20px;
        width: 50%;
        border: 1px solid #303030;
      }

      .container button{
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

      .container h2{
        margin-bottom: 3%;
      }
    }
</style>