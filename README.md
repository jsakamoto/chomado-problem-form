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

AngularJS 上に作成した、ブラウザ上の JavaScript だけで動作する HTML フォームです。

静的コンテンツを配信できる Web サーバー上、さらにはファイルシステム上でも動作します。

クライアント側スクリプトは JavaScript では直接記述せず、TypeScript で記述しています。

## ビルド

### 開発ツールや外部ライブラリのインストール

ビルドには node.js が必要です。

このリポジトリを git clone したら、ターミナルないしはコマンドプロンプトにて、
カレントディレクトリを作業フォルダに移動した上で ```npm install``` を実行します。  
すると、

- 必要な開発ツール (webpack とそのプラグインやローダー、TypeScript コンパイラ) 
- 必要な外部ライブラリ (AngularJS とその追加モジュール)
- TypeScript 用の型定義ファイル

が作業フォルダローカルにインストールされます。

### TypeScript のコンパイルとモジュール参照の解決

#### a) コマンドライン (ターミナル) からのビルド

TypeScript ファイルは、./src/app.ts ひとつだけです。  
app.ts を編集したら、TypeScript コンパイラで JavaScript へコンパイルし、モジュールバンドラーである webpack を使ってモジュール参照を解決する必要があります。

app.ts をコンパイルし、モジュール参照を解決した JavaScript ファイル (このプロジェクトでは bundle.js) を生成するには、`npm run build` を実行します。

あるいは `npm run watch` を実行し、webpack による監視を常駐させておくと、
app.ts の変更を検知したら自動で bundle.js へのコンパイルが実行されます。

#### b) Visual Studio による開発

Windows OS 上で Visual Studio (無料版の Community Edition 含む) を使っている場合は、["NPM Task Runner"](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner) という Visual Studio 拡張を事前にインストールしておいてください。

そのうえで Visual Studio ソリューションファイル `ChomadoProblemForm.sln` を開くと `npm run watch` による監視が自動で開始されるます。  
この仕組みにより、Visual Studio 上で app.ts を編集して保存すると、自動で bundle.js が生成されます。

先の手順で、`npm install` によって AngularJS の型定義ファイルがインストールされているため、
Visual Studio 上での app.ts 編集時は、インテリセンスが効きます。

#### c) Visual Studio Code による開発

このリポジトリには、Visual Studio Code 用のタスク設定ファイルも同梱してあります。

このため、このリポジトリを git clone したフォルダを Visula Studio Code で開き、キーボードで Ctrl + Shift + B を押すと、`npm run watch` が実行され、以後、Visual Studio Code 上で app.ts を編集して保存すると、自動で bundle.js が生成されます。

先の手順で、`npm install` によって AngularJS の型定義ファイルがインストールされているため、
Visual Studio Code 上での app.ts 編集時は、インテリセンスが効きます。

## ライセンス

[GNU GPLv2](LICENSE)