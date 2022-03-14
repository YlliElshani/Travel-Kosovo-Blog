<template>
  <body>
    <div>
      <h1>Users Dashboard</h1>
    </div>
    <div>
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add admin</h2>
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
  </body>
</template>

<script>
export default {
  name: "UsersDashboard",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
};
</script>

<style></style>
