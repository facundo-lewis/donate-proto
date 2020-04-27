<template>
    <div id="request-detail">
        <span class="ant-card-meta-title">{{ item.title }}</span>
        <div class="ant-card-meta-description">{{ item.organization }}</div>
        <a-divider></a-divider>
        <div class="ant-card-meta-description">{{ item.description }}</div>
        <div>
            <span class="resources-title">Resources needed:</span>
            <a-list class="demo-loadmore-list" 
                :loading="loading" 
                itemLayout="horizontal"
                :dataSource="items"
                :pagination="pagination"
            >
                <a-list-item slot="renderItem" slot-scope="requestItem">
                    <a-list-item-meta
                        :description="requestItem.observation"
                    >
                    <span class="ant-list-item-meta-title" slot="title" >{{ requestItem.name }}</span>                        
                    </a-list-item-meta>
                    <span>{{ requestItem.quantity}} {{ requestItem.unit }}</span>
                </a-list-item>
            </a-list>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'DonationRequestDetail',
    props: {
        item: Object
    },
    data() {
        return {
            items: [],
            loading: false,
            pagination: {
                pageSize: 4
            }
        };
    },
    methods: {
        getItems() {
            for (const x of Array(5).keys()) {
                this.items.push({
                    name: `Item ${x}`,
                    observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sodales eros, eget efficitur risus tempor a',
                    quantity: 10,
                    unit: 'L'
                })
            }
        }
    },
    mounted(){
        this.loading = true;
        setTimeout(() => {
            this.getItems();            
            this.loading = false;
        }, 3000);
    }
}
</script>

<style lang="less">
    #request-detail {
        .ant-card-meta-description {
            margin-bottom: 15px;
        }
        .resources-title {
            font-weight: 600;
        }
    }
</style>