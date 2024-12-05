import {useState} from 'react';

const useFilters = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');

  const applyFilters = (statusValue: string, speciesValue: string) => {
    setStatusFilter(statusValue);
    setSpeciesFilter(speciesValue);
  };

  const resetFilters = () => {
    setStatusFilter('');
    setSpeciesFilter('');
  };

  return {
    statusFilter,
    speciesFilter,
    applyFilters,
    resetFilters,
  };
};

export default useFilters;
