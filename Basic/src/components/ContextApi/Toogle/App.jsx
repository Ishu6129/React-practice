import React,{useEffect,useState} from 'react'
import { ThemeContext, ThemeContextProvider } from './Theme'
import Button from './Button';
import Card from './Card';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  }
  const lightTheme = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Button/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeContextProvider>

  )
}

export default App