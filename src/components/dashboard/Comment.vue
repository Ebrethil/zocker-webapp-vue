<template>
    <div class="comment" >
        <span class="comment-number">Comment: {{ this.index }}</span>
        <span class="comment-content" v-html="this.commentById(this.commentId).content"></span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "DashboardComment",
        props:['commentId', 'index'],
        data() {
            return {
                postId: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters([
                'commentById',
            ]),
        },
        methods: {

        },
    }
</script>

<style scoped>
    .comment {
        margin: 10px 0;
        padding: 30px;
        border: 1px solid mediumseagreen;
        text-align: left;
    }
    .comment-number {
        color: grey;
        font-size: 12px;
        align-content: left;
    }
    .comment-content {
        margin-left: 15px;
    }
</style>
