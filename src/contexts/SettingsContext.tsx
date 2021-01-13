import React, { createContext, useCallback, useState } from 'react';

interface SettingsDataInterface {
  navbar: string;
}

interface SettingsProps {
  data: SettingsDataInterface;
  toggleNavbar(): void;
}

const SettingsContext = createContext<SettingsProps>({} as SettingsProps);

const SettingsProvider: React.FC = ({ children }) => {
  const [data, SetData] = useState<SettingsDataInterface>(() => {
    const navbar =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem('@code:layout')
        : null;

    if (navbar) {
      return JSON.parse(navbar);
    }

    return {
      navbar: 'showLabels',
    };
  });

  const toggleNavbar = useCallback(() => {
    const newValue = data.navbar === 'showLabels' ? 'hideLabels' : 'showLabels';

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        '@code:layout',
        JSON.stringify({ navbar: newValue }),
      );
    }

    SetData({ navbar: newValue });
  }, [data]);

  return (
    <SettingsContext.Provider value={{ data, toggleNavbar }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
