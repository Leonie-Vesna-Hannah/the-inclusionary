import React from 'react';
import Select from 'react-select';
import themes from '../themes';
import styles from "./Dropdown.module.css";

const Dropdown = ({ handleChange }) => {
  const options = [];

  Object.keys(themes).forEach((theme) => {
    options.push({
      value: theme,
      label: theme.charAt(0).toUpperCase() + theme.slice(1)
    });
  });

  return (
    <div className={styles.themeDropdown}>
      <span>Color Scheme</span>
     
      <Select
        className={styles.selectFilter}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default Dropdown;