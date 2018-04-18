export default {
    dashboards(state, dashboards) {
        state.dashboards = dashboards;
    },
    currentDashboard(state, dashboard) {
        state.currentDashboard = dashboard;
    },
    posts(state, posts) {
        state.posts = posts;
    },
    currentPost(state, post) {
        state.currentPost = post;
    },
    comments(state, comments) {
        state.comments = comments;
    },
};
