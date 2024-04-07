<template>
  <view class="content-wrapper">
    <view class="header">My list</view>
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
    <view class="bottom">
      <view class="button-wrapper">
        <span class="btn" @click="toAddCategoryPage">+</span>
      </view>
      <IphoneBottomSideAdapter />
    </view>
  </view>
</template>

<script setup lang="ts">
import { Content } from '../../interfaces/index'
import ContentItem from '../components/ContentItem/index.vue'
import IphoneBottomSideAdapter from '../components/IphoneBottomSideAdapter/index.vue'
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
        color: '#d69293',
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
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#d6a4b9',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#c6b3cf',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#aebdaa',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#b8ccd1',
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
    {
      category: {
        categoryName: 'Daily',
        categoryId: '1',
        color: '#ebdc82',
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
        categoryName: 'To Do',
        categoryId: '1',
        color: '#9abfd2',
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
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#737383',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#ddbb99',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#d5998c',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#5aa4a1',
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
    {
      category: {
        categoryName: 'Daily',
        categoryId: '1',
        color: '#db5a6b',
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
        color: '#344b5c',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#003460',
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
    {
      category: {
        categoryName: 'Place to go',
        categoryId: '1',
        color: '#3c5840',
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
const toAddCategoryPage = () => {
  uni.navigateTo({
    url: `/pages/category/index`,
  })
}
</script>

<style lang="scss" scoped>
@import url('../layout.scss');

.content {
  height: calc(100% - 240rpx);
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
  height: 160rpx;
  padding: 20rpx 200rpx 0 200rpx;
  box-sizing: border-box;
  .button-wrapper {
    border: 2px solid #000;
    border-radius: 50rpx;
    height: 80rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      font-size: 32px;
    }
  }
}
</style>
