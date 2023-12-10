import { env } from "@/env/server.mjs";

//RESAS APIのデータ元
//https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
interface Prefecture {
  prefCode: number;
  prefName: string;
}

const fetchPrefectures = async (): Promise<Prefecture[]> => {
  try {
    const response = await fetch(env.PREFECTURES_API_URL, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch prefectures: ${response.statusText}`);
    }

    const result = await response.json();

    const formattedData: Prefecture[] = result.result.map((prefecture: { prefCode: number; prefName: string }) => ({
      prefCode: prefecture.prefCode,
      prefName: prefecture.prefName,
    }));

    return formattedData;
  } catch (error) {
    throw error;
  }
};

export { fetchPrefectures };


/*

const fetchPrefectures = async () => {
  try {
    const results = await axios.get<{
      message: null;
      result: { prefCode: number; prefName: string }[];
    }>(env.PREFECTURES_API_URL, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    const formattedData = results.data.result.map(
      (prefecture: { prefCode: number; prefName: string }) => ({
        prefCode: prefecture.prefCode,
        prefName: prefecture.prefName,
      }),
    );

    return formattedData;
  } catch (error) {
    console.error("Error fetching prefectures:", error);
    throw error; // You can choose to handle or rethrow the error
  }
};

export { fetchPrefectures };
*/

/*
server componentsでapi取得 
NEXT_PUBLIC_をつけることで、クライアントサイドからも参照可能になるが今回はセキュリティを考慮してサーバーサイドのみで参照する
また型定義も必要↓
*/

/*
参考サイト
https://zenn.dev/mostlove/articles/de0087838d3ba0
https://zenn.dev/temasaguru/articles/406189a014b656
これを参考に環境変数を設定(スキーマの分割など)
https://zenn.dev/hayato94087/articles/3e4128feddffb9
ライブラリのサイト
https://env.t3.gg/docs/nextjs
.mjsとは？？
https://zenn.dev/kibe/articles/78205d43d4ec05
*/
