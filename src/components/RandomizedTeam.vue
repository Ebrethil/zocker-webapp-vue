<template>
    <div class="team-wrapper">
        <h3 class="team">Team {{ this.team }}</h3>
        <div class="team-entry" v-for="entry in entries"
            v-bind:key="entry.name">
            {{ entry }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'randomized-team',
    props: {
        entries: [],
        team: undefined,
    },
};
</script>

<style scoped>
    .team-entry {
        border: 1px solid mediumseagreen;
        border-radius: 20px;
        margin: 4px 0;
        padding: 8px 6px;
    }
</style>
