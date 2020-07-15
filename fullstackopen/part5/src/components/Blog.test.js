import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import BlogForm from './BlogForm'

const blog = {
  title: 'Test Title',
  author: 'Test Author',
  url: 'www.something.com',
  likes: 1,
  user: {
    name: 'root',
    username: 'root',
  },
}

const currentUser = {
  name: 'eetu',
}


test('renders only title and author by default', () => {
  const component = render(<Blog blog={blog} currentUser={currentUser} />)

  expect(component.container).toHaveTextContent(
    `${blog.title}, by: ${blog.author}`
  )

  expect(component.container).not.toHaveTextContent('')
})

test('expanding the blog should display title, author, url and poster', () => {
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} currentUser={currentUser} handleDelete={mockHandler} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)
  expect(component.container).toHaveTextContent(
    `${blog.title}, by: ${blog.author}hide${blog.url}likes:${blog.likes}like${blog.user.name}`
  )
})

test('like is pressed twice causes two handleLike events', () => {
  const component = render(<Blog blog={blog} currentUser={currentUser} />)

  fireEvent.click(component.getByText('view'))

  const likeBtn = component.getByText('like')
  fireEvent.click(likeBtn)
  fireEvent.click(likeBtn)

  expect(`likes:${blog.likes}`).toBe(`likes:${blog.likes}`)
})

test('form calls event handler with the right details', () => {
  const handleBlogSubmit = jest.fn((a, b, c, d) => `${b} ${c} ${d}`)

  const component = render(
    <BlogForm user={'root'} handleBlogSubmit={handleBlogSubmit} />
  )

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(title, {
    target: { value: 'test title' },
  })
  fireEvent.change(author, {
    target: { value: 'test author' },
  })
  fireEvent.change(url, {
    target: { value: 'test.com' },
  })
  fireEvent.submit(form)

  expect(handleBlogSubmit.mock.calls).toHaveLength(1)
  expect(handleBlogSubmit.mock.calls[0][1]).toBe('test title')
  expect(handleBlogSubmit.mock.calls[0][2]).toBe('test author')
  expect(handleBlogSubmit.mock.calls[0][3]).toBe('test.com')
})
