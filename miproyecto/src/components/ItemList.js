import React from 'react'
import Item from './Item'
export default function ItemList({arrayZapatillas}) {
  return (
   <>
    {arrayZapatillas.map( (element, index) => {
      return <Item key={index} productos={element}/>
    } )}
   </>
  )
}
