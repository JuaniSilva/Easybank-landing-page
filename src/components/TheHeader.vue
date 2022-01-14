<template>
  <header class="fixed w-full bg-white p-6 flex flex-row justify-between z-10 lg:items-center">
    <a href=""><img src="../images/logo.svg" alt="" /></a>

    <button
      id="menuButton"
      class="absolute right-6 bg-icon-hamburger w-6 h-11px lg:hidden"
      @click="toggleMenu"
      value="unactive"
    ></button>

    <nav>
      <ul
        id="navList"
        class="text-grayishBlue absolute w-modal-width flex flex-col test menu font-light bg-white items-center rounded-md gap-7 py-8 lg:static lg:flex-row lg:gap-y-0 lg:py-0"
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Carrer</a></li>
      </ul>
    </nav>

    <TheButton title="Request Invite" class="hidden lg:block"/>
  </header>
</template>

<script>
import TheButton from "./TheButton.vue";
export default {
  components: {
    TheButton,
  },
  methods: {
    toggleMenu() {
      const navList = document.getElementById("navList");
      const menuButton = document.getElementById("menuButton");

      if (menuButton.value == "unactive") {
        menuButton.value = "active";
        navList.style.transform = "translateY(0)";
        menuButton.classList.toggle("active");
      } else {
        menuButton.value = "unactive";
        navList.style.transform = "translateY(-150%)";
        menuButton.classList.toggle("active");
      }
    },
  },
};
</script>

<style scoped>
.menu {
  left: 5%;
  top: 140%;
  transform: translateY(-150%);
  transition: transform 0.4s ease-out;
}
@media (min-width: 1024px) {
  .menu{
    position: static;
    transform: translateY(0);
  }
}
.active {
  background-image: url("../images/icon-close.svg");
  width: 18px;
  height: 19px;
}
</style>
