<script setup lang="ts">

import { ref } from 'vue';
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";

const onClickLeft = () => alert('左');
const onClickRight = () => alert('右');
const active = ref("index");
</script>

<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />

  <div id="content">
    <template v-if="active === 'index'">
      <Index />
    </template>
    <template v-if="active === 'team'">
      <Team />
    </template>

  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="search">找人</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>