<template>
    <div class="donations-container">
        <a-skeleton :loading="loading">
            <div>
                <a-row>
                    <a-col>
                        <h2>{{ title }}<span class="subtitle"> - {{ organization }}</span></h2>
                    </a-col>
                </a-row>        
                <a-row>
                    <a-col>
                        <span>Priority:</span>
                        <a-rate
                            allowHalf
                            :defaultValue="priority"
                            disabled 
                        >
                            <a-icon slot="character" type="heart" theme="filled" class="rate-icon" />
                        </a-rate>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col>
                        <p>{{ observation }}</p>
                    </a-col>
                </a-row> 
                <a-row>
                    <a-col>
                        <h4>Items requested:</h4>
                    </a-col>
                </a-row>
            </div>
        </a-skeleton>
        <a-row>
          <a-col>
                <DonationItems
                    @doDonation="doDonation"
                />
          </a-col>
        </a-row>
        <DonationConfirm
            :showConfirmation="showConfirmation"
        />
    </div>
</template>

<script>
import DonationItems from '@/components/DonationItems.vue'
import DonationConfirm from '@/components/DonationConfirm.vue'
export default {
    name: 'Donation',
    components: {
        DonationItems,
        DonationConfirm
    },
    data() {
        return {
            title: '',
            organization: '',
            observation: '',
            priority: 0,
            loading: true,
            items: [],
            showConfirmation: false
        }
    },    
    methods: {
        doDonation(items){
            this.items = items;
            this.showConfirmation = true;
        }
    },
    mounted() {
        this.loading = true;      

        setTimeout(() => {      
            this.title = 'Pedido de Alcohol';
            this.organization = 'Malbran';
            this.priority = 3.5;
            this.observation = 'In tellus dolor, tempus in mi eu, congue porta lorem. Fusce vel laoreet libero, quis iaculis dolor.'

            this.loading = false;
        }, 1500);
    }
}
</script>
<style lang="less">
    .donations-container {
        padding-top: 30px;
        .subtitle {
            color: #a9a9a9;
            font-size: 14px;
        }
    }
</style>