
const API_BASE_URL = "http://localhost:3000/api";

export const getCryptoData = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/balance`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error en el servidor");
    return null;
  }
};

