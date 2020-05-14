import axios from "axios";
import { NotificationService } from "./notification.service";

export const ApiService = {
  // getAvailbleTags: (tagType) => {
  //   const typeString = tagType == "company" ? "empresa" : "solicitud";
  //   return axios
  //     .get(`/api/1/tags/${tagType}`)
  //     .then((response) => response.data)
  //     .catch((err) => {
  //       console.error(err);
  //       NotificationService.showAlert(
  //         "Error!",
  //         `No se pudo obtener las etiquetas disponibles de la ${typeString}`,
  //         "error"
  //       );
  //     });
  // },
  getExitingTagsList: (baseUrl, entityId) => {
    const url = `${baseUrl}${entityId}/tags`;

    return axios
      .get(url)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        NotificationService.showAlert(
          "Error!",
          "No se pudo obtener las etiquetas.",
          "error"
        );
        return [];
      });
  },
  addTag: (baseUrl, entityId, tagId) => {
    const url = `${baseUrl}${entityId}/tags/${tagId}`;
    return axios.post(url).catch((err) => {
      console.error(err);
      NotificationService.showAlert(
        "Error!",
        `No se pudo agregar la etiqueta`,
        "error"
      );
    });
  },
  removeTag: (baseUrl, entityId, tagId) => {
    const url = `${baseUrl}${entityId}/tags/${tagId}`;
    return axios.delete(url).catch((err) => {
      console.error(err);
      NotificationService.showAlert(
        "Error!",
        `No se pudo eliminar la etiqueta`,
        "error"
      );
    });
  },
};
