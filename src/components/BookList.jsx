import React, { useContext } from 'react'
import BookContext from '../contexts/BookContext'

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => <BookDetails book={book} key={book.id} />)}
      </ul>
    </div>
  ) : (
    <div className="empty">There are no books in your list. Time to find a new one!</div>
  )
}

export default BookList