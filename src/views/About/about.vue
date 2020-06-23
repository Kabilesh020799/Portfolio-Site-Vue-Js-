<template>
    <div class="wrapper">
              <particles-bg style="backgroundColor: #23263a;width:100%;height:120vh" num=30 type="cobweb" :bg=true />
        <img src="./../../assets/profile.png" class="img">
        <h1 class="head">Hi there!! I am Kabilesh.Nice to meet you!</h1>
        <div class="body">
           <p> I am a <b style="font-weight:bolder;text-decoration:underline">Web Developer </b> and a <b style="font-weight:bolder;text-decoration:underline">Data Analyst</b> from Chennai, TamilNadu, India. I love to build creative and productive websites. From the time I started my Bachelor's degree I have come across many domains but Web Development and Machine Learning makes me super interested while working on them. The World is moving towards Automation and it has been my main motivation for working on these domains<br>I love to play <b style="font-weight:bolder;text-decoration:underline">Cricket </b> as I am passionate in playing it. I have been playing cricket since my school times and have represented my school team.<br><br>I am looking forward to work on projects that creates a social impact on the society and will be interested in working on <b style="font-weight:bolder;text-decoration:underline">Freelance </b>  projects </p>
        </div>
        <div class="footer">
            <router-link to="/about/achievements" class="tn">Achievements</router-link>
            <router-link to="/about/gallery" class="tn">My Gallery</router-link>
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
    
           overflow-x: hidden;
            overflow-y: hidden;
}
    .img{
        width: 350px;
        height: 350px;
        padding: 20px;
        animation: slideright 1s ease-out both ;
    }
    .head{
        color: white;
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        position: absolute;
        margin-top: 3em;
        font-size: 45px;
        margin-left: 2em;
        text-align: center;
        animation: slideleft 1s ease-out both 1s;
    }
    .body{
        text-align: center;
        font-size: 20px;
        padding: 10px 10px 10px 10px;
        color: white;
        overflow-x: hidden;
        overflow-y: hidden;
        font-family: 'Roboto', sans-serif;
        animation: slidein 1s ease-out both 2s;
    }
    .footer{
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding-left: 20px;
        padding-right: 20px;
        animation: slidein 1s ease-out both 3s;
    }
    .tn{
           font-family: 'Overpass', sans-serif;
           color: black;
           font-size: 20px;
           background: silver;
           border-radius: 20%;
           text-align: center;
           width: 10em;
           height: 1.5em;
           cursor: pointer;
           text-decoration: none;
           box-shadow: 10px 10px 10px black;
    }
    .tn:hover{
       box-shadow: 0px 5px 10px black;  
    }
    @media screen and (max-width:768px) {
       .head{
           font-size: 27px;
           font-family: 'Montserrat', sans-serif;
           text-align: center;
           position: relative;
           display: block;
           justify-content: center;
           margin-top: 1em;
           margin-left: .5em;
       } 
       .body{
           margin-top: 2em;
           width: 100%;
           font-size: 15px;
           text-align: center;
           padding: 10px 10px 10px 10px;
            font-family: 'Overpass', sans-serif;
       }
       .para{
           font-size: 15px;
           padding: 0;
           margin: 0;
       }
       .img{
           width: 200px;
           height: 200px;
           margin-left: 9em;
       }
       .footer{
           padding-top: 10px;
       }
       .tn{
           width: 8em;
           font-size: 17px;
       }
       
    }
    @keyframes slidein {
        0%{
            transform: translateY(500px);
        }
        60%{
            transform: translateY(-30px);
        }
        80%{
            transform: translateY(30px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    @keyframes slideright {
        0%{
            transform: translateX(-500px);
        }
        60%{
            transform: translateX(30px);
        }
        80%{
            transform: translateX(-30px);
        }
        100%{
            transform: translateX(0px);
        }
    }
    @keyframes slideleft {
        0%{
            transform: translateX(1200px);
        }
        60%{
            transform: translateX(-30px);
        }
        80%{
            transform: translateX(30px);
        }
        100%{
            transform: translateX(0px);
        }
    }
</style>