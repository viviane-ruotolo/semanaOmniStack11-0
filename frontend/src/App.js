import React from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

/* 
* COMPONENTE DO REACT: É uma função que retorna HTML - Todos os arquivos .js de componentes 
iniciam com letra maiúscula

* JSX: HTML está integrado dentro do JavaScript

* LiveReload: atualização do navegador sem precisar atualizar a página logo depois de realizar alguma alteração

* Propriedades: São como atributos de tags HTML, entretando são passados para tegs de componentes dos React

* Estado: É uma informação que vai ser mantida pelo componente
Toda vez que é ncessário alterar uma variável e alterar o valo dela no HTML, é utilizado o estado
Para isso: é necessário importar o React de forma diferente: 
Ex: import React, {useState} from 'react';

* Imutabilidade: Por uma questão de performance do React, não pe possível alterar o valor do estado
de forma direta
Ex: O useState(valor_inicial) retorna um array [valor, função_que_altera_valor]
*/