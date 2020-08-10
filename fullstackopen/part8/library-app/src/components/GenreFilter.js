import React from 'react'

const GenreFilter = ({ genres, filterByGenre, clear }) => {
  return (
    <div>
      {genres.map((genre) => (
        <button
          onClick={() => {
            filterByGenre(genre)
          }}
          key={genre}
        >
          {genre}
        </button>
      ))}
      <button
        onClick={() => {
          clear()
        }}
      >
        clear
      </button>
    </div>
  )
}

export default GenreFilter
