# poketype
ポケモンの耐性と弱点をサクサク表示するwebアプリ

## Used Libraries

- [ReactJS](https://facebook.github.io/react/)
- [Flipsnap](http://hokaccha.github.io/js-flipsnap/)
- [PokemonDataGraber](https://github.com/PokemonGOAPI/PokemonDataGrab)

## Notes

ポケモンのデータの大本は「PokemonDataGraber」から取得した、おそらくNIANTICのAPIから直で吸い出してきたデータだと思われ、各ポケモンの最大HP・CPや覚える技、身長・体重の上限値や進化に必要な種の数なども取得できるので、ポケモンGOのアプリを作成する際には大体これで用が足りるはず。

JSONをパースしてHTMLでレンダリングするのに一番楽そうなReactを採用、スワイプには「React-swipe」「React-slick」を試してみたが、どちらも動作が安定していなかったため、最終的にスワイプ実装系のJSライブラリで最も使い慣れていて安定しているFlipsnapを採用してみた。

将来的に「図鑑No順」や「英語版での表示」などを追加したくなる可能性を考慮して、ナビゲーションの中身と表示するポケモンのデータに関してはJSONだけ差し替えれば、特に何もしなくてもそのまま表示可能なように実装してみた。
