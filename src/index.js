import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";



ReactDOM.render(
<React.StrictMode>
  <App />
  </React.StrictMode> , 
  document.getElementById('root'),);



// const data = paintings[0];
// const painting = paintings[1];



// const elem1 = React.createElement('span', {children: 'Привет'});
// const elem1 = <span>Привет</span>

// const elem2 = React.createElement('span', {children: 'мир'});
// const elem2 = <span>мир</span>

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   // children: [elem1, ' ', elem2],
//   children: 'Привет мир',
// });

//   const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
//   );

// console.log(jsxElement);

// ReactDOM.render(element, document.querySelector('#root'));

// =================================

// const painting = (
// <div>
// <img src={data.url} alt={data.title} width="480" />
// <h2>{data.title}</h2>
// <p>Автор: <a href={data.author.url}></a>{data.author.tag}</p>
// <p>Цена: {data.price} кредитов</p>
// <p>Доступность: заканчивается или есть в наличии</p>
// <button type="button">Добавить в корзину</button>
// </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

// ================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ...html

// <div>
//   <img src="" alt="" width="480" />
//   <h2></h2>
//   <p>Автор: <a href=""></a></p>
//   <p>Цена: кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>

// ...........
