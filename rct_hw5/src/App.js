import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store} from './store/store'
import {ThemeSwither} from './themeSwitch/ThemeSwitcher'
import { toggleTheme } from './store/toggleThemeReducer';

function App() {
  return (
    
    <Provider store={store}>
      
      <ThemeSwither/>
      <div className={1}>
        <p>Some Text Lorem</p>
      </div>
      
      
      
    </Provider>
  );
}

export default App;
