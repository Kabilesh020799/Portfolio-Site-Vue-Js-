<template>
    <div class="wrapper">
         <particles-bg style="backgroundColor: #23263a;width:100%;height:105vh" num=30 type="cobweb" :bg=true />
        <div class="heading">Internship at ADHI Software || MAY-JUNE 2019</div>
        <div class="info">
            During the 1 month of this internship, I have learned a lot about the current industry and it's trends. While working with Industry professionals, I was able to gain the maximum knowledge out of them. In this internship I was asked to develop an Deep Learning model for monitoring the activities in the office.This gave me a clear start on entering into Data science World. 
        </div>
        <div class="heading">Executive MEmber at United intelligence club</div>
        <div class="info">
            As an Executive member my role was to organize events and help students to improve their efficiency in coding and other activities.
        </div>
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
.wrapper{
    overflow: hidden;
}
    .heading{
     font-family: 'Montserrat', sans-serif;
    color: white;
    text-shadow: 0px 0px 2px white;
    margin-left: 40px;
    margin-top: 50px;
    font-size: 40px;
    animation: slidein 1s ease-out both;
    }
    .info{
    font-family: 'Roboto', sans-serif;
    color: white;
    text-shadow: 0px 0px 1px white;
    letter-spacing: 2px;   
    text-align: center;
    font-size: 20px;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em;
    line-height: 30px;
    word-spacing: 3px;
    animation: slideup 1s ease-out both 1s;
    }
    @media (max-width:768px){
        .heading{
            font-size: 20px;
        }
        .info{
            font-size: 15px;
            line-height: 20px;

        }
    }
    @keyframes slidein{
        0%{
            transform: translateX(-500px);
        }
        60%{
            transform: translateX(30px);
        }
        80%{
            transform:translateX(-30px)
        }
        100%{
            transform: translateX(0px);
        }
    }
    @keyframes slideup {
        0%{
            transform: translateY(500px);
            opacity: 0;
        }
        60%{
            transform: translateY(-30px);
        }
        80%{
            transform: translateY(30px);
        }
        100%{
            transform: translateY(0px);
            opacity: 1px;
        }
    }
</style>