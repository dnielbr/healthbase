import api from "./api";
import { ENDPOINTS } from "./endpoints";

export const ImcService = {
  calcular: async (altura, peso) => {
    const response = await api.post(`${ENDPOINTS.IMC}/calcular`, {
      altura,
      peso,
    });
    return response.data;
  },
};
