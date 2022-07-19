import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


function ItemListContainer(props) {
    // let itemsDatabase = []
    const [items, setItems] = useState([]);
   

    useEffect(
        () => {
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
    
                    fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    // .then(json => itemsDatabase = [...json])

                )
                   
            }, 1000);
        })

        promiseItems.then(
            (respuesta) => {
                setItems(respuesta)
            }
        )
    
    
    
    }, [])
    

    // Function to collect data
  return (
    <>

    <div className='greeting'>{props.greeting}</div>
    <div className='cards-container'>
        <ItemList data={items}/>
    </div>
    
    </>
    
  )
}

export default ItemListContainer