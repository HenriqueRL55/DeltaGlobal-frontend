import { useState } from 'react';
import { getAddressByCep } from '../services/cepService';

const useAddressByCep = () => {
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAddress = async (cep) => {
    setLoading(true);
    setError('');
    try {
      const data = await getAddressByCep(cep);
      setAddress(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { address, fetchAddress, loading, error };
};

export default useAddressByCep;
