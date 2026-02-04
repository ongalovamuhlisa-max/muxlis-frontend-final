const API_URL = https://muhlisa-frontend.onrender.com
export const getTests = async () => {
  const response = await fetch(`${API_URL}/tests`);
  return response.json();
};