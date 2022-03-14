<template>
  <body class="profile" :class="mode">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="container" :class="mode">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div v-if="isAdmin" class="admin-badge">
          <adminIcon class="icon" />
          <span>Admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </body>
</template>

<script>
import Modal from "../../../components/Modal";
import adminIcon from "../../../assets/Icons/user-crown-light.svg";

export default {
  name: "Profile",

  components: {
    Modal,
    adminIcon,
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      modalMessage: "Changes were saved",
      modalActive: null,
      mode:"light"
    };
  },

  created(){
    window.addEventListener('keyup', this.keyPress) 
  },

  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
    },
    updateProfile() {
      const updatedUser = {
        profileId: this.currentUser.profileId,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
      };
      this.$store.dispatch("updateUserInfo", updatedUser).then(() => {
        this.$store.dispatch("getCurrentUser");
      });
      this.modalActive = !this.modalActive;
    },
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  },
  computed: {
    isAdmin() {
      return this.$store.state.users.isAdmin;
    },
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
  created() {
    this.firstName = this.currentUser.profileFirstName;
    this.lastName = this.currentUser.profileLastName;
    this.username = this.currentUser.profileUserName;
    this.email = this.currentUser.profileEmail;
  },
};
</script>

<style lang="scss" scoped>
.dark input{
  background: #303030;
}

.dark label{
  color: #f1f1f1;
  font-size: 20px !important;
}

.dark div{
    background: #303030 !important; 
}

.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.86);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      .initials {
        position: initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #303030;
        color: #fff;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .icon {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }
    }

    .input {
      margin: 16px 0;

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
