# 進捗や現在の問題などを書く

### 12/02 
#### Cloudflare Pageでのbuildエラーについて
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