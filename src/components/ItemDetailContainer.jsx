import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

function ItemDetailContainer(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [random, setRandom] = useState(0)

    useEffect(() => {

        setLoading(true)
        setRandom(Math.floor(Math.random() * 20))

        let promiseItems = new Promise((resolve, reject) => {
                resolve(
                    fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                )
                   
        })

        promiseItems.then(
            (respuesta) => {
                setItems(respuesta)
                setLoading(false)
            }
        )
        
    }, [])
    

    if(loading) {
        return (
            <>
                <div className='detail-container' style={{height: "100vh"}}>
                    <Loader/> 
                </div>   
                
            </>   
        )
                
    }

    return (
        <>
            <div className='detail-container'>
                <ItemDetail data={items[random]}/>
                
            </div>   
        </>           
    )
  
  
}
export default ItemDetailContainer