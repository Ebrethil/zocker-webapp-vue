<template>
    <h1>
        Home
    </h1>
</template>

<script>
export default {
    name: 'home',
    computed: {
        users() {
            return this.$store.getters.unregisteredUsers;
        },
    },
    data() {
        return {
            data: undefined,
        };
    },
    methods: {
        updateData() {
            this.data = 'foo';
        },
    },
};
</script>

<style scoped>

</style>
