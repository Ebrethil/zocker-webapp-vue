<template>
    <div>
        <quill-editor v-model="comment.content"
                      ref="myQuillEditor"
                      :options="options"
                      class="editor"
                      @focus="toggleIsActive"
                      @blur="toggleIsActive"
                      :class="{ active: isActive }"
        />
        <button class="submit-button" @click="submit(comment)">create Comment</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "CreateComment",
        data() {
            return {
                isActive: false,
                comment: {content: '', postId: this.$route.params.id},
                options: {
                    placeholder: 'Create a comment..',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['link', 'image'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'size': ['small', false, 'large', ] }],
                        ]
                    },
                    readOnly: false,
                    theme: 'bubble'
                }
            };
        },
        methods: {
            ...mapActions([
                'fetchComments'
            ]),
            toggleIsActive() {
                this.isActive = !this.isActive;
            },
            submit(comment) {
                if (this.isValid(comment)) {
                    fetch('/api/comments', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(comment),
                    })
                    .then((data) => {
                        this.fetchComments(this.$route.params.id )

                    })
                    .catch(function (error) {
                        console.error(error);
                    });
                }
            },
            isValid(comment) {
                return comment.content !== '';
            },
        },
    }

</script>

<style scoped>
    .editor {
        width: 40%;
        margin: auto;
        padding: 16px;
        border: 1px solid silver;
    }
    .active {
        border: 1px solid mediumseagreen;
    }
    .submit-button {
        border: 1px solid mediumseagreen;
        padding: 6px;
    }
    .submit-button:hover {
        outline: 1px solid mediumseagreen;
    }
</style>
