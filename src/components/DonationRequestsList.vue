<template>
    <a-list 
        :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }" 
        :dataSource="dataSource"
        :pagination="pagination"
        id="donation-requests"
    >
        <a-list-item slot="renderItem" slot-scope="item">
            <!-- TODO: Replace to send the item to the child component -->
            <DonationRequestsListItem                
                :id="item.id"
                :loading="loading"
                :title="item.title"
                :organization="item.organization"
                :description="item.description"
                :priority="item.priority"
                :categories="item.categories"
                @showDetail="showDetail"
            />
        </a-list-item>
    </a-list>
</template>

<script>
import DonationRequestsListItem from "./DonationRequestsListItem.vue";
export default {
    name: 'DonationRequestsList',
    components: {
        DonationRequestsListItem
    },
    props: {
        donationRequests: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: true
        },
        showModal: Function
    },
    data() {
        return {
            gutter: [8, 8],
            headStyle: {
                textAlign: "left"
            },
            dataSource: [{}, {}, {}, {}, {}, {}],            
            pagination: {
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3 
            }
        };
    },
    methods: {
        showDetail(id){
            let item = this.donationRequests.find(i => i.id === id);
            this.$emit('showModal', item)
        }
    },
    watch: {
        donationRequests: function(newValue) {           
            this.dataSource = newValue;
        }
    }
}
</script>

<style lang="less">
    #donation-requests {        
        .action-buttons {
            text-align: right;
            padding-right: 15px;
        }
        .ant-list-pagination {
            text-align: center;
        }
    }
</style>