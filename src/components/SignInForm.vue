<template>
    <a-form layout="vertical" :form="form" @submit="handleSubmit">
        <a-form-item 
            :validate-status="userNameError() ? 'error' : ''" 
            :help="userNameError() || ''"
        >
            <a-input
                v-decorator="[
                    'email',
                    { 
                        rules: [{ 
                            required: true, 
                            message: 'Please input your e-mail!' 
                        }] 
                    }
                ]"
                placeholder="E-mail"
            >
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
            <a-input-password
                allow-clear
                v-decorator="[
                    'password',
                    { 
                        rules: [{ 
                            required: true, 
                            message: 'Please input your Password!' 
                        }] 
                    },
                ]"
                type="password"
                placeholder="Password"
            >
                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input-password>
        </a-form-item>
        <a-form-item>
            <a-button 
                type="primary" 
                html-type="submit"
                block
                :disabled="hasErrors(form.getFieldsError())"
            >
                Log in
            </a-button>
        </a-form-item>
        <div class="forgot">
            <router-link to="/forgot">forgot password?</router-link>
        </div>
        <div class="sign-in">
            Don't have an account? <router-link to="/sign-up">Join Now</router-link>
        </div>        
    </a-form>
</template> 

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
    name: 'SignInForm',
    data() {
        return {
            hasErrors,
            form: this.$form.createForm(this, { name: 'signin' }),
            headStyle: {
                borderBottom: "0px"
            }
        };
    },
    mounted() {
        this.$nextTick(() => {
        // To disabled submit button at the beginning.
        this.form.validateFields();
        });
    },
    methods: {
        // Only show error after a field is touched.
        userNameError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('email') && getFieldError('email');
        },
        // Only show error after a field is touched.
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('password') && getFieldError('password');
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.$emit('login', values);
                }
            });
        },
    },
}
</script>
<style lang="less">
    .forgot{
        text-align: center;
        font-size: 12px;
    }
    .sign-in {
        text-align: center;
        margin-top: 10px;
        font-size: 12px;
    }
</style>