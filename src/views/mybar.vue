<!--ส่วนสำหรับการแสดงผล-->
<template>
    <nav class="navbar">
        <div class="wrapper">
            <router-link to="/" class="logo">
                <img src="@/assets/logo.png" alt="App Logo" />
            </router-link>
                <div>
                    <ul class="nav-links">
                        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/product">My card</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                    </ul>
            </div>
        </div>
    </nav>
</template>

<!-- สำหรับเขียน Java script เพื่อควบคุมการทำงานของ Component
 เช่น การกำหนด Data,Method เป็นต้น -->
 <script>
 import logo from "@/assets/logo.png";
 import mycard from "@/views/mycard.vue"; // นำเข้า mycard
 
 export default {
     name: "mybar",
     components: {
         mycard, // ลงทะเบียน mycard
     },
     data() {
         return {
             logo,
         };
     },
 };
 </script>
<!-- ส่วนสำหรับเขียน Css เพื่อตกแต่ง Template -->

<style scoped>
/* Navbar Styles */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap&quot");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  background-color: #333;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 0px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
 
.wrapper {
  position: relative;
  max-width: 1300px;
  height: 140px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 
.wrapper .logo img {
  display: flex;
  align-items: center;
  width: 120px;
  height: auto;
  margin-top: 10px;
  margin-right: 10px;
}

.wrapper .nav-links {
  display: inline-flex;
  z-index: 10;
}

.nav-links li {
  list-style: none;
}

.nav-links li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links li a:hover {
  background: #00418b;
}

.nav-links .mobile-item {
  display: none;
}
</style>
************************************************************************************************************************************
หน้า NotFound.vue

<style scoped>
h1 {
  color: red;
}
.body-text {
  position: absolute;
  top: 30%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: left;
  padding: 0 30px;
}

.body-text div {
  font-size: 45px;
  font-weight: 600;
}
</style>