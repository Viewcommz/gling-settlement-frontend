<template>
  <div id="tmp-container">
    <app-header ref="header"/>
    <nuxt />
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  export default {
    components: {
      AppHeader,
    },
  }
</script>