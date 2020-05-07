<template>
    <div>
        <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title">                
                <a-icon 
                    slot="icon" 
                    :type="item.icon" 
                    :theme="getTheme(item)" 
                    :twoToneColor="item.twoToneColor" 
                />
            </a-step>
        </a-steps>
        <div class="steps-content">
            
            <donation-step-responsable v-if="current === 0" />
            <donation-step-address v-if="current === 1"/>
            <donation-step-finish v-if="current === 2"/>
        </div>
        <div class="steps-action">            
            <a-button
                style="margin-right: 8px"
                @click="prev"
                v-text="current > 0 ? 'Previous' : 'Cancel'"
            />
            
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                Next
            </a-button>
            <a-button
                v-if="current == steps.length - 1"
                type="primary"
                @click="$message.success('Processing complete!')"
            >
                Done
            </a-button>
        </div>
    </div>
</template>
<script>
import DonationStepResponsable from './DonationStepResponsable.vue';
import DonationStepAddress from './DonationStepAddress.vue';
import DonationStepFinish from './DonationStepFinish.vue';

export default {
    name: 'DonationSteps',
    components: {
        DonationStepResponsable,
        DonationStepAddress,
        DonationStepFinish
    },
    data() {
        return {
            current: 0,
            steps: [
                {
                    id: 0,
                    title: 'Responsable',
                    icon: 'user',
                    theme: 'outlined'
                },
                {
                    id: 1,
                    title: 'Address',
                    icon: 'home',
                    theme: 'outlined'
                },
                {
                    id: 2,
                    title: 'Finish',
                    icon: 'heart',
                    theme: 'twoTone',
                    disabledTheme: 'outlined',
                    twoToneColor: '#eb2f96'
                },
            ],
        };
    },
    methods: {
        getTheme(item) {
            if(!item.disabledTheme) {
                return item.theme;
            }
            let currentItem = this.steps[this.current];

            return currentItem.id === item.id ? item.theme : item.disabledTheme
        },
        next() {
            this.current++;
        },
        prev() {
            this.current--;
        },
    },
};
</script>
<style scoped>
    .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
    }
    .steps-action {
        margin-top: 24px;
    }
</style>