<template>
    <span class="input-wrap">
        <input class="input-field" @input="updateInput"/>
    </span>
</template>

<script>
export default {
    name: 'app-repeatable-input',
    props: {
        id: {
                required: false,
        },
    },
    computed: {
        //fieldData: this.$store.getters.getRndmItem(this.id)
    },
    data() {
        return {
            scopedValue: this.value,
        };
    },
    methods: {
        updateInput() {
            this.$store.mutations.updateRndmItem(this.scopedValue)
        },
    },
};
</script>

<style scoped>
    .input-field {
        padding: 8px;
        font-size: 14px;
    }
</style>
