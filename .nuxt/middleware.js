const middleware = {}

middleware['authenticated'] = require('../src/middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

export default middleware
