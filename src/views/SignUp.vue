<template>
    <a-layout class="signup-layout">
        <a-layout-content>
            <div>
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :xs="18" :sm="10" :md="12" :lg="10" :xl="8">
                        <a-card
                            title="Create account"
                            :headStyle="headStyle"
                            :bordered="false"
                        >
                            <SignUpForm @signUp="signUp" />
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <a-layout-footer>Softvision</a-layout-footer>
    </a-layout>
</template>
<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
    name: 'SignUp',
    components: {
        SignUpForm
    },
    data() {
        return {
            headStyle: {
                borderBottom: "0px",
                textAlign: 'left',
                fontWeight: '600'
            }
        }
    },
    methods: {
        signUp(data) {
            console.log('Received values of component: ', data);            
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

    .ant-layout.signup-layout {
        background-image: url('../assets/bg.webp');
    }
</style>