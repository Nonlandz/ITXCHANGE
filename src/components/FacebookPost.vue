<template>
  <div class="container">
    <form class="post-form" @submit.prevent="addPost">
      <h2 class="text-center mb-5">Create a new post</h2>
      <div class="form-group">
        <label for="post-label">ชื่ออุปกรณ์:</label>
        <input type="text" class="form-control" id="post-label" v-model="newPost.label" required>
      </div>
      <div class="form-group mt-5">
        <label for="post-picture">รูปอุปกรณ์:</label>
        <input type="file" class="form-control" id="post-picture" accept="image/*" @change="onPictureSelected">
      </div>
      <div class="form-group mt-5">
        <label for="post-content">รายละเอียดอุปกรณ์:</label>
        <textarea class="form-control" id="post-content" v-model="newPost.content" required></textarea>
      </div>
      <div class="text-center">
        <Button type ="submit" label="Post" icon="pi pi-check" class="p-button mt-2"  />
      </div>
    </form>
    <div class="post-list">
      <div v-for="(post, index) in posts" :key="index" class="post card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2 text-center justify">
              <div class="post-picture">
                <img :src="post.pictureUrl" class="img-fluid" alt="Post picture">
                        <button class="btn btn-link" @click="toggleFavorite(post)">
              <i class="pi pi-star">{{ post.favorite ? '' : '' }}</i>
            </button>
             
              </div>

              <div class="comment-section">
                <ul>
                  <li v-for="(comment, index) in post.comments" :key="index">
                    {{ comment }}
                  </li>
                </ul>
                <form class="comment-form" @submit.prevent="addComment(post)">
                  <div class="form-group">
                    <label for="comment-content">Add a comment:</label>
                    <textarea class="form-control" id="comment-content" v-model="newComment" required></textarea>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary">Comment</button>
                    
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-10">
              <h5 class="card-title">  ชื่ออุปกรณ์:  {{ post.label }}</h5>
              <p class="card-text">รายละเอียดอุปกรณ์: {{ post.content }}</p>
              <button class="btn btn-danger " @click="deletePost(index)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newPost: {
        label: '',
        picture: null,
        content: '',
      },
      posts: [],
      newComment: '',
    };
  },
  mounted() {
    // Retrieve posts from local storage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    this.posts = savedPosts;
  },
  methods: {
    toggleFavorite(post) {
    post.favorite = !post.favorite;
  },

    addPost() {
      if (this.newPost.label && this.newPost.content) {
        // Create a new post object with a unique ID
        const newPost = {
          id: Date.now(),
          label: this.newPost.label,
          pictureUrl: '',
          content: this.newPost.content,
          comments: [],
        };

        // If a picture was selected, read it as a data URL and set it as the post's picture URL
        if (this.newPost.picture) {
          const reader = new FileReader();
          reader.onload = (event) => {
            newPost.pictureUrl = event.target.result;
            this.posts.unshift(newPost);
            localStorage.setItem('posts', JSON.stringify(this.posts));
            this.newPost.label = '';
            this.newPost.picture = null;
            this.newPost.content = '';
          };
          reader.readAsDataURL(this.newPost.picture);
        } else {
          this.posts.unshift(newPost);
          localStorage.setItem('posts', JSON.stringify(this.posts));
          this.newPost.label = '';
          this.newPost.picture = null;
          this.newPost.content = '';
        }

        
      }

      
    },
    deletePost(index) {
    this.posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  },

    onPictureSelected(event) {
      this.newPost.picture = event.target.files[0];
    },
    addComment(post) {
      if (this.newComment.trim()) {
        const comment = {
          // id: Date.now(),
          User: this.newComment.trim(),
        };
        post.comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        this.newComment = '';
      }
    },
  },
};
</script>

<style scoped>
.post-form {
  max-width: 600px;
  margin: 0 auto;
}

.post-form label {
  font-weight: bold;
}

.post-form textarea {
  height: 150px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  margin-top: 5px;
}

.btn-primary:hover {
  background-color: #0062cc;
  border-color: #005cbf;
}

.post {
  border: 1px solid #dee2e6;
  border-radius: .25rem;
}

.post .card-body {
  padding: 20px;
}

.post .card-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.post .card-text {
  font-size: 18px;
  margin-bottom: 20px;
}

.custom-file-input::-webkit-file-upload-button {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.custom-file-input::before {
  border-color: #007bff;
}

.custom-file-label {
  color: #495057;
}


</style>
