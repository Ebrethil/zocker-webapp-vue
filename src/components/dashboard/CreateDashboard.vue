<template :style="{ display: visibility}">
    <div>
        <h2>New Dashboard</h2>
        <input class="input" v-model="dashboard.title"/>
        <button class="button" @click="submit(dashboard)">create Dashboard</button>
        <button class="button" @click="hideModal">X</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "CreateDashboard",
        data() {
            return {
                dashboard: {title: undefined},
            };
        },
        methods: {
            ...mapActions([
                'fetchDashboards'
            ]),
            submit(dashboard) {
                if (this.isValid(dashboard)) {
                    fetch('api/dashboards', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(dashboard),
                    })
                        .then((data) => {
                            this.fetchDashboards();

                        })
                        .catch(function (error) {
                            console.error(error);
                        });


                    this.hideModal();
                }
            },
            hideModal() {
                this.$emit('close-modal', 'none');
            },
            isValid(dashboard) {
                return dashboard.title !== '' && dashboard.title !== undefined;
            },
        },
    }
</script>

<style scoped>
    .input {

    }
    .button {
        cursor: pointer;
        line-height: 0;
        margin: 16px;
        padding: 20px;
        border: 1px solid mediumseagreen;
    }
</style>
