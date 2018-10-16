<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Menu/>
    <router-view id="main"/>
  </div>
</template>
<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lang="scss">
@font-face {
  font-family: 'icomoon';
  src: url("../fonts/icomoon/icomoon.eot?srf3rx");
  src: url("../fonts/icomoon/icomoon.eot?srf3rx#iefix") format("embedded-opentype"), url("../fonts/icomoon/icomoon.ttf?srf3rx") format("truetype"), url("../fonts/icomoon/icomoon.woff?srf3rx") format("woff"), url("../fonts/icomoon/icomoon.svg?srf3rx#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}
/* =======================================================
*
* 	Template Style 
*	Edit this section
*
* ======================================================= */
body {
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.5);
  background: whitesmoke;
  margin: 0;
}
@media screen and (max-width: 992px) {
  body {
    font-size: 16px;
  }
}

a {
  color: #228896;
  text-decoration: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
a:hover, a:active, a:focus {
  color: #228896;
  outline: none;
  text-decoration: none !important;
}

p {
  margin-bottom: 1.5em;
}

h1, h2, h3, h4, h5, h6 {
  color: #000;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 400;
  margin: 0 0 30px 0;
}

figure {
  margin-bottom: 2.5em;
  float: left;
  width: 100%;
}
figure figcaption {
  font-size: 16px;
  width: 80%;
  margin: 20px auto 0px auto;
  color: #b3b3b3;
  font-style: italic;
  font-family: "Roboto", Arial, sans-serif;
}
.copyrights{
	text-indent:-9999px;
	height:0;
	line-height:0;
	font-size:0;
	overflow:hidden;
}
@media screen and (max-width: 480px) {
  figure figcaption {
    width: 100%;
  }
}

::-webkit-selection {
  color: #fff;
  background: #228896;
}

::-moz-selection {
  color: #fff;
  background: #228896;
}

::selection {
  color: #fff;
  background: #228896;
}

#page {
  width: 100%;
  overflow: hidden;
  position: relative;
}

#aside {
  padding-top: 60px;
  padding-bottom: 40px;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1001;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 1200px) {
  #aside {
    width: 30%;
  }
}
@media screen and (max-width: 768px) {
  #aside {
    width: 270px;
    -moz-transform: translateX(-270px);
    -webkit-transform: translateX(-270px);
    -ms-transform: translateX(-270px);
    -o-transform: translateX(-270px);
    transform: translateX(-270px);
  }
}
#aside #logo {
  text-align: center;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 2em;
  text-transform: uppercase;
  font-size: 38px;
}
@media screen and (max-width: 768px) {
  #aside #logo {
    margin-bottom: 1em;
  }
}
#aside #logo a {
  color: #000;
}
#aside #logo a span {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
}
#aside #main-menu ul {
  text-align: center;
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 768px) {
  #aside #main-menu ul {
    margin: 0 0 2em 0;
  }
}
#aside #main-menu ul li {
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
}
#aside #main-menu ul li a {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  position: relative;
  padding: 10px 10px;
  letter-spacing: .2em;
  font-family: "Roboto", Arial, sans-serif;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
#aside #main-menu ul li a:after {
  content: "";
  position: absolute;
  height: 2px;
  bottom: 7px;
  left: 10px;
  right: 10px;
  background-color: #228896;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#aside #main-menu ul li a:hover {
  text-decoration: none;
  color: black;
}
#aside #main-menu ul li a:hover:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#aside #main-menu ul li.active a {
  color: black;
}
#aside #main-menu ul li.active a:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#aside .footer {
  position: absolute;
  bottom: 40px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 20px;
}
@media screen and (max-width: 768px) {
  #aside .footer {
    position: relative;
    bottom: 0;
  }
}
#aside .footer span {
  display: block;
}
#aside .footer ul {
  padding: 0;
  margin: 0;
  text-align: center;
}
#aside .footer ul li {
  padding: 0;
  margin: 0;
  display: inline;
  list-style: none;
}
#aside .footer ul li a {
  color: rgba(0, 0, 0, 0.7);
  padding: 4px;
}
#aside .footer ul li a:hover, #aside .footer ul li a:active, #aside .footer ul li a:focus {
  text-decoration: none;
  outline: none;
  color: #228896;
}

