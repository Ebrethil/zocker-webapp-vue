<template>
    <div class="dashboards">
        <h2>Dashboards</h2>

        <div class="dashboard-list-wrapper">
            <div v-for="dashboard in this.dashboards" class="dashboard" @click="openDashboard(dashboard.id)">
                <p>{{ dashboard.title }}</p>
            </div>
            <div>
                <button class="dashboard-create" type="button" @click="openModal">+</button>
            </div>
            <create-dashboard v-if="isModalActive" class="modal" @close-modal="closeModal" v-click-outside="closeModal"/>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    import dashboards from '../../store/getters';
    import CreateDashboard from './CreateDashboard.vue';
    import ClickOutside from 'vue-click-outside';

    export default {
        name: "DashboardList",
        data() {
            return {
                isModalActive: false,
            };
        },
        computed: {
            ...mapGetters([
                'dashboards',
            ]),
        },
        methods: {
            ...mapActions([
                'fetchDashboards'
            ]),
            openDashboard(id) {
                this.$router.push('/dashboard/' + id)
            },
            openModal() {
                this.isModalActive = true;
            },
            closeModal() {
                this.isModalActive = false;
            }
        },
        beforeMount() {
            this.fetchDashboards();
        },
        components: {
            CreateDashboard,
        },
        directives: {
            ClickOutside
        },
    }
</script>

<style scoped>
    .dashboard-list-wrapper {
        width: 720px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .dashboard {
        cursor: pointer;
        padding: 24px;
        margin: 16px;
        border: 1px solid mediumseagreen;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .dashboard:hover, .dashboard-create:hover {
        margin: 15px;
        border: 2px solid mediumseagreen;
    }

    .dashboard-create {
        cursor: pointer;
        font-size: 14px;
        line-height: 0;
        margin: 16px;
        padding: 24px 20px;
        border: 1px solid mediumseagreen;
        border-radius: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .modal {
        /*display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 100px;
        width: 680px; /* Full width */
        height: 380px; /* Full height */
        /*overflow: auto; /* Enable scroll if needed */
        /*background-color: rgb(0,0,0); /* Fallback color */
        /*background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
        background-color: white;
        border: 1px solid mediumseagreen;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>
