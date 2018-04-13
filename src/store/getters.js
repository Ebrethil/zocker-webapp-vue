export default {
    dashboards: state => state.dashboards,
    dashboardById: (state) => (id) => {
        return state.dashboards.find(dashboard => dashboard.id === id);
    },
    posts: state => state.dashboards,
    postsByDashboardId: (state) => (dashboardId) => {
        return state.posts.filter(post => post.dashboardId === dashboardId);
    },
    postById: (state) => (id) => {
        return state.posts.find(post => post.id === id);
    },
    test: state => state.test,
    rndmItems: state => state.rndmItems,
    rndmItem: (state) => (id) => {
        return state.rndmItems.find(item => item.id === id);
    },
    rndmTeams: state => state.rndmTeams,
    rndmTeamCount: state => state.rndmTeamCount,
};
