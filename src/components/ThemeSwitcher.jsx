import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect} from 'react';

const ThemeSwitcher = () => {
  
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('react-todo.theme', defaultDark ? "dark" : "light" )

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
      }, [theme])

      return (
                <div >
                <button
                  className='btn'
                  aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                  role="switch"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  aria-checked
                  >
                  {theme === "dark" ? <h5><i class="bi bi-brightness-high text-success">  Light Mode</i></h5> : <h5><i class="bi bi-moon text-info"> Dark Mode</i></h5>}
                </button>
              </div>
            
          )}

export default ThemeSwitcher