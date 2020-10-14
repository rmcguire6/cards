import shuffle from 'shuffle-array'

const createRandomList = (list) => {
  let randomList = list.slice()
  randomList = shuffle(randomList)
  return randomList
}
export { createRandomList as default }
