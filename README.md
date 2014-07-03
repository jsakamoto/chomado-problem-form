# Chomad Problem Form / "ちょまど問題" フォーム

## これは何?

["ちょまど問題" サーバー](https://chomado-problem-server.azurewebsites.net/)
へ回答を送信し、 応答された正答数を表示するだけの HTML フォームです。

サーバー側の実装はなく、ブラウザ上の JavaScript で 動作するため、DropBox に配置してみました。

[https://dl.dropboxusercontent.com/u/28872413/chomado-problem-form/index.html](https://dl.dropboxusercontent.com/u/28872413/chomado-problem-form/index.html)

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
すると、必要な開発ツール (grunt, bower, tsd) 作業フォルダローカルにインストールされます。

次に ```./node_modules/.bin/grunt setup``` を実行します。  
これで必要な外部ライブラリ (AngularJS) と TypeScript 用の型定義ファイルがダウンロード、
インストールされます。

### TypeScript のコンパイル

#### a) tsc または grunt によるコンパイル

TypeScript ファイルは、app.ts ひとつだけです。  
app.ts を編集したら、TypeScript コンパイラで JavaScript へコンパイルする必要があります。

app.ts をコンパイルし app.js を生成するには、```./node_modules/.bin/grunt``` を実行します。  
あるいは ```./node_modules/.bin/grunt watch``` を実行し、grunt による監視を常駐させておくと、
app.ts の変更を検知したら自動で app.js へのコンパイルが実行されます。

#### b) Visual Studio によるコンパイル

Windows OS 上で、Visual Studio (無料版の Express Edition 含む) を使っている場合は、
ChomadoProblemForm.sln を開けば開発可能です。  
Visual Studio 上で app.ts を編集して保存すると、保存するタイミングで app.js にコンパイルされます。

先の手順で、```grunt setup``` によって AngularJS の型定義ファイルがインストールされているため、
Visual Studio 上での app.ts 編集時は、インテリセンスが効きます。
