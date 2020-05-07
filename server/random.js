function randNum(max) {
  return Math.ceil(Math.random() * max) - 1
}

function getRoles(numUsers) {
  const roles = new Array(numUsers).fill('Human')

  roles[randNum(numUsers)] = 'Alien'

  return roles
}

module.exports = {
  getRoles,
  randNum
}
