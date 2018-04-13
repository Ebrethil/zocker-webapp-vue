<template>
    <div class="hello">
        <h1>Team Randomizer</h1>
        <div v-if="randomizedTeams.length === 0">
            <h2>Enter the names and select your desired team size</h2>
            <!-- <team-count @teamCountChange="(e) => onTeamCountChange(e)"/>
            <div class="input-wrap" v-for="item in items" v-bind:key="item.id">
                <app-repeatable-input :id="item.id"/>
                <button class="rndm-button" tabindex="-1"
                        @click="remove(this.$store.mutations.removeRndmItem(state, item.id))">-</button>
            </div>
            <button class="rndm-button" type="button" @click="addForm()">+</button>
            <button class="rndm-button" type="button"
                    @click="requestRandomization">Randomize</button>
            -->
            <pre>
                <!--{{ items }}-->
            </pre>
        </div>
        <div v-else class="team-wrapper">
            <randomized-team class="team" v-for="(team, index) in randomizedTeams"
                             :entries="team" v-bind:key="index"/>
            <button class="rndm-button" type="button"
                    @click="clearRandomizdTeams">Go back</button>
        </div>
    </div>
</template>

<script>
import RepeatableInput from './RepeatableInput.vue';
import RandomizedTeam from './RandomizedTeam.vue';
import TeamCount from './TeamCount.vue';

export default {
    name: 'Randomize',
    computed: {
        items() { return this.$store.getters.rndmItems() },
        randomizedTeams() { return this.$store.getters.rndmTeams() },
        teamCount() { this.$store.getters.rndmTeamCount() },
    },
    data() {
        return {
            response: undefined,
        };
    },
    methods: {
        requestRandomization() {
            const names = [];
            this.items.forEach((item) => {
                names.push(item.value);
            });
            fetch('/api/randomize', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ items: names, type: 'team', teamCount: this.teamCount }),
            })
                .then(response => response.json())
                .then((data) => {
                    data.forEach((team) => {
                        this.randomizedTeams.push(team);
                    });
                });
        },
        clearRandomizdTeams() {
            this.randomizedTeams = [];
        },
    },
    components: {
        TeamCount,
        'app-repeatable-input': RepeatableInput,
        'randomized-team': RandomizedTeam,
        'team-count': TeamCount,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rndm-button {
        padding: 6px 10px;
        border: none;
        border: 1px solid mediumseagreen;
        border-radius: 8px;
    }
    .input-wrap {
        margin: 10px 4px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .team-wrapper {
        display: flex;
        width: 800px;
        margin: auto;
    }
    .team {
        border: 1px solid mediumseagreen;
        margin: 10px;
        padding: 12px;
        display: flex;
        flex-direction: column;
    }
</style>
