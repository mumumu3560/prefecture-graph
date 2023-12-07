# 進捗や現在の問題などを書く

### 12/02 
#### Cloudflare Pageでのbuildエラーについて OK
❌ Invalid environment variables: {     
08:19:33.285	▲  PREFECTURES_API_URL: [ 'Invalid url' ],      
08:19:33.285	▲  POPULATION_API_URL: [ 'Invalid url' ]        
08:19:33.285	▲  }        
というエラーが出た(API_KEYは問題なさそう)       
.env.localでは
PREFECTURES_API_URL=https://opendata.resas-portal.go.jp/api/v1/prefectures      
POPULATION_API_URL=https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?   prefCode=

のように定義されているためこれの何がおかしいかを調べる。

そもそもT3の方ではnext.jsのバージョンがFor Next.js >= 13.4.4なら        
experimental__Envでいいはずなのにrequiredされたのがよくわからない

runtimeEnv:{
        API_KEY: process.env.API_KEY,
        PREFECTURES_API_URL: process.env.PREFECTURES_API_URL,
        POPULATION_API_URL: process.env.POPULATION_API_URL,
   }
としても駄目だった。        
というか.env.localはgithubにないのでCloudflareが認識できないのは当然だ。
本番環境ではどうすればいいんだ？        
↓       
Cloudflare Pagesの設定で以下の部分で環境変数を追加するとprocess.env.[variables]でアクセス可能       

![Alt text](image.png)

#### checkBoxの当たり判定 OK
これを参考にしてみる
https://quartet-communications.com/info/topics/7165

#### testの書き方 wait
CheckBoxを作ったのでちゃんと動くかのテストを書く。
fireEvent→userEventにしたほうがいい？まだテストについて良くわかっていない部分があるので
勉強の必要がある。余裕のある時に。

### 12/04

#### CheckBoxのリストの作成。 wait
チェックボックスは地域ごとに分けて選択できるようにしたい。  
RESAS APIを見ると、地域でまとまって都道府県が並んでいるので取得した都道府県が何番目かで地域分けができる。地域の分け方は         
1北海道+東北、2関東、3中部、4近畿、5中国、6四国、7九州          
にしてみる。

参考            
https://liginc.co.jp/designer/archives/81               
https://kinocolog.com/pref_select/ 

EX                           
個人的には日本地図をタップすると色が変わって選択されたことがわかるようなものとかが欲しいなと思った。            
色々実験できるし地域による特徴も分かりやすそうなのでUXがよさそう。   
都道府県 レスポンシブデザインでググると以下のサイトを見つけた           
http://takuri.realwork.jp/freematerials/2607            
これは良さそうだ使ってみよう。     

ChatGPTを使ってCheckBoxListを作成したが問題がある。        
まずスマホだと横にリストが並ばないし、PCでも画面を大きくとるのでグラフが下の方になってしまい
スクロールが面倒
     
ドロップダウンリストにチェックボックスを入れるようにしようか？

### 12/05 

#### Github ActionsでのPrettierによるformatとESLintによる解析 wait
最初にやっておくべきだったがこれはGithub Actionsでやるべきだった
github action format nextで検索
https://zenn.dev/bloomer/articles/c48eff0e4b2b10
https://deku.posstree.com/react/github-actions/prettier-eslint/
t3のenv周りでエラーが出るがどうすればいい？よくわからない。余裕のある時に


#### HighChartsでグラフを表示する
https://zenn.dev/itch/articles/9aa61eb25d43a6
https://zenn.dev/shimapon3/articles/13e3d4b147742c
参考になる日本語のサイトはたくさんあるのでそれを参考にすればいいが、そういった物がないこともある。
(自分の場合はOneSignalとかCloudflareとかGODOTとかでそうなった。)                
ので経緯を書いてみる
https://zenn.dev/mumumu3/scraps/e10841e0767b8d

#### server componentsでの状態管理のやり方
セキュリティを考慮すると、APIでデータを取得するにはclient componentsではなくserver componentsで取得したほうがいい。             
client componentsで状態変更→server componentsにAPIを取得しろと命令？
どうやる？
https://zenn.dev/collabostyle/articles/034e047216dba2
Zustandを使ってみようか？globalな状態管理ツールらしい。         
https://github.com/pmndrs/zustand
typescriptはここ
https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md
https://qiita.com/s_taro/items/0c16f077d843ac1a78fa

#### 北海道のチェックがおかしい。
配列の状態管理がおかしい？北海道のCheckBoxをクリックしたときに元々配列に数字があるのに数字が入っていないことになっている。他の配列をクリックすると北海道以外は元に戻る          
react 配列 状態 おかしい、next js 配列変化、でググる
参考になりそうなの
https://zenn.dev/kisukeyas/articles/068b503c3c3aef
https://qiita.com/honey32/items/62edf5165aced7d0c4bf
https://zenn.dev/syu/articles/3c4aa813b57b8c
https://www.monster-dive.com/blog/web_creative/20230825_002150.php
そもそも親コンポーネントから配列を子ポーネントに渡してそこから配列を変化させるってのがよくない？
ってことでZustandを使ってみる。という流れ。

12/06
#### CheckBoxの変更を考える。
ユーザーの操作によってapi 取得 server components
動的クエリという名前なのか。            
urlかCookieかな？
https://www.ai-shift.co.jp/techblog/3766

12/07
#### HighChartsがうまく使えない wait
TypeError: Cannot read properties of undefined (reading 'document')
    at eval (webpack-internal:///(rsc)/./node_modules/highcharts/highcharts.js:9:66)
    at eval (webpack-internal:///(rsc)/./node_modules/highcharts/highcharts.js:13:2)
ググる
![Alt text](image-1.png)

https://www.highcharts.com/forum/viewtopic.php?t=51764
ここは結構最近のissue？
https://github.com/highcharts/highcharts/issues/20129
Karol KołodziejさんがHighChartsのエンジニアっぽいのでこの人に注目してみよう。(この人がどんな対処を行うか。)             

We already have a closed issue related: https://github.com/highcharts/highcharts/issues/20129. The fix is provided and will be released with the new Highcharts version.

一応どうやって修正すればいいのかのようなものは書いてあるがそれはまだリリースされていないっぽい？                
代わりにRechartsを使う？？

#### Rechartsを使う。
