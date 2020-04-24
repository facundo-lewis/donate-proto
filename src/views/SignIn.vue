<template>
    <a-layout class="signin-layout">
        <a-layout-content>
            <div>
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :xs="16" :sm="10" :md="10" :lg="8" :xl="6">
                        <a-card
                            title="Donate"
                            :bordered="false"
                            :headStyle="headStyle"
                            class="signin-card"
                        >
                            <SignInForm @login="login" />                        
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <a-layout-footer>Softvision</a-layout-footer>
    </a-layout>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";

export default {
    name: 'SignIn',
    components: {
        SignInForm
    },
    data() {
        return {
            headStyle: {
                borderBottom: "0px"
            }
        };
    },
    methods: {
        login(data) {
            console.log('Received values of form: ', data);            
            this.$router.replace('/');
        }
    }
}
</script>

<style lang="less">
    .ant-layout,
    .ant-layout-content > div,
    .ant-layout-content div.ant-row-flex
    {
        height: 100%;
    }

    .ant-layout.signin-layout {
        background-image: url('../assets/bg.webp');
        background-size: cover;
    }
    .signin-card {
        width: 100%;
    }
</style>