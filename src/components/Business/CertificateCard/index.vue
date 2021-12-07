<!-- 证书卡片 -->
<template>
  <div
    class="certificate-card"
    @click="handleClick"
    :style="color && { backgroundColor: color }"
  >
    <div class="left">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
    <div class="right"><van-icon name="arrow" /></div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    "van-icon": Icon,
  },
  props: ["title", "content", "color", "handleClick"],
};
</script>
<style lang="scss" scoped>
.certificate-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px - 20px);
  background-color: #c8c9cc;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
  flex-shrink: 0;
  &:last-child {
    margin-bottom: 0;
  }
  &:active {
    opacity: 0.7;
  }
  .title {
    margin-bottom: 12px;
  }
  .content {
    font-size: 12px;
  }
}
</style>
