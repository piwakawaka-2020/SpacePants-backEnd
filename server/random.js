function randNum(max) {
  return Math.ceil(Math.random() * max) - 1
}

function giveRoles(users) {
  const numUsers = users.length
  const roles = new Array(numUsers).fill('Human')

  roles[randNum(numUsers)] = 'Alien'

  users.forEach((user, i) => {
    user.role = roles[i]
  })

  return users
}

module.exports = {
  giveRoles
}
