<template>
    <div class="container-fluid homePage">
        <div class="row">
            <div class="col-md-12">
                <NavBar />
            </div>
        </div>
        
        <div class="row homeInfo">
            <div class="col-md-6 left">
                <h1>We help you stay ahead of the curve</h1>
                <p>FMG is passionate about delivering outcomes for our clients</p>
                <button class="btn btn-success">Watch our corporate video</button>
            </div>
            <div class="col-md-6 right">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pvuN_WvF1to" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import NavBar from "../components/NavBar"
export default {
    name: "Home",
    components: {
        NavBar
    }
}
</script>

<style>
    .homePage{
        padding:0;
        background-image: url("../assets/architecture-asia-attraction-358685.jpg");
        height: 100vh;
        min-height: 600px;
        background-size: 100%;
        position: relative;
    }
    .homeInfo{
        position: absolute;
        margin-top: 150px;
        color: white;
        width: 100%;
        padding: 0 100px;
    }
    .homeInfo .left{
        text-align: left;
    }
    .homeInfo .left h1 {
        font-size: 50px;
        font-weight: bold;
    }
    .homeInfo .left p {
        font-size: 18px;
        font-weight: bold;
    }

    .homeInfo .right iframe{
        border-radius: 20px !important;
    }
</style>
