const user = {
  name: 'root',
  username: 'root',
  password: 'secret',
}

const blog = {
  title: 'a blog created by cypress',
  author: 'Cypress',
  url: 'https://www.cypress.io/',
}

describe('Blog app', () => {
  Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/v1/login',
      body: user,
    }).then((resp) => {
      window.localStorage.setItem('token', resp.body.token)
    })
  })

  beforeEach(function () {
    cy.login()
  })

  it('front page can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Login in to application')
  })

  it('fails with wrong credentials', function () {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.contains('login').click()
    cy.get('#username').type('wrong')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()
    cy.contains('invalid username or password')
    cy.get('html').should('not.contain', 'logged in')
  })

  it('user can login', function () {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.contains('login').click()
    cy.get('#username').type(`${user.username}`)
    cy.get('#password').type(`${user.password}`)
    cy.get('#login-button').click()
    cy.contains(`${user.name} logged in`)
  })

  it('a new blog can be created', function () {
    cy.contains('create new blog').click()
    cy.get('#title').type(`${blog.title}`)
    cy.get('#author').type(`${blog.author}`)
    cy.get('#url').type(`${blog.url}`)
    cy.get('#submit').click()
    cy.contains(`${blog.title}`)
  })

  it('user can like a blog', function () {
    cy.get('#view').click()
    cy.contains('like').click()
    cy.contains(1032)
  })

  it('an owned blog can be deleted', function () {
    cy.contains(blog.title).contains('view').click()
    cy.contains(blog.title).parent().find('button').contains('delete').click()
    cy.get('html').should('not.contain', `${blog.title}`)
  })

  it('blogs are arranged by likes', function () {
    cy.get('#view').click()

    cy.get('.viewBtn').then((buttons) => {
      for (let i = 0; i < buttons.length; i++) {
        cy.wrap(buttons[i]).click()
      }
    })

    cy.get('.likes').then((blogs) => {
      cy.wrap(blogs[0]).contains('likes:1032')
      cy.wrap(blogs[1]).contains('likes:7')
      cy.wrap(blogs[2]).contains('likes:5')
    })
  })
})
