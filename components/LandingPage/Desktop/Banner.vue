<template>
  <div id="top-banner">
    <v-app id="inspire">
      <v-carousel
        :cycle="false"
        height="800"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <!-- <div class="banner-wrapper" :style="{ 'background-color': item.color }"> -->
          <div class="banner-wrapper" :style="item.style">
            <div class="banner-text">
              <p class="tag">{{ item.tag }}</p>
              <h3>{{ item.titleSmall }}</h3>
              <h2>{{ item.titleBig }}</h2>
              <p>{{ item.desc }}</p>
            </div>
            <div class="banner-img">
              <img :src="require(`@/assets/images/${item.src}`)" alt="배너 이미지" />
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>
<script>
  import WasBanner from './WasBanner.vue'
  import Test from './Test.vue'

  export default {
    components: { WasBanner, Test },
    data: () => ({
      colors: [
        '#00BCD4',
        '#5FB7E8',
        '#6A26DA',
      ],
      slides: [
        'First',
        'Second',
        'Third',
      ],
      styleProps: {
        '--color': '#F37476'
      }, 
      items: [
        {
          tag: '작가에게 꼭 필요한 정산관리 서비스',
          titleSmall: '올인원 정산관리 시스템',
          titleBig: '글링으로!',
          desc: `여러 출판사에서 유통한 인터넷 서점 판매액을 한 눈에 보실 수 있습니다.
                원장부 확인, 월정산, 판매량 분석을 쉽게 도와줍니다.`,
          src: 'langding-banner-right-pic.png',
          style: {
            '--bg-color': '#00BCD4',
          }
        },
        {
          tag: '출판사를 위한 정산관리 서비스',
          titleSmall: '글링에서 시작하는',
          titleBig: '명쾌한 정산',
          desc: `힘든 정산관리 과정을 간단하게 바꾸고 싶다면?
                글링에서 무료로 경험해보세요!`,
          src: 'langding-banner-right-pic2.png',
          style: {
            '--bg-color': '#5FB7E8',
          }
        },
        {
          tag: '우리 회사에 글링이 필요할까?',
          titleSmall: '원하는 플랜을',
          titleBig: '지금 문의하세요!',
          desc: `힘든 정산관리 과정을 간단하게 바꾸고 싶다면?
                글링에서 무료로 경험해보세요!`,
          src: 'langding-banner-right-pic3.png',
          style: {
            '--bg-color': '#6A26DA',
            '--font-color': '#ffffff',
            '--tag-color': '#FFD84F' 
          }
        },
      ] 
    })
  }
</script>