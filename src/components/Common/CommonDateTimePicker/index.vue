<!-- 通用单选 -->
<template>
  <div class="common-datetime-picker-container">
    <van-field
      readonly
      clickable
      name="issue_date"
      :value="selectedValue"
      :label="label"
      :placeholder="placeholder"
      @click="isShowPicker = true"
      :rules="[{ required: required, message: '请选择' + label }]"
    />
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        :max-date="maxDate"
        :min-date="minDate"
        @confirm="onConfirm"
        @cancel="isShowPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, DatetimePicker } from "vant";
import dayjs from "dayjs";
export default {
  components: {
    "van-field": Field,
    "van-popup": Popup,
    "van-datetime-picker": DatetimePicker,
  },
  props: ["label", "placeholder", "value", "required"],
  data() {
    return {
      isShowPicker: false,
      currentDate: new Date(),
      maxDate: new Date(),
      minDate: new Date(1970, 0, 1),
    };
  },
  computed: {
    selectedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("update:value", dayjs(val).format("YYYY-MM-DD"));
      },
    },
  },
  methods: {
    onConfirm(value) {
      console.log("onConfirm", value);
      this.selectedValue = value;
      this.isShowPicker = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.common-datetime-picker-container {
  width: 100%;
  // 解决 van-cell 封装后默认为最后一个元素 没有伪元素分割线问题
  .van-cell:last-child::after {
    display: block;
  }
}
</style>
