# react-position-select
position select

[中文文档](https://github.com/vkingw/react-position-select/blob/master/README_zh.md)

威发微服务位置选择组件/Wafer microservice position select component

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wafersystems/react-position-select)
[![npm](https://img.shields.io/npm/v/react-position-select.svg)](https://www.npmjs.com/package/react-position-select)
[![NPM downloads](https://img.shields.io/npm/dm/react-position-select.svg)](https://www.npmjs.com/package/react-position-select)

## Example

![Example](./example.png)

## How to use

### install

`yarn add react-position-select`

### React 

```js
import PositionSelect from 'react-position-select';

<PositionSelect {...props}/>

```

Properties  | Description | Type | Default Values
------------- | ------------- | --------------| ------------- 
spaceTree  |   Space Data（[Data](###Space Data)） | array | []
showPositionSelect | show components | bool | false
defaultValue | defaultValue （[Data](### defaultValue)） | array |  []
onClose | click close handle | func | function(){}
onChange | select finish handle | func | function(data){} ,data为选中节点有序的数组
title | title | string | '请选择'
selectTip | select tip | string | '请选择'
selectColor   | select node color | string |  #fa8c16 


### Space Data

````
[
      {
        id: 1,
        parentId: 0,
        children: [
          {
            id: 3,
            parentId: 1,
            children: [
              {
                id: 4,
                parentId: 3,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: [],
                    name: '院校农信',
                  },
                ],
                name: '高新农信',
              },
            ],
            name: '潍坊农信',
          },
        ],
        name: '山东农信',
      },
  ]
````

### defaultValue

```
[
{id:1,parentId:0,name:'A'},
{id:2,parentId:1,name:'B'}
]

```

### Development

````
$ git clone https://github.com/wafersystems/react-contacts.git
$ yarn
$ yarn start

````
