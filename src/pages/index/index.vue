<template>
  <view class="content-wrapper">
    <view class="header">头部信息</view>
    <scroll-view
      class="content"
      :scroll-y="true"
      :scroll-top="scrollTop"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
    >
      <view class="contentBox">
        <ContentItem
          class="contentItem"
          v-for="(contentObj, index) in contentList"
          :key="index"
          :contentObj="contentObj"
        />
      </view>
    </scroll-view>
    <view class="bottom">底步</view>
    <view class="add"></view>
  </view>
</template>

<script setup lang="ts">
import { Content } from '../../interfaces/index'
import ContentItem from '../components/ContentItem/index.vue'
import { ref, reactive } from 'vue'
export interface State {
  contentList: Content[]
}

const title = ref('Hello')
const scrollTop = ref(0)
const { contentList } = reactive<State>({
  contentList: [
    {
      category: {
        categoryName: 'To Do',
        categoryId: '1',
        color: '#f26f91',
      },
      todoList: [
        {
          todoName: 'Learn vue',
          todoId: '1',
          done: false,
        },
        {
          todoName: 'Learn react',
          todoId: '2',
          done: false,
        },
        {
          todoName: 'Learn react',
          todoId: '2',
          done: false,
        },
        {
          todoName: 'Learn react',
          todoId: '2',
          done: false,
        },
      ],
    },
    {
      category: {
        categoryName: 'Daily',
        categoryId: '1',
        color: '#fba987',
      },
      todoList: [
        {
          todoName: 'Learn vue',
          todoId: '1',
          done: false,
        },
        {
          todoName: 'Learn react',
          todoId: '2',
          done: false,
        },
        {
          todoName: 'Meeting',
          todoId: '2',
          done: false,
        },
        {
          todoName: 'Buy something',
          todoId: '2',
          done: false,
        },
      ],
    },
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#22cad9',
      },
      todoList: [
        {
          todoName: 'Home',
          todoId: '1',
          done: false,
        },
        {
          todoName: 'Hospital',
          todoId: '2',
          done: false,
        },
      ],
    },
  ],
})

const upper = () => {}
const lower = () => {}
const scroll = () => {}
</script>

<style>
.content-wrapper {
  height: 100vh;
  background-color: #f0f5f6;
}

.header {
  height: 80rpx;
  border-bottom: 1rpx solid green;
}

.content {
  height: calc(100% - 200rpx);
}

.contentBox {
  padding: 75rpx 50rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75rpx;
}

.contentItem {
  width: 100%;
}

.bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 120rpx;
  border-top: 1rpx solid green;
}
</style>
