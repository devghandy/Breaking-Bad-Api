import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItems from './CharacterItems'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner>Loading...</Spinner>
    ) : (
    <section className='cards'>
        {items.map(item => (
            <CharacterItems key={item.char_id} item={item}></CharacterItems>
        ))}
    </section>)
}

export default CharacterGrid