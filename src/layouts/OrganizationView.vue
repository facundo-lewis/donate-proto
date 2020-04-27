<template>
    <a-layout id="main-layout">
        <a-layout-header class="header">
            <div class="logo">
                <router-link to="/">Donate</router-link>
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
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
            <a-layout-sider 
                breakpoint="lg"
                collapsedWidth="0"
                collapsible 
                v-model="collapsed"
                @collapse="onCollapse"
                @breakpoint="onBreakpoint"
                :trigger="null"
            >
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
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style lang="less">
    #main-layout {
        .header {
            padding: 0 20px;
            .logo {
                width: auto;
            }
        }
        .section-title {
            display: inline;
        }
        .trigger {
            color: #fff;
            font-size: 18px;
            line-height: 64px;
            margin-left: 10px;
            cursor: pointer;
            transition: color 0.3s;
        }

        .trigger:hover {
            color: #1890ff;
        }
    }
</style>