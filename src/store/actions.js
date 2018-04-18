export default {
    fetchDashboards({ commit }) {
        fetch('/api/dashboards', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response =>response.json())
            .then((data) => {
                if (data) {
                    commit('dashboards', data)
                }

            })
            .catch(function (error) {
                console.error(error);
            });
    },
    fetchCurrentDashboard({ commit }, dashboardId) {
        fetch('/api/dashboard/' + dashboardId, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response =>response.json())
            .then((data) => {
                if (data) {
                    commit('currentDashboard', data)
                }

            })
            .catch(function (error) {
                console.error(error);
            });
    },
    fetchPosts({ commit }) {
        fetch('/api/posts', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response =>response.json())
            .then((data) => {
                if (data) {
                    commit('posts', data)
                }

            })
            .catch(function (error) {
                console.error(error);
            });
    },
    fetchCurrentPost({ commit }, postId) {
        fetch('/api/posts/' + postId, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response =>response.json())
            .then((data) => {
                if (data) {
                    commit('currentPost', data)
                }

            })
            .catch(function (error) {
                console.error(error);
            });
    },
    fetchComments({ commit }, postId) {
        fetch('/api/comments?postId=' + postId, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response =>response.json())
            .then((data) => {
                if (data) {
                    commit('comments', data)
                }

            })
            .catch(function (error) {
                console.error(error);
            });
    },
};
