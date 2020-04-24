<template>
    <a-card hoverable :loading="loading">
        <a-card-meta :title="title" :description="organization" />
        <p class="description">{{ description }}</p>
        <span>
            Priority:  
            <a-rate
                allowHalf
                :defaultValue="priority"
                disabled 
            >
                <a-icon slot="character" type="heart" theme="filled" class="rate-icon" />
            </a-rate>
        </span>
        <br />
        <span>Created: 05/12/2020</span><br />
        <span>Finish on: 10/12/2020</span>
        <div class="tags">            
            <a-tag
                v-for="category in categories" 
                :key="category"
            >{{ category }}</a-tag>
        </div>

        <template class="ant-card-actions" slot="actions">
            <div class="action-buttons">
                <a-button 
                    ghost
                    type="primary" 
                    :disabled="loading" 
                    @click="sendItem"
                >More detail</a-button>
            </div>
        </template>
    </a-card>
</template>

<script>
export default {
    name: 'DonationRequestsListItem',
    props: {
        id: Number,
        title: String,
        organization: String,
        description: String,
        loading: {
            type: Boolean,
            default: true
        },
        priority: {
            type: Number,
            default: 0
        },
        categories: {
            type: Array,
            default: () => []
        },
        showDetail: Function
    },
    methods: {
        sendItem() {
            this.$emit('showDetail', this.id)
        }
    }
}
</script>

<style lang="less">
    .description {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .tags {
        margin-top: 15px;
    }
</style>
