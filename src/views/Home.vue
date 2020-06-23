<template>
    <section> 
      <particles-bg style="backgroundColor: #23263a;width:100%;height:105vh" num=30 type="cobweb" :bg=true />
        <div class="header">
        <h1>
            <span>K</span>
            <span>A</span>
            <span>B</span>
            <span>I</span>
            <span>L</span>
            <span>E</span>
            <span>S</span>
            <span>H</span>
        </h1>

        <h1 class="pos">
        
            Web Developer| ML Aspirant
        </h1>
        </div>
        <div class="footer">
            <ul>
  <li><a href="https://www.facebook.com/ravichandran.kabilesh/" target="_blank"><i class="fab fa-facebook"></i></a></li>
  <li><a href="https://github.com/Kabilesh020799" target="_blank"><i class="fab fa-github"></i></a></li>
  <li><a href="https://www.linkedin.com/in/kabileshravi27/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
  <li><a href="mailto:kabilesh020799@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
  <li><a href="https://www.instagram.com/kabilesh_ravichandran/" target="_blank"><i class="fab fa-instagram"></i></a></li>
  <li><a href="https://www.hackerrank.com/itsmekabilesh" target="_blank"><i class="fab fa-hackerrank"></i></a></li>
</ul>
        </div>
        <div class="footer1">
            <span class="cls1"><i class="fab fa-vuejs"></i></span>
            <span> Powered by Vue Js</span>
        </div>
    </section>    
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
section{
    width: 100%;
    height: 100%;
}
.footer{
  margin:0;
  padding:0;
}
.footer1{
    position: absolute;
    top: 90%;
    color: white;
    margin-left: 45%;
    animation: fadein 2s ease-out both 6s;
}
.cls1{
    color: rgb(58, 247, 58);
    font-size: 30px;
}
ul {
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  margin:0;
  padding:0;
  display:flex;
  animation: fadein 1s ease-out both 5s;
  margin-top: 10em;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  width: 60px;
  height: 30px;
  display:block;
  text-align:center;
  margin:0 10px;
  border-radius: 50%;
  padding: 4px;
  box-sizing: border-box;
  text-decoration:none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  background: linear-gradient(0deg, lightgrey, lightgrey);
  transition: .5s;
  font-size: 30px;
}

ul li a:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

ul li a .fab {
  width: 100%;
  height:100%;
  display:block;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size:24px;
  color: blue;
  transition: .5s;
}

ul li:nth-child(1) a:hover .fa {
  color: #3b5998;
}

ul li:nth-child(2) a:hover .fa {
  color: #00aced;
}

ul li:nth-child(3) a:hover .fa {
  color: #dd4b39;
}

ul li:nth-child(4) a:hover .fa {
  color: #007bb6;
}

ul li:nth-child(5) a:hover .fa {
  color: #e4405f;
}
section{
    height: 92vh;
    background: transparent;
}
.pos{
    margin: 0;
    display: inline;
    position: absolute;
    text-align: center;
    top: 53%;
    color: white;
    font-weight: bolder;
    font-size: 2em;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    text-shadow: 0 0 10px #00b3ff;
    animation: animate 1s linear both 4s;
}
h1{
    margin: 0;
    padding: 0;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-weight: bolder;
    color: #ddd;
    font-size: 6em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .2em;
}
h1 span{
    opacity: 0;
    display: inline-block;
    animation: animate 1s linear forwards, shine 2s infinite;
}
@keyframes animate {
    0%{
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
    }
    100%{
        opacity: 1;
        transform: rotateY(0deg);
        filter: blur(0);
    }
}
h1 span:nth-child(1){
    animation-delay: .25s,3.75s;
}
h1 span:nth-child(2){
    animation-delay: .5s,4s;
}
h1 span:nth-child(3){
    animation-delay: 1s,4.25s;
}
h1 span:nth-child(4){
    animation-delay: 1.5s,4.5s;
}
h1 span:nth-child(5){
    animation-delay: 2s,4.75s;
}
h1 span:nth-child(6){
    animation-delay: 2.5s,5s;
}
h1 span:nth-child(7){
    animation-delay: 3s,5.25s;
}
h1 span:nth-child(8){
    animation-delay: 3.5s,5.5s;
}
@keyframes shine {
    0%,100%{
        color: aqua;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff;
    }
    5%,95%{
        color: white;
        filter: blur(0px);
        text-shadow: 0 0 10px none;
    }
}
@media only screen and (max-width: 768px){
    
    h1{
        font-size: 3em;
    }
    .pos{
        font-size: 1em;
        top: 48%;
    }
    .footer1{
        margin-left: 35%;
    }
}
ul li a{
    width: 40px;
    height: 40px;
    font-size: 20px;
}
@keyframes fadein{
    0%{
        opacity: 0;
    }
    100%{
        transition: opacity .5s;
    }
}
</style>