#main {
  width: 80%;
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 1200px) {
  #main {
    width: 70%;
  }
}
@media screen and (max-width: 768px) {
  #main {
    width: 100%;
  }
}
#main .narrow-content {
  position: relative;
  width: 93%;
  margin: 0 auto;
  padding: 4em 0;
  clear: both;
}
@media screen and (max-width: 768px) {
  #main .narrow-content {
    width: 100%;
    padding: 4em 1em;
  }
}

#hero {
  min-height: 500px;
  background: #fff url(/assets/logo.png) no-repeat center center;
  width: 100%;
  float: left;
  clear: both;
}
#hero .btn {
  font-size: 24px;
}
#hero .btn.btn-primary {
  padding: 14px 30px !important;
}
#hero .flexslider {
  border: none;
  z-index: 1;
  margin-bottom: 0;
}
#hero .flexslider .slides {
  position: relative;
  overflow: hidden;
}
#hero .flexslider .slides .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background: rgba(0, 0, 0, 0.3);
}
#hero .flexslider .slides li {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  min-height: 500px;
  position: relative;
}
#hero .flexslider .flex-control-nav {
  bottom: 20px;
  z-index: 1000;
  right: 20px;
  float: right;
  width: auto;
}
#hero .flexslider .flex-control-nav li {
  display: block;
  margin-bottom: 10px;
}
#hero .flexslider .flex-control-nav li a {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
#hero .flexslider .flex-control-nav li a.flex-active {
  cursor: pointer;
  background: transparent;
  border: 2px solid #228896;
}
#hero .flexslider .flex-direction-nav {
  display: none;
}
#hero .flexslider .slider-text {
  display: table;
  opacity: 0;
  min-height: 500px;
  z-index: 9;
}
#hero .flexslider .slider-text > .slider-text-inner {
  display: table-cell;
  vertical-align: middle;
  min-height: 700px;
  padding: 2em;
}
@media screen and (max-width: 768px) {
  #hero .flexslider .slider-text > .slider-text-inner {
    text-align: center;
  }
}
#hero .flexslider .slider-text > .slider-text-inner h1, #hero .flexslider .slider-text > .slider-text-inner h2 {
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Roboto", Arial, sans-serif;
}
#hero .flexslider .slider-text > .slider-text-inner h1 {
  margin-bottom: 20px;
  font-size: 45px;
  line-height: 1.3;
  font-weight: 100;
  font-family: "Roboto", Arial, sans-serif;
}
@media screen and (max-width: 768px) {
  #hero .flexslider .slider-text > .slider-text-inner h1 {
    font-size: 28px;
  }
}
#hero .flexslider .slider-text > .slider-text-inner h2 {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
  font-weight: 300;
}
#hero .flexslider .slider-text > .slider-text-inner h2 a {
  color: rgba(34, 136, 150, 0.8);
  border-bottom: 1px solid rgba(34, 136, 150, 0.7);
}
#hero .flexslider .slider-text > .slider-text-inner .heading-section {
  font-size: 50px;
}
@media screen and (max-width: 768px) {
  #hero .flexslider .slider-text > .slider-text-inner .heading-section {
    font-size: 30px;
  }
}
#hero .flexslider .slider-text > .slider-text-inner s
.lead {
  font-size: 20px;
  color: #fff;
}
#hero .flexslider .slider-text > .slider-text-inner s
.lead .icon-heart {
  color: #d9534f;
}
#hero .flexslider .slider-text > .slider-text-inner .btn {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  padding: 22px 30px !important;
  border: none;
  font-weight: 500;
}
#hero .flexslider .slider-text > .slider-text-inner .btn.btn-learn {
  background: #fff;
  color: #000;
}
#hero .flexslider .slider-text > .slider-text-inner .btn.btn-learn:hover {
  color: #fff;
}
@media screen and (max-width: 768px) {
  #hero .flexslider .slider-text > .slider-text-inner .btn {
    width: 100%;
  }
}

