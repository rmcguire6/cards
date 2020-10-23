import axios from 'axios'

async function sendMatch ({ spanish, english, part, group, english_match, spanish_match }) {
  axios.post('/add_match', {
    spanish: spanish,
    english: english,
    part: part,
    group: group,
    english_match: english_match,
    spanish_match: spanish_match
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

async function deleteMatch (spanish) {
  axios({
    method: 'delete',
    url: '/remove_match',
    data: {
      spanish: spanish
    }
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { deleteMatch, sendMatch }
