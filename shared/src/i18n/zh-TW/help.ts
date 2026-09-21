import type { TranslationStrings } from '../types';

// English fallback until 'zh-TW' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': '此頁面的說明',
  'help.center.title': '說明',
  'help.center.onThisScreen': '關於此頁面',
  'help.center.screens': '頁面',
  'help.center.thisScreen': '目前頁面',
  'help.center.subScreens': '子頁面：{count}',
  'help.center.subScreensLabel': '子頁面',
  'help.center.guidesCount': '{count} 篇指南',
  'help.center.goToScreen': '前往{screen}',
  'help.center.overview': '總覽',
  'help.center.howTo': '如何操作',
  'help.center.searchPlaceholder': '搜尋指南與文件…',
  'help.center.searchEmpty': '找不到與「{query}」相關的內容。',
  'help.center.searchGuides': '指南',
  'help.center.searchDocs': '文件',
  'help.center.searchError': '搜尋目前無法使用。',
  'help.center.back': '返回',
  'help.center.close': '關閉說明',
  'help.center.steps': '{count} 個步驟',
  'help.center.step': '第 {n} 步',
  'help.center.stepsLabel': '步驟',
  'help.center.stepOf': '第 {n} 步，共 {total} 步',
  'help.center.screenshot': '截圖',
  'help.center.result': '結果',
  'help.center.tips': '小提醒',
  'help.center.related': '相關內容',
  'help.center.openDocs': '在「說明與文件」中開啟',
  'help.center.docsSection': '文件',
  'help.center.noContext': '此頁面尚無指南。',
  'help.center.noContextHint': '搜尋文件，或告訴我們您在找什麼。',
  'help.center.feedback': '缺了什麼？',
  'help.center.feedbackLink': '在 GitHub 上告訴我們',
  'help.center.discord': '在 Discord 發問',
  'help.center.quick': '快速',
  'help.center.guide': '指南',
  'help.center.tour': '操作示範',
  'help.center.imageAlt': '「{title}」第 {n} 步',

  // ctx
  'help.ctx.dashboard.title': '儀表板',
  'help.ctx.dashboard.summary':
    '儀表板是所有旅行的入口。頂端的登機證會突顯正在進行或即將出發的旅行，下方那一列統計你已走過的旅程，卡片則列出你正在規劃、已歸檔或已完成的全部旅行。',
  'help.ctx.dashboard.bullet.1': '登機證：正在進行或下一趟旅行，含日期、同行者、地點與倒數計時。點一下即可開啟旅行。',
  'help.ctx.dashboard.bullet.2': '旅行統計：去過的國家、旅行次數、在途天數與飛行距離，彙整你的全部旅行。',
  'help.ctx.dashboard.bullet.3':
    '旅行卡片：依「已規劃」「已歸檔」「已完成」篩選，以格狀或清單顯示。將滑鼠移到卡片上可編輯、複製、歸檔與刪除。',
  'help.ctx.dashboard.bullet.4': '右側小工具：貨幣換算、世界時鐘、即將到來的預訂與收藏集。每一項都可以關閉。',
  'help.ctx.dashboard.bullet.5': '「新建旅行」卡片與右下角的按鈕都能建立新旅行。',

  // create-trip
  'help.guide.create-trip.title': '建立旅行',
  'help.guide.create-trip.goal': '用名稱、日期與封面圖片開始一趟新旅行。',
  'help.guide.create-trip.step.1': '點選「新建旅行」。旅行清單末端的卡片與右下角的按鈕作用相同。',
  'help.guide.create-trip.step.2': '為旅行取個名字。這是唯一的必填欄位，其餘內容都可以稍後補上。',
  'help.guide.create-trip.step.3': '選擇開始與結束日期。TREK 會為每個日期建立一天，行程隨即可以開始填寫。',
  'help.guide.create-trip.step.4': '選填：加入封面圖片。上傳自己的照片、拖曳一張進來，或在 Unsplash 搜尋目的地。',
  'help.guide.create-trip.step.5': '點選「建立新旅行」。',
  'help.guide.create-trip.result': '旅行會出現在儀表板上。如果它是你的下一趟旅行，會顯示在頂端的登機證中。',
  'help.guide.create-trip.tip.1': '日期之後可以修改。如果已有預訂，TREK 會詢問是否連同日程一起移動。',
  'help.guide.create-trip.tip.2': '此處選擇的旅行貨幣是所有費用的換算目標。請選擇目的地的貨幣。',

  // edit-trip
  'help.guide.edit-trip.title': '編輯旅行',
  'help.guide.edit-trip.goal': '重新命名旅行、更改日期或調整設定。',
  'help.guide.edit-trip.step.1': '將滑鼠移到旅行卡片（或登機證）上，點選鉛筆圖示。',
  'help.guide.edit-trip.step.2': '依需要修改：名稱、描述、日期、封面、貨幣、提醒或成員。',
  'help.guide.edit-trip.step.3': '點選「更新」。',
  'help.guide.edit-trip.result': '卡片會立即更新，旅行的每位成員都看得到。',
  'help.guide.edit-trip.tip.1': '移動已有預訂的旅行日期時，會出現第二步，詢問預訂是否一併移動。',

  // cover-image
  'help.guide.cover-image.title': '設定封面圖片',
  'help.guide.cover-image.goal': '為旅行設定一張顯示在卡片與登機證上的圖片。',
  'help.guide.cover-image.step.1': '透過卡片上的鉛筆圖示開啟旅行的編輯表單。',
  'help.guide.cover-image.step.2': '在「封面圖片」處拖入照片、點選上傳，或在 Unsplash 搜尋框輸入目的地。',
  'help.guide.cover-image.step.3': '選擇一張照片，點選「更新」。',
  'help.guide.cover-image.result': '照片會隨旅行一起儲存，並在所有列出該旅行的地方顯示。',
  'help.guide.cover-image.tip.1': '來自 Unsplash 搜尋的照片會自動標註來源；你自己上傳的照片保存在你的伺服器上。',

  // duplicate-trip
  'help.guide.duplicate-trip.title': '複製旅行',
  'help.guide.duplicate-trip.goal': '把一趟旅行當作範本，重複用於新旅行。',
  'help.guide.duplicate-trip.step.1': '將滑鼠移到卡片上，點選複製圖示。',
  'help.guide.duplicate-trip.step.2': '查看哪些內容會被複製、哪些不會，然後確認。',
  'help.guide.duplicate-trip.result': '副本會出現在原旅行旁邊，改個名稱和日期就能使用。',
  'help.guide.duplicate-trip.tip.1':
    '日程、地點、預訂、預算項目、打包清單與每日備註會被複製。成員、聊天、投票、檔案與分享連結不會。',

  // archive-trip
  'help.guide.archive-trip.title': '歸檔與還原旅行',
  'help.guide.archive-trip.goal': '不刪除旅行，只是先收起來，之後再還原。',
  'help.guide.archive-trip.step.1': '將滑鼠移到卡片上，點選「歸檔」。',
  'help.guide.archive-trip.step.2': '把卡片上方的篩選切換為「已歸檔」即可再次看到它。',
  'help.guide.archive-trip.step.3': '點選卡片上的「恢復」，它就會回到「已規劃」。',
  'help.guide.archive-trip.result': '歸檔的旅行保留全部內容，只是不再佔據儀表板與全部旅行的行事曆訂閱。',

  // delete-trip
  'help.guide.delete-trip.title': '刪除旅行',
  'help.guide.delete-trip.goal': '永久刪除一趟旅行。',
  'help.guide.delete-trip.step.1': '將滑鼠移到卡片上，點選垃圾桶圖示。',
  'help.guide.delete-trip.step.2': '確認。對話方塊會顯示旅行名稱，方便你核對。',
  'help.guide.delete-trip.result': '旅行及其日程、地點、預訂與檔案都會被刪除，且無法復原。拿不準的話請改為歸檔。',

  // filter-and-view
  'help.guide.filter-and-view.title': '尋找已完成的旅行，切換格狀與清單',
  'help.guide.filter-and-view.goal': '查看已完成或已歸檔的旅行，並選擇喜歡的版面配置。',
  'help.guide.filter-and-view.step.1':
    '使用卡片上方的「已規劃」「已歸檔」「已完成」。結束日期已過的旅行都屬於「已完成」。',
  'help.guide.filter-and-view.step.2': '點選清單圖示切換為精簡清單，再點一次回到格狀。',
  'help.guide.filter-and-view.result': '儀表板會記住你在此裝置上的版面配置。',

  // calendar-feed
  'help.guide.calendar-feed.title': '在行事曆訂閱全部旅行',
  'help.guide.calendar-feed.goal': '在你的行事曆 App 中查看每趟進行中旅行的日程與預訂，並保持同步。',
  'help.guide.calendar-feed.step.1': '點選檢視切換旁邊的行事曆圖示。',
  'help.guide.calendar-feed.step.2': '點選「Enable calendar subscription」。TREK 會產生一個私密的訂閱連結。',
  'help.guide.calendar-feed.step.3':
    '用按鈕（Google、Apple、Outlook）加入訂閱，或把連結複製到任何支援 URL 訂閱的行事曆 App。',
  'help.guide.calendar-feed.result':
    '每趟進行中的旅行都會顯示在你的行事曆並自動更新。已歸檔的旅行與結束超過 90 天的旅行不包含在內。',
  'help.guide.calendar-feed.tip.1': '連結是私密的，任何取得連結的人都能讀取訂閱；一旦外洩，請在同一對話方塊中撤銷。',

  // widgets
  'help.guide.widgets.title': '選擇儀表板小工具',
  'help.guide.widgets.goal': '顯示或隱藏統計列與右側小工具。',
  'help.guide.widgets.step.1': '開啟右上角的頭像選單，選擇「設定」。',
  'help.guide.widgets.step.2': '切換到「Appearance」分頁。',
  'help.guide.widgets.step.3': '在「Dashboard widgets」下開啟或關閉各個小工具。桌面版與行動版分別設定。',
  'help.guide.widgets.step.4': '回到儀表板，變更立即生效。',
  'help.guide.widgets.result': '隱藏的小工具會把空間讓給旅行；關閉整個右欄後，版面會置中顯示。',
  'help.guide.widgets.link': '開啟外觀設定',

  // currency-widget
  'help.guide.currency-widget.title': '貨幣換算',
  'help.guide.currency-widget.goal': '依目前匯率在兩種貨幣之間換算金額。',
  'help.guide.currency-widget.step.1': '輸入金額並選擇兩種貨幣。',
  'help.guide.currency-widget.step.2': '中間的箭頭交換貨幣組合，圓形箭頭重新整理匯率。',
  'help.guide.currency-widget.result': '貨幣組合會儲存在你的帳號中，在每台裝置上都一致。',
  'help.guide.currency-widget.tip.1': '匯率來自歐洲中央銀行，每天更新一次。',

  // timezones-widget
  'help.guide.timezones-widget.title': '新增世界時鐘',
  'help.guide.timezones-widget.goal': '隨時掌握目的地的當地時間。',
  'help.guide.timezones-widget.step.1': '點選「時區」小工具中的 +，搜尋一個城市。',
  'help.guide.timezones-widget.step.2': '點選時鐘旁邊的 × 即可移除。',
  'help.guide.timezones-widget.result': '時鐘會隨你的帳號一起儲存。',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay 是你的個人休假規劃工具：一年有多少假、已登記哪些天、還剩多少。格線一覽整年；側欄包含年份選擇、一起規劃的人、與你分享的行事曆、圖例和你的假期額度。',
  'help.ctx.vacay.bullet.1':
    '年度格線：十二張月卡片，每天一格。點一下某天即可登記或清除。小藍點標記已有旅行涵蓋的日子。',
  'help.ctx.vacay.bullet.2':
    '底部工具列：「休假」或「公司假日」模式，加上改變點擊登記內容的「半天」與「補休 / 彈性」開關。',
  'help.ctx.vacay.bullet.3': '「年假額度」：本年的天數、已用與剩餘，含前一期間的結轉。',
  'help.ctx.vacay.bullet.4': '「成員」是與你的計畫合併的人，各有自己的顏色。「共享的日曆」以唯讀圓環顯示他人的休假日。',
  'help.ctx.vacay.bullet.5':
    '「設定」涵蓋週末、每週起始日、結轉、你的休假年度、公司假日，以及公共假日或學校假期行事曆。',
  // log-day
  'help.guide.log-day.title': '登記一個休假日',
  'help.guide.log-day.goal': '在年度格線標記一天休假，並看到餘額隨之變化。',
  'help.guide.log-day.step.1': '看底部工具列：帶你顏色的左側按鈕代表點一下就會為你登記一個休假日。',
  'help.guide.log-day.step.2': '在任一月卡片點某一天。它會填上你的顏色，「已用」多一天。',
  'help.guide.log-day.step.3': '再點同一天即可清除。',
  'help.guide.log-day.result': '該日已登記，「天」「已用」「剩餘」立即更新，與你合併計畫的人都能即時看到。',
  'help.guide.log-day.tip.1': '「設定」中「鎖定週末」開啟時，週末無法登記。',
  'help.guide.log-day.tip.2': '格子裡的藍點表示你的某次旅行涵蓋那天，這樣能看到休假與旅行重疊之處。',
  // half-day
  'help.guide.half-day.title': '登記半天',
  'help.guide.half-day.goal': '只休一個下午，而不花掉一整天額度。',
  'help.guide.half-day.step.1': '在工具列開啟「半天」。橘色圓點就是半天在格線中的標記。',
  'help.guide.half-day.step.2': '點某一天。它登記為 0.5，角落帶有橘色圓點。',
  'help.guide.half-day.step.3': '完成後關閉「半天」；用不同設定點半天會就地轉換。',
  'help.guide.half-day.result': '「已用」增加 0.5。「半天」與「補休 / 彈性」彼此獨立，所以也能登記半天補休。',
  'help.guide.half-day.tip.1': '工具列永遠顯示下一次點擊將放置的標記，登記前可先確認。',
  // comp-day
  'help.guide.comp-day.title': '登記補休或彈性時間',
  'help.guide.comp-day.goal': '使用不消耗假期額度的補休。',
  'help.guide.comp-day.step.1': '在工具列開啟「補休 / 彈性」。斜線圓盤就是補休日在格線中的樣子。',
  'help.guide.comp-day.step.2': '點某一天。它以你顏色的斜線填滿，而非實色方塊。',
  'help.guide.comp-day.result': '補休日在額度方塊旁另行統計，永不減少「剩餘」。',
  'help.guide.comp-day.tip.1': '補回的加班、彈性工時、補休日：凡是休息但不算休假的都屬於這裡。',
  // entitlement
  'help.guide.entitlement.title': '設定假期額度',
  'help.guide.entitlement.goal': '告訴 Vacay 你一年有多少休假天數。',
  'help.guide.entitlement.step.1': '在側欄「年假額度」下點「天」方塊。',
  'help.guide.entitlement.step.2': '輸入天數並按 Enter。',
  'help.guide.entitlement.result': '「剩餘」由額度、結轉（如有）與已用天數重新計算。',
  'help.guide.entitlement.tip.1': '每年各有額度，此處變更只影響所選年份。',
  // years
  'help.guide.years.title': '新增與切換年份',
  'help.guide.years.goal': '提前規劃明年，或回顧去年。',
  'help.guide.years.step.1': '點年份右側的 + 新增下一年，或左側的 + 新增上一年。',
  'help.guide.years.step.2': '用箭頭或下方的年份標籤切換年份。',
  'help.guide.years.step.3': '要刪除年份，將滑鼠移到其標籤上並點小減號。該年的登記會一併刪除，請謹慎確認。',
  'help.guide.years.result': '每年保留各自的額度與登記；結轉把它們連接起來。',
  // company-holidays
  'help.guide.company-holidays.title': '標記公司假日',
  'help.guide.company-holidays.goal': '封鎖全公司休息的日子，不消耗任何人的額度。',
  'help.guide.company-holidays.step.1':
    '開啟「設定」，確認「公司假日」已開啟。預設開啟；只有開啟時工具列才提供該模式。',
  'help.guide.company-holidays.step.2': '回到格線，把工具列切換到「公司假日」模式。',
  'help.guide.company-holidays.step.3': '點選相應日期。它們變為琥珀色並出現在圖例中。',
  'help.guide.company-holidays.result': '公司假日對所有合併計畫的人可見，且永不減少「剩餘」。',
  'help.guide.company-holidays.tip.1': '任何已合併的成員都能編輯公司假日，請約定由誰維護。',
  // public-holidays
  'help.guide.public-holidays.title': '顯示公共假日',
  'help.guide.public-holidays.goal': '把你所在國家或地區的公共假日放到格線上。',
  'help.guide.public-holidays.step.1': '開啟「設定」並開啟「公共假日」。',
  'help.guide.public-holidays.step.2': '點「新增日曆」，選擇國家，必要時再選地區。可選擇設定顏色與標籤。',
  'help.guide.public-holidays.step.3': '關閉「設定」。假日出現在格線與圖例中。',
  'help.guide.public-holidays.result': '公共假日以行事曆顏色標記，永不計入你的額度。',
  'help.guide.public-holidays.tip.1': '可以新增多個行事曆，例如你自己的地區和已合併同事的地區。',
  // school-holidays
  'help.guide.school-holidays.title': '顯示學校假期',
  'help.guide.school-holidays.goal': '把所在地區的學校假期與自己的休假並排查看。',
  'help.guide.school-holidays.step.1': '開啟「設定」並開啟「School Holidays」。',
  'help.guide.school-holidays.step.2': '點「新增日曆」並選擇國家。若該國按地區劃分，請再選地區或群組。',
  'help.guide.school-holidays.step.3': '關閉「設定」。每段假期在其日期底部顯示彩色條帶。',
  'help.guide.school-holidays.result': '學校假期僅供顯示，不會減少任何人的額度。',
  'help.guide.school-holidays.tip.1': '缺少地區？管理員可在「管理」、「配置」、「學校假期」中手動維護。',
  // weekends
  'help.guide.weekends.title': '鎖定週末並設定每週起始日',
  'help.guide.weekends.goal': '把週末排除在統計之外，並從你習慣的那天開始一週。',
  'help.guide.weekends.step.1': '開啟「設定」。',
  'help.guide.weekends.step.2': '開啟「鎖定週末」，並選擇哪些天算作你的週末。',
  'help.guide.weekends.step.3': '在「每週開始於」選擇週一或週日。',
  'help.guide.weekends.result': '被封鎖的日子在格線中顯示為灰色，無法誤登記。',
  // leave-year
  'help.guide.leave-year.title': '設定休假年度',
  'help.guide.leave-year.goal': '依會計年度或到職日計算額度，而不是一月到十二月。',
  'help.guide.leave-year.step.1': '開啟「設定」並找到「休假年度」。',
  'help.guide.leave-year.step.2': '選擇「日曆年」、「會計年度」（指定起始月日）或「到職日」（指定到職日期）。',
  'help.guide.leave-year.result': '額度、已用天數與結轉都依該期間計算，格線從其第一個月開始。',
  'help.guide.leave-year.tip.1': '此設定是個人的：在合併計畫中，每個人保留自己的休假年度與數字。',
  // carry-over
  'help.guide.carry-over.title': '結轉未用天數',
  'help.guide.carry-over.goal': '把期間末剩餘的天數加到下一期。',
  'help.guide.carry-over.step.1': '開啟「設定」。',
  'help.guide.carry-over.step.2': '開啟「結轉」。',
  'help.guide.carry-over.result': '結轉數量會在所有年份重新計算，並顯示在額度下方。',
  'help.guide.carry-over.tip.1': '關閉後所有結轉餘額歸零。',
  // invite
  'help.guide.invite.title': '與他人共同規劃',
  'help.guide.invite.goal': '與另一位 TREK 使用者合併計畫，在同一格線中看到彼此的休假。',
  'help.guide.invite.step.1': '點「成員」面板中的人形圖示。',
  'help.guide.invite.step.2': '選擇使用者並送出邀請。',
  'help.guide.invite.step.3': '對方收到通知並接受。在此之前邀請顯示為待處理。',
  'help.guide.invite.result': '兩個計畫合併：每人一種顏色，可以互相登記休假，一切即時同步。',
  'help.guide.invite.tip.1': '要撤銷合併，請使用「設定」中的「解除合併」。每個人的登記會回到自己的計畫。',
  'help.guide.invite.tip.2': '如果對方只需查看你的休假，請分享行事曆而非合併。',
  // share-calendar
  'help.guide.share-calendar.title': '以唯讀方式分享行事曆',
  'help.guide.share-calendar.goal': '讓別人看到你何時休假，而不給他們修改你計畫的權限。',
  'help.guide.share-calendar.step.1': '點「共享的日曆」面板中的分享圖示。',
  'help.guide.share-calendar.step.2': '選擇使用者並點「共享」。無需對方接受。',
  'help.guide.share-calendar.step.3': '與你分享的行事曆出現在同一面板；眼睛圖示可隱藏，「停止共享」撤銷你的分享。',
  'help.guide.share-calendar.result': '你的休假以彩色圓環顯示在對方格線中。你分享的內容對方無法編輯。',
  'help.guide.share-calendar.tip.1': '分享與合併彼此獨立：可以與一人合併，同時與其他人分享。',
  'help.guide.share-calendar.tip.2': '將滑鼠移到帶圓環的日子上，即可查看誰休假以及休多久。',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas 是你在世界地圖上的旅行足跡：每個旅行帶你去過的國家都會上色，在使用 TREK 之前去過的國家可以手動加入。放大可以看到地區，把還想去的地方記在心願單裡，並在底部的玻璃面板中查看你的數字。',
  'help.ctx.atlas.bullet.1':
    '地圖：已訪問的國家帶有專屬且不變的顏色，計劃中的國家是虛線輪廓，心願單裡的國家是斜線填滿，其餘都是灰色。將滑鼠移到國家上可查看它的旅行、地點以及首次和最近一次到訪。',
  'help.ctx.atlas.bullet.2':
    '頂部搜尋：輸入國家或地點。選一個國家，地圖會飛過去並開啟它的彈出視窗；選一個地點，會落在它所在的地區，方便你標記那裡。',
  'help.ctx.atlas.bullet.3':
    '右上角的「顯示計劃中的國家」：顯示你即將出發的旅行所涉及的國家。這個開關只在你有這類旅行時才出現。',
  'help.ctx.atlas.bullet.4':
    '底部面板：「統計」分頁有國家、旅行、地點、城市、天數、各大洲和你的連續紀錄；「心願單」分頁列出還在前方等你的地方。',
  'help.ctx.atlas.bullet.5': '地區：從縮放層級 5 起，地圖切換為州和省，每一個都可點選來標記或取消標記。',
  'help.ctx.atlas.bullet.6':
    'Dawarich：連接該擴充套件後，統計左側會出現一個面板，根據你的記錄勾掉心願並加入國家，但絕不會未經你確認就執行。',
  // mark-country
  'help.guide.mark-country.title': '將國家標記為已訪問',
  'help.guide.mark-country.goal': '加入一個你在使用 TREK 之前去過的國家，讓地圖和計數把它算進去。',
  'help.guide.mark-country.step.1': '在地圖頂部的搜尋框中輸入國家名稱。',
  'help.guide.mark-country.step.2': '從清單中選擇它。地圖飛過去，並為該國開啟一個彈出視窗。',
  'help.guide.mark-country.step.3': '選擇「標記為已訪問」。',
  'help.guide.mark-country.result':
    '該國在地圖上獲得自己的顏色，「國家」計數加一。這個顏色是永久的：再標記其他國家也不會打亂其餘國家的顏色。',
  'help.guide.mark-country.tip.1': '在地圖上點選灰色國家會開啟同一個彈出視窗；對小國來說，搜尋是最可靠的入口。',
  'help.guide.mark-country.tip.2': '手動標記的國家始終算作已訪問，不管前往那裡的旅行日期為何。',
  // unmark-country
  'help.guide.unmark-country.title': '移除你標記過的國家',
  'help.guide.unmark-country.goal': '把手動標記的國家再從地圖上拿掉。',
  'help.guide.unmark-country.step.1':
    '搜尋該國並選擇它，或在地圖上點選它。對於你自己標記的國家，彈出視窗會問是否移除。',
  'help.guide.unmark-country.step.2': '點選「移除」確認。',
  'help.guide.unmark-country.result': '該國變回灰色，並從你的計數中消失。',
  'help.guide.unmark-country.tip.1':
    '只有手動標記的國家才能這樣移除。有旅行或地點的國家會一直保留，直到這些旅行或地點不在為止；如果國家是手動標記的，面板裡它的詳細資料卡片上也有「移除」。',
  // country-details
  'help.guide.country-details.title': '查看你在某個國家做過什麼',
  'help.guide.country-details.goal': '開啟一個已訪問的國家，跳到帶你去那裡的旅行。',
  'help.guide.country-details.step.1': '搜尋一個你訪問過的國家。',
  'help.guide.country-details.step.2':
    '選擇它。地圖飛過去，底部面板會多出一張卡片，帶有國旗、地點、旅行以及每次旅行一個標籤。',
  'help.guide.country-details.result': '點選旅行標籤即可在規劃器中開啟那次旅行。',
  'help.guide.country-details.tip.1': '在地圖上將滑鼠移到該國會顯示同樣的數字，外加首次和最近一次到訪。',
  // planned-countries
  'help.guide.planned-countries.title': '顯示你即將前往的國家',
  'help.guide.planned-countries.goal': '把即將出發的旅行所涉及的國家放到地圖上，但不把它們算作已訪問。',
  'help.guide.planned-countries.step.1': '開啟右上角的「顯示計劃中的國家」。旁邊的數字是有多少個國家在等你。',
  'help.guide.planned-countries.step.2':
    '搜尋一個計劃中的國家並選擇它：面板會顯示「計劃中」，地圖提示會顯示你何時出發。',
  'help.guide.planned-countries.result':
    '計劃中的國家以虛線輪廓顯示，所以永遠不會看起來像你已經去過的地方。開關會記住你的選擇。',
  'help.guide.planned-countries.tip.1':
    '前往某國的旅行一旦開始，該國就算作已訪問；進行中的旅行也算。沒有日期的旅行完全不進入統計。',
  'help.guide.planned-countries.tip.2': '這個開關只在你有即將出發的旅行時才存在。',
  // regions
  'help.guide.regions.title': '標記地區',
  'help.guide.regions.goal': '比國家更細：標記你去過的州、省或縣。',
  'help.guide.regions.step.1': '放大一個國家，直到它的地區出現，從縮放層級 5 起。搜尋並選擇該國就能飛到夠近的位置。',
  'help.guide.regions.step.2': '點選一個地區。將滑鼠移上去會顯示它的名稱；彈出視窗顯示該地區及其所屬國家。',
  'help.guide.regions.step.3': '選擇「標記為已訪問」。',
  'help.guide.regions.result': '該地區填上其國家的顏色。標記地區時，如果該國尚未算作已訪問，也會一併算上。',
  'help.guide.regions.tip.1': '點選已訪問的地區會提供「移除」，無論是你標記的，還是某個地點讓它變成已訪問的。',
  'help.guide.regions.tip.2': '你有真實地點的地區會自動標記；那裡不需要操作。',
  // search-place
  'help.guide.search-place.title': '尋找地點並標記它所在的地區',
  'help.guide.search-place.goal': '透過搜尋米蘭來標記倫巴底，不需要知道某座城市屬於哪個地區。',
  'help.guide.search-place.step.1':
    '在搜尋框中輸入城市、地標或地址。國家排在最前；相符的地點顯示在它們下方的「地點」標題下。',
  'help.guide.search-place.step.2': '選擇該地點。地圖飛過去，並判斷這個點位於哪個地區。',
  'help.guide.search-place.step.3': '為該地區選擇「標記為已訪問」，或者如果它還在你的前方，選擇「新增到心願單」。',
  'help.guide.search-place.result':
    '該地區被標記，它所屬的國家也一併標記。地圖資料包中沒有地區資料的國家會退回到國家本身。',
  'help.guide.search-place.tip.1': '地點來自與 TREK 其他地方相同的搜尋，因此遵循管理員設定的供應商。',
  // bucket-country
  'help.guide.bucket-country.title': '把國家放進心願單',
  'help.guide.bucket-country.goal': '直接在地圖上維護一份想去國家的心願單，與你去過的國家分開。',
  'help.guide.bucket-country.step.1': '搜尋該國並選擇它，或在地圖上點選它。',
  'help.guide.bucket-country.step.2': '選擇「新增到心願單」。',
  'help.guide.bucket-country.step.3': '如果已經知道時間，就選一個月份和年份，然後點選「新增到心願單」確認。',
  'help.guide.bucket-country.result':
    '該國以斜線填滿繪製，顏色就是你抵達後它將擁有的顏色，並出現在面板的「心願單」分頁中。',
  'help.guide.bucket-country.tip.1': '國家進入心願單後，同一個彈出視窗會提供「從心願單移除」。',
  'help.guide.bucket-country.tip.2':
    '每個目標日期一筆：同一個國家可以用兩個不同的月份出現在心願單中，但同一個月不能出現兩次。',
  // bucket-place
  'help.guide.bucket-place.title': '把地點新增到心願單',
  'help.guide.bucket-place.goal': '儲存你夢想中的城市、景點或地址，帶有座標和目標日期。',
  'help.guide.bucket-place.step.1': '在底部面板中開啟「心願單」分頁。',
  'help.guide.bucket-place.step.2': '點選「新增地點」。',
  'help.guide.bucket-place.step.3':
    '輸入名稱並按搜尋按鈕；選擇相符的結果，讓該地點帶上座標。只輸入名稱、略過搜尋也可以。',
  'help.guide.bucket-place.step.4': '如果願意，選一個月份和年份，然後點選「新增」。',
  'help.guide.bucket-place.result': '該地點帶著目標日期出現在心願單頂端；旁邊的 × 可以把它再移除。',
  'help.guide.bucket-place.tip.1': '帶座標的心願，就是日後當你的記錄顯示你到過那裡時，Dawarich 可以替你勾掉的那種。',
  // stats
  'help.guide.stats.title': '讀懂你的統計',
  'help.guide.stats.goal': '了解面板中的數字統計什麼，不統計什麼。',
  'help.guide.stats.step.1':
    '「國家」是你真正去過的不同國家的數量；計劃中的國家顯示在旁邊，不計入其中。「旅行」「地點」和「天」是所有旅行的總計。「城市」由地點的地址推算而來，所以是估算值。',
  'help.guide.stats.step.2':
    '各大洲顯示每個大洲已訪問的國家數；去過南極洲後，它會加入這一行。然後是你的連續紀錄，即至少有一次旅行的連續年數，以及你今年的旅行次數。',
  'help.guide.stats.result': '數字會隨著你規劃旅行而自動更新；這裡沒有任何需要維護的地方。',
  'help.guide.stats.tip.1':
    '城市是從地址文字中讀出來的，不做查詢，所以像「Osteria Francescana, Italy」這樣的短地址，或以縣級行政區結尾的地址，可能得到一個地區而不是城市。',
  'help.guide.stats.tip.2': '手動標記的國家會計入「國家」和各大洲，但不會帶來旅行、地點或天數。',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': '收藏',
  'help.ctx.collections.summary':
    'Collections 是你在任何行程之外的地點庫：把你找到並想留下的地點整理成有名稱的清單，每個地點都有「想法」「想去」或「已造訪」其中之一的狀態。地點只會被複製進出行程，從不連結，所以清單和行程永遠不會互相改變。',
  'help.ctx.collections.bullet.1':
    '左側的清單列：你自己的清單、分享給你的清單、等待你接受的邀請、把你擁有的一切合在一起的「全部已儲存」，以及頂部的「新增清單」和檔案匯入。',
  'help.ctx.collections.bullet.2':
    '開啟清單的標題區：它的顏色、封面、描述和連結，成員，以及右側的「編輯」「匯出」「分享」操作。',
  'help.ctx.collections.bullet.3':
    '地點上方的篩選列：狀態、類別、評分和排序，標籤篩選，用來新增地點的 +，行程匯入，以及用於批次操作的「選擇」。',
  'help.ctx.collections.bullet.4': '地點列：頭像、名稱和地址、標籤和類別，以及右側一鍵循環切換的狀態膠囊。',
  'help.ctx.collections.bullet.5':
    '右側的地圖：每個有座標的地點一枚圖釘，清單與地圖切換，搜尋框和標籤篩選。點選圖釘會開啟該地點。',
  'help.ctx.collections.bullet.6':
    '詳細資料面板：點選一列可查看封面、類別、標籤、狀態、描述和連結，並有「編輯」「複製到行程」和「從清單中移除」。',
  // create-list
  'help.guide.create-list.title': '建立清單',
  'help.guide.create-list.goal': '新建一個有名稱的清單，配上顏色和封面，準備放入地點。',
  'help.guide.create-list.step.1': '點選清單列頂部的「新增清單」。',
  'help.guide.create-list.step.2': '為清單命名並選一個顏色。封面圖、描述和連結是選填的，之後可以透過「編輯」加上。',
  'help.guide.create-list.step.3': '點選「建立」。',
  'help.guide.create-list.result': '清單以空白狀態開啟，「新增地點」和「從行程匯入」是填滿它的兩種方式。',
  'help.guide.create-list.tip.1': '封面可以是你自己上傳的圖片，也可以是在同一個對話框裡透過 Unsplash 搜尋找到的照片。',
  // add-place
  'help.guide.add-place.title': '新增地點',
  'help.guide.add-place.goal': '找到一個地點，把名稱、類別、狀態和備註一次儲存到開啟的清單。',
  'help.guide.add-place.step.1': '點選地點上方篩選列裡的 +。',
  'help.guide.add-place.step.2': '在搜尋欄輸入地點並選一個結果。名稱、地址和座標會據此填入。',
  'help.guide.add-place.step.3':
    '設定狀態，如有需要再加上類別、描述和連結，然後點選「新增」。對話框會為下一個地點保持開啟；「取消」會關閉它。',
  'help.guide.add-place.result': '地點出現在清單中；如果有座標，也會以圖釘出現在地圖上。',
  'help.guide.add-place.tip.1':
    '在行程內部，地點檢視器或地點選單裡的「儲存到收藏」可以把行程中的地點放進清單，不必離開行程。',
  'help.guide.add-place.tip.2':
    '清單必須是你自己的，或是你在其中擔任編輯者或管理員；「全部已儲存」和你只能檢視的清單上沒有 +。',
  // import-from-trip
  'help.guide.import-from-trip.title': '從行程匯入地點',
  'help.guide.import-from-trip.goal': '把整個行程的地點一次搬到清單上，而不是逐一儲存。',
  'help.guide.import-from-trip.step.1':
    '點選篩選列裡帶雲朵箭頭的匯入按鈕。在空白清單上，同樣的操作位於「新增地點」旁邊。',
  'help.guide.import-from-trip.step.2': '選一個你的行程。',
  'help.guide.import-from-trip.step.3':
    '勾選你想要的地點。已經在清單裡的地點會變灰；行程中沒有任何一天包含的地點一開始就是選取的。「僅新增」會隱藏你已經擁有的。',
  'help.guide.import-from-trip.step.4': '點選「匯入」。按鈕上總會寫明即將新增多少個。',
  'help.guide.import-from-trip.result': '地點連同名稱、地址、座標、描述和類別被複製到清單上。行程保持原樣。',
  'help.guide.import-from-trip.tip.1': '名稱或座標相同的重複項會被自動略過，所以匯入兩次也沒有壞處。',
  'help.guide.import-from-trip.tip.2': '在行程的地點清單內部，選取模式則提供「儲存到收藏」，用於你親手挑選的一組地點。',
  // place-status
  'help.guide.place-status.title': '設定地點的狀態',
  'help.guide.place-status.goal': '記錄哪些是想法，哪些在候選名單上，以及你去過哪裡。',
  'help.guide.place-status.step.1': '點選地點列右端的狀態膠囊。「想法」變為「想去」。',
  'help.guide.place-status.step.2': '再點一次變為「已造訪」，再點一次回到「想法」。',
  'help.guide.place-status.result': '膠囊及其顏色立即改變；清單上方狀態篩選的計數也會跟著變。',
  'help.guide.place-status.tip.1': '狀態是 Collections 自己的東西：把地點複製到行程不會把它帶過去。',
  'help.guide.place-status.tip.2':
    '在行程中，「儲存到收藏」會為該地點所在的每個清單顯示一個狀態膠囊，地點面板裡則有針對所選地點的「標記為已造訪」操作。',
  // place-detail
  'help.guide.place-detail.title': '開啟已儲存的地點',
  'help.guide.place-detail.goal': '查看一個地點的全部資訊並進行操作：編輯、複製到行程、移除。',
  'help.guide.place-detail.step.1': '點選一個地點列。詳細資料面板在清單旁邊開啟，地圖平移到該地點。',
  'help.guide.place-detail.step.2':
    '底部是「編輯」「複製到行程」和「從清單中移除」；封面上的相機可以把自動取得的照片換成你自己的。',
  'help.guide.place-detail.result': '「編輯」會讓名稱、類別、標籤、地址、座標、描述和連結直接在面板裡變為可編輯。',
  'help.guide.place-detail.tip.1':
    '當地點沒有自己的圖片時，封面會自動取得。你自己上傳的圖片可以是 JPG、PNG、GIF 或 WebP，最大 20 MB。',
  'help.guide.place-detail.tip.2': '分享清單的成員也可以在這裡留下星級評分，篩選列裡的評分篩選使用的是平均值。',
  // labels
  'help.guide.labels.title': '用標籤為地點分組',
  'help.guide.labels.goal': '在共用的類別之外，為清單加上它自己的標籤，例如街區或天數。',
  'help.guide.labels.step.1': '從篩選列裡的標籤控制項開啟標籤管理員。',
  'help.guide.labels.step.2':
    '輸入名稱，選一個顏色，點選「新增標籤」。在同一個對話框裡可以重新命名、改色或刪除既有標籤。',
  'help.guide.labels.step.3':
    '開啟「選擇」，勾選地點，點選選取列裡的「指派標籤」。單一地點也可以透過其詳細資料面板上的「編輯」取得標籤。',
  'help.guide.labels.step.4': '在篩選列裡選一個或多個標籤，把清單和地圖縮小到帶有其中任一標籤的地點。',
  'help.guide.labels.result': '有標籤的地點會在列上顯示它們的標籤；標籤篩選對每位成員都可用，包括檢視者。',
  'help.guide.labels.tip.1': '標籤只屬於建立它的那一個清單。把地點移動到另一個清單會丟掉它們。',
  'help.guide.labels.tip.2': '管理和指派標籤需要對清單的編輯權限。',
  // filter-select
  'help.guide.filter-select.title': '篩選和選取地點',
  'help.guide.filter-select.goal': '縮小清單，並一次對許多地點進行操作。',
  'help.guide.filter-select.step.1':
    '使用篩選列裡的下拉選單：狀態、類別、最低評分和排序順序。每一個都會顯示它會留下多少地點。',
  'help.guide.filter-select.step.2': '點選「選擇」。每一列都會出現一個核取方塊，並出現一個選取列。',
  'help.guide.filter-select.step.3':
    '勾選地點，或用「全選」選取目前篩選出的全部，然後選擇「指派標籤」「移動到清單」「複製到清單」「複製到行程」或「刪除」。',
  'help.guide.filter-select.result': '操作會一次套用到整個選取範圍。右側的 × 離開選取模式。',
  'help.guide.filter-select.tip.1': '「全選」跟隨篩選，所以篩選到「想去」再全選，是處理候選名單的捷徑。',
  // copy-to-trip
  'help.guide.copy-to-trip.title': '把地點複製到行程',
  'help.guide.copy-to-trip.goal': '把已儲存的地點變成你某個行程裡的停留點。',
  'help.guide.copy-to-trip.step.1': '開啟「選擇」並勾選地點，或開啟一個地點並使用其詳細資料面板上的「複製到行程」。',
  'help.guide.copy-to-trip.step.2': '點選選取列裡的「複製到行程」。',
  'help.guide.copy-to-trip.step.3': '選擇行程。搜尋框可以縮小長清單。',
  'help.guide.copy-to-trip.result':
    '地點連同名稱、描述、類別、備註、價格、座標、照片和標籤進入該行程的地點清單。收藏中沒有任何改變。',
  'help.guide.copy-to-trip.tip.1': '分享清單的檢視者也可以這樣做；這是從清單中複製出去，不會改變清單。',
  // share-list
  'help.guide.share-list.title': '與他人分享清單',
  'help.guide.share-list.goal': '和這個 TREK 上的其他人一起即時規劃一個清單。',
  'help.guide.share-list.step.1': '點選你清單標題區裡的「分享」。',
  'help.guide.share-list.step.2': '選擇使用者和一個角色：「檢視者」「編輯者」或「管理員」。',
  'help.guide.share-list.step.3': '點選「傳送邀請」。在對方在自己的清單列裡接受邀請之前，此人顯示為「待處理邀請」。',
  'help.guide.share-list.result':
    '接受後，清單會出現在對方的「已分享」下，每一次變更都即時同步。成員及其角色在同一個對話框裡隨時可改。',
  'help.guide.share-list.tip.1':
    '檢視者可以查看、評分並把地點複製到自己的行程。編輯者可以新增和編輯地點與標籤。管理員還可以刪除。',
  'help.guide.share-list.tip.2': '只有擁有者能邀請和移除他人；成員可以自己退出分享的清單。',
  // export-list
  'help.guide.export-list.title': '把清單匯出為檔案',
  'help.guide.export-list.goal': '把清單交給另一個 TREK 上的人，或帶進地圖應用程式。',
  'help.guide.export-list.step.1': '點選清單標題區裡的「匯出」。',
  'help.guide.export-list.step.2':
    '選「TREK 清單」用於另一個 TREK，含標籤和狀態；或選 GPX 用於 OsmAnd、Organic Maps、Garmin 裝置以及其他能讀取航點的應用程式。',
  'help.guide.export-list.result': '檔案開始下載。分享清單的任何成員都可以匯出它。',
  'help.guide.export-list.tip.1': '沒有座標的地點無法成為 GPX 航點；它會被略過，TREK 會告訴你略過了多少個。',
  'help.guide.export-list.tip.2': '評分、成員和上傳的照片是刻意不帶走的；它們屬於這個 TREK，不屬於清單。',
  // import-file
  'help.guide.import-file.title': '從檔案匯入清單',
  'help.guide.import-file.goal': '匯入一個 TREK 清單檔案或 GPX 檔案，作為新清單或放進你已有的清單。',
  'help.guide.import-file.step.1': '點選清單列裡「新增清單」旁邊帶上傳箭頭的匯入按鈕。',
  'help.guide.import-file.step.2': '選擇檔案。在任何事情發生之前，TREK 會先顯示裡面有什麼：名稱、多少個地點和標籤。',
  'help.guide.import-file.step.3':
    '保留「新增清單」並視需要改名，或選「加入清單」把地點放進一個你能編輯的清單，然後點選「匯入」。',
  'help.guide.import-file.result':
    '你會來到帶有已匯入地點的清單。加入清單只會新增；已經在那裡的地點保留它們的狀態、備註和標籤。',
  'help.guide.import-file.tip.1':
    '從 GPX 匯入時，每個有名稱的航點都會成為一個地點；軌跡是線條，會被略過，預覽會說明那是多少個點。',
  'help.guide.import-file.tip.2':
    '既不是 TREK 清單也不是 GPX 的檔案會被拒絕並給出原因；某一個無法讀取的地點只會被略過，而不是整個檔案。',
  // edit-list
  'help.guide.edit-list.title': '編輯或刪除清單',
  'help.guide.edit-list.goal': '變更清單的名稱、顏色、封面、描述或連結，或移除該清單。',
  'help.guide.edit-list.step.1': '點選清單標題區裡的「編輯」。只有擁有者看得到它。',
  'help.guide.edit-list.step.2':
    '改你想改的，然後點選「儲存」。左下角的「刪除清單」會在確認後連同全部地點一起移除該清單。',
  'help.guide.edit-list.result': '標題區立即換上新的顏色、封面和描述。',
  'help.guide.edit-list.tip.1': '刪除清單無法復原。如果想保留副本，請先匯出。',
  // all-saved
  'help.guide.all-saved.title': '搜尋你的整個地點庫',
  'help.guide.all-saved.goal': '一次看遍你擁有的每一個清單。',
  'help.guide.all-saved.step.1': '點選清單列裡的「全部已儲存」。它把你擁有或共同擁有的每個清單的地點合在一起。',
  'help.guide.all-saved.step.2': '像在任何清單上一樣使用搜尋框和篩選；「選擇」在這裡也可用，用於複製到行程。',
  'help.guide.all-saved.result': '一個檢視看遍你所有已儲存的地點，沒有新增和匯入，因為沒有一個確定的清單可以放入它們。',
  'help.guide.all-saved.tip.1': '標籤是按清單的，所以「全部已儲存」上不提供標籤篩選。',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': '旅程',
  'help.ctx.journey.summary':
    '旅程是你以照片為主的旅行日記。每段旅程都關聯一次或多次旅行，並由帶有故事、照片、心情和天氣的條目一天天累積起來。這個頁面列出你的旅程；開啟一段就可以開始寫。',
  'help.ctx.journey.bullet.1':
    '頂部的橫幅顯示進行中的旅程，或是你最近的一段，連同它的條目、照片和地點數量。「繼續撰寫」會在今天這一頁開啟它。',
  'help.ctx.journey.bullet.2': '下方每段旅程一張卡片，帶有封面、副標題、日期和各項數量。點選卡片即可開啟。',
  'help.ctx.journey.bullet.3': '格線中的最後一張卡片「建立新旅程」，會從你的旅行開始一段新旅程。',
  // create-journey
  'help.guide.create-journey.title': '建立旅程',
  'help.guide.create-journey.goal': '為一次旅行開始一本日記，旅行的地點已經以建議的形式等在那裡。',
  'help.guide.create-journey.step.1': '點選格線中的最後一張卡片「建立新旅程」。',
  'help.guide.create-journey.step.2':
    '給它取個名稱，願意的話再加一個副標題，然後勾選它所屬的旅行。計數器會告訴你有多少地點會被帶進來。',
  'help.guide.create-journey.step.3': '點選「建立旅程」。',
  'help.guide.create-journey.result':
    '日記開啟。已關聯旅行的每個地點都以建議的形式出現在時間線上，它所在的每一天各一則，隨時可以寫進去。',
  'help.guide.create-journey.tip.1': '之後可以在「旅程設定」裡關聯更多旅行。',
  'help.guide.create-journey.tip.2': '沒有旅行的旅程也可以；這時你就手動新增條目。',
  // open-journey
  'help.guide.open-journey.title': '開啟旅程',
  'help.guide.open-journey.goal': '進入一本日記，並知道它會在哪裡開啟。',
  'help.guide.open-journey.step.1': '點選一張卡片。每張卡片都顯示封面、日期，以及這段旅程有多少條目、照片和地點。',
  'help.guide.open-journey.result':
    '進行中的旅程在今天這一頁開啟；如果還什麼都沒寫，則在今天之前的最後一則開啟；已結束的旅程從開頭開啟。',
  'help.guide.open-journey.tip.1': '除非你在「旅程設定」裡另外設定，封面就是旅程的第一張照片。',
  // continue-writing
  'help.guide.continue-writing.title': '繼續進行中的旅程',
  'help.guide.continue-writing.goal': '直接跳到你正在經歷的旅程的今天這一頁。',
  'help.guide.continue-writing.step.1':
    '點選頂部橫幅裡的「繼續撰寫」。橫幅顯示進行中的旅程，沒有的話則顯示最近的一段。',
  'help.guide.continue-writing.result': '日記在今天這一頁開啟；如果還什麼都沒寫，則在今天之前的最後一則開啟。',
  'help.guide.continue-writing.tip.1': '橫幅還會為尚未建立旅程的旅行給出建議；「忽略」會隱藏那則建議。',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': '日記',
  'help.ctx.journey-detail.summary':
    '一段開啟的旅程：左側是逐日排列的時間線，右側是地圖，帶有每個條目和已關聯旅行的地點。所有往日記裡新增內容的入口都在頂部；頁首包含各項數量、「Studio」、建議開關和「旅程設定」。',
  'help.ctx.journey-detail.bullet.1':
    '頁首：封面、標題和副標題，天數、地點、條目和照片數量，右側是「Studio」、建議開關和「旅程設定」。',
  'help.ctx.journey-detail.bullet.2': '工具列：「時間線」和「圖庫」分頁、「在這段旅程中搜尋」，以及「新增條目」。',
  'help.ctx.journey-detail.bullet.3':
    '時間線：每天一個區塊，帶一個 + 用來在那天新增條目；條目卡片帶有照片、心情、天氣和故事；來自旅行的建議以較淺的樣式顯示，並帶有「忽略這則建議」。',
  'help.ctx.journey-detail.bullet.4':
    '地圖：條目顯示為圖釘，按日期順序以虛線連接，還有旅行的地點，以及匯入到這些旅行中的任何 GPX 軌跡。',
  'help.ctx.journey-detail.bullet.5':
    '「旅程設定」：封面、名稱和副標題、地圖上的軌跡、紀錄欄位、已忽略的建議、已關聯的旅行、貢獻者、公開分享、封存和刪除。',
  'help.ctx.journey-detail.bullet.6': '兩個圓形按鈕懸浮在較長的時間線上：回到頂部，以及跳到最後一則。',
  // add-entry
  'help.guide.add-entry.title': '寫一則條目',
  'help.guide.add-entry.goal': '新增一天的故事，帶上標題、內文、心情和天氣。',
  'help.guide.add-entry.step.1': '點選工具列裡的「新增條目」，或者點選某一天頁首上的 +，從那天開始。',
  'help.guide.add-entry.step.2':
    '給這個瞬間取個名稱，寫下故事。文字上方的工具列可以用 Markdown 加入粗體、斜體、標題、引言、連結和清單。',
  'help.guide.add-entry.step.3':
    '選一個心情和天氣，核對日期，願意的話再釘上一個位置：搜尋一個地點，或者使用你的目前位置。',
  'help.guide.add-entry.step.4': '點選「儲存」。',
  'help.guide.add-entry.result': '條目出現在時間線上它所屬的那天，並在地圖上顯示為一枚圖釘。頁首裡的數量隨之更新。',
  'help.guide.add-entry.tip.1': '在建議裡寫作用的是同一個編輯器，只是地點已經設好。',
  'help.guide.add-entry.tip.2': '底部的標籤是自由文字，例如「hidden gem」或「best meal」，搜尋也能找到它們。',
  // entry-photos
  'help.guide.entry-photos.title': '為條目加入照片和影片',
  'help.guide.entry-photos.goal': '把圖片放到某一天；第一張會成為條目的封面。',
  'help.guide.entry-photos.step.1': '用卡片上的 ⋯ 開啟條目選單，選擇「編輯」。',
  'help.guide.entry-photos.step.2':
    '點選「上傳照片」並選擇檔案。「從相簿」取用旅程圖庫裡已有的圖片；「External photos」在已連接的 Immich 或 Synology 媒體庫裡搜尋那一天的照片。',
  'help.guide.entry-photos.step.3': '把滑鼠移到一張圖片上，用「設為第1張」選定封面，然後點選「儲存」。',
  'help.guide.entry-photos.result': '照片顯示在卡片上和圖庫裡；第一張在所有地方都作為縮圖。',
  'help.guide.entry-photos.tip.1': '影片以同樣的方式加到條目上：mp4、m4v、webm 或 mov，最大 500 MB，依上傳原樣儲存。',
  'help.guide.entry-photos.tip.2': '來自 iPhone 的 HEIC 檔案會在上傳時轉換為 JPEG，這會丟掉其中的 GPS 和相機中繼資料。',
  // suggestions
  'help.guide.suggestions.title': '使用或忽略建議',
  'help.guide.suggestions.goal': '把旅行中的地點變成條目，並清掉那些你不打算寫的。',
  'help.guide.suggestions.step.1': '建議是一張較淺的卡片，地點名稱為斜體。點選它會開啟編輯器，地點和日期已經設好。',
  'help.guide.suggestions.step.2':
    '在不會用到的卡片上點選「忽略這則建議」。它會離開時間線但不會被刪除，旅行同步也不會再次提供它。',
  'help.guide.suggestions.step.3':
    '改變主意了？「旅程設定」會顯示有多少則已被忽略，「找回已忽略的建議」會把它們全部找回。',
  'help.guide.suggestions.result': '時間線上只留下你打算寫的內容；閱讀時，頁首的開關可以一次隱藏所有建議。',
  'help.guide.suggestions.tip.1': '跨越兩天的地點會在每一天各給出一則建議。',
  'help.guide.suggestions.tip.2': '建議從不計入統計；只有已寫的條目才算。',
  // add-on-day
  'help.guide.add-on-day.title': '在更早的一天新增條目',
  'help.guide.add-on-day.goal': '寫一個已經過去的日子，不用事後再改日期。',
  'help.guide.add-on-day.step.1': '點選那一天頁首上的 +。',
  'help.guide.add-on-day.step.2': '編輯器開啟，日期已經設好。像往常一樣寫好並「儲存」。',
  'help.guide.add-on-day.result': '條目直接落在正確的那一天。',
  'help.guide.add-on-day.tip.1': '在同一天內，條目選單裡的箭頭可以把它往前或往後移。',
  // pros-cons
  'help.guide.pros-cons.title': '加入評價',
  'help.guide.pros-cons.goal': '用哪些很棒、哪些不怎麼樣來總結一天。',
  'help.guide.pros-cons.step.1':
    '在編輯器裡，故事下方找到「優缺點」。在「優點」或「缺點」裡輸入一則，用「再新增一個」寫下一則。',
  'help.guide.pros-cons.step.2': '儲存。評價會以兩個短清單的形式顯示在卡片上。',
  'help.guide.pros-cons.result': '故事下方，一眼就能看到讚與不讚。',
  'help.guide.pros-cons.tip.1': '不用評價的旅程可以在「旅程設定」的「紀錄欄位」下關閉這一部分。',
  // search-journey
  'help.guide.search-journey.title': '在長日記裡找東西',
  'help.guide.search-journey.goal': '不用翻過幾週的內容，直接找到你要的條目。',
  'help.guide.search-journey.step.1':
    '在工具列的「在這段旅程中搜尋」裡輸入。時間線會隨你輸入而篩選，範圍包括標題、故事、地點和標籤。不區分重音和大小寫。',
  'help.guide.search-journey.step.2':
    '頁首的建議開關會在你閱讀時隱藏尚未寫的卡片。時間線一旦變長，它的下緣上方會懸浮兩個圓形按鈕：回到頂部，以及跳到最後一則。',
  'help.guide.search-journey.result': '只留下相符的條目；清空搜尋框即可重新看到全部。',
  'help.guide.search-journey.tip.1': '進行中的旅程在今天這一頁開啟，所以目前的頁面通常已經在視野裡。',
  'help.guide.search-journey.tip.2': '標籤也算：搜尋「hidden gem」會找到所有加了這個標籤的條目。',
  // gallery-map
  'help.guide.gallery-map.title': '瀏覽圖庫和地圖',
  'help.guide.gallery-map.goal': '把整段旅程當作圖片來看，也當作地圖上的地點來看。',
  'help.guide.gallery-map.step.1':
    '在工具列切換到「圖庫」：每個條目的每張照片，加上直接上傳到圖庫的圖片。點選一張即可開啟燈箱。',
  'help.guide.gallery-map.step.2':
    '右側的地圖按日期順序把條目顯示為圖釘，還有已關聯旅行的地點，以及匯入到這些旅行中的任何 GPX 軌跡，顏色與它在規劃器中的一致。',
  'help.guide.gallery-map.result':
    '把滑鼠移到軌跡上可以看到它的名稱。條目之間的虛線是 TREK 畫的；軌跡則是你實際記錄下來的路線。',
  'help.guide.gallery-map.tip.1': '可以在「旅程設定」下為某段旅程關閉軌跡。',
  'help.guide.gallery-map.tip.2': '當「圖庫」和「地圖」都被分享時，帶有位置的圖庫照片也會出現在公開地圖上。',
  // entry-fields
  'help.guide.entry-fields.title': '關閉條目欄位',
  'help.guide.entry-fields.goal': '讓編輯器只保留這段旅程用得到的內容。',
  'help.guide.entry-fields.step.1': '從頁首開啟「旅程設定」。',
  'help.guide.entry-fields.step.2': '在「紀錄欄位」下，關閉「心情」、「天氣」或「優點與不足」。',
  'help.guide.entry-fields.result':
    '編輯器不再詢問這些內容。已寫的東西不會遺失：重新開啟某個欄位會讓儲存的值再次顯示，分享出去的旅程也會隱藏同樣的欄位。',
  'help.guide.entry-fields.tip.1': '開關是按旅程設定的，所以出差和度假可以不一樣。',
  // link-trip
  'help.guide.link-trip.title': '關聯另一次旅行',
  'help.guide.link-trip.goal': '把第二次旅行的地點以建議的形式帶進日記。',
  'help.guide.link-trip.step.1': '從頁首開啟「旅程設定」。',
  'help.guide.link-trip.step.2': '在已關聯的旅行下方，點選「新增旅行」。',
  'help.guide.link-trip.step.3': '選擇那次旅行。',
  'help.guide.link-trip.result': '它的地點會以建議的形式出現在時間線上各自的那一天，它的 GPX 軌跡也會加入地圖。',
  'help.guide.link-trip.tip.1': '已關聯旅行旁邊的 × 會再次取消關聯；你寫過的條目會保留。',
  'help.guide.link-trip.tip.2': '帶日期的條目只計一次，不管有多少次旅行涵蓋那一天。',
  // share-public
  'help.guide.share-public.title': '公開分享旅程',
  'help.guide.share-public.goal': '給沒有 TREK 帳號的人一個唯讀連結。',
  'help.guide.share-public.step.1': '開啟「旅程設定」，找到「公開分享」。',
  'help.guide.share-public.step.2': '點選「建立分享連結」。',
  'help.guide.share-public.step.3':
    '選擇訪客能看到什麼：「時間線」、「圖庫」和「地圖」是各自獨立的開關。「複製」會把連結放到你的剪貼簿。',
  'help.guide.share-public.result':
    '拿到連結的任何人只能看到已啟用的部分，其他什麼也看不到；你在「紀錄欄位」裡關閉的欄位在那裡同樣保持隱藏。',
  'help.guide.share-public.tip.1':
    '只有「圖庫」和「地圖」都開啟時，照片才會出現在公開地圖上；「地圖」關閉時，照片的座標會在離開伺服器之前被去除。',
  'help.guide.share-public.tip.2': '在同一個地方刪除連結即可結束分享。',
  // contributors
  'help.guide.contributors.title': '一起寫',
  'help.guide.contributors.goal': '讓同行的旅伴加入他們自己的條目和照片。',
  'help.guide.contributors.step.1': '開啟「旅程設定」，捲動到貢獻者。',
  'help.guide.contributors.step.2': '點選「邀請貢獻者」，依名稱或電子郵件搜尋使用者。',
  'help.guide.contributors.step.3': '選一個角色並確認。',
  'help.guide.contributors.result': '旅程會出現在他們的清單裡，他們的條目會帶上他們的名字。用旁邊的 × 移除貢獻者。',
  'help.guide.contributors.tip.1': '貢獻者面向這個 TREK 上的人。對其他所有人，則有公開連結。',
  // studio
  'help.guide.studio.title': '把旅程排成一本相片書',
  'help.guide.studio.goal': '把日記變成可列印的頁面。',
  'help.guide.studio.step.1': '點選頁首裡的「Studio」。設計器會在旅程之上開啟。',
  'help.guide.studio.step.2': '頂列左側的旅程名稱就是返回的入口；它會把你送回原來的位置。',
  'help.guide.studio.result':
    '左側是頁面列，工作台上是跨頁，右側是屬性。「Auto layout」會用你的條目組出整本書；「Export」產生可直接列印的 PDF。',
  'help.guide.studio.tip.1': 'Studio 需要至少 1024 px 寬的視窗，手機上不提供。',
  'help.guide.studio.tip.2': '這本書繼承旅程的存取權限：能讀旅程的人就能開啟它，能編輯的人就能儲存。',
  // archive-journey
  'help.guide.archive-journey.title': '封存或刪除旅程',
  'help.guide.archive-journey.goal': '關閉一段已結束的旅程，或者永久移除一段。',
  'help.guide.archive-journey.step.1': '開啟「旅程設定」。',
  'help.guide.archive-journey.step.2':
    '在底部，「封存旅程」會結束它並標記為已封存；「還原旅程」會把它帶回來。「刪除」會在確認後把它連同所有條目和照片一起移除。',
  'help.guide.archive-journey.result': '已封存的旅程仍然可以閱讀和分享；只是不再在今天這一頁開啟。',
  'help.guide.archive-journey.tip.1': '刪除無法復原，但不會影響旅程曾關聯的旅行。',
  'help.guide.archive-journey.tip.2': '封面、名稱和副標題在同一個對話框裡，就在頂部。',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio 把一段旅程排成可列印的相片書。它在日誌之上開啟：左側是頁面側欄和內容，中間是你正在編輯的跨頁，右側是它的屬性。Auto layout 依你的條目產生第一版草稿；之後的一切由你來移動、裁切和改樣式，每一步都可以復原。',
  'help.ctx.journey-studio.bullet.1':
    '頂部列：Back to the journey、Book view、Undo 和 Redo、Page format、Auto layout 和 Export。標題旁的「已儲存」標記告訴你書何時已經存好。',
  'help.ctx.journey-studio.bullet.2':
    '左側側欄有五個部分：Pages、Content（旅程的照片和條目）、Elements（文字、形狀、線條、格線、相框、圖示）、「旅程」（由旅程產生的地圖、國家、國旗和標記）和 Layouts。',
  'help.ctx.journey-studio.bullet.3':
    '工作區：目前的跨頁及其出血和安全區，下方的縮放列、Fit to view，以及右側的「下載這個跨頁」。',
  'help.ctx.journey-studio.bullet.4':
    '右側的 Properties：所選物件的位置和大小、裁切和焦點、Fill 或 Fit、外觀、圓角、相框、堆疊順序和鎖定；未選取任何物件時則是頁碼和文件。',
  'help.ctx.journey-studio.bullet.5':
    '這本書的結構和裝訂成冊的書一樣：封面、單獨的第一頁、各個跨頁、單獨的最後一頁和封底。頁碼從第一頁開始計數，並按顯示的樣子列印。',
  'help.ctx.journey-studio.bullet.6':
    '多人可以同時設計：每個人都能看到其他人帶名字的指標，在別人改過的版本上儲存會以衝突的形式返回，而不是覆蓋對方的工作。',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': '自動產生整本書',
  'help.guide.studio-auto-layout.goal': '一鍵從日誌的條目和照片得到完整的第一版草稿。',
  'help.guide.studio-auto-layout.step.1': '點選頂部列中的 Auto layout。',
  'help.guide.studio-auto-layout.step.2':
    '選擇「整本書」：它會取代每一頁，但保留你的標題和頁面設定。「本頁」只重建螢幕上的這個跨頁，且只在由條目產生的跨頁上提供。',
  'help.guide.studio-auto-layout.step.3': '翻看 Pages 側欄。如果你更喜歡原來的樣子，Undo 會把整個排版復原。',
  'help.guide.studio-auto-layout.result':
    '每個條目一個跨頁，按順序排列，照片、標題和故事都已為你放好。每個元素在你編輯它之前都會繼續跟隨它的條目。',
  'help.guide.studio-auto-layout.tip.1': '這兩個選項都是普通的復原步驟，放心嘗試。',
  'help.guide.studio-auto-layout.tip.2':
    'Auto layout 綁定到條目的元素會跟隨該條目的修改，直到你在 Properties 中動它為止；那會中斷連結。',
  // studio-pages
  'help.guide.studio-pages.title': '新增、移動和刪除跨頁',
  'help.guide.studio-pages.goal': '一頁一頁地塑造這本書。',
  'help.guide.studio-pages.step.1':
    '在側欄中開啟 Pages。縮圖就是按順序排列的書：封面、第一頁、各個跨頁、最後一頁、封底。',
  'help.guide.studio-pages.step.2':
    '底部的「新增頁面」把新跨頁放在最後一頁之前；兩張縮圖之間的 + 會正好在那裡插入一個。',
  'help.guide.studio-pages.step.3':
    '把滑鼠移到縮圖上可看到它的操作：「前移」、「後移」、「複製頁面」和「刪除頁面」。點選縮圖即可在工作區開啟那個跨頁。',
  'help.guide.studio-pages.result': '封面、第一頁、最後一頁和封底留在原處；新跨頁總是落在它們之間。',
  'help.guide.studio-pages.tip.1': '頂部列的 Book view 以紙張的形式顯示整本書，也就是裝訂後的樣子。',
  'help.guide.studio-pages.tip.2': '頁碼在未選取任何物件時，於 Properties 的「文件」下開啟。',
  // studio-layouts
  'help.guide.studio-layouts.title': '為跨頁套用版面',
  'help.guide.studio-layouts.goal': '給跨頁一套現成的照片框和文字框排布。',
  'help.guide.studio-layouts.step.1':
    '在側欄中開啟 Layouts。有十三種跨頁版面，以及一組單獨用於封面、封底和單頁的版面。',
  'help.guide.studio-layouts.step.2': '點選其中一個。工作區中的跨頁會採用它的框；你已有的照片和文字會被倒入這些框中。',
  'help.guide.studio-layouts.result': '空框等待內容：從 Content 拖一張照片到框上，或使用 Add to this page。',
  'help.guide.studio-layouts.tip.1': '版面和其他操作一樣，也是一個復原步驟。',
  // studio-content
  'help.guide.studio-content.title': '把照片和條目放到頁面上',
  'help.guide.studio-content.goal': '把旅程自己的素材放到跨頁上。',
  'help.guide.studio-content.step.1': '在側欄中開啟 Content。Photos 列出旅程的每一張照片；Entries 列出帶文字的條目。',
  'help.guide.studio-content.step.2':
    '把照片拖到跨頁或空框上，或點選它下方的 Add to this page。「上傳照片」可加入旅程中還沒有的照片。',
  'help.guide.studio-content.step.3':
    '在條目下方，Title、Story 和 Place 會把那段文字作為文字元素放到頁面上；日期和座標以標記的形式加入，條目的照片也就列在那裡。',
  'help.guide.studio-content.result': '放下的照片變成照片元素；文字在你編輯之前會繼續跟隨條目。',
  'help.guide.studio-content.tip.1': 'Content 頂部的搜尋框同時篩選兩個清單。',
  'help.guide.studio-content.tip.2': '把檔案從桌面拖到工作區，會一步完成上傳和放置。',
  // studio-elements
  'help.guide.studio-elements.title': '加入文字、形狀和圖示',
  'help.guide.studio-elements.goal': '在照片和故事之外裝飾跨頁。',
  'help.guide.studio-elements.step.1': '在側欄中開啟 Elements。',
  'help.guide.studio-elements.step.2':
    '點選一種用於標題或說明的文字樣式、一個形狀、一條線、一個格線、一個帶相框樣式的空框，或可搜尋圖庫中的一個圖示。每一個都會落在跨頁中央，隨時可以移動。',
  'help.guide.studio-elements.result': '雙擊文字元素即可輸入；Properties 裡有字型、字重、字級、間距和對齊。',
  'help.guide.studio-elements.tip.1': '相框是空的照片位：以後再把照片放進去。',
  // studio-travel
  'help.guide.studio-travel.title': '加入地圖、國旗和數據',
  'help.guide.studio-travel.goal': '把旅程本身變成頁面上的數據。',
  'help.guide.studio-travel.step.1': '在側欄中開啟「旅程」。',
  'help.guide.studio-travel.step.2':
    '選擇要加入的內容：條目的路線地圖、國家輪廓、國家清單或格線、國旗、日期、天數或距離標記，或整趟旅行的總覽。每一個都由旅程的資料產生，並隨之更新。',
  'help.guide.studio-travel.result': '元素出現在跨頁上；Properties 調整它的樣式，地圖還可以調整範圍。',
  'help.guide.studio-travel.tip.1': '標記跟隨跨頁所來自的條目，所以自動排版的跨頁上的日期標記已經顯示那一天。',
  // studio-properties
  'help.guide.studio-properties.title': '編輯你選取的物件',
  'help.guide.studio-properties.goal': '用檢閱器移動、裁切、設定樣式和堆疊元素。',
  'help.guide.studio-properties.step.1': '點選跨頁上的一個元素。會出現用於大小和旋轉的控制點；拖曳它即可移動。',
  'help.guide.studio-properties.step.2':
    '右側的 Properties 跟隨所選物件：位置和大小、帶焦點的 Crop（焦點決定什麼留在框內）、Fill 或 Fit、Look 濾鏡、Corner 半徑、「相框」樣式、堆疊順序和 Lock。',
  'help.guide.studio-properties.step.3': '「複製」和 Delete 位於檢閱器頂部；頂部列的 Undo 可復原其中任何操作。',
  'help.guide.studio-properties.result':
    '鎖定的元素在頁面上就再也抓不到了，這樣你在周圍繼續工作時，已完成的排版就不會被碰壞。',
  'help.guide.studio-properties.tip.1': '按住 Shift 點選可選取多個元素；檢閱器隨後會一起編輯它們。',
  'help.guide.studio-properties.tip.2': '編輯 Auto layout 放置的元素會中斷它與條目的連結；它不再跟隨該條目之後的改動。',
  // studio-format
  'help.guide.studio-format.title': '選擇頁面格式',
  'help.guide.studio-format.goal': '在排版依賴尺寸之前，先設定這本書要列印的尺寸。',
  'help.guide.studio-format.step.1': '點選頂部列中的 Page format。',
  'help.guide.studio-format.step.2':
    '選擇 Square 21 × 21 cm、Square 30 × 30 cm、A4 或 A5 的橫向或直向，或者以公釐輸入自訂的寬和高。出血和安全區就在下方。',
  'help.guide.studio-format.result': '每個跨頁都按該尺寸繪製，預設出血 3 mm、安全區 5 mm。',
  'help.guide.studio-format.tip.1': '先改格式，再執行 Auto layout；排版是按它當時找到的尺寸產生的。',
  'help.guide.studio-format.tip.2': '向你的印刷廠詢問他們的出血和安全數值，然後填入。',
  // studio-export
  'help.guide.studio-export.title': '把書匯出為 PDF',
  'help.guide.studio-export.goal': '得到一個可直接印刷的檔案，或一個在螢幕上閱讀的檔案。',
  'help.guide.studio-export.step.1': '點選頂部列中的 Export。',
  'help.guide.studio-export.step.2':
    '選擇「單頁」，按閱讀順序每張紙一頁，這是印刷廠需要的；或選擇「跨頁」，像翻開書那樣一次兩頁。「裁切標記」會在每條邊上加上出血並標出裁切位置。',
  'help.guide.studio-export.step.3': '點選「列印檢視」。瀏覽器會開啟這些頁面，「另存為 PDF」把它們變成檔案。',
  'help.guide.studio-export.result': '一個 PDF，張數與對話框所說的一致，頁面格式為你設定的格式。',
  'help.guide.studio-export.tip.1': '產生 PDF 只能在桌面端進行，和 Studio 本身一樣。',
  'help.guide.studio-export.tip.2': '校樣用不帶裁切標記的「跨頁」匯出；給印刷廠用帶裁切標記的「單頁」。',
  // studio-spread-file
  'help.guide.studio-spread-file.title': '在另一本書中重用跨頁',
  'help.guide.studio-spread-file.goal': '把你喜歡的設計從一段旅程的書帶到另一段旅程。',
  'help.guide.studio-spread-file.step.1':
    '跨頁在工作區中開啟時，點選縮放列右端的「下載這個跨頁」。檔案中儲存的是設計，不含照片。',
  'help.guide.studio-spread-file.step.2': '在另一本書裡開啟 Pages，點選「新增頁面」旁邊的「匯入」，然後選擇檔案。',
  'help.guide.studio-spread-file.result': '跨頁帶著它的框和文字樣式到達；把新旅程的照片放進這些框裡。',
  'help.guide.studio-spread-file.tip.1': '不是跨頁設計的檔案會被拒絕，並說明原因。',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': '設定',
  'help.ctx.settings.summary':
    '你的個人設定，左側邊欄裡每個主題一個分頁。大多數開關一撥就生效；底部帶「儲存」按鈕的表單要等你按下儲存。這裡的任何改動都不會影響別人的 TREK。',
  'help.ctx.settings.bullet.1':
    '左側邊欄：「顯示」「Appearance」「地圖」「通知」「整合」「Offline」和「帳戶」。裝了外掛後會出現「外掛」，自架的 TREK 上會出現「關於」。',
  'help.ctx.settings.bullet.2':
    '「顯示」管語言、單位、貨幣和應用程式開啟時的頁面；「Appearance」管主題、顏色、文字大小和儀表板小工具。',
  'help.ctx.settings.bullet.3':
    '「地圖」選擇繪製引擎和樣式；「通知」選擇能聯絡到你的管道；「整合」管相片庫、API 金鑰和 MCP；「Offline」管應用程式在此裝置上保留的內容。',
  'help.ctx.settings.bullet.4': '「帳戶」包含你的個人資料、密碼、雙因素認證、Passkey 和刪除帳戶。',
  'help.ctx.settings-display.title': '顯示',
  'help.ctx.settings-display.summary':
    '語言、單位和貨幣，地圖與預訂的行為方式，以及 TREK 開啟時的頁面。這裡的每項變更都立即生效。',
  'help.ctx.settings-display.bullet.1': '「Language & region」：介面語言、時間格式、顯示貨幣，以及距離和溫度單位。',
  'help.ctx.settings-display.bullet.2':
    '「Travel & map」：訂票路線一律顯示在地圖上、探索地點的小按鈕、從住宿地點最佳化路線、模糊預訂代碼，以及為預訂路線加上標籤。',
  'help.ctx.settings-display.bullet.3': '「啟動」：TREK 開啟時是進入儀表板還是進行中的旅行，以及旅行的哪個分頁先顯示。',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'TREK 在這個帳戶上的樣子：淺色還是深色、強調色、玻璃效果和動態效果、文字大小，以及儀表板顯示哪些小工具。一切即時生效，在你登入的每台裝置上都一樣。',
  'help.ctx.settings-appearance.bullet.1':
    '「Theme」：「淺色」「深色」或「自動」，以及帶你自己「Custom accent」的「Color scheme」。',
  'help.ctx.settings-appearance.bullet.2':
    '「Readability」：「Transparency」「Reduce motion」「Density」和「Text size」，還有按層級設定的進階大小。',
  'help.ctx.settings-appearance.bullet.3':
    '「Dashboard widgets」：每個小工具一個開關，「Desktop」和「Mobile」分開設定。',
  'help.ctx.settings-appearance.bullet.4': '底部的「Reset to defaults」把一切放回原樣。',
  'help.ctx.settings-map.title': '地圖',
  'help.ctx.settings-map.summary':
    '由哪個引擎以什麼樣式繪製地圖。Leaflet 是經典的點陣地圖，MapLibre 不需要任何權杖就能繪製向量圖磚，Mapbox 用你自己的權杖加上 3D 建築和地形。',
  'help.ctx.settings-map.bullet.1': '「地圖提供商」：Leaflet、MapLibre 或 Mapbox，每個都有一行說明它需要什麼。',
  'help.ctx.settings-map.bullet.2': '「地圖樣式」和「地圖模板」：圖磚的外觀，加上提供商要求的權杖或金鑰。',
  'help.ctx.settings-map.bullet.3': '「高畫質模式」提供反鋸齒和地球儀投影；「儲存地圖」寫入你的選擇。',
  'help.ctx.settings-notifications.title': '通知',
  'help.ctx.settings-notifications.summary':
    'TREK 在應用程式之外聯絡你的地方：一個 ntfy 主題、一個 webhook，或者外掛提供的管道。管道下方每個事件一列，決定什麼送到哪裡。',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy：主題、選填的自建伺服器和選填的存取權杖，按「測試」可以立刻送一則。',
  'help.ctx.settings-notifications.bullet.2': 'Webhook：一個以 JSON 接收所有事件的 URL，附「測試」。',
  'help.ctx.settings-notifications.bullet.3':
    '偏好設定列：每個事件開啟了哪個管道。外掛管道在設定好之前顯示「前往設定」。',
  'help.ctx.settings-integrations.title': '整合',
  'help.ctx.settings-integrations.summary':
    '從外部連接到 TREK 的一切：日記用的相片庫、指令碼用的 API 金鑰，以及供 AI 助理使用的 MCP 端點及其令牌和 OAuth 客戶端。',
  'help.ctx.settings-integrations.bullet.1':
    '相片提供商：Immich 和 Synology Photos，各有自己的 URL 和金鑰、「測試連線」和「儲存」。',
  'help.ctx.settings-integrations.bullet.2': '「API 金鑰」：供指令碼和其他工具以你的名義呼叫 TREK API 的個人金鑰。',
  'help.ctx.settings-integrations.bullet.3': '「MCP 配置」：端點、可直接複製的客戶端配置，以及 API 令牌。',
  'help.ctx.settings-integrations.bullet.4':
    '「OAuth 2.1 客戶端」：透過 TREK 登入的應用程式，包括重新導向 URI、允許的授權範圍、機器客戶端和活躍的工作階段。',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'TREK 在此裝置上保留什麼，好讓旅行在沒有網路時也能開啟；以及離線時的變更與別處的變更衝突時會發生什麼。',
  'help.ctx.settings-offline.bullet.1':
    '「離線模式」：「強制離線模式」讓應用程式表現得像斷網一樣，用於測試或按流量計費的連線。',
  'help.ctx.settings-offline.bullet.2': '「準備離線使用」：「下載以供離線使用」現在就取得你的旅行及其地圖圖磚。',
  'help.ctx.settings-offline.bullet.3': '「要離線儲存哪些內容」：地圖圖磚開或關，以及每次旅行一個開關。',
  'help.ctx.settings-offline.bullet.4':
    '「同步衝突」和「離線快取」：衝突處理策略、待處理和失敗的數量、「立即重新同步」和「清除快取」。',
  'help.ctx.settings-account.title': '帳戶',
  'help.ctx.settings-account.summary':
    '你在這個 TREK 上是誰、如何登入：個人資料和頭像、密碼、雙因素認證、Passkey，以及最底部的刪除帳戶。',
  'help.ctx.settings-account.bullet.1': '個人資料：使用者名稱、郵箱和頭像，用「儲存資料」儲存。',
  'help.ctx.settings-account.bullet.2': '「修改密碼」：目前密碼、新密碼兩次，然後「更新密碼」。',
  'help.ctx.settings-account.bullet.3':
    '使用身份驗證器應用程式和備用代碼的「雙因素認證 (2FA)」；不用密碼登入的「Passkey」。',
  'help.ctx.settings-account.bullet.4': '底部的「刪除賬戶」，需要先確認。最後一位管理員不能刪除自己。',
  // language-region
  'help.guide.language-region.title': '設定語言、單位和貨幣',
  'help.guide.language-region.goal': '讓 TREK 說你的語言，按你的方式計數。',
  'help.guide.language-region.step.1':
    '在「Language & region」中選擇介面語言。TREK 立即切換，在你登入的每台裝置上都一樣。',
  'help.guide.language-region.step.2': '在它下方選擇時間格式、顯示貨幣，以及距離和溫度單位。',
  'help.guide.language-region.result': '日期、距離和金額按你期望的方式顯示；旅行自己的貨幣仍然顯示在換算金額旁邊。',
  'help.guide.language-region.tip.1': '顯示貨幣用於跨旅行的合計；每次旅行保留你為它設定的貨幣。',
  'help.guide.language-region.tip.2': '語言還決定 Vacay 和日記裡的星期和月份名稱。',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': '調整地圖和預訂的行為',
  'help.guide.travel-map-prefs.goal': '決定旅行地圖預設顯示什麼。',
  'help.guide.travel-map-prefs.step.1':
    '在「Travel & map」中，「一律顯示訂票路線」讓航班和火車即使在它們的日期未開啟時也留在地圖上；「在地圖上探索地點」顯示尋找地點的小按鈕；「從住宿地點最佳化路線」從你過夜的地方開始規劃路線。',
  'help.guide.travel-map-prefs.step.2':
    '「模糊預訂程式碼」把確認號碼隱藏起來，滑鼠移上去才顯示；「預訂路線標籤」把預訂名稱寫在它的路線旁。',
  'help.guide.travel-map-prefs.result': '旅行地圖在每次旅行中都遵循這些設定，直到你再撥回去。',
  'help.guide.travel-map-prefs.tip.1': '這些是按帳戶而不是按旅行設定的。共享旅行的成員各自看到自己的選擇。',
  // startup
  'help.guide.startup.title': '選擇 TREK 開啟時的頁面',
  'help.guide.startup.goal': '落在你最常工作的地方，而不是每次都進儀表板。',
  'help.guide.startup.step.1': '在「啟動」下，把「啟動頁面」設為「儀表板」或「進行中的旅行」。',
  'help.guide.startup.step.2': '「啟動分頁」決定開啟一次旅行時先顯示哪個分頁。',
  'help.guide.startup.result': '下次登入和下次點選 logo 都直接去那裡。',
  'help.guide.startup.tip.1': '「進行中的旅行」指今天正在進行的旅行，沒有的話就是下一次旅行。',
  // theme-scheme
  'help.guide.theme-scheme.title': '設定主題和強調色',
  'help.guide.theme-scheme.goal': '讓 TREK 用淺色、深色或跟隨你的裝置，配上你喜歡的顏色。',
  'help.guide.theme-scheme.step.1': '在「Theme」下選擇「淺色」「深色」或「自動」。「自動」跟隨你的裝置。',
  'help.guide.theme-scheme.step.2':
    '選擇一個「Color scheme」：「Default」「High contrast」「Indigo」「Teal」「Rose」「Amber」「Violet」或「Custom」。',
  'help.guide.theme-scheme.step.3':
    '選「Custom」時，從預設裡挑一個強調色或輸入你自己的。旁邊的對比度檢查會告訴你文字在這個顏色上是否仍然清晰可讀。',
  'help.guide.theme-scheme.result': '按鈕、連結和高亮到處都用這個強調色，在你登入的每台裝置上都一樣。',
  'help.guide.theme-scheme.tip.1': '導覽列裡也有一個淺色或深色的快速開關；它設定的是同一個主題。',
  'help.guide.theme-scheme.tip.2': '當預設配色看起來太淡時，就選「High contrast」。',
  // readability
  'help.guide.readability.title': '調整可讀性和文字大小',
  'help.guide.readability.goal': '少一點玻璃效果，少一點動態效果，多一點空間或更大的字。',
  'help.guide.readability.step.1':
    '在「Readability」下，「Transparency」把玻璃面板切換為實色表面，「Reduce motion」把動畫降到最少，「Density」在「Comfortable」和「Compact」之間選擇。',
  'help.guide.readability.step.2':
    '「Text size」一次縮放「Everything」；「Advanced text sizes」讓標題、副標題、內文和說明文字可以各不相同。',
  'help.guide.readability.result': '整個應用程式立即跟隨，包括地圖面板和日記。',
  'help.guide.readability.tip.1': '不去動「Reduce motion」時，它還會跟隨你系統的設定。',
  'help.guide.readability.tip.2': '文字大小透過排版層級套用，所以不會有內容被截斷；放不下的尺寸會換行。',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': '選擇儀表板小工具',
  'help.guide.dashboard-widgets.goal': '只顯示你用的小工具，桌面和手機分開設定。',
  'help.guide.dashboard-widgets.step.1':
    '在「Dashboard widgets」下，為「Desktop」和「Mobile」分別開啟或關閉每個小工具：整個右側邊欄、貨幣、Collections、時區、即將到來的預訂、Atlas 國家和旅行數據。',
  'help.guide.dashboard-widgets.step.2': '底部的「Reset to defaults」把整個分頁恢復到出廠狀態。',
  'help.guide.dashboard-widgets.result': '儀表板立即重新排列；關掉右側邊欄後它會置中。',
  'help.guide.dashboard-widgets.tip.1': '擴充套件的小工具只有在管理員開啟了那個擴充套件時才會出現。',
  'help.guide.dashboard-widgets.tip.2': '儀表板本身會按裝置記住你的格線或清單檢視以及排序方式。',
  // map-provider
  'help.guide.map-provider.title': '選擇地圖引擎和樣式',
  'help.guide.map-provider.goal': '在經典地圖、向量圖磚和 Mapbox 的 3D 地圖之間切換。',
  'help.guide.map-provider.step.1':
    '在「地圖提供商」下，選 Leaflet 得到可用任意點陣圖磚的經典 2D 地圖，選 MapLibre 得到無需權杖的 OpenFreeMap 向量圖磚，選 Mapbox 得到帶 3D 建築和地形的向量圖磚。',
  'help.guide.map-provider.step.2':
    '選一個「地圖樣式」或「地圖模板」決定外觀。Mapbox 需要「Mapbox 存取權杖」，一些點陣樣式需要「CARTO API 金鑰」；欄位旁邊的連結會帶你去取得。',
  'help.guide.map-provider.step.3': '「高畫質模式」加上反鋸齒和地球儀投影。點選「儲存地圖」。',
  'help.guide.map-provider.result': 'TREK 裡的每張地圖，旅行、Atlas、Collections 和日記，都由你選的引擎繪製。',
  'help.guide.map-provider.tip.1': '沒有權杖時，Mapbox 會退回預設地圖，而不是什麼都不顯示。',
  'help.guide.map-provider.tip.2': '你離線儲存的地圖圖磚來自下載時處於啟用狀態的提供商。',
  // notification-channels
  'help.guide.notification-channels.title': '設定通知送達的地方',
  'help.guide.notification-channels.goal': '在手機上或另一個工具裡收到旅行提醒和協作事件。',
  'help.guide.notification-channels.step.1':
    '在「通知」下填寫「Ntfy 主題」；如果你自己執行伺服器，再加上你的「Ntfy 伺服器 URL」和「存取權杖」。「測試」會立刻送一則訊息。',
  'help.guide.notification-channels.step.2':
    '或者填一個以 JSON 接收所有事件的「Webhook URL」，用同樣的方式「測試」它。',
  'help.guide.notification-channels.step.3':
    '在下方的列裡，按管道開啟或關閉每個事件。外掛管道在外掛設定裡設定好之前顯示「前往設定」；「傳送測試」會試送一則。',
  'help.guide.notification-channels.result':
    '事件透過開啟的管道送出。無論如何，導覽列裡的鈴鐺仍會在應用程式內顯示它們。',
  'help.guide.notification-channels.tip.1': '按旅行的偏好設定在旅行本身的通知設定裡。',
  'help.guide.notification-channels.tip.2': '管理員可以為所有人預填一個預設 ntfy 伺服器；主題仍由你自己選。',
  // photo-providers
  'help.guide.photo-providers.title': '連接相片庫',
  'help.guide.photo-providers.goal': '讓日記從 Immich 或 Synology Photos 拉取當天的相片。',
  'help.guide.photo-providers.step.1':
    '在「整合」下找到提供商的區段，輸入它的 URL 和 API 金鑰。Immich 還可以把旅程上傳的相片鏡像回相片庫。',
  'help.guide.photo-providers.step.2': '點選「測試連線」，然後「儲存」。',
  'help.guide.photo-providers.result':
    '條目編輯器的「External photos」分頁會在已連接的相片庫中搜尋該條目當天的相片，離條目位置最近的排在前面。',
  'help.guide.photo-providers.tip.1': '這個連接是你自己的：旅程的其他成員各自連接自己的相片庫。',
  'help.guide.photo-providers.tip.2': '相片裡沒有 GPS 資料的提供商也能用；那時清單按時間排序。',
  // api-keys
  'help.guide.api-keys.title': '建立 API 金鑰',
  'help.guide.api-keys.goal': '讓指令碼或其他工具以你的身分呼叫 TREK API。',
  'help.guide.api-keys.step.1': '在「API 金鑰」下點選「建立金鑰」，取一個能說明它用在哪裡的名稱。',
  'help.guide.api-keys.step.2': '從對話方塊裡複製金鑰：它只顯示一次。當工具不再需要時，從清單裡刪除金鑰。',
  'help.guide.api-keys.result': '帶這個金鑰的請求以你的權限執行；清單顯示每個金鑰的建立時間和最後使用時間。',
  'help.guide.api-keys.tip.1': '每個工具一個金鑰，撤銷起來毫不費力。',
  'help.guide.api-keys.tip.2': 'AI 助理請改用帶 OAuth 的 MCP；API 金鑰是給一般 HTTP 客戶端的。',
  // mcp-oauth
  'help.guide.mcp-oauth.title': '透過 MCP 連接 AI 助理',
  'help.guide.mcp-oauth.goal': '讓 Claude、IDE 或其他 MCP 客戶端存取你的旅行。',
  'help.guide.mcp-oauth.step.1':
    '在「MCP 配置」下複製「MCP 端點」，或者為接受 JSON 片段的客戶端複製整個「客戶端配置」。',
  'help.guide.mcp-oauth.step.2':
    '透過瀏覽器登入的客戶端使用 OAuth 2.1：在「OAuth 2.1 客戶端」下「新增客戶端」，填寫「重新導向 URI」「允許的授權範圍」，沒有瀏覽器的伺服器則選「機器客戶端」。',
  'help.guide.mcp-oauth.step.3':
    '每個客戶端上都有「輪換密鑰」和「刪除客戶端」；「活躍的 OAuth 工作階段」列出已登入的工作階段並讓你撤銷。「API 令牌」和「建立新令牌」是較早的接入方式。',
  'help.guide.mcp-oauth.result': '客戶端可以以你的身分讀取和修改其授權範圍允許的內容，每個操作都顯示在你的名下。',
  'help.guide.mcp-oauth.tip.1': '授權範圍是安全網：在客戶端需要更多之前，只給它讀取範圍。',
  'help.guide.mcp-oauth.tip.2': '管理員可以為整個執行個體關閉 MCP；那時這個區段就不存在。',
  // offline-prepare
  'help.guide.offline-prepare.title': '把旅行帶到離線',
  'help.guide.offline-prepare.goal': '在斷網之前，把你的旅行和地圖放到這台裝置上。',
  'help.guide.offline-prepare.step.1':
    '在「要離線儲存哪些內容」下，保持「離線儲存地圖瓦片」開啟，並開啟你想放到這台裝置上的旅行。',
  'help.guide.offline-prepare.step.2': '在「準備離線使用」下點選「下載以供離線使用」。它會取得旅行以及地點周圍的圖磚。',
  'help.guide.offline-prepare.step.3': '「離線模式」下的「強制離線模式」讓你在出發前檢查一切是否齊全。',
  'help.guide.offline-prepare.result': '旅行在沒有網路時也能開啟；你做的變更在佇列裡等待，重新連線後送出。',
  'help.guide.offline-prepare.tip.1': '圖磚佔的空間最多：「離線快取」區段按旅行顯示儲存了什麼。',
  'help.guide.offline-prepare.tip.2': '從瀏覽器把 TREK 安裝為應用程式，離線啟動最順暢。',
  // offline-conflicts
  'help.guide.offline-conflicts.title': '決定同步衝突時誰勝出',
  'help.guide.offline-conflicts.goal': '選擇 TREK 如何處理離線變更與別處變更之間的衝突。',
  'help.guide.offline-conflicts.step.1':
    '在「同步衝突」下，選擇「每次都詢問我」「一律保留我的版本」或「一律保留伺服器版本」。',
  'help.guide.offline-conflicts.step.2':
    '「離線快取」顯示旅行、待處理和失敗的變更以及衝突；「立即重新同步」推送佇列，「清除快取」清空裝置。',
  'help.guide.offline-conflicts.result': '選「每次都詢問我」時，衝突會顯示兩個版本讓你挑；另外兩種則靜默處理。',
  'help.guide.offline-conflicts.tip.1': '「清除快取」只移除這台裝置上的副本；伺服器上的內容不受影響。',
  // profile
  'help.guide.profile.title': '修改你的個人資料',
  'help.guide.profile.goal': '更新你的名字、郵箱和相片。',
  'help.guide.profile.step.1': '在「賬戶」下編輯「使用者名稱」和「郵箱」。頭像可以上傳你自己的圖片；移除後回到首字母。',
  'help.guide.profile.step.2': '點選「儲存資料」。',
  'help.guide.profile.result': '你的名字和相片立即在各處更新，包括你共享的旅行。',
  'help.guide.profile.tip.1': '透過 OIDC 登入的帳戶會在這裡顯示出來；那時郵箱來自身分提供者。',
  // password
  'help.guide.password.title': '修改你的密碼',
  'help.guide.password.goal': '設定一個新密碼。',
  'help.guide.password.step.1': '在「修改密碼」下輸入目前密碼，然後輸入新密碼兩次。',
  'help.guide.password.step.2': '點選「更新密碼」。',
  'help.guide.password.result': '新密碼從下次登入起生效；其他工作階段保持登入。',
  'help.guide.password.tip.1': '透過 OIDC 登入的帳戶沒有可修改的 TREK 密碼。',
  // mfa
  'help.guide.mfa.title': '開啟雙因素認證',
  'help.guide.mfa.goal': '用身份驗證器應用程式的驗證碼保護帳戶。',
  'help.guide.mfa.step.1': '在「雙因素認證 (2FA)」下點選「設定身份驗證器」。',
  'help.guide.mfa.step.2': '用你的應用程式掃描 QR code，或手動輸入密鑰，然後輸入它顯示的六位驗證碼並點選「啟用 2FA」。',
  'help.guide.mfa.step.3': '儲存備用代碼：複製、下載或列印。每個只能用一次，在你手邊沒有手機時使用。',
  'help.guide.mfa.result': '每次登入在密碼之後都會要求驗證碼。',
  'help.guide.mfa.tip.1': '「停用 2FA」需要你的密碼和一個目前的驗證碼。',
  'help.guide.mfa.tip.2': '管理員可以要求所有人使用 2FA；那時在這裡無法關閉。',
  // passkeys
  'help.guide.passkeys.title': '用 Passkey 登入',
  'help.guide.passkeys.goal': '用裝置的指紋、臉部或 PIN 代替密碼。',
  'help.guide.passkeys.step.1': '在「Passkey」下點選「新增 Passkey」，並在裝置上確認。取一個能說明是哪台裝置的名稱。',
  'help.guide.passkeys.step.2': '清單顯示每個 Passkey 的名稱和最後使用時間；刪除按鈕移除一個。',
  'help.guide.passkeys.result': '登入頁會提供 Passkey；密碼仍作為備用方式保留。',
  'help.guide.passkeys.tip.1': 'Passkey 保存在裝置或它的密碼管理器裡，所以每台裝置新增一個。',
  'help.guide.passkeys.tip.2': 'Passkey 需要 HTTPS；在純 HTTP 的執行個體上，這個區段會解釋為什麼它們不可用。',
  // delete-account
  'help.guide.delete-account.title': '刪除你的帳戶',
  'help.guide.delete-account.goal': '移除你的帳戶和只屬於你的資料。',
  'help.guide.delete-account.step.1': '在「帳戶」的最底部點選「刪除賬戶」並確認。',
  'help.guide.delete-account.result': '你的帳戶、你自己的旅行和你的旅程都會消失；你與他人共享的旅行留給他們。',
  'help.guide.delete-account.tip.1': '執行個體的最後一位管理員不能刪除自己；先把別人設為管理員。',
  'help.guide.delete-account.tip.2': '沒有復原。確認之前，先匯出你想保留的內容。',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': '管理後臺',
  'help.ctx.admin.summary':
    '支撐所有人 TREK 的那個實例：誰可以登入、怎麼登入，什麼功能開著，檔案放在哪裡，伺服器怎麼聯絡到人，以及怎麼備份。只有管理員能看到這個頁面；每個分頁在側邊欄裡都是獨立的一屏。',
  'help.ctx.admin.bullet.1': '頂部的四張卡片統計使用者、行程、地點和檔案；上方的橫幅會通告更新的 TREK 版本。',
  'help.ctx.admin.bullet.2': '「使用者」和「用戶預設設定」：帳戶、邀請連結，以及新帳戶初始的地圖設定。',
  'help.ctx.admin.bullet.3':
    '「配置」「設定」「擴充套件」和「外掛」：打包模板、分類和學校假期；登入方式和 API 金鑰；功能模組；第三方外掛。',
  'help.ctx.admin.bullet.4':
    '「儲存」「通知」「MCP 存取」和「GitHub」：上傳檔案的去向、實例範圍的通知管道、AI 用戶端的令牌和工作階段，以及版本歷史。',
  'help.ctx.admin.bullet.5': '「備份」和「審計日誌」：手動和定時的備份，以及安全相關事件的日誌。',
  'help.ctx.admin-users.title': '使用者',
  'help.ctx.admin-users.summary':
    '這個 TREK 上的每個帳戶，帶角色、郵箱和最近登入時間，以及讓人們在封閉實例上註冊的邀請連結。',
  'help.ctx.admin-users.bullet.1':
    '表格：使用者名稱、郵箱、角色、建立日期、最近登入，以及每列的操作。你自己會被標出來。',
  'help.ctx.admin-users.bullet.2': '頂部的「建立使用者」手動新增一個帳戶，密碼由你交給對方。',
  'help.ctx.admin-users.bullet.3':
    '下方的「邀請連結」：一次性的註冊連結，帶使用次數上限和有效期，還可以選一個行程，讓新使用者註冊後直接加入。',
  'help.ctx.admin-users.bullet.4':
    '底部的「許可權設定」：按操作設定誰可以執行，「所有人」「旅行成員」「旅行所有者」或「僅管理員」。',
  'help.ctx.admin-defaults.title': '用戶預設設定',
  'help.ctx.admin-defaults.summary': '新帳戶初始的設定，這樣沒人需要先去找地圖分頁：地圖提供者、樣式、權杖和品質。',
  'help.ctx.admin-defaults.bullet.1':
    '地圖提供者、Mapbox 樣式和權杖、CARTO 金鑰和 Mapbox 品質，和使用者在「設定」的「地圖」裡設定的一模一樣。',
  'help.ctx.admin-defaults.bullet.2':
    '每個欄位旁的「重設」恢復 TREK 自身的選擇；使用者自己的設定永遠優先於這些預設值。',
  'help.ctx.admin-config.title': '配置',
  'help.ctx.admin-config.summary':
    '實例上所有行程共用的內容：打包模板、地點和收藏用的分類集合，以及 Vacay 所引用的學校假期目錄。',
  'help.ctx.admin-config.bullet.1': '「打包模板」：帶名稱的分類和物品清單，行程的打包清單可以由此起步。',
  'help.ctx.admin-config.bullet.2': '「分類」：TREK 全域使用的分類的名稱、圖示和顏色，從地點檢視器到收藏都在用。',
  'help.ctx.admin-config.bullet.3': '「學校假期」：國家和地區的目錄，用於內建資料來源未涵蓋的地方。',
  'help.ctx.admin-settings.title': '設定',
  'help.ctx.admin-settings.summary':
    '人們怎麼進來，伺服器可以和什麼通訊：登入和註冊方式、SSO、Passkey、雙因素政策，地圖、地點和圖片的 API 金鑰，搜尋和公共運輸的資料來源，以及上傳允許的檔案類型。',
  'help.ctx.admin-settings.bullet.1':
    '「Authentication Methods」：「Password Login」「Password Registration」「SSO Login」「SSO Auto-Provisioning」和「要求雙因素身份驗證（2FA）」。',
  'help.ctx.admin-settings.bullet.2':
    '「單點登入 (OIDC)」填頒發者、用戶端和顯示名稱；「Passkey 登入」填 Relying Party ID 和來源。',
  'help.ctx.admin-settings.bullet.3':
    '「API 金鑰」：Google Maps、Unsplash 和高德地圖，各自帶「測試」；「該金鑰的用途」把 Google 金鑰限定在你願意付費的功能上。',
  'help.ctx.admin-settings.bullet.4':
    '「地點搜尋來源」和「公共運輸資料來源」決定由誰回應搜尋和路線；「允許的檔案型別」限制上傳。',
  'help.ctx.admin-addons.title': '擴充套件',
  'help.ctx.admin-addons.summary':
    'TREK 的功能模組，每個都有一個開關：行李、費用、文件、Vacay、Atlas、Collab、旅程、收藏、公路旅行、MCP、AirTrail、Dawarich 和 AI 解析。關掉後，導覽項目、路由和 API 對所有人都消失。',
  'help.ctx.admin-addons.bullet.1': '每個擴充套件一張卡片，帶開關；有選項的還有子列。',
  'help.ctx.admin-addons.bullet.2':
    '相片提供者和文件提供者也以卡片的形式出現在這裡，這樣可以向使用者提供 Immich 或 Synology。',
  'help.ctx.admin-addons.bullet.3': '「行李追蹤」在卡片下方有自己的開關。',
  'help.ctx.admin-plugins.title': '外掛',
  'help.ctx.admin-plugins.summary':
    '在 TREK 旁邊以獨立程序執行的第三方外掛，每個都帶有安裝時申請的權限。可以從目錄安裝、上傳一個套件，或在開發時連結一個資料夾。',
  'help.ctx.admin-plugins.bullet.1':
    '清單：每個已安裝的外掛，帶版本、狀態、簽章和它持有的權限；每列可以啟用、停用、更新或解除安裝。',
  'help.ctx.admin-plugins.bullet.2': '「上傳外掛」接收一個套件檔案；「重新掃描」會擷取為開發而連結的外掛資料夾。',
  'help.ctx.admin-plugins.bullet.3': '每個外掛的「允許的主機」：外掛可以呼叫的位址，因為對外連線預設被拒絕。',
  'help.ctx.admin-storage.title': '儲存',
  'help.ctx.admin-storage.summary':
    '上傳檔案存放的地方：本機磁碟、S3 儲存桶，或者同時寫入兩者的鏡像。每個上傳分類可以走不同的後端，「健康狀態」告訴你是否每個後端都在回應。',
  'help.ctx.admin-storage.bullet.1':
    '「後端」：每個後端的名稱和類型，帶「測試」「編輯」和「移除」；由環境變數設定的後端在這裡是唯讀的。',
  'help.ctx.admin-storage.bullet.2':
    '「分類」：封面、文件、旅程相片等，每一類都指派給一個後端；變更某一類時會提議搬移現有檔案。',
  'help.ctx.admin-storage.bullet.3':
    '「健康狀態」：每個後端一項檢查，還有一個種子檔案，證明設定就是伺服器所看到的設定。',
  'help.ctx.admin-notifications.title': '通知',
  'help.ctx.admin-notifications.summary':
    '實例向使用者提供的管道，以及能聯絡到你這位管理員的管道。使用者在「設定」裡選自己的主題和 URL；你決定有哪些管道，並設定郵件。',
  'help.ctx.admin-notifications.bullet.1':
    '「應用程式內通知」「電子郵件 (SMTP)」「Ntfy」和「Webhook」：各一個面板，帶一個向使用者開放該管道的開關，以及它需要的伺服器端設定。',
  'help.ctx.admin-notifications.bullet.2': '「行程提醒」：伺服器是否在行程開始前傳送提醒。',
  'help.ctx.admin-notifications.bullet.3':
    '「管理員 Ntfy」和「管理員 Webhook」：備份失敗或新版本發布這類管理員事件的去向，帶「測試」。',
  'help.ctx.admin-mcp-tokens.title': 'MCP 存取',
  'help.ctx.admin-mcp-tokens.summary':
    'AI 用戶端針對這個 TREK 持有的每個令牌和 OAuth 工作階段，涵蓋所有使用者，並且可以撤銷其中任何一個。',
  'help.ctx.admin-mcp-tokens.bullet.1': '「API 令牌」：誰建立的、最近何時使用，以及「刪除」。',
  'help.ctx.admin-mcp-tokens.bullet.2': '「OAuth 工作階段」：用戶端、使用者和被授予的範圍，以及「撤銷」。',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'TREK 有什麼新內容：來自 GitHub 的版本歷史、你執行的版本，以及是否有更新的版本。更新本身在應用程式之外、在主機上進行。',
  'help.ctx.admin-github.bullet.1': '「版本歷史」列出各個版本及其說明；最新的一個帶「最新」，你的版本會被標出。',
  'help.ctx.admin-github.bullet.2':
    '一旦有更新的版本，頁首會出現「有可用更新」，並附上 Docker 和其他安裝方式的更新方法。',
  'help.ctx.admin-backup.title': '備份',
  'help.ctx.admin-backup.summary':
    '資料庫和上傳檔案的完整備份，可手動或定時建立，保存在伺服器上，並可作為單一檔案下載。「恢復」把備份放回去。',
  'help.ctx.admin-backup.bullet.1': '「資料備份」：「建立備份」，以及現有備份的清單，帶「下載」「恢復」和刪除。',
  'help.ctx.admin-backup.bullet.2': '「上傳備份」匯入在另一個實例上或更早某天製作的檔案。',
  'help.ctx.admin-backup.bullet.3': '「自動備份」：開或關、間隔、時間和日期，以及保留多少個。',
  'help.ctx.admin-audit.title': '審計日誌',
  'help.ctx.admin-audit.summary':
    '安全相關和管理事件的日誌：登入和失敗、MFA 變更、使用者和設定變更、備份和恢復。唯讀，最新的在前。',
  'help.ctx.admin-audit.bullet.1': '每個事件一列，帶時間、使用者、操作、資源、IP 和詳情。',
  'help.ctx.admin-audit.bullet.2': '「重新整理」重新載入；「載入更多」繼續往回翻。',
  // create-user
  'help.guide.create-user.title': '建立使用者',
  'help.guide.create-user.goal': '不用邀請，手動新增一個帳戶。',
  'help.guide.create-user.step.1': '點選「使用者」分頁頂部的「建立使用者」。',
  'help.guide.create-user.step.2': '輸入「使用者名稱」「郵箱」和「密碼」，並選擇「角色」：「使用者」或「管理員」。',
  'help.guide.create-user.step.3': '點選「建立使用者」。',
  'help.guide.create-user.result': '帳戶出現在表格裡，可以立即登入；請透過你信任的管道把密碼交給對方。',
  'help.guide.create-user.tip.1': '對於應該自己選密碼的人，邀請連結是更好的入口。',
  'help.guide.create-user.tip.2': '管理員能看到這個頁面和審計日誌；其他一切對兩種角色都一樣。',
  // edit-user
  'help.guide.edit-user.title': '變更使用者的角色或密碼',
  'help.guide.edit-user.goal': '提升或降級某人，或在對方遺失密碼後讓其重新登入。',
  'help.guide.edit-user.step.1': '點選該使用者所在列的鉛筆。「編輯使用者」會帶著帳戶詳情開啟。',
  'help.guide.edit-user.step.2':
    '變更「角色」，設定「新密碼」，或者在對方遺失了存放 Passkey 的裝置時點選「重設 Passkey」，然後「儲存」。',
  'help.guide.edit-user.result': '變更從下一次請求起生效；新密碼從下一次登入起可用。',
  'help.guide.edit-user.tip.1': '只要你還是最後一位管理員，就不能去掉自己的管理員角色。',
  'help.guide.edit-user.tip.2': '重設 Passkey 會保留密碼；對方在「設定」的「帳戶」裡新增新的 Passkey。',
  // invite-links
  'help.guide.invite-links.title': '用連結邀請某人',
  'help.guide.invite-links.goal': '讓一個人在封閉實例上註冊，還可以讓其直接進入某個行程。',
  'help.guide.invite-links.step.1': '在「邀請連結」下點選「建立連結」。',
  'help.guide.invite-links.step.2':
    '設定「最大使用次數」和「有效期」，可選擇「加入行程（選填）」，然後點選「建立並複製」。',
  'help.guide.invite-links.step.3':
    '把連結送出去。每一列顯示它被使用了多少次以及由誰建立；「複製連結」可再次複製，用完或過期的連結會被標出。',
  'help.guide.invite-links.result': '開啟連結的人用自己的密碼註冊，如果選了行程，就會直接加入。',
  'help.guide.invite-links.tip.1': '即使「設定」裡關閉了「Password Registration」，邀請連結也照樣有效。',
  'help.guide.invite-links.tip.2': '只用一次、有效期很短的連結，是給單一個人的最安全預設。',
  // delete-user
  'help.guide.delete-user.title': '刪除使用者',
  'help.guide.delete-user.goal': '移除一個帳戶以及只屬於它的一切。',
  'help.guide.delete-user.step.1': '點選該使用者所在列的垃圾桶圖示，並確認「刪除使用者」。',
  'help.guide.delete-user.result': '帳戶、它自己的行程和旅程都沒了；與他人共享的行程留給其餘成員。',
  'help.guide.delete-user.tip.1': '沒有復原。不確定的話先做個備份。',
  'help.guide.delete-user.tip.2': '最後一位管理員不能被刪除；先把別人設為管理員。',
  // permissions
  'help.guide.permissions.title': '決定誰可以做什麼',
  'help.guide.permissions.goal': '按操作設定在這個 TREK 上允許哪個角色執行。',
  'help.guide.permissions.step.1':
    '在「許可權設定」裡，在對應分組中找到該操作，比如「旅行管理」下的「刪除旅行」，然後選擇級別：「所有人」「旅行成員」「旅行所有者」或「僅管理員」。改動過的列會標為「已自定義」。',
  'help.guide.permissions.step.2': '點選「儲存」。「恢復預設」把每一列都放回內建級別。',
  'help.guide.permissions.result': '規則一次對所有旅行生效；級別不夠的人的按鈕和選單會消失。',
  'help.guide.permissions.tip.1': '「旅行所有者」指建立該旅行的人；管理員始終可以做任何事。',
  'help.guide.permissions.tip.2': '寧可降低級別，也不要刪除成員：不能編輯的成員仍然可以查看和留言。',
  // default-map
  'help.guide.default-map.title': '為新使用者設定地圖預設值',
  'help.guide.default-map.goal': '讓每個新帳戶不用個人權杖也有一張能用的地圖。',
  'help.guide.default-map.step.1':
    '在「地圖」下選擇「地圖引擎」；對於 Mapbox 或 MapLibre，設定「地圖樣式」「共用的 Mapbox 權杖」和「高品質模式」；對於點陣地圖，設定「地圖模板」和「共用的 CARTO 金鑰」。',
  'help.guide.default-map.step.2':
    '在你改過的任何欄位旁，「重設」恢復 TREK 自身的選擇。左側的「用戶預設設定」對「顏色模式」、單位和貨幣做同樣的事。',
  'help.guide.default-map.result': '新帳戶以這些設定起步；任何在「設定」裡設過自己地圖的人保留自己的。',
  'help.guide.default-map.tip.1': '在這裡輸入的權杖由所有沒有自己權杖的人共用，所以留意它的配額。',
  'help.guide.default-map.tip.2': '從未動過地圖分頁的現有帳戶也會遵循這些預設值。',
  // packing-templates
  'help.guide.packing-templates.title': '建立打包模板',
  'help.guide.packing-templates.goal': '讓行程有一份可以起步的打包清單，而不是空白一片。',
  'help.guide.packing-templates.step.1': '點選「新建模板」，輸入名稱，用勾號確認。',
  'help.guide.packing-templates.step.2': '開啟模板並點選「新增分類」；每個分類下的 + 新增物品，物品只需要一個名稱。',
  'help.guide.packing-templates.step.3': '一切隨手儲存。鉛筆重新命名模板、分類或物品，垃圾桶刪除它。',
  'help.guide.packing-templates.result': '每個行程的打包清單都會提供這個模板；套用時會複製物品，所以行程可以隨意修改。',
  'help.guide.packing-templates.tip.1': '按行程類型各建一個模板，比如海灘、城市、健行，勝過一份巨大的清單。',
  'help.guide.packing-templates.tip.2': '刪除模板不影響已經套用它的行程。',
  // categories
  'help.guide.categories.title': '管理分類集合',
  'help.guide.categories.goal': '決定地點和收藏可以帶哪些分類，以及它們的樣子。',
  'help.guide.categories.step.1': '點選「新建分類」，取個名字，選一個圖示和一種顏色；「預覽」顯示效果。點選「建立」。',
  'help.guide.categories.step.2': '把滑鼠移到清單中的分類上即可編輯或刪除。刪除會要求確認。',
  'help.guide.categories.result': '這個集合同時套用到所有地方：地點檢視器、地圖圖釘、收藏和篩選器。',
  'help.guide.categories.tip.1': '地點保留的是分類 ID，所以重新命名一個分類會在每個地點上一併改名。',
  'help.guide.categories.tip.2': '被刪除的分類會讓它的地點沒有分類；如果這很重要，先重新指派。',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': '手動維護學校假期',
  'help.guide.school-holiday-catalog.goal': '補上內建假期資料來源沒有涵蓋的國家或地區。',
  'help.guide.school-holiday-catalog.step.1':
    '在「學校假期」下點選「新增國家」，輸入「國家」和它的「國家代碼（如 US）」，然後「儲存」；再為每個有差異的部分「新增地區」。',
  'help.guide.school-holiday-catalog.step.2':
    '點選一個地區開啟「地區或學區」：「新增假期」，為每一段填上「假期名稱」「開始日期」和「結束日期」，然後「儲存」。垃圾桶移除一段假期、一個地區，或者一個已經沒有地區的國家。',
  'help.guide.school-holiday-catalog.result':
    '使用者在 Vacay 的「設定」裡能找到該國家和地區，並在年曆格線上看到這些假期。',
  'help.guide.school-holiday-catalog.tip.1':
    '來自內建資料來源的地區不能在這裡編輯；如果某個日期有誤，就在旁邊新增一個手動地區。',
  // auth-methods
  'help.guide.auth-methods.title': '決定人們如何登入',
  'help.guide.auth-methods.goal': '開放或關閉密碼登入、SSO 和註冊，並要求 2FA。',
  'help.guide.auth-methods.step.1':
    '在「Authentication Methods」下開啟或關閉「Password Login」和「Password Registration」。關閉註冊意味著新帳戶只能透過邀請連結、SSO 或手動建立。',
  'help.guide.auth-methods.step.2':
    '「SSO Login」和「SSO Auto-Provisioning」需要在下方設定好「單點登入 (OIDC)」；自動佈建會在某人第一次透過 SSO 登入時建立帳戶。',
  'help.guide.auth-methods.step.3':
    '「要求雙因素身份驗證（2FA）」讓每個密碼登入的使用者在下次登入時設定驗證器。「Passkey 登入」需要 Relying Party ID 以及存取你的 TREK 所用的來源。',
  'help.guide.auth-methods.result': '登入頁面只提供你保持開啟的那些方式。',
  'help.guide.auth-methods.tip.1': '在你把自己鎖在門外之前會出現警告：至少會保留一條管理員的登入途徑。',
  'help.guide.auth-methods.tip.2': '透過環境變數設定的值在這裡顯示為唯讀。',
  // oidc
  'help.guide.oidc.title': '接入單點登入',
  'help.guide.oidc.goal': '讓人們用你的身分提供者登入。',
  'help.guide.oidc.step.1':
    '在「單點登入 (OIDC)」下輸入按鈕的「顯示名稱」，以及來自你的提供者的「頒發者 URL」「Client ID」和「Client Secret」，然後「儲存」。',
  'help.guide.oidc.step.2': '在「Authentication Methods」下開啟「SSO Login」。',
  'help.guide.oidc.result': '登入頁面顯示 SSO 按鈕；開啟「SSO Auto-Provisioning」後，首次登入的使用者會自動獲得帳戶。',
  'help.guide.oidc.tip.1': '你的提供者需要的重新導向 URI 是你的 TREK 位址加上文件裡的 OIDC 回呼路徑。',
  'help.guide.oidc.tip.2': '宣告對應決定哪些 SSO 群組成為管理員；見文件中的 OIDC 頁面。',
  // instance-keys
  'help.guide.instance-keys.title': '輸入 API 金鑰',
  'help.guide.instance-keys.goal': '為整個實例解鎖 Google 地點搜尋、Unsplash 封面和高德地圖。',
  'help.guide.instance-keys.step.1':
    '在「API 金鑰」下貼上「Google Maps API 金鑰」並點選「測試」；欄位會告訴你金鑰是否回應。',
  'help.guide.instance-keys.step.2':
    '在「該金鑰的用途」下只開啟你願意用該金鑰付費的功能：自動補全、詳情、照片、資訊補充、地點搜尋紀錄。',
  'help.guide.instance-keys.step.3':
    '「Unsplash API 金鑰」驅動封面搜尋；「高德地圖 API Key」驅動中國境內的地點搜尋。用同樣的方式逐個測試。',
  'help.guide.instance-keys.result':
    '使用者無需自己的金鑰就能使用這些功能；沒有 Google 金鑰時，TREK 透過免費的 OpenStreetMap 元件和 TREK Places API 搜尋。',
  'help.guide.instance-keys.tip.1': '使用者在「設定」裡的個人金鑰對該使用者來說優先於實例金鑰。',
  'help.guide.instance-keys.tip.2': '金鑰也可以來自環境變數；那些在這裡顯示為唯讀。',
  // places-transit
  'help.guide.places-transit.title': '選擇搜尋和公共運輸資料來源',
  'help.guide.places-transit.goal': '決定由誰回應地點搜尋和公共運輸路線。',
  'help.guide.places-transit.step.1':
    '在「地點搜尋來源」下選擇「自動」「Google Places」「高德地圖」或「OpenStreetMap」。「自動」使用現有的最佳金鑰。',
  'help.guide.places-transit.step.2':
    '在「公共運輸資料來源」下選擇「Transitous（免費）」，全球可用且無需金鑰，或者「Google」，需要 Google 金鑰。',
  'help.guide.places-transit.result': 'TREK 裡的每個搜尋框和每條公共運輸路線都遵循這個選擇。',
  'help.guide.places-transit.tip.1': '缺少金鑰的資料來源會在這裡顯示警告，並回退到 OpenStreetMap。',
  'help.guide.places-transit.tip.2': 'Google 的公共運輸路線按請求計費；Transitous 不計費。',
  // file-types
  'help.guide.file-types.title': '限制檔案類型',
  'help.guide.file-types.goal': '決定上傳允許哪些副檔名。',
  'help.guide.file-types.step.1': '在「允許的檔案型別」下編輯以逗號分隔的副檔名清單並儲存。',
  'help.guide.file-types.result': '其他類型的上傳會被明確的提示拒絕，無論是在文件、旅程還是封面裡。',
  'help.guide.file-types.tip.1': '把圖片類型留在清單裡；封面和旅程相片走的是同一道檢查。',
  // toggle-addon
  'help.guide.toggle-addon.title': '開啟或關閉擴充套件',
  'help.guide.toggle-addon.goal': '把一個功能模組提供給所有人，或者收回。',
  'help.guide.toggle-addon.step.1': '撥動擴充套件卡片上的開關。導覽項目對所有人同時出現或消失。',
  'help.guide.toggle-addon.step.2':
    '有些卡片帶有選項子列，比如「行李」下的「行李追蹤」或「旅程」下的相片提供者；它們只在擴充套件開啟時顯示。',
  'help.guide.toggle-addon.result': '關閉的擴充套件的資料會保留；重新開啟後再次顯示。',
  'help.guide.toggle-addon.tip.1': '關閉 MCP 會移除端點以及依賴它的「整合」部分。',
  'help.guide.toggle-addon.tip.2': 'Vacay、Atlas 和旅程是使用者要得最多的擴充套件；文件需要儲存空間來放上傳檔案。',
  // install-plugin
  'help.guide.install-plugin.title': '安裝外掛',
  'help.guide.install-plugin.goal': '新增一個第三方外掛，並只給它申請的權限。',
  'help.guide.install-plugin.step.1':
    '開啟「探索」，選一個外掛並點選「安裝」；或者點選「上傳外掛」，選擇一個 .zip 或 .tar.gz 套件。',
  'help.guide.install-plugin.step.2':
    '回到「已安裝」，閱讀該列：外掛可以讀寫什麼、它呼叫哪些主機，以及是否已簽章。開啟「啟用外掛」。',
  'help.guide.install-plugin.step.3':
    '該列的選單提供「重新啟動」「檢視錯誤日誌」「允許的主機」和「更換版本…」；「刪除」解除安裝它。有新版本時該列會提供更新，申請新權限的更新在你核准之前保持關閉。',
  'help.guide.install-plugin.result':
    '外掛在自己的程序裡執行；它新增的內容，如小工具、地圖圖層、工具，出現在外掛宣告的位置。',
  'help.guide.install-plugin.tip.1': '「重新掃描」不需要套件，直接擷取為開發而連結的外掛資料夾。',
  'help.guide.install-plugin.tip.2': '未簽章的外掛會被這樣標出；只在你信任其來源時才安裝。',
  // storage-backends
  'help.guide.storage-backends.title': '把上傳檔案搬到 S3 或鏡像',
  'help.guide.storage-backends.goal': '把檔案放在物件儲存上，或者同時放在磁碟和儲存桶上。',
  'help.guide.storage-backends.step.1':
    '在「後端」下點選「新增後端」，取個「名稱」，選擇「類型」：「本機」「S3」或「鏡像」，填好欄位並「套用」。「測試」檢查連線，「儲存變更」寫入設定。',
  'help.guide.storage-backends.step.2':
    '在「分類」下把每個上傳分類指派給一個後端。變更某一類時會詢問是「移動現有物件」還是「僅路由新寫入」。',
  'help.guide.storage-backends.step.3': '頂部的「健康狀態」檢查每個後端；紅色項目會指出失敗的是什麼。',
  'help.guide.storage-backends.result': '新的上傳進入指派的後端；已搬移的檔案從那裡提供。',
  'help.guide.storage-backends.tip.1': '透過環境變數設定的後端會顯示出來，但不能在這裡編輯。',
  'help.guide.storage-backends.tip.2': '鏡像寫入兩個目標，從第一個讀取；用它可以不停機地搬遷。',
  // channels-instance
  'help.guide.channels-instance.title': '設定通知管道',
  'help.guide.channels-instance.goal': '決定使用者可以選哪些管道，並設定郵件。',
  'help.guide.channels-instance.step.1':
    '在「電子郵件 (SMTP)」下輸入 SMTP Host、SMTP Port、SMTP User、SMTP Password 和 From Address；「傳送測試郵件」會給你發一封郵件。',
  'help.guide.channels-instance.step.2':
    '開啟「Ntfy」和「Webhook」以提供它們；使用者隨後在「設定」的「通知」裡輸入自己的主題或 URL。',
  'help.guide.channels-instance.step.3': '「行程提醒」開關行程開始前的提醒；「應用程式內通知」始終開啟，這裡只是說明。',
  'help.guide.channels-instance.result': '每個使用者的「通知」分頁會顯示你開啟的管道。',
  'help.guide.channels-instance.tip.1': '在這裡輸入的預設 ntfy 伺服器會為使用者預填；他們仍然可以指定自己的。',
  'help.guide.channels-instance.tip.2': '一旦具備該能力的外掛被啟用，外掛管道會自行出現。',
  // admin-channels
  'help.guide.admin-channels.title': '在手機上接收管理員事件',
  'help.guide.admin-channels.goal': '得知備份失敗、新版本發布和其他實例事件。',
  'help.guide.admin-channels.step.1':
    '在「管理員 Ntfy」下輸入一個主題，如有需要再填伺服器和令牌；在「管理員 Webhook」下輸入一個 URL。',
  'help.guide.admin-channels.step.2': '點選「傳送測試 Ntfy」或「傳送測試 Webhook」，看訊息是否到達。',
  'help.guide.admin-channels.result': '管理員事件除了發到每位管理員的應用程式內鈴鐺之外，也會發到那裡。',
  'help.guide.admin-channels.tip.1': '把管理員主題和你的個人主題分開，這樣故障通知不會淹沒在行程訊息裡。',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': '撤銷 AI 存取',
  'help.guide.mcp-tokens-admin.goal': '檢視並切斷任何使用者的 AI 用戶端持有的每個令牌和工作階段。',
  'help.guide.mcp-tokens-admin.step.1': '在「API 令牌」下按使用者和名稱找到令牌；垃圾桶刪除它，用戶端立即停止。',
  'help.guide.mcp-tokens-admin.step.2':
    '在「OAuth 工作階段」下對基於瀏覽器的用戶端做同樣的事：用戶端、使用者和日期，垃圾桶撤銷工作階段。',
  'help.guide.mcp-tokens-admin.result': '用戶端必須由它的使用者重新連線；其他一切不變。',
  'help.guide.mcp-tokens-admin.tip.1': '範圍告訴你用戶端能做什麼；唯讀範圍留著無妨。',
  'help.guide.mcp-tokens-admin.tip.2': '關閉 MCP 擴充套件會一次撤銷所有內容。',
  // release-history
  'help.guide.release-history.title': '檢查新版本',
  'help.guide.release-history.goal': '知道你的 TREK 是否最新，以及下一個版本帶來什麼。',
  'help.guide.release-history.step.1':
    '有更新的版本時，管理頁面頂部會顯示「有可用更新」；「在 GitHub 檢視」開啟它，「如何更新」說明 Docker 和其他安裝方式的更新步驟。',
  'help.guide.release-history.step.2':
    '「版本歷史」列出每個版本及其說明；「顯示詳情」展開它們，最新的一個帶「最新」，「載入更多」繼續往回翻。',
  'help.guide.release-history.result': '更新在主機上進行，拉取新映像檔或建置新標籤；資料目錄保持不變。',
  'help.guide.release-history.tip.1': '更新前先做備份；「備份」分頁就在隔壁。',
  'help.guide.release-history.tip.2': '預先發布版本會顯示，但除非你正在執行一個預先發布版本，否則不會作為更新通告。',
  // create-backup
  'help.guide.create-backup.title': '建立並恢復備份',
  'help.guide.create-backup.goal': '給整個實例做快照，在別處留一份副本，並且能夠放回去。',
  'help.guide.create-backup.step.1': '在「資料備份」下點選「建立備份」。它把資料庫和上傳檔案打包成伺服器上的一個檔案。',
  'help.guide.create-backup.step.2': '「下載」把副本保存到這台機器之外；垃圾桶刪除舊備份以釋放空間。',
  'help.guide.create-backup.step.3':
    '對某個備份點「恢復」，或用檔案「上傳備份」，在「恢復備份？」確認一次後取代目前資料。',
  'help.guide.create-backup.result': '恢復會把使用者、行程、檔案和設定帶回到那個備份的時刻；所有人都會被登出。',
  'help.guide.create-backup.tip.1': '恢復是這裡唯一無法復原的操作。先做一個新的備份。',
  'help.guide.create-backup.tip.2': '備份存放在資料目錄裡；只有放到另一台機器上的副本才算真正的備份。',
  // auto-backup
  'help.guide.auto-backup.title': '定時備份',
  'help.guide.auto-backup.goal': '讓伺服器自行備份，並只保留最近幾個。',
  'help.guide.auto-backup.step.1':
    '在「自動備份」下開啟「啟用自動備份」，選擇「間隔」「執行時間」，以及每週或每月時的「星期幾」或「每月幾號」。',
  'help.guide.auto-backup.step.2': '「自動刪除舊備份」設定備份保留多久；新備份產生時，更舊的會被刪除。',
  'help.guide.auto-backup.result': '備份按排程出現在清單裡；失敗會發到管理員管道。',
  'help.guide.auto-backup.tip.1': '時間遵循伺服器的時區，顯示在「審計日誌」分頁裡。',
  'help.guide.auto-backup.tip.2': '伺服器上的儲存空間是有限的；保留三到五個通常就夠了。',
  // audit-log
  'help.guide.audit-log.title': '閱讀審計日誌',
  'help.guide.audit-log.goal': '弄清誰在什麼時候做了什麼。',
  'help.guide.audit-log.step.1':
    '閱讀各列：時間、使用者、操作、資源、IP 和詳情，最新的在前。操作按發生的事情命名，比如登入失敗、MFA 變更或恢復。',
  'help.guide.audit-log.step.2': '「重新整理」重新載入頂部；「載入更多」繼續往回翻。',
  'help.guide.audit-log.result': '一份可以交給任何詢問為什麼有變動的人的紀錄。',
  'help.guide.audit-log.tip.1': '時間以伺服器的時區顯示，時區名稱在表格上方。',
  'help.guide.audit-log.tip.2': '日誌只增不改；這裡的任何內容都不能從應用程式裡編輯或刪除。',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': '旅行',
  'help.ctx.trip.summary':
    '一次旅行的全部：包含天數、地圖和地點的計劃，以及交通、預訂、清單、費用、檔案和協作的分頁。它們每一個都有自己的說明頁面，就在本頁面下方。',
  'help.ctx.trip.bullet.1':
    '分頁列：「計劃」「交通」「預訂」「清單」「費用」「檔案」和「Collab」。哪些分頁存在，由你的 TREK 上的擴充套件和外掛決定。',
  'help.ctx.trip.bullet.2':
    '「計劃」是三欄：左邊是天數，中間是地圖，右邊是地點。預訂和交通就住在計劃裡，位於停靠點上和停靠點之間；分頁把它們列出來。',
  'help.ctx.trip.bullet.3': '右上角的「分享」開啟旅行裡的人：成員、訪客、邀請連結和唯讀的公開連結。',
  'help.ctx.trip.bullet.4': '標題、日期、封面和貨幣在「我的旅行」裡編輯，用旅行卡片上的鉛筆。',
  'help.ctx.trip.bullet.5': '欄內側邊緣的折疊箭頭把這一欄收起來，地圖佔據空間；欄旁邊的細分隔線改變它的寬度。',
  'help.ctx.trip.bullet.6': '天數工具列裡的撤銷箭頭收回對計劃的上一次變更。',
  // add-member
  'help.guide.add-member.title': '新增成員',
  'help.guide.add-member.goal': '讓有 TREK 帳號的人可以存取這次旅行。',
  'help.guide.add-member.step.1': '點選右上角的「分享」。',
  'help.guide.add-member.step.2': '在「邀請使用者」下，從清單中選取此人並點選「邀請」。',
  'help.guide.add-member.step.3': '此人現在出現在「訪問許可權」下。皇冠標記所有者；列末的圖示可再次移除訪問許可權。',
  'help.guide.add-member.result': '成員像你一樣檢視和編輯旅行，範圍在管理員於「許可權設定」下設定的層級之內。',
  'help.guide.add-member.tip.1': '清單裡沒有的人還沒有 TREK 帳號：把他們新增為訪客，或者讓他們透過邀請連結註冊。',
  'help.guide.add-member.tip.2': '「訪問許可權」旁邊的數字統計旅行裡的人數；訪客在下方另外列出。',
  // trip-invite-link
  'help.guide.trip-invite-link.title': '透過連結邀請',
  'help.guide.trip-invite-link.goal': '讓別人自己加入旅行。',
  'help.guide.trip-invite-link.step.1': '點選「分享」，然後在「行程邀請連結」下點選「建立邀請連結」。',
  'help.guide.trip-invite-link.step.2': '點選「複製」並傳送連結。任何有 TREK 帳號的人開啟它就會以成員身分加入。',
  'help.guide.trip-invite-link.step.3': '「重新產生」會取代連結並讓舊連結失效；「停用」會關閉它。',
  'help.guide.trip-invite-link.result': '開啟連結的人就在旅行裡了，並顯示在「訪問許可權」下。',
  'help.guide.trip-invite-link.tip.1':
    '沒有帳號的人用不了它。管理員在「管理後臺」、「使用者」下發放註冊連結，並可以把其中一個綁定到這次旅行。',
  'help.guide.trip-invite-link.tip.2': '連結傳錯了聊天時就重新產生：舊連結立刻失效。',
  // add-guest
  'help.guide.add-guest.title': '新增沒有帳號的訪客',
  'help.guide.add-guest.goal': '把一個不用 TREK 的人算進來。',
  'help.guide.add-guest.step.1': '點選「分享」並捲動到「訪客」。',
  'help.guide.add-guest.step.2': '在「訪客姓名」中輸入名字，然後點選「新增訪客」。',
  'help.guide.add-guest.result': '訪客可以被指派到費用、行李物品和任務，但無法登入。',
  'help.guide.add-guest.tip.1': '鉛筆可以幫訪客改名；列末的圖示會把他們連同其分攤和指派一起移除。',
  'help.guide.add-guest.tip.2': '如果這個人後來有了帳號，就把他們邀請為成員，並移除訪客。',
  // public-link
  'help.guide.public-link.title': '發布唯讀連結',
  'help.guide.public-link.goal': '把旅行展示給不應編輯它的人。',
  'help.guide.public-link.step.1':
    '點選「分享」；在右側的「公開連結」下，勾選連結可以顯示的內容。「地圖與計劃」始終開啟；「預訂」「行李」「費用」和「聊天」由你決定。',
  'help.guide.public-link.step.2': '點選「建立連結」，然後點選「複製」。',
  'help.guide.public-link.step.3': '連結存在期間可以隨時變更勾選；「刪除連結」會讓它停止。',
  'help.guide.public-link.result': '任何有連結的人無需登入就能看到所選部分，並且什麼都改不了。',
  'help.guide.public-link.tip.1': '這個連結不會列在任何地方；誰拿到它都能開啟，所以要像對待密碼一樣對待它。',
  'help.guide.public-link.tip.2': '要給編輯權限，就改為把此人新增為成員。',
  // transfer-ownership
  'help.guide.transfer-ownership.title': '移交旅行或退出旅行',
  'help.guide.transfer-ownership.goal': '讓別人成為所有者，或者退出一次不屬於你的旅行。',
  'help.guide.transfer-ownership.step.1':
    '點選「分享」。在「訪問許可權」下，成員列上的皇冠會讓此人成為所有者；確認提問。',
  'help.guide.transfer-ownership.step.2': '你自己那一列上的「退出旅行」會把你帶出旅行；作為所有者，請先移交。',
  'help.guide.transfer-ownership.result': '新所有者管理成員並可以刪除旅行；你仍是一般成員。',
  'help.guide.transfer-ownership.tip.1': '在移交之前，所有者就是建立旅行的人；刪除旅行只有所有者能做。',
  'help.guide.transfer-ownership.tip.2': '另一列上的「移除訪問許可權」是同一個按鈕的反向操作：所有者把成員請出去。',
  // collapse-columns
  'help.guide.collapse-columns.title': '給地圖騰出空間',
  'help.guide.collapse-columns.goal': '收起一欄，或者給它更多寬度。',
  'help.guide.collapse-columns.step.1':
    '點選天數欄內側邊緣的折疊箭頭把它收起來；地圖佔據這塊空間。地點欄有同樣的箭頭。',
  'help.guide.collapse-columns.step.2': '再次點選折疊箭頭，把這一欄找回來。',
  'help.guide.collapse-columns.step.3': '拖曳欄與地圖之間的細分隔線來改變欄的寬度。',
  'help.guide.collapse-columns.result': '寬度會被記住；下次造訪時各欄會恢復展開。',
  'help.guide.collapse-columns.tip.1': '兩欄可以同時收起，得到只有地圖的檢視。',
  'help.guide.collapse-columns.tip.2': '手機上沒有欄：「計劃」和「地點」是地圖底部的兩個按鈕。',
  // undo-change
  'help.guide.undo-change.title': '撤銷上一次變更',
  'help.guide.undo-change.goal': '收回你剛剛對計劃做的事。',
  'help.guide.undo-change.step.1': '點選天數上方工具列裡的撤銷箭頭；它的提示會寫出將要收回的變更。',
  'help.guide.undo-change.result': '計劃恢復原樣，箭頭變灰，直到下一次變更。',
  'help.guide.undo-change.tip.1':
    '撤銷涵蓋計劃：指派、移除、重新排序和移動地點，最佳化路線，刪除地點，類別變更和匯入。',
  'help.guide.undo-change.tip.2': '它只有一步深：只能收回最新的一次變更，新的變更會取代它。',
};

export default help;
