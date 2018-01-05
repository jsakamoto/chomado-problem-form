# Chomad Problem Form / "ちょまど問題" フォーム

## これは何?

["ちょまど問題" サーバー](https://chomado-problem-server.azurewebsites.net/)
へ回答を送信し、 応答された正答数を表示するだけの HTML フォームです。

サーバー側の実装はなく、ブラウザ上の JavaScript で 動作するため、GitHub Pages に配置してみました。

[https://jsakamoto.github.io/chomado-problem-form/](https://jsakamoto.github.io/chomado-problem-form/)

## "ちょまど問題" って?

togetter にまとめがあります。

[何回で満点とれる？【ちょまど問題に挑む人々】](http://togetter.com/li/682030)

## 実装

Angular5 上に作成した、ブラウザ上の JavaScript だけで動作する HTML フォームです。

静的コンテンツを配信できる Web サーバー上、さらにはファイルシステム上でも動作します。

クライアント側スクリプトは JavaScript では直接記述せず、TypeScript で記述しています。

## ビルド

### 開発ツールや外部ライブラリのインストール

ビルドには node.js が必要です。

このリポジトリを git clone したら、ターミナルないしはコマンドプロンプトにて、
カレントディレクトリを作業フォルダに移動した上で ```npm install``` を実行します。  
すると、

- 必要な開発ツール (webpack とそのプラグインやローダー、TypeScript コンパイラ) 
- 必要な外部ライブラリ (Angular とその追加モジュール)
- TypeScript 用の型定義ファイル

が作業フォルダローカルにインストールされます。

### TypeScript のコンパイルとモジュール参照の解決

TypeScript ソースファイル (.ts) や HTML、CSS を編集したら、TypeScript コンパイラで JavaScript へコンパイルし、モジュールバンドラーである webpack を使ってモジュール参照を解決する必要があります。

TypeScript ソースコードをコンパイルし、モジュール参照を解決した JavaScript ファイル (このプロジェクトでは bundle.js と vendor.js) を生成するには、`npm run build` を実行します。

Minify を適用し開発用のコードを取り除いたリリース用(Production用)の bundle.js を生成するには、`npm run build:release` を実行します。

あるいは `npm start` を実行し、開発用サーバを常駐させておくと、
http://localhost:3000/ で開発サーバーを起動しつつ、TypeScript ソースファイルや HTML、 CSS の変更を検知したら自動でモジュールバンドルが実行され、さらに HMR (Hot Module Replacement) 機構によってブラウザの表示内容が自動更新されます。  
但し、この方式では、ファイルシステム上の bundle.js および vendor.js は更新されません。  
デプロイ前には `npm run build:release` を実行して、リリース用 (Production用) の bundle.js および vendor.js をファイルとして出力する必要があります。

### Visual Studio Code による開発

このリポジトリには、Visual Studio Code 用のタスク設定ファイルも同梱してあります。

このため、このリポジトリを git clone したフォルダを Visula Studio Code で開き、キーボードで Ctrl + Shift + B を押すと、`npm run start` が実行され、以後、Visual Studio Code 上で TypeScript ソースファイルや HTML、CSS を編集して保存すると、自動で bundle.js が生成されます。

先の手順で、`npm install` によって AngularJS の型定義ファイルがインストールされているため、
Visual Studio Code 上での app.ts 編集時は、インテリセンスが効きます。

## ライセンス

[GNU GPLv2](LICENSE)