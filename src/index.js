import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import MainBoard from './componetns/mainBoard';


const board = ReactDOM.createRoot(document.getElementById("board"));
board.render(<MainBoard />)
