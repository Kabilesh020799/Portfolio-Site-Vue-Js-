<template>
<div class="wrap">
	<particles-bg style="backgroundColor: #23263a;width:100%;height:200vh" num=30 type="cobweb" :bg=true />
	<div class="container" v-for="proj in projs" :key="proj.id">
		<div class="card">
			<div class="front">
				<h1>{{proj.title}}</h1>
				<span class="yr">{{ proj.year}}</span>
				<img :src="proj.url" class="img">
			</div>
			<div class="back">
				<h1 style="text-decoration:underline"> Project Description</h1>
				<article class="desc">{{proj.desc}}</article>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
	data(){
		return{
			projs: [
				{id: 1,title: 'Kill a watt',year: 'Feb 2019',url: 'https://lh3.googleusercontent.com/pw/ACtC-3e-xTSA04l7ub7QCUfxYJcV4eVk-f4VDz0NhzT6ljXi3C0C__cOPeeh4iWMyyETv_3R2CN8oDrLBYYpZ50ezrKzlm9Ewcgq2mQFHhs6BlHtW0mPyLVHw1QOFimFq6cNwlDZzC0K57ilh8xgruEr7pUf=w1265-h843-no?authuser=0',desc: 'This project automates the process of collecting the electricity usage units and updates in an app through which both the user and the government can keep a track of the electricity usage.so this helps in reduce the electricity consumption by making the users aware of their electricity usage and reducing a huge revenue for the government by automating the whole process'},
				{id: 3,title: 'Obstacle Detector', year: 'October 2018',url: 'https://i.ytimg.com/vi/uTXIlk86afI/maxresdefault.jpg',desc: 'This project is designed for blind people,it detects the object in front of them and warns them that there is n object in front of them at a specific distance,so the blind person could be aware of things in front of him.This is done using Arduino and Ultrasonic Sensor'},
				{id: 4,title: 'Object Detection',year: 'June 2019',url: 'https://miro.medium.com/max/1600/1*u3SAkFbIQHBC8hSifHUMeA.jpeg',desc: 'This project is build to detect different types of object in a given video footage.This model can identify around 80 different objects that we come across in our day to day life.This is developed using Opencv library and a pretrained yolo model,so this project uses transfer learning.this will be helpful in building a automated vehicle'},
				{id: 5,title: 'Motion Detection',year: 'June 2019',url: 'https://www.ips-analytics.com/uploads/tx_thipstopbanner/Header_IPS_Motion_Detection.jpg',desc: 'This project is build to detect if there is any motion in the given video footage or in a live cctv camera.This model marks the motion and records the timestamp of the motion and gives a report to the user.This model can be used for survivallence in high threat places like banks,etc'},
				{id: 6,title: 'Credit Card Fraud Predictor',year: 'May 2020',url: 'https://4.bp.blogspot.com/-_BBNRMlXHa4/WgsD6dsoGNI/AAAAAAAAAj8/prrhL2G7eJ0rdgqcAmiZAmBp2mCBCJbsQCLcBGAs/s640/credit-card-fraud-detection-1-638.jpg',desc: 'This project is build to detect whether the current transaction is a fraud one or not.This model is a classification model.this model is build in machine learning using sklearn,numpy and pandas library'},
			]
		}
	},
	components: {
		ParticlesBg
	}
}
</script>
<style scoped>
	.wrap{
		text-align: center;
		height: 100%;
		background: transparent;
	}
	.container{
		position: relative;
		width: 25em;
		height: 40em;
		background: transparent;
		margin-top: 20px;
		text-align: center;
		margin-left: 30px;
		display: inline-block;
        animation: fadein 2s ease-out both;
	}
	.card{
		position: absolute;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: all 1.5s ease;
		background: transparent;
	}
	.card h1{
		margin-top: 40px;
		color: black;
        font-family: 'Montserrat', sans-serif;
		letter-spacing: 2px;
	}
	.yr{
		margin-left: 50px;
		font-weight: 10000;
		color: black;
        font-family: 'Montserrat', sans-serif;
		letter-spacing: 2px;
		display: block;
	}
	.img
	{
		margin-top: 50px;
		width: 70%;
		height: 50%;
	}
	.desc{
        font-family: 'Roboto', sans-serif;
		color: black;
		text-align: center;
		margin-top: 20%;
		font-size: 20px;
	}
	.card:hover{
		transform: rotateY(180deg);
	}
	.front{
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background: #e6ffff;
	}
	.back{
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background: lightslategray;
		color: antiquewhite;
		transform: rotateY(180deg);
	}
	@media (max-width:768px){
		.wrap{
			
			background: #23263a;
		}
		.container{
			width: 300px;
			height: 350px;
			margin-left: 0px;
		}
		.img{
			margin-top: 30px;
		}
		.desc{
			font-size: 15px;
		}
		h1{
			font-size: 20px;
		}

	}
    @keyframes fadein {
        0%{
            opacity: 0;
        }
        100%{
            transition: .2s;
        }
    }

</style>