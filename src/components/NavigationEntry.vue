<template>
    <span class="navigation-entry" :class="{ active: isActive }">
        {{ name }}
    </span>
</template>

<script>
export default {
    name: 'navigation-entry',
    props: {
        name: '',
        route: '',
        isActive: false,
    },
    methods: {
        redirect() {
            this.$router.push(this.route);
        },
    },
};

</script>

<style>
    .navigation-entry {
        cursor: pointer;
        /*border: 1px solid mediumseagreen;*/
        margin-right: 6px;
        padding: 10px;
        /*transition-property: border;*/
        /*transition-duration: 0.3s;*/
    }
    .navigation-entry:hover {
        border-bottom: 1px solid mediumseagreen;
    }

    .active {
        border-bottom: solid 2px mediumseagreen;
    }
</style>
