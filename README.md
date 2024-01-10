# 目的
以下のサイトの条件に合ったSPAの作成    
https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d
Cloudflare Pagesにデプロイした      
https://d79b8667.prefecture-graph.pages.dev/

### 使うもの
Next.js    
Highcharts(グラフ)→Rechartsに変更       
VSCode+Git    
RESAS API(都道府県情報)    
Jest、testing-library(テスト)       
Cloudflare Pages(デプロイ)


### ファイルについて

QUESTION.mdは作成中に生じた疑問。実際にはslackなどで聞く？ 

TODO.mdはこれからやることやメモ等を書いておく場所で進捗報告のようなもの。       
自分の考えややっていることなどがわかればいいなと思った。        
あとはメタ的に自分のやっていることやどうやってやっているかを確認したいと思って書いた。      
個人的にはここを充実させることが大事かなと思った。(コーディングテストでは)

あとはZennにメモもした。

imageはTODOに画像を張り付けた際のもの。


### プログラミング歴など

・課題にかかった時間      
この課題に使った時間はわからないが調べる時間を含めると50時間はかかっているはず？      


・総合的なプログラミング歴      
最初に触れたのはC++だがはまらなかったのと時間がなかったのとであまりやれていない。
本格的にプログラミングを始めたのは今年からで4か月くらい？

・GDScript(GODOT) 2~3か月ほど？      
ゲームを作ってみたいなぁと思ってはいたのだがPCが重かったので今までそういったことができなかった。今年から時間ができて作りたい欲が再燃し、軽めのゲームエンジンを探し
見つけたのがGODOT、テトリスや簡単なAndroidアプリを作った。      

他のゲームエンジンに比べると情報が少なく、自由度が高いために初心者の自分にはまだ早いと感じたのとゲームでないAndroidアプリを作ってみたかったのとで他の言語、フレームワークを探すこととした。 
PCが重く、Androidエミュレータが動かないという問題があったので、     
クロスプラットフォーム(DesktopやChromeでも動かせる)を探しているとFlutterを見つけた。


・Dart(Flutter)  2か月   
Flutterでは画像投稿サービスのようなものを作ろうとしていた。     
GODOTではSupabaseというサービスを使い簡単なチャットアプリを作ったのだが、その最中に以下のようなサイトを見つけた。
https://zenn.dev/ddpn08/articles/cloudflare-images-pricing
ここでCloudflareの存在を知り使うようになった。              
ここではFlutterというよりもバックエンドのCloudflareやSupabaseについてかける時間の方が多かったと思う。


バックエンドサービスは以下を使ったことがある。
・Cloudflare(画像周り)
・Supabase(データベース回り)
・OneSignal(通知)


・WEBフロントエンドプログラミング歴→今回のコーディングテストが初めて。
Flutterは一応クロスプラットフォームだが自分はAndroid用の開発しか行っていないため、
これを含めないと今までにWEBフロントエンドはやったことがない(HTML、CSS等の名前は知っている)

ちらっとコーディングテストの内容を見たときに2週間猶予があったので何とかなるかな？と思ってチャレンジした(が難しかった)

方法論？メタラーニング？に興味があるので初めて何かを学ぶ際に自分はどうやって思考しているかを確認できるのではないかとも思った。→TODO.mdファイルに書こうとしたが難しい。    


### 難しかったことやできなかったこと、できるようになりたいことなど

・状態管理
Next.jsを調べると、どうやらServer Components(SC)とClient Component(CC)というものがあるらしく、セキュリティを考慮するとAPI keyやAPI tokenはServer Componentsの中で使う必要があるらしいが、ユーザーの動的クエリはCCで行われ、API周りはSCで使われるため、
CCからSCに状態を渡す必要がある。しかしCCはSCの親になれない？のでどうやって状態を渡せばいいのかですごい手間取った。自分が見たサイトではまだそこら辺のコンセンサス？が取れていないようだ。        
今回自分はCookieに情報を保存。router.refresh()によりSCの再レンダリングを行うことでこれを実装したが、正しいのかがわからない。

・デザイン
単純にどういうデザインがいいのかがわからなかった。
特にレスポンシブデザインが難しい。      
overflow-xをscrollにしたほうがよいか？      
縮小でとどめるか？      
などがわからない。

・コンポーネントの構成、ロジックとビューの分離など
コンポーネントをどう構成するかがわからなかった。どのロジックは含めてもよいかなども。
それもあってかテストをどうすればいいのかがよくわからなかった。
複雑になってくるとどう分けるかがわからなくなってくる。とくにRechartsの部分がよくない。

ここは成長したいところ。


・typeの別ファイル定義
よく自分はPopulationResultタイプを使うのだがこれは別ファイルに定義するべきだった。

・コミットの粒度
コミットの粒度がバラバラだったかもしれない。
大枠を作って後で細かいのを直すというような感じになっていた？
手探りだったのがよくなかったか？

・CSVの出力
データはダウンロードできるが、都道府県名が日本語でそのままCSVに出力すると文字化けが起こってしまう。時間的に間に合わなかった。


・TODOの更新
実際に働くときはSlackか何かで進捗報告のようなものをするのだろうと思い、今回はTODOでそのようなことをしようと思った。     
本来は「こういう目的があり、これをするためにはこのように調べればいい」のように、解決の結果だけでなくそこに行きつくまでの道のりのようなものを書ければよかったのだが、それが難しかった。      
内製化支援の文脈でもあるが、解決の結果だけでなくそこに行くまでの道のりがどうなっているかを理解することが自分の学び方にとっても、他の人にとっても有意義であると考えているのでそこをうまくできるようになりたい。(魚ではなく魚の釣り方)       

今回は難しかったですが、そういったことを意識的にやろうという意思はあります!






### 最初に考えたこと
・誰が使う？→都道府県別の総人口、年少人口、生産年齢人口、老年人口を表示させる→今だと少子高齢化について調べる人とかが使いそう特に学生とか。   
・excelとかで自分でデータをこねくり回せるようにCSVとかをダウンロードできるようにする？    
・年齢層別の情報が知りたいのなら棒グラフでそれぞれの年齢層の割合を棒グラフで年ごとに表示する？    


### 概形(目標)
![prefecture](https://github.com/mumumu3560/prefecture-graph/assets/142517194/ab8234b6-5ffc-4a3b-826a-2d06a62ff917)    
画像が大きくなってしまったが概形をこのようにしたい。    
都道府県は地域ごとに分けることで選びやすくしたい。選択された都道府県がわかりやすくなるようにしたい。(背景色の変化？)    
https://liginc.co.jp/designer/archives/81

グラフはタブで切り替えるようにしたい。またCSVもダウンロードできるようにしたい。

