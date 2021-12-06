<!-- 移动端跳转页 -->
<template>
  <div class="go-monbile-container">
    <div class="content">
      <img src="../assets/imgs/mobile.svg" alt />
      <div class="end"></div>
      <div class="endtext">请使用手机打开应用</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.go-monbile-container {
  display: flex;
  flex-direction: column;
  width: calc(100% - 15px - 15px);
  height: calc(100vh - 15px - 15px);
  padding: 15px;
//   background-color: #f3f3f3;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 15px - 15px);
    background: #ffffff;
    border-radius: 8px;
  }
  img {
    margin-top: 139px;
  }
  .end {
    font-size: 16px;
    font-weight: 700;
    color: rgba(77, 77, 77, 1);
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .endtext {
    font-size: 14px;
    font-weight: 400;
    color: rgba(133, 133, 133, 1);
  }
}
</style>
