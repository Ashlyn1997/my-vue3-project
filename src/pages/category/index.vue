<template>
  <view class="content-wrapper">
    <view class="header">Add category</view>
    <view class="content">
      <button
        class="button"
        size="mini"
        :style="{backgroundColor: currentCategory.color, borderColor: currentCategory.color}"
      >{{ currentCategory.categoryName || 'add category' }}</button>
      <input
        class="uni-input"
        focus
        placeholder="add category"
        v-model="currentCategory.categoryName"
      />
      <hr class="line" :style="{color: currentCategory.color}" />
      <view class="color-list">
        <span
          class="category-color"
          v-for="(color, index) in colorList"
          :key="index"
          :style="{backgroundColor: color}"
          @click="() => {selectColor(color, index)}"
        >
          <span
            v-show="currentIndex === index"
            class="active"
            :style="{borderColor: currentCategory.color}"
          ></span>
        </span>
      </view>
    </view>
    <view class="bottom">
      <IphoneBottomSideAdapter />
    </view>
  </view>
</template>

<script setup lang="ts">
import { Category } from '../../interfaces/index'
import { ref, reactive } from 'vue'
export interface State {
  currentCategory: Category
  colorList: string[]
}

const { currentCategory, colorList } = reactive<State>({
  currentCategory: {
    categoryId: '',
    categoryName: '',
    color: '#F9CCBE',
  },
  colorList: [
    '#F9CCBE',
    '#A6E69C',
    '#F2F582',
    '#85ECD9',
    '#D69293',
    '#D6A4B9',
    '#C6B3CF',
    '#9ABFD2',
    '#B8CCD1',
    '#EBDC82',
    '#AEBDAA',
    '#DDBB99',
    '#D5998C',
    '#DB5A6B',
    '#5AA4A1',
  ],
})

const currentIndex = ref(0)

const selectColor = (color: string, index: number) => {
  currentCategory.color = color
  currentIndex.value = index
}

const title = ref('Hello')
const scrollTop = ref(0)
</script>

<style lang="scss" scoped>
@import url('../layout.scss');
.content {
  margin: 75rpx 50rpx;
  min-height: 200rpx;
  border-radius: 20rpx;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  padding-top: 70rpx;
}
.button {
  color: #fff;
  position: absolute;
  top: -30rpx;
  left: 35rpx;
  font-size: 32rpx;
}
.uni-input {
  margin: 0 50rpx;
}
.line {
  border-top: 2px solid;
  margin: 0 50rpx;
}
.color-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50rpx;
  justify-content: space-around;
  padding: 40rpx 50rpx;
}
.category-color {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  position: relative;
  .active {
    position: absolute;
    width: 80rpx;
    height: 80rpx;
    border: 2px solid;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
}
</style>>