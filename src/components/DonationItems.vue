<template>
    <a-table
        :columns="columns" 
        :data-source="items"
        bordered
        :loading="loading"
    >
        <template
            v-for="col in ['quantity']"
            :slot="col"
            slot-scope="text, record, index"
        >
            <div :key="col" :aria-colindex="index">
                <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    type="number"
                    @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template v-else>
                    {{ text }}
                </template>
            </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
            <div class="editable-row-operations" :aria-colindex="index">
                <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <a-divider type="vertical"></a-divider>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                        <a>Cancel</a>
                    </a-popconfirm>
                </span>
                <span v-else>
                    <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Donate item</a>
                </span>
            </div>
        </template>                    
        <template slot="footer" slot-scope="currentPageData">
            <div :_="currentPageData" :style="{ textAlign: 'right' }">
                <a-button 
                    type="primary"
                    @click="doDonation"
                >Donate!</a-button>
            </div>
        </template>
    </a-table>
</template>
<script>

const columns = [
    {
    title: 'Item',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Quantity requested',
    dataIndex: 'requested',
    width: '10%',
    scopedSlots: { customRender: 'requested' },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '40%',
    ellipsis: true,
    scopedSlots: { customRender: 'description' },
  },
  {
    title: 'Quantity to donate',
    dataIndex: 'quantity',
    width: '10%',
    scopedSlots: { customRender: 'quantity' },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];
export default {
    name: 'DonationItems',
    props: {

    },
    data() {
        return {
            loading: true,
            items: [],
            columns,            
            editingKey: '',
        }
    },
    methods: {
        handleChange(value, key, column) {
            const newData = [...this.items];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target[column] = value;
                this.items = newData;
            }
        },
        edit(key) {
            const newData = [...this.items];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = key;
            if (target) {
                target.editable = true;
                this.items = newData;
            }
        },
        save(key) {
            const newData = [...this.items];
            const newCacheData = [...this.cacheData];
            const target = newData.filter(item => key === item.key)[0];
            const targetCache = newCacheData.filter(item => key === item.key)[0];
            if (target && targetCache) {
                delete target.editable;
                this.items = newData;
                Object.assign(targetCache, target);
                this.cacheData = newCacheData;
            }
            this.editingKey = '';
        },
        cancel(key) {
            const newData = [...this.items];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = '';
            if (target) {
                Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
                delete target.editable;
                this.items = newData;
            }
        },
        doDonation(){
            let items = this.items.filter(i => i.quantity > 0);
            console.log(items)
            if (items.length) {
                this.$emit('doDonation', items)
            } else {
                // TODO: Think better message
                alert('No items to donate'); 
            }
        }
    },
    mounted() {        
        setTimeout(() => {            
            let unit = 'Liters';
            for (let i = 0; i < 100; i++) {
                let requested = `${i} ${unit}`
                this.items.push({
                    key: i.toString(),
                    name: `Alcohol ${i}`,
                    quantityRequested: i, 
                    requested,
                    description: `In tellus dolor, tempus in mi eu, congue porta lorem. Fusce vel laoreet libero, quis iaculis dolor.`,
                    quantity: 0
                });
            }
            this.cacheData = this.items.map(item => ({ ...item }));
            this.loading = false;
        }, 3000);
    }
}
</script>