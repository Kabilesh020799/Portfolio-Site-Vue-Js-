<template>
    <div>
        <particles-bg style="backgroundColor: #23263a;width:100%;height:160vh" num=30 type="cobweb" :bg=true />
        <center>
<div id="SkillBox">
        <center><p>My Skills</p></center>

  <div class="SkillBar">
    <div id="Skill-HTML"> 
      <span class="Skill-Area ">HTML</span>
    </div>
  </div>
  
  <div class="SkillBar">
    <div id="Skill-CSS">
      <span class="Skill-Area ">CSS/CSS3</span>
    </div>
  </div>

  <div class="SkillBar">
    <div id="Skill-VUE">
      <span class="Skill-Area ">Vue JS</span>
    </div>
  </div>
  
  <div class="SkillBar">
    <div id="Skill-JS">
      <span class="Skill-Area ">Javascript</span>
    </div>
  </div>
  
  <div class="SkillBar">
    <div id="Skill-NUXT">
      <span class="Skill-Area ">Nuxt Js </span>
    </div>
  </div>
  
  
    <div class="SkillBar">
    <div id="Skill-NODE">
      <span class="Skill-Area ">Node Js </span>
    </div>
  </div>
  
    <div class="SkillBar">
    <div id="Skill-EXPRESS">
      <span class="Skill-Area ">Express JS </span>
    </div>
  </div>
  
    <div class="SkillBar">
    <div id="Skill-SQL">
      <span class="Skill-Area ">SQL</span>
    </div>
  </div>
  <div class="SkillBar">
    <div id="Skill-MONGO">
      <span class="Skill-Area ">Mongo Db</span>
    </div>
  </div>
    <div class="SkillBar">
    <div id="Skill-C">
      <span class="Skill-Area ">C/C++</span>
    </div>
  </div>
  
    <div class="SkillBar">
    <div id="Skill-PYTHON">
      <span class="Skill-Area ">Python </span>
    </div>
  </div>
  <div class="SkillBar">
    <div id="Skill-MACHINE">
      <span class="Skill-Area ">MACHINE LEARNING</span>
    </div>
  </div>
  <div class="SkillBar">
    <div id="Skill-DEEP">
      <span class="Skill-Area ">DEEP LEARNING</span>
    </div>
  </div>
  
</div>
</center>   
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

