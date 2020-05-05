<template>
    <a-layout id="main-layout">
        <a-layout-header
            class="header"
            :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
        >
           <div class="logo">
               <router-link to="/">Donate</router-link>
           </div>
            <a-menu
                theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['2']"
                :style="{ lineHeight: '64px', float:'right' }"
            >
                <a-menu-item key="1" >Sign In</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content class="list">
                <router-view></router-view>
            
        </a-layout-content>
    </a-layout>
</template>

<script>
export default {
    name: 'Dash',
}
</script>
<style lang="less">
    #main-layout {
        .list {
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0 50px;
            margin-top: 64px;
            background: #fff;
        }
        
        .header {
            padding: 0 20px;
            .logo {
                width: auto;
                height: 31px;
                margin: 0px 24px 16px 0;
                float: left;
                color: white;
                font-size: 30px;
            }
        }
    }
</style>