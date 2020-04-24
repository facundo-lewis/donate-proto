<template>
  <div>
    <div class="table-operations">
        <div style="text-align: right">
            <router-link to="/admin/donation" tag='a-button' class="ant-btn-primary">
                Create Donation
            </router-link>
        </div>
      <a-divider></a-divider>
      <a-button @click="setAgeSort">Sort age</a-button>
      <a-button @click="clearFilters">Clear filters</a-button>
      <a-button @click="clearAll">Clear filters and sorters</a-button>
    </div>
    <a-table :columns="columns" :dataSource="data" @change="handleChange">
        <span slot="action" slot-scope="text, record">
            <router-link :to="'/admin/donation/' + record.id">View</router-link>
            <a-divider type="vertical" />
            <a>Delete</a>
        </span>
    </a-table>
  </div>
</template>
<script>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export default {
    name: 'Donations',
    data() {
        return {
            data,
            filteredInfo: null,
            sortedInfo: null,
        };
    },
    computed: {
        columns() {
            let { sortedInfo, filteredInfo } = this;
            sortedInfo = sortedInfo || {};
            filteredInfo = filteredInfo || {};
            const columns = [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    filters: [
                        { text: 'Joe', value: 'Joe' },
                        { text: 'Jim', value: 'Jim' },
                    ],
                    filteredValue: filteredInfo.name || null,
                    onFilter: (value, record) => record.name.includes(value),
                    sorter: (a, b) => a.name.length - b.name.length,
                    sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                    ellipsis: true,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    sorter: (a, b) => a.age - b.age,
                    sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                    filters: [
                        { text: 'London', value: 'London' },
                        { text: 'New York', value: 'New York' },
                    ],
                    filteredValue: filteredInfo.address || null,
                    onFilter: (value, record) => record.address.includes(value),
                    sorter: (a, b) => a.address.length - b.address.length,
                    sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                    ellipsis: true,
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ];
            return columns;
        },
    },
    methods: {
        handleChange(pagination, filters, sorter) {
            console.log('Various parameters', pagination, filters, sorter);
            this.filteredInfo = filters;
            this.sortedInfo = sorter;
        },
        clearFilters() {
            this.filteredInfo = null;
        },
        clearAll() {
            this.filteredInfo = null;
            this.sortedInfo = null;
        },
        setAgeSort() {
            this.sortedInfo = {
                order: this.sortedInfo && this.sortedInfo.order === 'ascend' ? 'descend': 'ascend',
                columnKey: 'age',
            };
        },
    },
};
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
