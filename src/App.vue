<template>
<router-view />
</template>

<script>

import { computed } from "vue";
import { AppState } from "./AppState";

export default {
  name: "App",
  setup() {
  
    return {
      appState: computed(() => AppState),

    
        transitionIntro() {
          return document.getElementById("entry-text").style.opacity="0";
        }
     
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

canvas {
  position: fixed;
  top: 0;
  left: 0;
}

.container-fluid{
  padding-top: 30vh;
}
.content-holder{
  min-height: 95vh;
  padding-top: 40vh;
}

.entry-text{
  opacity: 1;
  transition: 2s;
}

.container, .container-2 {

  /*outline: 1px solid red;*/
  border: 5px solid transparent;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Beon","Source Sans Pro",Helvetica,sans-serif;
  font-size: 2.5em;
  letter-spacing: .5em;
  color: rgba(255, 255, 255, 0.35);
  text-shadow: -.2rem -.2rem 1em #2734ac;
}

.demo {
  /*background-image:
    linear-gradient(white, white),
    linear-gradient(180deg, cornflowerblue, purple);*/
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  text-align: center;
  animation: highlight 5s infinite alternate;

}


@keyframes highlight {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%{
    text-shadow:
            -0.2rem -0.2rem .5rem #2734ac,
            0.2rem 0.2rem .5rem #2734ac,
            0 0 .1rem #2734ac,
            0 0 .2rem #2734ac,
            0 0 .3rem #2734ac,
            0 0 .4rem #2734ac ,
            0 0 .5rem  #2734ac;
                    
  }
  20%, 24%, 55% {        
    text-shadow: none;
    
}   
 
}

.anim-line {
  width: .5em;
  height: 10em;
  background-color: #2734ac;
  box-shadow: 0 0 .5em #2734ac;
  border-radius: 5px;

}


</style>
