<template>
  <header class="fixed w-full bg-white p-6 flex flex-row justify-between z-10">
    <a href=""><img src="../images/logo.svg" alt="" /></a>

    <button
      id="menuButton"
      class="absolute right-6 bg-icon-hamburger w-6 h-11px"
      @click="toggleMenu"
      value="unactive"
    ></button>

    <nav>
      <ul
        id="navList"
        class="absolute w-modal-width flex flex-col test menu bg-white items-center rounded-md gap-7 py-8"
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Carrer</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
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
  transition: all 0.4s ease-out;
}
.active {
  background-image: url("../images/icon-close.svg");
  width: 18px;
  height: 19px;
}
</style>
