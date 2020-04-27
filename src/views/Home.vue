<template>
  <div>
    <div class="search">
      <a-input-search 
        placeholder="input search text"         
        size="large"
        @search="onSearch" 
      />
    </div>
    <DonationRequestsList
      class="donations-list"
      :donationRequests="requests"
      :loading="loading"
      @showModal="showModal"
    />
    <a-modal
      style="top: 20px;"
      width="80%"
      :visible="modalVisible"
      :okButtonProps="{ props: { }}"
      @ok="goToDonate"
      @cancel="() => hideModal()"
    >
      <template v-if="item">
        <DonationRequestDetail :item="item"/>
        <template slot="footer">
          <a-button key="back" @click="hideModal">Cancel</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="goToDonate">
            Donate
          </a-button>
        </template>
      </template>
    </a-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import DonationRequestsList from '@/components/DonationRequestsList.vue'
import DonationRequestDetail from '@/components/DonationRequestDetail.vue'

export default {
  name: 'Home',
  components: {
    DonationRequestsList,
    DonationRequestDetail
  },
  data() {
    return  {
      requests: [],
      loading: true,
      modalVisible: false,
      item: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(()=> {
        this.requests = [
          { id: 1, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 3, },
          { id: 2, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 2 },
          { id: 3, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 4.5 },
          { id: 4, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 1 },
          { id: 5, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 5 },
          { id: 6, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 3 },
          { id: 7, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 2 },
          { id: 8, title: 'Pedido de Alcohol', organization: 'Malbran', priority: 3.5 },
        ];

        this.requests.forEach(r => {
          r.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sodales eros, eget efficitur risus tempor a. Nam condimentum augue ac nisi venenatis feugiat. Nulla id urna et massa semper eleifend eu eget lorem. Donec iaculis sapien eu tellus efficitur, eu ullamcorper nunc vestibulum. Nullam eu velit sit amet eros varius consequat vitae vel massa. Praesent nec feugiat augue, sagittis convallis dolor. Maecenas arcu felis, vehicula at nulla sit amet, dapibus consequat risus. Ut in sollicitudin justo. Integer tellus erat, vehicula id sapien sit amet, luctus hendrerit massa. Nullam ornare posuere tincidunt.'
          r.categories = ['Salud', 'Comida', 'ONG']
          return r;
        })
        this.loading = false;
      }, 3000)
    })
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    showModal(item) {
      this.item = item
      this.modalVisible = true;
    },
    hideModal() {
      this.item = [],
      this.modalVisible = false;
    },
    goToDonate(){
      if (this.item.id % 2 === 0) {
        this.$router.push("/sign-in")
      } else {
        this.$router.push("/donate/" + this.item.id)
      }
    }
  }
}
</script>

<style lang="less">
  .search {
    width: 100%;
    padding: 15px 15px;
  }
  .donations-list{
    padding: 0 15px;
  }
</style>