<template>
    <div>
        <b-tabs content-class="mt-3">
            <b-tab title="Data" active>
                <div class="mt-4">
                    <div>Type</div>
                    <b-form-select v-model="inputData.fuelSelected" :options="fuelOptions"></b-form-select>
                </div>
                <div class="mt-4">
                    <div>Value</div>
                    <b-form-input v-model="inputData.value"></b-form-input>
                </div>
                <div class="mt-4">
                    <div>Unit</div>
                    <b-form-select v-model="inputData.unitSelected" :options="unitOptions"></b-form-select>
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary" @click="$emit('submit', inputData)">Submit</button>
                </div>
            </b-tab>
            <b-tab title="History"></b-tab>
            <b-tab title="Details"></b-tab>
            <b-tab title="Activity"></b-tab>
            <b-tab title="Notes"></b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: {
                value: '',
                fuelSelected: null,
                unitSelected: null,
            },
            fuelOptions: [
                { value: null, text: '' },
                { value: 'naturalgas', text: 'Natural Gas' },
                { value: 'gasoil', text: 'Gas Oil' },
                { value: 'propane', text: 'Propane' },
                { value: 'mazout', text: 'Mazout' }
            ],            
            unitOptions: [
                { value: null, text: '' },
                { value: 'kwh', text: 'kWh' },
                { value: 'bananas', text: 'Bananas' }
            ]
        }
    }
}
</script>
