export default {
    menu: [
        {
            id: 1,
            icon: 'money-collect',
            name: '投资能耗数据',
            menuItems: [
                {
                    id: 11,
                    name: 'GDP 数据',
                    link: '/investment-consumption/gdp'
                },
                {
                    id: 12,
                    name: '财政数据',
                    link: '/investment-consumption/financial'
                },
                {
                    id: 13,
                    name: '固定资产投资数据',
                    link: '/investment-consumption/fix_investment'
                },
                {
                    id: 14,
                    name: '能源数据',
                    link: '/investment-consumption/energy'
                },
            ]
        },
        {
            id: 2,
            icon: 'export',
            name: '服务业与外贸数据',
            menuItems: [
                {
                    id: 21,
                    name: 'GDP 数据',
                    link: '/service-foreigntrade/gdp'
                },
                {
                    id: 22,
                    name: '服务业运行数据',
                    link: '/service-foreigntrade/service_operation'
                },
                {
                    id: 23,
                    name: '贸易数据',
                    link: '/service-foreigntrade/trade'
                },
                {
                    id: 24,
                    name: '对外经济数据',
                    link: '/service-foreigntrade/foreigntrade'
                }
            ]
        },
        {
            id: 3,
            icon: 'pay-circle-o',
            name: '居民收入与物价数据',
            menuItems: [
                {
                    id: 31,
                    name: 'GDP 数据',
                    link: '/income-price/gdp'
                },{
                    id: 32,
                    name: '价格指数',
                    link: '/income-price/price'
                },
                {
                    id: 33,
                    name: '民生收支数据',
                    link: '/income-price/income_expenses'
                },{
                    id: 34,
                    name: '社保劳动工资数据',
                    link: '/income-price/social_security'
                }
            ]
        }
    ],
}
