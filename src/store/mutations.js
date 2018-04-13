export default {
    dashboards(state, dashboards) {
        state.dashboards = dashboards;
    },
    setRndmTeamCount(state, teamCount) {
        state.rndmTeamCount = teamCount;
    },
    removeRndmItem(state, id) {
        this.items = this.$store.state.rndmItems.filter(item => item.id !== id);
    },
    updateRndmItem(state, newVal, id) {
        let itemId = id;
        if (itemId === undefined) {
            if (this.items.length === 0) {
                itemId = 0;
            }
            itemId = this.items[this.items.length - 1].id + 1;

            this.items.push({ id: itemId, value: newVal });
        }
        const changedItem = this.$store.state.rndmItems.find(item => item.id === itemId);
        changedItem.value = newVal;
    },
};
