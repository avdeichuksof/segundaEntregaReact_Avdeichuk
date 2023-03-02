import './itemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const items = require('../../productos.json');

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout( () => {
                resolve(items);
            }, 1000);
        });

        if(id){
            getData.then(res => setData(res.filter(item => item.category === id)));
        }
        else{
            getData.then(res => setData(res));
        }

    }, [id]);

    return(
        <div>
            <ItemList data={data}/>
        </div>
    );
};

export default ItemListContainer