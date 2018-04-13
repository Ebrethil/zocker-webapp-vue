<template>
    <div class="navigation">
        <span v-for="(value, index) in list" v-bind:key="value.route" @click="redirect(value.route)">
            <app-navigation-entry :name="value.name"
                                  :route="value.route"
                                  :isActive="activeRoute === value.route"/>
        </span>
        <hr>
    </div>
</template>

<script>
import NavigationEntry from './NavigationEntry.vue';

export default {
    name: 'app-navigation',
    data() {
        return {
            list: [
                { name: 'Home', route: '/' },
                { name: 'Randomizer', route: '/random' },
                { name: 'Hello World', route: '/hello' },
                { name: 'Dashboards', route: '/dashboards' },
            ],
            activeRoute: this.$route.path,
            hover: false,
        };
    },
    methods: {
        naviHover() {
            this.hover = true;
        },
        redirect(route) {
            this.$router.push(route);

            this.activeRoute = this.$route.path;
        },
    },
    components: {
        'app-navigation-entry': NavigationEntry,
    },
};
</script>

<style scoped>
    .navigation {
        margin: 30px auto;
    }
    hr {
        margin-top: 26px;
        margin-bottom: 20px;
        background-color: mediumseagreen;
        height: 1px;
        border: 0;
    }
</style>
