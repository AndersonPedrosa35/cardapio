import React from 'react'
import { alimentoItemProps } from '@/lib/menu'
// import Image from 'next/image'

export default function Item({ title, ingredients = '', price, image = '' }: alimentoItemProps) {
  return (
    <div className='imageItemContainer'>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} width={200} height={200} />
      ): <div />}
      <div className='containerBuy'>
        <div className='textItemContainer'>
          <h2>{title}</h2>
          { ingredients ? <p>{ingredients}</p> : <div /> }
        </div>
        <h3>{`$${price}`}</h3>
      </div>
    </div>
  )
}
