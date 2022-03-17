<!-- 局部滚动容器 -->
<template>
  <div class="scroll-container">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    new BScroll(".scroll-container", {
      bindToWrapper: true,
      click: true,
    });
  },
};
</script>
<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // iPhoneX/iPhoneXs/iPhone11 Pro
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: calc(100% - 34px);
  }
  // iPhoneXs Max/iPhone11 Pro Max
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    height: calc(100% - 34px);
  }
  // iPhoneXR/iPhone11
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    height: calc(100% - 34px);
  }
  // 13 mini/12 mini
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: calc(100% - 34px);
  }
  // 13 Pro/12 Pro
  @media only screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) {
    height: calc(100% - 34px);
  }
  // 13 Pro Max/12 Pro Max
  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    height: calc(100% - 34px);
  }
  .scroll-content {
    width: 100%;
  }
}
</style>
