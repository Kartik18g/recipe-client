import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter basename={'https://shapeai.github.io/recipe-client'}>
        <App />
    </BrowserRouter>

    , document.getElementById('root'))
