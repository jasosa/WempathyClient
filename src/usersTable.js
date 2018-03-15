import React from 'react'
import fetch from 'isomorphic-fetch'
import './index.css'

class UsersTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {users: []}
  }

  render () {
    return (
      <div>
        <table class='mytable'>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {this.state.users.map(user =>
            <tr key={user.id}>
              <td class='mytable'>{user.name}</td>
              <td class='mytable'>{user.email}</td>
            </tr>
          )}
        </table>
      </div>
    )
  }

  componentWillMount () {
    fetch('http://localhost:8080/people')
      .then(results => results.json())
      .then(data => {
        this.setState({users: data})
        console.log(data)
      })
  }
}

export default UsersTable