body { background: #E9E5E2;margin:2%; }

#SkillBox {
    font-size: 20px;
    font-family: 'Indie Flower', cursive;
    width: 95%;
    height: auto;
    margin: 10px auto;
    background-color: transparent;
    padding: 10px;
    border-radius:20px;
    -o-border-radius:20px;
    -webkit-border-radius:20px;
    -ms-border-radius:20px;
    -moz-border-radius:20px;  
}
#SkillBox img {
    width: 20%;
    height: 10%;
    margin: auto 35%;
    padding: 10px;
}
.SkillBar {
    width: 90%;
    height: 50px;
    position: relative;
    background: rgba(17, 17, 17, .3);
    margin: 20px auto;
}
#Skill-HTML {
    width: 90%;
    animation: Animate-HTML 4s;
    -webkit-animation: Animate-HTML 4s;
    -moz-animation: Animate-HTML 4s;
    -o-animation: Animate-HTML 4s;
    height: 50px;
    position: absolute;
    background-color: #5aa669 ;
}
@keyframes Animate-HTML {
    from {
    width: 10px;
}
to {
    width: 90%}
}@-webkit-keyframes Animate-HTML {
    from {
    width: 10px;
}
to {
    width: 90%}
}@-moz-keyframes Animate-HTML {
    from {
    width: 10px;
}
to {
    width: 90%}
}@-o-keyframes Animate-HTML {
    from {
    width: 10px;
}
to {
    width: 90%}
}#Skill-CSS {
    animation: Animate-CSS 5s;
    -webkit-animation: Animate-CSS 5s;
    -moz-animation: Animate-CSS 5s;
    -o-animation: Animate-CSS 5s;
    width: 70%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-CSS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-webkit-keyframes Animate-CSS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-moz-keyframes Animate-CSS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-o-keyframes Animate-CSS {
    from {
    width: 10px;
}
to {
    width: 70%}
}#Skill-VUE {
    animation: Animate-VUE 5s;
    -webkit-animation: Animate-VUE 5s;
    -moz-animation: Animate-VUE 5s;
    -o-animation: Animate-VUE 5s;
    width: 65%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-VUE {
    from {
    width: 10px;
}
to {
    width: 65%}
}@-webkit-keyframes Animate-VUE {
    from {
    width: 10px;
}
to {
    width: 65%}
}@-moz-keyframes Animate-VUE {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-o-keyframes Animate-VUE {
    from {
    width: 10px;
}
to {
    width: 65%}
}#Skill-JS {
    animation: Animate-JS 4s;
    -webkit-animation: Animate-JS 4s;
    -moz-animation: Animate-JS 4s;
    -o-animation: Animate-JS 4s;
    width: 70%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-JS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-webkit-keyframes Animate-JS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-moz-keyframes Animate-JS {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-o-keyframes Animate-JS {
    from {
    width: 10px;
}
to {
    width: 70%}
}#Skill-NUXT {
    animation: Animate-NUXT 4s;
    -webkit-animation: Animate-NUXT 4s;
    -moz-animation: Animate-NUXT 4s;
    -o-animation: Animate-NUXT 4s;
    width: 40%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-NUXT {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-webkit-keyframes Animate-NUXT {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-moz-keyframes Animate-NUXT {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-o-keyframes Animate-NUXT {
    from {
    width: 10px;
}
to {
    width: 40%}
}#Skill-C {
    animation: Animate-C 4s;
    -webkit-animation: Animate-C 4s;
    -moz-animation: Animate-C 4s;
    -o-animation: Animate-C 4s;
    width: 80%;
    height: 50px;
    position: absolute;
    background-color: #970cc1;
}
@keyframes Animate-C {
    from {
    width: 10px;
}
to {
    width: 80%}
}@-webkit-keyframes Animate-C {
    from {
    width: 10px;
}
to {
    width: 80%}
}@-moz-keyframes Animate-C {
    from {
    width: 10px;
}
to {
    width: 80%}
}@-o-keyframes Animate-C {
    from {
    width: 10px;
}
to {
    width: 80%}
}#Skill-PYTHON {
    animation: Animate-PYTHON 4s;
    -webkit-animation: Animate-PYTHON 4s;
    -moz-animation: Animate-PYTHON 4s;
    -o-animation: Animate-PYTHON 4s;
    width: 60%;
    height: 50px;
    position: absolute;
    background-color: #970cc1;
}
@keyframes Animate-PYTHON {
    from {
    width: 10px;
}
to {
    width: 60%}
}@-webkit-keyframes Animate-PYTHON {
    from {
    width: 10px;
}
to {
    width: 60%}
}@-moz-keyframes Animate-PYTHON {
    from {
    width: 10px;
}
to {
    width: 60%}
}@-o-keyframes Animate-PYTHON {
    from {
    width: 10px;
}
to {
    width: 60%}
}#Skill-NODE {
    animation: Animate-NODE 4s;
    -webkit-animation: Animate-NODE 4s;
    -moz-animation: Animate-NODE 4s;
    -o-animation: Animate-NODE 4s;
    width: 50%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-NODE {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-webkit-keyframes Animate-NODE {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-moz-keyframes Animate-NODE {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-o-keyframes Animate-NODE {
    from {
    width: 10px;
}
to {
    width: 50%}
}#Skill-EXPRESS {
    animation: Animate-EXPRESS 4s;
    -webkit-animation: Animate-EXPRESS 4s;
    -moz-animation: Animate-EXPRESS 4s;
    -o-animation: Animate-EXPRESS 4s;
    width: 40%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
}
@keyframes Animate-EXPRESS {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-webkit-keyframes Animate-EXPRESS {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-moz-keyframes Animate-EXPRESS {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-o-keyframes Animate-EXPRESS {
    from {
    width: 10px;
}
to {
    width: 40%}
}#Skill-SQL {
    animation: Animate-SQL 4s;
    -webkit-animation: Animate-SQL 4s;
    -moz-animation: Animate-SQL 4s;
    -o-animation: Animate-SQL 4s;
    width: 50%;
    height: 50px;
    position: absolute;
    background-color: #f8a51e;
}
@keyframes Animate-SQL {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-webkit-keyframes Animate-SQL {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-moz-keyframes Animate-SQL {
    from {
    width: 10px;
}
to {
    width: 50%}
}@-o-keyframes Animate-SQL {
    from {
    width: 10px;
}
to {
    width: 50%}
}
#Skill-MONGO {
    animation: Animate-MONGO 4s;
    -webkit-animation: Animate-MONGO 4s;
    -moz-animation: Animate-MONGO 4s;
    -o-animation: Animate-MONGO 4s;
    width: 30%;
    height: 50px;
    position: absolute;
    background-color: #f8a51e;
}
@keyframes Animate-MONGO {
    from {
    width: 10px;
}
to {
    width: 30%}
}@-webkit-keyframes Animate-MONGO {
    from {
    width: 10px;
}
to {
    width: 30%}
}@-moz-keyframes Animate-MONGO {
    from {
    width: 10px;
}
to {
    width: 30%}
}@-o-keyframes Animate-MONGO {
    from {
    width: 10px;
}
to {
    width: 30%}
}
#Skill-MACHINE {
    animation: Animate-MACHINE 4s;
    -webkit-animation: Animate-MACHINE 4s;
    -moz-animation: Animate-MACHINE 4s;
    -o-animation: Animate-MACHINE 4s;
    width: 70%;
    height: 50px;
    position: absolute;
    background-color: lightblue;
}
@keyframes Animate-MACHINE {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-webkit-keyframes Animate-MACHINE {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-moz-keyframes Animate-MACHINE {
    from {
    width: 10px;
}
to {
    width: 70%}
}@-o-keyframes Animate-MACHINE {
    from {
    width: 10px;
}
to {
    width: 70%}
}
#Skill-DEEP {
    animation: Animate-DEEP 4s;
    -webkit-animation: Animate-DEEP 4s;
    -moz-animation: Animate-DEEP 4s;
    -o-animation: Animate-DEEP 4s;
    width: 40%;
    height: 50px;
    position: absolute;
    background-color: lightblue;
}
@keyframes Animate-DEEP {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-webkit-keyframes Animate-DEEP {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-moz-keyframes Animate-DEEP {
    from {
    width: 10px;
}
to {
    width: 40%}
}@-o-keyframes Animate-DEEP {
    from {
    width: 10px;
}
to {
    width: 40%}
}
.Skill-Area {
    z-index: 1;
    float: left;
    /* position: absolute; */
    margin-top: 15px;
    margin-left: 0px;
    text-shadow: none;
    color: #fff;
    font-family: Lato-Regular, sans-serif;
    font-size: 18px;
}
.PercentText {
    z-index: 3;
    /* position: relative; */
    padding-right: 15px;
    margin-top: 15px;
    float: right;
    text-shadow: none;
    color: #fff;
    font-family: Lato-Regular, sans-serif;
    font-size: 18px;
}
@media (max-width:768px) {
    .Skill-Area
    {
        font-size: 15px;
    }
}
</style>