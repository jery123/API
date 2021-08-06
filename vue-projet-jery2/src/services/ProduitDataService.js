import http from "../http-common";

class ProduitDataService {
  getAll() {
    return http.get("/produits");
  }

  get(id) {
    return http.get(`/produits/${id}`);
  }

  create(data) {
    return http.post("/produits", data);
  }

  update(id, data) {
    return http.put(`/produits/${id}`, data);
  }

  delete(id) {
    return http.delete(`/produits/${id}`);
  }

  deleteAll() {
    return http.delete(`/produits`);
  }

  findByNom(nom) {
    return http.get(`/produits?nom=${nom}`);
  }
  findAllPublished() {
    return http.get(`/produits?published=0`);
  }
}

export default new ProduitDataService();