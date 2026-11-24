import {createRoot} from 'react-dom/client';
import PaginaImpulsao from './PaginaImpulsao.tsx';
import '@fontsource-variable/inter/wght.css';
import './index.css';
import {iniciarBackRedirect} from './utils/backRedirect';

createRoot(document.getElementById('root')!).render(<PaginaImpulsao />);
iniciarBackRedirect();
