<template>
  <TheHeader />
  <div class="bg-intro-mobile bg-cover">
    <img src="./images/image-mockups.png" alt="" class="intro-image" />
  </div>
  <div class="">
    <section class="flex flex-col items-center justify-center mb-20 px-6">
      <h1 class="text-4xl text-center text-darkBlue">
        Next generation digital banking
      </h1>
      <p class="text-grayishBlue my-8 text-center text-lg">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <TheButton title="Request Invite"/>
    </section>
    <div class="bg-lightGrayishBlue w-full px-6 pt-pad-top">
      <div class="flex flex-col items-center">
        <h3 class="text-5xl text-center text-darkBlue">Why choose Easybank?</h3>
        <p class="text-grayishBlue my-8 text-center text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <InfoComponent
        image="icon-online.svg"
        title="Why choose Easybank?"
        info="We leverage Open Banking to turn your bank account into
      your financial hub. Control your finances like never before."
      />
      <InfoComponent
        image="icon-online.svg"
        title="Online Banking"
        info="Our modern web and mobile applications allow you to keep track of your
    finances wherever you are in the world."
      />
      <InfoComponent
        image="icon-budgeting.svg"
        title="Simple Budgeting"
        info="See exactly where your money goes each month. Receive notifications when you’re close to
    hitting your limits."
      />
      <InfoComponent
        image="icon-onboarding.svg"
        title="Fast Onboarding"
        info="We don’t do branches. Open your account
    in minutes online and start taking control of your finances right away."
      />
      <InfoComponent
        image="icon-api.svg"
        title="Open API"
        info="Manage your savings, investments, pension, and much more from one
    account. Tracking your money has never been easier."
      />
    </div>
    <section
      class="flex flex-col items-center pt-24 text-3xl px-6 bg-veryLightGray"
    >
      <h3 class="mb-9">Lastest Articles</h3>
      <ArticleComponent
        image="image-currency.jpg"
        author=" Claire Robinson"
        title="Receive money in any currency with no fees"
        info="The world is
    getting smaller and we’re becoming more mobile. So why should you be forced
    to only receive money in a single …"
      />
      <ArticleComponent
        image="image-restaurant.jpg"
        author="Wilson Hutton"
        title="Treat yourself without worrying about money"
        info="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
      />
      <ArticleComponent
        image="image-plane.jpg"
        author="Wilson Hutton"
        title="Take your Easybank card wherever you go"
        info=" We want you to enjoy your travels. This is why we don’t charge any fees
         on purchases while you’re abroad. We’ll even show you …"
      />
      <ArticleComponent
        image="image-confetti.jpg"
        author=" Claire Robinson"
        title="Our invite-only Beta accounts are now live!"
        info=" After a lot of hard work by the whole team, we’re excited to launch 
        our closed beta. It’s easy to request an invite through the site ..."
      />
    </section>
    <TheFooter />
    <!--   
    About Us Contact Blog Careers Support Privacy Policy Request
    Invite © Easybank. All Rights Reserved -->
  </div>
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
</style>
