<template>
    <div>
        <h2>Create Post</h2>
        <div class="quill-wrapper">
            <quill-editor v-model="post.content"
                          ref="myQuillEditor"/>
        </div>
        <button class="submit-button" @click="submit(post)">create Post</button>
        <button type="button" @click="() => { this.$router.go(-1) }">go back</button>

    </div>
</template>

<script>
    export default {
        name: "CreatePost",
        data() {
            return {
                post: {title: '', content: [], dashboardId: this.$route.params.id},
            };
        },
        methods: {
            submit(post) {
                if (this.isValid(post)) {
                    fetch('/api/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(this.post),
                    })
                        .then(() => this.$router.go(-1))
                        .catch(function (error) {
                            console.error(error);
                        });
                }
            },
            isValid(comment) {
                return comment.title !== '' && comment.content !== ''
            },
        },
    }
</script>

<style scoped>
    .quill-wrapper {
        width: 60%;
        margin: auto;
    }
</style>
