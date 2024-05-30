<script setup lang="ts">
import {useRouter} from "vue-router"
const router = useRouter()

const onClickLeft = () => {
  router.back()
};
const onClickRight = () => {
  router.push('/search')
};

// const active = ref("index");
</script>

<template>
  <van-nav-bar title="标题" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-icon name="search" size="18" @click="onClickRight"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user-o" name="setting">个人</van-tabbar-item>
  </van-tabbar>




</template>

<style scoped>

</style>