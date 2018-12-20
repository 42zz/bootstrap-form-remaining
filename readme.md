# Bootstrap4 form remaining count

## 開発環境
* Bootstrap 4.1.3
* jQuery 3.3.1


## Setup
bootstrapのインストール
```npm install```
or CDNでBootstrap 4の追加
https://getbootstrap.com/

### index.html
 - formタグ
    - .needs-validationを指定（bootstrapとの兼ね合い）
    - .was-validatedを追加すると、:valid :invalidが各input要素に対して付与される

    -  input/select/textarea
      - .is-requiredを持つ要素の内、requiredアトリビュートを持つ要素をカウントする


### js/main.js
form_nokoriとform_totalを指定する。それぞれ残り数と必須項目要素の合計数
