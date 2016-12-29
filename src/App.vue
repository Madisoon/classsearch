<template>
  <div id="my-app">
    <vheader :menus="menus" v-on:changeStatus="changeLeftNavMenus"></vheader>
    <div class="body-section">
      <div class="left-nav">
        <vleftnav :leftNavMenus="leftNavMenus"></vleftnav>
      </div>
      <div class="right-content">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header.vue';
  import vleftnav from 'components/header/leftnav.vue';

  const ERR_OK = 0;

  export default {
    data () {
      return {
        menus: {},
        leftNavMenus: {}

      };
    },
    created () {
      /* 创建的时候获取所有的参数（包括一些个人的信息和菜单等。。。） */
      this.$http.post('/api/getDeparmentUser').then((response) => {
        console.log(response.body);
        console.log('成功');
        console.log(response);
      }, (errorResponse) => {
        console.log(errorResponse);
        console.log('响应出错');
      });
      let menus = [{
        'menuName': '我的主页',
        'isActive': true,
        'menuRouter': '/home',
        'secondMenu': [{
          'menuName': '个人信息',
          'menuUrl': '2'
        }, {
          'menuName': '系统设置',
          'menuUrl': '2'
        }, {
          'menuName': '密码修改',
          'menuUrl': '2'
        }]
      }, {
        'menuName': '毕设管理',
        'isActive': false,
        'menuRouter': '/home',
        'secondMenu': [{
          'menuName': '毕设分配',
          'menuUrl': '2'
        }, {
          'menuName': '毕设选题',
          'menuUrl': '2'
        }, {
          'menuName': '发布题目',
          'menuUrl': '2'
        }, {
          'menuName': '开设分组',
          'isActive': false,
          'menuUrl': '2'
        }, {
          'menuName': '毕设审核',
          'menuUrl': '2'
        }]
      }, {
        'menuName': '系统设置',
        'isActive': false,
        'menuRouter': '/home',
        'secondMenu': [{
          'menuName': '用户管理',
          'menuUrl': '2'
        }, {
          'menuName': '1',
          'menuUrl': '2'
        }, {
          'menuName': '1',
          'menuUrl': '2'
        }]
      }, {
        'menuName': '信息反馈',
        'isActive': false,
        'menuRouter': '/home',
        'secondMenu': [{
          'menuName': 'QQ反馈',
          'menuUrl': '2'
        }, {
          'menuName': '微信反馈',
          'menuUrl': '2'
        }, {
          'menuName': '消息反馈',
          'menuUrl': '2'
        }]
      }];
      this.menus = menus;
    },
    methods: {
      changeLeftNavMenus (value) {
        this.leftNavMenus = value;
      }
    },
    components: {vheader, vleftnav}
  };

</script>

<style lang="scss" rel="stylesheet/scss">
  #my-app {
    background-color: #f8f6f2;
    height: 100%;
  }

  .body-section {
    width: 100%;
    height: 82%;
    margin-top: 15px;
    .left-nav {
      float: left;
      width: 14%;
      height: 100%;
      margin-left: 2%;
      background-color: white;
    }
    .right-content {
      float: left;
      width: 80%;
      height: 100%;
      margin-left: 2%;
      padding: 5px;
      background-color: white;

    }
  }
</style>
