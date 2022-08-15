import { ReadTxt } from '../ReadTxt/ReadTxt';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1>Gráfico DQB</h1>
      <ReadTxt />
    </header>
  );
};
