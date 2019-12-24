
const assert = require('assert')
const app = require("./../server")
const supertest = require('supertest')
const request = supertest(app)
const user = require("./../router/model/schema")


//only  mongodb test 


describe('Get todo', () => {
  it('Returns all users', (done) => {
    request.get('/user/get')
      .expect(200).then(res => {
        done()
      })

  })
  it('pagenot found', (done) => {
    request.get('/user/ge')
      .expect(404).then(res => {
        assert.ok(res.body)
        done()
      })
  })
});



describe('Save Todo', () => {
  it('Save to all users', (done) => {
    request.post('/user/SaveTodo').send({ name: "Jobtitle", email: "To do something in life", phonenumber: 132, age: 23, id: 1 })
      .expect(200).then(res => {
        done()
      })
  })
  it('Path Error', (done) => {
    request.post('/user/SaveTod').send({ name: "Job title", email: "To do something in life", phonenumber: 132, age: 23, id: 1 })
      .expect(404).then(res => {
        done()
      })
  })
})




describe('Delete Todo', () => {
  it('Delete tod from all users', (done) => {
    request.delete('/user/DeleteTodo').send({ _id: "5e01802a2d0ad91310f704e4" })
      .expect(200).then(res => {
        done()
      })
  })
  it('Path Error', (done) => {
    request.delete('/user/DeleteTod').send({ _id: "5e01802a2d0ad91310f704e4" })
      .expect(404).then(res => {
        done()
      })
  })
})




describe('update Todo', () => {
  it('update tod0 from all users', (done) => {
    request.put('/user/UpdateTodo/:id').send({
      name: "kamaldkf",
      email: "teerath@gmail.com",
      phonenumber: 08927998734,
      age: 12,
      _id: '5dd2503455c93c076c590f8f'
    })
      .expect(200).then(res => {
        done()
      })
  })
  it('Path Error', (done) => {
    request.delete('/user/UpdateTodo:').send({ _id: "5e01802a2d0ad91310f704e4" })
      .expect(404).then(res => {
        done()
      })
  })
})



// mogodb with graphql testing




describe('Get todo by graphql', () => {
  it('Returns all users by graphql', (done) => {
    request.get('/user/graphqlget')
      .expect(200).then(res => {
        done()
      })
  })
  it('pagenot found', (done) => {
    request.get('/user/graphqlge')
      .expect(404).then(res => {
        assert.ok(res.body)
        done()
      })
  })
});



describe('Get one todo', () => {
  it('Returns one user', (done) => {
    request.get('/user/get/:id')
      .expect(200).then(res => {
        done()
      })

  })
  it('pagenot found', (done) => {
    request.get('/user/ge/:id')
      .expect(404).then(res => {
        assert.ok(res.body)
        done()
      })
  })
});