const axios = require('axios')

const resolvers = {
    Query: {
        products: () =>  axios.get('http://api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible').then((res) => res.data['summaries'])
    }
}


module.exports = resolvers
