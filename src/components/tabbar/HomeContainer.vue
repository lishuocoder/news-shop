<template>
  <div class="main">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h2>主页</h2>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.main{
    height: 150px;
    background-color: red;
}
</style>