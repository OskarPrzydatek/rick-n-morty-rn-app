import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Checkbox} from '@components/ui';
import {styles} from './FiltersDropdown.styled';
import ChevronDownIcon from '@assets/svg/chevron_down.svg';
import ChevronUpIcon from '@assets/svg/chevron_up.svg';

interface FiltersDropdownProps {
  showFilters: boolean;
  applyFilters: (statusValue: string, speciesValue: string) => void;
  resetFilters: () => void;
  closeFilters: () => void;
  onPressFilters: () => void;
}

const FiltersDropdown = ({
  showFilters,
  applyFilters,
  resetFilters,
  closeFilters,
  onPressFilters,
}: FiltersDropdownProps) => {
  const [statusValue, setStatusValue] = useState('');
  const [speciesValue, setSpeciesValue] = useState('');

  const LeftIcon = showFilters ? <ChevronUpIcon /> : <ChevronDownIcon />;

  const onPressApplyFilters = () => {
    applyFilters(statusValue, speciesValue);
    closeFilters();
  };

  const onPressResetFiltrers = () => {
    resetFilters();
    setStatusValue('');
    setSpeciesValue('');
  };

  return (
    <View>
      <Button
        label="FILTER"
        variant="secondary"
        style={styles.filterButton}
        onPress={onPressFilters}
        LeftIcon={LeftIcon}
      />

      {showFilters && (
        <View style={styles.filtersContainer}>
          <View style={styles.filterSection}>
            <Text style={styles.filterStatusLabel}>STATUS</Text>

            <Checkbox
              label="Alive"
              value="alive"
              checked={statusValue === 'alive'}
              onPress={() => setStatusValue('alive')}
            />

            <Checkbox
              label="Dead"
              value="dead"
              checked={statusValue === 'dead'}
              onPress={() => setStatusValue('dead')}
            />

            <Checkbox
              label="Unknown"
              value="unknown"
              checked={statusValue === 'unknown'}
              onPress={() => setStatusValue('unknown')}
            />
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterStatusLabel}>SPECIES</Text>

            <Checkbox
              label="Human"
              value="human"
              checked={speciesValue === 'human'}
              onPress={() => setSpeciesValue('human')}
            />

            <Checkbox
              label="Humanoid"
              value="humanoid"
              checked={speciesValue === 'humanoid'}
              onPress={() => setSpeciesValue('humanoid')}
            />
          </View>

          <View style={styles.filtersActionButtons}>
            <Button
              label="RESET"
              variant="primary"
              style={styles.filterButton}
              onPress={onPressResetFiltrers}
            />

            <Button
              label="APPLY"
              variant="secondary"
              style={styles.filterButton}
              onPress={onPressApplyFilters}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default FiltersDropdown;
