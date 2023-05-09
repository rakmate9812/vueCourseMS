<template>
  <base-card>
    <error-alert v-if="dataIsInvalid">
      <h2>Input is invalid</h2>
      <p>{{ errorMessage }}</p>
      <base-button @click="confirmError">OK</base-button>
    </error-alert>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="enteredTitle" id="title" type="text" name="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          v-model="enteredDescription"
          id="description"
          name="description"
          rows="3" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input v-model="enteredLink" id="link" type="url" name="link" />
      </div>
      <div>
        <base-button type="submit">Add New Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
// creating a resource class for each new object
class Resource {
  constructor(title, description, link) {
    this.id = new Date().toISOString();
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

export default {
  inject: ["addNewResource"],

  data() {
    return {
      dataIsInvalid: false,
      id: "",
      enteredTitle: "",
      enteredDescription: "",
      enteredLink: "",
      errorMessage: "",
    };
  },

  methods: {
    submitData() {
      const newResource = new Resource(
        this.enteredTitle,
        this.enteredDescription,
        this.enteredLink
      );

      if (!this.checkForError()) {
        // the new resource (which we created from the user inputs above) can be passed to the addNewResource method - which is coming through provide-inject from the TheResources parent component
        this.addNewResource(newResource);
        this.resetForm();
      }
    },

    checkForError() {
      if (this.enteredTitle.trim() === "") {
        this.errorMessage = "No title has entered";
        this.dataIsInvalid = true;
        return true;
      }

      if (this.enteredDescription.trim() === "") {
        this.errorMessage = "No Description has entered";
        this.dataIsInvalid = true;
        return true;
      }

      if (this.enteredLink.trim() === "") {
        this.errorMessage = "No link has entered";
        this.dataIsInvalid = true;
        return true;
      }
      return false;
    },

    confirmError() {
      this.dataIsInvalid = false;
    },

    resetForm() {
      this.dataIsInvalid = false;
      this.id = "";
      this.enteredTitle = "";
      this.enteredDescription = "";
      this.enteredLink = "";
      this.errorMessage = "";
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
