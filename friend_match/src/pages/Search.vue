<script setup lang="ts">
  import {ref} from "vue";

  const searchText = ref('');
  /**
   *  搜索过滤
   * @param val
   */
  const onSearch = (val) => {
    tagList.value = originTagList.map(parentTag =>{
      const tempChildren =  [...parentTag.children];
      const tempParentTag =  {...parentTag};
      tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
      return tempParentTag;
    })
  };
  //取消  清空
  const onCancel = () => {
    searchText.value = '';
    tagList.value = originTagList;
  };

  //已选中标签
  const activeIds = ref([]);
  const activeIndex = ref(0);

  //标签列表
  const originTagList = [
    {
      text: "性别",
      children:[
        {text: "男", id:"男"},
        {text: "女", id:"女"},
      ],
    },
    {
      text: "城市",
      children:[
        {text: "福建", id:"福建"},
        {text: "北京", id:"北京"},
        {text: "河北", id:"河北"},
        {text: "河南", id:"河南"},
      ],
    },
  ];

  //标签列表
  let tagList = ref(originTagList);

  //移除标签
  const doClose = (tag) => {
    activeIds.value = activeIds.value.filter(item => {
      return item !== tag;
    });
  }
</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        input-align="center"
    />
  </form>
  <van-divider content-position="center">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16" style="padding:0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" tyoe="primary" @close="doClose(tag)" color="#1989fa">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="center">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
</template>

<style scoped>

</style>