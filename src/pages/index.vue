<template>
  <div>
    <a-layout class="layout">
            <a-layout-sider width="300">
                <h2 class="logo">宏观经济数据可视化系统</h2>
                <!--左侧菜单栏-->
                <a-menu theme="dark" mode="inline" class="menu" :defaultSelectedKeys="[11]" :defaultOpenKeys="[1]">
                    <a-sub-menu v-for="subMenu in menu" :key="subMenu.id">
                            <span slot="title">
                                <a-icon :type="subMenu.icon"/>{{subMenu.name}}
                            </span>
                        <a-menu-item v-for="menuItem in subMenu.menuItems" :key="menuItem.id">
                            <router-link :to="menuItem.link">{{menuItem.name}}</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout class="content-wrapper">
                <!--展示内容的面板-->
                <a-layout-content class="content">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
  </div>
</template>

<script>
import db from '../db/meta';
const {menu} = db;
export default {
  name: 'index',
  data() {
    return {
      menu
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
        height: 100vh;
        .nav {
            line-height: 64px;
        }
        .menu {
            border-right: 0;
        }
        .logo {
            padding: 30px 0;
            box-sizing: border-box;
            text-align: center;
            color: white;
            border-bottom: 1px solid white;
        }
        .content-wrapper {
            padding: 24px;
            box-sizing: border-box;
            .content {
                background: #fff;
                padding: 24px;
                margin: 0;
                minHeight: 300px;
            }
        }
    }
</style>
