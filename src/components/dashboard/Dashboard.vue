<template>
    <div>
        <h2>Dashboard Component</h2>
        <h3>{{ this.dashboardById(dashboardId).title }}</h3>
        <table class="posts">
            <tr>
                <th class="post-prop">Title</th>
                <th class="post-prop">Content</th>
            </tr>
            <tr v-for="post in posts" class="post" @click="openPost(post.id)">
                <td class="post-title post-prop">{{ post.title }}</td>
                <td class="post-descr post-prop">{{ post.content.substr(0, 70) }} ...</td>
            </tr>
            <tr @click="createPost()" class="post">
                <td class="post-prop">+</td>
                <td class="post-prop">Create Post</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        name: "Dashboard",
        data() {
            return {
                dashboardId: this.$route.params.id,
                posts: [{ title: '', content: '' }],
            };
        },
        computed: {
            ...mapGetters([
                'dashboardById',
            ]),
        },
        methods: {
            ...mapActions([
                'fetchDashboards'
            ]),
            openPost(id) {
                this.$router.push('/posts/' + id)
            },
            createPost() {
                this.$router.push('/create-post/' + this.dashboardId);
            },
        },
        beforeMount() {
            this.fetchDashboards();

            fetch('/api/posts/?dashboardId=' + this.dashboardId, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(response =>response.json())
                .then((data) => {
                    if (data) {
                        this.posts = data;
                    }

                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }
</script>

<style scoped>
    .posts {
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: solid 1px mediumseagreen;
        border-spacing:0;
    }

    .post-title, .post-descr {
        text-align: left;
        border-spacing:0;
    }

    .post, .post-prop {
        padding: 10px 16px;
        border-bottom: 1px solid mediumseagreen;
        border-spacing:0;
    }

    .post-prop {
        margin-bottom: 15px;
    }

    .post {
    }

    .post:hover .post-prop {
        cursor: pointer;
        margin: 15px;
        background-color: #f2f2f2;
    }


</style>