.bg-color {
  width: 100%;
  float: left;
  background: #fff;
}

body.offcanvas {
  overflow-x: hidden;
}
body.offcanvas #aside {
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
  width: 270px;
  background: #fff;
  z-index: 999;
  position: fixed;
}
body.offcanvas #main, body.offcanvas .nav-toggle {
  top: 0;
  -moz-transform: translateX(270px);
  -webkit-transform: translateX(270px);
  -ms-transform: translateX(270px);
  -o-transform: translateX(270px);
  transform: translateX(270px);
}

.services {
  margin-top: 5px;
}
.services ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.blog-entry {
  width: 100%;
  float: left;
  background: #fff;
}
@media screen and (max-width: 768px) {
  .blog-entry {
    margin-bottom: 30px;
  }
}
.blog-entry .blog-img {
  width: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
}
.blog-entry .blog-img img {
  position: relative;
  max-width: 100%;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.9s;
  -o-transition: 0.9s;
  transition: 0.9s;
}
.blog-entry .desc {
  padding: 25px;
}
.blog-entry .desc h3 {
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 1px;
  line-height: auto;
}
.blog-entry .desc h3 a {
  color: #000;
  text-decoration: none;
}
.blog-entry .desc span {
  display: block;
  margin-bottom: 20px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.4) !important;
}
.blog-entry .desc span small i {
  color: #e6e6e6;
}
.blog-entry .desc .lead {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000;
}
.blog-entry:hover .blog-img img {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.work {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  height: 270px;
  width: 100%;
  display: table;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .work {
    height: 400px;
  }
}
@media screen and (max-width: 480px) {
  .work {
    height: 270px;
  }
}
.work .desc {
  display: table-cell;
  vertical-align: middle;
  height: 270px;
  background: #fff;
  opacity: 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.work .desc h3 {
  font-size: 14px;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  -webkit-transform: translate3d(0, -15px, 0);
  transform: translate3d(0, -15px, 0);
}
.work .desc span {
  display: block;
  color: #999999;
  font-size: 12px;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  -webkit-transform: translate3d(0, 15px, 0);
  transform: translate3d(0, 15px, 0);
}
@media screen and (max-width: 768px) {
  .work .desc {
    opacity: 1;
    background: transparent !important;
  }
  .work .desc h3 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    color: #fff;
  }
  .work .desc span {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.work:hover .desc {
  opacity: 1;
}
.work:hover .desc h3 {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.work:hover .desc span {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.lead {
  font-size: 18px;
  line-height: 1.5;
}

.heading-colored {
  color: #228896;
  font-size: 30px;
}

.cards {
  padding: 1em 0;
  background: #e6e6e6;
}
@media screen and (max-width: 768px) {
  .cards {
    padding: 1em 0;
  }
}
.cards .flex-wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
}
.cards .flex-wrap > div {
  width: 49.5%;
  margin-right: 1%;
  background: #fff;
  padding: 30px;
  margin-bottom: 10px;
}
.cards .flex-wrap > div:nth-of-type(1) {
  float: left;
}
.cards .flex-wrap > div:nth-of-type(2) {
  float: right;
  margin-right: 0%;
}
@media screen and (max-width: 992px) {
  .cards .flex-wrap > div {
    width: 100%;
    margin-right: 0;
  }
}
.cards .flex-wrap .card p:last-child {
  margin-bottom: 0;
}
.cards .flex-wrap .card h5 {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: .2em;
  padding: 4px 8px;
  background: #ebebeb;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
}

.counter .number {
  font-size: 100px;
  color: #228896;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: .7;
}
.counter .number.left {
  float: left;
  width: 30%;
}
@media screen and (max-width: 768px) {
  .counter .number.left {
    width: 100%;
    line-height: 1.2;
  }
}
.counter .text {
  float: right;
  text-align: left;
  width: 70%;
}
@media screen and (max-width: 768px) {
  .counter .text {
    width: 100%;
    text-align: center;
  }
}
.counter .text h3 {
  margin: 0;
  padding: 0;
  position: relative;
}
.counter .text h3.border-bottom:after {
  content: "";
  width: 50px;
}

.social {
  padding: 0;
  margin: 0;
  text-align: center;
}
.social li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
}
.social li a {
  font-size: 22px;
  color: #000;
  padding: 10px;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
}
@media screen and (max-width: 768px) {
  .social li a {
    padding: 10px 8px;
  }
}
.social li a:hover {
  color: #228896;
}
.social li a:hover, .social li a:active, .social li a:focus {
  outline: none;
  text-decoration: none;
  color: #228896;
}

#map {
  width: 100%;
  height: 700px;
}
@media screen and (max-width: 768px) {
  #map {
    height: 200px;
  }
}

.more-contact {
  background: #fafafa;
}

.feature {
  text-align: left;
  width: 100%;
  float: left;
  margin-bottom: 40px;
  position: relative;
}
.feature .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  display: table;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
.feature .icon i {
  display: table-cell;
  vertical-align: middle;
  color: #228896;
  font-size: 40px;
  height: 100px;
}
@media screen and (max-width: 1200px) {
  .feature .icon i {
    font-size: 40px;
  }
}
.feature .text {
  padding-left: 120px;
  width: 100%;
}
.feature .text h2, .feature .text h3 {
  margin: 0;
  padding: 0;
}
.feature .text h3 {
  font-weight: 500;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  letter-spacing: .2em;
  text-transform: uppercase;
}
.feature.feature-sm .text {
  margin-top: 30px;
}
.feature.feature-sm .icon i {
  color: #228896;
  font-size: 40px;
}
@media screen and (max-width: 1200px) {
  .feature.feature-sm .icon i {
    font-size: 28px;
  }
}

.heading {
  font-size: 18px;
  margin-bottom: 2em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.heading.light {
  color: #fff;
}
.heading span {
  display: block;
}
@media screen and (max-width: 768px) {
  .heading {
    margin-bottom: 1em;
  }
}

.btn {
  margin-right: 4px;
  margin-bottom: 4px;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  -ms-border-radius: 0px;
  border-radius: 0px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  padding: 8px 20px !important;
}
.btn.btn-sm {
  padding: 4px 15px !important;
}
.btn.btn-md {
  padding: 8px 20px !important;
}
.btn.btn-lg {
  padding: 18px 36px !important;
}
.btn:hover, .btn:active, .btn:focus {
  box-shadow: none !important;
  outline: none !important;
}

.btn-primary {
  background: #228896;
  color: #fff;
  border: 2px solid #228896;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background: #279bab !important;
  border-color: #279bab !important;
}
.btn-primary.btn-outline {
  background: transparent;
  color: #228896;
  border: 2px solid #228896;
}
.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {
  background: #228896;
  color: #fff;
}

.btn-success {
  background: #5cb85c;
  color: #fff;
  border: 2px solid #5cb85c;
}
.btn-success:hover, .btn-success:focus, .btn-success:active {
  background: #4cae4c !important;
  border-color: #4cae4c !important;
}
.btn-success.btn-outline {
  background: transparent;
  color: #5cb85c;
  border: 2px solid #5cb85c;
}
.btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {
  background: #5cb85c;
  color: #fff;
}

.btn-info {
  background: #5bc0de;
  color: #fff;
  border: 2px solid #5bc0de;
}
.btn-info:hover, .btn-info:focus, .btn-info:active {
  background: #46b8da !important;
  border-color: #46b8da !important;
}
.btn-info.btn-outline {
  background: transparent;
  color: #5bc0de;
  border: 2px solid #5bc0de;
}
.btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {
  background: #5bc0de;
  color: #fff;
}

.btn-warning {
  background: #f0ad4e;
  color: #fff;
  border: 2px solid #f0ad4e;
}
.btn-warning:hover, .btn-warning:focus, .btn-warning:active {
  background: #eea236 !important;
  border-color: #eea236 !important;
}
.btn-warning.btn-outline {
  background: transparent;
  color: #f0ad4e;
  border: 2px solid #f0ad4e;
}
.btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {
  background: #f0ad4e;
  color: #fff;
}

.btn-danger {
  background: #d9534f;
  color: #fff;
  border: 2px solid #d9534f;
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active {
  background: #d43f3a !important;
  border-color: #d43f3a !important;
}
.btn-danger.btn-outline {
  background: transparent;
  color: #d9534f;
  border: 2px solid #d9534f;
}
.btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {
  background: #d9534f;
  color: #fff;
}

.btn-outline {
  background: none;
  border: 2px solid gray;
  font-size: 16px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.btn-outline:hover, .btn-outline:focus, .btn-outline:active {
  box-shadow: none;
}

.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  height: 54px;
  font-size: 18px;
  font-weight: 300;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
}
.form-control:active, .form-control:focus {
  outline: none;
  box-shadow: none;
  border-color: #228896;
}

#message {
  height: 130px;
}

.nav-toggle {
  cursor: pointer;
  text-decoration: none;
}
.nav-toggle.active i::before, .nav-toggle.active i::after {
  background: #000;
}
.nav-toggle.dark.active i::before, .nav-toggle.dark.active i::after {
  background: #000;
}
.nav-toggle:hover, .nav-toggle:focus, .nav-toggle:active {
  outline: none;
  border-bottom: none !important;
}
.nav-toggle i {
  position: relative;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  width: 30px;
  height: 2px;
  color: #000;
  font: bold 14px/.4 Helvetica;
  text-transform: uppercase;
  text-indent: -55px;
  background: #000;
  transition: all .2s ease-out;
}
.nav-toggle i::before, .nav-toggle i::after {
  content: '';
  width: 30px;
  height: 2px;
  background: #000;
  position: absolute;
  left: 0;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
.nav-toggle.dark i {
  position: relative;
  color: #000;
  background: #000;
  transition: all .2s ease-out;
}
.nav-toggle.dark i::before, .nav-toggle.dark i::after {
  background: #000;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.nav-toggle i::before {
  top: -7px;
}

.nav-toggle i::after {
  bottom: -7px;
}

.nav-toggle:hover i::before {
  top: -10px;
}

.nav-toggle:hover i::after {
  bottom: -10px;
}

.nav-toggle.active i {
  background: transparent;
}

.nav-toggle.active i::before {
  top: 0;
  -webkit-transform: rotateZ(45deg);
  -moz-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
  -o-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.nav-toggle.active i::after {
  bottom: 0;
  -webkit-transform: rotateZ(-45deg);
  -moz-transform: rotateZ(-45deg);
  -ms-transform: rotateZ(-45deg);
  -o-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
}

.nav-toggle {
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 9999;
  cursor: pointer;
  opacity: 1;
  visibility: hidden;
  padding: 20px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 768px) {
  .nav-toggle {
    opacity: 1;
    visibility: visible;
  }
}

@media screen and (max-width: 480px) {
  .col-xxs-12 {
    float: none;
    width: 100%;
  }
}

.row-bottom-padded-lg {
  padding-bottom: 7em;
}
@media screen and (max-width: 768px) {
  .row-bottom-padded-lg {
    padding-bottom: 1em;
  }
}

.row-bottom-padded-md {
  padding-bottom: 4em;
}
@media screen and (max-width: 768px) {
  .row-bottom-padded-md {
    padding-bottom: 1em;
  }
}

.row-bottom-padded-sm {
  padding-bottom: 1em;
}
@media screen and (max-width: 768px) {
  .row-bottom-padded-sm {
    padding-bottom: 1em;
  }
}

.col-padding {
  padding: 10px !important;
}

.js .animate-box {
  opacity: 0;
}

/*# sourceMappingURL=style.css.map */

</style>
