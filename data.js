﻿
const flashcardsData = [
	{ "questionImage": "images/BK117 D-2 ヘリコプター.webp", "answerText": "BK117 D-2 ヘリコプター" },
	{ "questionImage": "images/EQS バイ メルセデス－EQ.webp", "answerText": "EQS バイ メルセデス－EQ" },
	{ "questionImage": "images/GR スープラ GT4 EVO.webp", "answerText": "GR スープラ GT4 EVO" },
	{ "questionImage": "images/Honda VFR 白バイ.webp", "answerText": "Honda VFR 白バイ" },
	{ "questionImage": "images/HRC モーターホーム.webp", "answerText": "HRC モーターホーム" },
	{ "questionImage": "images/UDトラックス クオン エネオス タンクローリー.webp", "answerText": "UDトラックス クオン エネオス タンクローリー" },
	{ "questionImage": "images/UDトラックス クオン タンクローリー.webp", "answerText": "UDトラックス クオン タンクローリー" },
	{ "questionImage": "images/UDトラックス クオン ミキサー車.webp", "answerText": "UDトラックス クオン ミキサー車" },
	{ "questionImage": "images/いすゞ エルガ 大阪シティバス.webp", "answerText": "いすゞ エルガ 大阪シティバス" },
	{ "questionImage": "images/いすゞ エルガ 都営バス.webp", "answerText": "いすゞ エルガ 都営バス" },
	{ "questionImage": "images/いすゞ エルフ 標識車.webp", "answerText": "いすゞ エルフ 標識車" },
	{ "questionImage": "images/いすゞ エルフ 軌陸車.webp", "answerText": "いすゞ エルフ 軌陸車" },
	{ "questionImage": "images/いすゞ エルフ.webp", "answerText": "いすゞ エルフ" },
	{ "questionImage": "images/いすゞ ギガ ダンプカー.webp", "answerText": "いすゞ ギガ ダンプカー" },
	{ "questionImage": "images/いすゞ ギガ フライドポテトカー.webp", "answerText": "いすゞ ギガ フライドポテトカー" },
	{ "questionImage": "images/いすゞ ギガ 木材運搬車.webp", "answerText": "いすゞ ギガ 木材運搬車" },
	{ "questionImage": "images/きかんしゃゴードン.webp", "answerText": "きかんしゃゴードン" },
	{ "questionImage": "images/きかんしゃトーマス.webp", "answerText": "きかんしゃトーマス" },
	{ "questionImage": "images/きかんしゃパーシー.webp", "answerText": "きかんしゃパーシー" },
	{ "questionImage": "images/しまじろう シーパーク シャトルバス.webp", "answerText": "しまじろう シーパーク シャトルバス" },
	{ "questionImage": "images/はとバス.webp", "answerText": "はとバス" },
	{ "questionImage": "images/アキュラ インテグラ.webp", "answerText": "アキュラ インテグラ" },
	{ "questionImage": "images/アート引越センター トラック.webp", "answerText": "アート引越センター トラック" },
	{ "questionImage": "images/ガリガリ君フルトレーラー.webp", "answerText": "ガリガリ君フルトレーラー" },
	{ "questionImage": "images/グリコワゴン.webp", "answerText": "グリコワゴン" },
	{ "questionImage": "images/コベルコ オールテレーンクレーン KMG5220.webp", "answerText": "コベルコ オールテレーンクレーン KMG5220" },
	{ "questionImage": "images/コベルコ ラフテレーンクレーン パンサーX 250.webp", "answerText": "コベルコ ラフテレーンクレーン パンサーX 250" },
	{ "questionImage": "images/コベルコ建機 超大型ビル解体専用機 SK3500D.webp", "answerText": "コベルコ建機 超大型ビル解体専用機 SK3500D" },
	{ "questionImage": "images/コマツ ブルドーザ D155AX-6.webp", "answerText": "コマツ ブルドーザ D155AX-6" },
	{ "questionImage": "images/コマツ 油圧ショベル PC200-10型.webp", "answerText": "コマツ 油圧ショベル PC200-10型" },
	{ "questionImage": "images/スズキ ジムニー.webp", "answerText": "スズキ ジムニー" },
	{ "questionImage": "images/スバル WRX S4 覆面パトロールカー.webp", "answerText": "スバル WRX S4 覆面パトロールカー" },
	{ "questionImage": "images/スバル サンバー キッチントレーラー.webp", "answerText": "スバル サンバー キッチントレーラー" },
	{ "questionImage": "images/スバル サンバー ケーキカー.webp", "answerText": "スバル サンバー ケーキカー" },
	{ "questionImage": "images/スバル フォレスター 消防指揮車.webp", "answerText": "スバル フォレスター 消防指揮車" },
	{ "questionImage": "images/スバル レヴォーグ.webp", "answerText": "スバル レヴォーグ" },
	{ "questionImage": "images/スーパーアンビュランス.webp", "answerText": "スーパーアンビュランス" },
	{ "questionImage": "images/スーパーアンビュランス（ロング）.webp", "answerText": "スーパーアンビュランス（ロング）" },
	{ "questionImage": "images/ダイハツ ハイゼット JAF ロードサービスカー.webp", "answerText": "ダイハツ ハイゼット JAF ロードサービスカー" },
	{ "questionImage": "images/ダイハツ ムーヴ キャンバス.webp", "answerText": "ダイハツ ムーヴ キャンバス" },
	{ "questionImage": "images/ダイハツ ロッキー パトロールカー.webp", "answerText": "ダイハツ ロッキー パトロールカー" },
	{ "questionImage": "images/テスラ モデル 3.webp", "answerText": "テスラ モデル 3" },
	{ "questionImage": "images/テスラ モデル Ｙ.webp", "answerText": "テスラ モデル Ｙ" },
	{ "questionImage": "images/トヨタ GR スープラ.webp", "answerText": "トヨタ GR スープラ" },
	{ "questionImage": "images/トヨタ GRカローラ.webp", "answerText": "トヨタ GRカローラ" },
	{ "questionImage": "images/トヨタ アルファード.webp", "answerText": "トヨタ アルファード" },
	{ "questionImage": "images/トヨタ クラウン アスリート.webp", "answerText": "トヨタ クラウン アスリート" },
	{ "questionImage": "images/トヨタ クラウン コンフォート タクシー.webp", "answerText": "トヨタ クラウン コンフォート タクシー" },
	{ "questionImage": "images/トヨタ クラウン セダン.webp", "answerText": "トヨタ クラウン セダン" },
	{ "questionImage": "images/トヨタ クラウン パトロールカー.webp", "answerText": "トヨタ クラウン パトロールカー" },
	{ "questionImage": "images/トヨタ クラウン 個人タクシー.webp", "answerText": "トヨタ クラウン 個人タクシー" },
	{ "questionImage": "images/トヨタ クラウン.webp", "answerText": "トヨタ クラウン" },
	{ "questionImage": "images/トヨタ コースター ようちえんバス.webp", "answerText": "トヨタ コースター ようちえんバス" },
	{ "questionImage": "images/トヨタ シエンタ.webp", "answerText": "トヨタ シエンタ" },
	{ "questionImage": "images/トヨタ センチュリー.webp", "answerText": "トヨタ センチュリー" },
	{ "questionImage": "images/トヨタ タウンエース ハンバーガーカー.webp", "answerText": "トヨタ タウンエース ハンバーガーカー" },
	{ "questionImage": "images/トヨタ ダイナ レッカー車.webp", "answerText": "トヨタ ダイナ レッカー車" },
	{ "questionImage": "images/トヨタ ダイナ 清掃車.webp", "answerText": "トヨタ ダイナ 清掃車" },
	{ "questionImage": "images/トヨタ ノア.webp", "answerText": "トヨタ ノア" },
	{ "questionImage": "images/トヨタ ハイエース.webp", "answerText": "トヨタ ハイエース" },
	{ "questionImage": "images/トヨタ ハイメディック救急車.webp", "answerText": "トヨタ ハイメディック救急車" },
	{ "questionImage": "images/トヨタ ハイラックス.webp", "answerText": "トヨタ ハイラックス" },
	{ "questionImage": "images/トヨタ プリウス.webp", "answerText": "トヨタ プリウス" },
	{ "questionImage": "images/トヨタ ヤリスクロス GR SPORT.webp", "answerText": "トヨタ ヤリスクロス GR SPORT" },
	{ "questionImage": "images/トヨタ ランドクルーザー.webp", "answerText": "トヨタ ランドクルーザー" },
	{ "questionImage": "images/トヨタ ヴォクシー.webp", "answerText": "トヨタ ヴォクシー" },
	{ "questionImage": "images/トヨタ ＳＯＲＡ.webp", "answerText": "トヨタ ＳＯＲＡ" },
	{ "questionImage": "images/トヨタＬ＆Ｆ ジェネオ.webp", "answerText": "トヨタＬ＆Ｆ ジェネオ" },
	{ "questionImage": "images/トーマスランドエクスプレス.webp", "answerText": "トーマスランドエクスプレス" },
	{ "questionImage": "images/ドクターヘリ.webp", "answerText": "ドクターヘリ" },
	{ "questionImage": "images/ハマー H2 リムジン.webp", "answerText": "ハマー H2 リムジン" },
	{ "questionImage": "images/ハマー H2.webp", "answerText": "ハマー H2" },
	{ "questionImage": "images/フェラーリ デイトナ SP3.webp", "answerText": "フェラーリ デイトナ SP3" },
	{ "questionImage": "images/フォード マスタング エコブースト ファストバック.webp", "answerText": "フォード マスタング エコブースト ファストバック" },
	{ "questionImage": "images/ブガッティ シロン ピュアスポーツ.webp", "answerText": "ブガッティ シロン ピュアスポーツ" },
	{ "questionImage": "images/プロパンガス配送車.webp", "answerText": "プロパンガス配送車" },
	{ "questionImage": "images/ホンダ N-BOX.webp", "answerText": "ホンダ N-BOX" },
	{ "questionImage": "images/ホンダ NSX.webp", "answerText": "ホンダ NSX" },
	{ "questionImage": "images/ホンダ アコード.webp", "answerText": "ホンダ アコード" },
	{ "questionImage": "images/ホンダ シビック TYPE R レースコントロールカー.webp", "answerText": "ホンダ シビック TYPE R レースコントロールカー" },
	{ "questionImage": "images/ホンダ シビック TYPE R.webp", "answerText": "ホンダ シビック TYPE R" },
	{ "questionImage": "images/ホンダ フリード.webp", "answerText": "ホンダ フリード" },
	{ "questionImage": "images/マツダ CX-5 道路パトロールカー.webp", "answerText": "マツダ CX-5 道路パトロールカー" },
	{ "questionImage": "images/マツダ CX-60.webp", "answerText": "マツダ CX-60" },
	{ "questionImage": "images/ミスタードーナツ 移動販売車.webp", "answerText": "ミスタードーナツ 移動販売車" },
	{ "questionImage": "images/メルセデス-AMG GT R.webp", "answerText": "メルセデス-AMG GT R" },
	{ "questionImage": "images/メルセデスベンツ シターロ 京成 連節バス.webp", "answerText": "メルセデスベンツ シターロ 京成 連節バス" },
	{ "questionImage": "images/メルセデスベンツ Ｇクラス.webp", "answerText": "メルセデスベンツ Ｇクラス" },
	{ "questionImage": "images/モリタ 13mブーム付多目的消防ポンプ自動車 MVF.webp", "answerText": "モリタ 13mブーム付多目的消防ポンプ自動車 MVF" },
	{ "questionImage": "images/モリタ CD-I型 ポンプ消防車.webp", "answerText": "モリタ CD-I型 ポンプ消防車" },
	{ "questionImage": "images/ヤンマー トラクター YT5113.webp", "answerText": "ヤンマー トラクター YT5113" },
	{ "questionImage": "images/ランボルギーニ アヴェンタドール ＳＶＪ.webp", "answerText": "ランボルギーニ アヴェンタドール ＳＶＪ" },
	{ "questionImage": "images/ランボルギーニ ウラカン STO.webp", "answerText": "ランボルギーニ ウラカン STO" },
	{ "questionImage": "images/ランボルギーニ カウンタック LPI 800-4.webp", "answerText": "ランボルギーニ カウンタック LPI 800-4" },
	{ "questionImage": "images/ランボルギーニ レヴエルト.webp", "answerText": "ランボルギーニ レヴエルト" },
	{ "questionImage": "images/ランボルギーニ ヴェネーノ.webp", "answerText": "ランボルギーニ ヴェネーノ" },
	{ "questionImage": "images/レクサス IS 350 F SPORT.webp", "answerText": "レクサス IS 350 F SPORT" },
	{ "questionImage": "images/ロンドンバス.webp", "answerText": "ロンドンバス" },
	{ "questionImage": "images/三菱 アウトランダーPHEV.webp", "answerText": "三菱 アウトランダーPHEV" },
	{ "questionImage": "images/三菱 デリカミニ.webp", "answerText": "三菱 デリカミニ" },
	{ "questionImage": "images/三菱 トライトン.webp", "answerText": "三菱 トライトン" },
	{ "questionImage": "images/三菱ふそう スーパーグレート キャリアカー.webp", "answerText": "三菱ふそう スーパーグレート キャリアカー" },
	{ "questionImage": "images/三菱ふそう スーパーグレート コンクリートポンプ車.jpg", "answerText": "三菱ふそう スーパーグレート コンクリートポンプ車" },
	{ "questionImage": "images/三菱ふそう スーパーグレート ポールトレーラー.webp", "answerText": "三菱ふそう スーパーグレート ポールトレーラー" },
	{ "questionImage": "images/三菱ふそう スーパーグレート.webp", "answerText": "三菱ふそう スーパーグレート" },
	{ "questionImage": "images/京阪電車きかんしゃトーマス号2020.webp", "answerText": "京阪電車きかんしゃトーマス号2020" },
	{ "questionImage": "images/光岡 バディ.webp", "answerText": "光岡 バディ" },
	{ "questionImage": "images/凍結防止剤散布車 NWS60BC5.webp", "answerText": "凍結防止剤散布車 NWS60BC5" },
	{ "questionImage": "images/前田製作所 かにクレーン.webp", "answerText": "前田製作所 かにクレーン" },
	{ "questionImage": "images/動物運搬車.webp", "answerText": "動物運搬車" },
	{ "questionImage": "images/名古屋市消防局 30m級先端屈折式はしご車.webp", "answerText": "名古屋市消防局 30m級先端屈折式はしご車" },
	{ "questionImage": "images/堺市消防局 特別高度救助工作車.webp", "answerText": "堺市消防局 特別高度救助工作車" },
	{ "questionImage": "images/家畜運搬車.webp", "answerText": "家畜運搬車" },
	{ "questionImage": "images/山岳救助車.webp", "answerText": "山岳救助車" },
	{ "questionImage": "images/市原市消防局 スクラムフォース.webp", "answerText": "市原市消防局 スクラムフォース" },
	{ "questionImage": "images/広島電鉄 650形.webp", "answerText": "広島電鉄 650形" },
	{ "questionImage": "images/日産 GT-R パトロールカー.webp", "answerText": "日産 GT-R パトロールカー" },
	{ "questionImage": "images/日産 NISSAN GT-R NISMO.webp", "answerText": "日産 NISSAN GT-R NISMO" },
	{ "questionImage": "images/日産 NISSAN GT-R.webp", "answerText": "日産 NISSAN GT-R" },
	{ "questionImage": "images/日産 NV350キャラバン 救急車.webp", "answerText": "日産 NV350キャラバン 救急車" },
	{ "questionImage": "images/日産 エクストレイル.webp", "answerText": "日産 エクストレイル" },
	{ "questionImage": "images/日産 サクラ.webp", "answerText": "日産 サクラ" },
	{ "questionImage": "images/日産 スカイライン GT-R パトロールカー.webp", "answerText": "日産 スカイライン GT-R パトロールカー" },
	{ "questionImage": "images/日産 スカイライン GT-R（BNR32）.webp", "answerText": "日産 スカイライン GT-R（BNR32）" },
	{ "questionImage": "images/日産 スカイライン パトロールカー.webp", "answerText": "日産 スカイライン パトロールカー" },
	{ "questionImage": "images/日産 セレナ.webp", "answerText": "日産 セレナ" },
	{ "questionImage": "images/日産 フェアレディZ NISMO GT500.webp", "answerText": "日産 フェアレディZ NISMO GT500" },
	{ "questionImage": "images/日産 フェアレディZ NISMO パトロールカー.webp", "answerText": "日産 フェアレディZ NISMO パトロールカー" },
	{ "questionImage": "images/日産 フェアレディZ NISMO.webp", "answerText": "日産 フェアレディZ NISMO" },
	{ "questionImage": "images/日立建機 ホイールローダ ZW220.webp", "answerText": "日立建機 ホイールローダ ZW220" },
	{ "questionImage": "images/日立建機 マカダムローラ ZC125M-5.webp", "answerText": "日立建機 マカダムローラ ZC125M-5" },
	{ "questionImage": "images/日立建機 リジッドダンプトラック EH3500AC-3.webp", "answerText": "日立建機 リジッドダンプトラック EH3500AC-3" },
	{ "questionImage": "images/日立建機 ローディングショベル EX8000-7.webp", "answerText": "日立建機 ローディングショベル EX8000-7" },
	{ "questionImage": "images/日立建機 双腕作業機 アスタコ.webp", "answerText": "日立建機 双腕作業機 アスタコ" },
	{ "questionImage": "images/日立建機 油圧ショベル ZX210-7 SLF と重機搬送車.webp", "answerText": "日立建機 油圧ショベル ZX210-7 SLF と重機搬送車" },
	{ "questionImage": "images/日野はしご付消防車 (モリタ・スーパージャイロラダー).webp", "answerText": "日野はしご付消防車 (モリタ・スーパージャイロラダー)" },
	{ "questionImage": "images/日野ポンチョ.webp", "answerText": "日野ポンチョ" },
	{ "questionImage": "images/横浜市消防局 特別高度救助部隊 機動けん引工作車.webp", "answerText": "横浜市消防局 特別高度救助部隊 機動けん引工作車" },
	{ "questionImage": "images/水族館トラック.webp", "answerText": "水族館トラック" },
	{ "questionImage": "images/江ノ電300形.webp", "answerText": "江ノ電300形" },
	{ "questionImage": "images/海上保安庁 スーパーピューマ H225.webp", "answerText": "海上保安庁 スーパーピューマ H225" },
	{ "questionImage": "images/自衛隊 重装輪回収車.webp", "answerText": "自衛隊 重装輪回収車" },
	{ "questionImage": "images/自衛隊 高機動車.webp", "answerText": "自衛隊 高機動車" },
	{ "questionImage": "images/菱ふそう スーパーグレート H５系新幹線はやぶさ 輸送車.webp", "answerText": "菱ふそう スーパーグレート H５系新幹線はやぶさ 輸送車" },
	{ "questionImage": "images/西濃運輸 カンガルー便トラック.webp", "answerText": "西濃運輸 カンガルー便トラック" },
	{ "questionImage": "images/那覇市消防局 ハイパーミストブロアー車.webp", "answerText": "那覇市消防局 ハイパーミストブロアー車" },
	{ "questionImage": "images/郵便車.webp", "answerText": "郵便車" },
	{ "questionImage": "images/ＮＸ 日本通運 ウイングトレーラ.webp", "answerText": "ＮＸ 日本通運 ウイングトレーラ" },
	{ "questionImage": "images/ＵＤトラックス クオン トレーラーダンプ.webp", "answerText": "ＵＤトラックス クオン トレーラーダンプ" },
	{ "questionImage": "images/ＵＤトラックス クオン.webp", "answerText": "ＵＤトラックス クオン" }
];
