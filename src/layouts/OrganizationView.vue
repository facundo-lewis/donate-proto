<template>
    <a-layout id="main-layout">
        <a-layout-header class="header">
            <div class="logo">
                Donate
            </div>
            <a-menu
                theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['2']"
                :style="{ lineHeight: '64px', float:'right' }"
            >
                <a-menu-item key="1" >Sign Out</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                    mode="inline"
                    :defaultSelectedKeys="['/admin']"
                    :style="{ height: '100%', borderRight: 0 }"
                >                
                    <template v-for="item of menu">
                        <a-menu-item :key="item.path" >
                            <router-link  :to="item.path">
                                <a-icon :type="item.icon" />
                                    <span class="nav-text">{{ item.text }}</span>
                            </router-link>
                        </a-menu-item>
                    </template>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 24px">        
                <a-layout-content
                :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
                >
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
  data() {
    return {
        collapsed: false,
        menu: [   
            { path: '/admin', text: 'Donations', icon: 'heart'},
            { path: '/admin/users', text: 'Users', icon: 'team'},
            { path: '/admin/organizations', text: 'Organizations', icon: 'profile'},
        ]
    };
  },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>