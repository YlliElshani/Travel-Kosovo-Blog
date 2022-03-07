<template>
  <div class="admin">
    <div class="container-fluid p-0">
      <div class="admin-tabs ml-2">
        <v-tabs>
          <v-tab @click="changeTab('Dashboard')" class="p-2">Dashboard</v-tab>
          <v-tab @click="changeTab('Cities')" class="p-2">Cities</v-tab>
          <v-tab @click="changeTab('Posts')" class="p-2">Posts</v-tab>
          <v-tab @click="changeTab('Users')" class="p-2">Users</v-tab>
        </v-tabs>
      </div>
      <div class="container admin-tab-body">
        <div v-if="currentTab === 'Dashboard'">
          <admin-dashboard />
        </div>
        <div v-if="currentTab === 'Cities'">
          <cities-dashboard />
        </div>
        <div v-if="currentTab === 'Posts'">
          <posts-dashboard />
        </div>
        <div v-if="currentTab === 'Users'">
          <users-dashboard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminDashboard from "./Dashboard.vue";
import CitiesDashboard from "./Cities/CitiesDashboard.vue";
import PostsDashboard from "./Posts/PostsDashboard.vue";
import UsersDashboard from "./Users/UsersDashboard.vue";

export default {
  name: "Admin",

  components: {
    AdminDashboard,
    CitiesDashboard,
    PostsDashboard,
    UsersDashboard,
  },
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
      currentTab: "Dashboard",
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>
<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  h2 {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  .admin-info {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 32px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 32px auto;

    span {
      font-size: 14px;
    }

    .input {
      font-size: 14px;
      display: block;
      padding-bottom: 6px;

      label {
        font-size: 14px;
        display: block;
        padding-bottom: 6px;
      }

      input {
        width: 100%;
        border: none;
        background-color: #f2f7f6;
        padding: 8px;
        height: 50px;
        @media (min-width: 900px) {
        }

        &:focus {
          outline: none;
        }
      }
    }
    button {
      align-self: center;
    }
  }
}
</style>
