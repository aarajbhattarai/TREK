import type { TranslationStrings } from '../types';

// English fallback until 'ja' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'この画面のヘルプ',
  'help.center.title': 'ヘルプ',
  'help.center.onThisScreen': 'この画面について',
  'help.center.screens': '画面',
  'help.center.thisScreen': 'この画面',
  'help.center.subScreens': 'サブ画面: {count}',
  'help.center.subScreensLabel': 'サブ画面',
  'help.center.guidesCount': 'ガイド {count} 件',
  'help.center.goToScreen': '{screen} を開く',
  'help.center.overview': '概要',
  'help.center.howTo': '操作ガイド',
  'help.center.searchPlaceholder': 'ガイドとドキュメントを検索…',
  'help.center.searchEmpty': '「{query}」に一致するものはありません。',
  'help.center.searchGuides': 'ガイド',
  'help.center.searchDocs': 'ドキュメント',
  'help.center.searchError': '現在、検索を利用できません。',
  'help.center.back': '戻る',
  'help.center.close': 'ヘルプを閉じる',
  'help.center.steps': '{count}ステップ',
  'help.center.step': 'ステップ{n}',
  'help.center.stepsLabel': 'ステップ',
  'help.center.stepOf': 'ステップ {n} / {total}',
  'help.center.screenshot': 'スクリーンショット',
  'help.center.result': '結果',
  'help.center.tips': '知っておくと便利',
  'help.center.related': '関連',
  'help.center.openDocs': 'ヘルプ＆ドキュメントで開く',
  'help.center.docsSection': 'ドキュメント',
  'help.center.noContext': 'この画面のガイドはまだありません。',
  'help.center.noContextHint': 'ドキュメントを検索するか、探していた内容を教えてください。',
  'help.center.feedback': '足りない内容がありますか？',
  'help.center.feedbackLink': 'GitHubで教えてください',
  'help.center.discord': 'Discordで質問する',
  'help.center.quick': 'かんたん',
  'help.center.guide': 'ガイド',
  'help.center.tour': '操作デモ',
  'help.center.imageAlt': '「{title}」のステップ{n}',

  // ctx
  'help.ctx.dashboard.title': 'ダッシュボード',
  'help.ctx.dashboard.summary':
    'ダッシュボードはすべての旅行への入口です。上部の搭乗券は進行中または次の旅行を大きく表示し、その下の行はこれまでの旅の記録を集計し、カードには計画中、アーカイブ済み、完了済みの旅行がすべて並びます。',
  'help.ctx.dashboard.bullet.1':
    '搭乗券：進行中または次の旅行を、日程・同行者・場所・カウントダウンとともに表示します。クリックすると旅行が開きます。',
  'help.ctx.dashboard.bullet.2': '旅の統計：訪れた国、旅行数、旅の日数、飛行距離を、すべての旅行にわたって集計します。',
  'help.ctx.dashboard.bullet.3':
    '旅行カード：「予定」「アーカイブ済み」「完了」で絞り込み、グリッドまたはリストで表示します。カードにマウスを乗せると編集・複製・アーカイブ・削除ができます。',
  'help.ctx.dashboard.bullet.4':
    '右側のウィジェット：通貨換算、世界時計、今後の予約、コレクション。それぞれ非表示にできます。',
  'help.ctx.dashboard.bullet.5': '「新しい旅行」カードと右下のボタンは、どちらも新しい旅行を作成します。',

  // create-trip
  'help.guide.create-trip.title': '旅行を作成する',
  'help.guide.create-trip.goal': '名前、日程、カバー写真を付けて新しい旅行を始めます。',
  'help.guide.create-trip.step.1':
    '「新しい旅行」をクリックします。旅行一覧の末尾にあるカードと右下のボタンは同じ働きをします。',
  'help.guide.create-trip.step.2': '旅行に名前を付けます。必須なのはこの項目だけで、ほかはあとから追加できます。',
  'help.guide.create-trip.step.3':
    '開始日と終了日を選びます。TREKは日付ごとに1日分を作成するので、旅程をすぐに埋めていけます。',
  'help.guide.create-trip.step.4':
    '任意：カバー写真を追加します。自分の写真をアップロードするか、ドラッグするか、Unsplashで目的地を検索します。',
  'help.guide.create-trip.step.5': '「新しい旅行を作成」をクリックします。',
  'help.guide.create-trip.result': '旅行がダッシュボードに表示されます。次の旅行であれば、上部の搭乗券に表示されます。',
  'help.guide.create-trip.tip.1':
    '日程はあとから変更できます。すでに予約がある場合、TREKは予約も日程と一緒に動かすかどうかを確認します。',
  'help.guide.create-trip.tip.2':
    'ここで選ぶ旅行の通貨は、すべての費用の換算先になります。目的地の通貨を選んでください。',

  // edit-trip
  'help.guide.edit-trip.title': '旅行を編集する',
  'help.guide.edit-trip.goal': '旅行の名前を変えたり、日程を変更したり、設定を調整したりします。',
  'help.guide.edit-trip.step.1': '旅行カード（または搭乗券）にマウスを乗せ、鉛筆アイコンをクリックします。',
  'help.guide.edit-trip.step.2': '必要な項目を変更します：名前、説明、日程、カバー、通貨、リマインダー、メンバー。',
  'help.guide.edit-trip.step.3': '「更新」をクリックします。',
  'help.guide.edit-trip.result': 'カードはすぐに更新され、旅行のすべてのメンバーに反映されます。',
  'help.guide.edit-trip.tip.1':
    'すでに予約のある旅行の日程を動かすと、予約も一緒に動かすかどうかを尋ねる2つ目のステップが表示されます。',

  // cover-image
  'help.guide.cover-image.title': 'カバー写真を設定する',
  'help.guide.cover-image.goal': 'カードと搭乗券に表示される画像を旅行に設定します。',
  'help.guide.cover-image.step.1': 'カードの鉛筆アイコンから旅行の編集フォームを開きます。',
  'help.guide.cover-image.step.2':
    '「カバー画像」で写真をドロップするか、クリックしてアップロードするか、Unsplash検索に目的地を入力します。',
  'help.guide.cover-image.step.3': '写真を選び、「更新」をクリックします。',
  'help.guide.cover-image.result': '写真は旅行とともに保存され、旅行が表示されるすべての場所に表示されます。',
  'help.guide.cover-image.tip.1':
    'Unsplash検索の写真には自動的にクレジットが付きます。自分でアップロードした写真はあなたのサーバーに残ります。',

  // duplicate-trip
  'help.guide.duplicate-trip.title': '旅行を複製する',
  'help.guide.duplicate-trip.goal': '既存の旅行をテンプレートとして新しい旅行に使います。',
  'help.guide.duplicate-trip.step.1': 'カードにマウスを乗せ、複製アイコンをクリックします。',
  'help.guide.duplicate-trip.step.2': 'コピーされる内容とされない内容を確認し、確定します。',
  'help.guide.duplicate-trip.result': '元の旅行の隣にコピーが表示されます。名前と日程を変えてすぐ使えます。',
  'help.guide.duplicate-trip.tip.1':
    '日程、場所、予約、予算項目、持ち物リスト、日ごとのメモはコピーされます。メンバー、チャット、投票、ファイル、共有リンクはコピーされません。',

  // archive-trip
  'help.guide.archive-trip.title': '旅行をアーカイブ・復元する',
  'help.guide.archive-trip.goal': '旅行を削除せずに片付け、あとで戻します。',
  'help.guide.archive-trip.step.1': 'カードにマウスを乗せ、「アーカイブ」をクリックします。',
  'help.guide.archive-trip.step.2': 'カード上部のフィルターを「アーカイブ済み」に切り替えると再び表示されます。',
  'help.guide.archive-trip.step.3': 'カードの「復元」をクリックすると「予定」に戻ります。',
  'help.guide.archive-trip.result':
    'アーカイブした旅行のデータはすべて残ります。ダッシュボードと全旅行のカレンダーフィードに表示されなくなるだけです。',

  // delete-trip
  'help.guide.delete-trip.title': '旅行を削除する',
  'help.guide.delete-trip.goal': '旅行を完全に削除します。',
  'help.guide.delete-trip.step.1': 'カードにマウスを乗せ、ゴミ箱アイコンをクリックします。',
  'help.guide.delete-trip.step.2': '確定します。ダイアログに旅行名が表示されるので、間違いがないか確認できます。',
  'help.guide.delete-trip.result':
    '旅行とその日程、場所、予約、ファイルが削除されます。元に戻せないので、迷う場合はアーカイブしてください。',

  // filter-and-view
  'help.guide.filter-and-view.title': '完了した旅行を探す・グリッドとリストを切り替える',
  'help.guide.filter-and-view.goal': '完了またはアーカイブした旅行を表示し、好みのレイアウトを選びます。',
  'help.guide.filter-and-view.step.1':
    'カード上部の「予定」「アーカイブ済み」「完了」を使います。終了日を過ぎた旅行はすべて「完了」に入ります。',
  'help.guide.filter-and-view.step.2':
    'リストアイコンをクリックするとコンパクトなリスト表示になり、もう一度クリックするとグリッドに戻ります。',
  'help.guide.filter-and-view.result': 'ダッシュボードはこの端末でのレイアウトを記憶します。',

  // calendar-feed
  'help.guide.calendar-feed.title': 'すべての旅行をカレンダーで購読する',
  'help.guide.calendar-feed.goal': '進行中のすべての旅行の日程と予約を、カレンダーアプリで常に同期して表示します。',
  'help.guide.calendar-feed.step.1': '表示切り替えの隣にあるカレンダーアイコンをクリックします。',
  'help.guide.calendar-feed.step.2':
    '「Enable calendar subscription」をクリックします。TREKが非公開のフィードリンクを生成します。',
  'help.guide.calendar-feed.step.3':
    'ボタン（Google、Apple、Outlook）でフィードを追加するか、URL購読に対応したカレンダーアプリにリンクをコピーします。',
  'help.guide.calendar-feed.result':
    '進行中のすべての旅行がカレンダーに表示され、自動で更新されます。アーカイブ済みの旅行と、終了から90日以上経った旅行は含まれません。',
  'help.guide.calendar-feed.tip.1':
    'リンクは秘密の情報です。リンクを知っている人は誰でもフィードを読めます。漏れた場合は同じダイアログから無効にしてください。',

  // widgets
  'help.guide.widgets.title': 'ダッシュボードのウィジェットを選ぶ',
  'help.guide.widgets.goal': '統計の行と右側のウィジェットの表示・非表示を切り替えます。',
  'help.guide.widgets.step.1': '右上のアバターメニューを開き、「設定」を選びます。',
  'help.guide.widgets.step.2': '「Appearance」タブに切り替えます。',
  'help.guide.widgets.step.3':
    '「Dashboard widgets」で各ウィジェットをオン・オフします。デスクトップとモバイルは別々に設定します。',
  'help.guide.widgets.step.4': 'ダッシュボードに戻ります。変更はすぐに反映されます。',
  'help.guide.widgets.result':
    '非表示にしたウィジェットの分だけ旅行のスペースが広がります。右の列をすべてオフにするとレイアウトが中央寄せになります。',
  'help.guide.widgets.link': '外観設定を開く',

  // currency-widget
  'help.guide.currency-widget.title': '通貨を換算する',
  'help.guide.currency-widget.goal': '最新のレートで2つの通貨の間で金額を換算します。',
  'help.guide.currency-widget.step.1': '金額を入力し、2つの通貨を選びます。',
  'help.guide.currency-widget.step.2': '間の矢印で通貨ペアを入れ替え、円形の矢印でレートを更新します。',
  'help.guide.currency-widget.result': '通貨ペアはアカウントに保存されるので、どの端末でも同じです。',
  'help.guide.currency-widget.tip.1': 'レートは欧州中央銀行のもので、1日1回更新されます。',

  // timezones-widget
  'help.guide.timezones-widget.title': '世界時計を追加する',
  'help.guide.timezones-widget.goal': '目的地の現地時刻を手元で確認します。',
  'help.guide.timezones-widget.step.1': '「タイムゾーン」ウィジェットの + をクリックし、都市を検索します。',
  'help.guide.timezones-widget.step.2': '時計の隣の × で削除できます。',
  'help.guide.timezones-widget.result': '時計はアカウントに保存されます。',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacayはあなた専用の休暇プランナーです。年間の休暇日数、記録済みの日、残りの日数を管理します。グリッドは1年全体をひと目で表示し、サイドバーには年の切り替え、一緒に計画する人、共有されたカレンダー、凡例、休暇の付与日数が並びます。',
  'help.ctx.vacay.bullet.1':
    '年間グリッド：12枚の月カード、1日1セル。クリックで記録または取り消しができます。小さな青い点は、すでに旅行が入っている日を示します。',
  'help.ctx.vacay.bullet.2':
    '下部のツールバー：「休暇」モードまたは「会社休日」モードに加え、クリックで何を記録するかを変える「半休」と「代休・フレックス」の切り替え。',
  'help.ctx.vacay.bullet.3': '「付与日数」：その年の日数、使用済みと残り、前期からの繰り越しを含みます。',
  'help.ctx.vacay.bullet.4':
    '「人物」はあなたのプランと統合された人で、それぞれ色があります。「共有カレンダー」は他の人の休みを読み取り専用のリングで示します。',
  'help.ctx.vacay.bullet.5':
    '「設定」では週末、週の始まり、繰り越し、休暇年度、会社休日、祝日や学校休暇のカレンダーを扱います。',
  // log-day
  'help.guide.log-day.title': '休暇日を記録する',
  'help.guide.log-day.goal': '年間グリッドで休みの日を記録し、残日数が変わるのを確認します。',
  'help.guide.log-day.step.1':
    '下部のツールバーを確認します。あなたの色の左のボタンは、クリックであなたの休暇日を記録することを示します。',
  'help.guide.log-day.step.2':
    'いずれかの月カードの日をクリックします。あなたの色で塗られ、「使用済み」が1日増えます。',
  'help.guide.log-day.step.3': '同じ日をもう一度クリックすると取り消せます。',
  'help.guide.log-day.result':
    '日が記録され、「日」「使用済み」「残り」がすぐに更新され、プランを統合している人全員にリアルタイムで反映されます。',
  'help.guide.log-day.tip.1': '「設定」で「週末を除外」がオンの間は、週末は記録できません。',
  'help.guide.log-day.tip.2':
    'セルの青い点は、あなたの旅行がその日に重なっていることを示します。休暇と旅行が重なる場所がわかります。',
  // half-day
  'help.guide.half-day.title': '半日を記録する',
  'help.guide.half-day.goal': '1日分の付与を使わずに午後だけ休みます。',
  'help.guide.half-day.step.1': 'ツールバーで「半休」をオンにします。オレンジの点は、グリッドで半日に付くマークです。',
  'help.guide.half-day.step.2': '日をクリックします。0.5として記録され、角にオレンジの点が付きます。',
  'help.guide.half-day.step.3':
    '終わったら「半休」をオフに戻します。別の設定で半日をクリックすると、その場で変換されます。',
  'help.guide.half-day.result':
    '「使用済み」が0.5増えます。「半休」と「代休・フレックス」は独立しているので、半日の代休も可能です。',
  'help.guide.half-day.tip.1': 'ツールバーには次のクリックで付くマークが常に表示されるので、記録前に確認できます。',
  // comp-day
  'help.guide.comp-day.title': '代休やフレックスを記録する',
  'help.guide.comp-day.goal': '休暇日数を消費しない代休を取ります。',
  'help.guide.comp-day.step.1':
    'ツールバーで「代休・フレックス」をオンにします。斜線のディスクは、グリッドでの代休日の見た目です。',
  'help.guide.comp-day.step.2': '日をクリックします。塗りつぶしではなく、あなたの色の斜線で表示されます。',
  'help.guide.comp-day.result': '代休日は付与日数のタイルの横に別途集計され、「残り」を減らすことはありません。',
  'help.guide.comp-day.tip.1': '残業の振替、フレックス、代休：休みだけれど休暇ではないものはすべてここに入ります。',
  // entitlement
  'help.guide.entitlement.title': '付与日数を設定する',
  'help.guide.entitlement.goal': '年間の休暇日数をVacayに登録します。',
  'help.guide.entitlement.step.1': 'サイドバーの「付与日数」にある「日」タイルをクリックします。',
  'help.guide.entitlement.step.2': '日数を入力してEnterを押します。',
  'help.guide.entitlement.result': '「残り」は付与日数、繰り越し、使用済みの日数から再計算されます。',
  'help.guide.entitlement.tip.1': '付与日数は年ごとに独立しているので、ここでの変更は選択中の年にだけ反映されます。',
  // years
  'help.guide.years.title': '年を追加・切り替える',
  'help.guide.years.goal': '来年を先に計画したり、昨年を振り返ったりします。',
  'help.guide.years.step.1': '年の右の＋で翌年を、左の＋で前年を追加します。',
  'help.guide.years.step.2': '矢印または下の年チップで年を切り替えます。',
  'help.guide.years.step.3':
    '年を削除するには、チップにマウスを乗せて小さなマイナスをクリックします。その年の記録も消えるので、慎重に確認してください。',
  'help.guide.years.result': '各年は独自の付与日数と記録を保持し、繰り越しがそれらをつなぎます。',
  // company-holidays
  'help.guide.company-holidays.title': '会社休日を設定する',
  'help.guide.company-holidays.goal': '会社全体が休みの日を、誰の付与日数も使わずにブロックします。',
  'help.guide.company-holidays.step.1':
    '「設定」を開き、「会社休日」がオンになっていることを確認します。既定でオンで、オンの間だけツールバーにモードが表示されます。',
  'help.guide.company-holidays.step.2': 'グリッドに戻り、ツールバーを「会社休日」モードに切り替えます。',
  'help.guide.company-holidays.step.3': '日をクリックします。琥珀色になり、凡例に表示されます。',
  'help.guide.company-holidays.result':
    '会社休日はプランを統合している全員に表示され、「残り」を減らすことはありません。',
  'help.guide.company-holidays.tip.1':
    '統合しているメンバーは誰でも会社休日を編集できるので、誰が管理するか決めておきましょう。',
  // public-holidays
  'help.guide.public-holidays.title': '祝日を表示する',
  'help.guide.public-holidays.goal': '国や地域の祝日をグリッドに表示します。',
  'help.guide.public-holidays.step.1': '「設定」を開き、「祝日」をオンにします。',
  'help.guide.public-holidays.step.2':
    '「カレンダーを追加」をクリックし、国と、必要なら地域を選びます。色とラベルも設定できます。',
  'help.guide.public-holidays.step.3': '「設定」を閉じます。祝日がグリッドと凡例に表示されます。',
  'help.guide.public-holidays.result': '祝日はカレンダーの色で表示され、付与日数から差し引かれることはありません。',
  'help.guide.public-holidays.tip.1':
    '複数のカレンダーを追加できます。たとえば自分の地域と、統合している同僚の地域など。',
  // school-holidays
  'help.guide.school-holidays.title': '学校休暇を表示する',
  'help.guide.school-holidays.goal': '地域の学校休暇を自分の休みと並べて確認します。',
  'help.guide.school-holidays.step.1': '「設定」を開き、「School Holidays」をオンにします。',
  'help.guide.school-holidays.step.2':
    '「カレンダーを追加」をクリックして国を選びます。国がカレンダーを分けている場合は地域やグループも選びます。',
  'help.guide.school-holidays.step.3': '「設定」を閉じます。各休暇期間の日の下に色付きのバンドが表示されます。',
  'help.guide.school-holidays.result': '学校休暇は表示のみで、誰の付与日数も減らしません。',
  'help.guide.school-holidays.tip.1':
    '地域が見つからない場合は、管理者が「管理」→「カスタマイズ」→「学校の休暇」で手動管理できます。',
  // weekends
  'help.guide.weekends.title': '週末をブロックし、週の始まりを設定する',
  'help.guide.weekends.goal': '週末を集計から外し、慣れた曜日から週を始めます。',
  'help.guide.weekends.step.1': '「設定」を開きます。',
  'help.guide.weekends.step.2': '「週末を除外」をオンにして、週末とみなす曜日を選びます。',
  'help.guide.weekends.step.3': '「週の開始」で月曜または日曜を選びます。',
  'help.guide.weekends.result': 'ブロックされた日はグリッドでグレー表示になり、誤って記録できません。',
  // leave-year
  'help.guide.leave-year.title': '休暇年度を設定する',
  'help.guide.leave-year.goal': '1月〜12月ではなく、会計年度や入社日を起点に付与日数を数えます。',
  'help.guide.leave-year.step.1': '「設定」を開き、「休暇年度」を探します。',
  'help.guide.leave-year.step.2': '「暦年」「会計年度」（開始月日を指定）「入社日」（入社日を指定）から選びます。',
  'help.guide.leave-year.result':
    '付与日数、使用済み、繰り越しがその期間に従い、グリッドはその最初の月から始まります。',
  'help.guide.leave-year.tip.1': 'この設定は個人ごとです。統合プランでも、各自が自分の休暇年度と数値を保持します。',
  // carry-over
  'help.guide.carry-over.title': '未使用日を繰り越す',
  'help.guide.carry-over.goal': '期間末の残りを次の期間に加えます。',
  'help.guide.carry-over.step.1': '「設定」を開きます。',
  'help.guide.carry-over.step.2': '「繰越」をオンにします。',
  'help.guide.carry-over.result': '繰り越し分は全年度で再計算され、付与日数の下に表示されます。',
  'help.guide.carry-over.tip.1': 'オフにすると、すべての繰り越し残高がゼロに戻ります。',
  // invite
  'help.guide.invite.title': '誰かと一緒に計画する',
  'help.guide.invite.goal': '他のTREKユーザーとプランを統合し、お互いの休みを1つのグリッドで見ます。',
  'help.guide.invite.step.1': '「人物」パネルの人物アイコンをクリックします。',
  'help.guide.invite.step.2': 'ユーザーを選んで招待を送ります。',
  'help.guide.invite.step.3': '相手に通知が届き、承認します。それまで招待は保留として表示されます。',
  'help.guide.invite.result':
    '両方のプランが統合されます。それぞれに色が付き、お互いの日を記録でき、すべてがリアルタイムで同期します。',
  'help.guide.invite.tip.1':
    '統合を解除するには、「設定」の「統合を解除」を使います。各自の記録は自分のプランに戻ります。',
  'help.guide.invite.tip.2': '相手に自分の休みを見せるだけでよければ、統合ではなくカレンダーを共有してください。',
  // share-calendar
  'help.guide.share-calendar.title': 'カレンダーを読み取り専用で共有する',
  'help.guide.share-calendar.goal': 'プランへの編集権を渡さずに、いつ休みかを相手に見せます。',
  'help.guide.share-calendar.step.1': '「共有カレンダー」パネルの共有アイコンをクリックします。',
  'help.guide.share-calendar.step.2': 'ユーザーを選んで「共有」をクリックします。承認は不要です。',
  'help.guide.share-calendar.step.3':
    '共有されたカレンダーは同じパネルに表示されます。目のアイコンで非表示に、「共有を停止」で自分の共有を取り消せます。',
  'help.guide.share-calendar.result':
    'あなたの休みは相手のグリッドに色付きのリングとして表示されます。共有した内容は相手側で編集できません。',
  'help.guide.share-calendar.tip.1': '共有と統合は独立しています。一人と統合しながら、他の人に共有することもできます。',
  'help.guide.share-calendar.tip.2': 'リング付きの日にマウスを乗せると、誰がどれだけ休みかがわかります。',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlasは世界地図に描かれたあなたの旅の足跡です。旅行で訪れた国はすべて色で塗られ、TREKを使う前に訪れた国は手動で追加できます。ズームインすると地域が表示され、まだ見たい場所の行きたいリストを作り、下部のガラスのパネルで数字を確認できます。',
  'help.ctx.atlas.bullet.1':
    '地図：訪問済みの国はその国だけの色を保ち、予定の国は破線の輪郭、行きたいリストの国は斜線、それ以外はグレーです。国にマウスを乗せると、その国の旅行、場所、最初と最後の訪問が表示されます。',
  'help.ctx.atlas.bullet.2':
    '上部の検索：国名または場所を入力します。国を選ぶと地図がそこへ移動してポップアップが開き、場所を選ぶとその地域に着地するので、そこを訪問済みにできます。',
  'help.ctx.atlas.bullet.3':
    '右上の「予定の国を表示」：今後の旅行の国を表示します。このスイッチは予定の旅行がある間だけ現れます。',
  'help.ctx.atlas.bullet.4':
    '下部のパネル：「統計」タブには国、旅行、場所、都市、日数、大陸、連続記録が、「行きたいリスト」タブにはこれから先に待っているものが並びます。',
  'help.ctx.atlas.bullet.5':
    '地域：ズームレベル5から地図は州や県の表示に切り替わり、それぞれをクリックして訪問済みにしたり削除したりできます。',
  'help.ctx.atlas.bullet.6':
    'Dawarich：アドオンを接続すると、統計の左側のパネルが記録をもとに行きたい場所にチェックを付け、国を追加します。あなたの確認なしに行われることはありません。',
  // mark-country
  'help.guide.mark-country.title': '国を訪問済みにする',
  'help.guide.mark-country.goal': 'TREKを使う前に行った国を追加して、地図とカウントに含めます。',
  'help.guide.mark-country.step.1': '地図上部の検索ボックスに国名を入力します。',
  'help.guide.mark-country.step.2': '一覧から選びます。地図がそこへ移動し、その国のポップアップが開きます。',
  'help.guide.mark-country.step.3': '「訪問済みにする」を選びます。',
  'help.guide.mark-country.result':
    'その国が地図上で色を持ち、「国」が1つ増えます。この色は固定です。ほかの国を追加しても、残りの色が入れ替わることはありません。',
  'help.guide.mark-country.tip.1':
    '地図上のグレーの国をクリックしても同じポップアップが開きます。小さな国には検索が確実な入口です。',
  'help.guide.mark-country.tip.2':
    '手動で訪問済みにした国は、そこへ行く旅行の日程に関係なく、常に訪問済みとして数えられます。',
  // unmark-country
  'help.guide.unmark-country.title': '訪問済みにした国を削除する',
  'help.guide.unmark-country.goal': '手動で訪問済みにした国を地図から外します。',
  'help.guide.unmark-country.step.1':
    '国を検索して選ぶか、地図上でクリックします。自分で訪問済みにした国では、ポップアップが削除するかどうかを尋ねます。',
  'help.guide.unmark-country.step.2': '「削除」で確定します。',
  'help.guide.unmark-country.result': 'その国はグレーに戻り、カウントから外れます。',
  'help.guide.unmark-country.tip.1':
    'この方法で削除できるのは手動で訪問済みにした国だけです。旅行や場所のある国は、それらがある限り残ります。手動で追加した国では、パネル内の詳細カードにも「削除」があります。',
  // country-details
  'help.guide.country-details.title': 'ある国で何をしたかを見る',
  'help.guide.country-details.goal': '訪問済みの国を開き、そこへ連れて行ってくれた旅行に移動します。',
  'help.guide.country-details.step.1': '訪れたことのある国を検索します。',
  'help.guide.country-details.step.2':
    '選びます。地図がそこへ移動し、下部のパネルに国旗、場所、旅行、そして旅行ごとのチップを載せたカードが現れます。',
  'help.guide.country-details.result': '旅行のチップをクリックすると、その旅行がプランナーで開きます。',
  'help.guide.country-details.tip.1': '地図上で国にマウスを乗せると、同じ数字に加えて最初と最後の訪問が表示されます。',
  // planned-countries
  'help.guide.planned-countries.title': 'これから行く国を表示する',
  'help.guide.planned-countries.goal': '今後の旅行の国を、訪問済みとして数えずに地図に表示します。',
  'help.guide.planned-countries.step.1': '右上の「予定の国を表示」をオンにします。隣の数字は待っている国の数です。',
  'help.guide.planned-countries.step.2':
    '予定の国を検索して選びます。パネルには「予定」と表示され、地図のツールチップにはいつ行くかが示されます。',
  'help.guide.planned-countries.result':
    '予定の国は破線の輪郭で表示されるので、すでに行った場所と見間違えることはありません。スイッチは選択を記憶します。',
  'help.guide.planned-countries.tip.1':
    '国はそこへの旅行が始まった時点で訪問済みになります。進行中の旅行も数えられます。日程のない旅行は統計にまったく含まれません。',
  'help.guide.planned-countries.tip.2': 'このスイッチは今後の旅行がある間だけ存在します。',
  // regions
  'help.guide.regions.title': '地域を訪問済みにする',
  'help.guide.regions.goal': '国より細かく、行ったことのある州、省、都道府県を訪問済みにします。',
  'help.guide.regions.step.1':
    '地域が表示されるまで国をズームインします（ズームレベル5から）。国を検索して選べば十分に近づきます。',
  'help.guide.regions.step.2':
    '地域をクリックします。マウスを乗せると名前が表示され、ポップアップには地域とその国が示されます。',
  'help.guide.regions.step.3': '「訪問済みにする」を選びます。',
  'help.guide.regions.result':
    '地域がその国の色で塗られます。地域を訪問済みにすると、まだ訪問済みでなければ国も訪問済みとして数えられます。',
  'help.guide.regions.tip.1':
    '訪問済みの地域をクリックすると「削除」が表示されます。自分で訪問済みにした地域でも、場所によって訪問済みになった地域でも同じです。',
  'help.guide.regions.tip.2': '実際の場所がある地域は自動的に訪問済みになります。そこでやることはありません。',
  // search-place
  'help.guide.search-place.title': '場所を探してその地域を訪問済みにする',
  'help.guide.search-place.goal':
    '都市がどの地域にあるか知らなくても、ミラノを検索してロンバルディアを訪問済みにできます。',
  'help.guide.search-place.step.1':
    '検索ボックスに都市、名所、または住所を入力します。国が先に表示され、一致する場所はその下の「場所」の見出しの下に並びます。',
  'help.guide.search-place.step.2': '場所を選びます。地図がそこへ移動し、その地点がどの地域にあるかを割り出します。',
  'help.guide.search-place.step.3':
    'その地域に対して「訪問済みにする」を選ぶか、まだこれからなら「行きたいリストに追加」を選びます。',
  'help.guide.search-place.result':
    '地域が訪問済みになり、その国も訪問済みになります。地図データに地域情報のない国では、国そのものが対象になります。',
  'help.guide.search-place.tip.1':
    '場所はTREKのほかの画面と同じ検索から来るので、管理者が設定したプロバイダーに従います。',
  // bucket-country
  'help.guide.bucket-country.title': '国を行きたいリストに入れる',
  'help.guide.bucket-country.goal': '行った国とは別に、行きたい国のリストを地図上で直接管理します。',
  'help.guide.bucket-country.step.1': '国を検索して選ぶか、地図上でクリックします。',
  'help.guide.bucket-country.step.2': '「行きたいリストに追加」を選びます。',
  'help.guide.bucket-country.step.3': '時期がすでに決まっていれば月と年を選び、「行きたいリストに追加」で確定します。',
  'help.guide.bucket-country.result':
    'その国は、訪れたときに持つことになる色の斜線で描かれ、パネルの「行きたいリスト」タブに表示されます。',
  'help.guide.bucket-country.tip.1': '国がリストに入ると、同じポップアップに「行きたいリストから削除」が表示されます。',
  'help.guide.bucket-country.tip.2':
    '予定日ごとに1件です。同じ国を異なる2つの月でリストに入れることはできますが、同じ月で2回は入れられません。',
  // bucket-place
  'help.guide.bucket-place.title': '場所を行きたいリストに追加する',
  'help.guide.bucket-place.goal': '憧れの都市、名所、住所を、座標と予定日付きで保存します。',
  'help.guide.bucket-place.step.1': '下部のパネルで「行きたいリスト」タブを開きます。',
  'help.guide.bucket-place.step.2': '「場所を追加」をクリックします。',
  'help.guide.bucket-place.step.3':
    '名前を入力して検索ボタンを押し、一致する候補を選ぶと、場所に座標が付きます。名前だけ入力して検索を省いても構いません。',
  'help.guide.bucket-place.step.4': '必要なら月と年を選び、「追加」をクリックします。',
  'help.guide.bucket-place.result': 'その場所は予定日とともに行きたいリストの先頭に並びます。隣の×で再び削除できます。',
  'help.guide.bucket-place.tip.1':
    '座標のある項目は、あとで記録がそこにいたことを示したときに、Dawarichがチェックを付けてくれるものです。',
  // stats
  'help.guide.stats.title': '統計を読む',
  'help.guide.stats.goal': 'パネルの数字が何を数え、何を数えないかを知ります。',
  'help.guide.stats.step.1':
    '「国」は実際に行った異なる国の数です。予定の国はその隣に表示され、数には含まれません。「旅行」「場所」「日」はすべての旅行の合計です。「都市」は場所の住所から割り出すため、推定値です。',
  'help.guide.stats.step.2':
    '大陸ごとに訪問済みの国の数が表示され、南極は行ったことがあれば列に加わります。次に連続記録（少なくとも1回の旅行がある連続した年数）と、今年の旅行数が続きます。',
  'help.guide.stats.result': '数字は旅行を計画するにつれて自動的に追従します。ここで手入れするものはありません。',
  'help.guide.stats.tip.1':
    '都市は住所のテキストから読み取るだけで検索はしないため、「Osteria Francescana, Italy」のような短い住所や、都道府県で終わる住所では、都市ではなく地域になることがあります。',
  'help.guide.stats.tip.2': '手動で訪問済みにした国は「国」と大陸には数えられますが、旅行、場所、日数は増えません。',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'コレクション',
  'help.ctx.collections.summary':
    'Collectionsは旅行の外にあるあなたの場所ライブラリです。見つけて残しておきたい場所を名前付きのリストにまとめ、各場所には「アイデア」「行きたい」「訪問済み」のいずれかのステータスが付きます。場所は旅行との間でコピーされるだけでリンクはされないので、リストと旅行が互いを変えることはありません。',
  'help.ctx.collections.bullet.1':
    '左のリストレール：自分のリスト、共有されたリスト、承諾待ちの招待、所有するすべてをまとめた「すべての保存済み」、そして上部の「新しいリスト」とファイルからのインポート。',
  'help.ctx.collections.bullet.2':
    '開いているリストのヘッダー：色、カバー、説明、リンク、メンバー、そして右側の「編集」「エクスポート」「共有」の各操作。',
  'help.ctx.collections.bullet.3':
    '場所の上のフィルター行：ステータス、カテゴリ、評価、並び順、ラベルフィルター、場所を追加する+、旅行からの取り込み、一括操作のための「選択」。',
  'help.ctx.collections.bullet.4':
    '場所の行：アバター、名前と住所、ラベルとカテゴリ、そしてワンクリックで切り替わる右端のステータスピル。',
  'help.ctx.collections.bullet.5':
    '右の地図：座標を持つ場所ごとにピンが1つ、リストと地図の切り替え、検索ボックス、ラベルフィルター。ピンをクリックするとその場所が開きます。',
  'help.ctx.collections.bullet.6':
    '詳細シート：行をクリックすると、カバー、カテゴリ、ラベル、ステータス、説明、リンクが表示され、「編集」「旅行にコピー」「リストから削除」が使えます。',
  // create-list
  'help.guide.create-list.title': 'リストを作成する',
  'help.guide.create-list.goal': '色とカバーを付けた名前付きの新しいリストを始め、場所を入れられる状態にします。',
  'help.guide.create-list.step.1': 'リストレールの上部にある「新しいリスト」をクリックします。',
  'help.guide.create-list.step.2':
    'リストに名前を付けて色を選びます。カバー画像、説明、リンクは任意で、あとから「編集」で追加できます。',
  'help.guide.create-list.step.3': '「作成」をクリックします。',
  'help.guide.create-list.result':
    'リストが空の状態で開き、「場所を追加」と「旅行から取り込む」の2つの方法で埋めていけます。',
  'help.guide.create-list.tip.1':
    'カバーは自分でアップロードした画像でも、同じダイアログのUnsplash検索で見つけた写真でもかまいません。',
  // add-place
  'help.guide.add-place.title': '場所を追加する',
  'help.guide.add-place.goal': '場所を探し、名前、カテゴリ、ステータス、メモをまとめて開いているリストに保存します。',
  'help.guide.add-place.step.1': '場所の上のフィルター行にある+をクリックします。',
  'help.guide.add-place.step.2': '検索欄に場所を入力して結果を選びます。名前、住所、座標がそこから入力されます。',
  'help.guide.add-place.step.3':
    'ステータスを設定し、必要ならカテゴリ、説明、リンクも付けて「追加」をクリックします。ダイアログは次の場所のために開いたままになり、「キャンセル」で閉じます。',
  'help.guide.add-place.result': '場所がリストに現れ、座標があれば地図上のピンとしても表示されます。',
  'help.guide.add-place.tip.1':
    '旅行の中からは、場所インスペクターまたは場所メニューの「コレクションに保存」で、旅行を離れずに旅行の場所をリストに入れられます。',
  'help.guide.add-place.tip.2':
    'リストは自分のものか、自分が編集者または管理者であるものに限ります。「すべての保存済み」や閲覧のみのリストには+がありません。',
  // import-from-trip
  'help.guide.import-from-trip.title': '旅行から場所を取り込む',
  'help.guide.import-from-trip.goal': '旅行の場所をひとつずつ保存する代わりに、まとめてリストに持ってきます。',
  'help.guide.import-from-trip.step.1':
    'フィルター行にある雲の矢印付きの取り込みボタンをクリックします。空のリストでは同じ操作が「場所を追加」の隣にあります。',
  'help.guide.import-from-trip.step.2': '自分の旅行を1つ選びます。',
  'help.guide.import-from-trip.step.3':
    '欲しい場所にチェックを付けます。すでにリストにある場所はグレー表示になり、旅行のどの日にも入っていない場所は最初から選択されています。「新しいものだけ」はすでに持っているものを隠します。',
  'help.guide.import-from-trip.step.4': '「取り込む」をクリックします。ボタンには追加される件数が常に表示されます。',
  'help.guide.import-from-trip.result':
    '場所が名前、住所、座標、説明、カテゴリとともにリストへコピーされます。旅行は元のままです。',
  'help.guide.import-from-trip.tip.1':
    '名前または座標が同じ重複は自動的にスキップされるので、二度取り込んでも問題ありません。',
  'help.guide.import-from-trip.tip.2':
    '旅行の場所リストの中では、代わりに選択モードの「コレクションに保存」で、自分で選んだ場所だけをまとめて保存できます。',
  // place-status
  'help.guide.place-status.title': '場所のステータスを設定する',
  'help.guide.place-status.goal': '何がアイデアで、何が候補で、どこへ行ったかを把握します。',
  'help.guide.place-status.step.1':
    '場所の行の右端にあるステータスピルをクリックします。「アイデア」が「行きたい」になります。',
  'help.guide.place-status.step.2':
    'もう一度クリックすると「訪問済み」になり、さらにもう一度で「アイデア」に戻ります。',
  'help.guide.place-status.result':
    'ピルとその色がすぐに変わり、リストの上のステータスフィルターの件数も合わせて更新されます。',
  'help.guide.place-status.tip.1':
    'ステータスはCollectionsだけのものです。場所を旅行にコピーしても一緒には持ち込まれません。',
  'help.guide.place-status.tip.2':
    '旅行からは、「コレクションに保存」がその場所の入っているリストごとにステータスピルを表示し、場所パネルには選択した場所を対象にした「訪問済みにする」操作があります。',
  // place-detail
  'help.guide.place-detail.title': '保存した場所を開く',
  'help.guide.place-detail.goal': '場所についてのすべてを見て、操作します。編集、旅行へのコピー、削除。',
  'help.guide.place-detail.step.1':
    '場所の行をクリックします。詳細シートがリストの横に開き、地図がその場所へ移動します。',
  'help.guide.place-detail.step.2':
    '下部に「編集」「旅行にコピー」「リストから削除」があり、カバーのカメラで自動取得の写真を自分の写真に差し替えられます。',
  'help.guide.place-detail.result':
    '「編集」で名前、カテゴリ、ラベル、住所、座標、説明、リンクがシート内でそのまま編集できるようになります。',
  'help.guide.place-detail.tip.1':
    '場所に固有の画像がない場合、カバーは自動的に取得されます。自分でアップロードする画像はJPG、PNG、GIF、WebPで20MBまでです。',
  'help.guide.place-detail.tip.2':
    '共有リストのメンバーはここで星評価も付けられ、フィルター行の評価フィルターはその平均を使います。',
  // labels
  'help.guide.labels.title': 'ラベルで場所をまとめる',
  'help.guide.labels.goal': '共通のカテゴリとは別に、地区や日付などリスト独自のラベルを付けます。',
  'help.guide.labels.step.1': 'フィルター行のラベルコントロールからラベルマネージャーを開きます。',
  'help.guide.labels.step.2':
    '名前を入力し、色を選んで「ラベルを追加」をクリックします。既存のラベルの名前変更、色変更、削除も同じダイアログで行えます。',
  'help.guide.labels.step.3':
    '「選択」をオンにして場所にチェックを付け、選択バーの「ラベルを割り当て」をクリックします。1つの場所なら詳細シートの「編集」からもラベルを付けられます。',
  'help.guide.labels.step.4':
    'フィルター行でラベルを1つ以上選ぶと、リストと地図がそのいずれかを持つ場所に絞り込まれます。',
  'help.guide.labels.result':
    'ラベルの付いた場所は行にラベルを表示します。ラベルフィルターは閲覧者を含むすべてのメンバーが使えます。',
  'help.guide.labels.tip.1': 'ラベルは作成されたリストだけのものです。場所を別のリストに移動するとラベルは外れます。',
  'help.guide.labels.tip.2': 'ラベルの管理と割り当てにはリストの編集権限が必要です。',
  // filter-select
  'help.guide.filter-select.title': '場所を絞り込んで選択する',
  'help.guide.filter-select.goal': 'リストを絞り込み、多くの場所をまとめて操作します。',
  'help.guide.filter-select.step.1':
    'フィルター行のドロップダウンを使います。ステータス、カテゴリ、最低評価、並び順です。それぞれに残る場所の数が表示されます。',
  'help.guide.filter-select.step.2':
    '「選択」をクリックします。すべての行にチェックボックスが付き、選択バーが現れます。',
  'help.guide.filter-select.step.3':
    '場所にチェックを付けるか、現在絞り込まれているすべてを対象に「すべて選択」を使い、「ラベルを割り当て」「リストに移動」「リストに複製」「旅行にコピー」「削除」のいずれかを選びます。',
  'help.guide.filter-select.result': '操作は選択全体に一度に適用されます。右側の×で選択モードを終了します。',
  'help.guide.filter-select.tip.1':
    '「すべて選択」はフィルターに従うので、「行きたい」で絞り込んでからすべて選択するのが候補をまとめて扱う近道です。',
  // copy-to-trip
  'help.guide.copy-to-trip.title': '場所を旅行にコピーする',
  'help.guide.copy-to-trip.goal': '保存した場所を自分の旅行の立ち寄り先にします。',
  'help.guide.copy-to-trip.step.1':
    '「選択」をオンにして場所にチェックを付けるか、1つの場所を開いて詳細シートの「旅行にコピー」を使います。',
  'help.guide.copy-to-trip.step.2': '選択バーの「旅行にコピー」をクリックします。',
  'help.guide.copy-to-trip.step.3': '旅行を選びます。検索ボックスで長い一覧を絞り込めます。',
  'help.guide.copy-to-trip.result':
    '場所は名前、説明、カテゴリ、メモ、価格、座標、写真、タグとともにその旅行の場所リストに入ります。コレクション側は何も変わりません。',
  'help.guide.copy-to-trip.tip.1':
    '共有リストの閲覧者もこれを行えます。リストからコピーするだけで、リストを変えるわけではありません。',
  // share-list
  'help.guide.share-list.title': 'リストを誰かと共有する',
  'help.guide.share-list.goal': 'このTREK上のほかの人と、リストをリアルタイムで一緒に計画します。',
  'help.guide.share-list.step.1': '自分のリストのヘッダーにある「共有」をクリックします。',
  'help.guide.share-list.step.2': 'ユーザーと役割を選びます。「閲覧者」「編集者」「管理者」のいずれかです。',
  'help.guide.share-list.step.3':
    '「招待を送信」をクリックします。相手がリストレールで招待を承諾するまでは「招待保留中」と表示されます。',
  'help.guide.share-list.result':
    '承諾されると、相手側では「共有」の下にリストが現れ、すべての変更がリアルタイムで同期されます。メンバーとその役割は同じダイアログでいつでも変更できます。',
  'help.guide.share-list.tip.1':
    '閲覧者は閲覧、評価、自分の旅行への場所のコピーができます。編集者は場所とラベルの追加と編集ができます。管理者はさらに削除もできます。',
  'help.guide.share-list.tip.2':
    '人を招待したり外したりできるのはオーナーだけです。メンバーは自分で共有リストから抜けられます。',
  // export-list
  'help.guide.export-list.title': 'リストをファイルとしてエクスポートする',
  'help.guide.export-list.goal': '別のTREKにいる人にリストを渡したり、地図アプリに持ち込んだりします。',
  'help.guide.export-list.step.1': 'リストのヘッダーにある「エクスポート」をクリックします。',
  'help.guide.export-list.step.2':
    '別のTREK向けにはラベルとステータス付きの「TREK リスト」を、OsmAnd、Organic Maps、Garmin、その他ウェイポイントを読めるアプリ向けにはGPXを選びます。',
  'help.guide.export-list.result':
    'ファイルがダウンロードされます。共有リストのメンバーなら誰でもエクスポートできます。',
  'help.guide.export-list.tip.1':
    '座標のない場所はGPXのウェイポイントになれないため除外され、TREKが何件除外されたかを伝えます。',
  'help.guide.export-list.tip.2':
    '評価、メンバー、アップロードした写真は意図的に含めません。これらはリストではなくこのTREKに属するものです。',
  // import-file
  'help.guide.import-file.title': 'ファイルからリストをインポートする',
  'help.guide.import-file.goal':
    'TREKのリストファイルまたはGPXファイルを、新しいリストとして、あるいは手持ちのリストに取り込みます。',
  'help.guide.import-file.step.1':
    'リストレールの「新しいリスト」の隣にあるアップロード矢印付きのインポートボタンをクリックします。',
  'help.guide.import-file.step.2':
    'ファイルを選びます。TREKは何かが起こる前に中身を表示します。名前、場所の数、ラベルの数です。',
  'help.guide.import-file.step.3':
    '「新しいリスト」のまま必要なら名前を変えるか、「リストに追加」を選んで編集できるリストに場所を入れ、「インポート」をクリックします。',
  'help.guide.import-file.result':
    'インポートした場所とともにそのリストが開きます。リストへの追加は追加しかしません。すでにある場所はステータス、メモ、ラベルをそのまま保ちます。',
  'help.guide.import-file.tip.1':
    'GPXからは名前のあるウェイポイントがすべて場所になります。トラックは線なので除外され、プレビューにその点の数が示されます。',
  'help.guide.import-file.tip.2':
    'TREKリストでもGPXでもないファイルは理由とともに拒否されます。読めない場所が1つあってもその場所だけがスキップされ、ファイル全体は拒否されません。',
  // edit-list
  'help.guide.edit-list.title': 'リストを編集または削除する',
  'help.guide.edit-list.goal': 'リストの名前、色、カバー、説明、リンクを変更するか、リストを削除します。',
  'help.guide.edit-list.step.1': 'リストのヘッダーにある「編集」をクリックします。オーナーにしか表示されません。',
  'help.guide.edit-list.step.2':
    '好きなところを変えて「保存」をクリックします。左下の「リストを削除」は確認のあと、リストをすべての場所ごと削除します。',
  'help.guide.edit-list.result': 'ヘッダーに新しい色、カバー、説明がすぐに反映されます。',
  'help.guide.edit-list.tip.1': 'リストの削除は取り消せません。コピーを残したいなら先にエクスポートしてください。',
  // all-saved
  'help.guide.all-saved.title': 'ライブラリ全体を検索する',
  'help.guide.all-saved.goal': '所有するすべてのリストを一度に見渡します。',
  'help.guide.all-saved.step.1':
    'リストレールの「すべての保存済み」をクリックします。所有または共同所有するすべてのリストの場所がまとめて表示されます。',
  'help.guide.all-saved.step.2':
    'ほかのリストと同じように検索ボックスとフィルターを使います。「選択」もここで使え、旅行へのコピーができます。',
  'help.guide.all-saved.result':
    '保存したすべての場所を1つのビューで見られます。入れる先のリストが1つに決まらないため、追加やインポートはできません。',
  'help.guide.all-saved.tip.1':
    'ラベルはリストごとのものなので、「すべての保存済み」ではラベルフィルターは提供されません。',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': '日記',
  'help.ctx.journey.summary':
    '日記は写真を中心にした旅の日記です。どの日記も1つ以上の旅行に結び付いていて、物語、写真、気分、天気を持つエントリーから日ごとに育っていきます。この画面には日記が一覧され、開くと書けます。',
  'help.ctx.journey.bullet.1':
    '上部のバナーには進行中の日記、なければ最新の日記が、エントリー数、写真数、場所数とともに表示されます。「続けて書く」でそれが今日の日付で開きます。',
  'help.ctx.journey.bullet.2':
    'その下には日記ごとに1枚のカードがあり、カバー、サブタイトル、日付、各数が載っています。カードをクリックすると開きます。',
  'help.ctx.journey.bullet.3': 'グリッドの最後のカード「新しい日記を作成」は、旅行から日記を始めます。',
  // create-journey
  'help.guide.create-journey.title': '日記を作成する',
  'help.guide.create-journey.goal': '旅行の日記を始めます。旅行の場所はすでに提案として待っています。',
  'help.guide.create-journey.step.1': 'グリッドの最後のカード「新しい日記を作成」をクリックします。',
  'help.guide.create-journey.step.2':
    '名前と、必要ならサブタイトルを付け、属する旅行にチェックを入れます。カウンターにはいくつの場所が入ってくるかが表示されます。',
  'help.guide.create-journey.step.3': '「日記を作成」をクリックします。',
  'help.guide.create-journey.result':
    '日記が開きます。リンクした旅行のすべての場所が、それが置かれている日ごとに1つずつ提案としてタイムラインに並び、書き込める状態になっています。',
  'help.guide.create-journey.tip.1': '旅行はあとから「日記設定」でさらにリンクできます。',
  'help.guide.create-journey.tip.2': '旅行のない日記も作れます。その場合はエントリーを手動で追加します。',
  // open-journey
  'help.guide.open-journey.title': '日記を開く',
  'help.guide.open-journey.goal': '日記の中に入り、どこで開くかを知ります。',
  'help.guide.open-journey.step.1':
    'カードをクリックします。各カードにはカバー、日付、そして日記に含まれるエントリー、写真、場所の数が表示されています。',
  'help.guide.open-journey.result':
    '進行中の日記は今日の日付で開き、まだ何も書かれていなければ今日より前の最後のエントリーで開きます。終了した日記は先頭で開きます。',
  'help.guide.open-journey.tip.1': 'カバーは、「日記設定」で設定しない限り、日記の最初の写真です。',
  // continue-writing
  'help.guide.continue-writing.title': '進行中の日記を続ける',
  'help.guide.continue-writing.goal': '今いる日記の今日のページに直接飛びます。',
  'help.guide.continue-writing.step.1':
    '上部のバナーにある「続けて書く」をクリックします。バナーには進行中の日記、なければ最新の日記が表示されています。',
  'help.guide.continue-writing.result':
    '日記が今日の日付で開きます。まだ何も書かれていなければ、今日より前の最後のエントリーで開きます。',
  'help.guide.continue-writing.tip.1': 'バナーはまだ日記のない旅行の提案も出します。「閉じる」でその提案を隠せます。',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': '日記帳',
  'help.ctx.journey-detail.summary':
    '開いている1つの日記です。左にタイムラインが日ごとに並び、右のマップにはすべてのエントリーと、リンクした旅行の場所が表示されます。日記に何かを加えるものはすべて上部にあり、ヘッダーには各数、「Studio」、提案のスイッチ、「日記設定」があります。',
  'help.ctx.journey-detail.bullet.1':
    'ヘッダー：カバー、タイトルとサブタイトル、日数、場所数、エントリー数、写真数、そして右側に「Studio」、提案のスイッチ、「日記設定」。',
  'help.ctx.journey-detail.bullet.2':
    'ツールバー：「タイムライン」と「ギャラリー」のタブ、「この旅を検索」、「エントリーを追加」。',
  'help.ctx.journey-detail.bullet.3':
    'タイムライン：日ごとに1つのセクションがあり、＋でその日にエントリーを追加できます。写真、気分、天気、物語を載せたエントリーのカード、そして旅行からの提案が薄い表示で「この提案を見送る」付きで並びます。',
  'help.ctx.journey-detail.bullet.4':
    'マップ：エントリーはピンとして日付順に破線でつながれ、旅行の場所と、それらの旅行に取り込んだGPXトラックも表示されます。',
  'help.ctx.journey-detail.bullet.5':
    '「日記設定」：カバー、名前とサブタイトル、マップ上のトラック、記録の項目、見送った提案、リンクした旅行、参加者、公開共有、アーカイブと削除。',
  'help.ctx.journey-detail.bullet.6':
    '長いタイムラインの上には2つの丸いボタンが浮かびます。先頭へ戻る、と最後のエントリーへ飛ぶ、です。',
  // add-entry
  'help.guide.add-entry.title': 'エントリーを書く',
  'help.guide.add-entry.goal': 'タイトル、本文、気分、天気を持つ1日の物語を追加します。',
  'help.guide.add-entry.step.1':
    'ツールバーの「エントリーを追加」をクリックするか、日のヘッダーにある＋をクリックしてその日から始めます。',
  'help.guide.add-entry.step.2':
    'その瞬間に名前を付けて物語を書きます。テキストの上のツールバーで、太字、斜体、見出し、引用、リンク、リストをMarkdownで追加できます。',
  'help.guide.add-entry.step.3':
    '気分と天気を選び、日付を確認し、必要なら場所をピン留めします。場所を検索するか、現在地を使います。',
  'help.guide.add-entry.step.4': '「保存」をクリックします。',
  'help.guide.add-entry.result':
    'エントリーがタイムラインのその日に、そしてマップにピンとして現れます。ヘッダーの各数が更新されます。',
  'help.guide.add-entry.tip.1': '提案に書き込む場合も同じエディターで、場所がすでに設定されています。',
  'help.guide.add-entry.tip.2':
    '下部のタグは「hidden gem」や「best meal」のような自由なテキストで、検索で見つかります。',
  // entry-photos
  'help.guide.entry-photos.title': 'エントリーに写真と動画を追加する',
  'help.guide.entry-photos.goal': '1日に写真を載せます。最初の1枚がエントリーのカバーになります。',
  'help.guide.entry-photos.step.1': 'カードの⋯からエントリーのメニューを開き、「編集」を選びます。',
  'help.guide.entry-photos.step.2':
    '「写真をアップロード」をクリックしてファイルを選びます。「ギャラリーから」は日記のギャラリーにすでにある写真を取り込み、「External photos」は接続済みのImmichまたはSynologyのライブラリからその日の写真を探します。',
  'help.guide.entry-photos.step.3': '写真にマウスを乗せて「1番目にする」でカバーを選び、「保存」をクリックします。',
  'help.guide.entry-photos.result': '写真がカードとギャラリーに表示されます。最初の1枚がどこでもサムネイルになります。',
  'help.guide.entry-photos.tip.1':
    '動画も同じ方法でエントリーに載せられます。mp4、m4v、webm、movで500MBまで、アップロードしたままの形で保存されます。',
  'help.guide.entry-photos.tip.2':
    'iPhoneのHEICファイルはアップロード時にJPEGへ変換され、GPSとカメラのメタデータは失われます。',
  // suggestions
  'help.guide.suggestions.title': '提案を使う、または見送る',
  'help.guide.suggestions.goal': '旅行の場所をエントリーに変え、書かないものを片付けます。',
  'help.guide.suggestions.step.1':
    '提案は場所の名前が斜体で書かれた薄いカードです。クリックすると、場所と日がすでに設定されたエディターが開きます。',
  'help.guide.suggestions.step.2':
    '使わないカードでは「この提案を見送る」をクリックします。削除されずにタイムラインから消え、旅行の同期でも再び提案されません。',
  'help.guide.suggestions.step.3':
    '気が変わったら、「日記設定」に見送った数が表示され、「見送った提案を戻す」ですべて戻せます。',
  'help.guide.suggestions.result':
    'タイムラインには書くつもりのものだけが残ります。読んでいる間は、ヘッダーのスイッチですべての提案を一度に隠せます。',
  'help.guide.suggestions.tip.1': '2日にまたがる場所は、それぞれの日に提案が出ます。',
  'help.guide.suggestions.tip.2': '提案は統計に数えられません。書いたエントリーだけが数えられます。',
  // add-on-day
  'help.guide.add-on-day.title': '過ぎた日にエントリーを追加する',
  'help.guide.add-on-day.goal': 'すでに過ぎた日のことを、あとで日付を直さずに書きます。',
  'help.guide.add-on-day.step.1': 'その日のヘッダーにある＋をクリックします。',
  'help.guide.add-on-day.step.2': 'その日付が設定された状態でエディターが開きます。いつも通り書いて「保存」します。',
  'help.guide.add-on-day.result': 'エントリーはすぐに正しい日に入ります。',
  'help.guide.add-on-day.tip.1': '同じ日の中では、エントリーのメニューにある矢印で前後に動かせます。',
  // pros-cons
  'help.guide.pros-cons.title': '評価を加える',
  'help.guide.pros-cons.goal': '良かったことと良くなかったことで1日をまとめます。',
  'help.guide.pros-cons.step.1':
    'エディターで物語の下にある「良かった点・気になった点」を探します。「良かった点」または「気になった点」に項目を入力し、次の項目は「追加」で加えます。',
  'help.guide.pros-cons.step.2': '保存します。評価はカードに2つの短いリストとして表示されます。',
  'help.guide.pros-cons.result': '物語の下に、良し悪しがひと目で分かります。',
  'help.guide.pros-cons.tip.1':
    '評価を使わない日記では、「日記設定」の「記録の項目」でこのセクションをオフにできます。',
  // search-journey
  'help.guide.search-journey.title': '長い日記から探す',
  'help.guide.search-journey.goal': '何週間分もスクロールせずに、目当てのエントリーにたどり着きます。',
  'help.guide.search-journey.step.1':
    'ツールバーの「この旅を検索」に入力します。入力に合わせてタイムラインが、タイトル、物語、場所、タグを対象に絞り込まれます。アクセント記号や大文字小文字は区別されません。',
  'help.guide.search-journey.step.2':
    'ヘッダーの提案のスイッチは、読んでいる間、未記入のカードを隠します。タイムラインが長くなると、下端の上に2つの丸いボタンが浮かびます。先頭へ戻る、と最後のエントリーへ飛ぶ、です。',
  'help.guide.search-journey.result': '一致するエントリーだけが残ります。ボックスを空にすると再びすべて表示されます。',
  'help.guide.search-journey.tip.1': '進行中の日記は今日の日付で開くので、現在のページはたいてい最初から見えています。',
  'help.guide.search-journey.tip.2':
    'タグも対象です。「hidden gem」で検索すると、そのタグの付いたエントリーがすべて見つかります。',
  // gallery-map
  'help.guide.gallery-map.title': 'ギャラリーとマップを見る',
  'help.guide.gallery-map.goal': '日記全体を写真として、そしてマップ上の場所として眺めます。',
  'help.guide.gallery-map.step.1':
    'ツールバーで「ギャラリー」に切り替えます。すべてのエントリーのすべての写真に加え、ギャラリーへ直接アップロードした写真が並びます。クリックするとライトボックスで開きます。',
  'help.guide.gallery-map.step.2':
    '右のマップには、エントリーが日付順にピンとして、リンクした旅行の場所、そしてそれらの旅行に取り込んだGPXトラックが、プランナーでの色のまま表示されます。',
  'help.guide.gallery-map.result':
    'トラックにマウスを乗せると名前が表示されます。エントリー間の破線はTREKが描いたもので、トラックは実際に記録した経路です。',
  'help.guide.gallery-map.tip.1': 'トラックは「日記設定」で日記ごとにオフにできます。',
  'help.guide.gallery-map.tip.2':
    '位置情報のあるギャラリーの写真は、「ギャラリー」と「マップ」の両方を共有している場合、公開マップにも表示されます。',
  // entry-fields
  'help.guide.entry-fields.title': '記録の項目をオフにする',
  'help.guide.entry-fields.goal': 'エディターをこの日記で使うものだけにします。',
  'help.guide.entry-fields.step.1': 'ヘッダーから「日記設定」を開きます。',
  'help.guide.entry-fields.step.2': '「記録の項目」で「気分」「天気」「良かった点・気になった点」をオフにします。',
  'help.guide.entry-fields.result':
    'エディターはそれらを求めなくなります。書いたものは失われません。項目を再びオンにすると保存されていた値が表示され、共有した日記でも同じ項目が隠れます。',
  'help.guide.entry-fields.tip.1': 'スイッチは日記ごとなので、出張と休暇で設定を変えられます。',
  // link-trip
  'help.guide.link-trip.title': '別の旅行をリンクする',
  'help.guide.link-trip.goal': '2つ目の旅行の場所を提案として日記に取り込みます。',
  'help.guide.link-trip.step.1': 'ヘッダーから「日記設定」を開きます。',
  'help.guide.link-trip.step.2': 'リンクした旅行の下にある「旅行を追加」をクリックします。',
  'help.guide.link-trip.step.3': '旅行を選びます。',
  'help.guide.link-trip.result':
    'その旅行の場所がそれぞれの日に提案としてタイムラインに入り、GPXトラックがマップに加わります。',
  'help.guide.link-trip.tip.1': 'リンクした旅行の横の×でリンクを解除できます。書いたエントリーは残ります。',
  'help.guide.link-trip.tip.2': 'ある日のエントリーは、その日をいくつの旅行がカバーしていても1回しか数えられません。',
  // share-public
  'help.guide.share-public.title': '日記を公開で共有する',
  'help.guide.share-public.goal': 'TREKのアカウントを持たない人に読み取り専用のリンクを渡します。',
  'help.guide.share-public.step.1': '「日記設定」を開き、「公開共有」を探します。',
  'help.guide.share-public.step.2': '「共有リンクを作成」をクリックします。',
  'help.guide.share-public.step.3':
    '訪問者に見せるものを選びます。「タイムライン」「ギャラリー」「マップ」は別々のスイッチです。「コピー」でリンクがクリップボードに入ります。',
  'help.guide.share-public.result':
    'リンクを持つ人は有効にしたセクションだけを見られます。「記録の項目」でオフにした項目はそこでも隠れたままです。',
  'help.guide.share-public.tip.1':
    '写真が公開マップに出るのは「ギャラリー」と「マップ」の両方がオンのときだけです。「マップ」がオフなら、座標はサーバーを出る前に取り除かれます。',
  'help.guide.share-public.tip.2': '共有を終えるには同じ場所でリンクを削除します。',
  // contributors
  'help.guide.contributors.title': '一緒に書く',
  'help.guide.contributors.goal': '旅の仲間が自分のエントリーと写真を追加できるようにします。',
  'help.guide.contributors.step.1': '「日記設定」を開き、参加者までスクロールします。',
  'help.guide.contributors.step.2': '「参加者を招待」をクリックし、名前またはメールでユーザーを検索します。',
  'help.guide.contributors.step.3': '役割を選んで確定します。',
  'help.guide.contributors.result':
    '日記が相手の一覧に現れ、相手のエントリーには相手の名前が付きます。参加者を外すには横の×を使います。',
  'help.guide.contributors.tip.1': '参加者はこのTREK上の人向けです。それ以外の人には公開リンクがあります。',
  // studio
  'help.guide.studio.title': '日記をフォトブックにレイアウトする',
  'help.guide.studio.goal': '日記を印刷できるページにします。',
  'help.guide.studio.step.1': 'ヘッダーの「Studio」をクリックします。デザイナーが日記の上に開きます。',
  'help.guide.studio.step.2': '上部バーの左にある日記の名前が戻る道です。元いた場所に戻れます。',
  'help.guide.studio.result':
    '左にページのレール、作業台に見開き、右にプロパティが並びます。「Auto layout」がエントリーからブックを組み立て、「Export」で印刷用のPDFができます。',
  'help.guide.studio.tip.1': 'Studioには幅1024px以上のウィンドウが必要で、スマートフォンでは提供されません。',
  'help.guide.studio.tip.2':
    'ブックは日記のアクセス権を引き継ぎます。日記を読める人は開け、編集できる人は保存できます。',
  // archive-journey
  'help.guide.archive-journey.title': '日記をアーカイブまたは削除する',
  'help.guide.archive-journey.goal': '終わった日記を閉じるか、完全に削除します。',
  'help.guide.archive-journey.step.1': '「日記設定」を開きます。',
  'help.guide.archive-journey.step.2':
    '一番下の「日記をアーカイブ」で終了してアーカイブ済みにし、「日記を復元」で戻せます。「削除」は確認のあと、すべてのエントリーと写真ごと削除します。',
  'help.guide.archive-journey.result':
    'アーカイブした日記は読むことも共有することもできます。今日の日付で開かなくなるだけです。',
  'help.guide.archive-journey.tip.1': '削除は元に戻せません。日記がリンクしていた旅行には影響しません。',
  'help.guide.archive-journey.tip.2': 'カバー、名前、サブタイトルは同じダイアログの上部にあります。',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio は旅を印刷できるフォトブックとしてレイアウトします。日記の上に開き、左にページのサイドバーとコンテンツ、中央に作業中の見開き、右にそのプロパティが並びます。Auto layout がエントリーから最初の下書きを作り、その先は移動、切り抜き、スタイルの変更まですべてあなたの手で行え、どの操作も元に戻せます。',
  'help.ctx.journey-studio.bullet.1':
    '上部バー：Back to the journey、Book view、Undo と Redo、Page format、Auto layout、Export。タイトルの横の「保存しました」マークで、本が保存された時点がわかります。',
  'help.ctx.journey-studio.bullet.2':
    '左のサイドバーには5つのセクションがあります。Pages、Content（旅の写真とエントリー）、Elements（テキスト、図形、線、グリッド、フレーム、アイコン）、「旅」（旅から作られる地図、国、国旗、マーク）、Layouts です。',
  'help.ctx.journey-studio.bullet.3':
    '作業エリア：塗り足しと安全領域の余白付きの現在の見開き、その下のズームバー、Fit to view、右端の「この見開きをダウンロード」。',
  'help.ctx.journey-studio.bullet.4':
    '右の Properties：選択中のものの位置とサイズ、切り抜きと焦点、Fill か Fit か、見た目、角、フレーム、重なり順、ロック。何も選択していないときはノンブルとドキュメントです。',
  'help.ctx.journey-studio.bullet.5':
    '本は製本された本と同じ形をしています。表紙、1ページだけの最初のページ、見開き、1ページだけの最後のページ、裏表紙です。ノンブルは最初のページから数え、表示のとおりに印刷されます。',
  'help.ctx.journey-studio.bullet.6':
    '複数人で同時にデザインできます。全員が他の人のポインターを名前付きで見られ、ほかの人が変更したバージョンに保存すると、相手の作業を上書きする代わりに競合として返されます。',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': '本を自動で組み立てる',
  'help.guide.studio-auto-layout.goal': '日記のエントリーと写真から、完成した最初の下書きをワンクリックで得ます。',
  'help.guide.studio-auto-layout.step.1': '上部バーの Auto layout をクリックします。',
  'help.guide.studio-auto-layout.step.2':
    '「本全体」を選びます。タイトルとページ設定は残したまま、すべてのページを置き換えます。「このページ」は画面上の見開きだけを作り直し、エントリーから生まれた見開きでのみ表示されます。',
  'help.guide.studio-auto-layout.step.3':
    'Pages のサイドバーを見渡します。前の方が良ければ、Undo でレイアウト全体を元に戻せます。',
  'help.guide.studio-auto-layout.result':
    'エントリーごとに1つの見開きが順番に並び、写真、タイトル、ストーリーが配置されます。各要素は、編集するまでエントリーに追従し続けます。',
  'help.guide.studio-auto-layout.tip.1': 'どちらも通常の取り消しステップなので、気軽に試せます。',
  'help.guide.studio-auto-layout.tip.2':
    'Auto layout がエントリーに結び付けた要素は、Properties で触るまでそのエントリーの編集に追従します。触るとリンクが切れます。',
  // studio-pages
  'help.guide.studio-pages.title': '見開きを追加、移動、削除する',
  'help.guide.studio-pages.goal': '本をページごとに形作ります。',
  'help.guide.studio-pages.step.1':
    'サイドバーの Pages を開きます。サムネイルは本の順番どおりです。表紙、最初のページ、見開き、最後のページ、裏表紙。',
  'help.guide.studio-pages.step.2':
    '一番下の「ページを追加」は、最後のページの前に新しい見開きを置きます。2つのサムネイルの間の + は、ちょうどその位置に挿入します。',
  'help.guide.studio-pages.step.3':
    'サムネイルにマウスを乗せると操作が表示されます。「前へ移動」「後ろへ移動」「ページを複製」「ページを削除」です。サムネイルをクリックすると、その見開きが作業エリアに開きます。',
  'help.guide.studio-pages.result':
    '表紙、最初と最後のページ、裏表紙は動きません。新しい見開きは必ずその間に入ります。',
  'help.guide.studio-pages.tip.1': '上部バーの Book view は、製本されるときの姿で本全体を紙面として表示します。',
  'help.guide.studio-pages.tip.2':
    'ノンブルは、何も選択していない状態で Properties の「ドキュメント」からオンにします。',
  // studio-layouts
  'help.guide.studio-layouts.title': '見開きにレイアウトを適用する',
  'help.guide.studio-layouts.goal': '見開きに、写真とテキストのフレームの出来合いの配置を与えます。',
  'help.guide.studio-layouts.step.1':
    'サイドバーの Layouts を開きます。見開き用のレイアウトが13種類、表紙、裏表紙、単ページ用に別のセットがあります。',
  'help.guide.studio-layouts.step.2':
    '1つクリックします。作業エリアの見開きがそのフレームを受け取り、すでにあった写真とテキストはその中に流し込まれます。',
  'help.guide.studio-layouts.result':
    '空のフレームはコンテンツを待っています。Content から写真をドラッグするか、Add to this page を使います。',
  'help.guide.studio-layouts.tip.1': 'レイアウトもほかと同じ取り消しステップです。',
  // studio-content
  'help.guide.studio-content.title': '写真とエントリーをページに置く',
  'help.guide.studio-content.goal': '旅そのものの素材を見開きに持ち込みます。',
  'help.guide.studio-content.step.1':
    'サイドバーの Content を開きます。Photos には旅のすべての写真、Entries にはテキスト付きのエントリーが並びます。',
  'help.guide.studio-content.step.2':
    '写真を見開きか空のフレームにドラッグするか、その下の Add to this page をクリックします。「写真をアップロード」は、まだ旅にない写真を追加します。',
  'help.guide.studio-content.step.3':
    'エントリーの下の Title、Story、Place は、そのテキストをテキスト要素としてページに置きます。日付と座標はマークとして入り、エントリーの写真はそのすぐそこに並びます。',
  'help.guide.studio-content.result':
    'ドロップした写真は写真要素になります。テキストは編集するまでエントリーに追従し続けます。',
  'help.guide.studio-content.tip.1': 'Content の上部の検索ボックスは、両方のリストを絞り込みます。',
  'help.guide.studio-content.tip.2':
    'デスクトップからファイルを作業エリアにドロップすると、アップロードと配置が一度に済みます。',
  // studio-elements
  'help.guide.studio-elements.title': 'テキスト、図形、アイコンを追加する',
  'help.guide.studio-elements.goal': '写真とストーリー以外で見開きを飾ります。',
  'help.guide.studio-elements.step.1': 'サイドバーの Elements を開きます。',
  'help.guide.studio-elements.step.2':
    '見出しやキャプション用のテキストスタイル、図形、線、グリッド、フレームスタイル付きの空のフレーム、検索できるライブラリのアイコンのどれかをクリックします。それぞれ見開きの中央に置かれ、すぐに動かせます。',
  'help.guide.studio-elements.result':
    'テキスト要素をダブルクリックすると入力できます。Properties にフォント、太さ、サイズ、字間、揃えがあります。',
  'help.guide.studio-elements.tip.1': 'フレームは空の写真枠です。写真は後からドロップできます。',
  // studio-travel
  'help.guide.studio-travel.title': '地図、国旗、数字を追加する',
  'help.guide.studio-travel.goal': '旅そのものをページ上の数字に変えます。',
  'help.guide.studio-travel.step.1': 'サイドバーの「旅」を開きます。',
  'help.guide.studio-travel.step.2':
    '追加するものを選びます。エントリーのルートマップ、国の輪郭、国リストか国グリッド、国旗、日付・日数・距離のマーク、旅全体のサマリー。それぞれ旅のデータから作られ、データと一緒に更新されます。',
  'help.guide.studio-travel.result': '要素が見開きに現れます。Properties でスタイルを、地図なら範囲を調整します。',
  'help.guide.studio-travel.tip.1':
    'マークは見開きの元になったエントリーに追従するので、自動レイアウトした見開きの日付マークは最初からその日を示します。',
  // studio-properties
  'help.guide.studio-properties.title': '選択したものを編集する',
  'help.guide.studio-properties.goal': 'インスペクターで要素を移動、切り抜き、スタイル設定、重ね順の変更をします。',
  'help.guide.studio-properties.step.1':
    '見開きの要素をクリックします。サイズと回転のハンドルが表示され、ドラッグで移動できます。',
  'help.guide.studio-properties.step.2':
    '右の Properties は選択に追従します。位置とサイズ、フレーム内に残す部分を決める焦点付きの Crop、Fill か Fit、Look のフィルター、Corner の半径、「フレーム」のスタイル、重なり順、Lock です。',
  'help.guide.studio-properties.step.3':
    '「複製」と Delete はインスペクターの上部にあります。上部バーの Undo でどれも元に戻せます。',
  'help.guide.studio-properties.result':
    'ロックした要素はページ上でつかめなくなるので、周りを作業している間も完成したレイアウトが崩れません。',
  'help.guide.studio-properties.tip.1':
    'Shift を押しながらクリックすると複数の要素を選択でき、インスペクターでまとめて編集できます。',
  'help.guide.studio-properties.tip.2':
    'Auto layout が置いた要素を編集すると、エントリーとのリンクが切れ、そのエントリーの以後の変更に追従しなくなります。',
  // studio-format
  'help.guide.studio-format.title': 'ページ判型を選ぶ',
  'help.guide.studio-format.goal': 'レイアウトがサイズに依存する前に、本を印刷するサイズを決めます。',
  'help.guide.studio-format.step.1': '上部バーの Page format をクリックします。',
  'help.guide.studio-format.step.2':
    'Square 21 × 21 cm、Square 30 × 30 cm、A4 または A5 の横向きか縦向きを選ぶか、幅と高さをミリ単位で入力します。塗り足しと安全領域はその下にあります。',
  'help.guide.studio-format.result':
    'すべての見開きがそのサイズで描かれ、初期設定では塗り足し 3 mm、安全領域 5 mm です。',
  'help.guide.studio-format.tip.1':
    '先に判型を変えてから Auto layout を実行します。レイアウトは、その時点のサイズに合わせて作られます。',
  'help.guide.studio-format.tip.2': '印刷所に塗り足しと安全領域の値を聞いて、それを入力してください。',
  // studio-export
  'help.guide.studio-export.title': '本を PDF として書き出す',
  'help.guide.studio-export.goal': '印刷用のファイル、または画面で読むためのファイルを作ります。',
  'help.guide.studio-export.step.1': '上部バーの Export をクリックします。',
  'help.guide.studio-export.step.2':
    '「単ページ」（1枚に1ページずつ読む順に、印刷所が求める形）か、「見開き」（本を開いたときのまま2ページずつ）を選びます。「トンボ」は各辺に塗り足しを加え、断裁位置を示します。',
  'help.guide.studio-export.step.3':
    '「印刷ビュー」をクリックします。ブラウザーがページを開き、「PDFとして保存」でファイルになります。',
  'help.guide.studio-export.result': 'ダイアログに表示された枚数どおりの、設定した判型の PDF ができます。',
  'help.guide.studio-export.tip.1': 'PDF の作成は Studio 自体と同じく、デスクトップ限定です。',
  'help.guide.studio-export.tip.2':
    '校正用にはトンボなしの「見開き」を、印刷所にはトンボ付きの「単ページ」を書き出します。',
  // studio-spread-file
  'help.guide.studio-spread-file.title': '見開きを別の本で再利用する',
  'help.guide.studio-spread-file.goal': '気に入ったデザインを、ある旅の本から別の旅の本へ持ち込みます。',
  'help.guide.studio-spread-file.step.1':
    '見開きを作業エリアに開いた状態で、ズームバーの右端の「この見開きをダウンロード」をクリックします。ファイルにはデザインだけが入り、写真は入りません。',
  'help.guide.studio-spread-file.step.2':
    'もう一方の本で Pages を開き、「ページを追加」の隣の「読み込む」をクリックしてファイルを選びます。',
  'help.guide.studio-spread-file.result':
    '見開きがフレームとテキストスタイルごと届きます。新しい旅の写真をフレームにドロップしてください。',
  'help.guide.studio-spread-file.tip.1': '見開きのデザインでないファイルは、理由付きで拒否されます。',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': '設定',
  'help.ctx.settings.summary':
    'あなた専用の設定で、左のサイドバーにトピックごとのタブが並びます。ほとんどのスイッチは切り替えた瞬間に反映されます。下部に「保存」ボタンのあるフォームは、そのボタンを押すまで待ちます。ここで変えたものが、ほかの人のTREKを変えることはありません。',
  'help.ctx.settings.bullet.1':
    '左のサイドバー：「表示」「Appearance」「地図」「通知」「連携」「オフライン」「アカウント」。「プラグイン」はプラグインが1つでもインストールされると現れ、「情報」はセルフホストのTREKで現れます。',
  'help.ctx.settings.bullet.2':
    '「表示」は言語、単位、通貨、アプリが最初に開く画面。「Appearance」はテーマ、色、文字サイズ、ダッシュボードのウィジェットです。',
  'help.ctx.settings.bullet.3':
    '「地図」は描画エンジンとそのスタイルを、「通知」はあなたに届くチャンネルを、「連携」は写真ライブラリ、APIキー、MCPを、「オフライン」はアプリがこの端末に保持するものを選びます。',
  'help.ctx.settings.bullet.4':
    '「アカウント」にはプロフィール、パスワード、二要素認証、パスキー、そしてアカウントの削除があります。',
  'help.ctx.settings-display.title': '表示',
  'help.ctx.settings-display.summary':
    '言語、単位、通貨、地図と予約の振る舞い、そしてTREKが最初に開く画面。ここでの変更はすべて即座に反映されます。',
  'help.ctx.settings-display.bullet.1':
    '「Language & region」：インターフェースの言語、時刻形式、表示通貨、距離と温度の単位。',
  'help.ctx.settings-display.bullet.2':
    '「Travel & map」：予約ルートを常に地図に表示、スポットを探すピル、宿泊先を起点にしたルート最適化、予約コードのぼかし、予約ルートのラベル表示。',
  'help.ctx.settings-display.bullet.3':
    '「起動」：TREKをダッシュボードで開くか進行中の旅行で開くか、そして旅行のどのタブを最初に表示するか。',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'このアカウントでのTREKの見た目：ライトかダークか、アクセントカラー、ガラス効果と動き、文字サイズ、ダッシュボードに表示するウィジェット。すべてその場で反映され、サインインしているどの端末にも及びます。',
  'help.ctx.settings-appearance.bullet.1':
    '「Theme」：「ライト」「ダーク」「自動」、そして「Color scheme」と自分で選ぶ「Custom accent」。',
  'help.ctx.settings-appearance.bullet.2':
    '「Readability」：「Transparency」「Reduce motion」「Density」「Text size」、さらに階層ごとの詳細なサイズ。',
  'help.ctx.settings-appearance.bullet.3':
    '「Dashboard widgets」：ウィジェットごとに1つのスイッチを、「Desktop」と「Mobile」で別々に設定します。',
  'help.ctx.settings-appearance.bullet.4': '下部の「Reset to defaults」ですべてが元に戻ります。',
  'help.ctx.settings-map.title': '地図',
  'help.ctx.settings-map.summary':
    'どのエンジンがどのスタイルで地図を描くか。Leafletは従来型のラスター地図、MapLibreはトークンなしでベクタータイルを描画し、Mapboxは自分のトークンで3Dの建物と地形を加えます。',
  'help.ctx.settings-map.bullet.1':
    '「地図プロバイダー」：Leaflet、MapLibre、Mapboxのいずれかで、それぞれに必要なものが1行で示されます。',
  'help.ctx.settings-map.bullet.2':
    '「地図スタイル」と「地図テンプレート」：タイルの見た目に加えて、プロバイダーが求めるトークンやキー。',
  'help.ctx.settings-map.bullet.3':
    'アンチエイリアスと地球儀投影のための「高品質モード」。「地図を保存」で選択が書き込まれます。',
  'help.ctx.settings-notifications.title': '通知',
  'help.ctx.settings-notifications.summary':
    'アプリの外でTREKがあなたに届く先：ntfyのトピック、Webhook、またはプラグインが提供するチャンネル。チャンネルの下では、イベントごとの行が何をどこへ送るかを決めます。',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy：トピック、任意で自前のサーバー、任意でアクセストークン。「テスト」ですぐに1件送信できます。',
  'help.ctx.settings-notifications.bullet.2': 'Webhook：すべてのイベントをJSONで受け取る1つのURL。「テスト」付きです。',
  'help.ctx.settings-notifications.bullet.3':
    '設定の行：イベントごとに、どのチャンネルがオンか。プラグインのチャンネルは設定が済むまで「設定する」と表示されます。',
  'help.ctx.settings-integrations.title': '連携',
  'help.ctx.settings-integrations.summary':
    '外からTREKにつながるものすべて：日記のための写真ライブラリ、スクリプトのためのAPIキー、そしてAIアシスタントのためのMCPエンドポイントとそのトークンやOAuthクライアント。',
  'help.ctx.settings-integrations.bullet.1':
    '写真プロバイダー：ImmichとSynology Photos。それぞれにURLとキー、「接続をテスト」と「保存」があります。',
  'help.ctx.settings-integrations.bullet.2':
    '「API キー」：あなたの名前でTREK APIを呼び出すスクリプトやほかのツールのための個人キー。',
  'help.ctx.settings-integrations.bullet.3':
    '「MCP設定」：エンドポイント、コピーするだけのクライアント設定、そしてAPIトークン。',
  'help.ctx.settings-integrations.bullet.4':
    '「OAuth 2.1 クライアント」：TREKを通してログインするアプリ。リダイレクトURI、許可スコープ、マシンクライアント、有効なセッションを扱います。',
  'help.ctx.settings-offline.title': 'オフライン',
  'help.ctx.settings-offline.summary':
    '接続がなくても旅行を開けるようにTREKがこの端末に保持するもの、そしてオフラインで行った変更がほかの場所での変更と衝突したときに何が起こるか。',
  'help.ctx.settings-offline.bullet.1':
    '「オフラインモード」：「オフラインモードを強制」はネットワークが切れたかのようにアプリを振る舞わせます。テストや従量制の接続に使います。',
  'help.ctx.settings-offline.bullet.2':
    '「オフラインの準備」：「オフライン用にダウンロード」で旅行とその地図タイルを今すぐ取得します。',
  'help.ctx.settings-offline.bullet.3':
    '「オフラインで保存する内容」：地図タイルのオンとオフ、そして旅行ごとのスイッチ。',
  'help.ctx.settings-offline.bullet.4':
    '「同期の競合」と「オフラインキャッシュ」：衝突時の方針、保留中と失敗した件数、「今すぐ再同期」と「キャッシュを消去」。',
  'help.ctx.settings-account.title': 'アカウント',
  'help.ctx.settings-account.summary':
    'このTREKでのあなたが誰で、どうサインインするか：プロフィールとアバター、パスワード、二要素認証、パスキー、そして一番下にアカウントの削除。',
  'help.ctx.settings-account.bullet.1':
    'プロフィール：ユーザー名、メール、アバター。「プロフィールを保存」で保存します。',
  'help.ctx.settings-account.bullet.2':
    '「パスワード変更」：現在のパスワード、新しいパスワードを2回、そして「パスワード更新」。',
  'help.ctx.settings-account.bullet.3':
    '認証アプリとバックアップコードによる「二要素認証（2FA）」。パスワードなしでサインインするための「パスキー」。',
  'help.ctx.settings-account.bullet.4':
    '一番下の「アカウント削除」は確認の後ろにあります。最後の管理者は自分を削除できません。',
  // language-region
  'help.guide.language-region.title': '言語、単位、通貨を設定する',
  'help.guide.language-region.goal': 'TREKをあなたの言語で話させ、あなたの流儀で数えさせます。',
  'help.guide.language-region.step.1':
    '「Language & region」でインターフェースの言語を選びます。TREKは即座に切り替わり、サインインしているどの端末にも及びます。',
  'help.guide.language-region.step.2': 'その下で、時刻形式、表示通貨、距離と温度の単位を選びます。',
  'help.guide.language-region.result':
    '日付、距離、金額が期待どおりに読めます。旅行ごとの通貨は、換算後の金額の隣に引き続き表示されます。',
  'help.guide.language-region.tip.1': '表示通貨は旅行をまたいだ合計のためのものです。各旅行は設定した通貨を保ちます。',
  'help.guide.language-region.tip.2': '言語はVacayと日記の曜日名や月名も決めます。',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': '地図と予約の振る舞いを調整する',
  'help.guide.travel-map-prefs.goal': '旅行の地図が既定で何を表示するかを決めます。',
  'help.guide.travel-map-prefs.step.1':
    '「Travel & map」で、「予約ルートを常に表示」はその日を開いていなくてもフライトや列車を地図に残し、「地図でスポットを探す」は場所を探すピルを表示し、「宿泊先を起点にルートを最適化」は寝る場所からルートを始めます。',
  'help.guide.travel-map-prefs.step.2':
    '「予約コードをぼかす」はマウスを乗せるまで確認番号を隠し、「予約ルートのラベル」は予約名をルートに沿って書き込みます。',
  'help.guide.travel-map-prefs.result': '旅行の地図はどの旅行でもこの設定に従います。切り替え直すまで有効です。',
  'help.guide.travel-map-prefs.tip.1':
    'これはアカウントごとの設定で、旅行ごとではありません。共有旅行のメンバーはそれぞれ自分の選択を見ます。',
  // startup
  'help.guide.startup.title': 'TREKが最初に開く画面を選ぶ',
  'help.guide.startup.goal': '毎回ダッシュボードではなく、いちばんよく作業する場所に着地します。',
  'help.guide.startup.step.1': '「起動」で「起動時の画面」を「ダッシュボード」または「進行中の旅行」に設定します。',
  'help.guide.startup.step.2': '「起動時のタブ」は、旅行を開いたときに最初に表示されるタブを選びます。',
  'help.guide.startup.result': '次のサインインとロゴの次のタップは、まっすぐそこへ向かいます。',
  'help.guide.startup.tip.1': '「進行中の旅行」は今日進行中の旅行、なければ次の旅行を指します。',
  // theme-scheme
  'help.guide.theme-scheme.title': 'テーマとアクセントカラーを設定する',
  'help.guide.theme-scheme.goal': 'TREKをライトかダークか、または端末に合わせて、好きな色にします。',
  'help.guide.theme-scheme.step.1': '「Theme」で「ライト」「ダーク」「自動」を選びます。「自動」は端末に従います。',
  'help.guide.theme-scheme.step.2':
    '「Color scheme」を選びます：「Default」「High contrast」「Indigo」「Teal」「Rose」「Amber」「Violet」「Custom」。',
  'help.guide.theme-scheme.step.3':
    '「Custom」では、プリセットからアクセントを選ぶか、自分の色を入力します。隣のコントラストチェックが、その色の上で文字が読めるかどうかを示します。',
  'help.guide.theme-scheme.result':
    'ボタン、リンク、ハイライトがどこでもそのアクセントになり、サインインしているどの端末にも及びます。',
  'help.guide.theme-scheme.tip.1': 'ナビバーにもライトとダークのクイックスイッチがあります。同じテーマを設定します。',
  'help.guide.theme-scheme.tip.2': '「High contrast」は、既定が淡すぎて読みにくいときに選ぶスキームです。',
  // readability
  'help.guide.readability.title': '読みやすさと文字サイズを調整する',
  'help.guide.readability.goal': 'ガラス効果を減らし、動きを減らし、余白を増やすか文字を大きくします。',
  'help.guide.readability.step.1':
    '「Readability」で、「Transparency」はガラスのパネルを不透明な面に切り替え、「Reduce motion」はアニメーションを最小限にし、「Density」は「Comfortable」か「Compact」を選びます。',
  'help.guide.readability.step.2':
    '「Text size」は「Everything」を一度に拡大縮小します。「Advanced text sizes」ではタイトル、サブタイトル、本文、キャプションを別々にできます。',
  'help.guide.readability.result': '地図のパネルや日記も含めて、アプリ全体が即座に従います。',
  'help.guide.readability.tip.1': '「Reduce motion」は、触らなければシステムの設定にも従います。',
  'help.guide.readability.tip.2':
    '文字サイズはタイポグラフィの階層を通して適用されるので、何も切れません。収まらなくなったサイズは折り返されます。',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'ダッシュボードのウィジェットを選ぶ',
  'help.guide.dashboard-widgets.goal': '使うウィジェットだけを、デスクトップとスマートフォンで別々に表示します。',
  'help.guide.dashboard-widgets.step.1':
    '「Dashboard widgets」で、各ウィジェットを「Desktop」と「Mobile」それぞれについてオンまたはオフにします：右サイドバー全体、通貨、Collections、タイムゾーン、今後の予約、Atlasの国、旅の統計。',
  'help.guide.dashboard-widgets.step.2': '下部の「Reset to defaults」で、タブ全体が出荷時の状態に戻ります。',
  'help.guide.dashboard-widgets.result':
    'ダッシュボードは即座に並び直ります。右サイドバーをオフにすると中央寄せになります。',
  'help.guide.dashboard-widgets.tip.1':
    'アドオンのウィジェットは、管理者がそのアドオンをオンにしている間だけ現れます。',
  'help.guide.dashboard-widgets.tip.2':
    'ダッシュボード自体は、グリッド表示かリスト表示か、そして並び順を端末ごとに記憶します。',
  // map-provider
  'help.guide.map-provider.title': '地図エンジンとスタイルを選ぶ',
  'help.guide.map-provider.goal': '従来型の地図、ベクタータイル、Mapboxの3D地図を切り替えます。',
  'help.guide.map-provider.step.1':
    '「地図プロバイダー」で、任意のラスタータイルを使う従来型の2D地図ならLeaflet、トークンなしのOpenFreeMapベクタータイルならMapLibre、3Dの建物と地形を備えたベクタータイルならMapboxを選びます。',
  'help.guide.map-provider.step.2':
    '見た目のために「地図スタイル」または「地図テンプレート」を選びます。Mapboxには「Mapbox アクセストークン」が、一部のラスタースタイルには「CARTO API キー」が必要です。欄の隣のリンクが取得先へ案内します。',
  'help.guide.map-provider.step.3':
    '「高品質モード」はアンチエイリアスと地球儀投影を加えます。「地図を保存」をクリックします。',
  'help.guide.map-provider.result':
    '旅行、Atlas、Collections、日記など、TREKのすべての地図が選んだエンジンで描かれます。',
  'help.guide.map-provider.tip.1':
    'トークンがなければ、Mapboxは何も表示しないのではなく既定の地図にフォールバックします。',
  'help.guide.map-provider.tip.2':
    'オフラインで保存する地図タイルは、ダウンロード時に有効なプロバイダーから取得されます。',
  // notification-channels
  'help.guide.notification-channels.title': '通知の届く先を設定する',
  'help.guide.notification-channels.goal':
    '旅行のリマインダーや共同作業のイベントをスマートフォンやほかのツールで受け取ります。',
  'help.guide.notification-channels.step.1':
    '「通知」で「Ntfy トピック」を入力します。自前で運用しているなら「Ntfy サーバーURL」と「アクセストークン」も加えます。「テスト」ですぐにメッセージが送られます。',
  'help.guide.notification-channels.step.2':
    'または、すべてのイベントをJSONで受け取る「Webhook URL」を指定し、同じように「テスト」します。',
  'help.guide.notification-channels.step.3':
    '下の行で、イベントごとにチャンネル別のオンとオフを切り替えます。プラグインのチャンネルは、プラグインの設定で準備が済むまで「設定する」と表示されます。「テスト送信」で1件試せます。',
  'help.guide.notification-channels.result':
    'イベントはオンになっているチャンネルを通して送られます。ナビバーのベルは、それとは関係なくアプリ内で表示し続けます。',
  'help.guide.notification-channels.tip.1': '旅行ごとの設定は旅行そのものの通知設定にあります。',
  'help.guide.notification-channels.tip.2':
    '管理者は全員向けに既定のntfyサーバーをあらかじめ入れておけます。トピックは引き続き自分で選びます。',
  // photo-providers
  'help.guide.photo-providers.title': '写真ライブラリを接続する',
  'help.guide.photo-providers.goal': '日記がその日の写真をImmichまたはSynology Photosから取り込めるようにします。',
  'help.guide.photo-providers.step.1':
    '「連携」でプロバイダーのセクションを探し、そのURLとAPIキーを入力します。Immichは日記へのアップロードをライブラリに書き戻すことも提案します。',
  'help.guide.photo-providers.step.2': '「接続をテスト」をクリックし、次に「保存」をクリックします。',
  'help.guide.photo-providers.result':
    'エントリーエディターの「External photos」タブが、接続したライブラリからそのエントリーの日の写真を、エントリーの場所に近い順に探します。',
  'help.guide.photo-providers.tip.1':
    '接続はあなた個人のものです。日記のほかのメンバーはそれぞれ自分のライブラリを接続します。',
  'help.guide.photo-providers.tip.2':
    '写真にGPSデータのないプロバイダーでも動作します。その場合、一覧は時刻順になります。',
  // api-keys
  'help.guide.api-keys.title': 'APIキーを作成する',
  'help.guide.api-keys.goal': 'スクリプトやほかのツールがあなたとしてTREK APIを呼び出せるようにします。',
  'help.guide.api-keys.step.1': '「API キー」で「キーを作成」をクリックし、どこで使うかがわかる名前を付けます。',
  'help.guide.api-keys.step.2':
    'ダイアログからキーをコピーします。表示されるのは一度だけです。ツールが不要になったら一覧からキーを削除します。',
  'help.guide.api-keys.result':
    'そのキーによるリクエストはあなたの権限で動作します。一覧には各キーの作成日時と最終使用日時が表示されます。',
  'help.guide.api-keys.tip.1': 'ツールごとに1つのキーにしておくと、取り消しが楽です。',
  'help.guide.api-keys.tip.2':
    'AIアシスタントには代わりにOAuth付きのMCPを使います。APIキーは素のHTTPクライアント向けです。',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'MCP経由でAIアシスタントを接続する',
  'help.guide.mcp-oauth.goal': 'Claude、IDE、そのほかのMCPクライアントに旅行へのアクセスを与えます。',
  'help.guide.mcp-oauth.step.1':
    '「MCP設定」で「MCPエンドポイント」をコピーするか、JSONスニペットを受け付けるクライアントには「クライアント設定」全体をコピーします。',
  'help.guide.mcp-oauth.step.2':
    'ブラウザ経由でログインするクライアントはOAuth 2.1を使います：「OAuth 2.1 クライアント」の「新規クライアント」で、「リダイレクトURI」、「許可スコープ」、そしてブラウザのないサーバー向けには「マシンクライアント」を設定します。',
  'help.guide.mcp-oauth.step.3':
    '「シークレット更新」と「クライアント削除」は各クライアントにあります。「有効なセッション」はサインイン中のものを一覧し、取り消せます。「APIトークン」と「新しいトークン」は以前からの入口です。',
  'help.guide.mcp-oauth.result':
    'クライアントはスコープが許す範囲をあなたとして読み書きでき、すべての操作はあなたの名前で表示されます。',
  'help.guide.mcp-oauth.tip.1': 'スコープは安全網です。必要になるまでは読み取りスコープだけを与えます。',
  'help.guide.mcp-oauth.tip.2': '管理者はインスタンス全体でMCPをオフにできます。その場合、このセクションはありません。',
  // offline-prepare
  'help.guide.offline-prepare.title': '旅行をオフラインに持ち出す',
  'help.guide.offline-prepare.goal': '接続が切れる前に、旅行とその地図をこの端末に用意します。',
  'help.guide.offline-prepare.step.1':
    '「オフラインで保存する内容」で「地図タイルをオフラインで保存」をオンのままにし、この端末に入れたい旅行をオンにします。',
  'help.guide.offline-prepare.step.2':
    '「オフラインの準備」の「オフライン用にダウンロード」をクリックします。旅行と、その場所の周辺のタイルを取得します。',
  'help.guide.offline-prepare.step.3':
    '「オフラインモード」の「オフラインモードを強制」で、出発前にすべてが揃っているか確認できます。',
  'help.guide.offline-prepare.result': '旅行は接続なしで開きます。行った変更はキューで待ち、再接続時に送信されます。',
  'help.guide.offline-prepare.tip.1':
    'いちばん容量を使うのはタイルです。「オフラインキャッシュ」セクションに旅行ごとの保存内容が表示されます。',
  'help.guide.offline-prepare.tip.2':
    'もっとも滑らかにオフラインで起動するには、ブラウザからTREKをアプリとしてインストールします。',
  // offline-conflicts
  'help.guide.offline-conflicts.title': '同期の競合でどちらを優先するか決める',
  'help.guide.offline-conflicts.goal': 'オフラインで行った変更とほかの場所での変更を、TREKがどう解決するかを選びます。',
  'help.guide.offline-conflicts.step.1':
    '「同期の競合」で「毎回確認する」「常に自分のバージョンを保持」「常にサーバーのバージョンを保持」のいずれかを選びます。',
  'help.guide.offline-conflicts.step.2':
    '「オフラインキャッシュ」には旅行、保留中と失敗した変更、競合が表示されます。「今すぐ再同期」はキューを送り出し、「キャッシュを消去」は端末を空にします。',
  'help.guide.offline-conflicts.result':
    '「毎回確認する」では、競合時に両方のバージョンが表示され、選べます。ほかの2つでは静かに解決されます。',
  'help.guide.offline-conflicts.tip.1':
    '「キャッシュを消去」はこの端末上のコピーだけを削除します。サーバー上のものには触れません。',
  // profile
  'help.guide.profile.title': 'プロフィールを変更する',
  'help.guide.profile.goal': '名前、メール、写真を更新します。',
  'help.guide.profile.step.1':
    '「アカウント」で「ユーザー名」と「メール」を編集します。アバターには自分の画像をアップロードできます。削除するとイニシャルに戻ります。',
  'help.guide.profile.step.2': '「プロフィールを保存」をクリックします。',
  'help.guide.profile.result': '名前と写真は、共有している旅行も含めてどこでも即座に更新されます。',
  'help.guide.profile.tip.1':
    'OIDC経由でサインインするアカウントはここにその旨が表示され、メールはプロバイダーから取得されます。',
  // password
  'help.guide.password.title': 'パスワードを変更する',
  'help.guide.password.goal': '新しいパスワードを設定します。',
  'help.guide.password.step.1': '「パスワード変更」で現在のパスワードを入力し、次に新しいパスワードを2回入力します。',
  'help.guide.password.step.2': '「パスワード更新」をクリックします。',
  'help.guide.password.result':
    '新しいパスワードは次回のサインインから有効です。ほかのセッションはサインインしたままです。',
  'help.guide.password.tip.1': 'OIDC経由でサインインするアカウントには、変更するTREKのパスワードがありません。',
  // mfa
  'help.guide.mfa.title': '二要素認証をオンにする',
  'help.guide.mfa.goal': '認証アプリのコードでアカウントを守ります。',
  'help.guide.mfa.step.1': '「二要素認証（2FA）」で「認証アプリを設定」をクリックします。',
  'help.guide.mfa.step.2':
    'アプリでQRコードを読み取るか、シークレットを手入力し、表示される6桁のコードを入力して「2FAを有効化」をクリックします。',
  'help.guide.mfa.step.3':
    'バックアップコードを保存します：コピー、ダウンロード、または印刷。スマートフォンが手元にないとき、それぞれ1回だけ使えます。',
  'help.guide.mfa.result': 'サインインのたびに、パスワードの後でコードを求められます。',
  'help.guide.mfa.tip.1': '「2FAを無効化」にはパスワードと現在のコードが必要です。',
  'help.guide.mfa.tip.2': '管理者は全員に2FAを必須にできます。その場合、ここではオフにできません。',
  // passkeys
  'help.guide.passkeys.title': 'パスキーでサインインする',
  'help.guide.passkeys.goal': 'パスワードの代わりに、端末の指紋、顔、またはPINを使います。',
  'help.guide.passkeys.step.1':
    '「パスキー」で「パスキーを追加」をクリックし、端末で確認します。どの端末かがわかる名前を付けます。',
  'help.guide.passkeys.step.2':
    '一覧にはすべてのパスキーが名前と最終使用日時つきで表示されます。削除ボタンで1つ削除できます。',
  'help.guide.passkeys.result': 'サインインページにパスキーが提示されます。パスワードは予備として残ります。',
  'help.guide.passkeys.tip.1':
    'パスキーは端末またはそのパスワードマネージャーに保存されるので、端末ごとに1つ追加します。',
  'help.guide.passkeys.tip.2':
    'パスキーにはHTTPSが必要です。素のHTTPのインスタンスでは、セクションが利用できない理由を説明します。',
  // delete-account
  'help.guide.delete-account.title': 'アカウントを削除する',
  'help.guide.delete-account.goal': 'アカウントと、あなただけのデータを削除します。',
  'help.guide.delete-account.step.1': '「アカウント」の一番下で「アカウント削除」をクリックし、確認します。',
  'help.guide.delete-account.result':
    'アカウント、自分の旅行、日記はなくなります。ほかの人と共有している旅行はその人たちに残ります。',
  'help.guide.delete-account.tip.1':
    'インスタンスの最後の管理者は自分を削除できません。先にほかの誰かを管理者にしてください。',
  'help.guide.delete-account.tip.2':
    '取り消しはできません。残しておきたいものは、確認する前にエクスポートしてください。',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': '管理',
  'help.ctx.admin.summary':
    'みんなのTREKを支えるインスタンスの設定です。誰がどのようにサインインできるか、何が有効か、ファイルがどこに置かれるか、サーバーがどう人に連絡するか、どうバックアップされるか。このページは管理者にしか見えず、各タブはサイドバーでそれぞれ独立した画面になっています。',
  'help.ctx.admin.bullet.1':
    '上部の4枚のカードはユーザー、旅行、場所、ファイルの数を示し、その上のバナーが新しいTREKのリリースを知らせます。',
  'help.ctx.admin.bullet.2':
    '「ユーザー」と「ユーザーのデフォルト」：アカウント、招待リンク、そして新しいアカウントが最初に持つ地図設定。',
  'help.ctx.admin.bullet.3':
    '「カスタマイズ」「設定」「アドオン」「プラグイン」：順に、持ち物テンプレート・カテゴリ・学校の休暇、サインイン方法とAPIキー、機能モジュール、サードパーティのプラグインです。',
  'help.ctx.admin.bullet.4':
    '「ストレージ」「通知」「MCPトークン」「GitHub」：順に、アップロードの保存先、インスタンス全体の通知チャンネル、AIクライアントのトークンとセッション、リリース履歴です。',
  'help.ctx.admin.bullet.5':
    '「バックアップ」と「監査」：手動および定期のバックアップと、セキュリティに関わるイベントのログです。',
  'help.ctx.admin-users.title': 'ユーザー',
  'help.ctx.admin-users.summary':
    'このTREKにあるすべてのアカウントを、役割、メールアドレス、最終サインインとともに一覧します。閉じたインスタンスで人が登録できるようにする招待リンクもここにあります。',
  'help.ctx.admin-users.bullet.1':
    'テーブル：ユーザー名、メールアドレス、役割、作成日、最終ログイン、そして行ごとの操作。あなた自身には印が付きます。',
  'help.ctx.admin-users.bullet.2':
    '上部の「ユーザーを作成」で、あなたが渡すパスワード付きのアカウントを手動で追加します。',
  'help.ctx.admin-users.bullet.3':
    '下の「招待リンク」：使用回数の上限と有効期限を持つ一回限りの登録リンクで、必要なら新しいユーザーが到着時に参加する旅行も指定できます。',
  'help.ctx.admin-users.bullet.4':
    '一番下の「権限設定」：操作ごとに、誰が実行できるかを「全員」「旅行メンバー」「旅行オーナー」「管理者のみ」から決めます。',
  'help.ctx.admin-defaults.title': 'ユーザーのデフォルト',
  'help.ctx.admin-defaults.summary':
    '新しいアカウントが最初に持つ設定です。誰も先に地図タブを探さなくて済むように、地図プロバイダー、スタイル、トークン、品質を決めておきます。',
  'help.ctx.admin-defaults.bullet.1':
    '地図プロバイダー、Mapboxのスタイルとトークン、CARTOキー、Mapboxの品質。ユーザーが「設定」の「地図」で設定するのとまったく同じ項目です。',
  'help.ctx.admin-defaults.bullet.2':
    '項目ごとの「リセット」でTREK自身の既定値に戻ります。ユーザー自身の設定は常にこれらより優先されます。',
  'help.ctx.admin-config.title': 'カスタマイズ',
  'help.ctx.admin-config.summary':
    'インスタンス上のすべての旅行が共有するもの：持ち物テンプレート、場所とコレクションに使うカテゴリのセット、そしてVacayが参照する学校の休暇カタログです。',
  'help.ctx.admin-config.bullet.1':
    '「持ち物テンプレート」：旅行の持ち物リストの出発点になる、カテゴリと項目の名前付きリスト。',
  'help.ctx.admin-config.bullet.2':
    '「カテゴリ」：場所インスペクターからコレクションまで、TREK全体で使われるカテゴリの名前、アイコン、色。',
  'help.ctx.admin-config.bullet.3':
    '「学校の休暇」：組み込みのフィードがカバーしない場所のための、国と地域のカタログ。',
  'help.ctx.admin-settings.title': '設定',
  'help.ctx.admin-settings.summary':
    '人がどうやって入るか、サーバーが何と通信してよいか：サインインと登録の方法、SSO、パスキー、二要素認証のポリシー、地図・場所・画像のAPIキー、検索と公共交通のプロバイダー、そしてアップロードに許可するファイル形式。',
  'help.ctx.admin-settings.bullet.1':
    '「認証方法」：「パスワードログイン」「パスワード登録」「SSOログイン」「SSO自動登録」「二要素認証（2FA）を必須にする」。',
  'help.ctx.admin-settings.bullet.2':
    '「シングルサインオン（OIDC）」にはIssuer、クライアント、表示名を。「パスキーログイン」にはRelying Party IDとオリジンを。',
  'help.ctx.admin-settings.bullet.3':
    '「APIキー」：Google Maps、Unsplash、Amapのそれぞれに「テスト」付き。「キーの使いみち」で、Googleキーを支払ってもよい機能だけに絞れます。',
  'help.ctx.admin-settings.bullet.4':
    '「地点検索のプロバイダー」と「公共交通のプロバイダー」で、誰が検索と経路に答えるかを選びます。「許可するファイル形式」はアップロードを制限します。',
  'help.ctx.admin-addons.title': 'アドオン',
  'help.ctx.admin-addons.summary':
    'TREKの機能モジュールで、それぞれにスイッチがあります：リスト、費用、ドキュメント、Vacay、Atlas、Collab、日記、コレクション、ロードトリップ、MCP、AirTrail、Dawarich、そしてAI解析。オフにすると、ナビゲーションの項目、ルート、APIが全員から消えます。',
  'help.ctx.admin-addons.bullet.1': 'アドオンごとに1枚のタイルとスイッチ、オプションがあればそのサブ行。',
  'help.ctx.admin-addons.bullet.2':
    '写真プロバイダーとドキュメントプロバイダーもここにタイルとして並び、ImmichやSynologyをユーザーに提供できます。',
  'help.ctx.admin-addons.bullet.3': '「バッグ管理」はタイルの下に独自のスイッチがあります。',
  'help.ctx.admin-plugins.title': 'プラグイン',
  'help.ctx.admin-plugins.summary':
    'TREKの隣で独自のプロセスとして動くサードパーティのプラグインで、それぞれインストール時に求めた権限を持ちます。カタログからインストールするか、パッケージをアップロードするか、開発中はフォルダをリンクします。',
  'help.ctx.admin-plugins.bullet.1':
    '一覧：インストール済みのプラグインすべてを、バージョン、状態、署名、保持している権限とともに表示。行ごとに有効化、無効化、更新、アンインストールができます。',
  'help.ctx.admin-plugins.bullet.2':
    '「プラグインをアップロード」はパッケージファイルを受け取り、「再スキャン」は開発用にリンクしたプラグインフォルダを取り込みます。',
  'help.ctx.admin-plugins.bullet.3':
    'プラグインごとの「許可するホスト」：プラグインが呼び出してよいアドレス。外部通信は既定で拒否されます。',
  'help.ctx.admin-storage.title': 'ストレージ',
  'help.ctx.admin-storage.summary':
    'アップロードの保存先：ローカルディスク、S3バケット、または両方に書き込むミラー。アップロードのカテゴリごとに別のバックエンドを選べ、「ヘルス」がすべてのバックエンドが応答するかを示します。',
  'help.ctx.admin-storage.bullet.1':
    '「バックエンド」：それぞれの名前と種類に「テスト」「編集」「削除」。環境変数で設定されたものはここでは読み取り専用です。',
  'help.ctx.admin-storage.bullet.2':
    '「カテゴリ」：カバー、ドキュメント、日記の写真、その他をそれぞれバックエンドに割り当てます。変更すると既存ファイルの移動を提案します。',
  'help.ctx.admin-storage.bullet.3':
    '「ヘルス」：バックエンドごとのチェックと、設定がサーバーの見ているものと同じであることを証明するシードファイル。',
  'help.ctx.admin-notifications.title': '通知',
  'help.ctx.admin-notifications.summary':
    'インスタンスがユーザーに提供するチャンネルと、管理者であるあなたに届くチャンネル。ユーザーは「設定」で自分のトピックやURLを選び、あなたは何を用意するかを決めてメールを設定します。',
  'help.ctx.admin-notifications.bullet.1':
    '「アプリ内」「メール（SMTP）」「Ntfy」「Webhook」：それぞれ1つのパネルに、チャンネルをユーザーに提供するスイッチと、必要なサーバー側の設定があります。',
  'help.ctx.admin-notifications.bullet.2':
    '「旅行リマインダー」：旅行が始まる前にサーバーがリマインダーを送るかどうか。',
  'help.ctx.admin-notifications.bullet.3':
    '「管理者Ntfy」と「管理者Webhook」：失敗したバックアップや新しいリリースといった管理者イベントの送り先で、「テスト」付き。',
  'help.ctx.admin-mcp-tokens.title': 'MCPトークン',
  'help.ctx.admin-mcp-tokens.summary':
    'AIクライアントがこのTREKに対して持つすべてのトークンとOAuthセッションを、全ユーザーにわたって一覧し、どれでも取り消せます。',
  'help.ctx.admin-mcp-tokens.bullet.1': '「API トークン」：誰が作成し、いつ最後に使われたか、そして「削除」。',
  'help.ctx.admin-mcp-tokens.bullet.2':
    '「OAuthセッション」：クライアント、ユーザー、付与されたスコープ、そして「無効化」。',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'TREKの新着情報：GitHubのリリース履歴、稼働中のバージョン、そして新しいバージョンが出ているかどうか。更新そのものはアプリの外、ホスト上で行います。',
  'help.ctx.admin-github.bullet.1':
    '「リリース履歴」はリリースをノート付きで一覧します。最新のものには「最新」が付き、あなたのバージョンには印が付きます。',
  'help.ctx.admin-github.bullet.2':
    '新しいリリースが出るとヘッダーに「更新があります」が現れ、Dockerとその他のインストール向けの更新方法が示されます。',
  'help.ctx.admin-backup.title': 'バックアップ',
  'help.ctx.admin-backup.summary':
    'データベースとアップロードの完全バックアップ。手動または定期で作成し、サーバーに保存され、1つのファイルとしてダウンロードできます。「復元」で元に戻します。',
  'help.ctx.admin-backup.bullet.1':
    '「データバックアップ」：「バックアップを作成」と、既存のバックアップの一覧に「ダウンロード」「復元」「削除」。',
  'help.ctx.admin-backup.bullet.2':
    '「バックアップをアップロード」は、別のインスタンスや以前の日に作ったファイルを持ち込みます。',
  'help.ctx.admin-backup.bullet.3': '「自動バックアップ」：オンかオフか、間隔、時刻と曜日、保持する数。',
  'help.ctx.admin-audit.title': '監査',
  'help.ctx.admin-audit.summary':
    'セキュリティと管理に関わるイベントのログ：サインインと失敗、MFAの変更、ユーザーと設定の変更、バックアップと復元。読み取り専用で、新しいものが先です。',
  'help.ctx.admin-audit.bullet.1': 'イベントごとに1行で、時刻、ユーザー、操作、リソース、IP、詳細。',
  'help.ctx.admin-audit.bullet.2': '「更新」で再読み込み、「さらに読み込む」でさらに過去へ。',
  // create-user
  'help.guide.create-user.title': 'ユーザーを作成する',
  'help.guide.create-user.goal': '招待なしで、アカウントを手動で追加します。',
  'help.guide.create-user.step.1': '「ユーザー」タブ上部の「ユーザーを作成」をクリックします。',
  'help.guide.create-user.step.2':
    '「ユーザー名」「メールアドレス」「パスワード」を入力し、「役割」を「ユーザー」か「管理者」から選びます。',
  'help.guide.create-user.step.3': '「ユーザーを作成」をクリックします。',
  'help.guide.create-user.result':
    'アカウントがテーブルに現れ、すぐにサインインできます。パスワードは信頼できる経路で渡してください。',
  'help.guide.create-user.tip.1': '自分でパスワードを決めてもらいたい人には、招待リンクのほうが適しています。',
  'help.guide.create-user.tip.2': '管理者はこのページと監査ログを見られます。それ以外は両方の役割で同じです。',
  // edit-user
  'help.guide.edit-user.title': 'ユーザーの役割やパスワードを変更する',
  'help.guide.edit-user.goal': '誰かを昇格または降格させる、あるいはパスワードを忘れた人を復帰させます。',
  'help.guide.edit-user.step.1':
    'ユーザーの行の鉛筆をクリックします。アカウントの詳細とともに「ユーザーを編集」が開きます。',
  'help.guide.edit-user.step.2':
    '「役割」を変更するか、「新しいパスワード」を設定するか、パスキーを保存していた端末を失った人なら「パスキーをリセット」をクリックし、「保存」します。',
  'help.guide.edit-user.result': '変更は次のリクエストから適用されます。新しいパスワードは次のサインインから使えます。',
  'help.guide.edit-user.tip.1': '自分が最後の管理者である間は、自分から管理者の役割を外せません。',
  'help.guide.edit-user.tip.2':
    'パスキーをリセットしてもパスワードは残ります。本人が「設定」の「アカウント」で新しいパスキーを追加します。',
  // invite-links
  'help.guide.invite-links.title': 'リンクで誰かを招待する',
  'help.guide.invite-links.goal': '閉じたインスタンスに人が登録できるようにし、必要なら旅行に直接参加させます。',
  'help.guide.invite-links.step.1': '「招待リンク」の下で「リンク作成」をクリックします。',
  'help.guide.invite-links.step.2':
    '「最大使用回数」と「有効期限」を設定し、必要に応じて「旅行に追加（任意）」を選び、「作成してコピー」をクリックします。',
  'help.guide.invite-links.step.3':
    'リンクを送ります。各行には使用回数と作成者が表示されます。「リンクをコピー」で再びコピーでき、使い切ったリンクや期限切れのリンクには印が付きます。',
  'help.guide.invite-links.result':
    'リンクを開いた人は自分のパスワードで登録し、旅行が選ばれていればすぐにそれに参加します。',
  'help.guide.invite-links.tip.1': '招待リンクは、「設定」で「パスワード登録」がオフの間も機能します。',
  'help.guide.invite-links.tip.2': '1人向けには、使用回数1回で有効期限の短いリンクがもっとも安全な既定です。',
  // delete-user
  'help.guide.delete-user.title': 'ユーザーを削除する',
  'help.guide.delete-user.goal': 'アカウントと、そのアカウントだけが所有するものをすべて削除します。',
  'help.guide.delete-user.step.1': 'ユーザーの行のゴミ箱アイコンをクリックし、「ユーザー削除」で確認します。',
  'help.guide.delete-user.result':
    'アカウント、そのユーザー自身の旅行、日記は消えます。他の人と共有していた旅行は残りのメンバーに残ります。',
  'help.guide.delete-user.tip.1': '元に戻す手段はありません。確信がなければ先にバックアップを取ってください。',
  'help.guide.delete-user.tip.2': '最後の管理者は削除できません。先に誰か別の人を管理者にしてください。',
  // permissions
  'help.guide.permissions.title': '誰が何をできるかを決める',
  'help.guide.permissions.goal': '操作ごとに、このTREKでどの役割に許可するかを設定します。',
  'help.guide.permissions.step.1':
    '「権限設定」で、操作をそのグループの中から探します。たとえば「旅行管理」の下の「旅行を削除」です。レベルを「全員」「旅行メンバー」「旅行オーナー」「管理者のみ」から選びます。変更した行には「カスタマイズ済み」と表示されます。',
  'help.guide.permissions.step.2':
    '「保存」をクリックします。「既定に戻す」は、すべての行を組み込みのレベルに戻します。',
  'help.guide.permissions.result':
    'ルールはすべての旅行に一度に適用されます。レベルに満たない人のボタンやメニューは表示されなくなります。',
  'help.guide.permissions.tip.1':
    '「旅行オーナー」とは旅行を作成した人のことです。管理者は常にすべての操作ができます。',
  'help.guide.permissions.tip.2':
    'メンバーを削除するより、レベルを下げましょう。編集できないメンバーでも、閲覧とコメントはできます。',
  // default-map
  'help.guide.default-map.title': '新規ユーザーの地図の既定値を設定する',
  'help.guide.default-map.goal': '個人のトークンなしでも、新しいアカウントすべてに動く地図を用意します。',
  'help.guide.default-map.step.1':
    '「地図」の下で「地図エンジン」を選び、MapboxまたはMapLibreなら「地図スタイル」「共有 Mapbox トークン」「高品質モード」を、ラスター地図なら「地図テンプレート」と「共有 CARTO キー」を設定します。',
  'help.guide.default-map.step.2':
    '変更した項目の横の「リセット」でTREK自身の既定値に戻ります。左の「既定のユーザー設定」は「カラーモード」、単位、通貨について同じことをします。',
  'help.guide.default-map.result':
    '新しいアカウントはこの設定で始まります。「設定」で自分の地図を設定した人は自分のものを保ちます。',
  'help.guide.default-map.tip.1':
    'ここで入力したトークンは、自分のトークンを持たない全員で共有されるので、割り当て量に注意してください。',
  'help.guide.default-map.tip.2': '地図タブに一度も触れていない既存のアカウントも、この既定値に従います。',
  // packing-templates
  'help.guide.packing-templates.title': '持ち物テンプレートを作る',
  'help.guide.packing-templates.goal': '空のリストではなく、出発点となる持ち物リストを旅行に与えます。',
  'help.guide.packing-templates.step.1': '「新規テンプレート」をクリックし、名前を入力してチェックマークで確定します。',
  'help.guide.packing-templates.step.2':
    'テンプレートを開いて「カテゴリを追加」をクリックします。各カテゴリの下の「+」で項目を追加でき、項目には名前だけあれば十分です。',
  'help.guide.packing-templates.step.3':
    'すべてその場で保存されます。鉛筆でテンプレート、カテゴリ、項目の名前を変更し、ゴミ箱で削除します。',
  'help.guide.packing-templates.result':
    'テンプレートはすべての旅行の持ち物リストで提案されます。適用すると項目がコピーされるので、旅行ごとに自由に変更できます。',
  'help.guide.packing-templates.tip.1':
    'ビーチ、都市、ハイキングなど旅行の種類ごとのテンプレートのほうが、1つの巨大なリストより使いやすいです。',
  'help.guide.packing-templates.tip.2': 'テンプレートを削除しても、すでに適用した旅行には影響しません。',
  // categories
  'help.guide.categories.title': 'カテゴリのセットを管理する',
  'help.guide.categories.goal': '場所とコレクションが持てるカテゴリと、その見た目を決めます。',
  'help.guide.categories.step.1':
    '「新しいカテゴリ」をクリックし、名前を付け、アイコンと色を選びます。「プレビュー」に結果が表示されます。「作成」をクリックします。',
  'help.guide.categories.step.2':
    '一覧のカテゴリにマウスを乗せると編集や削除ができます。削除時には確認を求められます。',
  'help.guide.categories.result':
    'セットはどこでも一度に適用されます：場所インスペクター、地図のピン、コレクション、フィルター。',
  'help.guide.categories.tip.1':
    '場所はカテゴリのIDを保持するので、カテゴリの名前を変えるとすべての場所で名前が変わります。',
  'help.guide.categories.tip.2':
    '削除したカテゴリの場所はカテゴリなしになります。それが問題なら先に割り当て直してください。',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': '学校の休暇を手動で管理する',
  'help.guide.school-holiday-catalog.goal': '組み込みの休暇フィードがカバーしない国や地域を補います。',
  'help.guide.school-holiday-catalog.step.1':
    '「学校の休暇」の下で「国を追加」をクリックし、「国」と「国コード（例：US）」を入力して「保存」します。次に、異なる部分ごとに「地域を追加」します。',
  'help.guide.school-holiday-catalog.step.2':
    '地域をクリックして「地域または学区」を開きます。「休暇期間を追加」で、それぞれに「休暇名」「開始日」「終了日」を付けて「保存」します。ゴミ箱で期間、地域、そして地域がなくなった国を削除します。',
  'help.guide.school-holiday-catalog.result':
    'ユーザーはVacayの「設定」でその国と地域を見つけ、年間グリッドに期間が表示されます。',
  'help.guide.school-holiday-catalog.tip.1':
    '組み込みフィードの地域はここでは編集できません。日付が間違っていれば、手動の地域を並べて追加してください。',
  // auth-methods
  'help.guide.auth-methods.title': 'サインイン方法を決める',
  'help.guide.auth-methods.goal': 'パスワードによるサインイン、SSO、登録を開閉し、2FAを必須にします。',
  'help.guide.auth-methods.step.1':
    '「認証方法」の下で「パスワードログイン」と「パスワード登録」をオンまたはオフにします。登録がオフだと、新しいアカウントは招待リンク、SSO、手動作成でしか作れません。',
  'help.guide.auth-methods.step.2':
    '「SSOログイン」と「SSO自動登録」には、下で「シングルサインオン（OIDC）」の設定が必要です。自動登録は、誰かが初めてSSOでサインインしたときにアカウントを作ります。',
  'help.guide.auth-methods.step.3':
    '「二要素認証（2FA）を必須にする」は、パスワードでサインインする全員に次回ログイン時の認証アプリの設定を求めます。「パスキーログイン」には、Relying Party IDと、あなたのTREKにアクセスされるオリジンが必要です。',
  'help.guide.auth-methods.result': 'サインインページには、オンのままにした方法だけが表示されます。',
  'help.guide.auth-methods.tip.1':
    '自分を締め出す前に警告が出ます。管理者のための入口が少なくとも1つはオンのままになります。',
  'help.guide.auth-methods.tip.2': '環境変数で設定された値は、ここでは読み取り専用として表示されます。',
  // oidc
  'help.guide.oidc.title': 'シングルサインオンを接続する',
  'help.guide.oidc.goal': 'あなたのIDプロバイダーでサインインできるようにします。',
  'help.guide.oidc.step.1':
    '「シングルサインオン（OIDC）」の下で、ボタン用の「表示名」と、プロバイダーから取得した「Issuer URL」「Client ID」「Client Secret」を入力し、「保存」します。',
  'help.guide.oidc.step.2': '「認証方法」の下で「SSOログイン」をオンにします。',
  'help.guide.oidc.result':
    'サインインページにSSOボタンが表示されます。「SSO自動登録」がオンなら、初めてのユーザーには自動でアカウントが作られます。',
  'help.guide.oidc.tip.1':
    'プロバイダーに必要なリダイレクトURIは、あなたのTREKのアドレスに、ドキュメントにあるOIDCコールバックのパスを加えたものです。',
  'help.guide.oidc.tip.2':
    'どのSSOグループが管理者になるかはクレームマッピングで決まります。ドキュメントのOIDCのページを参照してください。',
  // instance-keys
  'help.guide.instance-keys.title': 'APIキーを入力する',
  'help.guide.instance-keys.goal': 'インスタンス全体で、Googleの地点検索、Unsplashのカバー、Amapを使えるようにします。',
  'help.guide.instance-keys.step.1':
    '「APIキー」の下で「Google Maps APIキー」を貼り付け、「テスト」をクリックします。キーが応答するかどうかがフィールドに表示されます。',
  'help.guide.instance-keys.step.2':
    '「キーの使いみち」の下で、そのキーに課金してよい機能だけをオンにします：オートコンプリート、詳細、写真、情報補完、場所検索の記録。',
  'help.guide.instance-keys.step.3':
    '「Unsplash APIキー」はカバー検索を、「Amap（高德地图）API キー」は中国での地点検索を担います。それぞれ同じ方法でテストします。',
  'help.guide.instance-keys.result':
    'ユーザーは自分のキーなしで機能を使えます。Googleキーがなければ、TREKは無料のOpenStreetMapスタックとTREK Places APIで検索します。',
  'help.guide.instance-keys.tip.1':
    'ユーザーが「設定」で入れた個人のキーは、そのユーザーにとってはインスタンスのキーより優先されます。',
  'help.guide.instance-keys.tip.2':
    'キーは環境変数からも設定できます。その場合、ここでは読み取り専用として表示されます。',
  // places-transit
  'help.guide.places-transit.title': '検索と公共交通のプロバイダーを選ぶ',
  'help.guide.places-transit.goal': '地点検索と公共交通の経路に誰が答えるかを決めます。',
  'help.guide.places-transit.step.1':
    '「地点検索のプロバイダー」の下で「自動」「Google Places」「Amap（高德地图）」「OpenStreetMap」から選びます。「自動」は存在するもっとも良いキーを使います。',
  'help.guide.places-transit.step.2':
    '「公共交通のプロバイダー」の下で、世界中で使えてキー不要の「Transitous（無料）」か、Googleキーが必要な「Google」を選びます。',
  'help.guide.places-transit.result': 'TREKのすべての検索ボックスとすべての公共交通の経路がこの選択に従います。',
  'help.guide.places-transit.tip.1':
    'キーのないプロバイダーはここに警告を表示し、OpenStreetMapにフォールバックします。',
  'help.guide.places-transit.tip.2':
    'Googleの公共交通の経路はリクエストごとに課金されます。Transitousは課金されません。',
  // file-types
  'help.guide.file-types.title': 'ファイル形式を制限する',
  'help.guide.file-types.goal': 'アップロードに許可する拡張子を決めます。',
  'help.guide.file-types.step.1': '「許可するファイル形式」の下で、カンマ区切りの拡張子の一覧を編集して保存します。',
  'help.guide.file-types.result':
    'それ以外の形式のアップロードは、ドキュメント、日記、カバーのいずれでも、明確なメッセージとともに拒否されます。',
  'help.guide.file-types.tip.1': '画像形式は一覧に残してください。カバーと日記の写真も同じチェックを通ります。',
  // toggle-addon
  'help.guide.toggle-addon.title': 'アドオンをオンまたはオフにする',
  'help.guide.toggle-addon.goal': '機能モジュールを全員に提供するか、取り下げます。',
  'help.guide.toggle-addon.step.1':
    'アドオンのタイルのスイッチを切り替えます。ナビゲーションの項目が全員に対して一斉に現れたり消えたりします。',
  'help.guide.toggle-addon.step.2':
    '一部のタイルにはオプションのサブ行があります。たとえば「リスト」の下の「バッグ管理」や、「日記」の下の写真プロバイダーです。これらはアドオンがオンの間だけ表示されます。',
  'help.guide.toggle-addon.result': 'オフにしたアドオンのデータは保持されます。再びオンにすれば再び表示されます。',
  'help.guide.toggle-addon.tip.1':
    'MCPをオフにすると、エンドポイントと、それに依存する「連携」のセクションが消えます。',
  'help.guide.toggle-addon.tip.2':
    'Vacay、Atlas、日記はユーザーの要望がもっとも多いアドオンです。ドキュメントにはアップロード用のストレージが必要です。',
  // install-plugin
  'help.guide.install-plugin.title': 'プラグインをインストールする',
  'help.guide.install-plugin.goal': 'サードパーティのプラグインを追加し、求められた権限だけを与えます。',
  'help.guide.install-plugin.step.1':
    '「探す」を開いてプラグインを選び「インストール」をクリックするか、「プラグインをアップロード」をクリックして.zipまたは.tar.gzのパッケージを選びます。',
  'help.guide.install-plugin.step.2':
    '「インストール済み」に戻って行を読みます：プラグインが読み書きできるもの、呼び出すホスト、署名の有無。「プラグインを有効にする」をオンにします。',
  'help.guide.install-plugin.step.3':
    '行のメニューには「再起動」「エラーログを表示」「許可するホスト」「バージョン変更…」があり、「削除」でアンインストールします。新しいバージョンがあれば行に更新が提案され、新しい権限を求める更新はあなたが承認するまでオフのままです。',
  'help.guide.install-plugin.result':
    'プラグインは独自のプロセスで動きます。追加されるウィジェット、地図レイヤー、ツールは、プラグインが宣言した場所に現れます。',
  'help.guide.install-plugin.tip.1':
    '「再スキャン」は、パッケージなしで開発用にリンクしたプラグインフォルダを取り込みます。',
  'help.guide.install-plugin.tip.2':
    '署名のないプラグインにはその印が付きます。ソースを信頼できる場合にだけインストールしてください。',
  // storage-backends
  'help.guide.storage-backends.title': 'アップロードをS3やミラーへ移す',
  'help.guide.storage-backends.goal':
    'ファイルをオブジェクトストレージに、あるいはディスクとバケットの両方に保存します。',
  'help.guide.storage-backends.step.1':
    '「バックエンド」の下で「バックエンドを追加」をクリックし、「名前」を付け、「タイプ」を「ローカル」「S3」「ミラー」から選び、フィールドを埋めて「適用」します。「テスト」で接続を確認し、「変更を保存」で書き込みます。',
  'help.guide.storage-backends.step.2':
    '「カテゴリ」の下で、アップロードのカテゴリごとにバックエンドを割り当てます。変更すると「既存のオブジェクトを移動」か「新規書き込みのみ切り替える」かを尋ねられます。',
  'help.guide.storage-backends.step.3':
    '上部の「ヘルス」がすべてのバックエンドをチェックします。赤い項目は何が失敗したかを示します。',
  'help.guide.storage-backends.result':
    '新しいアップロードは割り当てたバックエンドに入ります。移動したファイルはそこから配信されます。',
  'help.guide.storage-backends.tip.1': '環境変数で設定されたバックエンドは表示されますが、ここでは編集できません。',
  'help.guide.storage-backends.tip.2':
    'ミラーは両方の宛先に書き込み、最初の宛先から読み取ります。ダウンタイムなしの移行に使ってください。',
  // channels-instance
  'help.guide.channels-instance.title': '通知チャンネルを設定する',
  'help.guide.channels-instance.goal': 'ユーザーが選べるチャンネルを決め、メールを設定します。',
  'help.guide.channels-instance.step.1':
    '「メール（SMTP）」の下で、SMTP Host、SMTP Port、SMTP User、SMTP Password、From Addressを入力します。「テストメール送信」であなた宛てにメールが送られます。',
  'help.guide.channels-instance.step.2':
    '「Ntfy」と「Webhook」をオンにして提供します。ユーザーは「設定」の「通知」で自分のトピックやURLを入力します。',
  'help.guide.channels-instance.step.3':
    '「旅行リマインダー」は旅行が始まる前のリマインダーを切り替えます。「アプリ内」は常にオンで、ここでは説明されるだけです。',
  'help.guide.channels-instance.result':
    'すべてのユーザーの「通知」タブに、あなたがオンにしたチャンネルが表示されます。',
  'help.guide.channels-instance.tip.1':
    'ここで入力した既定のntfyサーバーはユーザーに事前入力されます。ユーザーは自分のサーバーを指定することもできます。',
  'help.guide.channels-instance.tip.2':
    'プラグインのチャンネルは、その機能を持つプラグインが有効になると自動的に現れます。',
  // admin-channels
  'help.guide.admin-channels.title': '管理者イベントをスマホで受け取る',
  'help.guide.admin-channels.goal':
    '失敗したバックアップ、新しいリリース、その他のインスタンスのイベントを知らせてもらいます。',
  'help.guide.admin-channels.step.1':
    '「管理者Ntfy」の下でトピックと、必要ならサーバーとトークンを入力します。「管理者Webhook」の下にはURLを入力します。',
  'help.guide.admin-channels.step.2':
    '「ntfyテスト送信」または「Webhookテスト送信」をクリックして、メッセージが届くのを確認します。',
  'help.guide.admin-channels.result': '管理者イベントは、各管理者のアプリ内のベルに加えてそこにも届きます。',
  'help.guide.admin-channels.tip.1':
    '管理者用のトピックは個人用と分けてください。障害の通知が旅行の通知に埋もれないようにするためです。',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'AIのアクセスを取り消す',
  'help.guide.mcp-tokens-admin.goal':
    'どのユーザーのものでも、AIクライアントが持つトークンとセッションをすべて見て切断します。',
  'help.guide.mcp-tokens-admin.step.1':
    '「API トークン」の下でユーザーと名前からトークンを探します。ゴミ箱で削除すると、クライアントはすぐに止まります。',
  'help.guide.mcp-tokens-admin.step.2':
    '「OAuthセッション」の下ではブラウザーベースのクライアントについて同じことができます：クライアント、ユーザー、日付があり、ゴミ箱でセッションを無効化します。',
  'help.guide.mcp-tokens-admin.result':
    'クライアントはユーザーが再び接続する必要があります。それ以外は何も変わりません。',
  'help.guide.mcp-tokens-admin.tip.1':
    'スコープを見ればクライアントに何ができたかがわかります。読み取り専用のスコープは残しておいても無害です。',
  'help.guide.mcp-tokens-admin.tip.2': 'MCPアドオンをオフにすると、すべてが一度に取り消されます。',
  // release-history
  'help.guide.release-history.title': '新しいリリースを確認する',
  'help.guide.release-history.goal': 'あなたのTREKが最新かどうか、次のバージョンで何が来るかを知ります。',
  'help.guide.release-history.step.1':
    '新しいリリースがあると、管理ページの上部に「更新があります」が表示されます。「GitHubで見る」で開き、「更新方法」がDockerとその他のインストールでの更新を説明します。',
  'help.guide.release-history.step.2':
    '「リリース履歴」はすべてのリリースをノート付きで一覧します。「詳細を表示」で展開し、最新のものには「最新」が付き、「さらに読み込む」でさらに過去へ進みます。',
  'help.guide.release-history.result':
    '更新はホスト上で、新しいイメージを取得するか新しいタグをビルドして行います。データディレクトリはそのまま残ります。',
  'help.guide.release-history.tip.1': '更新の前にバックアップを取ってください。「バックアップ」タブはすぐ隣です。',
  'help.guide.release-history.tip.2':
    'プレリリースは表示されますが、あなたがプレリリースを使っていない限り更新として知らされません。',
  // create-backup
  'help.guide.create-backup.title': 'バックアップを作成して復元する',
  'help.guide.create-backup.goal':
    'インスタンス全体のスナップショットを取り、別の場所にコピーを保管し、元に戻せるようにします。',
  'help.guide.create-backup.step.1':
    '「データバックアップ」の下で「バックアップを作成」をクリックします。データベースとアップロードがサーバー上の1つのファイルにまとめられます。',
  'help.guide.create-backup.step.2':
    '「ダウンロード」でマシンの外にコピーを保管します。ゴミ箱で古いものを削除して容量を空けます。',
  'help.guide.create-backup.step.3':
    'バックアップの「復元」、またはファイルを使った「バックアップをアップロード」は、「バックアップを復元しますか？」が一度確認したあと、現在のデータを置き換えます。',
  'help.guide.create-backup.result':
    '復元するとユーザー、旅行、ファイル、設定がそのバックアップ時点の状態に戻り、全員がサインアウトされます。',
  'help.guide.create-backup.tip.1': '復元はここで唯一、元に戻せない操作です。先に新しいバックアップを作ってください。',
  'help.guide.create-backup.tip.2':
    'バックアップはデータディレクトリにあります。別のマシンにコピーがあってこそ、バックアップと呼べます。',
  // auto-backup
  'help.guide.auto-backup.title': 'バックアップをスケジュールする',
  'help.guide.auto-backup.goal': 'サーバーに自動でバックアップさせ、直近の数個だけを残します。',
  'help.guide.auto-backup.step.1':
    '「自動バックアップ」の下で「自動バックアップを有効化」をオンにし、「間隔」「実行時刻」と、週次または月次なら「曜日」または「月の日」を選びます。',
  'help.guide.auto-backup.step.2':
    '「古いバックアップを削除」でバックアップを保持する期間を設定します。新しいものが作られると、それより古いものは消えます。',
  'help.guide.auto-backup.result':
    'バックアップはスケジュールどおりに一覧に現れます。失敗は管理者チャンネルに届きます。',
  'help.guide.auto-backup.tip.1':
    '時刻はサーバーのタイムゾーンに従います。タイムゾーンは「監査」タブに表示されています。',
  'help.guide.auto-backup.tip.2': 'サーバーの容量には限りがあります。3〜5個を保持すれば通常は十分です。',
  // audit-log
  'help.guide.audit-log.title': '監査ログを読む',
  'help.guide.audit-log.goal': '誰が何を、いつしたかを調べます。',
  'help.guide.audit-log.step.1':
    '行を読みます：時刻、ユーザー、操作、リソース、IP、詳細。新しいものが先です。操作は、ログインの失敗、MFAの変更、復元など、起きたことで名付けられています。',
  'help.guide.audit-log.step.2': '「更新」で先頭を再読み込みし、「さらに読み込む」でさらに過去へ進みます。',
  'help.guide.audit-log.result': 'なぜ何かが変わったのかを尋ねる人に渡せる記録です。',
  'help.guide.audit-log.tip.1': '時刻はサーバーのタイムゾーンで表示され、テーブルの上にその名前があります。',
  'help.guide.audit-log.tip.2': 'ログは追記専用です。ここにあるものはアプリからは編集も削除もできません。',
};

export default help;
