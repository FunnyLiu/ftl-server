var path_join = require('path').join;

exports = module.exports = {
    public: path_join(__dirname, '..', 'public'),
    port: '80',
    ftl: {
        base: path_join(__dirname, '..', 'ftl'),
        global: {
            'global': 'cjm'
        },
        'test1.ftl': function(req, res) {
            return {
                'test1': 'test1'
            }
        },
        'test2.ftl': {
            test2: 'test2'
        }
    },
    mock: [{
            url: '/mock/json',
            method: 'get',
            status: '200',
            header: {

            },
            response: {
                a: 1,
                b: 5
            }
        }, {
            url: '/mock/function',
            method: 'post',
            response: function(req, res) {
                return {
                    'response': 'function'
                }
            }

        }, {
            url: '/mock/send',
            method: 'post',
            response: function(req, res) {
                res.send({
                    'response': 'send'
                });
            }
        }, {
            url: '/mock/jsonp',
            method: 'get',
            jsonp: 'jsonpCallback',
            response: function(req, res) {
                return {
                    'response': 'jsonp'
                };
            }
        }, {
            url: '/mock/delay',
            method: 'get',
            delay: 1000,
            response: function(req, res) {
                return {
                    'response': 'delay'
                }
            }
        }, {
            url: '/mock/jsonp/delay',
            method: 'get',
            jsonp: true,
            delay: 1000,
            response: function(req, res) {
                return {
                    'response': 'jsonp'
                };
            }
        }

    ]
}

exports.proxy = [];
exports.proxy.push({
    path: '/proxy1',
    target: 'http://localhost:3000'
})

exports.proxy.push({
    path: '/proxy2/',
    target: 'http://localhost:3000/'
})

exports.proxy.push({
    path: '/proxy3',
    target: 'http://localhost:3000/m'
})

exports.proxy.push({
    path: '/proxy4/',
    target: 'http://localhost:3000/m/'
})

exports.proxy.push({
    path: '/proxy5',
    target: 'https://localhost:3000/m'
})

exports.proxy.push({
    path: '/proxy6',
    target: 'http://localhost:3000/'
})