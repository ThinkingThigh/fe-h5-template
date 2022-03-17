<!-- 首页 -->
<template>
  <div class="index-container">
    <ScrollContainer>index</ScrollContainer>
  </div>
</template>

<script>
import ScrollContainer from "@components/Common/ScrollContainer";
export default {
  components: {
    ScrollContainer,
  },
  data() {
    return {
      user_info:
        localStorage.getItem("userInfo") &&
        JSON.parse(localStorage.getItem("userInfo")),
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.index-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px - 20px);
  height: calc(100vh - 20px - 20px);
  padding: 20px;
  overflow-y: scroll;
}
</style>
