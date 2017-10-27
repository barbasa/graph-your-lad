const axios = require('axios')

const resolvers = {
    Query: {
        allProducts: () =>  axios.get('http://api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible').then((res) => res.data['summaries']),
        productDetails: (obj, args) =>  axios.get('http://api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible&pids=' + args.pid.toString()).then((res) => res.data['summaries'][0])
    }
}

module.exports = resolvers
