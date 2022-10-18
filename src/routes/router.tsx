import { Outlet, createHashRouter } from 'react-router-dom'

export const router = createHashRouter([{
  path: '/',
  element: <Outlet />,
  // 知识点：errorElement 用来指定找不到匹配时的渲染组件
  errorElement: <div>404</div>,
  children: [
    { index: true, element: <div>Home</div> },
    {
      path: 'welcome',
      element: <Outlet />,
      children: [
        { index: true, element: <div>Welcome</div> },
        { path: '1', element: <div>1</div> },
        { path: '2', element: <div>2</div> },
        { path: '3', element: <div>3</div> },
        { path: '4', element: <div>4</div> },
      ]
    },
  ]
}])
