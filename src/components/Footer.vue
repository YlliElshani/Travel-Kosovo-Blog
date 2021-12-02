<template>
  <div class="footer">
    <hr>
    <ul class="footer-ul">
      <router-link class="header" :to="{ name: 'Home' }"><Logo /></router-link>
    </ul>
    <ul class="footer-ul">
        <li>Travel Blog <br/> Kosova</li>
        <li>Check out our blogs</li>
        <li>Our Community</li>
        <li>Our Company</li>
        <li>© TravelKosova, Inc. 2021. <br> We love our users!</li>
    </ul>
    <ul class="footer-ul">
        <li><a href="https://www.facebook.com/"><img src="../assets/Icons/facebook.png"></a></li>
        <li><a href="https://twitter.com/home"><img src="../assets/Icons/instagram.png" ></a></li>
        <li><a href="https://www.instagram.com/"><img src="../assets/Icons/reddit.png"></a></li>
        <li><a href="https://www.reddit.com/"><img src="../assets/Icons/twitter.png"></a></li>
    </ul>
</div>
</template>

<style>
    .footer{
        display: flex;
        flex-direction: column;
        padding:50px;
    }
    .footer hr{
        width:85%;
        align-self: center;
        margin: 30px;
    }
    .footer-ul{
        display: flex;
        justify-content: center;
        margin-top:50px;
    }
    .footer ul li a img{
        width: 25px;
        height:25px;
    }
    .footer-ul li {
        margin-left: 100px;
    }
    ul li {
    list-style-type: none;
    }
    ul li a{
        text-decoration: none;
    }
</style>

<script>
import Logo from "../assets/Logo.svg";


export default {
  name: "Footer",
  components: {
    Logo
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
