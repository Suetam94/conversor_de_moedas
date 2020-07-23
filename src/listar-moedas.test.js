import React from "react";
import ReactDOM from 'react-dom';
import ListarMoedas from './conversor-moedas';

it('Teste do componente de listagem de moedas', () => {
   const div = document.createElement('div');
   ReactDOM.render(<ListarMoedas />, div);
   ReactDOM.unmountComponentAtNode(div);
});