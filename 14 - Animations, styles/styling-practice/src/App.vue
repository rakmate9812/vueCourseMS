<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <div class="container">
      <!-- css class can be added inside the TRANSITION - it can only hold 1 child element!!!! -->
      <transition>
        <p v-if="pVisible">CSS practicing - default events</p>
      </transition>
      <button @click="showP">Toggle</button>
    </div>
    <!-- NAMED css classes using vue transition element -->
    <!-- <div class="container">
      <transition name="para">
        <p v-if="pVisible">CSS practicing - named v-classes with events</p>
      </transition>
      <button @click="showP">Toggle</button>
    </div> -->
    <div class="container">
      <!-- 1 EXCEPTION for having multiple child elements: 
          if only 1 of the multiple child elements are displayed on the dom
          syntax is v-if v-else, and need to set the mode (options are: out-in, in-ou etc see the docs)
           -->
      <!-- there are also hooks on the transiton where you can do anything -->
      <transition
        name="fade-button"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave">
        <div v-if="!usersVisible">
          <button @click="showUsers">Show users</button>
        </div>
        <div v-else>
          <button @click="showUsers">Hide users</button>
          <p v-if="usersVisible">User 1, User 2, User 3</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      pVisible: true,
      usersVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },

    showP() {
      this.pVisible = !this.pVisible;
    },

    showUsers() {
      this.usersVisible = !this.usersVisible;
    },

    // CLASS HOOKS - can add any js code on these
    beforeEnter(el) {
      console.log("before enter");
      console.log(el);
      // el.style.opacity = 0; // can set this if you want for ex
    },

    enter(el) {
      console.log("enter");
      console.log(el);
    },

    afterEnter(el) {
      console.log("after enter");
      console.log(el);
    },

    beforeLeave(el) {
      console.log("before leave");
      console.log(el);
    },

    leave(el) {
      console.log("leave");
      console.log(el);
    },

    afterLeave(el) {
      console.log("after leave");
      console.log(el);
    },
  },
};
</script>

<style>
.animate {
  transform: translateX(-150px);
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.5s ease-out;
}

/* CSS classes provided by vue for the TRANSITION dom element: */
/* when v-IF is set to TRUE */
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* when v-IF is set to FALSE */
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

/* using NAMED classes */
/*
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 0.3s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}*/
/* ------ ------ ------ ------ ------*/
/* ------ ------ ------ ------ ------*/

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* given styles-> --------- */
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
