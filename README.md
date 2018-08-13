# Chomad Problem Form / "ちょまど問題" フォーム

## これは何?

["ちょまど問題" サーバー](https://chomado-problem-server.azurewebsites.net/)
へ回答を送信し、 応答された正答数を表示するだけの HTML フォームです。

サーバー側の実装はなく、ブラウザ上の JavaScript 及び WebAssembly で 動作するため、GitHub Pages に配置してみました。

[https://jsakamoto.github.io/chomado-problem-form/](https://jsakamoto.github.io/chomado-problem-form/)

## "ちょまど問題" って?

togetter にまとめがあります。

[何回で満点とれる？【ちょまど問題に挑む人々】](http://togetter.com/li/682030)

## 実装

[Blazor](https://blazor.net/) で作成した、ブラウザ上の JavaScript 及び WebAssembly だけで動作する HTML フォームです。

静的コンテンツを配信できる任意の Web サーバー上で動作します。

クライアント側実装は [Blazor](https://blazor.net/) なので C# で記述しています。

## ビルド

### 開発ツールのインストール

ビルドには .NET Core SDK 2.1.300 以降が必要です。

- [.NET Core SDK 2.1 ダウンロード](https://www.microsoft.com/net/download/dotnet-core/2.1)

### 開発時実行

このリポジトリを git clone したら、ターミナルないしはコマンドプロンプトにて、
カレントディレクトリを作業フォルダ内の ChomadoProblemForm サブフォルダに移動した上で `dotnet run` を実行します。

すると、必要なビルド処理が実行されたのちに、開発用 Web サーバーが立ち上がり、ポート 49940 で待ち受けします。

この状態で Web ブラウザで `http://localhost:49940/` を開くと Chomadp Problem Form が開きます。

※開発用 Web サーバーを停止するには Ctrl + C を押してください。

### 発行

カレントディレクトリを作業フォルダ内の ChomadoProblemForm サブフォルダに移動した上で `dotnet publish -c Release` を実行します。

すると、`bin\Release\netstandard2.0\publish\ChomadoProblemForm\dist` サブフォルダ以下に、Chomado Probelm Form に必要なすべての静的コンテンツが生成されます。

上記 `dist` フォルダ内のファイルを、静的コンテンツをホストできる Web サーバー上に配置することで、Chomado Problem Form を配置できます。

※補足 - GitHub Pages 上に配置する場合は、`index.html` と並べて `.nojekyll` という名前の空ファイルを追加してください。このファイルがないと、GitHub Pages では、アンダースコア ("_") で始まるフォルダ名へのアクセスが HTTP 404 NotFound エラーになってしまうため、且つ、Blazor アプリの発行結果にはアンダースコアで始まる名前のフォルダが含まれるためです。

### Visual Studio Code による開発

このリポジトリには、Visual Studio Code 用のタスク設定ファイルも同梱してあります。

このため、このリポジトリを git clone したフォルダを Visula Studio Code で開き、キーボードで Ctrl + F5 を押すと、`dotnet run` が実行され、さらに、Web ブラウザが起動して、Chomado Problem Form を開きます。

## ライセンス

[GNU GPLv2](LICENSE)