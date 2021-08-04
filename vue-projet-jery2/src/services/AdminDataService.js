import http from "../http-common";

class AdminDataService {
  getAll() {
    return http.get("/admins");
  }

  get(id) {
    return http.get(`/admins/${id}`);
  }

  create(data) {
    return http.post("/admins", data);
  }

  update(id, data) {
    return http.put(`/admins/${id}`, data);
  }

  delete(id) {
    return http.delete(`/admins/${id}`);
  }

  deleteAll() {
    return http.delete(`/admins`);
  }

  findByTitle(title) {
    return http.get(`/admins?title=${title}`);
  }
}

export default new AdminDataService();