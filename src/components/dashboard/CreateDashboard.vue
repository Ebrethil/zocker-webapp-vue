<template :style="{ display: visibility}">
    <div>
        <h2>New Dashboard</h2>
        <input class="input-field" v-model="dashboard.title"/>
        <button @click="submit(dashboard)">create Dashboard</button>
        <button @click="hideModal">X</button>
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
                        .then(response => response.json())
                        .then((data) => {
                            if (data) {
                                this.posts = data;
                            }

                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                    this.fetchDashboards();

                    this.hideModal();
                }
            },
            hideModal() {
                this.$emit('close-modal', 'none');
            },
            isValid(dashboard) {
                return dashboard.title !== '' || dashboard.title !== undefined
            },
        },
    }
</script>

<style scoped>

</style>
