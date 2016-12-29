<template>
  <div class="framework-header">
    <header class="header-context">
      <h1 class="app-title left">毕业设计选题平台</h1>
      <ul class="right">
        <li>
          <div class="word">待办事项</div>
        </li>
        <li>
          <div class="word">消息</div>
        </li>
        <li>
          <div class="word">企业圈</div>
        </li>
        <li class="qyq">
          <div>{{menus.users}}</div>
        </li>
        <li class="user">
          <div id="user-info" @click="changeSetting()">
            <span class="word">赵刚</span>
            <img src="../../assets/head.jpg" class="user-photo">
          </div>
        </li>
      </ul>
      <div style="clear:both"></div>
    </header>
    <div class="frame-first-nav">
      <div class="nav-content">
        <li v-for="menuItem in menus" :class="{'li-active': menuItem.isActive}" @click="changeStatus(menuItem)">
          <a>{{menuItem.menuName}}</a>
        </li>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      menus: {
        type: Array
      }
    },
    created() {
      console.log(this.menus);
    },
    data () {
      return {
        isActive: true
      };
    },
    methods: {
      changeStatus (item) {
        for (let i = 0; i < this.menus.length; i++) {
          this.menus[i].isActive = false;
        }
        item.isActive = true;
        this.$emit('changeStatus', item);
      },
      changeSetting () {
        console.log('我点击了');
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  .header-context {
    width: 100%;
    height: 50px;
    background-color: #2299ee;
    .app-title {
      margin-left: 30px;
      line-height: 50px;
      color: white;
      font: {
        size: 24px;
        weight: 600;
        family: '华文行楷' !important;
      }
    ;
      -webkit-margin-before: 0em;
    }
    .left {
      float: left;
    }
    .right {
      float: right;
      li {
        font-size: 12px;
        line-height: 50px;
        cursor: pointer;
        position: relative;
        color: #fff;
        vertical-align: middle;
        float: left;
        padding-right: 14px;
        padding-left: 14px;
        img {
          display: inline-block;
          height: 30px;
          width: 30px;
          border-radius: 15px;
          margin-left: 10px;
          vertical-align: middle;
        }
        .word {
          font-size: 0.9rem;
        }
      }
    }
  }

  .frame-first-nav {
    height: 40px;
    background: white;
    width: 100%;
    border-bottom: 2px solid #ddd;
    .nav-content {
      width: 90%;
      margin-left: 5%;
      height: 40px;
    }
    li {
      float: left;
      line-height: 38px;
      margin-right: 34px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #727272;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .li-active {
      border-bottom: 2px solid #29e;
    }
  }

  ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  li {
    list-style: none;
  }
</style>
