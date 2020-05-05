<template>
  <div>
    <div class="table-operations">
        <h2 class="section-title">Organizations</h2>
        <div class="create-button">
            <router-link to="/admin/organization" tag='a-button' class="ant-btn-primary">
                Create
            </router-link>
        </div>
      <a-divider></a-divider>
      <a-button @click="setAgeSort">Sort age</a-button>
      <a-button @click="clearFilters">Clear filters</a-button>
      <a-button @click="clearAll">Clear filters and sorters</a-button>
    </div>
    <a-table 
        :columns="columns" 
        :dataSource="data" 
        @change="handleChange"
        :loading="loading"
    >
        <div
            slot="filterDropdown"
            slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            style="padding: 8px"
        >
            <a-input
                v-ant-ref="c => (searchInput = c)"
                :placeholder="`Search ${column.dataIndex}`"
                :value="selectedKeys[0]"
                @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                style="width: 188px; margin-bottom: 8px; display: block;"
            />
            <a-button
                type="primary"
                @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                icon="search"
                size="small"
                style="width: 90px; margin-right: 8px"
                >Search</a-button
            >
            <a-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px"
                >Reset</a-button
            >
        </div>
        <template slot="customRender" slot-scope="text, record, index, column">
            <span v-if="searchText && searchedColumn === column.dataIndex">
                <template
                v-for="(fragment, i) in text
                    .toString()
                    .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                >
                <mark
                    v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                    :key="i"
                    class="highlight"
                    >{{ fragment }}</mark
                >
                <template v-else>{{ fragment }}</template>
                </template>
            </span>
            <template v-else>{{ text }}</template>
        </template>
        <span slot="action" slot-scope="text, record">
            <router-link :to="'/admin/organization/' + record.key">Edit</router-link>
            <a-divider type="vertical" />
            <a>Details</a>
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
            data: [],
            loading: true,
            filteredInfo: null,
            sortedInfo: null,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
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
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) => 
                        record.name
                            .toLowerCase()
                            .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus();
                        });
                        }
                    },
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
        handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            this.searchText = selectedKeys[0];
            this.searchedColumn = dataIndex;
        },
        handleReset(clearFilters) {
            clearFilters();
            this.searchText = '';
        },
    },
    mounted () {
        this.loading = true;
        setTimeout(() => {
            this.data = data;
            this.loading = false;
        }, 2000);
    }
};
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
.create-button {
    float: right;
}
</style>
