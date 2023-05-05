import { useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import useBreedList from './useBreedList'
import Results from './Results'
import fetchSearch from './fetchSearch'
import AdoptedPetContext from './AdoptedPetContext'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: ''
  })

  const submitFormAction = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = {
      animal: formData.get('animal') ?? '',
      location: formData.get('location') ?? '',
      breed: formData.get('breed') ?? ''
    }

    setRequestParams(obj)
  }

  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []
  const [adoptedPet] = useContext(AdoptedPetContext)

  return (
    <div className='mx-auto my-0 w-11/12'>
      <form
        className='mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg'
        onSubmit={submitFormAction}
      >
        {adoptedPet ? (
          <div className='pet image-container'>
            <img src={adoptedPet.images[0]} alt={adoptedPet.animal} />
          </div>
        ) : null}
        <label htmlFor='location'>
          Location
          <input
            className='search-input'
            type='text'
            id='location'
            name='location'
            placeholder='Location'
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            className='search-input'
            id='animal'
            value={animal}
            onChange={e => {
              setAnimal(e.target.value)
            }}
          >
            {ANIMALS.map(animal => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            className='search-input grayed-out-disabled'
            id='breed'
            name='breed'
            disabled={breeds.length === 0}
          >
            {breeds.map(breed => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className='rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50'>
          Submit
        </button>
      </form>
      <Results pets={pets} />.
    </div>
  )
}

export default SearchParams
