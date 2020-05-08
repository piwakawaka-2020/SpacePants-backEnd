function randNum(max, min) {
  return Math.floor(min + Math.random() * (max - min))
}

function getRoles(numUsers) {
  const roles = new Array(numUsers).fill('Human')

  roles[randNum(0, numUsers)] = 'Alien'

  return roles
}

module.exports = {
  getRoles,
  randNum
}
