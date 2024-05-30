<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed} from "vue";

    const user = {
      id: 1,
      userName: 'ahahou',
      userAccount: 'ahahou',
      avatarUrl: 'https://img2.baidu.com/it/u=2240360064,1879061477&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=417',
      gender: '男',
      phone: '17605016362',
      email:'wangzhicheng811@gamil.com',
      createTime: new Date(),
    }

    const router = useRouter();

    const toEdit = (editKey: string, editName: string, currentValue: string) => {
      router.push({
        path: '/user/edit',
        query: {
          editKey,
          editName,
          currentValue,
        }
      })
    }

// Computed property to format date
const formattedCreateTime = computed(() => {
  const date = user.createTime;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});
</script>

<template>

  <van-cell title="昵称" is-link to="/user/edit" :value="user.userName" @click="toEdit('userName','昵称',user.userName)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" :value="user.gender"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone"  @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="注册时间"  :value="formattedCreateTime" />

</template>

<style scoped>

</style>