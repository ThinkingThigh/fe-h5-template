<!-- 添加证书按钮 -->
<template>
  <div
    class="certificate-add-container"
    @click="handleClick"
    :style="color && { backgroundColor: color }"
  >
    <van-icon name="plus" />
    <div class="title">{{ title }}</div>
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
.certificate-add-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 10px - 10px - 2px);
  background-color: #fff;
  font-size: 14px;
  color: #969799;
  border: 1px dotted #c8c9cc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  &:active {
    opacity: 0.7;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
