# TodoList

## 需要实现的功能

  - 可以添加任务
  - 已完成任务和未完成任务用不同颜色区分开
  - 添加状态栏,显示已完成数量以及总数
  - 当进行添加任务,修改任务状态,以及删除任务时,状态栏的数量应及时变化

## 接下来如何开始呢?

### 1. 任务存储的数据结构

  - 每个任务都有自己的id，任务名，以及任务的状态，任务的id除了标识任务的唯一性，还可以作为列表项的key值。
  - 我们都知道在react中使用列表，列表的每一项必须有个key值，这样会使得每个列表项可以快速定位，在执行Diff算法时减少不必要的查询，从而对性能的提升有所帮助。

    list: [
      {
        id: 0,
        name: '早饭',
        status: 0
      }, {
        id: 1,
        name: '午饭',
        status: 0
      }, {
        id: 2,
        name: '晚饭',
        status : 0
      }
    ]

### 2. 组件的划分

  - TodoList 整体作为一个大组件
  - ListItem 列表中的每个列表项作为一个组件
  - Dialog 添加任务作为一组件

### 3. 具体实现

  - 让我们想想子组件ListItem的具体实现
    - 将列表单独项作为一个组件应该是必要的，这样使得每个单独条目都是独立的，是代码的逻辑上更加简单，同时也可以增强代码的复用性，使维护变得更加简单容易
    - 因为每一个ListItem都是相互独立的, 当item组件构建好后，就需要考虑的事情就是共享数据的传递
      - 当Task的状态改变 / Task的添加删除，Task的完成数目和总数目都是会改变的
      - 可能会想到父子组件之间的通信
        - 首先在父子组件中定义改变state数据的方法，将方法以props的形式传递给子组件
        - 在子组件中触发事件处理程序，然后满足某种条件的话就执行父组件传来的函数
  - 接下来，想想父组件 TodoList 我们应该实现什么
    - 展示所有Tasks
    - 具体的事件操作

---

### 你可以克隆此Demo到您本地，以下是运行后的结果.

![Default View](https://github.com/encoreshao/react-todolist/tree/master/public/images/001.png)

![Mark as Completed](https://github.com/encoreshao/react-todolist/tree/master/public/images/002.png)

![Add Task](https://github.com/encoreshao/react-todolist/tree/master/public/images/003.png)

---

## How to create a project

1. Installing node.js from https://nodejs.org/en/
2. npm install -g create-react-app (https://github.com/facebook/create-react-app)
3. create-react-app todolist (Note: project name can no longer contain capital letters)
4. cd todolist

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
