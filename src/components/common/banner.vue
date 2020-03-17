<template>
  <div class="recommand-wrap">
    <div class="title">
      <img
        class="title-img"
        src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt="本周热门榜单"
      />
      <span class="title-hotrec">本店热销</span>
    </div>
    <div ref="wrapper">
      <ul class="cont" ref="cont">
        <li class="cont-item" v-for="(item,index) in list" :key="index">
          <div class="cont-img">
            <img class="img" :src="item.uri" :alt="item.title" />
          </div>
          <div class="cont-dest">{{item.title}}</div>
          <div class="cont-price">
            <span class="price">￥111</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: 'bannerContainer',
  props: {
    list: {
      type: Array,
      deault: function() {
					return []
				}
    }
  },
  data() {
    return {};
  },
  methods: {
    verScroll() {
      let width = this.list.length * 220; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);
          this.verScroll();
        }
      }, 0);
    });
  }
}
</script>

<style scoped lang="scss" >
.recommand-wrap {
  width: 80%;
  // margin: 5px 8px 5px 8px;
  background: rgb(245, 245, 245);
  padding-left: 0.24rem;
  width: 100%;
  border-radius: 5px;
  .title {
    // background-color: #ff8300;
    position: relative;
    height: 18px;
    display: flex;
    // padding: 12px 0;
    box-sizing: border-box;
    .title-img {
      width: 15px;
      height: 15px;
    }
    .title-hotrec {
      font-size: 16px;
      margin-left: 4px;
    }
  }
  .cont {
    list-style: none;
    white-space: nowrap;
    font-size: 12px;
    text-align: center;
    padding-right: 0.24rem;
    .cont-item {
      position: relative;
      display: inline-block;
      // padding: 0.06rem 0 0.2rem;
      width: 210px;
      //   height: 30px;
      //   margin: 0 0.1rem;
      .cont-img {
        overflow: hidden;
        width: 200px;
        height: 100;
        .img {
          width: 200px;
          height: 100px;
          margin-right: 2px;
          border-radius: 5px;
        }
      }
      .cont-dest {
        margin: 0.1rem 0;
      }
      .cont-price {
        .price {
          color: #ff8300;
        }
      }
    }
  }
}
</style>
