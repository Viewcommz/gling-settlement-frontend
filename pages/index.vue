<template>
  <div>
      <h1>랜딩페이지</h1>
      <p>데스크탑 : {{ $device.isDesktop}}</p>
      <p>모바일 : {{ $device.isMobile}}</p>

      <div v-if="$device.isDesktop">
        <Banner />
      </div>
      <div v-else>
        <MobBanner />
      </div>
  </div>
</template>

<script>
import Banner from "@/components/LandingPage/Desktop/Banner"
import MobBanner from "@/components/LandingPage/Mobile/Banner"
// import { Banner, Test } from "@/components/LandingPage/Desktop"

export default {
  components: { Banner, MobBanner },
}
</script>
