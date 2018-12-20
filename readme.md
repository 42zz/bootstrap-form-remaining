# Bootstrap4 form remaining count

## js/main.js
form_nokoriとform_totalを指定する。それぞれ残り数と必須項目要素の合計数

## index.html
 - formタグ
    - .needs-validationを指定（bootstrapとの兼ね合い）
    - .was-validatedを追加すると、:valid :invalidが各input要素に対して付与される

    -  input/select/textarea
      - .is-requiredを持つ要素の内、requiredアトリビュートを持つ要素をカウントする
