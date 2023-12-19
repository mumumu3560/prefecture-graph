# 疑問点など

Pages Router
App Router
の違いとは？
どちらでより開発されている？


viewとlogicの分離はどのようにする？以下のサイトではロジックをUIロジックと業務ロジックとに分けている
https://tech.leverages.jp/entry/2022/08/31/160743


Github Actionsのエラーが取れない。      
https://github.com/mumumu3560/prefecture-graph/actions/runs/7098053551/job/19319264219      
のエラーを確認      
❌ Invalid environment variables: {
  API_KEY: [ 'Required' ],
  PREFECTURES_API_URL: [ 'Required' ],
  POPULATION_API_URL: [ 'Required' ]
}       
これでexitする。これはCloudflare Pagesでも見られたエラーでt3周りでenvが無いことに起因している？
githubの方でenvを設定する？

App Routerでの状態管理？

HighChartsがうまく使えない。
https://www.highcharts.com/forum/viewtopic.php?t=51764
Githubでどういったことが言われているかがわからない。
