<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Edit Profile</h1>
    <div class="d-flex justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="updateProfile">
          <div class="mb-3">
            <label for="profile-image" class="form-label">Select Profile Image:</label>
            <input type="file" class="form-control" id="profile-image" @change="onFileChange" />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary" :disabled="!selectedImage">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "Profile",
  data() {
  return {
    selectedImage: null,
  };
},
methods: {
  onFileChange(event) {
    this.selectedImage = event.target.files[0];
  },
  async updateProfile() {
    if (this.selectedImage) {
      const imageDataUrl = await this.readFileAsDataURL(this.selectedImage);
      localStorage.setItem("profileImage", imageDataUrl);
      this.$router.push("/home");
    }
  },
  readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  },
},
};
</script>
