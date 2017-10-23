# Querying an Asset Field
> 最大許容画像サイズは100.000.000ピクセルです。この多くのピクセルを持つ画像は、10.000 x 10.000または5.000 x 20.000などの幅と高さの組み合わせを持つことができます。画像の最大ファイルサイズは256mbを超えることはできません。

アップロードされたアセットファイルは、コンテンツAPIから照会できます。以下のフィールド構成を持つコンテンツモデルの`Post`があるとしましょう：

- Title `#title` `Single Line Text`
- Images `#images` `Assets` `Allow Multiple Values`

これにより、`Post`に任意の数の画像を保存することができます。

次のクエリで`allPosts`を取得できます：

```javascript
{
  allPosts {
    title
    images {
      fileName
      handle
      url
      mimeType
      size
    }
  }
}
```

これは私たちにこのような結果を与えます：

```javascript
{
  "data": {
    "allPosts": [
      {
        "title": "Some nice post",
        "images": [
          {
            "fileName": "pexels-photo-295821.jpeg",
            "handle": "7AmzJToStuJrNqkpPSWO"
            "url": "https://media.graphcms.com/7AmzJToStuJrNqkpPSWO",
            "mimeType": "image/jpeg",
            "size": 100075,
          }
        ]
      }
    ]
  }
}
```

フィールド`#images`は、フィールドを含むアセットオブジェクトの配列を返します。

- `fileName` アップロードされたファイルの元のファイル名
- `handle` アップロードされたファイルの識別子
- `url` アップロードされたファイルの完全なURL
- `mimeType` アップロードされたファイルのアセットタイプ
- `size` バイト単位の合計サイズ

> 画像の表示サイズがわかっている場合は、画像変換エンジンを使用して画像を希望のサイズに拡大することを強くおすすめします。これにより、コンテンツの読み込み時間が短縮され、訪問者のユーザーエクスペリエンスが向上します。
