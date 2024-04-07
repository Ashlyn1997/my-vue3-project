<template>
  <view class="content-wrapper">
    <view class="header">Add to do</view>
    <view class="content">
      <input
        class="uni-input"
        focus
        placeholder="to do something"
      />
      <hr class="line" :style="{color: currentCategory.color}" />
    </view>
    <view class="bottom">
      <IphoneBottomSideAdapter />
    </view>
  </view>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import url('../layout.scss');

</style>