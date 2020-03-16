<template>
  <div>
    <!-- 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <a :href="item.url">
            <img :src="item.img" class="tapImg" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 推荐位组件 -->
    <div class="fixed-list ">
      <div class="fixed-scroll">
        <div
          v-for="(item,index) in itemcontainer"
          :key="index"
          class="fixed-product2"
          @click="detail()"
        >
          <img class="fixed-image" :src="item.uri" />
          <div class="fixed-title">{{item.title}}</div>
          <div class="fixed-subtitle">{{item.subtitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeList from "../../../data/home.js";
import itemContainer from "./SearchContainer";

export default {
  components: {
    itemContainer
  },
  data() {
    return {};
    bannerList: [];
    itemcontainer: {
    }
  },
  created() {
    this.bannerList = homeList.bannerList.data;
    this.itemcontainer = homeList.bannerList.data1;
  },
  methods: {
    detail() {
      console.log("点了");
    }
  }
};
</script>

<style  scoped lang="scss">
.swipe {
  height: 150px;
  margin: 10px 10px 5px 10px;
}
.tapImg {
  height: 150px;
  width: 100%;
  border-radius: 10px;
}

/* 推荐位样式 */
.fixed-list {
  margin: 5px 8px;
  // overflow: hidden;
  overflow-y:auto;
}
.fixed-scroll {
  white-space: nowrap;/*文本会在在同一行上继续 */
  display: inline-block;
  border-radius: 50%;
}
.fixed-product2 {
  border-radius: 6px;
  margin-left: 3px;
  background-color: #e7e0e0;
  display: inline-block;
}
.fixed-image {
  width: 200px;
  margin: 5px 5px 0 5px;
  height: 100px;
  border-radius: 6px;
}
.fixed-title {
  /* margin-top: 2px; */
  color: #1a1a1a;
  font-size: 14px;
  margin-left: auto;
}
.fixed-subtitle {
  color: #8d8d8d;
  font-size: 10px;
  margin-left: auto;
  margin-bottom: 2px;
}
</style>