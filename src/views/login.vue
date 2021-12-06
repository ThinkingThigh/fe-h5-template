<!-- 登录 -->
<template>
  <div class="login-container">{{ message }}</div>
</template>

<script>
import { getQueryString } from "../utils/common";
import { login } from "../constants/api";
import { PATH_INDEX } from "../constants/path";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    login() {
      // 登录
      const token = getQueryString("token");
      const path = getQueryString("path");
      if (token) {
        login({ token: token })
          .then((res) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("userInfo", JSON.stringify(res.user));
            if (path) {
              this.$router.replace({
                path: path,
              });
            } else {
              this.$router.replace({
                path: PATH_INDEX,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            this.message = "登录失败，请重新登录";
          });
      }
    },
  },
  mounted() {
    this.login();
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 14px;
}
</style>
