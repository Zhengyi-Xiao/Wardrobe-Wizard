# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1:
找到一个根据日期获取 philly 天气的 API，显示在 bar-calendar-container 里
找个 calendar 的 react component，然后把这个 component 的样子颜色改成我们 figma 的样子，并显示在 bar-calendar-container 里
根据当前日期正确显示 bar-calendar 的内容

ps 可能需要在 HomePage 这个 component 存一个日期的 state

2:

整个 S3 bucket 上传照片，我现在前端已经有一个 camera 的口了，现在需要把这个文件传到 s3 上，然后重新下载下来展示到前端，同时把 url 发到 mongodb，再点击 save 之后，reload 整个 page，然后这个要在最新的所以要 sort by created time，如果 everything works 就可以在 closet 能看见， 可以用电脑的 upload image 测试

3:

推荐页面比较独立是可以现在单独做完的, 可以先管 static，然后改成 dynamic，后面已经写好了一个 express 的 fetch function，然后数据也在 mongo 上了

ps imageProfile 直接 call AddClothPopUp 让 forRecommendation={true} (react, express.js, mongo)
3.1: 在 imageProfile 里，类似于 ChooseEventType，写一个 ChooseClothType
3.2: Closet.css, AddClothPopUp.css, ChooseEventType.css 的 css 需要完成

4:

Closet 上面好像变了，是不是要改一下 css
