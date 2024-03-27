<template>
  <view class="content-item">
    <button
      class="button"
      size="mini"
      :style="{backgroundColor: category.color, borderColor: category.color}"
    >{{ category.categoryName }}</button>
    <view class="list-wrapper">
      <view class="list-item" v-for="(todoObj, index) in todoList" :key="index">
        <span>{{ todoObj.todoName }}</span>
        <span class="circle" :style="{borderColor: category.color}"></span>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Content } from '../../../interfaces/index'

import { ref } from 'vue'
export interface Props {
  contentObj: Content
}
const { contentObj } = defineProps<Props>()
const { category, todoList } = contentObj
</script>

<style scoped>
.content-item {
  width: 100%;
  min-height: 200rpx;
  border-radius: 20rpx;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
}
.button {
  color: #fff;
  position: absolute;
  top: -30rpx;
  left: 35rpx;
  font-size: 32rpx;
}
.list-wrapper {
  padding: 70rpx 40rpx 40rpx 40rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32rpx;
}
.circle {
  height: 30rpx;
  width: 30rpx;
  border-radius: 50%;
  border: 1.5px solid;
}
</style>
