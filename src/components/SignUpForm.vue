<template>
    <a-form layout="vertical" :form="form" @submit="handleSubmit">
        <a-row
            type="flex"
            justify="space-around"
            align="middle"
            :gutter="[16, 0]"
        >
            <a-col :xs="24" :md="12">
                <a-form-item
                    :validate-status="commonFieldError('name') ? 'error' : ''" 
                    :help="commonFieldError('name') || ''"
                    cx
                >
                        <a-input
                        v-decorator="[
                            'firstName',
                            { 
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your first name!' 
                                }] 
                            }
                        ]"
                        placeholder="First Name"
                    >
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
            </a-col>
            <a-col :xs="24" :md="12">
                <a-form-item                                        
                    :validate-status="commonFieldError('lastName') ? 'error' : ''" 
                    :help="commonFieldError('lastName') || ''"
                >
                    <a-input
                        v-decorator="[
                            'lastName',
                            { 
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your first name!' 
                                }] 
                            }
                        ]"
                        placeholder="Last Name"
                    >
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
            </a-col>
        </a-row>
        
        <a-form-item                                        
            :validate-status="commonFieldError('email') ? 'error' : ''" 
            :help="commonFieldError('email') || ''"
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
                <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        
        <a-form-item                                        
            :validate-status="commonFieldError('password') ? 'error' : ''" 
            :help="commonFieldError('password') || ''"
        >
            <a-input-password
                v-decorator="[
                    'password',
                    { 
                        rules: [{ 
                            required: true, 
                            message: 'Please input your password!' 
                        }] 
                    }
                ]"
                placeholder="Password"
            >
                <a-icon slot="password" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input-password>
        </a-form-item>
        
        <a-form-item                                        
            :validate-status="commonFieldError('passwordConfirm') ? 'error' : ''" 
            :help="commonFieldError('passwordConfirm') || ''"
        >
            <a-input-password
                v-decorator="[
                    'passwordConfirm',
                    { 
                        rules: [{ 
                            required: true, 
                            message: 'Please input your password!' 
                        }] 
                    }
                ]"
                placeholder="Confirm Password"
            >
                <a-icon slot="passwordConfirm" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input-password>
        </a-form-item>
        <a-form-item>
            <a-button 
                block
                type="primary" 
                html-type="submit"
                :disabled="hasErrors(form.getFieldsError())"
            >
                Sign up!
            </a-button>
        </a-form-item>
        <div class="sign-in">
            Already on Donate? <router-link to="/sign-in">Sign in</router-link>
        </div>
    </a-form>
</template>  

<script>

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
    name: 'SignUpForm',
    data() {
        return {
            hasErrors,          
            form: this.$form.createForm(this, { name: 'signup' })
        }
    },
    mounted() {
        this.$nextTick(() => {
            // To disabled submit button at the beginning.
            this.form.validateFields();
        });
    },
    methods: {
        // Only show error after a field is touched.
        commonFieldError(field) {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched(field) && getFieldError(field);
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
                this.$emit('signUp', values);
                }
            });
        },
    },
}
</script> 