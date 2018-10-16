<template>
    <div class="menu">
        <a href="#" class="nav-toggle" :class="{ active: open }" @click="toggleMenu"><i></i></a>
        <aside id="aside" role="complementary" class="border js-fullheight">

            <h1 id="logo"><a @click="go('home')">赵大仁</a></h1>
            <nav id="main-menu" role="navigation">
                <ul>
                    <li :class="{ active: checkPath('home') }" @click="go('home')"><a @click="go('home')">Home主页</a></li>
                    <li :class="{ active: checkPath('resume') }" @click="go('resume')"><a @click="go('resume')">Resume简历</a></li>
                    <li :class="{ active: checkPath('blog') }" @click="go('blog')"><a @click="go('blog')">Blog博客</a></li>
                    <li :class="{ active: checkPath('portfolio') }" @click="go('portfolio')"><a @click="go('portfolio')">Portfolio作品集</a></li>
                    <li :class="{ active: checkPath('about') }" @click="go('about')"><a @click="go('about')">About关于</a></li>
                    <li :class="{ active: checkPath('contact') }" @click="go('contact')"><a @click="go('contact')">Contact联系方式</a></li>
                </ul>
            </nav>

            <div class="footer">
                <p>Copyright &copy; 2017.Sky__zt All rights reserved.</p>
                <ul>
                    <li><a href="#"><i class="icon-facebook2"></i></a></li>
                    <li><a href="#"><i class="icon-twitter2"></i></a></li>
                    <li><a href="#"><i class="icon-instagram"></i></a></li>
                    <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                </ul>
            </div>

        </aside>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false
        }
    },
    mounted() {
        this.mobileMenuOutsideClick()
    },
    methods: {
        checkPath(path) {
          let isIndex = path === 'home' && this.$route.path === '/'
          return this.$route.path.indexOf(path) > -1 || isIndex
        },
        go(path) {
          this.$router.push(`/${path}`)
          setTimeout(this.closeMenu, 500);
        },
        toggleMenu() {
            this.open ? this.closeMenu() : this.openMenu()
        },
        openMenu() {
            this.open = true
            document.getElementsByTagName('body')[0].className = 'offcanvas'
        },
        closeMenu() {
            this.open = false
            document.getElementsByTagName('body')[0].className = ''
        },
        mobileMenuOutsideClick() {
            document.getElementById('main').onclick = () => {
              this.open&&this.closeMenu()
            }
            window.onscroll = () => this.closeMenu()
        }
    }
}
</script>

<style>
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

</style>
<style lang="scss" scoped>
.nav-toggle {
  cursor: pointer;
  text-decoration: none;
  background: rgba($color: white, $alpha: .2);
  &.active i {
    &::before, &::after {
      background: #000;
    }
  }
  &.dark.active i {
    &::before, &::after {
      background: #000;
    }
  }
  &:hover, &:focus, &:active {
    outline: none;
    border-bottom: none !important;
  }
  i {
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
    bottom: 3px;
    &::before, &::after {
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
  }
  &.dark i {
    position: relative;
    color: #000;
    background: #000;
    transition: all .2s ease-out;
    &::before, &::after {
      background: #000;
      -webkit-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s;
    }
  }
  i {
    &::before {
      top: -7px;
    }
    &::after {
      bottom: -7px;
    }
  }
  &:hover i {
    &::before {
      top: -10px;
    }
    &::after {
      bottom: -10px;
    }
  }
  &.active i {
    background: transparent;
    &::before {
      top: 0;
      -webkit-transform: rotateZ(45deg);
      -moz-transform: rotateZ(45deg);
      -ms-transform: rotateZ(45deg);
      -o-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
    }
    &::after {
      bottom: 0;
      -webkit-transform: rotateZ(-45deg);
      -moz-transform: rotateZ(-45deg);
      -ms-transform: rotateZ(-45deg);
      -o-transform: rotateZ(-45deg);
      transform: rotateZ(-45deg);
    }
  }
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 9999;
  cursor: pointer;
  opacity: 1;
  visibility: hidden;
  padding: 15px 20px;
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
</style>
<style lang="scss" scoped>
#aside {
  padding-top: 60px;
  padding-bottom: 40px;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: hidden;
  z-index: 1001;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  #logo {
    text-align: center;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 2em;
    text-transform: uppercase;
    font-size: 38px;
    a {
      color: #000;
      span {
        font-weight: 300;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  #main-menu ul {
    text-align: center;
    margin: 0;
    padding: 0;
    li {
      margin: 0 0 20px 0;
      padding: 0;
      list-style: none;
      a {
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
        &:after {
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
        &:hover {
          text-decoration: none;
          color: black;
          &:after {
            visibility: visible;
            -webkit-transform: scaleX(1);
            -moz-transform: scaleX(1);
            -ms-transform: scaleX(1);
            -o-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
      &.active a {
        color: black;
        &:after {
          visibility: visible;
          -webkit-transform: scaleX(1);
          -moz-transform: scaleX(1);
          -ms-transform: scaleX(1);
          -o-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 40px;
    font-size: 14px;
    text-align: center;
    width: 100%;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 20px;
    span {
      display: block;
    }
    ul {
      padding: 0;
      margin: 0;
      text-align: center;
      li {
        padding: 0;
        margin: 0;
        display: inline;
        list-style: none;
        a {
          color: rgba(0, 0, 0, 0.7);
          padding: 4px;
          &:hover, &:active, &:focus {
            text-decoration: none;
            outline: none;
            color: #228896;
          }
        }
      }
    }
  }
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

@media screen and (max-width: 768px) {
  #aside #logo {
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 768px) {
  #aside #main-menu ul {
    margin: 0 0 2em 0;
  }
}

@media screen and (max-width: 768px) {
  #aside .footer {
    position: relative;
    bottom: 0;
  }
}
</style>
