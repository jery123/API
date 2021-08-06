import http from "../http-common";

class FarmerDataService {
  getAll() {
    return http.get("/farmers");
  }

  get(id) {
    return http.get(`/farmers/${id}`);
  }

  create(data) {
    return http.post("/farmers", data);
  }

  update(id, data) {
    return http.put(`/farmers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/farmers/${id}`);
  }

  deleteAll() {
    return http.delete(`/farmers`);
  }

  findByTitle(title) {
    return http.get(`/farmers?title=${title}`);
  }
}

export default new FarmerDataService();