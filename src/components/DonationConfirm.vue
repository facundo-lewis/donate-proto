<template>
    <a-modal
        :visible="showConfirmation"
        title="Confirmation of Donation"
        :confirm-loading="confirmLoading"
        :footer="null"
        @ok="handleOk"
        @cancel="handleCancel"
    >
        <DonationSteps />
    </a-modal>
</template>
<script>
import DonationSteps from './DonationSteps.vue'
export default {
    name: 'DonationConfirm',
    components: {
        DonationSteps
    },
    props: {
        showConfirmation: Boolean
    },
    methods: {

    }
}
</script>