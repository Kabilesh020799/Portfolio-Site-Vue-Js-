<template>
    <div class="wrap">
        <particles-bg style="backgroundColor: #23263a;width:100%;height:100vh" num=30 type="cobweb" :bg=true />
            <router-link to="/about/gallery/kolkatta" class="tn1">Kolkatta <br>2k19</router-link>
            <router-link to="/about/gallery/bangalore" class="tn1">Bangalore<br> 2k19</router-link>
            <router-link to="/about/gallery/bhopal" class="tn1">Bhopal <br>2k19</router-link>
            <router-link to="/about/gallery/kerala" class="tn1">Kerala <br>2k19</router-link>
    </div>
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
    components: {
        ParticlesBg
    }
}
</script>
<style scoped>
.wrap{
        text-align: center;
        animation: fade 2s ease-out both;
        overflow: hidden;
    }
    .tn1{
        width: 30%;
        height: 4em;
        display: inline-block;
        margin: 30px 30px 30px 30px;
        font-size: 50px;
        background: transparent;
        border: 1px solid aqua;
        box-shadow: 10px 10px 10px aqua;
        color: white;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 2px;
        margin-top: 1em;
        text-decoration: none;
    }
    .tn1:hover{
        box-shadow: 0px 5px 10px aqua;    
    }
    @media (max-width:768px){
        .tn1{
            width: 35%;
            height: 30%;
            font-size: 20px;
            margin-top: 0px;
            margin-left: 30%;
            height: 4em;
            display: block;
        }
        .wrap{
            margin-top: 100px;
        }
    }
    @keyframes fade{
        0%{
            opacity: 0;
        }
        100%{
            transition: opacity .3s
        }
    }
</style>    