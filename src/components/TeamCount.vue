<template>
    <div>
        <button class="team-button" @click="decrement">-</button>
        <input class="team-input" v-bind:value="scopedCount"/>
        <button class="team-button" @click="increment">+</button>
    </div>
</template>

<script>
export default {
    name: 'team-count',
    data() {
        return {
            scopedCount: 2,
        };
    },
    methods: {
        increment() {
            this.scopedCount += 1;
        },
        decrement() {
            this.scopedCount -= 1;
        },
    },
    watch: {
        scopedCount() {
            this.$emit('teamCountChange', this.scopedCount);
        },
    },
};
</script>

<style scoped>
    .team-input {
        width: 30px;
        height: 30px;
        border: 1px solid mediumseagreen;
        border-radius: 20px;
        text-align: center;
        font-size: 15px;
    }
    .team-button {
        border: 1px solid mediumseagreen;
        border-radius: 20px;
    }
</style>
