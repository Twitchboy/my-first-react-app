import FetchMock from 'fetch-mock';

FetchMock.mock(/\/users/, {
    'code': 200,
    'data': {
        'users|1-10': [{
            // 属性 id 是一个自增数，起始值为0， 每次增1
            'id|+1': 0,
            'name': /[a-z][A-Z][0-9]/,
            'status': 0
        }]
    },
    'message': '获取用户数据成功',
    'systemDate': new Date().getTime()
});
