import { createContext } from 'react';

interface ColorContextSchema {
  toggleColorMode: () => void;
}

const ColorContext = createContext<ColorContextSchema>(
  {} as ColorContextSchema,
);

export default ColorContext;
