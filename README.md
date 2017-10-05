# GraphCMS-blog
`GraphCMS`, `react`, `redux`を使用してBlogを構築する

## 開発環境構築の流れ
### yarn 
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

### react
- `react`をインストール  
> ユーザーインターフェイスを構築するためのJavaScriptライブラリ  
[React Installation](https://reactjs.org/docs/installation.html)
```
yarn add react react-dom
```

### babel
- `babel` をインストール
> JavaScriptコンパイラ  
[Using Babel](https://babeljs.io/docs/setup/#installation)
```
yarn add -D babel-loader babel-core
```

#### [babel-cli](https://babeljs.io/docs/usage/cli/)
> CLI（Command Line Interface/コマンドライン/command line）とは、ユーザに対する情報の表示を文字によって行い、すべての操作をキーボードを用いて行うユーザインターフェースのこと。
Babelには、コマンドラインからファイルをコンパイルするために使用できる組み込みのCLIが付属しています。

マシンにBabel CLIをグローバルにインストールすることはできますが、プロジェクトごとにプロジェクトをローカルにインストールする方がはるかに優れています。 これには主に2つの理由があります。

1. 同じマシン上の異なるプロジェクトは、異なるバージョンのBabelに依存して、一度に1つずつ更新することができます。
2. これは、作業中の環境に暗黙の依存関係がないことを意味します。プロジェクトの移植性が向上し、設定が容易になります。

Babel CLIをローカルにインストールするには、次のコマンドを実行します。
```
yarn add -D babel-cli
```

Babel本体のみでは、何も仕事をしない。`.babelrc`という設定ファイルを用意し、そこにBabelでさせたい処理をプリセットやプラグインとして登録しておく必要がある。

BabelにES2015のコンパイルの処理を行わせる場合は`babel-preset-es2015`というプリセットを使用。
[Babel CLI（babelコマンド）の使い方](https://mae.chab.in/archives/2845)

```
yarn add -D babel-preset-es2015
```


#### [React preset](https://babeljs.io/docs/plugins/preset-react/)
フロータイプを取り除き、JSXをcreateElement呼び出しに変換します。
```
yarn add -D babel-preset-react
```


#### [.babelrc](https://babeljs.io/docs/usage/babelrc/)
> envオプションを使用すると、特定の環境で特定のオプションを設定できます。

```
{
  "presets": ["es2015", "react"]
}
```
>※ babel6系からパッケージの分離が行われた為、bebel5系と異なりbabel-preset-es2015やbabel-preset-reactなど機能 ＝ プリセット単位で別途インストールする必要がある。

### webpack
- `webpack`をインストール
> JavaScriptモジュールバンドラ
[webpack.js.org](https://webpack.js.org/)
```
yarn add -D webpack
```

### webpack-dev-server
- `webpack-dev-server`をインストール
> live reloadingを提供する開発サーバー  
[webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)
```
yarn add -D webpack-dev-server
```

## configファイルの作成