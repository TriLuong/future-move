<template>
<div>
  <div class="navbar-opacity"></div>
  <nav class="navbar navbar-fixed-top">
    
    <div class="navbar">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png"/>
        </a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="#">Advisory</a></li>
        <li><a href="#">Consulting</a></li>
        <li><a href="#">Training</a></li>
        <li><a href="#">Insights</a></li>
        <li><a href="#">Latest</a></li>
        <li><a href="#">Career Opportunities</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </nav>
  
</div>
</template>

<script>


export default {
    name: "NavBar",
    // mounted:function(){
    //     this.method1() //method1 will execute at pageload
    // },
   methods: {
        handleScroll: function (event) {
          
            var elemt = document.getElementsByClassName("navbar-opacity")[0];
            if(window.scrollY > 0){
                elemt.classList.add("scrolled");
            } else {
              elemt.classList.remove("scrolled");
            }
              
          
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
        // console.log(window.scrollY);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}


</script>

<style>
  .navbar-opacity{
     background-color: black !important;
     transition: background-color 200ms linear;
     opacity: 0.3;
     height: 80px;
     width: 100%;
     position: fixed;
     z-index:1000;
     left:0;
     right:0;
  }
  nav {
    border: none !important;
    position: fixed;
  }
  ul.navbar-nav {
    margin-top: 15px;
  }
  ul.navbar-nav> li > a {
    color: white !important;
  }

  .scrolled {
    background-color: #32be93 !important;
    transition: background-color 200ms linear;
    opacity: 1;
  }
</style>

