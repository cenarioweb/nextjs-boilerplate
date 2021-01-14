import React, { createContext, useCallback, useEffect, useState } from 'react';

interface SettingsProps {
  navbar: string;
  toggleNavbar(): void;
}

const SettingsContext = createContext<SettingsProps>({} as SettingsProps);

const SettingsProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState('default');

  useEffect(() => {
    const navbar = localStorage.getItem('@code:navbar');

    if (navbar) {
      setValue(navbar);
    }
  }, [setValue]);

  const toggleNavbar = useCallback(() => {
    const newValue = value === 'default' ? 'minified' : 'default';

    try {
      localStorage.setItem('@code:navbar', newValue);

      setValue(newValue);
      return null;
    } catch (err) {
      return null;
    }
  }, [value]);

  return (
    <SettingsContext.Provider value={{ navbar: value, toggleNavbar }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
