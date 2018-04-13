export default {
    // posts ({ commit }, dashboardId) {
    //     fetch('/api/posts/' + dashboardId, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ dashboardId: dashboardId }),
    //     })
    //     .then(function (response) {
    //         if(response.data) {
    //             commit('posts', response.data)
    //         }
    //     })
    //     .catch(function (error) {
    //         console.error(error);
    //     });
    // },

    fetchDashboards ({ commit }) {
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
    fetchPost ({ commit }, postId) {
        fetch('/api/posts?postId=' + postId, {
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

    // dashboard ({ commit }, dashboardId) {
    //     fetch('/api/fetchDashboards/' + dashboardId, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ dashboardId: dashboardId }),
    //     })
    //         .then(function (response) {
    //             if(response.data) {
    //                 commit('dashboard', response.data)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // },
};
