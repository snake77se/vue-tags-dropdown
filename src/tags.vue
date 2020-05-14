<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h2>{{ header }}</h2>
        </div>
      </div>
      <div class="row" v-if="loading">
        <div class="col">
          <span> <i class="fas fa-spinner fa-spin mr-2"></i>Cargando... </span>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col">
          <tags-list :tags="existingTags" @remove-tag="removeTag"></tags-list>
        </div>
        <div class="col-2">
          <tags-dropdown
            :tags="getAvailableTagsList"
            @add-tag="addTag"
          ></tags-dropdown>
        </div>
      </div>
      <tags-notification
        v-if="adding"
        :text="'Agregando etiqueta'"
      ></tags-notification>
      <tags-notification
        v-if="deleting"
        :text="'Eliminando etiqueta'"
      ></tags-notification>
    </div>
  </div>
</template>

<script>
import TagsListVue from "./components/TagsList.vue";
import TagsDropdownVue from "./components/TagsDropdown.vue";
import TagsNotificationVue from "./components/TagsNotification.vue";
import { ApiService, NotificationService } from "./service";

export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
    availableTags: {
      type: String,
      required: true,
      default: [],
    },
    entityId: {
      type: String,
      required: true,
    },
  },
  components: {
    "tags-list": TagsListVue,
    "tags-dropdown": TagsDropdownVue,
    "tags-notification": TagsNotificationVue,
  },
  data() {
    return {
      existingTags: [],
      loading: false,
      adding: false,
      deleting: false,
    };
  },
  created() {
    this.loading = true;
    ApiService.getExitingTagsList(this.baseUrl, this.entityId)
      .then((data) => (this.existingTags = data))
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    getAvailableTagsList() {
      return JSON.parse(this.availableTags);
    },
  },
  methods: {
    addTag(tag) {
      if (
        !this.existingTags.find((t) => {
          return t.id == tag.id;
        })
      ) {
        this.adding = true;
        ApiService.addTag(this.baseUrl, this.entityId, tag.id)
          .then(() => {
            console.info("Tag agregado con éxito");
            this.existingTags.push(tag);
          })
          .finally(() => (this.adding = false));
      } else {
        NotificationService.showAlert("Error!", "Etiqueta ya existe.", "error");
      }
    },
    removeTag(tag) {
      this.deleting = true;
      ApiService.removeTag(this.baseUrl, this.entityId, tag.id)
        .then(() => {
          console.info("Tag eliminado con éxito");
          this.existingTags = this.existingTags.filter((t) => {
            return t.id !== tag.id;
          });
        })
        .finally(() => (this.deleting = false));
    },
  },
};
</script>
