<template>
  <TheHeader />
  <div class="flex flex-col lg:grid grid-cols-2 lg:pt-20">
    <div
      class="bg-intro-mobile bg-cover flex justify-center lg:col-start-2 lg:bg-intro-desktop lg:row-start-1 lg:justify-start"
    >
      <img src="./images/image-mockups.png" alt="" class="intro-image" />
    </div>
    <section
      class="flex flex-col items-center justify-center mb-20 px-6 lg:col-start-1 lg:row-start-1 lg:items-start lg:px-40"
    >
      <h1 class="text-4xl text-center text-darkBlue lg:text-left">
        Next generation digital banking
      </h1>
      <p class="text-grayishBlue my-8 text-center text-lg lg:text-left">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <TheButton title="Request Invite" />
    </section>
  </div>

  <div
    class="bg-lightGrayishBlue w-full px-6 pt-pad-top lg:grid lg:grid-cols-4 lg:grid-rows-layout lg:px-40 lg:gap-x-7 lg:gap-y-20 lg:py-pad-top-desk"
  >
    <div
      class="flex flex-col items-center lg:col-span-2 lg:row-start-1 lg:items-start"
    >
      <h3 class="text-5xl text-center text-darkBlue lg:text-left">
        Why choose Easybank?
      </h3>
      <p class="text-grayishBlue my-8 text-center text-lg lg:text-left w-full">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <InfoComponent
      image="icon-online.svg"
      title="Online Banking"
      info="Our modern web and mobile applications allow you to keep track of your
    finances wherever you are in the world."
      class="lg:row-start-2 lg:col-auto"
    />
    <InfoComponent
      image="icon-budgeting.svg"
      title="Simple Budgeting"
      info="See exactly where your money goes each month. Receive notifications when you’re close to
    hitting your limits."
      class="lg:row-start-2 lg:col-auto"
    />
    <InfoComponent
      image="icon-onboarding.svg"
      title="Fast Onboarding"
      info="We don’t do branches. Open your account
    in minutes online and start taking control of your finances right away."
      class="lg:row-start-2 lg:col-auto"
    />
    <InfoComponent
      image="icon-api.svg"
      title="Open API"
      info="Manage your savings, investments, pension, and much more from one
    account. Tracking your money has never been easier."
      class="lg:row-start-2 lg:col-auto"
    />
  </div>

  <section
    class="flex flex-col items-center pt-24 text-3xl px-6 bg-veryLightGray 
    lg:grid lg:grid-rows-article-layout lg:grid-cols-4 lg:px-40 lg:gap-x-7 lg:gap-y-14 lg:pb-20 lg:place-content-stretch"
  >
    <h3 class="mb-9 lg:row-start-1 lg:col-span-2">Lastest Articles</h3>
    <ArticleComponent
      image="image-currency"
      author=" Claire Robinson"
      title="Receive money in any currency with no fees"
      info="The world is
    getting smaller and we’re becoming more mobile. So why should you be forced
    to only receive money in a single …"
      class="lg:row-start-2 lg:col-auto bg-white "
    />
    <ArticleComponent
      image="image-restaurant"
      author="Wilson Hutton"
      title="Treat yourself without worrying about money"
      info="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
      class="lg:row-start-2 lg:col-auto bg-white"
    />
    <ArticleComponent
      image="image-plane"
      author="Wilson Hutton"
      title="Take your Easybank card wherever you go"
      info=" We want you to enjoy your travels. This is why we don’t charge any fees
         on purchases while you’re abroad. We’ll even show you …"
      class="lg:row-start-2 lg:col-auto bg-white"
    />
    <ArticleComponent
      image="image-confetti"
      author=" Claire Robinson"
      title="Our invite-only Beta accounts are now live!"
      info=" After a lot of hard work by the whole team, we’re excited to launch 
        our closed beta. It’s easy to request an invite through the site ..."
      class="lg:row-start-2 lg:col-auto bg-white"
    />
  </section>
  <TheFooter />
  <!--   
    About Us Contact Blog Careers Support Privacy Policy Request
    Invite © Easybank. All Rights Reserved -->
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheButton from "./components/TheButton.vue";
import InfoComponent from "./components/InfoComponent.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheButton,
    InfoComponent,
    ArticleComponent,
    TheFooter,
  },
};
</script>

<style>
body {
  position: relative;
}
.intro-image {
  position: relative;
  transform: translateY(-5em);
  z-index: 0;
}
@media (min-width: 1025px) {
  .intro-image {
    transform: translateY(0);
  }
}
</style>
