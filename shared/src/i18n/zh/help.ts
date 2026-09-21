import type { TranslationStrings } from '../types';

const help: TranslationStrings = {
  'help.title': '帮助与文档',
  'help.search': '搜索文档…',
  'help.contents': '目录',
  'help.noResults': '没有匹配的页面。',
  'help.errorTitle': '无法加载此页面',
  'help.errorBody': '帮助内容来自 TREK wiki，请检查连接后重试。',

  // center
  'help.center.button': '此页面的帮助',
  'help.center.title': '帮助',
  'help.center.onThisScreen': '关于此页面',
  'help.center.screens': '页面',
  'help.center.thisScreen': '当前页面',
  'help.center.subScreens': '子页面：{count}',
  'help.center.subScreensLabel': '子页面',
  'help.center.guidesCount': '{count} 篇指南',
  'help.center.goToScreen': '前往{screen}',
  'help.center.overview': '概览',
  'help.center.howTo': '如何操作',
  'help.center.searchPlaceholder': '搜索指南和文档…',
  'help.center.searchEmpty': '未找到与“{query}”相关的内容。',
  'help.center.searchGuides': '指南',
  'help.center.searchDocs': '文档',
  'help.center.searchError': '搜索暂时不可用。',
  'help.center.back': '返回',
  'help.center.close': '关闭帮助',
  'help.center.steps': '{count} 个步骤',
  'help.center.step': '第 {n} 步',
  'help.center.stepsLabel': '步骤',
  'help.center.stepOf': '第 {n} 步，共 {total} 步',
  'help.center.screenshot': '截图',
  'help.center.result': '结果',
  'help.center.tips': '小贴士',
  'help.center.related': '相关内容',
  'help.center.openDocs': '在“帮助与文档”中打开',
  'help.center.docsSection': '文档',
  'help.center.noContext': '此页面暂无指南。',
  'help.center.noContextHint': '搜索文档，或告诉我们您在找什么。',
  'help.center.feedback': '缺了什么？',
  'help.center.feedbackLink': '在 GitHub 上告诉我们',
  'help.center.discord': '在 Discord 提问',
  'help.center.quick': '快速',
  'help.center.guide': '指南',
  'help.center.tour': '操作演示',
  'help.center.imageAlt': '“{title}”第 {n} 步',

  // ctx
  'help.ctx.dashboard.title': '仪表盘',
  'help.ctx.dashboard.summary':
    '仪表盘是所有旅行的入口。顶部的登机牌突出显示正在进行或即将开始的旅行，下方一行统计你已走过的旅程，卡片则列出你正在计划、已归档或已完成的全部旅行。',
  'help.ctx.dashboard.bullet.1': '登机牌：正在进行或下一趟旅行，含日期、同行者、地点和倒计时。点击即可打开旅行。',
  'help.ctx.dashboard.bullet.2': '旅行统计：去过的国家、旅行次数、在途天数和飞行距离，汇总你的全部旅行。',
  'help.ctx.dashboard.bullet.3':
    '旅行卡片：按“已计划”“已归档”“已完成”筛选，以网格或列表显示。将鼠标悬停在卡片上可编辑、复制、归档和删除。',
  'help.ctx.dashboard.bullet.4': '右侧组件：货币换算、世界时钟、即将到来的预订和收藏集。每一个都可以关闭。',
  'help.ctx.dashboard.bullet.5': '“新建旅行”卡片和右下角的按钮都可以新建旅行。',

  // create-trip
  'help.guide.create-trip.title': '新建旅行',
  'help.guide.create-trip.goal': '用名称、日期和封面图片开始一趟新旅行。',
  'help.guide.create-trip.step.1': '点击“新建旅行”。旅行列表末尾的卡片和右下角的按钮作用相同。',
  'help.guide.create-trip.step.2': '给旅行起个名字。这是唯一的必填项，其余内容都可以稍后添加。',
  'help.guide.create-trip.step.3': '选择开始和结束日期。TREK 会为每个日期创建一天，行程随即可以开始填写。',
  'help.guide.create-trip.step.4': '可选：添加封面图片。上传自己的照片、拖入一张，或在 Unsplash 搜索目的地。',
  'help.guide.create-trip.step.5': '点击“创建新旅行”。',
  'help.guide.create-trip.result': '旅行会出现在仪表盘上。如果它是你的下一趟旅行，会显示在顶部的登机牌中。',
  'help.guide.create-trip.tip.1': '日期以后可以修改。如果已有预订，TREK 会询问是否连同日程一起移动。',
  'help.guide.create-trip.tip.2': '此处选择的旅行货币是所有费用的换算目标。请选择目的地的货币。',

  // edit-trip
  'help.guide.edit-trip.title': '编辑旅行',
  'help.guide.edit-trip.goal': '重命名旅行、更改日期或调整设置。',
  'help.guide.edit-trip.step.1': '将鼠标悬停在旅行卡片（或登机牌）上，点击铅笔图标。',
  'help.guide.edit-trip.step.2': '按需修改：名称、描述、日期、封面、货币、提醒或成员。',
  'help.guide.edit-trip.step.3': '点击“更新”。',
  'help.guide.edit-trip.result': '卡片会立即更新，旅行的每位成员都能看到。',
  'help.guide.edit-trip.tip.1': '移动已有预订的旅行日期时，会出现第二步，询问预订是否一并移动。',

  // cover-image
  'help.guide.cover-image.title': '设置封面图片',
  'help.guide.cover-image.goal': '为旅行设置一张在卡片和登机牌上显示的图片。',
  'help.guide.cover-image.step.1': '通过卡片上的铅笔图标打开旅行的编辑表单。',
  'help.guide.cover-image.step.2': '在“封面图片”处拖入照片、点击上传，或在 Unsplash 搜索框输入目的地。',
  'help.guide.cover-image.step.3': '选择一张照片，点击“更新”。',
  'help.guide.cover-image.result': '照片随旅行一起保存，并在所有列出该旅行的地方显示。',
  'help.guide.cover-image.tip.1': '来自 Unsplash 搜索的照片会自动标注来源；你自己上传的照片保存在你的服务器上。',

  // duplicate-trip
  'help.guide.duplicate-trip.title': '复制旅行',
  'help.guide.duplicate-trip.goal': '把一趟旅行当作模板，复用到新旅行。',
  'help.guide.duplicate-trip.step.1': '将鼠标悬停在卡片上，点击复制图标。',
  'help.guide.duplicate-trip.step.2': '查看哪些内容会被复制、哪些不会，然后确认。',
  'help.guide.duplicate-trip.result': '副本会出现在原旅行旁边，改个名字和日期即可使用。',
  'help.guide.duplicate-trip.tip.1':
    '日程、地点、预订、预算项、打包清单和每日备注会被复制。成员、聊天、投票、文件和分享链接不会。',

  // archive-trip
  'help.guide.archive-trip.title': '归档与恢复旅行',
  'help.guide.archive-trip.goal': '不删除旅行，只是先收起来，以后再恢复。',
  'help.guide.archive-trip.step.1': '将鼠标悬停在卡片上，点击“归档”。',
  'help.guide.archive-trip.step.2': '把卡片上方的筛选切换为“已归档”即可再次看到它。',
  'help.guide.archive-trip.step.3': '点击卡片上的“恢复”，它就回到“已计划”。',
  'help.guide.archive-trip.result': '归档的旅行保留全部内容，只是不再占据仪表盘和全部旅行的日历订阅。',

  // delete-trip
  'help.guide.delete-trip.title': '删除旅行',
  'help.guide.delete-trip.goal': '彻底删除一趟旅行。',
  'help.guide.delete-trip.step.1': '将鼠标悬停在卡片上，点击垃圾桶图标。',
  'help.guide.delete-trip.step.2': '确认。对话框会显示旅行名称，方便你核对。',
  'help.guide.delete-trip.result': '旅行及其日程、地点、预订和文件都会被删除，且无法撤销。拿不准的话请改为归档。',

  // filter-and-view
  'help.guide.filter-and-view.title': '查找已完成的旅行，切换网格与列表',
  'help.guide.filter-and-view.goal': '查看已完成或已归档的旅行，并选择喜欢的布局。',
  'help.guide.filter-and-view.step.1': '使用卡片上方的“已计划”“已归档”“已完成”。结束日期已过的旅行都属于“已完成”。',
  'help.guide.filter-and-view.step.2': '点击列表图标切换为紧凑列表，再点一次回到网格。',
  'help.guide.filter-and-view.result': '仪表盘会记住你在此设备上的布局。',

  // calendar-feed
  'help.guide.calendar-feed.title': '在日历中订阅全部旅行',
  'help.guide.calendar-feed.goal': '在你的日历应用中查看每趟进行中旅行的日程和预订，并保持同步。',
  'help.guide.calendar-feed.step.1': '点击视图切换旁边的日历图标。',
  'help.guide.calendar-feed.step.2': '点击“Enable calendar subscription”。TREK 会生成一个私密的订阅链接。',
  'help.guide.calendar-feed.step.3':
    '用按钮（Google、Apple、Outlook）添加订阅，或把链接复制到任何支持 URL 订阅的日历应用。',
  'help.guide.calendar-feed.result':
    '每趟进行中的旅行都会显示在你的日历里并自动更新。已归档的旅行和结束超过 90 天的旅行不包含在内。',
  'help.guide.calendar-feed.tip.1': '链接是私密的，任何拿到链接的人都能读取订阅；一旦泄露，请在同一对话框中撤销。',

  // widgets
  'help.guide.widgets.title': '选择仪表盘组件',
  'help.guide.widgets.goal': '显示或隐藏统计行和右侧组件。',
  'help.guide.widgets.step.1': '打开右上角的头像菜单，选择“设置”。',
  'help.guide.widgets.step.2': '切换到“外观”标签页。',
  'help.guide.widgets.step.3': '在“仪表盘组件”下开启或关闭各个组件。桌面端和移动端分别设置。',
  'help.guide.widgets.step.4': '回到仪表盘，更改立即生效。',
  'help.guide.widgets.result': '隐藏的组件会把空间让给旅行；关闭整个右栏后，布局会居中显示。',
  'help.guide.widgets.link': '打开外观设置',

  // currency-widget
  'help.guide.currency-widget.title': '货币换算',
  'help.guide.currency-widget.goal': '按当前汇率在两种货币之间换算金额。',
  'help.guide.currency-widget.step.1': '输入金额并选择两种货币。',
  'help.guide.currency-widget.step.2': '中间的箭头交换货币对，圆形箭头刷新汇率。',
  'help.guide.currency-widget.result': '货币对会保存在你的账户中，在每台设备上都一致。',
  'help.guide.currency-widget.tip.1': '汇率来自欧洲中央银行，每天更新一次。',

  // timezones-widget
  'help.guide.timezones-widget.title': '添加世界时钟',
  'help.guide.timezones-widget.goal': '随时掌握目的地的当地时间。',
  'help.guide.timezones-widget.step.1': '点击“时区”组件中的 +，搜索一个城市。',
  'help.guide.timezones-widget.step.2': '点击时钟旁边的 × 即可移除。',
  'help.guide.timezones-widget.result': '时钟会随你的账户一起保存。',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay 是你的个人休假计划器：一年有多少假期、已记录了哪些、还剩多少。网格一览整年；侧栏包含年份选择、共同规划的人、与你共享的日历、图例和你的假期额度。',
  'help.ctx.vacay.bullet.1': '年度网格：十二张月卡片，每天一格。点击某天即可记录或清除。小蓝点标记已有旅行覆盖的日子。',
  'help.ctx.vacay.bullet.2': '底部工具栏：“休假”或“公司假日”模式，以及改变点击记录内容的“半天”和“调休”开关。',
  'help.ctx.vacay.bullet.3': '“年假额度”：本年天数、已用和剩余，含上一周期结转。',
  'help.ctx.vacay.bullet.4': '“成员”是与你的计划合并的人，各有自己的颜色。“共享日历”以只读圆环显示他人的休假日。',
  'help.ctx.vacay.bullet.5': '“设置”涵盖周末、每周起始日、结转、你的休假年度、公司假日以及公共假日或学校假期日历。',
  // log-day
  'help.guide.log-day.title': '记录一个休假日',
  'help.guide.log-day.goal': '在年度网格中标记一天休假，并看到余额随之变化。',
  'help.guide.log-day.step.1': '看底部工具栏：带你颜色的左侧按钮表示点击会为你记录一个休假日。',
  'help.guide.log-day.step.2': '在任意月卡片中点击某天。它会填上你的颜色，“已用”增加一天。',
  'help.guide.log-day.step.3': '再次点击同一天即可清除。',
  'help.guide.log-day.result': '该日已记录，“天”“已用”“剩余”立即更新，与你合并计划的人都能实时看到。',
  'help.guide.log-day.tip.1': '“设置”中“锁定周末”开启时，周末无法记录。',
  'help.guide.log-day.tip.2': '格子中的蓝点表示你的某次旅行覆盖了那天，这样能看到休假与旅行的重合之处。',
  // half-day
  'help.guide.half-day.title': '记录半天',
  'help.guide.half-day.goal': '只休一个下午，而不花掉一整天额度。',
  'help.guide.half-day.step.1': '在工具栏打开“半天”。橙色圆点就是半天在网格中的标记。',
  'help.guide.half-day.step.2': '点击某天。它记录为 0.5，角落带有橙色圆点。',
  'help.guide.half-day.step.3': '完成后关闭“半天”；用不同设置点击半天会就地转换。',
  'help.guide.half-day.result': '“已用”增加 0.5。“半天”和“调休”相互独立，因此也可以记录半天调休。',
  'help.guide.half-day.tip.1': '工具栏始终显示下一次点击将放置的标记，记录前可先确认。',
  // comp-day
  'help.guide.comp-day.title': '记录调休或弹性时间',
  'help.guide.comp-day.goal': '使用不消耗假期额度的补休。',
  'help.guide.comp-day.step.1': '在工具栏打开“调休”。斜线圆盘就是调休日在网格中的样子。',
  'help.guide.comp-day.step.2': '点击某天。它以你颜色的斜线填充，而不是实色块。',
  'help.guide.comp-day.result': '调休日在额度磁贴旁单独统计，永不减少“剩余”。',
  'help.guide.comp-day.tip.1': '补回的加班、弹性工时、补休日：凡是休息但不算休假的都属于这里。',
  // entitlement
  'help.guide.entitlement.title': '设置假期额度',
  'help.guide.entitlement.goal': '告诉 Vacay 你一年有多少休假天数。',
  'help.guide.entitlement.step.1': '在侧栏“年假额度”下点击“天”磁贴。',
  'help.guide.entitlement.step.2': '输入天数并按回车。',
  'help.guide.entitlement.result': '“剩余”由额度、结转（如有）和已用天数重新计算。',
  'help.guide.entitlement.tip.1': '每年各有额度，此处更改只影响所选年份。',
  // years
  'help.guide.years.title': '添加和切换年份',
  'help.guide.years.goal': '提前规划明年，或回顾去年。',
  'help.guide.years.step.1': '点击年份右侧的 + 添加下一年，或左侧的 + 添加上一年。',
  'help.guide.years.step.2': '用箭头或下方的年份标签切换年份。',
  'help.guide.years.step.3': '要删除年份，将鼠标悬停在其标签上并点击小减号。该年的记录会一并删除，请谨慎确认。',
  'help.guide.years.result': '每年保留各自的额度和记录；结转把它们连接起来。',
  // company-holidays
  'help.guide.company-holidays.title': '标记公司假日',
  'help.guide.company-holidays.goal': '屏蔽全公司休息的日子，不消耗任何人的额度。',
  'help.guide.company-holidays.step.1': '打开“设置”，确认“公司假日”已开启。默认开启；只有开启时工具栏才提供该模式。',
  'help.guide.company-holidays.step.2': '回到网格，把工具栏切换到“公司假日”模式。',
  'help.guide.company-holidays.step.3': '点击相应日期。它们变为琥珀色并出现在图例中。',
  'help.guide.company-holidays.result': '公司假日对所有合并计划的人可见，且永不减少“剩余”。',
  'help.guide.company-holidays.tip.1': '任何已合并的成员都能编辑公司假日，请约定由谁维护。',
  // public-holidays
  'help.guide.public-holidays.title': '显示公共假日',
  'help.guide.public-holidays.goal': '把你所在国家或地区的公共假日放到网格上。',
  'help.guide.public-holidays.step.1': '打开“设置”并开启“公共假日”。',
  'help.guide.public-holidays.step.2': '点击“添加日历”，选择国家，必要时再选地区。可选设置颜色和标签。',
  'help.guide.public-holidays.step.3': '关闭“设置”。假日出现在网格和图例中。',
  'help.guide.public-holidays.result': '公共假日以日历颜色标记，永不计入你的额度。',
  'help.guide.public-holidays.tip.1': '可以添加多个日历，例如你自己的地区和已合并同事的地区。',
  // school-holidays
  'help.guide.school-holidays.title': '显示学校假期',
  'help.guide.school-holidays.goal': '把所在地区的学校假期与自己的休假并排查看。',
  'help.guide.school-holidays.step.1': '打开“设置”并开启“School Holidays”。',
  'help.guide.school-holidays.step.2': '点击“添加日历”并选择国家。若该国按地区划分，请再选地区或分组。',
  'help.guide.school-holidays.step.3': '关闭“设置”。每段假期在其日期底部显示彩色条带。',
  'help.guide.school-holidays.result': '学校假期仅作显示，不会减少任何人的额度。',
  'help.guide.school-holidays.tip.1': '缺少地区？管理员可在“管理”、“个性化”、“学校假期”中手动维护。',
  // weekends
  'help.guide.weekends.title': '锁定周末并设置每周起始日',
  'help.guide.weekends.goal': '把周末排除在统计之外，并从你习惯的那天开始一周。',
  'help.guide.weekends.step.1': '打开“设置”。',
  'help.guide.weekends.step.2': '开启“锁定周末”，并选择哪些天算作你的周末。',
  'help.guide.weekends.step.3': '在“每周开始于”选择周一或周日。',
  'help.guide.weekends.result': '被屏蔽的日子在网格中显示为灰色，无法误记。',
  // leave-year
  'help.guide.leave-year.title': '设置休假年度',
  'help.guide.leave-year.goal': '按财年或入职日期计算额度，而不是一月到十二月。',
  'help.guide.leave-year.step.1': '打开“设置”并找到“休假年度”。',
  'help.guide.leave-year.step.2': '选择“日历年”、“财年”（指定起始月日）或“入职日”（指定入职日期）。',
  'help.guide.leave-year.result': '额度、已用天数和结转都按该周期计算，网格从其第一个月开始。',
  'help.guide.leave-year.tip.1': '此设置是个人的：在合并计划中，每个人保留自己的休假年度和数字。',
  // carry-over
  'help.guide.carry-over.title': '结转未用天数',
  'help.guide.carry-over.goal': '把周期末剩余的天数加到下一周期。',
  'help.guide.carry-over.step.1': '打开“设置”。',
  'help.guide.carry-over.step.2': '开启“结转”。',
  'help.guide.carry-over.result': '结转数量会在所有年份重新计算，并显示在额度下方。',
  'help.guide.carry-over.tip.1': '关闭后所有结转余额归零。',
  // invite
  'help.guide.invite.title': '与他人共同规划',
  'help.guide.invite.goal': '与另一位 TREK 用户合并计划，在同一网格中看到彼此的休假。',
  'help.guide.invite.step.1': '点击“成员”面板中的人形图标。',
  'help.guide.invite.step.2': '选择用户并发送邀请。',
  'help.guide.invite.step.3': '对方收到通知并接受。在此之前邀请显示为待处理。',
  'help.guide.invite.result': '两个计划合并：每人一种颜色，可以互相记录休假，一切实时同步。',
  'help.guide.invite.tip.1': '要撤销合并，请使用“设置”中的“解除合并”。每个人的记录会回到自己的计划。',
  'help.guide.invite.tip.2': '如果对方只需查看你的休假，请共享日历而不是合并。',
  // share-calendar
  'help.guide.share-calendar.title': '以只读方式共享日历',
  'help.guide.share-calendar.goal': '让别人看到你何时休假，而不给他们修改你计划的权限。',
  'help.guide.share-calendar.step.1': '点击“共享日历”面板中的共享图标。',
  'help.guide.share-calendar.step.2': '选择用户并点击“共享”。无需对方接受。',
  'help.guide.share-calendar.step.3': '与你共享的日历出现在同一面板；眼睛图标可隐藏，“停止共享”撤销你的共享。',
  'help.guide.share-calendar.result': '你的休假以彩色圆环显示在对方网格中。你共享的内容对方无法编辑。',
  'help.guide.share-calendar.tip.1': '共享与合并相互独立：可以与一人合并，同时与其他人共享。',
  'help.guide.share-calendar.tip.2': '悬停在带圆环的日子上，即可查看谁休假以及休多久。',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas 是你在世界地图上的旅行足迹：每个旅行带你去过的国家都会被上色，在用 TREK 之前去过的国家可以手动添加。放大可以看到地区，把还想去的地方记在心愿单里，并在底部的玻璃面板中查看你的数字。',
  'help.ctx.atlas.bullet.1':
    '地图：已访问的国家带有专属且不变的颜色，计划中的国家是虚线轮廓，心愿单里的国家是斜线填充，其余都是灰色。将鼠标悬停在国家上可查看它的旅行、地点以及首次和最近一次到访。',
  'help.ctx.atlas.bullet.2':
    '顶部搜索：输入国家或地点。选一个国家，地图会飞过去并打开它的弹窗；选一个地点，会落在它所在的地区，方便你标记那里。',
  'help.ctx.atlas.bullet.3':
    '右上角的“显示计划中的国家”：显示你即将出发的旅行所涉及的国家。这个开关只在你有这类旅行时才出现。',
  'help.ctx.atlas.bullet.4':
    '底部面板：“统计”标签页有国家、旅行、地点、城市、天数、大洲和你的连续记录；“心愿单”标签页列出还在前方等你的地方。',
  'help.ctx.atlas.bullet.5': '地区：从缩放级别 5 起，地图切换为州和省，每一个都可点击来标记或取消标记。',
  'help.ctx.atlas.bullet.6':
    'Dawarich：连接该扩展后，统计左侧会出现一个面板，根据你的记录勾掉心愿并添加国家，但绝不会不经你确认就执行。',
  // mark-country
  'help.guide.mark-country.title': '将国家标记为已访问',
  'help.guide.mark-country.goal': '添加一个你在用 TREK 之前去过的国家，让地图和计数把它算进去。',
  'help.guide.mark-country.step.1': '在地图顶部的搜索框中输入国家名。',
  'help.guide.mark-country.step.2': '从列表中选择它。地图飞过去，并为该国打开一个弹窗。',
  'help.guide.mark-country.step.3': '选择“标记为已访问”。',
  'help.guide.mark-country.result':
    '该国在地图上获得自己的颜色，“国家”计数加一。这个颜色是永久的：再标记其他国家也不会打乱其余国家的颜色。',
  'help.guide.mark-country.tip.1': '在地图上点击灰色国家会打开同一个弹窗；对小国来说，搜索是最可靠的入口。',
  'help.guide.mark-country.tip.2': '手动标记的国家始终算作已访问，不管去那里的旅行日期如何。',
  // unmark-country
  'help.guide.unmark-country.title': '移除你标记过的国家',
  'help.guide.unmark-country.goal': '把手动标记的国家再从地图上拿掉。',
  'help.guide.unmark-country.step.1': '搜索该国并选择它，或在地图上点击它。对于你自己标记的国家，弹窗会问是否移除。',
  'help.guide.unmark-country.step.2': '点击“移除”确认。',
  'help.guide.unmark-country.result': '该国变回灰色，并从你的计数中消失。',
  'help.guide.unmark-country.tip.1':
    '只有手动标记的国家才能这样移除。有旅行或地点的国家会一直保留，直到这些旅行或地点不在为止；如果国家是手动标记的，面板里它的详情卡片上也有“移除”。',
  // country-details
  'help.guide.country-details.title': '查看你在某个国家做过什么',
  'help.guide.country-details.goal': '打开一个已访问的国家，跳转到带你去那里的旅行。',
  'help.guide.country-details.step.1': '搜索一个你访问过的国家。',
  'help.guide.country-details.step.2':
    '选择它。地图飞过去，底部面板会多出一张卡片，带有国旗、地点、旅行以及每次旅行一个标签。',
  'help.guide.country-details.result': '点击旅行标签即可在规划器中打开那次旅行。',
  'help.guide.country-details.tip.1': '在地图上悬停该国会显示同样的数字，外加首次和最近一次到访。',
  // planned-countries
  'help.guide.planned-countries.title': '显示你即将前往的国家',
  'help.guide.planned-countries.goal': '把即将出发的旅行所涉及的国家放到地图上，但不把它们算作已访问。',
  'help.guide.planned-countries.step.1': '打开右上角的“显示计划中的国家”。旁边的数字是有多少个国家在等你。',
  'help.guide.planned-countries.step.2': '搜索一个计划中的国家并选择它：面板会显示“计划中”，地图提示会显示你何时出发。',
  'help.guide.planned-countries.result':
    '计划中的国家以虚线轮廓显示，所以永远不会看起来像你已经去过的地方。开关会记住你的选择。',
  'help.guide.planned-countries.tip.1':
    '去某国的旅行一旦开始，该国就算作已访问；进行中的旅行也算。没有日期的旅行完全不进入统计。',
  'help.guide.planned-countries.tip.2': '这个开关只在你有即将出发的旅行时才存在。',
  // regions
  'help.guide.regions.title': '标记地区',
  'help.guide.regions.goal': '比国家更细：标记你去过的州、省或县。',
  'help.guide.regions.step.1': '放大一个国家，直到它的地区出现，从缩放级别 5 起。搜索并选择该国就能飞到足够近的位置。',
  'help.guide.regions.step.2': '点击一个地区。悬停会显示它的名称；弹窗显示该地区及其所属国家。',
  'help.guide.regions.step.3': '选择“标记为已访问”。',
  'help.guide.regions.result': '该地区填上其国家的颜色。标记地区时，如果该国尚未算作已访问，也会一并算上。',
  'help.guide.regions.tip.1': '点击已访问的地区会提供“移除”，无论是你标记的，还是某个地点让它变成已访问的。',
  'help.guide.regions.tip.2': '你有真实地点的地区会自动标记；那里无需操作。',
  // search-place
  'help.guide.search-place.title': '查找地点并标记它所在的地区',
  'help.guide.search-place.goal': '通过搜索米兰来标记伦巴第，无需知道某座城市属于哪个地区。',
  'help.guide.search-place.step.1':
    '在搜索框中输入城市、地标或地址。国家排在最前；匹配的地点显示在它们下方的“地点”标题下。',
  'help.guide.search-place.step.2': '选择该地点。地图飞过去，并判断这个点位于哪个地区。',
  'help.guide.search-place.step.3': '为该地区选择“标记为已访问”，或者如果它还在你的前方，选择“添加到心愿单”。',
  'help.guide.search-place.result':
    '该地区被标记，它所属的国家也一并标记。地图数据包中没有地区数据的国家会退回到国家本身。',
  'help.guide.search-place.tip.1': '地点来自与 TREK 其他地方相同的搜索，因此遵循管理员设置的提供商。',
  // bucket-country
  'help.guide.bucket-country.title': '把国家放进心愿单',
  'help.guide.bucket-country.goal': '直接在地图上维护一份想去国家的心愿单，与你去过的国家分开。',
  'help.guide.bucket-country.step.1': '搜索该国并选择它，或在地图上点击它。',
  'help.guide.bucket-country.step.2': '选择“添加到心愿单”。',
  'help.guide.bucket-country.step.3': '如果已经知道时间，就选一个月份和年份，然后点击“添加到心愿单”确认。',
  'help.guide.bucket-country.result':
    '该国以斜线填充绘制，颜色就是你到达后它将拥有的颜色，并出现在面板的“心愿单”标签页中。',
  'help.guide.bucket-country.tip.1': '国家进入心愿单后，同一个弹窗会提供“从心愿单移除”。',
  'help.guide.bucket-country.tip.2':
    '每个目标日期一条：同一个国家可以以两个不同的月份出现在心愿单中，但同一个月不能出现两次。',
  // bucket-place
  'help.guide.bucket-place.title': '把地点添加到心愿单',
  'help.guide.bucket-place.goal': '保存你梦想中的城市、景点或地址，带有坐标和目标日期。',
  'help.guide.bucket-place.step.1': '在底部面板中打开“心愿单”标签页。',
  'help.guide.bucket-place.step.2': '点击“添加地点”。',
  'help.guide.bucket-place.step.3': '输入名称并按搜索按钮；选择匹配项，让该地点带上坐标。只输入名称、跳过搜索也可以。',
  'help.guide.bucket-place.step.4': '如果愿意，选一个月份和年份，然后点击“添加”。',
  'help.guide.bucket-place.result': '该地点带着目标日期出现在心愿单顶部；旁边的 × 可以把它再移除。',
  'help.guide.bucket-place.tip.1': '带坐标的心愿，就是日后当你的记录显示你到过那里时，Dawarich 可以替你勾掉的那种。',
  // stats
  'help.guide.stats.title': '读懂你的统计',
  'help.guide.stats.goal': '了解面板中的数字统计什么，不统计什么。',
  'help.guide.stats.step.1':
    '“国家”是你真正去过的不同国家的数量；计划中的国家显示在旁边，不计入其中。“旅行”“地点”和“天”是所有旅行的总计。“城市”由地点的地址推算而来，所以是估算值。',
  'help.guide.stats.step.2':
    '各大洲显示每个大洲已访问的国家数；去过南极洲后，它会加入这一行。然后是你的连续记录，即至少有一次旅行的连续年数，以及你今年的旅行次数。',
  'help.guide.stats.result': '数字会随着你规划旅行而自动更新；这里没有任何需要维护的地方。',
  'help.guide.stats.tip.1':
    '城市是从地址文本中读出来的，不做查询，所以像“Osteria Francescana, Italy”这样的短地址，或以县级行政区结尾的地址，可能得到一个地区而不是城市。',
  'help.guide.stats.tip.2': '手动标记的国家会计入“国家”和各大洲，但不会带来旅行、地点或天数。',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': '收藏',
  'help.ctx.collections.summary':
    'Collections 是你在任何行程之外的地点库：把你找到并想留住的地点整理成带名字的列表，每个地点都有“想法”“想去”或“已去过”之一的状态。地点只会被复制进出行程，从不关联，所以列表和行程永远不会互相改变。',
  'help.ctx.collections.bullet.1':
    '左侧的列表栏：你自己的列表、共享给你的列表、等待你接受的邀请、把你拥有的一切合在一起的“全部已保存”，以及顶部的“新建列表”和文件导入。',
  'help.ctx.collections.bullet.2':
    '打开列表的标题区：它的颜色、封面、描述和链接，成员，以及右侧的“编辑”“导出”“共享”操作。',
  'help.ctx.collections.bullet.3':
    '地点上方的筛选行：状态、类别、评分和排序，标签筛选，用于添加地点的 +，行程导入，以及用于批量操作的“选择”。',
  'help.ctx.collections.bullet.4': '地点行：头像、名称和地址、标签和类别，以及右侧一键循环切换的状态胶囊。',
  'help.ctx.collections.bullet.5':
    '右侧的地图：每个有坐标的地点一枚图钉，列表与地图切换，搜索框和标签筛选。点击图钉会打开该地点。',
  'help.ctx.collections.bullet.6':
    '详情面板：点击一行可查看封面、类别、标签、状态、描述和链接，并有“编辑”“复制到行程”和“从列表中移除”。',
  // create-list
  'help.guide.create-list.title': '创建列表',
  'help.guide.create-list.goal': '新建一个带名字的列表，配上颜色和封面，准备装入地点。',
  'help.guide.create-list.step.1': '点击列表栏顶部的“新建列表”。',
  'help.guide.create-list.step.2': '给列表起名并选一个颜色。封面图、描述和链接是可选的，之后可以通过“编辑”添加。',
  'help.guide.create-list.step.3': '点击“创建”。',
  'help.guide.create-list.result': '列表以空状态打开，“添加地点”和“从行程导入”是填充它的两种方式。',
  'help.guide.create-list.tip.1': '封面可以是你自己上传的图片，也可以是在同一对话框里通过 Unsplash 搜索找到的照片。',
  // add-place
  'help.guide.add-place.title': '添加地点',
  'help.guide.add-place.goal': '找到一个地点，把名称、类别、状态和备注一次性保存到打开的列表。',
  'help.guide.add-place.step.1': '点击地点上方筛选行里的 +。',
  'help.guide.add-place.step.2': '在搜索框输入地点并选一个结果。名称、地址和坐标会据此填入。',
  'help.guide.add-place.step.3':
    '设置状态，如果需要再加上类别、描述和链接，然后点击“添加”。对话框会为下一个地点保持打开；“取消”会关闭它。',
  'help.guide.add-place.result': '地点出现在列表中；如果有坐标，也会作为图钉出现在地图上。',
  'help.guide.add-place.tip.1':
    '在行程内部，地点检查器或地点菜单里的“保存到收藏”可以把行程中的地点放进列表，无需离开行程。',
  'help.guide.add-place.tip.2':
    '列表必须是你自己的，或者你在其中是编辑者或管理员；“全部已保存”和你只能查看的列表上没有 +。',
  // import-from-trip
  'help.guide.import-from-trip.title': '从行程导入地点',
  'help.guide.import-from-trip.goal': '把整个行程的地点一次性搬到列表上，而不是逐个保存。',
  'help.guide.import-from-trip.step.1': '点击筛选行里带云朵箭头的导入按钮。在空列表上，同样的操作位于“添加地点”旁边。',
  'help.guide.import-from-trip.step.2': '选一个你的行程。',
  'help.guide.import-from-trip.step.3':
    '勾选你想要的地点。已经在列表里的地点会变灰；行程中没有任何一天包含的地点一开始就是选中的。“仅新增”会隐藏你已经拥有的。',
  'help.guide.import-from-trip.step.4': '点击“导入”。按钮上总会写明即将添加多少个。',
  'help.guide.import-from-trip.result': '地点连同名称、地址、坐标、描述和类别被复制到列表上。行程保持原样。',
  'help.guide.import-from-trip.tip.1': '名称或坐标相同的重复项会被自动跳过，所以导入两次也没有坏处。',
  'help.guide.import-from-trip.tip.2': '在行程的地点列表内部，选择模式则提供“保存到收藏”，用于你亲手挑选的一组地点。',
  // place-status
  'help.guide.place-status.title': '设置地点的状态',
  'help.guide.place-status.goal': '记录哪些是想法，哪些在候选名单上，以及你去过哪里。',
  'help.guide.place-status.step.1': '点击地点行右端的状态胶囊。“想法”变为“想去”。',
  'help.guide.place-status.step.2': '再点一次变为“已去过”，再点一次回到“想法”。',
  'help.guide.place-status.result': '胶囊及其颜色立即改变；列表上方状态筛选的计数也会跟着变。',
  'help.guide.place-status.tip.1': '状态是 Collections 自己的东西：把地点复制到行程不会把它带过去。',
  'help.guide.place-status.tip.2':
    '在行程中，“保存到收藏”会为该地点所在的每个列表显示一个状态胶囊，地点面板里则有针对所选地点的“标记为已去过”操作。',
  // place-detail
  'help.guide.place-detail.title': '打开已保存的地点',
  'help.guide.place-detail.goal': '查看一个地点的全部信息并进行操作：编辑、复制到行程、移除。',
  'help.guide.place-detail.step.1': '点击一个地点行。详情面板在列表旁边打开，地图平移到该地点。',
  'help.guide.place-detail.step.2':
    '底部是“编辑”“复制到行程”和“从列表中移除”；封面上的相机可以把自动获取的照片换成你自己的。',
  'help.guide.place-detail.result': '“编辑”会让名称、类别、标签、地址、坐标、描述和链接直接在面板里变为可编辑。',
  'help.guide.place-detail.tip.1':
    '当地点没有自己的图片时，封面会自动获取。你自己上传的图片可以是 JPG、PNG、GIF 或 WebP，最大 20 MB。',
  'help.guide.place-detail.tip.2': '共享列表的成员也可以在这里留下星级评分，筛选行里的评分筛选使用的是平均值。',
  // labels
  'help.guide.labels.title': '用标签给地点分组',
  'help.guide.labels.goal': '在共用的类别之外，给列表加上它自己的标签，比如街区或天数。',
  'help.guide.labels.step.1': '从筛选行里的标签控件打开标签管理器。',
  'help.guide.labels.step.2': '输入名称，选一个颜色，点击“添加标签”。在同一对话框里可以重命名、改色或删除已有标签。',
  'help.guide.labels.step.3':
    '开启“选择”，勾选地点，点击选择栏里的“分配标签”。单个地点也可以通过其详情面板上的“编辑”获得标签。',
  'help.guide.labels.step.4': '在筛选行里选一个或多个标签，把列表和地图收窄到带有其中任一标签的地点。',
  'help.guide.labels.result': '带标签的地点会在行上显示它们的标签；标签筛选对每个成员可用，包括查看者。',
  'help.guide.labels.tip.1': '标签只属于创建它的那一个列表。把地点移动到另一个列表会丢掉它们。',
  'help.guide.labels.tip.2': '管理和分配标签需要对列表的编辑权限。',
  // filter-select
  'help.guide.filter-select.title': '筛选和选择地点',
  'help.guide.filter-select.goal': '收窄列表，并一次对许多地点进行操作。',
  'help.guide.filter-select.step.1':
    '使用筛选行里的下拉菜单：状态、类别、最低评分和排序顺序。每一个都会显示它会留下多少地点。',
  'help.guide.filter-select.step.2': '点击“选择”。每一行都会出现一个复选框，并出现一个选择栏。',
  'help.guide.filter-select.step.3':
    '勾选地点，或用“全选”选中当前筛选出的全部，然后选择“分配标签”“移动到列表”“复制到列表”“复制到行程”或“删除”。',
  'help.guide.filter-select.result': '操作会一次应用到整个选择。右侧的 × 退出选择模式。',
  'help.guide.filter-select.tip.1': '“全选”跟随筛选，所以筛选到“想去”再全选，是处理候选名单的快捷方式。',
  // copy-to-trip
  'help.guide.copy-to-trip.title': '把地点复制到行程',
  'help.guide.copy-to-trip.goal': '把已保存的地点变成你某个行程里的站点。',
  'help.guide.copy-to-trip.step.1': '开启“选择”并勾选地点，或打开一个地点并使用其详情面板上的“复制到行程”。',
  'help.guide.copy-to-trip.step.2': '点击选择栏里的“复制到行程”。',
  'help.guide.copy-to-trip.step.3': '选择行程。搜索框可以收窄长列表。',
  'help.guide.copy-to-trip.result':
    '地点连同名称、描述、类别、备注、价格、坐标、照片和标签进入该行程的地点列表。收藏中没有任何改变。',
  'help.guide.copy-to-trip.tip.1': '共享列表的查看者也可以这样做；这是从列表中复制出去，不会改变列表。',
  // share-list
  'help.guide.share-list.title': '与他人共享列表',
  'help.guide.share-list.goal': '和这个 TREK 上的其他人一起实时规划一个列表。',
  'help.guide.share-list.step.1': '点击你列表标题区里的“共享”。',
  'help.guide.share-list.step.2': '选择用户和一个角色：“查看者”“编辑者”或“管理员”。',
  'help.guide.share-list.step.3': '点击“发送邀请”。在对方在自己的列表栏里接受邀请之前，此人显示为“待处理邀请”。',
  'help.guide.share-list.result':
    '接受后，列表会出现在对方的“已共享”下，每一次改动都实时同步。成员及其角色在同一对话框里随时可改。',
  'help.guide.share-list.tip.1':
    '查看者可以查看、评分并把地点复制到自己的行程。编辑者可以添加和编辑地点与标签。管理员还可以删除。',
  'help.guide.share-list.tip.2': '只有所有者能邀请和移除他人；成员可以自己退出共享列表。',
  // export-list
  'help.guide.export-list.title': '把列表导出为文件',
  'help.guide.export-list.goal': '把列表交给另一个 TREK 上的人，或带进地图应用。',
  'help.guide.export-list.step.1': '点击列表标题区里的“导出”。',
  'help.guide.export-list.step.2':
    '选“TREK 列表”用于另一个 TREK，含标签和状态；或选 GPX 用于 OsmAnd、Organic Maps、Garmin 设备以及其他能读取航点的应用。',
  'help.guide.export-list.result': '文件开始下载。共享列表的任何成员都可以导出它。',
  'help.guide.export-list.tip.1': '没有坐标的地点无法成为 GPX 航点；它会被略去，TREK 会告诉你略去了多少个。',
  'help.guide.export-list.tip.2': '评分、成员和上传的照片是有意不带走的；它们属于这个 TREK，不属于列表。',
  // import-file
  'help.guide.import-file.title': '从文件导入列表',
  'help.guide.import-file.goal': '导入一个 TREK 列表文件或 GPX 文件，作为新列表或放进你已有的列表。',
  'help.guide.import-file.step.1': '点击列表栏里“新建列表”旁边带上传箭头的导入按钮。',
  'help.guide.import-file.step.2': '选择文件。在任何事情发生之前，TREK 会先显示里面有什么：名称、多少个地点和标签。',
  'help.guide.import-file.step.3':
    '保留“新建列表”并按需改名，或选“添加到列表”把地点放进一个你能编辑的列表，然后点击“导入”。',
  'help.guide.import-file.result':
    '你会来到带有已导入地点的列表。添加到列表只会添加；已经在那里的地点保留它们的状态、备注和标签。',
  'help.guide.import-file.tip.1':
    '从 GPX 导入时，每个有名字的航点都会成为一个地点；轨迹是线条，会被略去，预览会说明那是多少个点。',
  'help.guide.import-file.tip.2':
    '既不是 TREK 列表也不是 GPX 的文件会被拒绝并给出原因；某一个无法读取的地点只会被跳过，而不是整个文件。',
  // edit-list
  'help.guide.edit-list.title': '编辑或删除列表',
  'help.guide.edit-list.goal': '更改列表的名称、颜色、封面、描述或链接，或移除该列表。',
  'help.guide.edit-list.step.1': '点击列表标题区里的“编辑”。只有所有者能看到它。',
  'help.guide.edit-list.step.2': '改你想改的，然后点击“保存”。左下角的“删除列表”会在确认后连同全部地点一起移除该列表。',
  'help.guide.edit-list.result': '标题区立即换上新的颜色、封面和描述。',
  'help.guide.edit-list.tip.1': '删除列表无法撤销。如果想保留副本，请先导出。',
  // all-saved
  'help.guide.all-saved.title': '搜索你的整个地点库',
  'help.guide.all-saved.goal': '一次看遍你拥有的每一个列表。',
  'help.guide.all-saved.step.1': '点击列表栏里的“全部已保存”。它把你拥有或共同拥有的每个列表的地点合在一起。',
  'help.guide.all-saved.step.2': '像在任何列表上一样使用搜索框和筛选；“选择”在这里也可用，用于复制到行程。',
  'help.guide.all-saved.result': '一个视图看遍你所有已保存的地点，没有添加和导入，因为没有一个确定的列表可以放入它们。',
  'help.guide.all-saved.tip.1': '标签是按列表的，所以“全部已保存”上不提供标签筛选。',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': '旅程',
  'help.ctx.journey.summary':
    '旅程是你以照片为主的旅行日记。每段旅程都关联一次或多次旅行，并由带有故事、照片、心情和天气的条目一天天生长起来。这个页面列出你的旅程；打开一段就可以开始写。',
  'help.ctx.journey.bullet.1':
    '顶部的横幅显示进行中的旅程，或者你最近的一段，连同它的条目、照片和地点数量。“继续写作”会在今天这一页打开它。',
  'help.ctx.journey.bullet.2': '下方每段旅程一张卡片，带有封面、副标题、日期和各项数量。点击卡片即可打开。',
  'help.ctx.journey.bullet.3': '网格中的最后一张卡片“创建新旅程”，会从你的旅行开始一段新旅程。',
  // create-journey
  'help.guide.create-journey.title': '创建旅程',
  'help.guide.create-journey.goal': '为一次旅行开始一本日记，旅行的地点已经作为建议等在那里。',
  'help.guide.create-journey.step.1': '点击网格中的最后一张卡片“创建新旅程”。',
  'help.guide.create-journey.step.2':
    '给它起个名字，愿意的话再加一个副标题，然后勾选它所属的旅行。计数器会告诉你有多少地点会被带进来。',
  'help.guide.create-journey.step.3': '点击“创建旅程”。',
  'help.guide.create-journey.result':
    '日记打开。已关联旅行的每个地点都以建议的形式出现在时间线上，它所在的每一天各一条，随时可以写进去。',
  'help.guide.create-journey.tip.1': '之后可以在“旅程设置”里关联更多旅行。',
  'help.guide.create-journey.tip.2': '没有旅行的旅程也可以；这时你就手动添加条目。',
  // open-journey
  'help.guide.open-journey.title': '打开旅程',
  'help.guide.open-journey.goal': '进入一本日记，并知道它会在哪里打开。',
  'help.guide.open-journey.step.1': '点击一张卡片。每张卡片都显示封面、日期，以及这段旅程有多少条目、照片和地点。',
  'help.guide.open-journey.result':
    '进行中的旅程在今天这一页打开；如果还什么都没写，则在今天之前的最后一条打开；已结束的旅程从开头打开。',
  'help.guide.open-journey.tip.1': '除非你在“旅程设置”里另外设定，封面就是旅程的第一张照片。',
  // continue-writing
  'help.guide.continue-writing.title': '继续进行中的旅程',
  'help.guide.continue-writing.goal': '直接跳到你正在经历的旅程的今天这一页。',
  'help.guide.continue-writing.step.1': '点击顶部横幅里的“继续写作”。横幅显示进行中的旅程，没有的话则显示最近的一段。',
  'help.guide.continue-writing.result': '日记在今天这一页打开；如果还什么都没写，则在今天之前的最后一条打开。',
  'help.guide.continue-writing.tip.1': '横幅还会为尚未建立旅程的旅行给出建议；“忽略”会隐藏那条建议。',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': '日记',
  'help.ctx.journey-detail.summary':
    '一段打开的旅程：左侧是逐日排列的时间线，右侧是地图，带有每个条目和已关联旅行的地点。所有往日记里添加内容的入口都在顶部；页眉包含各项数量、“Studio”、建议开关和“旅程设置”。',
  'help.ctx.journey-detail.bullet.1':
    '页眉：封面、标题和副标题，天数、地点、条目和照片数量，右侧是“Studio”、建议开关和“旅程设置”。',
  'help.ctx.journey-detail.bullet.2': '工具栏：“时间线”和“图库”标签页、“在这段旅程中搜索”，以及“添加条目”。',
  'help.ctx.journey-detail.bullet.3':
    '时间线：每天一个区块，带一个 + 用来在那天添加条目；条目卡片带有照片、心情、天气和故事；来自旅行的建议以较浅的样式显示，并带有“忽略这条建议”。',
  'help.ctx.journey-detail.bullet.4':
    '地图：条目显示为图钉，按日期顺序用虚线连接，还有旅行的地点，以及导入到这些旅行中的任何 GPX 轨迹。',
  'help.ctx.journey-detail.bullet.5':
    '“旅程设置”：封面、名称和副标题、地图上的轨迹、记录字段、已忽略的建议、已关联的旅行、贡献者、公开分享、归档和删除。',
  'help.ctx.journey-detail.bullet.6': '两个圆形按钮悬浮在较长的时间线上：回到顶部，以及跳到最后一条。',
  // add-entry
  'help.guide.add-entry.title': '写一条条目',
  'help.guide.add-entry.goal': '添加一天的故事，带上标题、正文、心情和天气。',
  'help.guide.add-entry.step.1': '点击工具栏里的“添加条目”，或者点击某一天页眉上的 +，从那天开始。',
  'help.guide.add-entry.step.2':
    '给这个瞬间起个名字，写下故事。文本上方的工具栏可以用 Markdown 添加粗体、斜体、标题、引用、链接和列表。',
  'help.guide.add-entry.step.3':
    '选一个心情和天气，核对日期，愿意的话再钉上一个位置：搜索一个地点，或者使用你的当前位置。',
  'help.guide.add-entry.step.4': '点击“保存”。',
  'help.guide.add-entry.result': '条目出现在时间线上它所属的那天，并在地图上显示为一枚图钉。页眉里的数量随之更新。',
  'help.guide.add-entry.tip.1': '在建议里写作用的是同一个编辑器，只是地点已经设好。',
  'help.guide.add-entry.tip.2': '底部的标签是自由文本，比如“hidden gem”或“best meal”，搜索也能找到它们。',
  // entry-photos
  'help.guide.entry-photos.title': '给条目添加照片和视频',
  'help.guide.entry-photos.goal': '把图片放到某一天；第一张会成为条目的封面。',
  'help.guide.entry-photos.step.1': '用卡片上的 ⋯ 打开条目菜单，选择“编辑”。',
  'help.guide.entry-photos.step.2':
    '点击“上传照片”并选择文件。“从相册”取用旅程图库里已有的图片；“External photos”在已连接的 Immich 或 Synology 图库里搜索那一天的照片。',
  'help.guide.entry-photos.step.3': '把鼠标悬停在一张图片上，用“设为第1张”选定封面，然后点击“保存”。',
  'help.guide.entry-photos.result': '照片显示在卡片上和图库里；第一张在所有地方都作为缩略图。',
  'help.guide.entry-photos.tip.1': '视频以同样的方式加到条目上：mp4、m4v、webm 或 mov，最大 500 MB，按上传原样存储。',
  'help.guide.entry-photos.tip.2': '来自 iPhone 的 HEIC 文件会在上传时转换为 JPEG，这会丢掉其中的 GPS 和相机元数据。',
  // suggestions
  'help.guide.suggestions.title': '使用或忽略建议',
  'help.guide.suggestions.goal': '把旅行中的地点变成条目，并清掉那些你不打算写的。',
  'help.guide.suggestions.step.1': '建议是一张较浅的卡片，地点名称为斜体。点击它会打开编辑器，地点和日期已经设好。',
  'help.guide.suggestions.step.2':
    '在不会用到的卡片上点击“忽略这条建议”。它会离开时间线但不会被删除，旅行同步也不会再次提供它。',
  'help.guide.suggestions.step.3': '改变主意了？“旅程设置”会显示有多少条已被忽略，“找回已忽略的建议”会把它们全部找回。',
  'help.guide.suggestions.result': '时间线上只留下你打算写的内容；阅读时，页眉的开关可以一次隐藏所有建议。',
  'help.guide.suggestions.tip.1': '跨越两天的地点会在每一天各给出一条建议。',
  'help.guide.suggestions.tip.2': '建议从不计入统计；只有已写的条目才算。',
  // add-on-day
  'help.guide.add-on-day.title': '在更早的一天添加条目',
  'help.guide.add-on-day.goal': '写一个已经过去的日子，不用事后再改日期。',
  'help.guide.add-on-day.step.1': '点击那一天页眉上的 +。',
  'help.guide.add-on-day.step.2': '编辑器打开，日期已经设好。像往常一样写好并“保存”。',
  'help.guide.add-on-day.result': '条目直接落在正确的那一天。',
  'help.guide.add-on-day.tip.1': '在同一天内，条目菜单里的箭头可以把它往前或往后移。',
  // pros-cons
  'help.guide.pros-cons.title': '添加评价',
  'help.guide.pros-cons.goal': '用哪些很棒、哪些不怎么样来总结一天。',
  'help.guide.pros-cons.step.1':
    '在编辑器里，故事下方找到“优缺点”。在“优点”或“缺点”里输入一条，用“再添加一个”写下一条。',
  'help.guide.pros-cons.step.2': '保存。评价会以两个短列表的形式显示在卡片上。',
  'help.guide.pros-cons.result': '故事下方，一眼就能看到点赞和差评。',
  'help.guide.pros-cons.tip.1': '不用评价的旅程可以在“旅程设置”的“记录字段”下关闭这一部分。',
  // search-journey
  'help.guide.search-journey.title': '在长日记里找东西',
  'help.guide.search-journey.goal': '不用翻过几周的内容，直接找到你要的条目。',
  'help.guide.search-journey.step.1':
    '在工具栏的“在这段旅程中搜索”里输入。时间线会随你输入而过滤，范围包括标题、故事、地点和标签。不区分重音和大小写。',
  'help.guide.search-journey.step.2':
    '页眉的建议开关会在你阅读时隐藏尚未写的卡片。时间线一旦变长，它的下边缘上方会悬浮两个圆形按钮：回到顶部，以及跳到最后一条。',
  'help.guide.search-journey.result': '只留下匹配的条目；清空搜索框即可重新看到全部。',
  'help.guide.search-journey.tip.1': '进行中的旅程在今天这一页打开，所以当前页通常已经在视野里。',
  'help.guide.search-journey.tip.2': '标签也算：搜索“hidden gem”会找到所有打了这个标签的条目。',
  // gallery-map
  'help.guide.gallery-map.title': '浏览图库和地图',
  'help.guide.gallery-map.goal': '把整段旅程当作图片来看，也当作地图上的地点来看。',
  'help.guide.gallery-map.step.1':
    '在工具栏切换到“图库”：每个条目的每张照片，加上直接上传到图库的图片。点击一张即可打开灯箱。',
  'help.guide.gallery-map.step.2':
    '右侧的地图按日期顺序把条目显示为图钉，还有已关联旅行的地点，以及导入到这些旅行中的任何 GPX 轨迹，颜色与它在规划器中的一致。',
  'help.guide.gallery-map.result':
    '悬停在轨迹上可以看到它的名字。条目之间的虚线是 TREK 画的；轨迹则是你实际记录下来的路线。',
  'help.guide.gallery-map.tip.1': '可以在“旅程设置”下为某段旅程关闭轨迹。',
  'help.guide.gallery-map.tip.2': '当“图库”和“地图”都被分享时，带有位置的图库照片也会出现在公开地图上。',
  // entry-fields
  'help.guide.entry-fields.title': '关闭条目字段',
  'help.guide.entry-fields.goal': '让编辑器只保留这段旅程用得到的内容。',
  'help.guide.entry-fields.step.1': '从页眉打开“旅程设置”。',
  'help.guide.entry-fields.step.2': '在“记录字段”下，关闭“心情”、“天气”或“优点与不足”。',
  'help.guide.entry-fields.result':
    '编辑器不再询问这些内容。已写的东西不会丢失：重新打开某个字段会让存储的值再次显示，分享出去的旅程也会隐藏同样的字段。',
  'help.guide.entry-fields.tip.1': '开关是按旅程设置的，所以出差和度假可以不一样。',
  // link-trip
  'help.guide.link-trip.title': '关联另一次旅行',
  'help.guide.link-trip.goal': '把第二次旅行的地点作为建议带进日记。',
  'help.guide.link-trip.step.1': '从页眉打开“旅程设置”。',
  'help.guide.link-trip.step.2': '在已关联的旅行下方，点击“添加旅行”。',
  'help.guide.link-trip.step.3': '选择那次旅行。',
  'help.guide.link-trip.result': '它的地点会作为建议出现在时间线上各自的那一天，它的 GPX 轨迹也会加入地图。',
  'help.guide.link-trip.tip.1': '已关联旅行旁边的 × 会再次取消关联；你写过的条目会保留。',
  'help.guide.link-trip.tip.2': '带日期的条目只计一次，不管有多少次旅行覆盖那一天。',
  // share-public
  'help.guide.share-public.title': '公开分享旅程',
  'help.guide.share-public.goal': '给没有 TREK 账号的人一个只读链接。',
  'help.guide.share-public.step.1': '打开“旅程设置”，找到“公开分享”。',
  'help.guide.share-public.step.2': '点击“创建分享链接”。',
  'help.guide.share-public.step.3':
    '选择访客能看到什么：“时间线”、“图库”和“地图”是各自独立的开关。“复制”会把链接放到你的剪贴板。',
  'help.guide.share-public.result':
    '拿到链接的任何人只能看到已启用的部分，其他什么也看不到；你在“记录字段”里关闭的字段在那里同样保持隐藏。',
  'help.guide.share-public.tip.1':
    '只有“图库”和“地图”都开启时，照片才会出现在公开地图上；“地图”关闭时，照片的坐标会在离开服务器之前被去除。',
  'help.guide.share-public.tip.2': '在同一个地方删除链接即可结束分享。',
  // contributors
  'help.guide.contributors.title': '一起写',
  'help.guide.contributors.goal': '让同行的旅伴添加他们自己的条目和照片。',
  'help.guide.contributors.step.1': '打开“旅程设置”，滚动到贡献者。',
  'help.guide.contributors.step.2': '点击“邀请贡献者”，按名字或邮箱搜索用户。',
  'help.guide.contributors.step.3': '选一个角色并确认。',
  'help.guide.contributors.result': '旅程会出现在他们的列表里，他们的条目会带上他们的名字。用旁边的 × 移除贡献者。',
  'help.guide.contributors.tip.1': '贡献者面向这个 TREK 上的人。对其他所有人，则有公开链接。',
  // studio
  'help.guide.studio.title': '把旅程排成一本相册书',
  'help.guide.studio.goal': '把日记变成可打印的页面。',
  'help.guide.studio.step.1': '点击页眉里的“Studio”。设计器会在旅程之上打开。',
  'help.guide.studio.step.2': '顶栏左侧的旅程名称就是返回的入口；它会把你送回原来的位置。',
  'help.guide.studio.result':
    '左侧是页面栏，工作台上是跨页，右侧是属性。“Auto layout”会用你的条目搭建整本书；“Export”生成可直接打印的 PDF。',
  'help.guide.studio.tip.1': 'Studio 需要至少 1024 px 宽的窗口，手机上不提供。',
  'help.guide.studio.tip.2': '这本书继承旅程的访问权限：能读旅程的人就能打开它，能编辑的人就能保存。',
  // archive-journey
  'help.guide.archive-journey.title': '归档或删除旅程',
  'help.guide.archive-journey.goal': '关闭一段已结束的旅程，或者永久移除一段。',
  'help.guide.archive-journey.step.1': '打开“旅程设置”。',
  'help.guide.archive-journey.step.2':
    '在底部，“归档旅程”会结束它并标记为已归档；“恢复旅程”会把它带回来。“删除”会在确认后把它连同所有条目和照片一起移除。',
  'help.guide.archive-journey.result': '已归档的旅程仍然可以阅读和分享；只是不再在今天这一页打开。',
  'help.guide.archive-journey.tip.1': '删除无法撤销，但不会影响旅程曾关联的旅行。',
  'help.guide.archive-journey.tip.2': '封面、名称和副标题在同一个对话框里，就在顶部。',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio 把一段旅程排成可打印的照片书。它在日志之上打开：左侧是页面侧栏和内容，中间是你正在编辑的跨页，右侧是它的属性。Auto layout 根据你的条目生成第一稿；之后的一切由你来移动、裁剪和改样式，每一步都可以撤销。',
  'help.ctx.journey-studio.bullet.1':
    '顶部栏：Back to the journey、Book view、Undo 和 Redo、Page format、Auto layout 和 Export。标题旁的“已保存”标记告诉你书何时已经存好。',
  'help.ctx.journey-studio.bullet.2':
    '左侧侧栏有五个部分：Pages、Content（旅程的照片和条目）、Elements（文字、形状、线条、网格、相框、图标）、“旅程”（由旅程生成的地图、国家、国旗和标记）和 Layouts。',
  'help.ctx.journey-studio.bullet.3':
    '工作区：当前跨页及其出血和安全区，下方的缩放条、Fit to view，以及右侧的“下载此跨页”。',
  'help.ctx.journey-studio.bullet.4':
    '右侧的 Properties：所选对象的位置和大小、裁剪和焦点、Fill 或 Fit、外观、圆角、相框、堆叠顺序和锁定；未选中任何对象时则是页码和文档。',
  'help.ctx.journey-studio.bullet.5':
    '这本书的结构和装订成册的书一样：封面、单独的第一页、各个跨页、单独的最后一页和封底。页码从第一页开始计数，并按显示的样子打印。',
  'help.ctx.journey-studio.bullet.6':
    '多人可以同时设计：每个人都能看到其他人带名字的指针，在别人改过的版本上保存会以冲突的形式返回，而不是覆盖对方的工作。',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': '自动生成整本书',
  'help.guide.studio-auto-layout.goal': '一键从日志的条目和照片得到完整的第一稿。',
  'help.guide.studio-auto-layout.step.1': '点击顶部栏中的 Auto layout。',
  'help.guide.studio-auto-layout.step.2':
    '选择“整本书”：它会替换每一页，但保留你的标题和页面设置。“本页”只重建屏幕上的这个跨页，且只在由条目生成的跨页上提供。',
  'help.guide.studio-auto-layout.step.3': '翻看 Pages 侧栏。如果你更喜欢原来的样子，Undo 会把整个排版撤回。',
  'help.guide.studio-auto-layout.result':
    '每个条目一个跨页，按顺序排列，照片、标题和故事都已为你放好。每个元素在你编辑它之前都会继续跟随它的条目。',
  'help.guide.studio-auto-layout.tip.1': '这两个选项都是普通的撤销步骤，放心尝试。',
  'help.guide.studio-auto-layout.tip.2':
    'Auto layout 绑定到条目的元素会跟随该条目的修改，直到你在 Properties 中动它为止；那会断开链接。',
  // studio-pages
  'help.guide.studio-pages.title': '添加、移动和删除跨页',
  'help.guide.studio-pages.goal': '一页一页地塑造这本书。',
  'help.guide.studio-pages.step.1':
    '在侧栏中打开 Pages。缩略图就是按顺序排列的书：封面、第一页、各个跨页、最后一页、封底。',
  'help.guide.studio-pages.step.2':
    '底部的“添加页面”把新跨页放在最后一页之前；两张缩略图之间的 + 会正好在那里插入一个。',
  'help.guide.studio-pages.step.3':
    '把鼠标悬停在缩略图上可看到它的操作：“前移”、“后移”、“复制页面”和“删除页面”。点击缩略图即可在工作区打开那个跨页。',
  'help.guide.studio-pages.result': '封面、第一页、最后一页和封底留在原处；新跨页总是落在它们之间。',
  'help.guide.studio-pages.tip.1': '顶部栏的 Book view 以纸张的形式显示整本书，也就是装订后的样子。',
  'help.guide.studio-pages.tip.2': '页码在未选中任何对象时，于 Properties 的“文档”下开启。',
  // studio-layouts
  'help.guide.studio-layouts.title': '为跨页应用版式',
  'help.guide.studio-layouts.goal': '给跨页一套现成的照片框和文字框排布。',
  'help.guide.studio-layouts.step.1':
    '在侧栏中打开 Layouts。有十三种跨页版式，以及一组单独用于封面、封底和单页的版式。',
  'help.guide.studio-layouts.step.2': '点击其中一个。工作区中的跨页会采用它的框；你已有的照片和文字会被倒入这些框中。',
  'help.guide.studio-layouts.result': '空框等待内容：从 Content 拖一张照片到框上，或使用 Add to this page。',
  'help.guide.studio-layouts.tip.1': '版式和其他操作一样，也是一个撤销步骤。',
  // studio-content
  'help.guide.studio-content.title': '把照片和条目放到页面上',
  'help.guide.studio-content.goal': '把旅程自己的素材放到跨页上。',
  'help.guide.studio-content.step.1': '在侧栏中打开 Content。Photos 列出旅程的每一张照片；Entries 列出带文字的条目。',
  'help.guide.studio-content.step.2':
    '把照片拖到跨页或空框上，或点击它下方的 Add to this page。“上传照片”可添加旅程中还没有的照片。',
  'help.guide.studio-content.step.3':
    '在条目下方，Title、Story 和 Place 会把那段文字作为文字元素放到页面上；日期和坐标以标记的形式加入，条目的照片也就列在那里。',
  'help.guide.studio-content.result': '放下的照片变成照片元素；文字在你编辑之前会继续跟随条目。',
  'help.guide.studio-content.tip.1': 'Content 顶部的搜索框同时筛选两个列表。',
  'help.guide.studio-content.tip.2': '把文件从桌面拖到工作区，会一步完成上传和放置。',
  // studio-elements
  'help.guide.studio-elements.title': '添加文字、形状和图标',
  'help.guide.studio-elements.goal': '在照片和故事之外装饰跨页。',
  'help.guide.studio-elements.step.1': '在侧栏中打开 Elements。',
  'help.guide.studio-elements.step.2':
    '点击一种用于标题或说明的文字样式、一个形状、一条线、一个网格、一个带相框样式的空框，或可搜索图库中的一个图标。每一个都会落在跨页中央，随时可以移动。',
  'help.guide.studio-elements.result': '双击文字元素即可输入；Properties 里有字体、字重、字号、间距和对齐。',
  'help.guide.studio-elements.tip.1': '相框是空的照片位：以后再把照片放进去。',
  // studio-travel
  'help.guide.studio-travel.title': '添加地图、国旗和数据',
  'help.guide.studio-travel.goal': '把旅程本身变成页面上的数据。',
  'help.guide.studio-travel.step.1': '在侧栏中打开“旅程”。',
  'help.guide.studio-travel.step.2':
    '选择要添加的内容：条目的路线地图、国家轮廓、国家列表或网格、国旗、日期、天数或距离标记，或整个旅行的概览。每一个都由旅程的数据生成，并随之更新。',
  'help.guide.studio-travel.result': '元素出现在跨页上；Properties 调整它的样式，地图还可以调整范围。',
  'help.guide.studio-travel.tip.1': '标记跟随跨页所来自的条目，所以自动排版的跨页上的日期标记已经显示那一天。',
  // studio-properties
  'help.guide.studio-properties.title': '编辑你选中的对象',
  'help.guide.studio-properties.goal': '用检查器移动、裁剪、设置样式和堆叠元素。',
  'help.guide.studio-properties.step.1': '点击跨页上的一个元素。会出现用于大小和旋转的控制点；拖动它即可移动。',
  'help.guide.studio-properties.step.2':
    '右侧的 Properties 跟随所选对象：位置和大小、带焦点的 Crop（焦点决定什么留在框内）、Fill 或 Fit、Look 滤镜、Corner 半径、“相框”样式、堆叠顺序和 Lock。',
  'help.guide.studio-properties.step.3': '“复制”和 Delete 位于检查器顶部；顶部栏的 Undo 可撤销其中任何操作。',
  'help.guide.studio-properties.result':
    '锁定的元素在页面上就再也抓不到了，这样你在周围继续工作时，已完成的排版就不会被碰坏。',
  'help.guide.studio-properties.tip.1': '按住 Shift 点击可选中多个元素；检查器随后会一起编辑它们。',
  'help.guide.studio-properties.tip.2': '编辑 Auto layout 放置的元素会断开它与条目的链接；它不再跟随该条目之后的改动。',
  // studio-format
  'help.guide.studio-format.title': '选择页面格式',
  'help.guide.studio-format.goal': '在排版依赖尺寸之前，先设定这本书要打印的尺寸。',
  'help.guide.studio-format.step.1': '点击顶部栏中的 Page format。',
  'help.guide.studio-format.step.2':
    '选择 Square 21 × 21 cm、Square 30 × 30 cm、A4 或 A5 的横向或纵向，或者以毫米输入自定义的宽和高。出血和安全区就在下方。',
  'help.guide.studio-format.result': '每个跨页都按该尺寸绘制，默认出血 3 mm、安全区 5 mm。',
  'help.guide.studio-format.tip.1': '先改格式，再运行 Auto layout；排版是按它当时找到的尺寸生成的。',
  'help.guide.studio-format.tip.2': '向你的印刷厂询问他们的出血和安全值，然后填入。',
  // studio-export
  'help.guide.studio-export.title': '把书导出为 PDF',
  'help.guide.studio-export.goal': '得到一个可直接印刷的文件，或一个在屏幕上阅读的文件。',
  'help.guide.studio-export.step.1': '点击顶部栏中的 Export。',
  'help.guide.studio-export.step.2':
    '选择“单页”，按阅读顺序每张纸一页，这是印刷厂需要的；或选择“跨页”，像翻开书那样一次两页。“裁切标记”会在每条边上加上出血并标出裁切位置。',
  'help.guide.studio-export.step.3': '点击“打印视图”。浏览器会打开这些页面，“另存为 PDF”把它们变成文件。',
  'help.guide.studio-export.result': '一个 PDF，张数与对话框所说的一致，页面格式为你设定的格式。',
  'help.guide.studio-export.tip.1': '生成 PDF 只能在桌面端进行，和 Studio 本身一样。',
  'help.guide.studio-export.tip.2': '校样用不带裁切标记的“跨页”导出；给印刷厂用带裁切标记的“单页”。',
  // studio-spread-file
  'help.guide.studio-spread-file.title': '在另一本书中重用跨页',
  'help.guide.studio-spread-file.goal': '把你喜欢的设计从一段旅程的书带到另一段旅程。',
  'help.guide.studio-spread-file.step.1':
    '跨页在工作区中打开时，点击缩放条右端的“下载此跨页”。文件中保存的是设计，不含照片。',
  'help.guide.studio-spread-file.step.2': '在另一本书里打开 Pages，点击“添加页面”旁边的“导入”，然后选择文件。',
  'help.guide.studio-spread-file.result': '跨页带着它的框和文字样式到达；把新旅程的照片放进这些框里。',
  'help.guide.studio-spread-file.tip.1': '不是跨页设计的文件会被拒绝，并说明原因。',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': '设置',
  'help.ctx.settings.summary':
    '你的个人设置，左侧边栏里每个主题一个标签页。大多数开关一拨就生效；底部带“保存”按钮的表单要等你点保存。这里的任何改动都不会影响别人的 TREK。',
  'help.ctx.settings.bullet.1':
    '左侧边栏：“显示”“外观”“地图”“通知”“集成”“离线”和“账户”。装了插件后会出现“插件”，自托管的 TREK 上会出现“关于”。',
  'help.ctx.settings.bullet.2':
    '“显示”管语言、单位、货币和应用打开时的页面；“外观”管主题、颜色、文本大小和仪表盘组件。',
  'help.ctx.settings.bullet.3':
    '“地图”选择渲染引擎和样式；“通知”选择能联系到你的渠道；“集成”管照片库、API 密钥和 MCP；“离线”管应用在此设备上保留的内容。',
  'help.ctx.settings.bullet.4': '“账户”包含你的资料、密码、双因素认证、通行密钥和删除账户。',
  'help.ctx.settings-display.title': '显示',
  'help.ctx.settings-display.summary':
    '语言、单位和货币，地图与预订的行为方式，以及 TREK 打开时的页面。这里的每项更改都立即生效。',
  'help.ctx.settings-display.bullet.1': '“语言与地区”：界面语言、时间格式、显示货币，以及距离和温度单位。',
  'help.ctx.settings-display.bullet.2':
    '“旅行与地图”：预订路线始终显示在地图上、探索地点的小按钮、从住宿地优化路线、隐藏预订编号，以及给预订路线加标签。',
  'help.ctx.settings-display.bullet.3': '“启动”：TREK 打开时是进入仪表盘还是进行中的旅行，以及旅行的哪个标签页先显示。',
  'help.ctx.settings-appearance.title': '外观',
  'help.ctx.settings-appearance.summary':
    'TREK 在这个账户上的样子：浅色还是深色、强调色、玻璃效果和动态效果、文本大小，以及仪表盘显示哪些组件。一切即时生效，在你登录的每台设备上都一样。',
  'help.ctx.settings-appearance.bullet.1': '“主题”：“浅色”“深色”或“自动”，以及带你自己“自定义强调色”的“配色方案”。',
  'help.ctx.settings-appearance.bullet.2':
    '“可读性”：“透明效果”“减少动态效果”“布局密度”和“文本大小”，还有按层级设置的高级大小。',
  'help.ctx.settings-appearance.bullet.3': '“仪表盘组件”：每个组件一个开关，“桌面端”和“移动端”分开设置。',
  'help.ctx.settings-appearance.bullet.4': '底部的“恢复默认设置”把一切放回原样。',
  'help.ctx.settings-map.title': '地图',
  'help.ctx.settings-map.summary':
    '由哪个引擎以什么样式绘制地图。Leaflet 是经典的栅格地图，MapLibre 不需要任何令牌就能绘制矢量瓦片，Mapbox 用你自己的令牌加上 3D 建筑和地形。',
  'help.ctx.settings-map.bullet.1': '“地图提供商”：Leaflet、MapLibre 或 Mapbox，每个都有一行说明它需要什么。',
  'help.ctx.settings-map.bullet.2': '“地图样式”和“地图模板”：瓦片的外观，加上提供商要求的令牌或密钥。',
  'help.ctx.settings-map.bullet.3': '“高画质模式”提供抗锯齿和地球仪投影；“保存地图”写入你的选择。',
  'help.ctx.settings-notifications.title': '通知',
  'help.ctx.settings-notifications.summary':
    'TREK 在应用之外联系你的地方：一个 ntfy 主题、一个 webhook，或者插件提供的渠道。渠道下方每个事件一行，决定什么发到哪里。',
  'help.ctx.settings-notifications.bullet.1': 'ntfy：主题、可选的自建服务器和可选的访问令牌，点“测试”可以立刻发一条。',
  'help.ctx.settings-notifications.bullet.2': 'Webhook：一个以 JSON 接收所有事件的 URL，带“测试”。',
  'help.ctx.settings-notifications.bullet.3': '偏好设置行：每个事件开启了哪个渠道。插件渠道在设置好之前显示“去配置”。',
  'help.ctx.settings-integrations.title': '集成',
  'help.ctx.settings-integrations.summary':
    '从外部连接到 TREK 的一切：日记用的照片库、脚本用的 API 密钥，以及供 AI 助手使用的 MCP 端点及其令牌和 OAuth 客户端。',
  'help.ctx.settings-integrations.bullet.1':
    '照片提供商：Immich 和 Synology Photos，各有自己的 URL 和密钥、“测试连接”和“保存”。',
  'help.ctx.settings-integrations.bullet.2': '“API 密钥”：供脚本和其他工具以你的名义调用 TREK API 的个人密钥。',
  'help.ctx.settings-integrations.bullet.3': '“MCP 配置”：端点、可直接复制的客户端配置，以及 API 令牌。',
  'help.ctx.settings-integrations.bullet.4':
    '“OAuth 2.1 客户端”：通过 TREK 登录的应用，包括重定向 URI、允许的权限范围、机器客户端和活跃的会话。',
  'help.ctx.settings-offline.title': '离线',
  'help.ctx.settings-offline.summary':
    'TREK 在此设备上保留什么，好让旅行在没有网络时也能打开；以及离线时的更改与别处的更改冲突时会发生什么。',
  'help.ctx.settings-offline.bullet.1':
    '“离线模式”：“强制离线模式”让应用表现得像断网一样，用于测试或按流量计费的连接。',
  'help.ctx.settings-offline.bullet.2': '“为离线做准备”：“下载以供离线使用”现在就获取你的旅行及其地图瓦片。',
  'help.ctx.settings-offline.bullet.3': '“要离线存储的内容”：地图瓦片开或关，以及每次旅行一个开关。',
  'help.ctx.settings-offline.bullet.4':
    '“同步冲突”和“离线缓存”：冲突处理策略、待处理和失败的数量、“立即重新同步”和“清除缓存”。',
  'help.ctx.settings-account.title': '账户',
  'help.ctx.settings-account.summary':
    '你在这个 TREK 上是谁、如何登录：资料和头像、密码、双因素认证、通行密钥，以及最底部的删除账户。',
  'help.ctx.settings-account.bullet.1': '资料：用户名、邮箱和头像，用“保存资料”保存。',
  'help.ctx.settings-account.bullet.2': '“修改密码”：当前密码、新密码两次，然后“更新密码”。',
  'help.ctx.settings-account.bullet.3': '使用身份验证器应用和备用代码的“双因素认证 (2FA)”；不用密码登录的“通行密钥”。',
  'help.ctx.settings-account.bullet.4': '底部的“删除账户”，需要先确认。最后一位管理员不能删除自己。',
  // language-region
  'help.guide.language-region.title': '设置语言、单位和货币',
  'help.guide.language-region.goal': '让 TREK 说你的语言，按你的方式计数。',
  'help.guide.language-region.step.1': '在“语言与地区”中选择界面语言。TREK 立即切换，在你登录的每台设备上都一样。',
  'help.guide.language-region.step.2': '在它下方选择时间格式、显示货币，以及距离和温度单位。',
  'help.guide.language-region.result': '日期、距离和金额按你期望的方式显示；旅行自己的货币仍然显示在换算金额旁边。',
  'help.guide.language-region.tip.1': '显示货币用于跨旅行的合计；每次旅行保留你给它设定的货币。',
  'help.guide.language-region.tip.2': '语言还决定 Vacay 和日记里的星期和月份名称。',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': '调整地图和预订的行为',
  'help.guide.travel-map-prefs.goal': '决定旅行地图默认显示什么。',
  'help.guide.travel-map-prefs.step.1':
    '在“旅行与地图”中，“始终显示预订路线”让航班和火车即使在它们的日期未打开时也留在地图上；“在地图上探索地点”显示查找地点的小按钮；“从住宿地优化路线”从你过夜的地方开始规划路线。',
  'help.guide.travel-map-prefs.step.2':
    '“隐藏预订编号”把确认号隐藏起来，悬停才显示；“预订路线标签”把预订名称写在它的路线旁。',
  'help.guide.travel-map-prefs.result': '旅行地图在每次旅行中都遵循这些设置，直到你再拨回去。',
  'help.guide.travel-map-prefs.tip.1': '这些是按账户而不是按旅行设置的。共享旅行的成员各自看到自己的选择。',
  // startup
  'help.guide.startup.title': '选择 TREK 打开时的页面',
  'help.guide.startup.goal': '落在你最常工作的地方，而不是每次都进仪表盘。',
  'help.guide.startup.step.1': '在“启动”下，把“启动页面”设为“仪表盘”或“进行中的旅行”。',
  'help.guide.startup.step.2': '“启动标签页”决定打开一次旅行时先显示哪个标签页。',
  'help.guide.startup.result': '下次登录和下次点击 logo 都直接去那里。',
  'help.guide.startup.tip.1': '“进行中的旅行”指今天正在进行的旅行，没有的话就是下一次旅行。',
  // theme-scheme
  'help.guide.theme-scheme.title': '设置主题和强调色',
  'help.guide.theme-scheme.goal': '让 TREK 用浅色、深色或跟随你的设备，配上你喜欢的颜色。',
  'help.guide.theme-scheme.step.1': '在“主题”下选择“浅色”“深色”或“自动”。“自动”跟随你的设备。',
  'help.guide.theme-scheme.step.2': '选择一个“配色方案”：“默认”“高对比度”“靛蓝”“蓝绿”“玫瑰”“琥珀”“紫罗兰”或“自定义”。',
  'help.guide.theme-scheme.step.3':
    '选“自定义”时，从预设里挑一个强调色或输入你自己的。旁边的对比度检查会告诉你文字在这个颜色上是否仍然清晰可读。',
  'help.guide.theme-scheme.result': '按钮、链接和高亮到处都用这个强调色，在你登录的每台设备上都一样。',
  'help.guide.theme-scheme.tip.1': '导航栏里也有一个浅色或深色的快捷开关；它设置的是同一个主题。',
  'help.guide.theme-scheme.tip.2': '当默认配色看起来太淡时，就选“高对比度”。',
  // readability
  'help.guide.readability.title': '调整可读性和文本大小',
  'help.guide.readability.goal': '少一点玻璃效果，少一点动态效果，多一点空间或更大的字。',
  'help.guide.readability.step.1':
    '在“可读性”下，“透明效果”把玻璃面板切换为实色表面，“减少动态效果”把动画降到最少，“布局密度”在“舒适”和“紧凑”之间选择。',
  'help.guide.readability.step.2':
    '“文本大小”一次缩放“全部”；“高级文本大小”让标题、副标题、正文和说明文字可以各不相同。',
  'help.guide.readability.result': '整个应用立即跟随，包括地图面板和日记。',
  'help.guide.readability.tip.1': '不去动“减少动态效果”时，它还会跟随你系统的设置。',
  'help.guide.readability.tip.2': '文本大小通过排版层级应用，所以不会有内容被截断；放不下的尺寸会换行。',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': '选择仪表盘组件',
  'help.guide.dashboard-widgets.goal': '只显示你用的组件，桌面端和手机分开设置。',
  'help.guide.dashboard-widgets.step.1':
    '在“仪表盘组件”下，为“桌面端”和“移动端”分别打开或关闭每个组件：整个右侧边栏、货币、Collections、时区、即将到来的预订、Atlas 国家和旅行数据。',
  'help.guide.dashboard-widgets.step.2': '底部的“恢复默认设置”把整个标签页恢复到出厂状态。',
  'help.guide.dashboard-widgets.result': '仪表盘立即重新排列；关掉右侧边栏后它会居中。',
  'help.guide.dashboard-widgets.tip.1': '扩展的组件只有在管理员开启了那个扩展时才会出现。',
  'help.guide.dashboard-widgets.tip.2': '仪表盘本身会按设备记住你的网格或列表视图以及排序方式。',
  // map-provider
  'help.guide.map-provider.title': '选择地图引擎和样式',
  'help.guide.map-provider.goal': '在经典地图、矢量瓦片和 Mapbox 的 3D 地图之间切换。',
  'help.guide.map-provider.step.1':
    '在“地图提供商”下，选 Leaflet 得到可用任意栅格瓦片的经典 2D 地图，选 MapLibre 得到无需令牌的 OpenFreeMap 矢量瓦片，选 Mapbox 得到带 3D 建筑和地形的矢量瓦片。',
  'help.guide.map-provider.step.2':
    '选一个“地图样式”或“地图模板”决定外观。Mapbox 需要“Mapbox 访问令牌”，一些栅格样式需要“CARTO API 密钥”；字段旁边的链接会带你去获取。',
  'help.guide.map-provider.step.3': '“高画质模式”加上抗锯齿和地球仪投影。点击“保存地图”。',
  'help.guide.map-provider.result': 'TREK 里的每张地图，旅行、Atlas、Collections 和日记，都由你选的引擎绘制。',
  'help.guide.map-provider.tip.1': '没有令牌时，Mapbox 会退回默认地图，而不是什么都不显示。',
  'help.guide.map-provider.tip.2': '你离线存储的地图瓦片来自下载时处于活动状态的提供商。',
  // notification-channels
  'help.guide.notification-channels.title': '设置通知送达的地方',
  'help.guide.notification-channels.goal': '在手机上或另一个工具里收到旅行提醒和协作事件。',
  'help.guide.notification-channels.step.1':
    '在“通知”下填写“Ntfy 主题”；如果你自己运行服务器，再加上你的“Ntfy 服务器 URL”和“访问令牌”。“测试”会立刻发一条消息。',
  'help.guide.notification-channels.step.2': '或者填一个以 JSON 接收所有事件的“Webhook URL”，用同样的方式“测试”它。',
  'help.guide.notification-channels.step.3':
    '在下方的行里，按渠道打开或关闭每个事件。插件渠道在插件设置里配置好之前显示“去配置”；“发送测试”会试发一条。',
  'help.guide.notification-channels.result': '事件通过开启的渠道发出。无论如何，导航栏里的铃铛仍会在应用内显示它们。',
  'help.guide.notification-channels.tip.1': '按旅行的偏好设置在旅行本身的通知设置里。',
  'help.guide.notification-channels.tip.2': '管理员可以为所有人预填一个默认 ntfy 服务器；主题仍由你自己选。',
  // photo-providers
  'help.guide.photo-providers.title': '连接照片库',
  'help.guide.photo-providers.goal': '让日记从 Immich 或 Synology Photos 拉取当天的照片。',
  'help.guide.photo-providers.step.1':
    '在“集成”下找到提供商的部分，输入它的 URL 和 API 密钥。Immich 还可以把旅程上传的照片镜像回照片库。',
  'help.guide.photo-providers.step.2': '点击“测试连接”，然后“保存”。',
  'help.guide.photo-providers.result':
    '条目编辑器的“External photos”标签页会在已连接的照片库中搜索该条目当天的照片，离条目位置最近的排在前面。',
  'help.guide.photo-providers.tip.1': '这个连接是你自己的：旅程的其他成员各自连接自己的照片库。',
  'help.guide.photo-providers.tip.2': '照片里没有 GPS 数据的提供商也能用；那时列表按时间排序。',
  // api-keys
  'help.guide.api-keys.title': '创建 API 密钥',
  'help.guide.api-keys.goal': '让脚本或其他工具以你的身份调用 TREK API。',
  'help.guide.api-keys.step.1': '在“API 密钥”下点击“创建密钥”，起一个能说明它用在哪里的名字。',
  'help.guide.api-keys.step.2': '从对话框里复制密钥：它只显示一次。当工具不再需要时，从列表里删除密钥。',
  'help.guide.api-keys.result': '带这个密钥的请求以你的权限执行；列表显示每个密钥的创建时间和最后使用时间。',
  'help.guide.api-keys.tip.1': '每个工具一个密钥，撤销起来毫不费力。',
  'help.guide.api-keys.tip.2': 'AI 助手请改用带 OAuth 的 MCP；API 密钥是给普通 HTTP 客户端的。',
  // mcp-oauth
  'help.guide.mcp-oauth.title': '通过 MCP 连接 AI 助手',
  'help.guide.mcp-oauth.goal': '让 Claude、IDE 或其他 MCP 客户端访问你的旅行。',
  'help.guide.mcp-oauth.step.1': '在“MCP 配置”下复制“MCP 端点”，或者为接受 JSON 片段的客户端复制整个“客户端配置”。',
  'help.guide.mcp-oauth.step.2':
    '通过浏览器登录的客户端使用 OAuth 2.1：在“OAuth 2.1 客户端”下“新建客户端”，填写“重定向 URI”“允许的权限范围”，没有浏览器的服务器则选“机器客户端”。',
  'help.guide.mcp-oauth.step.3':
    '每个客户端上都有“轮换密钥”和“删除客户端”；“活跃的 OAuth 会话”列出已登录的会话并让你撤销。“API 令牌”和“创建新令牌”是较早的接入方式。',
  'help.guide.mcp-oauth.result': '客户端可以以你的身份读取和修改其权限范围允许的内容，每个操作都显示在你的名下。',
  'help.guide.mcp-oauth.tip.1': '权限范围是安全网：在客户端需要更多之前，只给它读取范围。',
  'help.guide.mcp-oauth.tip.2': '管理员可以为整个实例关闭 MCP；那时这个部分就不存在。',
  // offline-prepare
  'help.guide.offline-prepare.title': '把旅行带到离线',
  'help.guide.offline-prepare.goal': '在断网之前，把你的旅行和地图放到这台设备上。',
  'help.guide.offline-prepare.step.1':
    '在“要离线存储的内容”下，保持“离线存储地图瓦片”开启，并打开你想放到这台设备上的旅行。',
  'help.guide.offline-prepare.step.2': '在“为离线做准备”下点击“下载以供离线使用”。它会获取旅行以及地点周围的瓦片。',
  'help.guide.offline-prepare.step.3': '“离线模式”下的“强制离线模式”让你在出发前检查一切是否齐全。',
  'help.guide.offline-prepare.result': '旅行在没有网络时也能打开；你做的更改在队列里等待，重新联网后发出。',
  'help.guide.offline-prepare.tip.1': '瓦片占的空间最多：“离线缓存”部分按旅行显示存储了什么。',
  'help.guide.offline-prepare.tip.2': '从浏览器把 TREK 安装为应用，离线启动最顺畅。',
  // offline-conflicts
  'help.guide.offline-conflicts.title': '决定同步冲突时谁胜出',
  'help.guide.offline-conflicts.goal': '选择 TREK 如何处理离线更改与别处更改之间的冲突。',
  'help.guide.offline-conflicts.step.1': '在“同步冲突”下，选择“每次询问我”“始终保留我的版本”或“始终保留服务器版本”。',
  'help.guide.offline-conflicts.step.2':
    '“离线缓存”显示旅行、待处理和失败的更改以及冲突；“立即重新同步”推送队列，“清除缓存”清空设备。',
  'help.guide.offline-conflicts.result': '选“每次询问我”时，冲突会显示两个版本让你挑；另外两种则静默处理。',
  'help.guide.offline-conflicts.tip.1': '“清除缓存”只移除这台设备上的副本；服务器上的内容不受影响。',
  // profile
  'help.guide.profile.title': '修改你的资料',
  'help.guide.profile.goal': '更新你的名字、邮箱和照片。',
  'help.guide.profile.step.1': '在“账户”下编辑“用户名”和“邮箱”。头像可以上传你自己的图片；移除后回到首字母。',
  'help.guide.profile.step.2': '点击“保存资料”。',
  'help.guide.profile.result': '你的名字和照片立即在各处更新，包括你共享的旅行。',
  'help.guide.profile.tip.1': '通过 OIDC 登录的账户会在这里显示出来；那时邮箱来自身份提供商。',
  // password
  'help.guide.password.title': '修改你的密码',
  'help.guide.password.goal': '设置一个新密码。',
  'help.guide.password.step.1': '在“修改密码”下输入当前密码，然后输入新密码两次。',
  'help.guide.password.step.2': '点击“更新密码”。',
  'help.guide.password.result': '新密码从下次登录起生效；其他会话保持登录。',
  'help.guide.password.tip.1': '通过 OIDC 登录的账户没有可修改的 TREK 密码。',
  // mfa
  'help.guide.mfa.title': '开启双因素认证',
  'help.guide.mfa.goal': '用身份验证器应用的验证码保护账户。',
  'help.guide.mfa.step.1': '在“双因素认证 (2FA)”下点击“设置身份验证器”。',
  'help.guide.mfa.step.2': '用你的应用扫描二维码，或手动输入密钥，然后输入它显示的六位验证码并点击“启用 2FA”。',
  'help.guide.mfa.step.3': '保存备用代码：复制、下载或打印。每个只能用一次，在你手边没有手机时使用。',
  'help.guide.mfa.result': '每次登录在密码之后都会要求验证码。',
  'help.guide.mfa.tip.1': '“停用 2FA”需要你的密码和一个当前验证码。',
  'help.guide.mfa.tip.2': '管理员可以要求所有人使用 2FA；那时在这里无法关闭。',
  // passkeys
  'help.guide.passkeys.title': '用通行密钥登录',
  'help.guide.passkeys.goal': '用设备的指纹、面容或 PIN 代替密码。',
  'help.guide.passkeys.step.1': '在“通行密钥”下点击“添加通行密钥”，并在设备上确认。起一个能说明是哪台设备的名字。',
  'help.guide.passkeys.step.2': '列表显示每个通行密钥的名称和最后使用时间；删除按钮移除一个。',
  'help.guide.passkeys.result': '登录页会提供通行密钥；密码仍作为备用方式保留。',
  'help.guide.passkeys.tip.1': '通行密钥保存在设备或它的密码管理器里，所以每台设备添加一个。',
  'help.guide.passkeys.tip.2': '通行密钥需要 HTTPS；在纯 HTTP 的实例上，这个部分会解释为什么它们不可用。',
  // delete-account
  'help.guide.delete-account.title': '删除你的账户',
  'help.guide.delete-account.goal': '移除你的账户和只属于你的数据。',
  'help.guide.delete-account.step.1': '在“账户”的最底部点击“删除账户”并确认。',
  'help.guide.delete-account.result': '你的账户、你自己的旅行和你的旅程都会消失；你与他人共享的旅行留给他们。',
  'help.guide.delete-account.tip.1': '实例的最后一位管理员不能删除自己；先把别人设为管理员。',
  'help.guide.delete-account.tip.2': '没有撤销。确认之前，先导出你想保留的内容。',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': '管理后台',
  'help.ctx.admin.summary':
    '支撑所有人 TREK 的那个实例：谁可以登录、怎么登录，什么功能开着，文件放在哪里，服务器怎么联系到人，以及怎么备份。只有管理员能看到这个页面；每个标签页在侧边栏里都是独立的一屏。',
  'help.ctx.admin.bullet.1': '顶部的四张卡片统计用户、行程、地点和文件；上方的横幅会通告更新的 TREK 版本。',
  'help.ctx.admin.bullet.2': '“用户”和“用户默认设置”：账户、邀请链接，以及新账户初始的地图设置。',
  'help.ctx.admin.bullet.3':
    '“个性化”“设置”“扩展”和“插件”：打包模板、分类和学校假期；登录方式和 API 密钥；功能模块；第三方插件。',
  'help.ctx.admin.bullet.4':
    '“存储”“通知”“MCP 访问”和“GitHub”：上传文件的去向、实例范围的通知渠道、AI 客户端的令牌和会话，以及版本历史。',
  'help.ctx.admin.bullet.5': '“备份”和“审计”：手动和定时的备份，以及安全相关事件的日志。',
  'help.ctx.admin-users.title': '用户',
  'help.ctx.admin-users.summary':
    '这个 TREK 上的每个账户，带角色、邮箱和最近登录时间，以及让人们在封闭实例上注册的邀请链接。',
  'help.ctx.admin-users.bullet.1': '表格：用户名、邮箱、角色、创建日期、最近登录，以及每行的操作。你自己会被标出来。',
  'help.ctx.admin-users.bullet.2': '顶部的“创建用户”手动添加一个账户，密码由你交给对方。',
  'help.ctx.admin-users.bullet.3':
    '下方的“邀请链接”：一次性的注册链接，带使用次数上限和有效期，还可以选一个行程，让新用户注册后直接加入。',
  'help.ctx.admin-users.bullet.4':
    '底部的“权限设置”：按操作设定谁可以执行，“所有人”“旅行成员”“旅行所有者”或“仅管理员”。',
  'help.ctx.admin-defaults.title': '用户默认设置',
  'help.ctx.admin-defaults.summary': '新账户初始的设置，这样没人需要先去找地图标签页：地图提供商、样式、令牌和质量。',
  'help.ctx.admin-defaults.bullet.1':
    '地图提供商、Mapbox 样式和令牌、CARTO 密钥和 Mapbox 质量，和用户在“设置”的“地图”里设置的一模一样。',
  'help.ctx.admin-defaults.bullet.2': '每个字段旁的“重置”恢复 TREK 自身的选择；用户自己的设置永远优先于这些默认值。',
  'help.ctx.admin-config.title': '个性化',
  'help.ctx.admin-config.summary':
    '实例上所有行程共用的内容：打包模板、地点和收藏用的分类集合，以及假期功能所引用的学校假期目录。',
  'help.ctx.admin-config.bullet.1': '“打包模板”：带名称的分类和物品清单，行程的打包清单可以由此起步。',
  'help.ctx.admin-config.bullet.2': '“分类”：TREK 全局使用的分类的名称、图标和颜色，从地点检视器到收藏都在用。',
  'help.ctx.admin-config.bullet.3': '“学校假期”：国家和地区的目录，用于内置数据源未覆盖的地方。',
  'help.ctx.admin-settings.title': '设置',
  'help.ctx.admin-settings.summary':
    '人们怎么进来，服务器可以和什么通信：登录和注册方式、SSO、通行密钥、双因素策略，地图、地点和图片的 API 密钥，搜索和公共交通的数据源，以及上传允许的文件类型。',
  'help.ctx.admin-settings.bullet.1':
    '“登录方式”：“密码登录”“密码注册”“SSO 登录”“SSO 自动创建账户”和“要求双因素身份验证（2FA）”。',
  'help.ctx.admin-settings.bullet.2':
    '“单点登录 (OIDC)”填颁发者、客户端和显示名称；“通行密钥登录”填 Relying Party ID 和来源。',
  'help.ctx.admin-settings.bullet.3':
    '“API 密钥”：Google Maps、Unsplash 和高德地图，各自带“测试”；“该密钥的用途”把 Google 密钥限定在你愿意付费的功能上。',
  'help.ctx.admin-settings.bullet.4':
    '“地点搜索源”和“公共交通数据源”决定由谁响应搜索和路线；“允许的文件类型”限制上传。',
  'help.ctx.admin-addons.title': '扩展',
  'help.ctx.admin-addons.summary':
    'TREK 的功能模块，每个都有一个开关：列表、费用、文档、Vacay、Atlas、协作、旅程、收藏、公路旅行、MCP、AirTrail、Dawarich 和 AI 解析。关掉后，导航项、路由和 API 对所有人都消失。',
  'help.ctx.admin-addons.bullet.1': '每个扩展一张卡片，带开关；有选项的还有子行。',
  'help.ctx.admin-addons.bullet.2':
    '照片提供商和文档提供商也以卡片的形式出现在这里，这样可以向用户提供 Immich 或 Synology。',
  'help.ctx.admin-addons.bullet.3': '“行李追踪”在卡片下方有自己的开关。',
  'help.ctx.admin-plugins.title': '插件',
  'help.ctx.admin-plugins.summary':
    '在 TREK 旁边以独立进程运行的第三方插件，每个都带有安装时申请的权限。可以从目录安装、上传一个包，或在开发时链接一个文件夹。',
  'help.ctx.admin-plugins.bullet.1':
    '列表：每个已安装的插件，带版本、状态、签名和它持有的权限；每行可以激活、停用、更新或卸载。',
  'help.ctx.admin-plugins.bullet.2': '“上传插件”接收一个包文件；“重新扫描”会拾取为开发而链接的插件文件夹。',
  'help.ctx.admin-plugins.bullet.3': '每个插件的“允许的主机”：插件可以调用的地址，因为对外访问默认被拒绝。',
  'help.ctx.admin-storage.title': '存储',
  'help.ctx.admin-storage.summary':
    '上传文件存放的地方：本地磁盘、S3 存储桶，或者同时写入两者的镜像。每个上传分类可以走不同的后端，“健康状态”告诉你是否每个后端都在响应。',
  'help.ctx.admin-storage.bullet.1':
    '“后端”：每个后端的名称和类型，带“测试”“编辑”和“移除”；由环境变量设定的后端在这里是只读的。',
  'help.ctx.admin-storage.bullet.2':
    '“分类”：封面、文档、旅程照片等，每一类都指派给一个后端；改动某一类时会提议迁移现有文件。',
  'help.ctx.admin-storage.bullet.3': '“健康状态”：每个后端一项检查，还有一个种子文件，证明配置就是服务器所看到的配置。',
  'help.ctx.admin-notifications.title': '通知',
  'help.ctx.admin-notifications.summary':
    '实例向用户提供的渠道，以及能联系到你这位管理员的渠道。用户在“设置”里选自己的主题和 URL；你决定有哪些渠道，并配置邮件。',
  'help.ctx.admin-notifications.bullet.1':
    '“应用内通知”“电子邮件（SMTP）”“Ntfy”和“Webhook”：各一个面板，带一个向用户开放该渠道的开关，以及它需要的服务器端配置。',
  'help.ctx.admin-notifications.bullet.2': '“行程提醒”：服务器是否在行程开始前发送提醒。',
  'help.ctx.admin-notifications.bullet.3':
    '“管理员 Ntfy”和“管理员 Webhook”：备份失败或新版本发布这类管理员事件的去向，带“测试”。',
  'help.ctx.admin-mcp-tokens.title': 'MCP 访问',
  'help.ctx.admin-mcp-tokens.summary':
    'AI 客户端针对这个 TREK 持有的每个令牌和 OAuth 会话，覆盖所有用户，并且可以撤销其中任何一个。',
  'help.ctx.admin-mcp-tokens.bullet.1': '“API 令牌”：谁创建的、最近何时使用，以及“删除”。',
  'help.ctx.admin-mcp-tokens.bullet.2': '“OAuth 会话”：客户端、用户和被授予的范围，以及“撤销”。',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'TREK 有什么新内容：来自 GitHub 的版本历史、你运行的版本，以及是否有更新的版本。更新本身在应用之外、在主机上进行。',
  'help.ctx.admin-github.bullet.1': '“版本历史”列出各个版本及其说明；最新的一个带“最新”，你的版本会被标出。',
  'help.ctx.admin-github.bullet.2':
    '一旦有更新的版本，页眉会出现“有可用更新”，并附上 Docker 和其他安装方式的更新方法。',
  'help.ctx.admin-backup.title': '备份',
  'help.ctx.admin-backup.summary':
    '数据库和上传文件的完整备份，可手动或定时创建，保存在服务器上，并可作为单个文件下载。“恢复”把备份放回去。',
  'help.ctx.admin-backup.bullet.1': '“数据备份”：“创建备份”，以及现有备份的列表，带“下载”“恢复”和删除。',
  'help.ctx.admin-backup.bullet.2': '“上传备份”导入在另一个实例上或更早某天制作的文件。',
  'help.ctx.admin-backup.bullet.3': '“自动备份”：开或关、间隔、时间和日期，以及保留多少个。',
  'help.ctx.admin-audit.title': '审计',
  'help.ctx.admin-audit.summary':
    '安全相关和管理事件的日志：登录和失败、MFA 变更、用户和设置变更、备份和恢复。只读，最新的在前。',
  'help.ctx.admin-audit.bullet.1': '每个事件一行，带时间、用户、操作、资源、IP 和详情。',
  'help.ctx.admin-audit.bullet.2': '“刷新”重新加载；“加载更多”继续往回翻。',
  // create-user
  'help.guide.create-user.title': '创建用户',
  'help.guide.create-user.goal': '不用邀请，手动添加一个账户。',
  'help.guide.create-user.step.1': '点击“用户”标签页顶部的“创建用户”。',
  'help.guide.create-user.step.2': '输入“用户名”“邮箱”和“密码”，并选择“角色”：“用户”或“管理员”。',
  'help.guide.create-user.step.3': '点击“创建用户”。',
  'help.guide.create-user.result': '账户出现在表格里，可以立即登录；请通过你信任的渠道把密码交给对方。',
  'help.guide.create-user.tip.1': '对于应该自己选密码的人，邀请链接是更好的入口。',
  'help.guide.create-user.tip.2': '管理员能看到这个页面和审计日志；其他一切对两种角色都一样。',
  // edit-user
  'help.guide.edit-user.title': '更改用户的角色或密码',
  'help.guide.edit-user.goal': '提升或降级某人，或在对方丢失密码后让其重新登录。',
  'help.guide.edit-user.step.1': '点击该用户所在行的铅笔。“编辑用户”会带着账户详情打开。',
  'help.guide.edit-user.step.2':
    '更改“角色”，设置“新密码”，或者在对方丢失了存放通行密钥的设备时点击“重置通行密钥”，然后“保存”。',
  'help.guide.edit-user.result': '更改从下一次请求起生效；新密码从下一次登录起可用。',
  'help.guide.edit-user.tip.1': '只要你还是最后一位管理员，就不能去掉自己的管理员角色。',
  'help.guide.edit-user.tip.2': '重置通行密钥会保留密码；对方在“设置”的“账户”里添加新的通行密钥。',
  // invite-links
  'help.guide.invite-links.title': '用链接邀请某人',
  'help.guide.invite-links.goal': '让一个人在封闭实例上注册，还可以让其直接进入某个行程。',
  'help.guide.invite-links.step.1': '在“邀请链接”下点击“创建链接”。',
  'help.guide.invite-links.step.2': '设置“最大使用次数”和“有效期”，可选地“添加到行程（可选）”，然后点击“创建并复制”。',
  'help.guide.invite-links.step.3':
    '把链接发出去。每一行显示它被使用了多少次以及由谁创建；“复制链接”可再次复制，用完或过期的链接会被标出。',
  'help.guide.invite-links.result': '打开链接的人用自己的密码注册，如果选了行程，就会直接加入。',
  'help.guide.invite-links.tip.1': '即使“设置”里关闭了“密码注册”，邀请链接也照样有效。',
  'help.guide.invite-links.tip.2': '只用一次、有效期很短的链接，是给单个人的最安全默认。',
  // delete-user
  'help.guide.delete-user.title': '删除用户',
  'help.guide.delete-user.goal': '移除一个账户以及只属于它的一切。',
  'help.guide.delete-user.step.1': '点击该用户所在行的垃圾桶图标，并确认“删除用户”。',
  'help.guide.delete-user.result': '账户、它自己的行程和旅程都没了；与他人共享的行程留给其余成员。',
  'help.guide.delete-user.tip.1': '没有撤销。不确定的话先做个备份。',
  'help.guide.delete-user.tip.2': '最后一位管理员不能被删除；先把别人设为管理员。',
  // permissions
  'help.guide.permissions.title': '决定谁可以做什么',
  'help.guide.permissions.goal': '按操作设定在这个 TREK 上允许哪个角色执行。',
  'help.guide.permissions.step.1':
    '在“权限设置”里，在对应分组中找到该操作，比如“旅行管理”下的“删除旅行”，然后选择级别：“所有人”“旅行成员”“旅行所有者”或“仅管理员”。改动过的行会标为“已自定义”。',
  'help.guide.permissions.step.2': '点击“保存”。“恢复默认”把每一行都放回内置级别。',
  'help.guide.permissions.result': '规则一次性对所有旅行生效；级别不够的人的按钮和菜单会消失。',
  'help.guide.permissions.tip.1': '“旅行所有者”指创建该旅行的人；管理员始终可以做任何事。',
  'help.guide.permissions.tip.2': '宁可降低级别，也不要删除成员：不能编辑的成员仍然可以查看和评论。',
  // default-map
  'help.guide.default-map.title': '为新用户设置地图默认值',
  'help.guide.default-map.goal': '让每个新账户不用个人令牌也有一张能用的地图。',
  'help.guide.default-map.step.1':
    '在“地图”下选择“地图引擎”；对于 Mapbox 或 MapLibre，设置“地图样式”“共享 Mapbox 令牌”和“高质量模式”；对于栅格地图，设置“地图模板”和“共享 CARTO 密钥”。',
  'help.guide.default-map.step.2':
    '在你改过的任何字段旁，“重置”恢复 TREK 自身的选择。左侧的“用户默认设置”对“颜色模式”、单位和货币做同样的事。',
  'help.guide.default-map.result': '新账户以这些设置起步；任何在“设置”里设过自己地图的人保留自己的。',
  'help.guide.default-map.tip.1': '在这里输入的令牌由所有没有自己令牌的人共用，所以留意它的配额。',
  'help.guide.default-map.tip.2': '从未动过地图标签页的现有账户也会遵循这些默认值。',
  // packing-templates
  'help.guide.packing-templates.title': '创建打包模板',
  'help.guide.packing-templates.goal': '让行程有一份可以起步的打包清单，而不是空白一片。',
  'help.guide.packing-templates.step.1': '点击“新建模板”，输入名称，用对勾确认。',
  'help.guide.packing-templates.step.2': '打开模板并点击“添加分类”；每个分类下的 + 添加物品，物品只需要一个名称。',
  'help.guide.packing-templates.step.3': '一切随手保存。铅笔重命名模板、分类或物品，垃圾桶删除它。',
  'help.guide.packing-templates.result': '每个行程的打包清单都会提供这个模板；套用时会复制物品，所以行程可以随意修改。',
  'help.guide.packing-templates.tip.1': '按行程类型各建一个模板，比如海滩、城市、徒步，胜过一份巨大的清单。',
  'help.guide.packing-templates.tip.2': '删除模板不影响已经套用它的行程。',
  // categories
  'help.guide.categories.title': '管理分类集合',
  'help.guide.categories.goal': '决定地点和收藏可以带哪些分类，以及它们的样子。',
  'help.guide.categories.step.1': '点击“新建分类”，起个名字，选一个图标和一种颜色；“预览”显示效果。点击“创建”。',
  'help.guide.categories.step.2': '把鼠标悬停在列表中的分类上即可编辑或删除。删除会要求确认。',
  'help.guide.categories.result': '这个集合同时应用到所有地方：地点检视器、地图图钉、收藏和筛选器。',
  'help.guide.categories.tip.1': '地点保留的是分类 ID，所以重命名一个分类会在每个地点上一并改名。',
  'help.guide.categories.tip.2': '被删除的分类会让它的地点没有分类；如果这很重要，先重新指派。',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': '手动维护学校假期',
  'help.guide.school-holiday-catalog.goal': '补上内置假期数据源没有覆盖的国家或地区。',
  'help.guide.school-holiday-catalog.step.1':
    '在“学校假期”下点击“添加国家”，输入“国家”和它的“国家代码（如 US）”，然后“保存”；再为每个有差异的部分“添加地区”。',
  'help.guide.school-holiday-catalog.step.2':
    '点击一个地区打开“地区或学区”：“添加假期”，为每一段填上“假期名称”“开始日期”和“结束日期”，然后“保存”。垃圾桶移除一段假期、一个地区，或者一个已经没有地区的国家。',
  'help.guide.school-holiday-catalog.result': '用户在 Vacay 的“设置”里能找到该国家和地区，并在年历网格上看到这些假期。',
  'help.guide.school-holiday-catalog.tip.1':
    '来自内置数据源的地区不能在这里编辑；如果某个日期有误，就在旁边添加一个手动地区。',
  // auth-methods
  'help.guide.auth-methods.title': '决定人们如何登录',
  'help.guide.auth-methods.goal': '开放或关闭密码登录、SSO 和注册，并要求 2FA。',
  'help.guide.auth-methods.step.1':
    '在“登录方式”下打开或关闭“密码登录”和“密码注册”。关闭注册意味着新账户只能通过邀请链接、SSO 或手动创建。',
  'help.guide.auth-methods.step.2':
    '“SSO 登录”和“SSO 自动创建账户”需要在下方配置好“单点登录 (OIDC)”；自动创建账户会在某人第一次通过 SSO 登录时创建账户。',
  'help.guide.auth-methods.step.3':
    '“要求双因素身份验证（2FA）”让每个密码登录的用户在下次登录时设置验证器。“通行密钥登录”需要 Relying Party ID 以及访问你的 TREK 所用的来源。',
  'help.guide.auth-methods.result': '登录页面只提供你保持开启的那些方式。',
  'help.guide.auth-methods.tip.1': '在你把自己锁在门外之前会出现警告：至少会保留一条管理员的登录途径。',
  'help.guide.auth-methods.tip.2': '通过环境变量设置的值在这里显示为只读。',
  // oidc
  'help.guide.oidc.title': '接入单点登录',
  'help.guide.oidc.goal': '让人们用你的身份提供商登录。',
  'help.guide.oidc.step.1':
    '在“单点登录 (OIDC)”下输入按钮的“显示名称”，以及来自你的提供商的“颁发者 URL”“Client ID”和“Client Secret”，然后“保存”。',
  'help.guide.oidc.step.2': '在“登录方式”下打开“SSO 登录”。',
  'help.guide.oidc.result': '登录页面显示 SSO 按钮；开启“SSO 自动创建账户”后，首次登录的用户会自动获得账户。',
  'help.guide.oidc.tip.1': '你的提供商需要的重定向 URI 是你的 TREK 地址加上文档里的 OIDC 回调路径。',
  'help.guide.oidc.tip.2': '声明映射决定哪些 SSO 群组成为管理员；见文档中的 OIDC 页面。',
  // instance-keys
  'help.guide.instance-keys.title': '输入 API 密钥',
  'help.guide.instance-keys.goal': '为整个实例解锁 Google 地点搜索、Unsplash 封面和高德地图。',
  'help.guide.instance-keys.step.1': '在“API 密钥”下粘贴“Google Maps API 密钥”并点击“测试”；字段会告诉你密钥是否响应。',
  'help.guide.instance-keys.step.2':
    '在“该密钥的用途”下只打开你愿意用该密钥付费的功能：自动补全、详情、照片、信息补充、地点搜索记录。',
  'help.guide.instance-keys.step.3':
    '“Unsplash API 密钥”驱动封面搜索；“高德地图 API Key”驱动中国境内的地点搜索。用同样的方式逐个测试。',
  'help.guide.instance-keys.result':
    '用户无需自己的密钥就能使用这些功能；没有 Google 密钥时，TREK 通过免费的 OpenStreetMap 组件和 TREK Places API 搜索。',
  'help.guide.instance-keys.tip.1': '用户在“设置”里的个人密钥对该用户来说优先于实例密钥。',
  'help.guide.instance-keys.tip.2': '密钥也可以来自环境变量；那些在这里显示为只读。',
  // places-transit
  'help.guide.places-transit.title': '选择搜索和公共交通数据源',
  'help.guide.places-transit.goal': '决定由谁响应地点搜索和公共交通路线。',
  'help.guide.places-transit.step.1':
    '在“地点搜索源”下选择“自动”“Google Places”“高德地图”或“OpenStreetMap”。“自动”使用现有的最佳密钥。',
  'help.guide.places-transit.step.2':
    '在“公共交通数据源”下选择“Transitous（免费）”，全球可用且无需密钥，或者“Google”，需要 Google 密钥。',
  'help.guide.places-transit.result': 'TREK 里的每个搜索框和每条公共交通路线都遵循这个选择。',
  'help.guide.places-transit.tip.1': '缺少密钥的数据源会在这里显示警告，并回退到 OpenStreetMap。',
  'help.guide.places-transit.tip.2': 'Google 的公共交通路线按请求计费；Transitous 不计费。',
  // file-types
  'help.guide.file-types.title': '限制文件类型',
  'help.guide.file-types.goal': '决定上传允许哪些文件扩展名。',
  'help.guide.file-types.step.1': '在“允许的文件类型”下编辑以逗号分隔的扩展名列表并保存。',
  'help.guide.file-types.result': '其他类型的上传会被明确的提示拒绝，无论是在文档、旅程还是封面里。',
  'help.guide.file-types.tip.1': '把图片类型留在列表里；封面和旅程照片走的是同一道检查。',
  // toggle-addon
  'help.guide.toggle-addon.title': '开启或关闭扩展',
  'help.guide.toggle-addon.goal': '把一个功能模块提供给所有人，或者收回。',
  'help.guide.toggle-addon.step.1': '拨动扩展卡片上的开关。导航项对所有人同时出现或消失。',
  'help.guide.toggle-addon.step.2':
    '有些卡片带有选项子行，比如“列表”下的“行李追踪”或“旅程”下的照片提供商；它们只在扩展开启时显示。',
  'help.guide.toggle-addon.result': '关闭的扩展的数据会保留；重新开启后再次显示。',
  'help.guide.toggle-addon.tip.1': '关闭 MCP 会移除端点以及依赖它的“集成”部分。',
  'help.guide.toggle-addon.tip.2': 'Vacay、Atlas 和旅程是用户要得最多的扩展；文档需要存储来放上传文件。',
  // install-plugin
  'help.guide.install-plugin.title': '安装插件',
  'help.guide.install-plugin.goal': '添加一个第三方插件，并只给它申请的权限。',
  'help.guide.install-plugin.step.1':
    '打开“发现”，选一个插件并点击“安装”；或者点击“上传插件”，选择一个 .zip 或 .tar.gz 包。',
  'help.guide.install-plugin.step.2':
    '回到“已安装”，阅读该行：插件可以读写什么、它调用哪些主机，以及是否已签名。打开“启用插件”。',
  'help.guide.install-plugin.step.3':
    '该行的菜单提供“重启”“查看错误日志”“允许的主机”和“更换版本…”；“删除”卸载它。有新版本时该行会提供更新，申请新权限的更新在你批准之前保持关闭。',
  'help.guide.install-plugin.result':
    '插件在自己的进程里运行；它添加的内容，如小组件、地图图层、工具，出现在插件声明的位置。',
  'help.guide.install-plugin.tip.1': '“重新扫描”不需要包，直接拾取为开发而链接的插件文件夹。',
  'help.guide.install-plugin.tip.2': '未签名的插件会被这样标出；只在你信任其来源时才安装。',
  // storage-backends
  'help.guide.storage-backends.title': '把上传文件迁到 S3 或镜像',
  'help.guide.storage-backends.goal': '把文件放在对象存储上，或者同时放在磁盘和存储桶上。',
  'help.guide.storage-backends.step.1':
    '在“后端”下点击“添加后端”，起个“名称”，选择“类型”：“本地”“S3”或“镜像”，填好字段并“应用”。“测试”检查连接，“保存更改”写入配置。',
  'help.guide.storage-backends.step.2':
    '在“分类”下把每个上传分类指派给一个后端。改动某一类时会询问是“移动现有对象”还是“仅路由新写入”。',
  'help.guide.storage-backends.step.3': '顶部的“健康状态”检查每个后端；红色条目会指出失败的是什么。',
  'help.guide.storage-backends.result': '新的上传进入指派的后端；已迁移的文件从那里提供。',
  'help.guide.storage-backends.tip.1': '通过环境变量配置的后端会显示出来，但不能在这里编辑。',
  'help.guide.storage-backends.tip.2': '镜像写入两个目标，从第一个读取；用它可以不停机地迁移。',
  // channels-instance
  'help.guide.channels-instance.title': '配置通知渠道',
  'help.guide.channels-instance.goal': '决定用户可以选哪些渠道，并设置邮件。',
  'help.guide.channels-instance.step.1':
    '在“电子邮件（SMTP）”下输入 SMTP Host、SMTP Port、SMTP User、SMTP Password 和 From Address；“发送测试邮件”会给你发一封邮件。',
  'help.guide.channels-instance.step.2':
    '打开“Ntfy”和“Webhook”以提供它们；用户随后在“设置”的“通知”里输入自己的主题或 URL。',
  'help.guide.channels-instance.step.3': '“行程提醒”开关行程开始前的提醒；“应用内通知”始终开启，这里只是说明。',
  'help.guide.channels-instance.result': '每个用户的“通知”标签页会显示你开启的渠道。',
  'help.guide.channels-instance.tip.1': '在这里输入的默认 ntfy 服务器会为用户预填；他们仍然可以指定自己的。',
  'help.guide.channels-instance.tip.2': '一旦具备该能力的插件被激活，插件渠道会自行出现。',
  // admin-channels
  'help.guide.admin-channels.title': '在手机上接收管理员事件',
  'help.guide.admin-channels.goal': '得知备份失败、新版本发布和其他实例事件。',
  'help.guide.admin-channels.step.1':
    '在“管理员 Ntfy”下输入一个主题，如有需要再填服务器和令牌；在“管理员 Webhook”下输入一个 URL。',
  'help.guide.admin-channels.step.2': '点击“发送测试 Ntfy”或“发送测试 Webhook”，看消息是否到达。',
  'help.guide.admin-channels.result': '管理员事件除了发到每位管理员的应用内铃铛之外，也会发到那里。',
  'help.guide.admin-channels.tip.1': '把管理员主题和你的个人主题分开，这样故障通知不会淹没在行程消息里。',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': '撤销 AI 访问',
  'help.guide.mcp-tokens-admin.goal': '查看并切断任何用户的 AI 客户端持有的每个令牌和会话。',
  'help.guide.mcp-tokens-admin.step.1': '在“API 令牌”下按用户和名称找到令牌；垃圾桶删除它，客户端立即停止。',
  'help.guide.mcp-tokens-admin.step.2':
    '在“OAuth 会话”下对基于浏览器的客户端做同样的事：客户端、用户和日期，垃圾桶撤销会话。',
  'help.guide.mcp-tokens-admin.result': '客户端必须由它的用户重新连接；其他一切不变。',
  'help.guide.mcp-tokens-admin.tip.1': '范围告诉你客户端能做什么；只读范围留着无妨。',
  'help.guide.mcp-tokens-admin.tip.2': '关闭 MCP 扩展会一次撤销所有内容。',
  // release-history
  'help.guide.release-history.title': '检查新版本',
  'help.guide.release-history.goal': '知道你的 TREK 是否最新，以及下一个版本带来什么。',
  'help.guide.release-history.step.1':
    '有更新的版本时，管理页面顶部会显示“有可用更新”；“在 GitHub 查看”打开它，“如何更新”说明 Docker 和其他安装方式的更新步骤。',
  'help.guide.release-history.step.2':
    '“版本历史”列出每个版本及其说明；“显示详情”展开它们，最新的一个带“最新”，“加载更多”继续往回翻。',
  'help.guide.release-history.result': '更新在主机上进行，拉取新镜像或构建新标签；数据目录保持不变。',
  'help.guide.release-history.tip.1': '更新前先做备份；“备份”标签页就在隔壁。',
  'help.guide.release-history.tip.2': '预发布版本会显示，但除非你正在运行一个预发布版本，否则不会作为更新通告。',
  // create-backup
  'help.guide.create-backup.title': '创建并恢复备份',
  'help.guide.create-backup.goal': '给整个实例做快照，在别处留一份副本，并且能够放回去。',
  'help.guide.create-backup.step.1': '在“数据备份”下点击“创建备份”。它把数据库和上传文件打包成服务器上的一个文件。',
  'help.guide.create-backup.step.2': '“下载”把副本保存到这台机器之外；垃圾桶删除旧备份以释放空间。',
  'help.guide.create-backup.step.3': '对某个备份点“恢复”，或用文件“上传备份”，在“恢复备份？”确认一次后替换当前数据。',
  'help.guide.create-backup.result': '恢复会把用户、行程、文件和设置带回到那个备份的时刻；所有人都会被登出。',
  'help.guide.create-backup.tip.1': '恢复是这里唯一无法撤销的操作。先做一个新的备份。',
  'help.guide.create-backup.tip.2': '备份存放在数据目录里；只有放到另一台机器上的副本才算真正的备份。',
  // auto-backup
  'help.guide.auto-backup.title': '定时备份',
  'help.guide.auto-backup.goal': '让服务器自行备份，并只保留最近几个。',
  'help.guide.auto-backup.step.1':
    '在“自动备份”下打开“启用自动备份”，选择“间隔”“执行时间”，以及每周或每月时的“星期几”或“每月几号”。',
  'help.guide.auto-backup.step.2': '“自动删除旧备份”设置备份保留多久；新备份生成时，更旧的会被删除。',
  'help.guide.auto-backup.result': '备份按计划出现在列表里；失败会发到管理员渠道。',
  'help.guide.auto-backup.tip.1': '时间遵循服务器的时区，显示在“审计”标签页里。',
  'help.guide.auto-backup.tip.2': '服务器上的存储是有限的；保留三到五个通常就够了。',
  // audit-log
  'help.guide.audit-log.title': '阅读审计日志',
  'help.guide.audit-log.goal': '弄清谁在什么时候做了什么。',
  'help.guide.audit-log.step.1':
    '阅读各行：时间、用户、操作、资源、IP 和详情，最新的在前。操作按发生的事情命名，比如登录失败、MFA 变更或恢复。',
  'help.guide.audit-log.step.2': '“刷新”重新加载顶部；“加载更多”继续往回翻。',
  'help.guide.audit-log.result': '一份可以交给任何询问为什么有变动的人的记录。',
  'help.guide.audit-log.tip.1': '时间以服务器的时区显示，时区名称在表格上方。',
  'help.guide.audit-log.tip.2': '日志只增不改；这里的任何内容都不能从应用里编辑或删除。',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': '旅行',
  'help.ctx.trip.summary':
    '一次旅行的全部：包含天数、地图和地点的计划，以及交通、预订、列表、费用、文件和协作的标签页。它们每一个都有自己的帮助页面，就在本页面下方。',
  'help.ctx.trip.bullet.1':
    '标签栏：“计划”“交通”“预订”“列表”“费用”“文件”和“协作”。哪些标签页存在，由你的 TREK 上的扩展和插件决定。',
  'help.ctx.trip.bullet.2':
    '“计划”是三栏：左边是天数，中间是地图，右边是地点。预订和交通就住在计划里，位于停靠点上和停靠点之间；标签页把它们列出来。',
  'help.ctx.trip.bullet.3': '右上角的“分享”打开旅行里的人：成员、访客、邀请链接和只读的公开链接。',
  'help.ctx.trip.bullet.4': '标题、日期、封面和货币在“我的旅行”里编辑，用旅行卡片上的铅笔。',
  'help.ctx.trip.bullet.5': '栏内侧边缘的折叠箭头把这一栏收起来，地图占据空间；栏旁边的细分隔线改变它的宽度。',
  'help.ctx.trip.bullet.6': '天数工具栏里的撤销箭头收回对计划的上一次更改。',
  // add-member
  'help.guide.add-member.title': '添加成员',
  'help.guide.add-member.goal': '让有 TREK 账户的人可以访问这次旅行。',
  'help.guide.add-member.step.1': '点击右上角的“分享”。',
  'help.guide.add-member.step.2': '在“邀请用户”下，从列表中选中此人并点击“邀请”。',
  'help.guide.add-member.step.3': '此人现在出现在“访问权限”下。皇冠标记所有者；行末的图标可再次移除访问权限。',
  'help.guide.add-member.result': '成员像你一样查看和编辑旅行，范围在管理员于“权限设置”下设定的级别之内。',
  'help.guide.add-member.tip.1': '列表里没有的人还没有 TREK 账户：把他们添加为访客，或者让他们通过邀请链接注册。',
  'help.guide.add-member.tip.2': '“访问权限”旁边的数字统计旅行里的人数；访客在下方单独列出。',
  // trip-invite-link
  'help.guide.trip-invite-link.title': '通过链接邀请',
  'help.guide.trip-invite-link.goal': '让别人自己加入旅行。',
  'help.guide.trip-invite-link.step.1': '点击“分享”，然后在“行程邀请链接”下点击“创建邀请链接”。',
  'help.guide.trip-invite-link.step.2': '点击“复制”并发送链接。任何有 TREK 账户的人打开它就会以成员身份加入。',
  'help.guide.trip-invite-link.step.3': '“重新生成”会替换链接并让旧链接失效；“停用”会关闭它。',
  'help.guide.trip-invite-link.result': '打开链接的人就在旅行里了，并显示在“访问权限”下。',
  'help.guide.trip-invite-link.tip.1':
    '没有账户的人用不了它。管理员在“管理后台”、“用户”下分发注册链接，并可以把其中一个绑定到这次旅行。',
  'help.guide.trip-invite-link.tip.2': '链接发错了聊天时就重新生成：旧链接立刻失效。',
  // add-guest
  'help.guide.add-guest.title': '添加没有账户的访客',
  'help.guide.add-guest.goal': '把一个不用 TREK 的人算进来。',
  'help.guide.add-guest.step.1': '点击“分享”并滚动到“访客”。',
  'help.guide.add-guest.step.2': '在“访客姓名”中输入名字，然后点击“添加访客”。',
  'help.guide.add-guest.result': '访客可以被分配到费用、行李物品和任务，但无法登录。',
  'help.guide.add-guest.tip.1': '铅笔可以给访客改名；行末的图标会把他们连同其分摊和分配一起移除。',
  'help.guide.add-guest.tip.2': '如果这个人后来有了账户，就把他们邀请为成员，并移除访客。',
  // public-link
  'help.guide.public-link.title': '发布只读链接',
  'help.guide.public-link.goal': '把旅行展示给不应编辑它的人。',
  'help.guide.public-link.step.1':
    '点击“分享”；在右侧的“公开链接”下，勾选链接可以显示的内容。“地图与计划”始终开启；“预订”“行李”“费用”和“聊天”由你决定。',
  'help.guide.public-link.step.2': '点击“创建链接”，然后点击“复制”。',
  'help.guide.public-link.step.3': '链接存在期间可以随时更改勾选；“删除链接”会让它停止。',
  'help.guide.public-link.result': '任何有链接的人无需登录就能看到所选部分，并且什么都改不了。',
  'help.guide.public-link.tip.1': '这个链接不会列在任何地方；谁拿到它都能打开，所以要像对待密码一样对待它。',
  'help.guide.public-link.tip.2': '要给编辑权限，就改为把此人添加为成员。',
  // transfer-ownership
  'help.guide.transfer-ownership.title': '移交旅行或退出旅行',
  'help.guide.transfer-ownership.goal': '让别人成为所有者，或者退出一次不属于你的旅行。',
  'help.guide.transfer-ownership.step.1': '点击“分享”。在“访问权限”下，成员行上的皇冠会让此人成为所有者；确认提问。',
  'help.guide.transfer-ownership.step.2': '你自己那一行上的“退出旅行”会把你带出旅行；作为所有者，请先移交。',
  'help.guide.transfer-ownership.result': '新所有者管理成员并可以删除旅行；你仍是普通成员。',
  'help.guide.transfer-ownership.tip.1': '在移交之前，所有者就是创建旅行的人；删除旅行只有所有者能做。',
  'help.guide.transfer-ownership.tip.2': '另一行上的“移除访问权限”是同一个按钮的反向操作：所有者把成员请出去。',
  // collapse-columns
  'help.guide.collapse-columns.title': '给地图腾出空间',
  'help.guide.collapse-columns.goal': '收起一栏，或者给它更多宽度。',
  'help.guide.collapse-columns.step.1':
    '点击天数栏内侧边缘的折叠箭头把它收起来；地图占据这块空间。地点栏有同样的箭头。',
  'help.guide.collapse-columns.step.2': '再次点击折叠箭头，把这一栏找回来。',
  'help.guide.collapse-columns.step.3': '拖动栏与地图之间的细分隔线来改变栏的宽度。',
  'help.guide.collapse-columns.result': '宽度会被记住；下次访问时各栏会恢复展开。',
  'help.guide.collapse-columns.tip.1': '两栏可以同时收起，得到只有地图的视图。',
  'help.guide.collapse-columns.tip.2': '手机上没有栏：“计划”和“地点”是地图底部的两个按钮。',
  // undo-change
  'help.guide.undo-change.title': '撤销上一次更改',
  'help.guide.undo-change.goal': '收回你刚刚对计划做的事。',
  'help.guide.undo-change.step.1': '点击天数上方工具栏里的撤销箭头；它的提示会写出将要收回的更改。',
  'help.guide.undo-change.result': '计划恢复原样，箭头变灰，直到下一次更改。',
  'help.guide.undo-change.tip.1': '撤销覆盖计划：分配、移除、重新排序和移动地点，优化路线，删除地点，类别更改和导入。',
  'help.guide.undo-change.tip.2': '它只有一步深：只能收回最新的一次更改，新的更改会取代它。',
};

export default help;
