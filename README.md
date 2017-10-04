# GraphCMS-blog
`GraphCMS`, `react`, `redux`を使用してBlogを構築する

## 開発環境構築の流れ
- `yarn`をインストール
> 迅速で信頼性の高い安心な管理：操作を並列化してリソース使用率を最大化するので、インストール時間がこれまで以上に短縮  
[yarn Installation](https://yarnpkg.com/lang/en/docs/install/)
```
brew install yarn
```

- `package.json`を作成  
```
yarn init
```

- `react`をインストール  
> ユーザーインターフェイスを構築するためのJavaScriptライブラリ  
[React Installation](https://reactjs.org/docs/installation.html)
```
yarn add react react-dom
```

- `babel` をインストール
> JavaScriptコンパイラ  
[Using Babel](https://babeljs.io/docs/setup/#installation)
```
yarn add -D babel-loader babel-core
```

- `webpack`をインストール
> JavaScriptモジュールバンドラ。  
[webpack.js.org](https://webpack.js.org/)
```
yarn add -D webpack
```


- `webpack-dev-server`をインストール
> live reloadingを提供する開発サーバー  
[webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)
```
yarn add -D webpack-dev-server
```

## configファイルの作成