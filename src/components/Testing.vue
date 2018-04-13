<template>
    <div>
        <h2>{{ test }}</h2>
        <pre>
            {{ rndmItem }}
        </pre>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "testing",
        computed: {
            ...mapGetters([
                'test',
                'rndmItems',
                'rndmItem',
            ]),
        },
    }
</script>

<style scoped>

</style>
