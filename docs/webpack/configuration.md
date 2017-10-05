#CONFIGURATION
> webpackには設定オブジェクトが与えられます。 webpackの使用状況に応じて、この設定オブジェクトを渡すには2つの方法があります：

## CLI
[CLI](https://webpack.github.io/docs/cli.html)を使用すると、`webpack.config.js`ファイル（または`--config`オプションで渡されたファイル）が読み込まれます。このファイルは設定オブジェクトをエクスポートする必要があります：

```javascript
module.exports = {
    // configuration
};
```
## node.js API
[node.js API](https://webpack.github.io/docs/node.js-api.html)を使用する場合は、設定オブジェクトをパラメータとして渡す必要があります。
```
webpack({
    // configuration
}, callback);
```
## multiple configurations
どちらの場合も、並行して処理される一連の構成を使用することができます。ファイルシステムのキャッシュとウォッチャーを共有するので、webpackを複数回呼び出すより効率的です。

#構成オブジェクトの内容
> ヒント：設定に純粋なJSONを書く必要はありません。必要なJavaScriptを使用してください。それは単なるnode.jsモジュールです...

非常に単純な設定オブジェクトの例：
```javascript
{
  context: __dirname + "/app",
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}
```

## `context`
`entry`オプションを解決するためのベースディレクトリ（絶対パス！）。 `output.pathinfo`が設定されている場合、インクルードされたpathinfoはこのディレクトリに短縮されます。
```
Default: process.cwd()
```
> CWDは「Change Working Directory」...CWDは指定したディレクトリへと、ワーキングディレクトリを移動するコマンドだ。...[FTP（File Transfer Protocol）～後編](http://www.atmarkit.co.jp/ait/articles/0108/03/news001.html)

[node.js - process.cwd()](https://nodejs.org/api/process.html#process_process_cwd)
> process.cwd()メソッドは、Node.jsプロセスの現在の作業ディレクトリを返します。

## `entry`
バンドルのエントリポイント。  
文字列を渡す場合：文字列は起動時に読み込まれるモジュールに解決されます。  
配列を渡す場合：起動時にすべてのモジュールがロードされます。最後のものがエクスポートされます。
```javascript
entry: ["./entry1", "./entry2"]
```
オブジェクトを渡す場合：複数のエントリバンドルが作成されます。キーはチャンク名です。値は文字列または配列です。
> チャンクとは、大きな塊、ぶつ切り、大量(の)、などの意味を持つ英単語。  
> データ通信やファイル形式などの分野で、ひとまとまりのデータの塊のことをチャンク(チャンク形式、チャンク構造)ということがある。一つのチャンクは、データ本体の先頭にそのデータについての情報(データ長やデータの種類、識別子など)を付加した形になっており、これをいくつも連ねてデータ全体を表現する。画像や音声、動画など大きなサイズのバイナリデータの保存や送受信を行なう際によく用いられる方式である。
[チャンク 【 chunk 】](http://e-words.jp/w/%E3%83%81%E3%83%A3%E3%83%B3%E3%82%AF.html)

```javascript
{
  entry: {
    page1: "./page1",
    page2: ["./entry1", "./entry2"]
  },
  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  }
}
```
> 注：エントリポイントに固有の他のオプションを設定することはできません。エントリポイント固有の設定が必要な場合は、複数の設定を使用する必要があります。

## `output`





