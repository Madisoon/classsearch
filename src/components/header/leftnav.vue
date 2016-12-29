<template>
  <div class="left-nav-context">
    <ul :object="leftNavMenus">
      <li v-for="leftNavMenu in leftNavMenus.secondMenu" :class="{'li-active': leftNavMenu.isActive}"
          @click="changeStatus(leftNavMenu)">
        <a>{{leftNavMenu.menuName}}</a>
      <li>
        <a>课 表 查 询</a>
      </li>
      <li>
        <a>时 间 查 询</a>
      </li>
      <li>
        <a>教 室 查 询</a>
      </li>
      <li>
        <a>老 师 查 询</a>
      </li>
      <li>
        <a>我 的 课 表</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default{
    props: {
      leftNavMenus: {
        type: Object
      }
    },
    data() {
      return {
        msg: 'hello vue'
      };
    },
    created () {
      console.log(this.leftNavMenus);
    },
    methods: {
      changeStatus (leftNavMenu) {
        var dataLen = this.leftNavMenus.secondMenu.length;
        for (let i = 0; i < dataLen; i++) {
          Vue.set(this.leftNavMenus.secondMenu[i], 'isActive', false);
        }
        leftNavMenu.isActive = true;
        console.log(leftNavMenu);
        console.log(this.leftNavMenus.secondMenu);
      }
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  .left-nav-context {
    width: 92%;
    margin: {
      left: 4%;
      top: 10px;
      bottom: 10px;
    }
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      border-bottom: 1px solid #f8f6f2;
      a {
        color: #666;
      }
    }
    .li-active {
      background-color: #f8f8f8;
    }
    & li:hover {
      background-color: #f8f8f8;
    }
  ;
  }
</style>
