export default {
    dashboards: state => state.dashboards,
    dashboardById: (state) => (id) => {return state.dashboards.find(dashboard => dashboard.id === id)},
    currentDashboard: state => state.currentDashboard,
    posts: state => state.posts,
    currentPost: state => state.currentPost,
    comments: state => state.comments,
    commentById: (state) => (id) => {return state.comments.find(comment => comment.id === id)},
    test: state => state.test,
};
