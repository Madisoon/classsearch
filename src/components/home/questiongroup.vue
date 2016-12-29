<template>
  <div class="group-info">
    <div class="my-group">
      <h4>我的分组{{name}}</h4>
      <mu-float-button icon="add" mini class="demo-float-button"/>
      <mu-icon value="cloud_download" color="orange"/>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  .group-info {
    .my-group {
      display: flex;
    }
  }
</style>
<script>
  export default {
  };
</script>
