<template>
    <nav>
            <router-link to="/" class="logo">KABILESH</router-link>
        <div class="hamburger" @click="show = !show">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links" :class="{open:show}" >
            <router-link to="/" tag="li" :class="{fade:show}" class="a" >Home</router-link>
            <router-link to="/about" tag="li" :class="{fade:show}" class="a">About Me</router-link>
            <router-link to="/skills" tag="li" :class="{fade:show}" class="a">Skills</router-link>
            <router-link to="/experience" tag="li" :class="{fade:show}" class="a">Experience</router-link>
            <router-link to="/project" tag="li" :class="{fade:show}" class="a">Projects</router-link>
            <router-link to="/contact" tag="li" :class="{fade:show}" class="a">Contact</router-link>
        </ul>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            show: false
        }
    }
}
</script>
<style scoped>
body{
    overflow-x: hidden;
}
nav{
    height: 5rem;
    width: 100vw;
    background-color: transparent;
    display: flex;
    position: relative;
    margin: 0;
    padding: 0;
    z-index: 10;
}

/*Styling logo*/
.logo{
    padding:2vh 1vw;
    color: white;
    font-weight: bolder;
    margin-left: 1em;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    letter-spacing: 2px;
}
.logo img {
    height: 5rem;
    width: 5rem;
}

/*Styling Links*/
.nav-links{
    display: flex;
    list-style: none; 
    width: 88vw;
    padding: 0 0.7vw;
    justify-content: space-evenly;
    align-items: center;
    text-transform: uppercase;
    
}
.nav-links li {
    text-decoration: none;
    margin: 0 0.7vw;
    text-shadow: 0px 0px 5px white;
    font-weight: bolder;
    font-family: 'Roboto', 'sans-seriff';
    cursor: pointer;
    color: white;
}
.nav-links li:hover {
    color: #61DAFB;
    text-shadow: 5px 5px 5px aqua;
}
.nav-links li {
    position: relative;
}
.nav-links li ::before {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background-color: #61DAFB;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
}
.nav-links li :hover::before{
    width: 80%;
}

/*Styling Hamburger Icon*/
.hamburger div{
    width: 30px;
    height:3px;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
}
.hamburger{
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 800px){
    nav{
        position: relative;
        z-index: 3;
    }
    .hamburger{
        display:block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    .nav-links{
        position: fixed;
        background: #131418;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5){
        transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6){
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }
    .nav-links li:nth-child(7){
        transition: all 0.5s ease 1s;
        margin: 0;
    }
    li.fade{
        opacity: 1;
    }
}
/*Animating Hamburger Icon on Click*/
.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}
</style>