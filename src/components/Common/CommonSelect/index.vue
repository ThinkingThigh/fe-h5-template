<!-- 通用单选 -->
<template>
  <div class="common-select-container">
    <van-field
      readonly
      clickable
      name="picker"
      :value="selectedValue"
      :label="label"
      :placeholder="placeholder"
      @click="isShowPicker = true"
      :rules="[{ required: true, message: '请选择' + label }]"
    />
    <van-popup v-model="isShowPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="isShowPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, Picker } from "vant";
export default {
  components: {
    "van-field": Field,
    "van-popup": Popup,
    "van-picker": Picker,
  },
  props: ["label", "placeholder", "value", "columns"],
  data() {
    return {
      isShowPicker: false,
    };
  },
  computed: {
    selectedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("update:value", val);
      },
    },
  },
  methods: {
    onConfirm(value) {
      this.selectedValue = value;
      this.isShowPicker = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.common-select-container {
  width: 100%;
  // 解决 van-cell 封装后默认为最后一个元素 没有伪元素分割线问题
  .van-cell:last-child::after {
    display: block;
  }
}
</style>
