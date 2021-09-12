import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import bbqsApi from './api/bbqs';

function App() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await bbqsApi.getAll();
                console.log(response);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }

        fetchProductList();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
