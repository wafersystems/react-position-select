/**
 * Created : vincent
 * Date : 2019-07-10  16:57
 * Email : wangxiao@wafersystems.com
 */

export const spaceTree = [{
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
            {
              id: 6,
              parentId: 4,
              children: [],
              name: '院校农信123',
            },
          ],
          name: '高新农信',
        },
        {
          id: 14,
          parentId: 3,
          children: [
            {
              id: 15,
              parentId: 14,
              children: [],
              name: '院校农信B',
            },
            {
              id: 16,
              parentId: 14,
              children: [],
              name: '院校农信A',
            },
          ],
          name: '高新农信C',
        },
      ],
      name: '潍坊农信',
    },
  ],
  name: '山东农信',
}];

export const  initData= [
  {id: 3, parentId: 1},
  {id: 4, parentId: 3}
]