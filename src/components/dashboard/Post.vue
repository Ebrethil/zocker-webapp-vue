<template>
    <div class="post">
        <h2 class="headline">{{ this.currentPost.title }}</h2>
        <div v-html="this.currentPost.content"></div>
        <div>
            <create-comment class="comment-editor"/>
            <div class="comments">
                <dashboard-comment v-for="(comment, index) in this.comments"
                                   v-bind:key="'comment' + comment.id"
                                   :comment-id="comment.id"
                                   :index="index + 1"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    import CreateComment from './CreateComment.vue';
    import DashboardComment from './Comment.vue'

    export default {
        name: "Post",
        components: {DashboardComment, CreateComment},
        data() {
            return {
                postId: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters([
                'currentPost',
                'comments'
            ]),
        },
        methods: {
            ...mapActions([
                'fetchCurrentPost',
                'fetchComments'
            ]),
        },
        beforeMount() {
            this.fetchCurrentPost(this.postId);
            this.fetchComments(this.postId);
        },
        comments: {
            CreateComment,
            DashboardComment,
        }
    }
</script>

<style scoped>
    .post{
        width: 60%;
        margin: auto;
    }
    .comments {
        width: 50%;
        margin:  50px auto;
    }
    .comment-editor {
        margin: 30px 0;
    }
</style>
