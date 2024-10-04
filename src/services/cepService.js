// HTTP Client ( Axios Lib )
import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws'; 
export const getAddressByCep = async (cep) => {
  try {
    const response = await axios.get(`${API_URL}/${cep}/json/`);
    if (response.data.erro) {
      throw new Error('CEP não encontrado');
    }
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar CEP');
  }
};
