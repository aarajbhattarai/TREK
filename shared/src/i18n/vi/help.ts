import type { TranslationStrings } from '../types';

const help: TranslationStrings = {
  'help.title': 'Trợ giúp & Tài liệu',
  'help.search': 'Tìm trong tài liệu…',
  'help.contents': 'Nội dung',
  'help.noResults': 'Không có trang nào phù hợp.',
  'help.errorTitle': 'Không thể tải trang này',
  'help.errorBody': 'Nội dung trợ giúp được lấy từ wiki TREK. Hãy kiểm tra kết nối và thử lại.',

  // center
  'help.center.button': 'Trợ giúp cho màn hình này',
  'help.center.title': 'Trợ giúp',
  'help.center.onThisScreen': 'Trên màn hình này',
  'help.center.screens': 'Màn hình',
  'help.center.thisScreen': 'Màn hình này',
  'help.center.subScreens': 'Màn hình con: {count}',
  'help.center.subScreensLabel': 'Màn hình con',
  'help.center.guidesCount': '{count} hướng dẫn',
  'help.center.goToScreen': 'Đi tới {screen}',
  'help.center.overview': 'Tổng quan',
  'help.center.howTo': 'Làm thế nào để…',
  'help.center.searchPlaceholder': 'Tìm trong hướng dẫn và tài liệu…',
  'help.center.searchEmpty': 'Không tìm thấy gì cho “{query}”.',
  'help.center.searchGuides': 'Hướng dẫn',
  'help.center.searchDocs': 'Tài liệu',
  'help.center.searchError': 'Hiện không thể tìm kiếm.',
  'help.center.back': 'Quay lại',
  'help.center.close': 'Đóng trợ giúp',
  'help.center.steps': '{count} bước',
  'help.center.step': 'Bước {n}',
  'help.center.stepsLabel': 'Các bước',
  'help.center.stepOf': 'Bước {n} / {total}',
  'help.center.screenshot': 'Ảnh chụp màn hình',
  'help.center.result': 'Kết quả',
  'help.center.tips': 'Nên biết',
  'help.center.related': 'Liên quan',
  'help.center.openDocs': 'Mở trong Trợ giúp & Tài liệu',
  'help.center.docsSection': 'Trong tài liệu',
  'help.center.noContext': 'Chưa có hướng dẫn cho màn hình này.',
  'help.center.noContextHint': 'Tìm trong tài liệu, hoặc cho chúng tôi biết bạn đang tìm gì.',
  'help.center.feedback': 'Thiếu gì đó?',
  'help.center.feedbackLink': 'Cho chúng tôi biết trên GitHub',
  'help.center.discord': 'Hỏi trên Discord',
  'help.center.quick': 'Nhanh',
  'help.center.guide': 'Hướng dẫn',
  'help.center.tour': 'Video hướng dẫn',
  'help.center.imageAlt': 'Bước {n} của “{title}”',

  // ctx
  'help.ctx.dashboard.title': 'Bảng điều khiển',
  'help.ctx.dashboard.summary':
    'Bảng điều khiển là cửa ngõ vào mọi chuyến đi. Thẻ lên máy bay ở trên cùng nổi bật chuyến đi đang diễn ra hoặc sắp tới, hàng bên dưới thống kê những gì bạn đã đi, và các thẻ liệt kê mọi thứ bạn đang lên kế hoạch, đã lưu trữ hoặc đã hoàn thành.',
  'help.ctx.dashboard.bullet.1':
    'Thẻ lên máy bay: chuyến đi đang diễn ra hoặc sắp tới với ngày tháng, người đi cùng, địa điểm và đếm ngược. Nhấp vào để mở chuyến đi.',
  'help.ctx.dashboard.bullet.2':
    'Thống kê: quốc gia đã đến, số chuyến đi, số ngày trên đường và quãng đường bay, tính trên tất cả chuyến đi của bạn.',
  'help.ctx.dashboard.bullet.3':
    'Thẻ chuyến đi, lọc theo Đã lên kế hoạch, Đã lưu trữ và Hoàn thành, dạng lưới hoặc danh sách. Di chuột lên thẻ để chỉnh sửa, nhân bản, lưu trữ và xóa.',
  'help.ctx.dashboard.bullet.4':
    'Tiện ích bên phải: đổi tiền tệ, đồng hồ thế giới, đặt chỗ sắp tới và bộ sưu tập. Mỗi tiện ích đều có thể tắt.',
  'help.ctx.dashboard.bullet.5': 'Thẻ “Chuyến đi mới” và nút ở góc dưới bên phải đều tạo một chuyến đi mới.',

  // create-trip
  'help.guide.create-trip.title': 'Tạo chuyến đi',
  'help.guide.create-trip.goal': 'Bắt đầu một chuyến đi mới với tên, ngày tháng và ảnh bìa.',
  'help.guide.create-trip.step.1':
    'Nhấp “Chuyến đi mới”. Thẻ ở cuối danh sách chuyến đi và nút ở góc dưới bên phải làm cùng một việc.',
  'help.guide.create-trip.step.2':
    'Đặt tên cho chuyến đi. Đó là trường bắt buộc duy nhất; mọi thứ khác có thể thêm sau.',
  'help.guide.create-trip.step.3':
    'Chọn ngày bắt đầu và kết thúc. TREK tạo một ngày cho mỗi mốc, nên lịch trình đã sẵn sàng để điền.',
  'help.guide.create-trip.step.4':
    'Tùy chọn: thêm ảnh bìa. Tải ảnh của bạn lên, kéo thả vào, hoặc tìm điểm đến trên Unsplash.',
  'help.guide.create-trip.step.5': 'Nhấp “Tạo chuyến đi mới”.',
  'help.guide.create-trip.result':
    'Chuyến đi xuất hiện trên bảng điều khiển. Nếu là chuyến tiếp theo, nó sẽ chiếm thẻ lên máy bay ở trên cùng.',
  'help.guide.create-trip.tip.1':
    'Ngày tháng có thể đổi sau. Nếu đã có đặt chỗ, TREK sẽ hỏi có dời chúng cùng với các ngày hay không.',
  'help.guide.create-trip.tip.2':
    'Tiền tệ chuyến đi bạn chọn ở đây là đơn vị mà mọi chi phí được quy đổi về. Hãy chọn tiền tệ của điểm đến.',

  // edit-trip
  'help.guide.edit-trip.title': 'Chỉnh sửa chuyến đi',
  'help.guide.edit-trip.goal': 'Đổi tên chuyến đi, đổi ngày hoặc điều chỉnh cài đặt.',
  'help.guide.edit-trip.step.1': 'Di chuột lên thẻ chuyến đi (hoặc thẻ lên máy bay) và nhấp vào biểu tượng bút chì.',
  'help.guide.edit-trip.step.2': 'Thay đổi những gì cần: tên, mô tả, ngày, ảnh bìa, tiền tệ, nhắc nhở hoặc thành viên.',
  'help.guide.edit-trip.step.3': 'Nhấp “Cập nhật”.',
  'help.guide.edit-trip.result': 'Thẻ cập nhật ngay lập tức, cho mọi thành viên của chuyến đi.',
  'help.guide.edit-trip.tip.1':
    'Dời ngày của chuyến đi đã có đặt chỗ sẽ mở bước thứ hai hỏi có dời cả đặt chỗ theo hay không.',

  // cover-image
  'help.guide.cover-image.title': 'Đặt ảnh bìa',
  'help.guide.cover-image.goal': 'Gán cho chuyến đi một hình ảnh hiển thị trên thẻ và trên thẻ lên máy bay.',
  'help.guide.cover-image.step.1': 'Mở biểu mẫu chỉnh sửa chuyến đi bằng biểu tượng bút chì trên thẻ.',
  'help.guide.cover-image.step.2':
    'Trong “Ảnh bìa”, thả ảnh vào, nhấp để tải lên, hoặc gõ điểm đến vào ô tìm kiếm Unsplash.',
  'help.guide.cover-image.step.3': 'Chọn ảnh và nhấp “Cập nhật”.',
  'help.guide.cover-image.result': 'Ảnh được lưu cùng chuyến đi và hiển thị ở mọi nơi chuyến đi xuất hiện.',
  'help.guide.cover-image.tip.1':
    'Ảnh từ tìm kiếm Unsplash được ghi nguồn tự động; ảnh bạn tự tải lên nằm trên máy chủ của bạn.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Nhân bản chuyến đi',
  'help.guide.duplicate-trip.goal': 'Dùng lại một chuyến đi làm mẫu cho chuyến mới.',
  'help.guide.duplicate-trip.step.1': 'Di chuột lên thẻ và nhấp biểu tượng nhân bản.',
  'help.guide.duplicate-trip.step.2': 'Đọc những gì sẽ và sẽ không được sao chép, rồi xác nhận.',
  'help.guide.duplicate-trip.result': 'Một bản sao xuất hiện cạnh bản gốc, sẵn sàng để đổi tên và đổi ngày.',
  'help.guide.duplicate-trip.tip.1':
    'Ngày, địa điểm, đặt chỗ, khoản ngân sách, danh sách đồ đạc và ghi chú theo ngày được sao chép. Thành viên, trò chuyện, bình chọn, tệp và liên kết chia sẻ thì không.',

  // archive-trip
  'help.guide.archive-trip.title': 'Lưu trữ và khôi phục chuyến đi',
  'help.guide.archive-trip.goal': 'Cất chuyến đi đi mà không xóa, rồi lấy lại sau.',
  'help.guide.archive-trip.step.1': 'Di chuột lên thẻ và nhấp “Lưu trữ”.',
  'help.guide.archive-trip.step.2': 'Chuyển bộ lọc phía trên các thẻ sang “Đã lưu trữ” để thấy lại.',
  'help.guide.archive-trip.step.3': 'Nhấp “Khôi phục” trên thẻ để đưa nó về “Đã lên kế hoạch”.',
  'help.guide.archive-trip.result':
    'Chuyến đi đã lưu trữ giữ nguyên mọi thứ. Chúng chỉ không còn chiếm chỗ trên bảng điều khiển và trong nguồn lịch của tất cả chuyến đi.',

  // delete-trip
  'help.guide.delete-trip.title': 'Xóa chuyến đi',
  'help.guide.delete-trip.goal': 'Xóa hẳn một chuyến đi.',
  'help.guide.delete-trip.step.1': 'Di chuột lên thẻ và nhấp biểu tượng thùng rác.',
  'help.guide.delete-trip.step.2': 'Xác nhận. Hộp thoại nêu tên chuyến đi để bạn chắc chắn chọn đúng.',
  'help.guide.delete-trip.result':
    'Chuyến đi cùng các ngày, địa điểm, đặt chỗ và tệp sẽ biến mất. Không thể hoàn tác; nếu chưa chắc, hãy lưu trữ thay vì xóa.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Tìm chuyến đi đã hoàn thành, chuyển giữa lưới và danh sách',
  'help.guide.filter-and-view.goal': 'Xem các chuyến đi đã kết thúc hoặc đã lưu trữ và chọn bố cục bạn thích.',
  'help.guide.filter-and-view.step.1':
    'Dùng “Đã lên kế hoạch”, “Đã lưu trữ” và “Hoàn thành” phía trên các thẻ. Hoàn thành là mọi chuyến đi đã qua ngày kết thúc.',
  'help.guide.filter-and-view.step.2':
    'Nhấp biểu tượng danh sách để chuyển sang danh sách gọn; nhấp lại để về dạng lưới.',
  'help.guide.filter-and-view.result': 'Bảng điều khiển ghi nhớ bố cục của bạn trên thiết bị này.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Đăng ký tất cả chuyến đi vào lịch của bạn',
  'help.guide.calendar-feed.goal':
    'Xem ngày và đặt chỗ của mọi chuyến đi đang hoạt động trong ứng dụng lịch, luôn được đồng bộ.',
  'help.guide.calendar-feed.step.1': 'Nhấp biểu tượng lịch cạnh nút chuyển chế độ xem.',
  'help.guide.calendar-feed.step.2': 'Nhấp “Enable calendar subscription”. TREK tạo một liên kết nguồn lịch riêng tư.',
  'help.guide.calendar-feed.step.3':
    'Thêm nguồn lịch bằng một trong các nút (Google, Apple, Outlook) hoặc sao chép liên kết vào bất kỳ ứng dụng lịch nào hỗ trợ đăng ký qua URL.',
  'help.guide.calendar-feed.result':
    'Mọi chuyến đi đang hoạt động hiện trong lịch của bạn và tự cập nhật. Chuyến đi đã lưu trữ và chuyến đã kết thúc hơn 90 ngày sẽ không được đưa vào.',
  'help.guide.calendar-feed.tip.1':
    'Liên kết là bí mật. Ai có nó đều đọc được nguồn lịch; nếu bị lộ, hãy thu hồi trong cùng hộp thoại.',

  // widgets
  'help.guide.widgets.title': 'Chọn tiện ích cho bảng điều khiển',
  'help.guide.widgets.goal': 'Hiện hoặc ẩn hàng thống kê và các tiện ích bên phải.',
  'help.guide.widgets.step.1': 'Mở menu ảnh đại diện ở góc trên bên phải và chọn “Cài đặt”.',
  'help.guide.widgets.step.2': 'Chuyển sang thẻ “Giao diện”.',
  'help.guide.widgets.step.3':
    'Trong “Tiện ích bảng điều khiển”, bật hoặc tắt từng tiện ích. Máy tính và điện thoại được cài riêng.',
  'help.guide.widgets.step.4': 'Quay lại bảng điều khiển. Thay đổi có hiệu lực ngay.',
  'help.guide.widgets.result': 'Tiện ích bị ẩn nhường chỗ cho các chuyến đi; tắt toàn bộ cột phải để căn giữa bố cục.',
  'help.guide.widgets.link': 'Mở cài đặt giao diện',

  // currency-widget
  'help.guide.currency-widget.title': 'Đổi tiền tệ',
  'help.guide.currency-widget.goal': 'Quy đổi một số tiền giữa hai loại tiền tệ theo tỷ giá hiện tại.',
  'help.guide.currency-widget.step.1': 'Nhập số tiền và chọn hai loại tiền tệ.',
  'help.guide.currency-widget.step.2': 'Mũi tên ở giữa hoán đổi cặp tiền; mũi tên tròn làm mới tỷ giá.',
  'help.guide.currency-widget.result': 'Cặp tiền tệ được lưu trong tài khoản, nên giống nhau trên mọi thiết bị.',
  'help.guide.currency-widget.tip.1': 'Tỷ giá lấy từ Ngân hàng Trung ương châu Âu và cập nhật mỗi ngày một lần.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Thêm đồng hồ thế giới',
  'help.guide.timezones-widget.goal': 'Theo dõi giờ địa phương tại các điểm đến của bạn.',
  'help.guide.timezones-widget.step.1': 'Nhấp + trong tiện ích “Múi giờ” và tìm một thành phố.',
  'help.guide.timezones-widget.step.2': 'Xóa đồng hồ bằng dấu × bên cạnh.',
  'help.guide.timezones-widget.result': 'Đồng hồ của bạn được lưu cùng tài khoản.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay là công cụ lên kế hoạch nghỉ phép cá nhân của bạn: mỗi năm bạn có bao nhiêu ngày phép, đã ghi những ngày nào và còn lại bao nhiêu. Lưới hiển thị cả năm trong một cái nhìn; thanh bên có bộ chọn năm, những người cùng lên kế hoạch, lịch được chia sẻ với bạn, chú giải và số ngày phép của bạn.',
  'help.ctx.vacay.bullet.1':
    'Lưới năm: mười hai thẻ tháng, mỗi ngày một ô. Nhấp vào một ngày để ghi hoặc xóa. Chấm xanh nhỏ đánh dấu những ngày đã có chuyến đi.',
  'help.ctx.vacay.bullet.2':
    'Thanh công cụ ở dưới: chế độ “Kì nghỉ” hoặc “Kỳ nghỉ của công ty”, cùng các công tắc “Nửa ngày” và “Nghỉ bù” thay đổi nội dung mà một cú nhấp ghi lại.',
  'help.ctx.vacay.bullet.3':
    '“Quyền lợi”: ngày phép trong năm, đã dùng bao nhiêu và còn bao nhiêu, kèm số ngày chuyển từ kỳ trước.',
  'help.ctx.vacay.bullet.4':
    '“Người” là những người đã hợp nhất với kế hoạch của bạn, mỗi người một màu. “Lịch được chia sẻ” là các vòng chỉ đọc hiển thị ngày nghỉ của người khác.',
  'help.ctx.vacay.bullet.5':
    '“Cài đặt” gồm cuối tuần, ngày bắt đầu tuần, chuyển phép, năm nghỉ phép của bạn, nghỉ công ty và lịch ngày lễ hoặc nghỉ học.',
  // log-day
  'help.guide.log-day.title': 'Ghi một ngày nghỉ phép',
  'help.guide.log-day.goal': 'Đánh dấu một ngày nghỉ trong lưới năm và xem số dư thay đổi theo.',
  'help.guide.log-day.step.1':
    'Nhìn thanh công cụ ở dưới: nút bên trái mang màu của bạn nghĩa là một cú nhấp sẽ ghi một ngày phép cho bạn.',
  'help.guide.log-day.step.2':
    'Nhấp vào một ngày trong bất kỳ thẻ tháng nào. Ô được tô màu của bạn và “Đã dùng” tăng thêm một ngày.',
  'help.guide.log-day.step.3': 'Nhấp lại cùng ngày đó để xóa.',
  'help.guide.log-day.result':
    'Ngày được ghi, “Ngày”, “Đã dùng” và “Bên trái” cập nhật ngay, và mọi người hợp nhất với kế hoạch của bạn thấy ngay lập tức.',
  'help.guide.log-day.tip.1': 'Không thể ghi cuối tuần khi “Các ngày cuối tuần” đang bật trong “Cài đặt”.',
  'help.guide.log-day.tip.2':
    'Chấm xanh trong ô nghĩa là một chuyến đi của bạn trùng ngày đó, nên bạn thấy nghỉ phép và chuyến đi trùng nhau ở đâu.',
  // half-day
  'help.guide.half-day.title': 'Ghi nửa ngày',
  'help.guide.half-day.goal': 'Nghỉ một buổi chiều mà không tốn cả ngày phép.',
  'help.guide.half-day.step.1': 'Bật “Nửa ngày” trên thanh công cụ. Chấm cam là dấu mà nửa ngày nhận được trong lưới.',
  'help.guide.half-day.step.2': 'Nhấp vào một ngày. Nó được ghi là 0,5 và có chấm cam ở góc.',
  'help.guide.half-day.step.3':
    'Tắt “Nửa ngày” khi xong; nhấp vào một nửa ngày với cài đặt khác sẽ chuyển đổi nó tại chỗ.',
  'help.guide.half-day.result':
    '“Đã dùng” tăng 0,5. “Nửa ngày” và “Nghỉ bù” độc lập nhau, nên nửa ngày nghỉ bù cũng được.',
  'help.guide.half-day.tip.1':
    'Thanh công cụ luôn hiển thị dấu mà cú nhấp tiếp theo sẽ đặt, để bạn kiểm tra trước khi ghi.',
  // comp-day
  'help.guide.comp-day.title': 'Ghi nghỉ bù hoặc giờ linh hoạt',
  'help.guide.comp-day.goal': 'Nghỉ bù mà không tốn ngày phép.',
  'help.guide.comp-day.step.1':
    'Bật “Nghỉ bù” trên thanh công cụ. Đĩa gạch chéo là hình dạng của ngày nghỉ bù trong lưới.',
  'help.guide.comp-day.step.2': 'Nhấp vào một ngày. Ô được tô gạch chéo theo màu của bạn thay vì khối đặc.',
  'help.guide.comp-day.result': 'Ngày nghỉ bù được đếm riêng cạnh các ô số ngày phép và không bao giờ giảm “Bên trái”.',
  'help.guide.comp-day.tip.1':
    'Giờ làm thêm được nghỉ bù, giờ linh hoạt, ngày nghỉ bù: mọi thứ là nghỉ nhưng không phải phép đều thuộc về đây.',
  // entitlement
  'help.guide.entitlement.title': 'Đặt số ngày phép',
  'help.guide.entitlement.goal': 'Cho Vacay biết bạn có bao nhiêu ngày phép trong năm.',
  'help.guide.entitlement.step.1': 'Trong thanh bên, nhấp vào ô “Ngày” dưới mục “Quyền lợi”.',
  'help.guide.entitlement.step.2': 'Nhập số ngày và nhấn Enter.',
  'help.guide.entitlement.result':
    '“Bên trái” được tính lại từ số ngày phép, phần chuyển sang (nếu có) và số ngày đã dùng.',
  'help.guide.entitlement.tip.1': 'Mỗi năm có số ngày phép riêng, nên thay đổi ở đây chỉ ảnh hưởng năm đang chọn.',
  // years
  'help.guide.years.title': 'Thêm và chuyển năm',
  'help.guide.years.goal': 'Lên kế hoạch sẵn cho năm sau, hoặc nhìn lại năm trước.',
  'help.guide.years.step.1': 'Nhấp dấu + bên phải năm để thêm năm sau, hoặc dấu + bên trái để thêm năm trước.',
  'help.guide.years.step.2': 'Chuyển năm bằng các mũi tên hoặc các thẻ năm bên dưới.',
  'help.guide.years.step.3':
    'Để xóa một năm, di chuột lên thẻ của nó và nhấp dấu trừ nhỏ. Các mục của năm đó cũng mất theo, nên hãy xác nhận cẩn thận.',
  'help.guide.years.result': 'Mỗi năm giữ số ngày phép và mục riêng; chuyển phép liên kết chúng với nhau.',
  // company-holidays
  'help.guide.company-holidays.title': 'Đánh dấu ngày nghỉ công ty',
  'help.guide.company-holidays.goal': 'Chặn những ngày cả công ty nghỉ mà không tốn ngày phép của ai.',
  'help.guide.company-holidays.step.1':
    'Mở “Cài đặt” và kiểm tra “Ngày lễ của công ty” đang bật. Mặc định là bật; thanh công cụ chỉ hiện chế độ này khi nó bật.',
  'help.guide.company-holidays.step.2': 'Trở lại lưới, chuyển thanh công cụ sang chế độ “Kỳ nghỉ của công ty”.',
  'help.guide.company-holidays.step.3': 'Nhấp vào các ngày. Chúng chuyển màu hổ phách và xuất hiện trong chú giải.',
  'help.guide.company-holidays.result':
    'Ngày nghỉ công ty hiển thị với mọi người hợp nhất trong kế hoạch và không bao giờ giảm “Bên trái”.',
  'help.guide.company-holidays.tip.1':
    'Bất kỳ ai đã hợp nhất đều có thể sửa ngày nghỉ công ty, nên hãy thống nhất ai quản lý.',
  // public-holidays
  'help.guide.public-holidays.title': 'Hiển thị ngày lễ',
  'help.guide.public-holidays.goal': 'Đưa ngày lễ của quốc gia hoặc vùng của bạn lên lưới.',
  'help.guide.public-holidays.step.1': 'Mở “Cài đặt” và bật “Ngày lễ”.',
  'help.guide.public-holidays.step.2': 'Nhấp “Thêm lịch”, chọn quốc gia và vùng nếu cần. Đặt màu và nhãn nếu muốn.',
  'help.guide.public-holidays.step.3': 'Đóng “Cài đặt”. Ngày lễ xuất hiện trên lưới và trong chú giải.',
  'help.guide.public-holidays.result':
    'Ngày lễ được đánh dấu bằng màu của lịch và không bao giờ tính vào số ngày phép của bạn.',
  'help.guide.public-holidays.tip.1':
    'Bạn có thể thêm nhiều lịch, ví dụ vùng của bạn và vùng của đồng nghiệp đã hợp nhất.',
  // school-holidays
  'help.guide.school-holidays.title': 'Hiển thị kỳ nghỉ học',
  'help.guide.school-holidays.goal': 'Xem kỳ nghỉ học của vùng bạn bên cạnh ngày nghỉ của bạn.',
  'help.guide.school-holidays.step.1': 'Mở “Cài đặt” và bật “School Holidays”.',
  'help.guide.school-holidays.step.2':
    'Nhấp “Thêm lịch” và chọn quốc gia. Nếu quốc gia chia lịch, hãy chọn cả vùng hoặc nhóm.',
  'help.guide.school-holidays.step.3': 'Đóng “Cài đặt”. Mỗi kỳ nghỉ có một dải màu ở cuối các ngày.',
  'help.guide.school-holidays.result': 'Kỳ nghỉ học chỉ mang tính hiển thị: không bao giờ giảm ngày phép của ai.',
  'help.guide.school-holidays.tip.1':
    'Thiếu vùng? Quản trị viên có thể quản lý kỳ nghỉ học thủ công trong “Quản trị viên”, “Cá nhân hóa”, “Kỳ nghỉ học”.',
  // weekends
  'help.guide.weekends.title': 'Chặn cuối tuần và đặt ngày bắt đầu tuần',
  'help.guide.weekends.goal': 'Giữ cuối tuần ngoài phép tính và bắt đầu tuần vào ngày bạn quen.',
  'help.guide.weekends.step.1': 'Mở “Cài đặt”.',
  'help.guide.weekends.step.2': 'Bật “Các ngày cuối tuần” và chọn những ngày được tính là cuối tuần của bạn.',
  'help.guide.weekends.step.3': 'Ở “Tuần bắt đầu vào”, chọn Thứ Hai hoặc Chủ Nhật.',
  'help.guide.weekends.result': 'Các ngày bị chặn hiện màu xám trong lưới và không thể ghi nhầm.',
  // leave-year
  'help.guide.leave-year.title': 'Đặt năm nghỉ phép',
  'help.guide.leave-year.goal':
    'Tính ngày phép theo năm tài chính hoặc từ ngày vào làm thay vì từ tháng Một đến tháng Mười Hai.',
  'help.guide.leave-year.step.1': 'Mở “Cài đặt” và tìm “Năm nghỉ phép”.',
  'help.guide.leave-year.step.2':
    'Chọn “Dương lịch”, “Tài chính” (với tháng và ngày bắt đầu) hoặc “Ngày vào làm” (với ngày bạn được tuyển).',
  'help.guide.leave-year.result':
    'Số ngày phép, ngày đã dùng và chuyển phép theo kỳ đó, và lưới bắt đầu từ tháng đầu tiên của kỳ.',
  'help.guide.leave-year.tip.1':
    'Cài đặt này là cá nhân: trong kế hoạch hợp nhất, mỗi người giữ năm nghỉ phép và con số của mình.',
  // carry-over
  'help.guide.carry-over.title': 'Chuyển ngày chưa dùng sang kỳ sau',
  'help.guide.carry-over.goal': 'Cộng phần còn lại cuối kỳ vào kỳ tiếp theo.',
  'help.guide.carry-over.step.1': 'Mở “Cài đặt”.',
  'help.guide.carry-over.step.2': 'Bật “Chuyển tiếp”.',
  'help.guide.carry-over.result': 'Số ngày chuyển được tính lại cho tất cả các năm và hiển thị dưới số ngày phép.',
  'help.guide.carry-over.tip.1': 'Tắt đi sẽ đưa mọi số dư chuyển phép về 0.',
  // invite
  'help.guide.invite.title': 'Lên kế hoạch cùng ai đó',
  'help.guide.invite.goal': 'Hợp nhất kế hoạch với một người dùng TREK khác để thấy ngày nghỉ của nhau trong một lưới.',
  'help.guide.invite.step.1': 'Nhấp biểu tượng người trong bảng “Người”.',
  'help.guide.invite.step.2': 'Chọn người dùng và gửi lời mời.',
  'help.guide.invite.step.3': 'Họ nhận thông báo và chấp nhận. Cho đến lúc đó lời mời hiển thị là đang chờ.',
  'help.guide.invite.result':
    'Hai kế hoạch hợp nhất: mỗi người một màu, các bạn có thể ghi ngày cho nhau, và mọi thứ đồng bộ trực tiếp.',
  'help.guide.invite.tip.1':
    'Để hủy hợp nhất, dùng “Hòa tan” trong “Cài đặt”. Các mục của mỗi người trở về kế hoạch riêng.',
  'help.guide.invite.tip.2': 'Nếu người kia chỉ cần xem ngày của bạn, hãy chia sẻ lịch thay vì hợp nhất.',
  // share-calendar
  'help.guide.share-calendar.title': 'Chia sẻ lịch ở chế độ chỉ đọc',
  'help.guide.share-calendar.goal': 'Cho ai đó xem khi nào bạn nghỉ mà không cho họ quyền với kế hoạch của bạn.',
  'help.guide.share-calendar.step.1': 'Nhấp biểu tượng chia sẻ trong bảng “Lịch được chia sẻ”.',
  'help.guide.share-calendar.step.2': 'Chọn người dùng và nhấp “Chia sẻ”. Không cần chấp nhận.',
  'help.guide.share-calendar.step.3':
    'Lịch được chia sẻ với bạn xuất hiện trong cùng bảng; biểu tượng mắt ẩn một lịch, “Ngừng chia sẻ” thu hồi lịch của bạn.',
  'help.guide.share-calendar.result':
    'Ngày nghỉ của bạn hiện dưới dạng vòng màu trên lưới của họ. Không gì bạn chia sẻ có thể bị chỉnh sửa từ phía họ.',
  'help.guide.share-calendar.tip.1':
    'Chia sẻ và hợp nhất độc lập nhau: bạn có thể hợp nhất với một người và chia sẻ với những người khác.',
  'help.guide.share-calendar.tip.2': 'Di chuột lên ngày có vòng để xem ai nghỉ và trong bao lâu.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas là dấu chân du lịch của bạn trên bản đồ thế giới: mọi quốc gia mà một chuyến đi đã đưa bạn tới đều được tô màu, và bạn có thể tự thêm những nước đã đến trước khi dùng TREK. Phóng to để xem khu vực, giữ một danh sách nhóm những nơi bạn vẫn muốn đến, và đọc các con số của bạn trong bảng kính ở dưới cùng.',
  'help.ctx.atlas.bullet.1':
    'Bản đồ: quốc gia đã ghé thăm mang một màu riêng không đổi, quốc gia đã lên kế hoạch có viền nét đứt, quốc gia trong danh sách nhóm có gạch chéo, mọi nơi khác màu xám. Di chuột lên một quốc gia để xem chuyến đi, địa điểm, lần đến đầu tiên và gần nhất.',
  'help.ctx.atlas.bullet.2':
    'Tìm kiếm ở trên cùng: gõ tên quốc gia hoặc địa điểm. Chọn một quốc gia sẽ bay bản đồ tới đó và mở cửa sổ bật lên của nó; chọn một địa điểm sẽ đáp xuống khu vực của nó để bạn đánh dấu khu vực đó.',
  'help.ctx.atlas.bullet.3':
    '“Hiện các quốc gia đã lên kế hoạch”, góc trên bên phải: hiện các quốc gia trong những chuyến đi sắp tới của bạn. Công tắc chỉ xuất hiện khi bạn có chuyến đi như vậy.',
  'help.ctx.atlas.bullet.4':
    'Bảng ở dưới cùng: tab Thống kê với quốc gia, chuyến đi, địa điểm, thành phố, ngày, châu lục và chuỗi liên tiếp của bạn; tab Danh sách nhóm với những gì còn ở phía trước.',
  'help.ctx.atlas.bullet.5':
    'Khu vực: từ mức thu phóng 5, bản đồ chuyển sang các bang và tỉnh, mỗi nơi đều nhấp được để đánh dấu hoặc bỏ đánh dấu.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: khi tiện ích bổ sung đã kết nối, một bảng bên trái phần thống kê sẽ đánh dấu hoàn thành các mong muốn và thêm quốc gia từ bản ghi của bạn, không bao giờ làm vậy mà không có xác nhận của bạn.',
  // mark-country
  'help.guide.mark-country.title': 'Đánh dấu một quốc gia là đã ghé thăm',
  'help.guide.mark-country.goal':
    'Thêm một quốc gia bạn đã đến trước khi dùng TREK, để bản đồ và số đếm của bạn tính cả nó.',
  'help.guide.mark-country.step.1': 'Gõ tên quốc gia vào ô tìm kiếm ở phía trên bản đồ.',
  'help.guide.mark-country.step.2':
    'Chọn nó trong danh sách. Bản đồ bay tới đó và một cửa sổ bật lên mở ra cho quốc gia đó.',
  'help.guide.mark-country.step.3': 'Chọn “Đánh dấu là đã ghé thăm”.',
  'help.guide.mark-country.result':
    'Quốc gia nhận màu của nó trên bản đồ và mục Quốc gia đếm thêm một. Màu đó là cố định: đánh dấu thêm quốc gia khác không bao giờ xáo trộn màu của những nước còn lại.',
  'help.guide.mark-country.tip.1':
    'Nhấp vào một quốc gia màu xám trên bản đồ cũng mở cùng cửa sổ bật lên; tìm kiếm là cách chắc chắn với các nước nhỏ.',
  'help.guide.mark-country.tip.2':
    'Quốc gia bạn tự đánh dấu luôn được tính là đã ghé thăm, bất kể ngày tháng của chuyến đi nào tới đó.',
  // unmark-country
  'help.guide.unmark-country.title': 'Gỡ một quốc gia bạn đã đánh dấu',
  'help.guide.unmark-country.goal': 'Bỏ một quốc gia đã đánh dấu thủ công ra khỏi bản đồ.',
  'help.guide.unmark-country.step.1':
    'Tìm quốc gia và chọn nó, hoặc nhấp vào nó trên bản đồ. Với quốc gia bạn tự đánh dấu, cửa sổ bật lên sẽ hỏi có gỡ nó không.',
  'help.guide.unmark-country.step.2': 'Xác nhận bằng “Di dời”.',
  'help.guide.unmark-country.result': 'Quốc gia trở lại màu xám và rời khỏi số đếm của bạn.',
  'help.guide.unmark-country.tip.1':
    'Chỉ quốc gia đánh dấu thủ công mới gỡ được theo cách này. Quốc gia có chuyến đi hoặc địa điểm vẫn giữ nguyên chừng nào chúng còn đó; nút “Di dời” cũng nằm trong thẻ chi tiết của nó ở bảng khi nó được đánh dấu thủ công.',
  // country-details
  'help.guide.country-details.title': 'Xem bạn đã làm gì ở một quốc gia',
  'help.guide.country-details.goal': 'Mở một quốc gia đã ghé thăm và nhảy tới các chuyến đi đã đưa bạn tới đó.',
  'help.guide.country-details.step.1': 'Tìm một quốc gia bạn đã ghé thăm.',
  'help.guide.country-details.step.2':
    'Chọn nó. Bản đồ bay tới đó và bảng ở dưới cùng hiện thêm một thẻ với quốc kỳ, địa điểm, chuyến đi và một chip cho mỗi chuyến đi.',
  'help.guide.country-details.result': 'Nhấp vào chip chuyến đi để mở chuyến đi đó trong trình lập kế hoạch.',
  'help.guide.country-details.tip.1':
    'Di chuột lên quốc gia trên bản đồ sẽ hiện cùng những con số đó cộng thêm lần đến đầu tiên và gần nhất.',
  // planned-countries
  'help.guide.planned-countries.title': 'Hiện các quốc gia bạn sắp đến',
  'help.guide.planned-countries.goal':
    'Đưa các quốc gia trong những chuyến đi sắp tới lên bản đồ mà không tính chúng là đã ghé thăm.',
  'help.guide.planned-countries.step.1':
    'Bật “Hiện các quốc gia đã lên kế hoạch” ở góc trên bên phải. Con số bên cạnh là số quốc gia đang chờ.',
  'help.guide.planned-countries.step.2':
    'Tìm một quốc gia đã lên kế hoạch và chọn nó: bảng ghi Đã lên kế hoạch và chú giải trên bản đồ cho biết khi nào bạn đi.',
  'help.guide.planned-countries.result':
    'Quốc gia đã lên kế hoạch hiện với viền nét đứt, nên không bao giờ trông giống nơi bạn đã đến. Công tắc ghi nhớ lựa chọn của bạn.',
  'help.guide.planned-countries.tip.1':
    'Một quốc gia được tính là đã ghé thăm khi chuyến đi tới đó đã bắt đầu; chuyến đi đang diễn ra cũng tính. Chuyến đi không có ngày hoàn toàn nằm ngoài thống kê.',
  'help.guide.planned-countries.tip.2': 'Công tắc chỉ tồn tại khi bạn có chuyến đi sắp tới.',
  // regions
  'help.guide.regions.title': 'Đánh dấu một khu vực',
  'help.guide.regions.goal': 'Chi tiết hơn quốc gia: đánh dấu các bang, tỉnh hoặc quận bạn đã đến.',
  'help.guide.regions.step.1':
    'Phóng to vào một quốc gia cho tới khi các khu vực hiện ra, từ mức thu phóng 5. Tìm quốc gia đó và chọn nó sẽ đưa bạn đủ gần.',
  'help.guide.regions.step.2':
    'Nhấp vào một khu vực. Di chuột lên sẽ hiện tên; cửa sổ bật lên hiện khu vực và quốc gia của nó.',
  'help.guide.regions.step.3': 'Chọn “Đánh dấu là đã ghé thăm”.',
  'help.guide.regions.result':
    'Khu vực được tô bằng màu của quốc gia. Đánh dấu một khu vực cũng tính quốc gia đó là đã ghé thăm nếu trước đó chưa.',
  'help.guide.regions.tip.1':
    'Nhấp vào một khu vực đã ghé thăm sẽ có nút “Di dời”, dù bạn đã đánh dấu nó hay một địa điểm đã đưa nó vào.',
  'help.guide.regions.tip.2': 'Khu vực có địa điểm thật của bạn được đánh dấu sẵn; không cần làm gì ở đó.',
  // search-place
  'help.guide.search-place.title': 'Tìm một địa điểm và đánh dấu khu vực của nó',
  'help.guide.search-place.goal':
    'Đánh dấu Lombardy bằng cách tìm Milan, mà không cần biết một thành phố nằm ở khu vực nào.',
  'help.guide.search-place.step.1':
    'Gõ một thành phố, một địa danh hoặc một địa chỉ vào ô tìm kiếm. Quốc gia hiện trước; các địa điểm khớp hiện phía dưới, dưới tiêu đề Địa điểm.',
  'help.guide.search-place.step.2': 'Chọn địa điểm. Bản đồ bay tới đó và xác định điểm đó nằm trong khu vực nào.',
  'help.guide.search-place.step.3':
    'Chọn “Đánh dấu là đã ghé thăm” cho khu vực đó, hoặc “Thêm vào danh sách nhóm” nếu nó vẫn còn ở phía trước.',
  'help.guide.search-place.result':
    'Khu vực được đánh dấu, và quốc gia cũng vậy. Quốc gia không có dữ liệu khu vực trong gói bản đồ sẽ quay về chính quốc gia đó.',
  'help.guide.search-place.tip.1':
    'Địa điểm đến từ cùng một tìm kiếm như mọi nơi khác trong TREK, nên đi theo nhà cung cấp mà quản trị viên của bạn đã thiết lập.',
  // bucket-country
  'help.guide.bucket-country.title': 'Đưa một quốc gia vào danh sách nhóm',
  'help.guide.bucket-country.goal':
    'Giữ một danh sách nhóm các quốc gia ngay trên bản đồ, tách khỏi những nước bạn đã đến.',
  'help.guide.bucket-country.step.1': 'Tìm quốc gia và chọn nó, hoặc nhấp vào nó trên bản đồ.',
  'help.guide.bucket-country.step.2': 'Chọn “Thêm vào danh sách nhóm”.',
  'help.guide.bucket-country.step.3':
    'Chọn tháng và năm nếu bạn đã biết khi nào, rồi xác nhận bằng “Thêm vào danh sách nhóm”.',
  'help.guide.bucket-country.result':
    'Quốc gia được vẽ bằng gạch chéo theo màu mà nó sẽ mang khi bạn tới đó, và xuất hiện trong tab Danh sách nhóm của bảng.',
  'help.guide.bucket-country.tip.1':
    'Cùng cửa sổ bật lên đó sẽ có “Xóa khỏi danh sách nhóm” khi quốc gia đã nằm trong danh sách.',
  'help.guide.bucket-country.tip.2':
    'Mỗi ngày dự kiến một mục: cùng một quốc gia có thể nằm trong danh sách cho hai tháng khác nhau, nhưng không hai lần cho cùng một tháng.',
  // bucket-place
  'help.guide.bucket-place.title': 'Thêm một địa điểm vào danh sách nhóm',
  'help.guide.bucket-place.goal':
    'Lưu một thành phố, một thắng cảnh hoặc một địa chỉ bạn mơ ước, kèm tọa độ và ngày dự kiến.',
  'help.guide.bucket-place.step.1': 'Mở tab Danh sách nhóm trong bảng ở dưới cùng.',
  'help.guide.bucket-place.step.2': 'Nhấp “Thêm địa điểm”.',
  'help.guide.bucket-place.step.3':
    'Gõ tên và bấm nút tìm kiếm; chọn kết quả khớp để địa điểm có tọa độ. Chỉ gõ tên và bỏ qua tìm kiếm cũng được.',
  'help.guide.bucket-place.step.4': 'Chọn tháng và năm nếu muốn rồi nhấp “Thêm”.',
  'help.guide.bucket-place.result':
    'Địa điểm nằm ở đầu danh sách nhóm của bạn cùng ngày dự kiến; dấu × bên cạnh sẽ xóa nó đi.',
  'help.guide.bucket-place.tip.1':
    'Một mong muốn có tọa độ là thứ Dawarich có thể đánh dấu hoàn thành cho bạn sau này, khi bản ghi của bạn cho thấy bạn đã ở đó.',
  // stats
  'help.guide.stats.title': 'Đọc thống kê của bạn',
  'help.guide.stats.goal': 'Biết các con số trong bảng đếm gì, và không đếm gì.',
  'help.guide.stats.step.1':
    'Quốc gia là số quốc gia khác nhau bạn đã thực sự đến; những nước đã lên kế hoạch hiện bên cạnh, không nằm trong đó. Chuyến đi, Địa điểm và Ngày là tổng trên tất cả chuyến đi của bạn. Thành phố được suy ra từ địa chỉ của các địa điểm, nên chỉ là ước tính.',
  'help.guide.stats.step.2':
    'Các châu lục hiện số quốc gia đã ghé thăm theo từng châu; Nam Cực sẽ vào hàng khi bạn đã đến đó. Rồi tới chuỗi liên tiếp của bạn, số năm liên tiếp có ít nhất một chuyến đi, và số chuyến đi bạn đã thực hiện trong năm nay.',
  'help.guide.stats.result':
    'Các con số đi theo chuyến đi của bạn khi bạn lên kế hoạch; ở đây không có gì cần bảo trì.',
  'help.guide.stats.tip.1':
    'Thành phố được đọc từ văn bản địa chỉ, không tra cứu, nên một địa chỉ ngắn như “Osteria Francescana, Italy” hoặc một địa chỉ kết thúc bằng tên tỉnh có thể cho ra một khu vực thay vì thành phố.',
  'help.guide.stats.tip.2':
    'Quốc gia bạn đánh dấu thủ công được tính vào Quốc gia và các châu lục, nhưng không mang theo chuyến đi, địa điểm hay ngày.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Bộ sưu tập',
  'help.ctx.collections.summary':
    'Collections là thư viện địa điểm của bạn nằm ngoài mọi chuyến đi: những danh sách có tên gồm các địa điểm bạn đã tìm thấy và muốn giữ lại, mỗi địa điểm có trạng thái “Ý tưởng”, “Muốn đến” hoặc “Đã đến”. Địa điểm được sao chép vào và ra khỏi chuyến đi, không bao giờ liên kết, nên danh sách và chuyến đi không bao giờ làm thay đổi nhau.',
  'help.ctx.collections.bullet.1':
    'Thanh danh sách bên trái: danh sách của riêng bạn, những danh sách được chia sẻ với bạn, lời mời đang chờ bạn đồng ý, “Tất cả đã lưu” là hợp của mọi thứ bạn sở hữu, cùng “Danh sách mới” và nhập từ tệp ở trên cùng.',
  'help.ctx.collections.bullet.2':
    'Phần đầu của danh sách đang mở: màu, ảnh bìa, mô tả và liên kết, các thành viên, cùng các thao tác “Chỉnh sửa”, “Xuất” và “Chia sẻ” ở bên phải.',
  'help.ctx.collections.bullet.3':
    'Hàng bộ lọc phía trên các địa điểm: trạng thái, danh mục, đánh giá và sắp xếp, bộ lọc nhãn, nút + để thêm địa điểm, nhập từ chuyến đi, và “Chọn” cho các thao tác hàng loạt.',
  'help.ctx.collections.bullet.4':
    'Các hàng địa điểm: ảnh đại diện, tên và địa chỉ, nhãn và danh mục, cùng viên trạng thái ở bên phải đổi vòng chỉ với một cú nhấp.',
  'help.ctx.collections.bullet.5':
    'Bản đồ bên phải: một ghim cho mỗi địa điểm có tọa độ, nút chuyển giữa danh sách và bản đồ, ô tìm kiếm và bộ lọc nhãn. Nhấp vào ghim sẽ mở địa điểm đó.',
  'help.ctx.collections.bullet.6':
    'Bảng chi tiết: nhấp vào một hàng để xem ảnh bìa, danh mục, nhãn, trạng thái, mô tả và liên kết, cùng “Chỉnh sửa”, “Sao chép vào chuyến đi” và “Xóa khỏi danh sách”.',
  // create-list
  'help.guide.create-list.title': 'Tạo một danh sách',
  'help.guide.create-list.goal': 'Bắt đầu một danh sách mới có tên, với màu và ảnh bìa, sẵn sàng nhận địa điểm.',
  'help.guide.create-list.step.1': 'Nhấp vào “Danh sách mới” ở đầu thanh danh sách.',
  'help.guide.create-list.step.2':
    'Đặt tên cho danh sách và chọn một màu. Ảnh bìa, mô tả và liên kết là tùy chọn; bạn có thể thêm sau bằng “Chỉnh sửa”.',
  'help.guide.create-list.step.3': 'Nhấp vào “Tạo”.',
  'help.guide.create-list.result':
    'Danh sách mở ra trống, với “Thêm địa điểm” và “Nhập từ một chuyến đi” là hai cách để lấp đầy nó.',
  'help.guide.create-list.tip.1':
    'Ảnh bìa có thể là ảnh bạn tự tải lên hoặc một bức ảnh tìm được qua tìm kiếm Unsplash trong cùng hộp thoại.',
  // add-place
  'help.guide.add-place.title': 'Thêm một địa điểm',
  'help.guide.add-place.goal':
    'Tìm một địa điểm và lưu vào danh sách đang mở cùng tên, danh mục, trạng thái và ghi chú trong một lần.',
  'help.guide.add-place.step.1': 'Nhấp vào dấu + ở hàng bộ lọc phía trên các địa điểm.',
  'help.guide.add-place.step.2':
    'Gõ địa điểm vào ô tìm kiếm và chọn một kết quả. Tên, địa chỉ và tọa độ được điền từ đó.',
  'help.guide.add-place.step.3':
    'Đặt trạng thái và, nếu muốn, một danh mục, mô tả và liên kết, rồi nhấp vào “Thêm”. Hộp thoại vẫn mở cho địa điểm tiếp theo; “Hủy” sẽ đóng nó.',
  'help.guide.add-place.result': 'Địa điểm xuất hiện trong danh sách và, khi có tọa độ, cả dưới dạng ghim trên bản đồ.',
  'help.guide.add-place.tip.1':
    'Từ bên trong một chuyến đi, “Lưu vào Bộ sưu tập” trong trình xem địa điểm hoặc menu địa điểm sẽ đưa một địa điểm của chuyến đi vào danh sách mà không cần rời chuyến đi.',
  'help.guide.add-place.tip.2':
    'Danh sách phải là của bạn hoặc là nơi bạn là người sửa hay quản trị; dấu + không có trên “Tất cả đã lưu” hay trên danh sách bạn chỉ được xem.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Nhập địa điểm từ một chuyến đi',
  'help.guide.import-from-trip.goal':
    'Đưa toàn bộ địa điểm của một chuyến đi vào danh sách cùng lúc thay vì lưu từng cái một.',
  'help.guide.import-from-trip.step.1':
    'Nhấp vào nút nhập có mũi tên đám mây ở hàng bộ lọc. Trên danh sách trống, thao tác này nằm cạnh “Thêm địa điểm”.',
  'help.guide.import-from-trip.step.2': 'Chọn một trong các chuyến đi của bạn.',
  'help.guide.import-from-trip.step.3':
    'Đánh dấu các địa điểm bạn muốn. Địa điểm đã có trong danh sách bị làm mờ; những địa điểm không thuộc ngày nào của chuyến đi được chọn sẵn. “Chỉ cái mới” ẩn những gì bạn đã có.',
  'help.guide.import-from-trip.step.4': 'Nhấp vào “Nhập”. Nút luôn cho biết bao nhiêu địa điểm sắp được thêm.',
  'help.guide.import-from-trip.result':
    'Các địa điểm được sao chép vào danh sách với tên, địa chỉ, tọa độ, mô tả và danh mục của chúng. Chuyến đi vẫn nguyên như cũ.',
  'help.guide.import-from-trip.tip.1':
    'Các mục trùng theo tên hoặc tọa độ được tự động bỏ qua, nên nhập hai lần cũng không sao.',
  'help.guide.import-from-trip.tip.2':
    'Bên trong danh sách địa điểm của một chuyến đi, chế độ chọn thay vào đó cung cấp “Lưu vào Bộ sưu tập” cho một nhóm địa điểm do bạn tự chọn.',
  // place-status
  'help.guide.place-status.title': 'Đặt trạng thái cho một địa điểm',
  'help.guide.place-status.goal': 'Theo dõi đâu là ý tưởng, đâu là danh sách rút gọn và bạn đã đến những đâu.',
  'help.guide.place-status.step.1':
    'Nhấp vào viên trạng thái ở đầu bên phải của hàng địa điểm. “Ý tưởng” trở thành “Muốn đến”.',
  'help.guide.place-status.step.2': 'Nhấp lần nữa để thành “Đã đến”, và thêm lần nữa để quay lại “Ý tưởng”.',
  'help.guide.place-status.result':
    'Viên trạng thái và màu của nó đổi ngay; bộ lọc trạng thái phía trên danh sách cũng đếm theo.',
  'help.guide.place-status.tip.1':
    'Trạng thái là chuyện riêng của Collections: sao chép một địa điểm vào chuyến đi không mang nó theo.',
  'help.guide.place-status.tip.2':
    'Từ một chuyến đi, “Lưu vào Bộ sưu tập” hiện một viên trạng thái cho mỗi danh sách chứa địa điểm đó, và bảng địa điểm có thao tác “Đánh dấu đã đến” cho một nhóm đã chọn.',
  // place-detail
  'help.guide.place-detail.title': 'Mở một địa điểm đã lưu',
  'help.guide.place-detail.goal':
    'Xem mọi thứ về một địa điểm và thao tác với nó: chỉnh sửa, sao chép vào chuyến đi, xóa bỏ.',
  'help.guide.place-detail.step.1':
    'Nhấp vào một hàng địa điểm. Bảng chi tiết mở ra cạnh danh sách và bản đồ trượt tới địa điểm đó.',
  'help.guide.place-detail.step.2':
    'Ở dưới cùng có “Chỉnh sửa”, “Sao chép vào chuyến đi” và “Xóa khỏi danh sách”; biểu tượng máy ảnh trên ảnh bìa đổi ảnh tự động sang ảnh của riêng bạn.',
  'help.guide.place-detail.result':
    '“Chỉnh sửa” mở khóa tên, danh mục, nhãn, địa chỉ, tọa độ, mô tả và liên kết ngay trong bảng.',
  'help.guide.place-detail.tip.1':
    'Ảnh bìa được lấy tự động khi địa điểm không có ảnh riêng. Ảnh bạn tải lên có thể là JPG, PNG, GIF hoặc WebP, tối đa 20 MB.',
  'help.guide.place-detail.tip.2':
    'Thành viên của danh sách được chia sẻ cũng có thể để lại đánh giá sao ở đây, và bộ lọc đánh giá ở hàng bộ lọc dùng điểm trung bình.',
  // labels
  'help.guide.labels.title': 'Nhóm địa điểm bằng nhãn',
  'help.guide.labels.goal':
    'Cho danh sách những nhãn riêng của nó, chẳng hạn quận hay ngày, ngoài các danh mục dùng chung.',
  'help.guide.labels.step.1': 'Mở trình quản lý nhãn từ nút nhãn ở hàng bộ lọc.',
  'help.guide.labels.step.2':
    'Gõ một tên, chọn một màu và nhấp vào “Thêm nhãn”. Đổi tên, đổi màu hoặc xóa các nhãn hiện có trong cùng hộp thoại.',
  'help.guide.labels.step.3':
    'Bật “Chọn”, đánh dấu các địa điểm và nhấp vào “Gán nhãn” trên thanh chọn. Một địa điểm đơn lẻ cũng nhận nhãn qua “Chỉnh sửa” trên bảng chi tiết của nó.',
  'help.guide.labels.step.4':
    'Chọn một hoặc nhiều nhãn ở hàng bộ lọc để thu hẹp danh sách và bản đồ về những địa điểm mang bất kỳ nhãn nào trong số đó.',
  'help.guide.labels.result':
    'Địa điểm có nhãn hiện nhãn của nó trên hàng; bộ lọc nhãn có sẵn cho mọi thành viên, kể cả người xem.',
  'help.guide.labels.tip.1':
    'Nhãn thuộc về duy nhất danh sách nơi nó được tạo. Chuyển một địa điểm sang danh sách khác sẽ bỏ các nhãn đó.',
  'help.guide.labels.tip.2': 'Quản lý và gán nhãn cần quyền chỉnh sửa trên danh sách.',
  // filter-select
  'help.guide.filter-select.title': 'Lọc và chọn địa điểm',
  'help.guide.filter-select.goal': 'Thu hẹp danh sách và thao tác với nhiều địa điểm cùng lúc.',
  'help.guide.filter-select.step.1':
    'Dùng các menu thả xuống ở hàng bộ lọc: trạng thái, danh mục, đánh giá tối thiểu và thứ tự sắp xếp. Mỗi cái cho biết sẽ còn lại bao nhiêu địa điểm.',
  'help.guide.filter-select.step.2': 'Nhấp vào “Chọn”. Mỗi hàng có một ô đánh dấu và thanh chọn xuất hiện.',
  'help.guide.filter-select.step.3':
    'Đánh dấu địa điểm hoặc dùng “Chọn tất cả” cho mọi thứ đang được lọc, rồi chọn “Gán nhãn”, “Chuyển vào danh sách”, “Sao chép vào danh sách”, “Sao chép vào chuyến đi” hoặc “Xóa bỏ”.',
  'help.guide.filter-select.result':
    'Các thao tác áp dụng cho toàn bộ lựa chọn cùng lúc. Dấu × ở bên phải thoát chế độ chọn.',
  'help.guide.filter-select.tip.1':
    '“Chọn tất cả” đi theo bộ lọc, nên lọc theo “Muốn đến” rồi chọn tất cả là cách nhanh để xử lý danh sách rút gọn.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Sao chép địa điểm vào một chuyến đi',
  'help.guide.copy-to-trip.goal': 'Biến các địa điểm đã lưu thành điểm dừng trong một chuyến đi của bạn.',
  'help.guide.copy-to-trip.step.1':
    'Bật “Chọn” và đánh dấu các địa điểm, hoặc mở một địa điểm và dùng “Sao chép vào chuyến đi” trên bảng chi tiết của nó.',
  'help.guide.copy-to-trip.step.2': 'Nhấp vào “Sao chép vào chuyến đi” trên thanh chọn.',
  'help.guide.copy-to-trip.step.3': 'Chọn chuyến đi. Ô tìm kiếm giúp thu hẹp một danh sách dài.',
  'help.guide.copy-to-trip.result':
    'Các địa điểm vào danh sách địa điểm của chuyến đi đó với tên, mô tả, danh mục, ghi chú, giá, tọa độ, ảnh và thẻ. Không có gì thay đổi trong bộ sưu tập.',
  'help.guide.copy-to-trip.tip.1':
    'Người xem của danh sách được chia sẻ cũng làm được việc này; nó sao chép ra khỏi danh sách chứ không thay đổi danh sách.',
  // share-list
  'help.guide.share-list.title': 'Chia sẻ danh sách với ai đó',
  'help.guide.share-list.goal':
    'Cùng lên kế hoạch một danh sách với những người khác trên TREK này, theo thời gian thực.',
  'help.guide.share-list.step.1': 'Nhấp vào “Chia sẻ” ở phần đầu danh sách của bạn.',
  'help.guide.share-list.step.2': 'Chọn người dùng và một vai trò: “Người xem”, “Người sửa” hoặc “Quản trị”.',
  'help.guide.share-list.step.3':
    'Nhấp vào “Gửi lời mời”. Người đó hiện là “lời mời đang chờ” cho đến khi họ chấp nhận lời mời trong thanh danh sách của mình.',
  'help.guide.share-list.result':
    'Sau khi chấp nhận, danh sách xuất hiện dưới mục “Được chia sẻ” của họ và mọi thay đổi được đồng bộ trực tiếp. Thành viên và vai trò của họ vẫn sửa được trong cùng hộp thoại.',
  'help.guide.share-list.tip.1':
    'Người xem có thể xem, đánh giá và sao chép địa điểm vào chuyến đi của riêng họ. Người sửa thêm và sửa địa điểm cùng nhãn. Quản trị còn có thể xóa.',
  'help.guide.share-list.tip.2':
    'Chỉ chủ sở hữu mới mời và gỡ người; một thành viên có thể tự rời khỏi danh sách được chia sẻ.',
  // export-list
  'help.guide.export-list.title': 'Xuất danh sách ra tệp',
  'help.guide.export-list.goal': 'Trao danh sách cho ai đó trên một TREK khác, hoặc mang nó vào ứng dụng bản đồ.',
  'help.guide.export-list.step.1': 'Nhấp vào “Xuất” ở phần đầu danh sách.',
  'help.guide.export-list.step.2':
    'Chọn “Danh sách TREK” cho một TREK khác, kèm nhãn và trạng thái, hoặc GPX cho OsmAnd, Organic Maps, thiết bị Garmin và các ứng dụng khác đọc được waypoint.',
  'help.guide.export-list.result':
    'Tệp được tải xuống. Bất kỳ thành viên nào của danh sách được chia sẻ đều có thể xuất nó.',
  'help.guide.export-list.tip.1':
    'Địa điểm không có tọa độ không thể thành waypoint GPX; nó bị bỏ ra và TREK cho bạn biết có bao nhiêu địa điểm như vậy.',
  'help.guide.export-list.tip.2':
    'Đánh giá, thành viên và ảnh đã tải lên được cố ý giữ lại; chúng thuộc về TREK này, không thuộc về danh sách.',
  // import-file
  'help.guide.import-file.title': 'Nhập danh sách từ tệp',
  'help.guide.import-file.goal':
    'Đưa vào một tệp danh sách TREK hoặc tệp GPX, dưới dạng danh sách mới hoặc vào một danh sách bạn đang có.',
  'help.guide.import-file.step.1': 'Nhấp vào nút nhập có mũi tên tải lên cạnh “Danh sách mới” trong thanh danh sách.',
  'help.guide.import-file.step.2':
    'Chọn tệp. TREK cho thấy bên trong có gì trước khi bất cứ điều gì xảy ra: tên, bao nhiêu địa điểm và nhãn.',
  'help.guide.import-file.step.3':
    'Giữ “Danh sách mới” và đổi tên nếu muốn, hoặc chọn “Thêm vào một danh sách” để đưa địa điểm vào một danh sách bạn có thể sửa, rồi nhấp vào “Nhập”.',
  'help.guide.import-file.result':
    'Bạn được đưa tới danh sách với các địa điểm đã nhập. Thêm vào danh sách chỉ thêm mà thôi; địa điểm đã có sẵn giữ nguyên trạng thái, ghi chú và nhãn.',
  'help.guide.import-file.tip.1':
    'Từ GPX, mỗi waypoint có tên trở thành một địa điểm; track là các đường và bị bỏ ra, và bản xem trước cho biết đó là bao nhiêu điểm.',
  'help.guide.import-file.tip.2':
    'Tệp không phải danh sách TREK cũng không phải GPX bị từ chối kèm lý do; một địa điểm không đọc được thì chỉ bị bỏ qua, không phải cả tệp.',
  // edit-list
  'help.guide.edit-list.title': 'Chỉnh sửa hoặc xóa một danh sách',
  'help.guide.edit-list.goal': 'Đổi tên, màu, ảnh bìa, mô tả hoặc liên kết của danh sách, hoặc gỡ bỏ danh sách.',
  'help.guide.edit-list.step.1': 'Nhấp vào “Chỉnh sửa” ở phần đầu danh sách. Chỉ chủ sở hữu mới thấy nó.',
  'help.guide.edit-list.step.2':
    'Đổi những gì bạn muốn và nhấp vào “Lưu”. “Xóa danh sách” ở góc dưới bên trái gỡ bỏ danh sách cùng toàn bộ địa điểm của nó, sau một bước xác nhận.',
  'help.guide.edit-list.result': 'Phần đầu nhận ngay màu, ảnh bìa và mô tả mới.',
  'help.guide.edit-list.tip.1': 'Xóa danh sách không thể hoàn tác. Hãy xuất nó trước nếu bạn muốn giữ một bản sao.',
  // all-saved
  'help.guide.all-saved.title': 'Tìm kiếm trong toàn bộ thư viện của bạn',
  'help.guide.all-saved.goal': 'Nhìn qua mọi danh sách bạn sở hữu cùng một lúc.',
  'help.guide.all-saved.step.1':
    'Nhấp vào “Tất cả đã lưu” trong thanh danh sách. Nó gộp địa điểm của mọi danh sách bạn sở hữu hoặc đồng sở hữu.',
  'help.guide.all-saved.step.2':
    'Dùng ô tìm kiếm và các bộ lọc như trên bất kỳ danh sách nào; “Chọn” cũng hoạt động ở đây để sao chép vào chuyến đi.',
  'help.guide.all-saved.result':
    'Một góc nhìn duy nhất trên toàn bộ địa điểm đã lưu của bạn, không có thêm hay nhập, vì không có danh sách cụ thể nào để đặt chúng vào.',
  'help.guide.all-saved.tip.1': 'Nhãn là theo từng danh sách, nên bộ lọc nhãn không có trên “Tất cả đã lưu”.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Hành trình',
  'help.ctx.journey.summary':
    'Hành trình là nhật ký du lịch lấy ảnh làm trung tâm của bạn. Mỗi hành trình gắn với một hoặc nhiều chuyến đi và lớn dần từng ngày từ các mục có câu chuyện, ảnh, tâm trạng và thời tiết. Màn hình này liệt kê các hành trình của bạn; mở một hành trình để viết.',
  'help.ctx.journey.bullet.1':
    'Biểu ngữ ở trên cùng hiện hành trình đang diễn ra, hoặc hành trình mới nhất của bạn, kèm số mục, ảnh và địa điểm. “Tiếp tục viết” mở nó ở ngày hôm nay.',
  'help.ctx.journey.bullet.2':
    'Bên dưới, mỗi hành trình một thẻ với ảnh bìa, phụ đề, ngày tháng và các con số. Nhấp vào một thẻ để mở.',
  'help.ctx.journey.bullet.3':
    'Thẻ cuối cùng trong lưới, “Tạo một hành trình mới”, bắt đầu một hành trình từ các chuyến đi của bạn.',
  // create-journey
  'help.guide.create-journey.title': 'Tạo một hành trình',
  'help.guide.create-journey.goal':
    'Bắt đầu một nhật ký cho một chuyến đi, với các địa điểm của chuyến đi đã chờ sẵn dưới dạng gợi ý.',
  'help.guide.create-journey.step.1': 'Nhấp vào “Tạo một hành trình mới”, thẻ cuối cùng trong lưới.',
  'help.guide.create-journey.step.2':
    'Đặt tên và, nếu muốn, một phụ đề, rồi đánh dấu các chuyến đi mà nó thuộc về. Bộ đếm cho biết bao nhiêu địa điểm sẽ được đưa vào.',
  'help.guide.create-journey.step.3': 'Nhấp vào “Tạo hành trình”.',
  'help.guide.create-journey.result':
    'Nhật ký mở ra. Mọi địa điểm của các chuyến đi đã liên kết nằm trong dòng thời gian dưới dạng gợi ý, mỗi ngày nó thuộc về một gợi ý, sẵn sàng để bạn viết vào.',
  'help.guide.create-journey.tip.1': 'Có thể liên kết thêm chuyến đi sau này từ “Cài đặt hành trình”.',
  'help.guide.create-journey.tip.2': 'Hành trình không có chuyến đi cũng dùng được; khi đó bạn tự thêm các mục.',
  // open-journey
  'help.guide.open-journey.title': 'Mở một hành trình',
  'help.guide.open-journey.goal': 'Vào một nhật ký, và biết nó mở ở đâu.',
  'help.guide.open-journey.step.1':
    'Nhấp vào một thẻ. Mỗi thẻ hiện ảnh bìa, ngày tháng và hành trình có bao nhiêu mục, ảnh và địa điểm.',
  'help.guide.open-journey.result':
    'Hành trình đang diễn ra mở ở ngày hôm nay, hoặc ở mục cuối cùng trước hôm nay khi chưa có gì được viết; hành trình đã kết thúc mở ở đầu.',
  'help.guide.open-journey.tip.1':
    'Ảnh bìa là ảnh đầu tiên của hành trình trừ khi bạn đặt một ảnh trong “Cài đặt hành trình”.',
  // continue-writing
  'help.guide.continue-writing.title': 'Tiếp tục hành trình đang diễn ra',
  'help.guide.continue-writing.goal': 'Vào thẳng trang hôm nay của hành trình bạn đang đi.',
  'help.guide.continue-writing.step.1':
    'Nhấp vào “Tiếp tục viết” trong biểu ngữ ở trên cùng. Nó hiện hành trình đang diễn ra, hoặc hành trình mới nhất khi không có hành trình nào đang diễn ra.',
  'help.guide.continue-writing.result':
    'Nhật ký mở ở ngày hôm nay, hoặc ở mục cuối cùng trước hôm nay khi chưa có gì được viết.',
  'help.guide.continue-writing.tip.1':
    'Biểu ngữ cũng đưa ra gợi ý cho một chuyến đi chưa có hành trình; “Miễn nhiệm” ẩn gợi ý đó đi.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Nhật ký',
  'help.ctx.journey-detail.summary':
    'Một hành trình đang mở: dòng thời gian ở bên trái, từng ngày một, và bản đồ ở bên phải với mọi mục và các địa điểm của những chuyến đi đã liên kết. Mọi thứ thêm vào nhật ký nằm ở trên cùng; phần đầu trang giữ các con số, “Studio”, công tắc gợi ý và “Cài đặt hành trình”.',
  'help.ctx.journey-detail.bullet.1':
    'Đầu trang: ảnh bìa, tiêu đề và phụ đề, số ngày, địa điểm, mục và ảnh, và ở bên phải là “Studio”, công tắc gợi ý và “Cài đặt hành trình”.',
  'help.ctx.journey-detail.bullet.2':
    'Thanh công cụ: các tab “Dòng thời gian” và “Phòng trưng bày”, “Tìm trong hành trình này”, và “Thêm mục nhập”.',
  'help.ctx.journey-detail.bullet.3':
    'Dòng thời gian: mỗi ngày một phần với dấu + để thêm mục vào ngày đó; các thẻ mục với ảnh, tâm trạng, thời tiết và câu chuyện; các gợi ý từ chuyến đi ở kiểu nhạt hơn với “Bỏ qua gợi ý này”.',
  'help.ctx.journey-detail.bullet.4':
    'Bản đồ: các mục là ghim, nối theo thứ tự ngày bằng một đường nét đứt, các địa điểm của chuyến đi, và mọi tuyến GPX đã nhập vào những chuyến đi đó.',
  'help.ctx.journey-detail.bullet.5':
    '“Cài đặt hành trình”: ảnh bìa, tên và phụ đề, tuyến trên bản đồ, các trường của mục, gợi ý đã bỏ qua, chuyến đi đã liên kết, cộng tác viên, chia sẻ công khai, lưu trữ và xóa.',
  'help.ctx.journey-detail.bullet.6':
    'Hai nút tròn nổi trên một dòng thời gian dài: lên đầu trang, và nhảy đến mục cuối cùng.',
  // add-entry
  'help.guide.add-entry.title': 'Viết một mục',
  'help.guide.add-entry.goal': 'Thêm câu chuyện của một ngày với tiêu đề, nội dung, tâm trạng và thời tiết.',
  'help.guide.add-entry.step.1':
    'Nhấp vào “Thêm mục nhập” trên thanh công cụ, hoặc dấu + ở đầu một ngày để bắt đầu ở ngày đó.',
  'help.guide.add-entry.step.2':
    'Đặt tên cho khoảnh khắc và viết câu chuyện. Thanh công cụ phía trên văn bản thêm chữ đậm, chữ nghiêng, tiêu đề, trích dẫn, liên kết và danh sách bằng Markdown.',
  'help.guide.add-entry.step.3':
    'Chọn tâm trạng và thời tiết, kiểm tra ngày, và ghim một vị trí nếu muốn: tìm một địa điểm hoặc dùng vị trí hiện tại của bạn.',
  'help.guide.add-entry.step.4': 'Nhấp vào “Lưu”.',
  'help.guide.add-entry.result':
    'Mục xuất hiện ở ngày của nó trong dòng thời gian và là một ghim trên bản đồ. Các con số của nó được cập nhật ở đầu trang.',
  'help.guide.add-entry.tip.1': 'Viết vào một gợi ý cũng là trình soạn thảo đó, với địa điểm đã được đặt sẵn.',
  'help.guide.add-entry.tip.2':
    'Thẻ ở dưới cùng là văn bản tự do, “hidden gem” hay “best meal”, và tìm kiếm sẽ tìm thấy chúng.',
  // entry-photos
  'help.guide.entry-photos.title': 'Thêm ảnh và video vào một mục',
  'help.guide.entry-photos.goal': 'Đặt ảnh lên một ngày; ảnh đầu tiên trở thành ảnh bìa của mục.',
  'help.guide.entry-photos.step.1': 'Mở menu của mục bằng dấu ⋯ trên thẻ của nó và chọn “Chỉnh sửa”.',
  'help.guide.entry-photos.step.2':
    'Nhấp vào “Tải ảnh lên” và chọn tệp. “Từ thư viện” lấy ảnh đã có trong thư viện của hành trình; “External photos” tìm trong thư viện Immich hoặc Synology đã kết nối cho ngày đó.',
  'help.guide.entry-photos.step.3': 'Di chuột lên một ảnh để thấy “làm số 1” và chọn ảnh bìa, rồi nhấp vào “Lưu”.',
  'help.guide.entry-photos.result': 'Ảnh hiện trên thẻ và trong thư viện; ảnh đầu tiên là ảnh thu nhỏ ở mọi nơi.',
  'help.guide.entry-photos.tip.1':
    'Video vào một mục theo cùng cách: mp4, m4v, webm hoặc mov tối đa 500 MB, được lưu nguyên như khi tải lên.',
  'help.guide.entry-photos.tip.2':
    'Tệp HEIC từ iPhone được chuyển sang JPEG khi tải lên, điều này làm mất siêu dữ liệu GPS và máy ảnh của chúng.',
  // suggestions
  'help.guide.suggestions.title': 'Dùng hoặc bỏ qua các gợi ý',
  'help.guide.suggestions.goal': 'Biến các địa điểm của chuyến đi thành mục, và dọn đi những gợi ý bạn sẽ không viết.',
  'help.guide.suggestions.step.1':
    'Gợi ý là một thẻ nhạt hơn với tên địa điểm in nghiêng. Nhấp vào nó để mở trình soạn thảo với địa điểm và ngày đã được đặt sẵn.',
  'help.guide.suggestions.step.2':
    'Nhấp vào “Bỏ qua gợi ý này” trên thẻ bạn sẽ không dùng. Nó rời khỏi dòng thời gian mà không bị xóa, và đồng bộ chuyến đi sẽ không đưa nó ra lần nữa.',
  'help.guide.suggestions.step.3':
    'Đổi ý? “Cài đặt hành trình” cho biết bao nhiêu gợi ý đã bị bỏ qua, và “Lấy lại các gợi ý đã bỏ qua” đưa tất cả trở lại.',
  'help.guide.suggestions.result':
    'Dòng thời gian chỉ giữ những gì bạn định viết; công tắc ở đầu trang ẩn mọi gợi ý cùng lúc trong khi bạn đọc.',
  'help.guide.suggestions.tip.1': 'Một địa điểm kéo dài qua hai ngày cho một gợi ý ở mỗi ngày.',
  'help.guide.suggestions.tip.2': 'Gợi ý không bao giờ được tính vào thống kê; chỉ các mục đã viết mới được tính.',
  // add-on-day
  'help.guide.add-on-day.title': 'Thêm một mục vào một ngày trước đó',
  'help.guide.add-on-day.goal': 'Viết về một ngày đã qua mà không phải sửa lại ngày sau đó.',
  'help.guide.add-on-day.step.1': 'Nhấp vào dấu + ở đầu ngày đó.',
  'help.guide.add-on-day.step.2': 'Trình soạn thảo mở ra với ngày đó đã được đặt. Viết và “Lưu” như thường lệ.',
  'help.guide.add-on-day.result': 'Mục nằm ngay vào đúng ngày.',
  'help.guide.add-on-day.tip.1': 'Trong một ngày, các mũi tên trong menu của mục chuyển nó lên sớm hơn hoặc muộn hơn.',
  // pros-cons
  'help.guide.pros-cons.title': 'Thêm một nhận xét',
  'help.guide.pros-cons.goal': 'Tóm tắt một ngày bằng điều gì tuyệt và điều gì không.',
  'help.guide.pros-cons.step.1':
    'Trong trình soạn thảo, tìm “Ưu và nhược điểm” dưới câu chuyện. Gõ một điểm vào “Ưu điểm” hoặc “Nhược điểm” và dùng “Thêm cái khác” cho điểm tiếp theo.',
  'help.guide.pros-cons.step.2': 'Lưu. Nhận xét hiện trên thẻ dưới dạng hai danh sách ngắn.',
  'help.guide.pros-cons.result': 'Thích và không thích thấy ngay trong nháy mắt, dưới câu chuyện.',
  'help.guide.pros-cons.tip.1':
    'Hành trình không dùng nhận xét có thể tắt phần này dưới “Các trường của mục” trong “Cài đặt hành trình”.',
  // search-journey
  'help.guide.search-journey.title': 'Tìm thứ gì đó trong một nhật ký dài',
  'help.guide.search-journey.goal': 'Đến đúng mục bạn muốn mà không phải cuộn qua hàng tuần.',
  'help.guide.search-journey.step.1':
    'Gõ vào “Tìm trong hành trình này” trên thanh công cụ. Dòng thời gian được lọc khi bạn gõ, trên tiêu đề, câu chuyện, địa điểm và thẻ. Dấu và chữ hoa chữ thường không quan trọng.',
  'help.guide.search-journey.step.2':
    'Công tắc gợi ý ở đầu trang ẩn các thẻ chưa viết trong khi bạn đọc. Khi dòng thời gian đã dài, hai nút tròn nổi phía trên cạnh dưới của nó: lên đầu trang, và nhảy đến mục cuối cùng.',
  'help.guide.search-journey.result': 'Chỉ các mục khớp còn lại; xóa trống ô để thấy lại mọi thứ.',
  'help.guide.search-journey.tip.1':
    'Hành trình đang diễn ra mở ở ngày hôm nay, nên trang hiện tại thường đã nằm trong tầm nhìn.',
  'help.guide.search-journey.tip.2': 'Thẻ cũng được tính: tìm “hidden gem” sẽ thấy mọi mục được gắn thẻ đó.',
  // gallery-map
  'help.guide.gallery-map.title': 'Duyệt thư viện ảnh và bản đồ',
  'help.guide.gallery-map.goal': 'Xem toàn bộ hành trình dưới dạng ảnh, và dưới dạng địa điểm trên bản đồ.',
  'help.guide.gallery-map.step.1':
    'Chuyển sang “Phòng trưng bày” trên thanh công cụ: mọi ảnh của mọi mục, cộng thêm ảnh tải thẳng lên thư viện. Nhấp vào một ảnh để mở hộp xem ảnh.',
  'help.guide.gallery-map.step.2':
    'Bản đồ ở bên phải hiện các mục là ghim theo thứ tự ngày, các địa điểm của những chuyến đi đã liên kết, và mọi tuyến GPX đã nhập vào những chuyến đi đó, với màu nó có trong trình lập kế hoạch.',
  'help.guide.gallery-map.result':
    'Di chuột lên một tuyến để thấy tên của nó. Đường nét đứt giữa các mục do TREK vẽ; tuyến là lộ trình bạn thực sự đã ghi lại.',
  'help.guide.gallery-map.tip.1': 'Có thể tắt tuyến cho một hành trình dưới “Cài đặt hành trình”.',
  'help.guide.gallery-map.tip.2':
    'Ảnh trong thư viện có vị trí cũng hiện trên bản đồ công khai, khi cả “Phòng trưng bày” và “Bản đồ” đều được chia sẻ.',
  // entry-fields
  'help.guide.entry-fields.title': 'Tắt các trường của mục',
  'help.guide.entry-fields.goal': 'Giữ trình soạn thảo chỉ với những gì hành trình này dùng.',
  'help.guide.entry-fields.step.1': 'Mở “Cài đặt hành trình” từ đầu trang.',
  'help.guide.entry-fields.step.2': 'Dưới “Các trường của mục”, tắt “Tâm trạng”, “Thời tiết” hoặc “Ưu và nhược”.',
  'help.guide.entry-fields.result':
    'Trình soạn thảo không còn hỏi chúng nữa. Không mất gì đã viết: bật lại một trường sẽ đưa các giá trị đã lưu trở lại tầm nhìn, và hành trình được chia sẻ ẩn đúng các trường đó.',
  'help.guide.entry-fields.tip.1':
    'Các công tắc là theo từng hành trình, nên một chuyến công tác và một kỳ nghỉ có thể khác nhau.',
  // link-trip
  'help.guide.link-trip.title': 'Liên kết một chuyến đi khác',
  'help.guide.link-trip.goal': 'Đưa các địa điểm của chuyến đi thứ hai vào nhật ký dưới dạng gợi ý.',
  'help.guide.link-trip.step.1': 'Mở “Cài đặt hành trình” từ đầu trang.',
  'help.guide.link-trip.step.2': 'Dưới các chuyến đi đã liên kết, nhấp vào “Thêm chuyến đi”.',
  'help.guide.link-trip.step.3': 'Chọn chuyến đi.',
  'help.guide.link-trip.result':
    'Các địa điểm của nó đến dòng thời gian dưới dạng gợi ý vào ngày của chúng, và các tuyến GPX của nó nhập vào bản đồ.',
  'help.guide.link-trip.tip.1': 'Dấu × cạnh một chuyến đi đã liên kết sẽ hủy liên kết nó; các mục bạn đã viết vẫn còn.',
  'help.guide.link-trip.tip.2': 'Các mục có ngày chỉ được tính một lần, dù bao nhiêu chuyến đi bao trùm ngày đó.',
  // share-public
  'help.guide.share-public.title': 'Chia sẻ hành trình công khai',
  'help.guide.share-public.goal': 'Cho những người không có tài khoản TREK một liên kết chỉ đọc.',
  'help.guide.share-public.step.1': 'Mở “Cài đặt hành trình” và tìm “Chia sẻ công khai”.',
  'help.guide.share-public.step.2': 'Nhấp vào “Tạo liên kết chia sẻ”.',
  'help.guide.share-public.step.3':
    'Chọn những gì khách xem thấy: “Dòng thời gian”, “Phòng trưng bày” và “Bản đồ” là các công tắc riêng. “Sao chép” đưa liên kết vào bảng nhớ tạm của bạn.',
  'help.guide.share-public.result':
    'Bất kỳ ai có liên kết đều thấy các phần đã bật và không gì khác; các trường bạn đã tắt trong “Các trường của mục” cũng bị ẩn ở đó.',
  'help.guide.share-public.tip.1':
    'Ảnh chỉ xuất hiện trên bản đồ công khai khi cả “Phòng trưng bày” và “Bản đồ” đều bật; khi “Bản đồ” tắt, tọa độ của chúng bị gỡ trước khi rời máy chủ.',
  'help.guide.share-public.tip.2': 'Xóa liên kết ở cùng chỗ đó để kết thúc chia sẻ.',
  // contributors
  'help.guide.contributors.title': 'Viết cùng nhau',
  'help.guide.contributors.goal': 'Cho một người bạn đồng hành thêm các mục và ảnh của riêng họ.',
  'help.guide.contributors.step.1': 'Mở “Cài đặt hành trình” và cuộn đến phần cộng tác viên.',
  'help.guide.contributors.step.2': 'Nhấp vào “Mời cộng tác viên” và tìm người dùng theo tên hoặc email.',
  'help.guide.contributors.step.3': 'Chọn một vai trò và xác nhận.',
  'help.guide.contributors.result':
    'Hành trình xuất hiện trong danh sách của họ và các mục của họ mang tên họ. Gỡ một cộng tác viên bằng dấu × cạnh họ.',
  'help.guide.contributors.tip.1':
    'Cộng tác viên dành cho những người trên TREK này. Với mọi người khác thì có liên kết công khai.',
  // studio
  'help.guide.studio.title': 'Dàn trang hành trình thành một sách ảnh',
  'help.guide.studio.goal': 'Biến nhật ký thành các trang in được.',
  'help.guide.studio.step.1': 'Nhấp vào “Studio” ở đầu trang. Trình thiết kế mở ra phía trên hành trình.',
  'help.guide.studio.step.2': 'Tên hành trình ở bên trái thanh trên cùng là đường quay lại; nó đưa bạn về đúng chỗ cũ.',
  'help.guide.studio.result':
    'Dải trang ở bên trái, trang đôi trên bàn làm việc, thuộc tính ở bên phải. “Auto layout” dựng cuốn sách từ các mục của bạn; “Export” tạo một PDF sẵn sàng để in.',
  'help.guide.studio.tip.1': 'Studio cần cửa sổ rộng ít nhất 1024 px và không được cung cấp trên điện thoại.',
  'help.guide.studio.tip.2':
    'Cuốn sách kế thừa quyền truy cập của hành trình: ai được đọc hành trình thì được mở nó, ai được chỉnh sửa thì được lưu.',
  // archive-journey
  'help.guide.archive-journey.title': 'Lưu trữ hoặc xóa một hành trình',
  'help.guide.archive-journey.goal': 'Đóng một hành trình đã kết thúc, hoặc xóa hẳn một hành trình.',
  'help.guide.archive-journey.step.1': 'Mở “Cài đặt hành trình”.',
  'help.guide.archive-journey.step.2':
    'Ở dưới cùng, “Hành trình lưu trữ” kết thúc nó và đánh dấu là đã lưu trữ; “Khôi phục hành trình” đưa nó trở lại. “Xóa bỏ” xóa nó cùng mọi mục và ảnh, sau một bước xác nhận.',
  'help.guide.archive-journey.result':
    'Hành trình đã lưu trữ vẫn đọc được và chia sẻ được; chỉ là nó không còn mở ở ngày hôm nay nữa.',
  'help.guide.archive-journey.tip.1':
    'Xóa không thể hoàn tác, và không đụng đến các chuyến đi mà hành trình đã liên kết.',
  'help.guide.archive-journey.tip.2': 'Ảnh bìa, tên và phụ đề nằm trong cùng hộp thoại, ở trên cùng.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio dàn trang một hành trình thành cuốn sách ảnh in được. Nó mở phía trên nhật ký: thanh trang và nội dung ở bên trái, trang đôi bạn đang làm ở giữa, thuộc tính của nó ở bên phải. Auto layout dựng bản nháp đầu tiên từ các mục của bạn; mọi thứ sau đó tùy bạn di chuyển, cắt và đổi kiểu, với hoàn tác cho từng bước.',
  'help.ctx.journey-studio.bullet.1':
    'Thanh trên cùng: Back to the journey, Book view, Undo và Redo, Page format, Auto layout và Export. Dấu “Đã lưu” cạnh tiêu đề cho bạn biết khi nào sách đã được lưu.',
  'help.ctx.journey-studio.bullet.2':
    'Thanh bên trái có năm mục: Pages, Content (ảnh và các mục của hành trình), Elements (văn bản, hình, đường kẻ, lưới, khung, icon), “Hành trình” (bản đồ, quốc gia, cờ và dấu dựng từ hành trình) và Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Vùng làm việc: trang đôi hiện tại với lề tràn và lề an toàn, thanh thu phóng bên dưới, Fit to view, và “Tải trang đôi này về” ở bên phải.',
  'help.ctx.journey-studio.bullet.4':
    'Properties ở bên phải: vị trí và kích thước, cắt và tiêu điểm, Fill hoặc Fit, diện mạo, góc, khung, thứ tự xếp lớp và khóa của thứ đang chọn; số trang và tài liệu khi không chọn gì.',
  'help.ctx.journey-studio.bullet.5':
    'Sách có hình dạng của một cuốn sách đóng gáy: bìa, một trang đầu đơn, các trang đôi, một trang cuối đơn và bìa sau. Số trang đếm từ trang đầu và in đúng như hiển thị.',
  'help.ctx.journey-studio.bullet.6':
    'Nhiều người có thể thiết kế cùng lúc: ai cũng thấy con trỏ của người khác kèm tên, và lưu đè lên phiên bản người khác đã thay đổi sẽ trả về một xung đột thay vì ghi đè công việc của họ.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Dựng sách tự động',
  'help.guide.studio-auto-layout.goal':
    'Có ngay bản nháp đầu tiên hoàn chỉnh từ các mục và ảnh của nhật ký chỉ với một cú nhấp.',
  'help.guide.studio-auto-layout.step.1': 'Nhấp Auto layout trên thanh trên cùng.',
  'help.guide.studio-auto-layout.step.2':
    'Chọn “Toàn bộ sách”: nó thay thế mọi trang, giữ lại tiêu đề và thiết lập trang của bạn. “Trang này” chỉ dựng lại trang đôi đang trên màn hình, và chỉ hiện với trang đôi được tạo từ một mục.',
  'help.guide.studio-auto-layout.step.3':
    'Xem qua thanh trang. Undo lấy lại toàn bộ bố cục nếu bạn thích bản trước hơn.',
  'help.guide.studio-auto-layout.result':
    'Mỗi mục một trang đôi, theo thứ tự, với ảnh, tiêu đề và câu chuyện đã được đặt sẵn cho bạn. Mọi phần tử vẫn theo mục của nó cho đến khi bạn chỉnh sửa.',
  'help.guide.studio-auto-layout.tip.1': 'Cả hai lựa chọn đều là bước hoàn tác bình thường, nên cứ thoải mái thử.',
  'help.guide.studio-auto-layout.tip.2':
    'Phần tử mà Auto layout gắn với một mục sẽ theo kịp các chỉnh sửa của mục đó cho đến khi bạn chạm vào nó trong Properties; điều đó cắt liên kết.',
  // studio-pages
  'help.guide.studio-pages.title': 'Thêm, di chuyển và xóa trang đôi',
  'help.guide.studio-pages.goal': 'Định hình cuốn sách từng trang một.',
  'help.guide.studio-pages.step.1':
    'Mở Pages trên thanh bên. Các hình thu nhỏ là cuốn sách theo thứ tự: bìa, trang đầu, các trang đôi, trang cuối, bìa sau.',
  'help.guide.studio-pages.step.2':
    '“Thêm trang” ở dưới cùng đặt một trang đôi mới trước trang cuối; dấu + giữa hai hình thu nhỏ chèn một trang ngay tại đó.',
  'help.guide.studio-pages.step.3':
    'Di chuột lên hình thu nhỏ để thấy các thao tác: “Chuyển lên trước”, “Chuyển xuống sau”, “Nhân bản trang” và “Xóa trang”. Nhấp vào hình thu nhỏ để mở trang đôi đó trong vùng làm việc.',
  'help.guide.studio-pages.result':
    'Bìa, trang đầu, trang cuối và bìa sau giữ nguyên chỗ; trang đôi mới luôn nằm giữa chúng.',
  'help.guide.studio-pages.tip.1':
    'Book view trên thanh trên cùng hiện cả cuốn sách dưới dạng các tờ, đúng như khi đóng gáy.',
  'help.guide.studio-pages.tip.2': 'Số trang được bật dưới “Tài liệu” trong Properties, khi không chọn gì.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Áp dụng một bố cục cho trang đôi',
  'help.guide.studio-layouts.goal': 'Cho trang đôi một cách sắp xếp sẵn các khung ảnh và văn bản.',
  'help.guide.studio-layouts.step.1':
    'Mở Layouts trên thanh bên. Mười ba bố cục trang đôi, và một bộ riêng cho bìa, bìa sau và các trang đơn.',
  'help.guide.studio-layouts.step.2':
    'Nhấp một bố cục. Trang đôi trong vùng làm việc nhận các khung của nó; ảnh và văn bản bạn đã có được đổ vào các khung đó.',
  'help.guide.studio-layouts.result':
    'Khung trống chờ nội dung: kéo một ảnh từ Content vào, hoặc dùng Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Một bố cục là bước hoàn tác như mọi bước khác.',
  // studio-content
  'help.guide.studio-content.title': 'Đặt ảnh và mục lên trang',
  'help.guide.studio-content.goal': 'Đưa tư liệu của chính hành trình lên trang đôi.',
  'help.guide.studio-content.step.1':
    'Mở Content trên thanh bên. Photos liệt kê mọi ảnh của hành trình; Entries liệt kê các mục kèm văn bản.',
  'help.guide.studio-content.step.2':
    'Kéo một ảnh lên trang đôi, hoặc vào một khung trống, hoặc nhấp Add to this page bên dưới ảnh. “Tải ảnh lên” thêm ảnh chưa có trong hành trình.',
  'help.guide.studio-content.step.3':
    'Dưới một mục, Title, Story và Place đặt văn bản đó lên trang dưới dạng phần tử văn bản; ngày và tọa độ vào dưới dạng dấu, và ảnh của mục được liệt kê ngay tại đó.',
  'help.guide.studio-content.result':
    'Ảnh thả xuống trở thành phần tử ảnh; văn bản vẫn theo mục cho đến khi bạn chỉnh sửa.',
  'help.guide.studio-content.tip.1': 'Ô tìm kiếm ở đầu Content lọc cả hai danh sách.',
  'help.guide.studio-content.tip.2':
    'Thả một tệp từ màn hình máy tính vào vùng làm việc sẽ tải lên và đặt nó trong một lần.',
  // studio-elements
  'help.guide.studio-elements.title': 'Thêm văn bản, hình và icon',
  'help.guide.studio-elements.goal': 'Trang trí trang đôi ngoài ảnh và câu chuyện.',
  'help.guide.studio-elements.step.1': 'Mở Elements trên thanh bên.',
  'help.guide.studio-elements.step.2':
    'Nhấp một kiểu văn bản cho tiêu đề hoặc chú thích, một hình, một đường kẻ, một lưới, một khung trống với kiểu khung, hoặc một icon từ thư viện có thể tìm kiếm. Mỗi thứ rơi vào giữa trang đôi, sẵn sàng để di chuyển.',
  'help.guide.studio-elements.result':
    'Nhấp đúp vào phần tử văn bản để gõ vào; Properties chứa phông chữ, độ đậm, cỡ, khoảng cách và căn lề.',
  'help.guide.studio-elements.tip.1': 'Khung là ô ảnh trống: thả ảnh vào sau.',
  // studio-travel
  'help.guide.studio-travel.title': 'Thêm bản đồ, cờ và số liệu',
  'help.guide.studio-travel.goal': 'Biến chính hành trình thành số liệu trên trang.',
  'help.guide.studio-travel.step.1': 'Mở “Hành trình” trên thanh bên.',
  'help.guide.studio-travel.step.2':
    'Chọn thứ cần thêm: bản đồ lộ trình của các mục, đường viền quốc gia, danh sách hoặc lưới quốc gia, cờ, dấu ngày, ngày thứ hoặc khoảng cách, hoặc tóm tắt cả chuyến đi. Mỗi thứ được dựng từ dữ liệu của hành trình và cập nhật theo nó.',
  'help.guide.studio-travel.result':
    'Phần tử xuất hiện trên trang đôi; Properties chỉnh kiểu của nó, và với bản đồ là vùng hiển thị.',
  'help.guide.studio-travel.tip.1':
    'Dấu theo mục mà trang đôi được tạo ra, nên dấu ngày trên trang đôi được dàn tự động đã hiện đúng ngày đó.',
  // studio-properties
  'help.guide.studio-properties.title': 'Chỉnh sửa thứ bạn đã chọn',
  'help.guide.studio-properties.goal': 'Di chuyển, cắt, đổi kiểu và xếp lớp một phần tử bằng bảng thuộc tính.',
  'help.guide.studio-properties.step.1':
    'Nhấp vào một phần tử trên trang đôi. Các núm kéo xuất hiện để chỉnh kích thước và xoay; kéo phần tử để di chuyển.',
  'help.guide.studio-properties.step.2':
    'Properties ở bên phải theo lựa chọn: vị trí và kích thước, Crop với tiêu điểm quyết định phần nào ở lại trong khung, Fill hoặc Fit, bộ lọc Look, bán kính Corner, kiểu “Khung”, thứ tự xếp lớp và Lock.',
  'help.guide.studio-properties.step.3':
    '“Nhân bản” và Delete nằm ở đầu bảng thuộc tính; Undo trên thanh trên cùng hoàn tác bất kỳ thao tác nào.',
  'help.guide.studio-properties.result':
    'Phần tử đã khóa không thể nắm được trên trang nữa, giúp giữ an toàn bố cục đã xong trong khi bạn làm việc xung quanh.',
  'help.guide.studio-properties.tip.1':
    'Giữ Shift và nhấp để chọn nhiều phần tử; bảng thuộc tính sẽ chỉnh sửa chúng cùng lúc.',
  'help.guide.studio-properties.tip.2':
    'Chỉnh sửa một phần tử do Auto layout đặt sẽ cắt liên kết với mục; nó ngừng theo các thay đổi sau này của mục đó.',
  // studio-format
  'help.guide.studio-format.title': 'Chọn khổ trang',
  'help.guide.studio-format.goal': 'Đặt kích thước sách sẽ được in, trước khi bố cục phụ thuộc vào nó.',
  'help.guide.studio-format.step.1': 'Nhấp Page format trên thanh trên cùng.',
  'help.guide.studio-format.step.2':
    'Chọn Square 21 × 21 cm, Square 30 × 30 cm, A4 hoặc A5 ngang hoặc dọc, hoặc nhập chiều rộng và chiều cao tùy chỉnh theo milimét. Tràn lề và lề an toàn nằm bên dưới.',
  'help.guide.studio-format.result':
    'Mọi trang đôi được vẽ ở kích thước đó, mặc định với tràn lề 3 mm và lề an toàn 5 mm.',
  'help.guide.studio-format.tip.1': 'Đổi khổ trước, rồi chạy Auto layout; bố cục được dựng cho kích thước nó tìm thấy.',
  'help.guide.studio-format.tip.2': 'Hỏi xưởng in về giá trị tràn lề và lề an toàn của họ rồi nhập các giá trị đó.',
  // studio-export
  'help.guide.studio-export.title': 'Xuất sách thành PDF',
  'help.guide.studio-export.goal': 'Có một tệp sẵn sàng để in, hoặc một tệp để đọc trên màn hình.',
  'help.guide.studio-export.step.1': 'Nhấp Export trên thanh trên cùng.',
  'help.guide.studio-export.step.2':
    'Chọn “Trang đơn”, mỗi tờ một trang theo thứ tự đọc, là thứ xưởng in cần, hoặc “Trang đôi”, hai trang một lúc như khi mở sách. “Dấu cắt” thêm tràn lề ở mọi cạnh và đánh dấu chỗ cắt.',
  'help.guide.studio-export.step.3':
    'Nhấp “Xem trước khi in”. Trình duyệt mở các trang và “Lưu thành PDF” biến chúng thành tệp.',
  'help.guide.studio-export.result': 'Một tệp PDF với đúng số tờ mà hộp thoại đã báo, ở khổ trang bạn đã đặt.',
  'help.guide.studio-export.tip.1': 'Tạo PDF chỉ làm được trên máy tính, giống như chính Studio.',
  'help.guide.studio-export.tip.2':
    'Để in thử, xuất “Trang đôi” không có dấu cắt; cho xưởng in, xuất “Trang đơn” có dấu cắt.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Dùng lại một trang đôi trong sách khác',
  'help.guide.studio-spread-file.goal': 'Mang một thiết kế bạn thích từ sách của hành trình này sang hành trình khác.',
  'help.guide.studio-spread-file.step.1':
    'Với trang đôi đang ở vùng làm việc, nhấp “Tải trang đôi này về” ở đầu bên phải của thanh thu phóng. Tệp chứa thiết kế, không chứa ảnh.',
  'help.guide.studio-spread-file.step.2':
    'Trong cuốn sách kia, mở Pages và nhấp “Nhập” cạnh “Thêm trang”, rồi chọn tệp.',
  'help.guide.studio-spread-file.result':
    'Trang đôi đến cùng các khung và kiểu văn bản của nó; thả ảnh của hành trình mới vào các khung.',
  'help.guide.studio-spread-file.tip.1': 'Tệp không phải thiết kế trang đôi sẽ bị từ chối kèm lý do.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Cài đặt',
  'help.ctx.settings.summary':
    'Cài đặt cá nhân của bạn, mỗi chủ đề một tab trong thanh bên bên trái. Hầu hết công tắc có hiệu lực ngay khi bạn gạt; biểu mẫu có nút “Lưu” ở dưới cùng sẽ chờ bạn nhấn nút đó. Không có gì ở đây làm thay đổi TREK của người khác.',
  'help.ctx.settings.bullet.1':
    'Thanh bên bên trái: “Hiển thị”, “Giao diện”, “Bản đồ”, “Thông báo”, “Tích hợp”, “Ngoại tuyến” và “Tài khoản”. “Plugin” xuất hiện khi đã cài một plugin, “Về” xuất hiện trên TREK tự lưu trữ.',
  'help.ctx.settings.bullet.2':
    '“Hiển thị” là ngôn ngữ, đơn vị, tiền tệ và màn hình ứng dụng mở lúc đầu; “Giao diện” là chủ đề, màu sắc, cỡ chữ và các tiện ích của bảng điều khiển.',
  'help.ctx.settings.bullet.3':
    '“Bản đồ” chọn công cụ vẽ và kiểu của nó; “Thông báo” chọn các kênh liên lạc tới bạn; “Tích hợp” gồm thư viện ảnh, khóa API và MCP; “Ngoại tuyến” là những gì ứng dụng giữ trên thiết bị này.',
  'help.ctx.settings.bullet.4':
    '“Tài khoản” chứa hồ sơ, mật khẩu, xác thực hai yếu tố, mật mã và việc xóa tài khoản của bạn.',
  'help.ctx.settings-display.title': 'Hiển thị',
  'help.ctx.settings-display.summary':
    'Ngôn ngữ, đơn vị và tiền tệ, cách bản đồ và đặt chỗ hoạt động, và màn hình TREK mở lúc đầu. Mọi thay đổi ở đây có hiệu lực ngay.',
  'help.ctx.settings-display.bullet.1':
    '“Ngôn ngữ & khu vực”: ngôn ngữ giao diện, định dạng thời gian, tiền tệ hiển thị, đơn vị khoảng cách và nhiệt độ.',
  'help.ctx.settings-display.bullet.2':
    '“Du lịch & bản đồ”: tuyến đường đặt chỗ luôn có trên bản đồ, nút khám phá địa điểm, tối ưu hóa tuyến đường từ chỗ ở của bạn, mã đặt chỗ được làm mờ và tuyến đường đặt chỗ có nhãn.',
  'help.ctx.settings-display.bullet.3':
    '“Khởi động”: TREK mở ở bảng điều khiển hay ở chuyến đi đang diễn ra, và tab nào của chuyến đi hiện ra trước.',
  'help.ctx.settings-appearance.title': 'Giao diện',
  'help.ctx.settings-appearance.summary':
    'TREK trông thế nào trên tài khoản này: sáng hay tối, màu nhấn, hiệu ứng kính và chuyển động, cỡ chữ, và bảng điều khiển hiện những tiện ích nào. Mọi thứ áp dụng ngay, trên mọi thiết bị bạn đăng nhập.',
  'help.ctx.settings-appearance.bullet.1':
    '“Chủ đề”: “Sáng”, “Tối” hoặc “Tự động”, và “Bảng màu” với “Màu nhấn tùy chỉnh” của riêng bạn.',
  'help.ctx.settings-appearance.bullet.2':
    '“Khả năng đọc”: “Độ trong suốt”, “Giảm chuyển động”, “Mật độ” và “Cỡ chữ”, với cỡ nâng cao cho từng cấp.',
  'help.ctx.settings-appearance.bullet.3':
    '“Tiện ích bảng điều khiển”: mỗi tiện ích một công tắc, riêng cho “Máy tính” và “Di động”.',
  'help.ctx.settings-appearance.bullet.4': '“Đặt lại về mặc định” ở dưới cùng đưa mọi thứ về như cũ.',
  'help.ctx.settings-map.title': 'Bản đồ',
  'help.ctx.settings-map.summary':
    'Công cụ nào vẽ bản đồ và theo kiểu nào. Leaflet là bản đồ raster cổ điển, MapLibre vẽ ô vector không cần mã thông báo nào, Mapbox thêm tòa nhà 3D và địa hình bằng mã thông báo của riêng bạn.',
  'help.ctx.settings-map.bullet.1':
    '“Nhà cung cấp bản đồ”: Leaflet, MapLibre hoặc Mapbox, mỗi cái có một dòng cho biết nó cần gì.',
  'help.ctx.settings-map.bullet.2':
    '“Kiểu bản đồ” và “Mẫu bản đồ”: diện mạo của các ô bản đồ, cộng với mã thông báo hoặc khóa mà nhà cung cấp yêu cầu.',
  'help.ctx.settings-map.bullet.3':
    '“Chế độ chất lượng cao” để khử răng cưa và phép chiếu địa cầu; “Lưu bản đồ” ghi lại lựa chọn.',
  'help.ctx.settings-notifications.title': 'Thông báo',
  'help.ctx.settings-notifications.summary':
    'TREK liên lạc với bạn ở đâu ngoài ứng dụng: một chủ đề ntfy, một webhook, hoặc một kênh do plugin cung cấp. Bên dưới các kênh, mỗi sự kiện một hàng quyết định cái gì đi đâu.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: chủ đề, máy chủ riêng của bạn (tùy chọn) và mã thông báo truy cập (tùy chọn), với “Bài kiểm tra” để gửi ngay một tin.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: một URL nhận mọi sự kiện dưới dạng JSON, với “Bài kiểm tra”.',
  'help.ctx.settings-notifications.bullet.3':
    'Các hàng tùy chọn: với mỗi sự kiện, kênh nào đang bật. Kênh của plugin hiện “Cấu hình” cho đến khi được thiết lập.',
  'help.ctx.settings-integrations.title': 'Tích hợp',
  'help.ctx.settings-integrations.summary':
    'Mọi thứ kết nối vào TREK từ bên ngoài: thư viện ảnh cho nhật ký, khóa API cho các tập lệnh, và điểm cuối MCP với mã thông báo và máy khách OAuth cho trợ lý AI.',
  'help.ctx.settings-integrations.bullet.1':
    'Nhà cung cấp ảnh: Immich và Synology Photos, mỗi cái có URL và khóa riêng, “Kiểm tra kết nối” và “Lưu”.',
  'help.ctx.settings-integrations.bullet.2':
    '“Khóa API”: khóa cá nhân cho các tập lệnh và công cụ khác gọi API của TREK nhân danh bạn.',
  'help.ctx.settings-integrations.bullet.3':
    '“MCP Cấu hình”: điểm cuối, một cấu hình máy khách sẵn để sao chép, và các mã thông báo API.',
  'help.ctx.settings-integrations.bullet.4':
    '“OAuth 2.1 Khách hàng”: các ứng dụng đăng nhập qua TREK, với URI chuyển hướng, phạm vi được phép, máy khách không đăng nhập trình duyệt và các phiên đang hoạt động.',
  'help.ctx.settings-offline.title': 'Ngoại tuyến',
  'help.ctx.settings-offline.summary':
    'Những gì TREK giữ trên thiết bị này để chuyến đi vẫn mở được khi không có kết nối, và điều gì xảy ra khi một thay đổi làm lúc ngoại tuyến va chạm với một thay đổi làm ở nơi khác.',
  'help.ctx.settings-offline.bullet.1':
    '“Chế độ ngoại tuyến”: “Bắt buộc chế độ ngoại tuyến” làm ứng dụng hoạt động như thể mất mạng, để thử nghiệm hoặc khi dùng kết nối tính phí theo dung lượng.',
  'help.ctx.settings-offline.bullet.2':
    '“Chuẩn bị cho ngoại tuyến”: “Tải xuống để dùng ngoại tuyến” tải ngay các chuyến đi của bạn và ô bản đồ của chúng.',
  'help.ctx.settings-offline.bullet.3':
    '“Lưu trữ gì khi ngoại tuyến”: bật hoặc tắt ô bản đồ, và một công tắc cho mỗi chuyến đi.',
  'help.ctx.settings-offline.bullet.4':
    '“Xung đột đồng bộ hóa” và “Bộ nhớ đệm ngoại tuyến”: cách xử lý va chạm, số thay đổi đang chờ và thất bại, “Đồng bộ lại ngay” và “Xóa bộ nhớ đệm”.',
  'help.ctx.settings-account.title': 'Tài khoản',
  'help.ctx.settings-account.summary':
    'Bạn là ai trên TREK này và bạn đăng nhập thế nào: hồ sơ và ảnh đại diện, mật khẩu, xác thực hai yếu tố, mật mã, và ở dưới cùng là việc xóa tài khoản.',
  'help.ctx.settings-account.bullet.1': 'Hồ sơ: tên người dùng, email và ảnh đại diện, lưu bằng “Lưu hồ sơ”.',
  'help.ctx.settings-account.bullet.2':
    '“Thay đổi mật khẩu”: mật khẩu hiện tại, mật khẩu mới hai lần, “Cập nhật mật khẩu”.',
  'help.ctx.settings-account.bullet.3':
    '“Xác thực hai yếu tố (2FA)” bằng ứng dụng xác thực và mã dự phòng; “Mật mã” để đăng nhập không cần mật khẩu.',
  'help.ctx.settings-account.bullet.4':
    '“Xóa tài khoản” ở dưới cùng, sau một bước xác nhận. Quản trị viên cuối cùng không thể tự xóa mình.',
  // language-region
  'help.guide.language-region.title': 'Đặt ngôn ngữ, đơn vị và tiền tệ',
  'help.guide.language-region.goal': 'Để TREK nói ngôn ngữ của bạn và đếm theo cách của bạn.',
  'help.guide.language-region.step.1':
    'Chọn ngôn ngữ giao diện trong “Ngôn ngữ & khu vực”. TREK chuyển ngay, trên mọi thiết bị bạn đăng nhập.',
  'help.guide.language-region.step.2':
    'Bên dưới, chọn định dạng thời gian, tiền tệ hiển thị, đơn vị khoảng cách và nhiệt độ.',
  'help.guide.language-region.result':
    'Ngày tháng, khoảng cách và tiền đọc đúng như bạn mong đợi; tiền tệ riêng của chuyến đi vẫn hiện bên cạnh số tiền đã quy đổi.',
  'help.guide.language-region.tip.1':
    'Tiền tệ hiển thị dùng cho tổng cộng giữa các chuyến đi; mỗi chuyến đi giữ loại tiền bạn đã gán cho nó.',
  'help.guide.language-region.tip.2': 'Ngôn ngữ cũng quyết định tên ngày và tháng trong Vacay và nhật ký.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Điều chỉnh cách bản đồ và đặt chỗ hoạt động',
  'help.guide.travel-map-prefs.goal': 'Quyết định bản đồ chuyến đi hiện gì theo mặc định.',
  'help.guide.travel-map-prefs.step.1':
    'Trong “Du lịch & bản đồ”, “Luôn hiển thị tuyến đường đặt chỗ” giữ chuyến bay và tàu trên bản đồ ngay cả khi ngày của chúng không được mở; “Khám phá các địa điểm trên bản đồ” hiện nút tìm địa điểm; “Tối ưu hóa tuyến đường từ chỗ ở” bắt đầu tuyến đường từ nơi bạn ngủ.',
  'help.guide.travel-map-prefs.step.2':
    '“Mã đặt chỗ mờ” ẩn số xác nhận cho đến khi bạn di chuột lên; “Nhãn lộ trình đặt chỗ” ghi tên đặt chỗ dọc theo tuyến đường của nó.',
  'help.guide.travel-map-prefs.result':
    'Bản đồ chuyến đi tuân theo các lựa chọn này trên mọi chuyến đi, cho đến khi bạn gạt lại.',
  'help.guide.travel-map-prefs.tip.1':
    'Đây là cài đặt theo tài khoản, không theo chuyến đi. Mỗi thành viên của chuyến đi chung thấy lựa chọn riêng của mình.',
  // startup
  'help.guide.startup.title': 'Chọn màn hình TREK mở lúc đầu',
  'help.guide.startup.goal': 'Đáp xuống nơi bạn làm việc nhiều nhất, thay vì bảng điều khiển mỗi lần.',
  'help.guide.startup.step.1':
    'Trong “Khởi động”, đặt “Trang khởi động” thành “Bảng điều khiển” hoặc “Chuyến đi đang diễn ra”.',
  'help.guide.startup.step.2': '“Tab khởi động” chọn tab nào của chuyến đi hiện ra trước khi bạn mở một chuyến đi.',
  'help.guide.startup.result': 'Lần đăng nhập tiếp theo và lần chạm tiếp theo vào logo sẽ đi thẳng tới đó.',
  'help.guide.startup.tip.1':
    '“Chuyến đi đang diễn ra” nghĩa là chuyến đi đang diễn ra hôm nay, hoặc chuyến tiếp theo khi không có chuyến nào.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Đặt chủ đề và màu nhấn',
  'help.guide.theme-scheme.goal': 'Để TREK sáng, tối hoặc theo thiết bị của bạn, với màu bạn thích.',
  'help.guide.theme-scheme.step.1':
    'Trong “Chủ đề”, chọn “Sáng”, “Tối” hoặc “Tự động”. “Tự động” theo thiết bị của bạn.',
  'help.guide.theme-scheme.step.2':
    'Chọn một “Bảng màu”: “Mặc định”, “Tương phản cao”, “Chàm”, “Xanh ngọc”, “Hồng”, “Hổ phách”, “Tím” hoặc “Tùy chỉnh”.',
  'help.guide.theme-scheme.step.3':
    'Với “Tùy chỉnh”, chọn một màu nhấn từ các màu có sẵn hoặc nhập màu của riêng bạn. Kiểm tra tương phản bên cạnh cho biết chữ có còn đọc được trên màu đó không.',
  'help.guide.theme-scheme.result':
    'Nút, liên kết và phần nổi bật nhận màu nhấn ở mọi nơi, trên mọi thiết bị bạn đăng nhập.',
  'help.guide.theme-scheme.tip.1': 'Thanh điều hướng cũng có công tắc nhanh sáng hoặc tối; nó đặt cùng một chủ đề.',
  'help.guide.theme-scheme.tip.2': '“Tương phản cao” là bảng màu nên chọn khi màu mặc định trông quá nhạt.',
  // readability
  'help.guide.readability.title': 'Điều chỉnh khả năng đọc và cỡ chữ',
  'help.guide.readability.goal': 'Ít kính hơn, ít chuyển động hơn, nhiều chỗ hơn hoặc chữ lớn hơn.',
  'help.guide.readability.step.1':
    'Trong “Khả năng đọc”, “Độ trong suốt” chuyển các bảng kính thành bề mặt đặc, “Giảm chuyển động” giảm hoạt ảnh xuống tối thiểu, và “Mật độ” chọn “Thoải mái” hoặc “Gọn”.',
  'help.guide.readability.step.2':
    '“Cỡ chữ” chỉnh “Tất cả” cùng lúc; “Cỡ chữ nâng cao” cho phép tiêu đề, phụ đề, thân bài và chú thích khác nhau.',
  'help.guide.readability.result': 'Toàn bộ ứng dụng tuân theo ngay, kể cả các bảng bản đồ và nhật ký.',
  'help.guide.readability.tip.1': '“Giảm chuyển động” cũng theo cài đặt hệ thống của bạn khi bạn không chạm vào nó.',
  'help.guide.readability.tip.2':
    'Cỡ chữ được áp dụng qua các cấp kiểu chữ, nên không có gì bị cắt; cỡ nào không còn vừa sẽ xuống dòng.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Chọn tiện ích cho bảng điều khiển',
  'help.guide.dashboard-widgets.goal': 'Chỉ hiện những tiện ích bạn dùng, riêng trên máy tính và trên điện thoại.',
  'help.guide.dashboard-widgets.step.1':
    'Trong “Tiện ích bảng điều khiển”, bật hoặc tắt từng tiện ích cho “Máy tính” và cho “Di động”: toàn bộ thanh bên phải, tiền tệ, Collections, múi giờ, đặt chỗ sắp tới, quốc gia trong Atlas và các con số du lịch.',
  'help.guide.dashboard-widgets.step.2': '“Đặt lại về mặc định” ở dưới cùng đưa cả tab về trạng thái ban đầu.',
  'help.guide.dashboard-widgets.result': 'Bảng điều khiển sắp xếp lại ngay; khi tắt thanh bên phải, nó được căn giữa.',
  'help.guide.dashboard-widgets.tip.1':
    'Tiện ích của một tiện ích bổ sung chỉ xuất hiện khi quản trị viên đang bật tiện ích bổ sung đó.',
  'help.guide.dashboard-widgets.tip.2':
    'Bản thân bảng điều khiển nhớ chế độ xem lưới hay danh sách và thứ tự sắp xếp theo từng thiết bị.',
  // map-provider
  'help.guide.map-provider.title': 'Chọn công cụ và kiểu bản đồ',
  'help.guide.map-provider.goal': 'Chuyển giữa bản đồ cổ điển, ô vector và bản đồ 3D của Mapbox.',
  'help.guide.map-provider.step.1':
    'Trong “Nhà cung cấp bản đồ”, chọn Leaflet cho bản đồ 2D cổ điển với mọi loại ô raster, MapLibre cho ô vector OpenFreeMap không cần mã thông báo, hoặc Mapbox cho ô vector có tòa nhà 3D và địa hình.',
  'help.guide.map-provider.step.2':
    'Chọn một “Kiểu bản đồ” hoặc “Mẫu bản đồ” cho diện mạo. Mapbox cần “Mapbox Mã thông báo truy cập”, một số kiểu raster cần “Khóa API CARTO”; liên kết bên cạnh ô nhập dẫn tới nơi bạn lấy chúng.',
  'help.guide.map-provider.step.3':
    '“Chế độ chất lượng cao” thêm khử răng cưa và phép chiếu địa cầu. Nhấp “Lưu bản đồ”.',
  'help.guide.map-provider.result':
    'Mọi bản đồ trong TREK, chuyến đi, Atlas, Collections và nhật ký, đều do công cụ bạn chọn vẽ.',
  'help.guide.map-provider.tip.1': 'Không có mã thông báo, Mapbox quay về bản đồ mặc định thay vì không hiện gì.',
  'help.guide.map-provider.tip.2': 'Ô bản đồ bạn lưu ngoại tuyến đến từ nhà cung cấp đang hoạt động lúc bạn tải chúng.',
  // notification-channels
  'help.guide.notification-channels.title': 'Thiết lập nơi thông báo tới bạn',
  'help.guide.notification-channels.goal':
    'Nhận lời nhắc chuyến đi và sự kiện cộng tác trên điện thoại hoặc trong công cụ khác.',
  'help.guide.notification-channels.step.1':
    'Trong “Thông báo”, điền “Ntfy Chủ đề”; thêm “Ntfy Máy chủ URL” của riêng bạn và “Mã thông báo truy cập” nếu bạn tự vận hành máy chủ. “Bài kiểm tra” gửi ngay một tin nhắn.',
  'help.guide.notification-channels.step.2':
    'Hoặc cung cấp một “Webhook URL” nhận mọi sự kiện dưới dạng JSON, và thử nó theo cách tương tự bằng “Bài kiểm tra”.',
  'help.guide.notification-channels.step.3':
    'Trong các hàng bên dưới, bật hoặc tắt từng sự kiện theo từng kênh. Kênh của plugin hiện “Cấu hình” cho đến khi được thiết lập trong cài đặt của plugin; “Gửi thử” gửi thử một tin.',
  'help.guide.notification-channels.result':
    'Sự kiện được gửi qua các kênh đang bật. Biểu tượng chuông trên thanh điều hướng vẫn hiện chúng trong ứng dụng bất kể thế nào.',
  'help.guide.notification-channels.tip.1':
    'Tùy chọn theo từng chuyến đi nằm ngay trên chuyến đi, trong cài đặt thông báo của nó.',
  'help.guide.notification-channels.tip.2':
    'Quản trị viên có thể điền sẵn một máy chủ ntfy mặc định cho mọi người; bạn vẫn tự chọn chủ đề của mình.',
  // photo-providers
  'help.guide.photo-providers.title': 'Kết nối một thư viện ảnh',
  'help.guide.photo-providers.goal': 'Để nhật ký lấy ảnh trong ngày từ Immich hoặc Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Trong “Tích hợp”, tìm phần của nhà cung cấp và nhập URL cùng khóa API của nó. Immich cũng đề nghị sao chép ngược các ảnh tải lên hành trình vào thư viện.',
  'help.guide.photo-providers.step.2': 'Nhấp “Kiểm tra kết nối”, rồi “Lưu”.',
  'help.guide.photo-providers.result':
    'Tab “External photos” của trình soạn mục tìm trong thư viện đã kết nối theo ngày của mục, ưu tiên ảnh gần vị trí của mục nhất.',
  'help.guide.photo-providers.tip.1':
    'Kết nối là của riêng bạn: các thành viên khác của hành trình kết nối thư viện của riêng họ.',
  'help.guide.photo-providers.tip.2':
    'Nhà cung cấp không có dữ liệu GPS trong ảnh vẫn hoạt động; khi đó danh sách theo thứ tự thời gian.',
  // api-keys
  'help.guide.api-keys.title': 'Tạo một khóa API',
  'help.guide.api-keys.goal': 'Để một tập lệnh hoặc công cụ khác gọi API của TREK với tư cách là bạn.',
  'help.guide.api-keys.step.1':
    'Trong “Khóa API”, nhấp “Tạo khóa” và đặt cho nó một cái tên cho biết nó sẽ được dùng ở đâu.',
  'help.guide.api-keys.step.2':
    'Sao chép khóa từ hộp thoại: nó chỉ hiện một lần. Xóa khóa khỏi danh sách khi công cụ không còn cần nữa.',
  'help.guide.api-keys.result':
    'Yêu cầu dùng khóa đó hoạt động với quyền của bạn; danh sách cho biết mỗi khóa được tạo khi nào và dùng lần cuối khi nào.',
  'help.guide.api-keys.tip.1': 'Mỗi công cụ một khóa giúp việc thu hồi nhẹ nhàng.',
  'help.guide.api-keys.tip.2':
    'Với trợ lý AI, hãy dùng MCP với OAuth thay vào đó; khóa API dành cho các máy khách HTTP thuần túy.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Kết nối trợ lý AI qua MCP',
  'help.guide.mcp-oauth.goal': 'Cho Claude, một IDE hoặc một máy khách MCP khác quyền truy cập vào chuyến đi của bạn.',
  'help.guide.mcp-oauth.step.1':
    'Trong “MCP Cấu hình”, sao chép “MCP Điểm cuối”, hoặc toàn bộ “Cấu hình máy khách” cho máy khách nhận đoạn JSON.',
  'help.guide.mcp-oauth.step.2':
    'Máy khách đăng nhập qua trình duyệt dùng OAuth 2.1: “Khách hàng mới” trong “OAuth 2.1 Khách hàng”, với “URI chuyển hướng”, “Phạm vi được phép” và, cho máy chủ không có trình duyệt, “Máy khách (không đăng nhập trình duyệt)”.',
  'help.guide.mcp-oauth.step.3':
    '“Xoay bí mật” và “Xóa khách hàng” nằm trên mỗi máy khách; “Phiên hoạt động OAuth” liệt kê những gì đang đăng nhập và cho bạn thu hồi. “API Mã thông báo” với “Tạo mã thông báo mới” là cách vào cũ hơn.',
  'help.guide.mcp-oauth.result':
    'Máy khách có thể đọc và thay đổi những gì phạm vi của nó cho phép, với tư cách là bạn, và mọi hành động hiện dưới tên bạn.',
  'help.guide.mcp-oauth.tip.1':
    'Phạm vi là lưới an toàn: chỉ cấp cho máy khách phạm vi đọc cho đến khi nó cần nhiều hơn.',
  'help.guide.mcp-oauth.tip.2': 'Quản trị viên có thể tắt MCP cho cả phiên bản cài đặt; khi đó phần này không có.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Mang chuyến đi ra ngoại tuyến',
  'help.guide.offline-prepare.goal': 'Có sẵn chuyến đi và bản đồ của chúng trên thiết bị này trước khi mất kết nối.',
  'help.guide.offline-prepare.step.1':
    'Trong “Lưu trữ gì khi ngoại tuyến”, giữ “Lưu ô bản đồ ngoại tuyến” bật và bật những chuyến đi bạn muốn có trên thiết bị này.',
  'help.guide.offline-prepare.step.2':
    'Nhấp “Tải xuống để dùng ngoại tuyến” trong “Chuẩn bị cho ngoại tuyến”. Nó tải các chuyến đi và các ô bản đồ quanh địa điểm của chúng.',
  'help.guide.offline-prepare.step.3':
    '“Bắt buộc chế độ ngoại tuyến” trong “Chế độ ngoại tuyến” cho bạn kiểm tra mọi thứ đã có đủ trước khi lên đường.',
  'help.guide.offline-prepare.result':
    'Chuyến đi mở được khi không có kết nối; thay đổi bạn thực hiện chờ trong hàng đợi và được gửi đi khi kết nối lại.',
  'help.guide.offline-prepare.tip.1':
    'Ô bản đồ chiếm nhiều dung lượng nhất: phần “Bộ nhớ đệm ngoại tuyến” cho biết những gì được lưu, theo từng chuyến đi.',
  'help.guide.offline-prepare.tip.2': 'Cài TREK như một ứng dụng từ trình duyệt để khởi động ngoại tuyến mượt nhất.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Quyết định bên nào thắng khi xung đột đồng bộ',
  'help.guide.offline-conflicts.goal':
    'Chọn cách TREK giải quyết một thay đổi làm lúc ngoại tuyến so với một thay đổi làm ở nơi khác.',
  'help.guide.offline-conflicts.step.1':
    'Trong “Xung đột đồng bộ hóa”, chọn “Hỏi tôi mỗi lần”, “Luôn giữ phiên bản của tôi” hoặc “Luôn giữ phiên bản của máy chủ”.',
  'help.guide.offline-conflicts.step.2':
    '“Bộ nhớ đệm ngoại tuyến” hiện các chuyến đi, thay đổi đang chờ và thất bại cùng các xung đột; “Đồng bộ lại ngay” đẩy hàng đợi đi, “Xóa bộ nhớ đệm” làm trống thiết bị.',
  'help.guide.offline-conflicts.result':
    'Với “Hỏi tôi mỗi lần”, xung đột hiện cả hai phiên bản và cho bạn chọn; với hai lựa chọn còn lại, nó được giải quyết âm thầm.',
  'help.guide.offline-conflicts.tip.1': '“Xóa bộ nhớ đệm” chỉ gỡ bản sao trên thiết bị này; không đụng gì đến máy chủ.',
  // profile
  'help.guide.profile.title': 'Thay đổi hồ sơ của bạn',
  'help.guide.profile.goal': 'Cập nhật tên, email và ảnh của bạn.',
  'help.guide.profile.step.1':
    'Trong “Tài khoản”, sửa “Tên người dùng” và “Email”. Ảnh đại diện nhận ảnh bạn tự tải lên; gỡ nó để quay về chữ cái đầu.',
  'help.guide.profile.step.2': 'Nhấp “Lưu hồ sơ”.',
  'help.guide.profile.result':
    'Tên và ảnh của bạn cập nhật ở mọi nơi ngay lập tức, kể cả trên các chuyến đi bạn chia sẻ.',
  'help.guide.profile.tip.1': 'Tài khoản đăng nhập qua OIDC sẽ hiện điều đó ở đây; khi đó email đến từ nhà cung cấp.',
  // password
  'help.guide.password.title': 'Thay đổi mật khẩu của bạn',
  'help.guide.password.goal': 'Đặt mật khẩu mới.',
  'help.guide.password.step.1': 'Trong “Thay đổi mật khẩu”, nhập mật khẩu hiện tại, rồi mật khẩu mới hai lần.',
  'help.guide.password.step.2': 'Nhấp “Cập nhật mật khẩu”.',
  'help.guide.password.result': 'Mật khẩu mới có hiệu lực từ lần đăng nhập tiếp theo; các phiên khác vẫn đăng nhập.',
  'help.guide.password.tip.1': 'Tài khoản đăng nhập qua OIDC không có mật khẩu TREK để thay đổi.',
  // mfa
  'help.guide.mfa.title': 'Bật xác thực hai yếu tố',
  'help.guide.mfa.goal': 'Bảo vệ tài khoản bằng mã từ ứng dụng xác thực.',
  'help.guide.mfa.step.1': 'Trong “Xác thực hai yếu tố (2FA)”, nhấp “Thiết lập trình xác thực”.',
  'help.guide.mfa.step.2':
    'Quét mã QR bằng ứng dụng của bạn, hoặc nhập bí mật bằng tay, rồi gõ mã sáu chữ số nó hiện và nhấp “Kích hoạt 2FA”.',
  'help.guide.mfa.step.3':
    'Lưu các mã dự phòng: sao chép, tải xuống hoặc in chúng. Mỗi mã dùng được một lần, khi bạn không có điện thoại bên mình.',
  'help.guide.mfa.result': 'Mỗi lần đăng nhập đều hỏi mã sau mật khẩu.',
  'help.guide.mfa.tip.1': '“Tắt 2FA” cần mật khẩu của bạn và một mã hiện tại.',
  'help.guide.mfa.tip.2': 'Quản trị viên có thể bắt buộc 2FA cho mọi người; khi đó không thể tắt nó ở đây.',
  // passkeys
  'help.guide.passkeys.title': 'Đăng nhập bằng mật mã',
  'help.guide.passkeys.goal': 'Dùng vân tay, khuôn mặt hoặc mã PIN của thiết bị thay cho mật khẩu.',
  'help.guide.passkeys.step.1':
    'Trong “Mật mã”, nhấp “Thêm mật mã” và xác nhận bằng thiết bị của bạn. Đặt cho nó một cái tên cho biết đó là thiết bị nào.',
  'help.guide.passkeys.step.2': 'Danh sách hiện mọi mật mã với tên và lần dùng cuối; nút xóa gỡ một mật mã.',
  'help.guide.passkeys.result': 'Trang đăng nhập đề xuất mật mã; mật khẩu vẫn là phương án dự phòng.',
  'help.guide.passkeys.tip.1':
    'Mật mã nằm trên thiết bị hoặc trong trình quản lý mật khẩu của nó, nên hãy thêm một mật mã cho mỗi thiết bị.',
  'help.guide.passkeys.tip.2':
    'Mật mã cần HTTPS; trên phiên bản cài đặt HTTP thuần túy, phần này giải thích vì sao chúng không khả dụng.',
  // delete-account
  'help.guide.delete-account.title': 'Xóa tài khoản của bạn',
  'help.guide.delete-account.goal': 'Gỡ tài khoản của bạn và dữ liệu chỉ thuộc về bạn.',
  'help.guide.delete-account.step.1': 'Ở dưới cùng của “Tài khoản”, nhấp “Xóa tài khoản” và xác nhận.',
  'help.guide.delete-account.result':
    'Tài khoản, các chuyến đi của riêng bạn và các hành trình của bạn biến mất; chuyến đi bạn chia sẻ với người khác vẫn ở lại với họ.',
  'help.guide.delete-account.tip.1':
    'Quản trị viên cuối cùng của một phiên bản cài đặt không thể tự xóa mình; hãy để người khác làm quản trị viên trước.',
  'help.guide.delete-account.tip.2': 'Không có hoàn tác. Xuất những gì bạn muốn giữ trước khi xác nhận.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Sự quản lý',
  'help.ctx.admin.summary':
    'Phiên bản TREK đứng sau tất cả mọi người: ai được đăng nhập và bằng cách nào, thứ gì đang bật, tệp nằm ở đâu, máy chủ liên lạc với mọi người ra sao, và nó được sao lưu thế nào. Chỉ quản trị viên thấy trang này; mỗi tab là một màn hình riêng trong thanh bên.',
  'help.ctx.admin.bullet.1':
    'Bốn thẻ ở trên cùng đếm người dùng, chuyến đi, địa điểm và tệp; một biểu ngữ phía trên chúng báo có bản phát hành TREK mới hơn.',
  'help.ctx.admin.bullet.2':
    '“Người dùng” và “Mặc định của người dùng”: tài khoản, liên kết mời, và cài đặt bản đồ mà một tài khoản mới bắt đầu với.',
  'help.ctx.admin.bullet.3':
    '“Cá nhân hóa”, “Cài đặt”, “Tiện ích bổ sung” và “Plugins”: mẫu đóng gói, danh mục và kỳ nghỉ học; phương thức đăng nhập và khóa API; các mô-đun tính năng; plugin bên thứ ba.',
  'help.ctx.admin.bullet.4':
    '“Lưu trữ”, “Thông báo”, “MCP Truy cập” và “GitHub”: tệp tải lên đi đâu, các kênh của toàn phiên bản, mã thông báo và phiên của các ứng dụng AI, và lịch sử phát hành.',
  'help.ctx.admin.bullet.5':
    '“Sao lưu” và “Lịch sử”: sao lưu theo yêu cầu và theo lịch, cùng nhật ký các sự kiện liên quan đến bảo mật.',
  'help.ctx.admin-users.title': 'Người dùng',
  'help.ctx.admin-users.summary':
    'Mọi tài khoản trên TREK này, với vai trò, email và lần đăng nhập gần nhất, cùng các liên kết mời cho phép người khác đăng ký trên một phiên bản đóng.',
  'help.ctx.admin-users.bullet.1':
    'Bảng: tên người dùng, email, vai trò, ngày tạo, lần đăng nhập cuối và các thao tác trên mỗi hàng. Bạn được đánh dấu là chính bạn.',
  'help.ctx.admin-users.bullet.2':
    '“Tạo người dùng” ở trên cùng thêm một tài khoản bằng tay, với mật khẩu do bạn trao lại.',
  'help.ctx.admin-users.bullet.3':
    '“Mời liên kết” ở dưới: liên kết đăng ký dùng một lần với giới hạn lượt dùng, thời hạn và, nếu bạn muốn, một chuyến đi mà người dùng mới tham gia ngay khi đến.',
  'help.ctx.admin-users.bullet.4':
    '“Cài đặt quyền” ở dưới cùng: với từng thao tác, ai được làm, “Mọi người”, “Thành viên”, “Người tạo” hoặc “Chỉ quản trị viên”.',
  'help.ctx.admin-defaults.title': 'Mặc định của người dùng',
  'help.ctx.admin-defaults.summary':
    'Cài đặt mà một tài khoản mới bắt đầu với, để không ai phải tìm tab bản đồ trước: nhà cung cấp bản đồ, kiểu, mã thông báo và chất lượng.',
  'help.ctx.admin-defaults.bullet.1':
    'Nhà cung cấp bản đồ, kiểu và mã thông báo Mapbox, khóa CARTO và chất lượng Mapbox, đúng như người dùng đặt trong “Cài đặt”, “Bản đồ”.',
  'help.ctx.admin-defaults.bullet.2':
    '“cài lại” ở mỗi trường trả về lựa chọn riêng của TREK; cài đặt riêng của người dùng luôn thắng các giá trị này.',
  'help.ctx.admin-config.title': 'Cá nhân hóa',
  'help.ctx.admin-config.summary':
    'Những gì mọi chuyến đi trên phiên bản này dùng chung: mẫu đóng gói, bộ danh mục cho địa điểm và bộ sưu tập, và danh mục kỳ nghỉ học mà Vacay lấy dữ liệu từ đó.',
  'help.ctx.admin-config.bullet.1':
    '“Mẫu đóng gói”: các danh sách có tên gồm danh mục và món đồ mà danh sách đóng gói của một chuyến đi có thể bắt đầu từ đó.',
  'help.ctx.admin-config.bullet.2':
    '“Thể loại”: tên, biểu tượng và màu của các danh mục dùng trên toàn TREK, từ trình xem địa điểm đến Bộ sưu tập.',
  'help.ctx.admin-config.bullet.3':
    '“Kỳ nghỉ học”: danh mục các quốc gia và khu vực, dành cho những nơi mà nguồn dữ liệu tích hợp sẵn không bao phủ.',
  'help.ctx.admin-settings.title': 'Cài đặt',
  'help.ctx.admin-settings.summary':
    'Mọi người vào bằng cách nào và máy chủ được nói chuyện với gì: phương thức đăng nhập và đăng ký, SSO, mật mã, chính sách hai yếu tố, khóa API cho bản đồ, địa điểm và hình ảnh, nhà cung cấp tìm kiếm và giao thông công cộng, và các loại tệp được phép tải lên.',
  'help.ctx.admin-settings.bullet.1':
    '“Phương thức xác thực”: “Mật khẩu Đăng nhập”, “Đăng ký mật khẩu”, “SSO Đăng nhập”, “SSO Tự động cấp phép” và “Yêu cầu xác thực hai yếu tố (2FA)”.',
  'help.ctx.admin-settings.bullet.2':
    '“Đăng nhập một lần (OIDC)” với nhà phát hành, ứng dụng và tên hiển thị; “Đăng nhập bằng mật mã” với Relying Party ID và các nguồn gốc.',
  'help.ctx.admin-settings.bullet.3':
    '“API Key”: Google Maps, Unsplash và Amap, mỗi khóa có “Bài kiểm tra”; “Khóa được dùng vào việc gì” giới hạn khóa Google vào những tính năng bạn muốn trả tiền.',
  'help.ctx.admin-settings.bullet.4':
    '“Nhà cung cấp tìm kiếm địa điểm” và “Nhà cung cấp giao thông công cộng” chọn ai trả lời tìm kiếm và tuyến đường; “Các loại tệp được phép” giới hạn tải lên.',
  'help.ctx.admin-addons.title': 'Tiện ích bổ sung',
  'help.ctx.admin-addons.summary':
    'Các mô-đun tính năng của TREK, mỗi cái có một công tắc: Danh sách, Chi phí, Tài liệu, Vacay, Atlas, Cộng tác, Hành trình, Bộ sưu tập, Chuyến đi đường bộ, MCP, AirTrail, Dawarich và phân tích AI. Tắt nghĩa là mục điều hướng, các tuyến và API biến mất với tất cả mọi người.',
  'help.ctx.admin-addons.bullet.1': 'Mỗi tiện ích một ô với công tắc của nó và, nếu có, các hàng con cho tùy chọn.',
  'help.ctx.admin-addons.bullet.2':
    'Nhà cung cấp ảnh và nhà cung cấp tài liệu cũng xuất hiện ở đây dưới dạng ô, để có thể cung cấp Immich hoặc Synology cho người dùng.',
  'help.ctx.admin-addons.bullet.3': '“Theo dõi túi” có công tắc riêng bên dưới các ô.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugin bên thứ ba chạy trong tiến trình riêng bên cạnh TREK, mỗi cái với các quyền nó yêu cầu lúc cài. Cài từ danh mục, tải lên một gói, hoặc liên kết một thư mục khi đang phát triển.',
  'help.ctx.admin-plugins.bullet.1':
    'Danh sách: mọi plugin đã cài với phiên bản, trạng thái, chữ ký và các quyền nó nắm giữ; kích hoạt, hủy kích hoạt, cập nhật hoặc gỡ trên từng hàng.',
  'help.ctx.admin-plugins.bullet.2':
    '“Tải plugin lên” nhận một tệp gói; “Quét lại” nhận thư mục plugin đã liên kết để phát triển.',
  'help.ctx.admin-plugins.bullet.3':
    '“Máy chủ được phép” cho từng plugin: các địa chỉ mà plugin được gọi, vì kết nối ra ngoài bị từ chối theo mặc định.',
  'help.ctx.admin-storage.title': 'Lưu trữ',
  'help.ctx.admin-storage.summary':
    'Nơi tệp tải lên nằm: đĩa cục bộ, một bucket S3, hoặc một bản sao gương ghi vào cả hai. Mỗi danh mục tải lên có thể đi tới một backend khác nhau, và “Tình trạng” cho biết mọi backend có phản hồi không.',
  'help.ctx.admin-storage.bullet.1':
    '“Backend”: tên và loại của từng cái, với “Kiểm tra”, “Chỉnh sửa” và “Xóa”; cái nào được đặt bằng biến môi trường thì ở đây chỉ đọc.',
  'help.ctx.admin-storage.bullet.2':
    '“Danh mục”: ảnh bìa, tài liệu, ảnh hành trình và phần còn lại, mỗi loại được gán cho một backend; đổi một loại sẽ đề nghị di chuyển các tệp hiện có.',
  'help.ctx.admin-storage.bullet.3':
    '“Tình trạng”: một kiểm tra cho từng backend, và tệp hạt giống chứng minh cấu hình đúng là thứ máy chủ nhìn thấy.',
  'help.ctx.admin-notifications.title': 'Thông báo',
  'help.ctx.admin-notifications.summary':
    'Các kênh mà phiên bản cung cấp cho người dùng, và các kênh tới bạn với tư cách quản trị viên. Người dùng chọn chủ đề và URL của họ trong “Cài đặt”; bạn quyết định có những kênh nào và cấu hình email.',
  'help.ctx.admin-notifications.bullet.1':
    '“Trong ứng dụng”, “Email (SMTP)”, “Ntfy” và “Webhook”: mỗi kênh một bảng, với công tắc cung cấp kênh đó cho người dùng và cấu hình phía máy chủ mà nó cần.',
  'help.ctx.admin-notifications.bullet.2':
    '“Lời nhắc chuyến đi”: máy chủ có gửi lời nhắc trước khi chuyến đi bắt đầu hay không.',
  'help.ctx.admin-notifications.bullet.3':
    '“Quản trị viên Ntfy” và “Webhook quản trị viên”: nơi các sự kiện quản trị như sao lưu thất bại hay bản phát hành mới được gửi tới, có nút kiểm tra.',
  'help.ctx.admin-mcp-tokens.title': 'MCP Truy cập',
  'help.ctx.admin-mcp-tokens.summary':
    'Mọi mã thông báo và phiên OAuth mà các ứng dụng AI nắm giữ với TREK này, trên tất cả người dùng, cùng quyền thu hồi bất kỳ cái nào.',
  'help.ctx.admin-mcp-tokens.bullet.1': '“API Mã thông báo”: ai tạo, lần dùng cuối khi nào, và “Xóa bỏ”.',
  'help.ctx.admin-mcp-tokens.bullet.2': '“OAuth Phiên”: ứng dụng, người dùng và các phạm vi được cấp, và “Thu hồi”.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Có gì mới ở TREK: lịch sử phát hành từ GitHub, phiên bản bạn đang chạy, và có bản mới hơn chưa. Việc cập nhật diễn ra bên ngoài ứng dụng, trên máy chủ.',
  'help.ctx.admin-github.bullet.1':
    '“Lịch sử phát hành” liệt kê các bản phát hành cùng ghi chú; bản mới nhất mang nhãn “Mới nhất”, và phiên bản của bạn được đánh dấu.',
  'help.ctx.admin-github.bullet.2':
    '“Đã có bản cập nhật” xuất hiện ở phần đầu trang khi có bản phát hành mới hơn, kèm cách cập nhật cho Docker và các kiểu cài đặt khác.',
  'help.ctx.admin-backup.title': 'Sao lưu',
  'help.ctx.admin-backup.summary':
    'Bản sao lưu đầy đủ của cơ sở dữ liệu và tệp tải lên, tạo bằng tay hoặc theo lịch, giữ trên máy chủ và tải xuống được dưới dạng một tệp. “Khôi phục” đưa một bản trở lại.',
  'help.ctx.admin-backup.bullet.1':
    '“Sao lưu dữ liệu”: “Tạo bản sao lưu”, và danh sách các bản hiện có với “Tải xuống”, “Khôi phục” và xóa.',
  'help.ctx.admin-backup.bullet.2':
    '“Tải lên bản sao lưu” đưa vào một tệp được tạo trên phiên bản khác hoặc vào một ngày trước đó.',
  'help.ctx.admin-backup.bullet.3':
    '“Tự động sao lưu”: bật hoặc tắt, khoảng thời gian, giờ và ngày, và giữ lại bao nhiêu bản.',
  'help.ctx.admin-audit.title': 'Lịch sử',
  'help.ctx.admin-audit.summary':
    'Nhật ký các sự kiện bảo mật và quản trị: đăng nhập và thất bại, thay đổi MFA, thay đổi người dùng và cài đặt, sao lưu và khôi phục. Chỉ đọc, mới nhất ở trên.',
  'help.ctx.admin-audit.bullet.1':
    'Mỗi sự kiện một hàng với thời gian, người dùng, hành động, tài nguyên, IP và chi tiết.',
  'help.ctx.admin-audit.bullet.2': '“Làm mới” tải lại; “Tải thêm” đi lùi xa hơn.',
  // create-user
  'help.guide.create-user.title': 'Tạo một người dùng',
  'help.guide.create-user.goal': 'Thêm một tài khoản bằng tay, không cần lời mời.',
  'help.guide.create-user.step.1': 'Nhấp “Tạo người dùng” ở đầu tab “Người dùng”.',
  'help.guide.create-user.step.2':
    'Nhập “Tên người dùng”, “Email” và “Mật khẩu”, rồi chọn “Vai trò”: “người dùng” hoặc “Quản trị viên”.',
  'help.guide.create-user.step.3': 'Nhấp “Tạo người dùng”.',
  'help.guide.create-user.result':
    'Tài khoản xuất hiện trong bảng và có thể đăng nhập ngay; hãy trao mật khẩu qua một kênh bạn tin cậy.',
  'help.guide.create-user.tip.1': 'Với người nên tự chọn mật khẩu, liên kết mời là cách vào tốt hơn.',
  'help.guide.create-user.tip.2':
    'Quản trị viên thấy trang này và nhật ký lịch sử; mọi thứ khác giống nhau cho cả hai vai trò.',
  // edit-user
  'help.guide.edit-user.title': 'Đổi vai trò hoặc mật khẩu của một người dùng',
  'help.guide.edit-user.goal': 'Nâng ai đó lên, hạ họ xuống, hoặc đưa họ vào lại sau khi mất mật khẩu.',
  'help.guide.edit-user.step.1':
    'Nhấp cây bút chì trên hàng của người dùng. “Chỉnh sửa người dùng” mở ra với thông tin tài khoản.',
  'help.guide.edit-user.step.2':
    'Đổi “Vai trò”, đặt “Mật khẩu mới”, hoặc nhấp “Đặt lại mật khẩu” khi người đó mất thiết bị chứa mật mã của họ, rồi “Lưu”.',
  'help.guide.edit-user.result':
    'Thay đổi áp dụng từ yêu cầu tiếp theo; mật khẩu mới có hiệu lực từ lần đăng nhập kế tiếp.',
  'help.guide.edit-user.tip.1':
    'Bạn không thể tự bỏ vai trò quản trị viên của mình khi bạn là quản trị viên cuối cùng.',
  'help.guide.edit-user.tip.2':
    'Đặt lại mật mã vẫn giữ mật khẩu; người đó thêm mật mã mới trong “Cài đặt”, “Tài khoản”.',
  // invite-links
  'help.guide.invite-links.title': 'Mời ai đó bằng một liên kết',
  'help.guide.invite-links.goal': 'Cho một người đăng ký trên phiên bản đóng, và vào thẳng một chuyến đi nếu bạn muốn.',
  'help.guide.invite-links.step.1': 'Dưới “Mời liên kết”, nhấp “Tạo liên kết”.',
  'help.guide.invite-links.step.2':
    'Đặt “Tối đa. Công dụng” và “Hết hạn sau”, tùy chọn “Thêm vào chuyến đi (tùy chọn)”, rồi nhấp “Tạo & Sao chép”.',
  'help.guide.invite-links.step.3':
    'Gửi liên kết đi. Mỗi hàng cho biết nó đã được dùng bao nhiêu lần và ai tạo; “Sao chép liên kết” sao chép lại, còn liên kết đã dùng hết hoặc hết hạn được đánh dấu.',
  'help.guide.invite-links.result':
    'Ai mở liên kết sẽ đăng ký với mật khẩu riêng và, nếu đã chọn chuyến đi, tham gia ngay lập tức.',
  'help.guide.invite-links.tip.1': 'Liên kết mời vẫn hoạt động ngay cả khi “Đăng ký mật khẩu” đã tắt trong “Cài đặt”.',
  'help.guide.invite-links.tip.2':
    'Một liên kết dùng một lần với thời hạn ngắn là mặc định an toàn nhất cho một người.',
  // delete-user
  'help.guide.delete-user.title': 'Xóa một người dùng',
  'help.guide.delete-user.goal': 'Gỡ một tài khoản và mọi thứ chỉ thuộc về nó.',
  'help.guide.delete-user.step.1': 'Nhấp biểu tượng thùng rác trên hàng của người dùng và xác nhận “Xóa người dùng”.',
  'help.guide.delete-user.result':
    'Tài khoản, các chuyến đi của riêng nó và các hành trình của nó biến mất; chuyến đi chia sẻ với người khác vẫn ở lại với các thành viên còn lại.',
  'help.guide.delete-user.tip.1': 'Không có hoàn tác. Hãy sao lưu trước nếu bạn không chắc.',
  'help.guide.delete-user.tip.2': 'Không thể xóa quản trị viên cuối cùng; hãy đặt người khác làm quản trị viên trước.',
  // permissions
  'help.guide.permissions.title': 'Quyết định ai được làm gì',
  'help.guide.permissions.goal': 'Đặt, với từng thao tác, vai trò nào được phép làm trên TREK này.',
  'help.guide.permissions.step.1':
    'Trong “Cài đặt quyền”, tìm thao tác trong nhóm của nó, chẳng hạn “Xóa chuyến đi” dưới “Quản lý chuyến đi”, và chọn mức: “Mọi người”, “Thành viên”, “Người tạo” hoặc “Chỉ quản trị viên”. Hàng đã thay đổi được đánh dấu “tùy chỉnh”.',
  'help.guide.permissions.step.2': 'Nhấp “Lưu”. “Đặt lại về mặc định” đưa mọi hàng về mức có sẵn.',
  'help.guide.permissions.result':
    'Quy tắc áp dụng cho mọi chuyến đi cùng lúc; nút và menu của những người dưới mức đó biến mất.',
  'help.guide.permissions.tip.1': '“Người tạo” là người đã tạo chuyến đi; quản trị viên luôn được làm mọi thứ.',
  'help.guide.permissions.tip.2':
    'Hạ mức thay vì xóa thành viên: thành viên không được chỉnh sửa vẫn có thể đọc và bình luận.',
  // default-map
  'help.guide.default-map.title': 'Đặt mặc định bản đồ cho người dùng mới',
  'help.guide.default-map.goal': 'Cho mọi tài khoản mới một bản đồ hoạt động mà không cần mã thông báo cá nhân.',
  'help.guide.default-map.step.1':
    'Dưới “Bản đồ”, chọn “Công cụ bản đồ” và, với Mapbox hoặc MapLibre, “Kiểu bản đồ”, “Mã thông báo Mapbox được chia sẻ” và “Chế độ chất lượng cao”; với bản đồ raster, “Mẫu bản đồ” và “Khóa CARTO được chia sẻ”.',
  'help.guide.default-map.step.2':
    'Bên cạnh bất kỳ trường nào bạn đã đổi, “cài lại” trả về lựa chọn riêng của TREK. “Cài đặt người dùng mặc định” ở bên trái làm điều tương tự cho “Chế độ màu”, đơn vị và tiền tệ.',
  'help.guide.default-map.result':
    'Tài khoản mới bắt đầu với các giá trị này; ai đã tự đặt bản đồ trong “Cài đặt” vẫn giữ của mình.',
  'help.guide.default-map.tip.1':
    'Mã thông báo nhập ở đây được dùng chung bởi tất cả những ai không có mã riêng, nên hãy để ý hạn mức của nó.',
  'help.guide.default-map.tip.2': 'Tài khoản hiện có chưa từng chạm vào tab bản đồ cũng theo các mặc định này.',
  // packing-templates
  'help.guide.packing-templates.title': 'Xây dựng một mẫu đóng gói',
  'help.guide.packing-templates.goal': 'Cho các chuyến đi một danh sách đóng gói để bắt đầu thay vì danh sách trống.',
  'help.guide.packing-templates.step.1': 'Nhấp “Mẫu mới”, gõ tên và xác nhận bằng dấu tích.',
  'help.guide.packing-templates.step.2':
    'Mở mẫu và nhấp “Thêm danh mục”; dưới mỗi danh mục, dấu + thêm món đồ, và một món đồ chỉ cần tên.',
  'help.guide.packing-templates.step.3':
    'Mọi thứ được lưu ngay khi bạn làm. Bút chì đổi tên mẫu, danh mục hoặc món đồ, thùng rác xóa nó.',
  'help.guide.packing-templates.result':
    'Mẫu được đề xuất trên danh sách đóng gói của mọi chuyến đi; áp dụng nó sẽ sao chép các món đồ, nên chuyến đi có thể tự do thay đổi.',
  'help.guide.packing-templates.tip.1':
    'Mỗi loại chuyến đi một mẫu, biển, thành phố, leo núi, tốt hơn một danh sách khổng lồ.',
  'help.guide.packing-templates.tip.2': 'Xóa một mẫu không ảnh hưởng tới các chuyến đi đã áp dụng nó.',
  // categories
  'help.guide.categories.title': 'Quản lý bộ danh mục',
  'help.guide.categories.goal':
    'Quyết định địa điểm và bộ sưu tập có thể mang những danh mục nào, và chúng trông ra sao.',
  'help.guide.categories.step.1':
    'Nhấp “Danh mục mới”, đặt tên, chọn biểu tượng và màu; “Xem trước” hiển thị kết quả. Nhấp “Tạo nên”.',
  'help.guide.categories.step.2':
    'Di chuột lên một danh mục trong danh sách để chỉnh sửa hoặc xóa. Xóa sẽ hỏi xác nhận.',
  'help.guide.categories.result':
    'Bộ danh mục áp dụng ở mọi nơi cùng lúc: trình xem địa điểm, ghim bản đồ, Bộ sưu tập và các bộ lọc.',
  'help.guide.categories.tip.1': 'Địa điểm giữ id danh mục, nên đổi tên một danh mục sẽ đổi tên nó trên mọi địa điểm.',
  'help.guide.categories.tip.2':
    'Danh mục bị xóa để lại các địa điểm không có danh mục; hãy gán lại trước nếu điều đó quan trọng.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Duy trì kỳ nghỉ học bằng tay',
  'help.guide.school-holiday-catalog.goal': 'Bao phủ một quốc gia hoặc khu vực mà nguồn kỳ nghỉ tích hợp sẵn không có.',
  'help.guide.school-holiday-catalog.step.1':
    'Dưới “Kỳ nghỉ học”, nhấp “Thêm quốc gia”, nhập “Quốc gia” và “Mã quốc gia (ví dụ: US)”, rồi “Lưu”; sau đó “Thêm khu vực” cho từng phần khác biệt của nó.',
  'help.guide.school-holiday-catalog.step.2':
    'Nhấp một khu vực để mở “Khu vực hoặc học khu”: “Thêm kỳ nghỉ”, cho mỗi kỳ một “Tên kỳ nghỉ”, “Ngày bắt đầu” và “Ngày kết thúc”, rồi “Lưu”. Thùng rác gỡ một kỳ nghỉ, một khu vực hoặc, khi không còn khu vực nào, một quốc gia.',
  'help.guide.school-holiday-catalog.result':
    'Người dùng tìm thấy quốc gia và khu vực trong “Cài đặt” của Vacay và thấy các kỳ nghỉ trên lưới năm của họ.',
  'help.guide.school-holiday-catalog.tip.1':
    'Khu vực từ nguồn tích hợp sẵn không chỉnh sửa được ở đây; hãy thêm một khu vực thủ công bên cạnh nếu có ngày sai.',
  // auth-methods
  'help.guide.auth-methods.title': 'Quyết định cách mọi người đăng nhập',
  'help.guide.auth-methods.goal': 'Mở hoặc đóng đăng nhập bằng mật khẩu, SSO và đăng ký, và yêu cầu 2FA.',
  'help.guide.auth-methods.step.1':
    'Dưới “Phương thức xác thực”, bật hoặc tắt “Mật khẩu Đăng nhập” và “Đăng ký mật khẩu”. Tắt đăng ký nghĩa là tài khoản mới chỉ qua liên kết mời, SSO hoặc tạo bằng tay.',
  'help.guide.auth-methods.step.2':
    '“SSO Đăng nhập” và “SSO Tự động cấp phép” cần “Đăng nhập một lần (OIDC)” được cấu hình bên dưới; tự động cấp phép tạo tài khoản lần đầu ai đó đăng nhập qua SSO.',
  'help.guide.auth-methods.step.3':
    '“Yêu cầu xác thực hai yếu tố (2FA)” buộc mọi đăng nhập bằng mật khẩu phải thiết lập ứng dụng xác thực ở lần đăng nhập tiếp theo. “Đăng nhập bằng mật mã” cần Relying Party ID và các nguồn gốc mà TREK của bạn được truy cập.',
  'help.guide.auth-methods.result': 'Trang đăng nhập cung cấp đúng những phương thức bạn để bật.',
  'help.guide.auth-methods.tip.1':
    'Một cảnh báo xuất hiện trước khi bạn tự khóa mình ra ngoài: ít nhất một lối vào cho quản trị viên vẫn được bật.',
  'help.guide.auth-methods.tip.2': 'Giá trị đặt qua biến môi trường hiển thị chỉ đọc ở đây.',
  // oidc
  'help.guide.oidc.title': 'Kết nối đăng nhập một lần',
  'help.guide.oidc.goal': 'Cho mọi người đăng nhập bằng nhà cung cấp danh tính của bạn.',
  'help.guide.oidc.step.1':
    'Dưới “Đăng nhập một lần (OIDC)”, nhập “Tên hiển thị” cho nút và “Nhà phát hành URL”, “Client ID” và “Client Secret” từ nhà cung cấp của bạn, rồi “Lưu”.',
  'help.guide.oidc.step.2': 'Bật “SSO Đăng nhập” dưới “Phương thức xác thực”.',
  'help.guide.oidc.result':
    'Trang đăng nhập hiện nút SSO; khi “SSO Tự động cấp phép” bật, người dùng lần đầu tự động có tài khoản.',
  'help.guide.oidc.tip.1':
    'URI chuyển hướng mà nhà cung cấp của bạn cần là địa chỉ TREK của bạn cộng với đường dẫn callback OIDC trong tài liệu.',
  'help.guide.oidc.tip.2':
    'Ánh xạ claim quyết định nhóm SSO nào trở thành quản trị viên; xem trang OIDC trong tài liệu.',
  // instance-keys
  'help.guide.instance-keys.title': 'Nhập các khóa API',
  'help.guide.instance-keys.goal': 'Mở khóa tìm kiếm địa điểm Google, ảnh bìa Unsplash và Amap cho toàn phiên bản.',
  'help.guide.instance-keys.step.1':
    'Dưới “API Key”, dán “Google Maps API Key” và nhấp “Bài kiểm tra”; trường sẽ cho biết khóa có phản hồi không.',
  'help.guide.instance-keys.step.2':
    'Dưới “Khóa được dùng vào việc gì”, chỉ bật những tính năng bạn muốn tính phí vào khóa đó: tự động hoàn thành, chi tiết, ảnh, làm giàu, nhật ký tìm kiếm địa điểm.',
  'help.guide.instance-keys.step.3':
    '“Khóa API Unsplash” cung cấp tìm kiếm ảnh bìa; “Khóa API Amap (高德地图)” tìm kiếm địa điểm ở Trung Quốc. Kiểm tra từng khóa theo cùng cách.',
  'help.guide.instance-keys.result':
    'Người dùng có các tính năng mà không cần khóa riêng; không có khóa Google, TREK tìm kiếm qua bộ OpenStreetMap miễn phí và TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'Khóa cá nhân của một người dùng trong “Cài đặt” thắng khóa của phiên bản đối với người dùng đó.',
  'help.guide.instance-keys.tip.2': 'Khóa cũng có thể đến từ biến môi trường; những khóa đó hiển thị chỉ đọc ở đây.',
  // places-transit
  'help.guide.places-transit.title': 'Chọn nhà cung cấp tìm kiếm và giao thông công cộng',
  'help.guide.places-transit.goal': 'Quyết định ai trả lời tìm kiếm địa điểm và tuyến giao thông công cộng.',
  'help.guide.places-transit.step.1':
    'Dưới “Nhà cung cấp tìm kiếm địa điểm”, chọn “Tự động”, “Google Places”, “Amap (高德地图)” hoặc “OpenStreetMap”. “Tự động” dùng khóa tốt nhất đang có.',
  'help.guide.places-transit.step.2':
    'Dưới “Nhà cung cấp giao thông công cộng”, chọn “Transitous (miễn phí)”, toàn cầu và không cần khóa, hoặc “Google”, cần khóa Google.',
  'help.guide.places-transit.result': 'Mọi ô tìm kiếm và mọi tuyến giao thông công cộng trong TREK theo lựa chọn này.',
  'help.guide.places-transit.tip.1': 'Nhà cung cấp thiếu khóa hiện cảnh báo ở đây và quay về OpenStreetMap.',
  'help.guide.places-transit.tip.2':
    'Tuyến giao thông công cộng của Google tính phí theo yêu cầu; Transitous thì không.',
  // file-types
  'help.guide.file-types.title': 'Giới hạn các loại tệp',
  'help.guide.file-types.goal': 'Quyết định tệp tải lên được có những phần mở rộng nào.',
  'help.guide.file-types.step.1':
    'Dưới “Các loại tệp được phép”, chỉnh sửa danh sách phần mở rộng phân cách bằng dấu phẩy và lưu.',
  'help.guide.file-types.result':
    'Tải lên bất kỳ loại nào khác bị từ chối với thông báo rõ ràng, trong tài liệu, nhật ký và ảnh bìa.',
  'help.guide.file-types.tip.1':
    'Giữ các loại ảnh trong danh sách; ảnh bìa và ảnh hành trình đi qua cùng một kiểm tra.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Bật hoặc tắt một tiện ích bổ sung',
  'help.guide.toggle-addon.goal': 'Cung cấp một mô-đun tính năng cho mọi người, hoặc rút nó đi.',
  'help.guide.toggle-addon.step.1':
    'Gạt công tắc trên ô của tiện ích. Mục điều hướng xuất hiện hoặc biến mất với mọi người cùng lúc.',
  'help.guide.toggle-addon.step.2':
    'Một số ô có hàng con cho tùy chọn, như “Theo dõi túi” dưới “Danh sách” hay nhà cung cấp ảnh dưới “Hành trình”; chúng chỉ hiện khi tiện ích đang bật.',
  'help.guide.toggle-addon.result': 'Dữ liệu của tiện ích đã tắt được giữ lại; bật lại sẽ hiện lại nó.',
  'help.guide.toggle-addon.tip.1': 'Tắt MCP gỡ bỏ điểm cuối và các phần “Tích hợp” phụ thuộc vào nó.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas và Hành trình là các tiện ích được người dùng yêu cầu nhiều nhất; Tài liệu cần lưu trữ cho tệp tải lên.',
  // install-plugin
  'help.guide.install-plugin.title': 'Cài một plugin',
  'help.guide.install-plugin.goal': 'Thêm một plugin bên thứ ba và cấp cho nó đúng các quyền nó yêu cầu.',
  'help.guide.install-plugin.step.1':
    'Mở “Khám phá”, chọn một plugin và nhấp “Cài đặt”; hoặc nhấp “Tải plugin lên” và chọn một gói .zip hoặc .tar.gz.',
  'help.guide.install-plugin.step.2':
    'Quay lại “Đã cài đặt”, đọc hàng: plugin được đọc hay ghi gì, các máy chủ nó gọi và nó có được ký không. Bật “Bật plugin”.',
  'help.guide.install-plugin.step.3':
    'Menu của hàng có “Khởi động lại”, “Xem nhật ký lỗi”, “Máy chủ được phép” và “Đổi phiên bản…”; “Xóa bỏ” gỡ cài đặt nó. Bản cập nhật được đề xuất trên hàng khi có phiên bản mới hơn, và bản nào xin quyền mới sẽ tắt cho tới khi bạn phê duyệt.',
  'help.guide.install-plugin.result':
    'Plugin chạy trong tiến trình riêng; những gì nó thêm vào, tiện ích, lớp bản đồ, công cụ, xuất hiện ở nơi plugin khai báo.',
  'help.guide.install-plugin.tip.1': '“Quét lại” nhận thư mục plugin đã liên kết để phát triển mà không cần gói.',
  'help.guide.install-plugin.tip.2': 'Plugin chưa ký được đánh dấu như vậy; chỉ cài khi bạn tin nguồn của nó.',
  // storage-backends
  'help.guide.storage-backends.title': 'Chuyển tệp tải lên sang S3 hoặc bản sao gương',
  'help.guide.storage-backends.goal': 'Giữ tệp trên lưu trữ đối tượng, hoặc trên cả đĩa lẫn bucket.',
  'help.guide.storage-backends.step.1':
    'Dưới “Backend”, nhấp “Thêm backend”, đặt “Tên”, chọn “Loại”, “Cục bộ”, “S3” hoặc “Bản sao gương”, điền các trường và “Áp dụng”. “Kiểm tra” kiểm tra kết nối, “Lưu thay đổi” ghi lại.',
  'help.guide.storage-backends.step.2':
    'Dưới “Danh mục”, gán từng danh mục tải lên cho một backend. Đổi một danh mục sẽ hỏi “Di chuyển các đối tượng hiện có” hay “Chỉ định tuyến các ghi mới”.',
  'help.guide.storage-backends.step.3':
    '“Tình trạng” ở trên cùng kiểm tra mọi backend; mục màu đỏ nêu tên thứ đã thất bại.',
  'help.guide.storage-backends.result': 'Tệp tải lên mới đi tới backend được gán; tệp đã di chuyển được phục vụ từ đó.',
  'help.guide.storage-backends.tip.1':
    'Backend cấu hình qua biến môi trường được hiển thị nhưng không chỉnh sửa được ở đây.',
  'help.guide.storage-backends.tip.2':
    'Bản sao gương ghi vào cả hai đích và đọc từ đích đầu tiên; dùng nó để di chuyển mà không gián đoạn.',
  // channels-instance
  'help.guide.channels-instance.title': 'Cấu hình các kênh thông báo',
  'help.guide.channels-instance.goal': 'Quyết định người dùng được chọn những kênh nào, và thiết lập email.',
  'help.guide.channels-instance.step.1':
    'Dưới “Email (SMTP)”, nhập SMTP Host, SMTP Port, SMTP User, SMTP Password và From Address; “Gửi email kiểm tra” gửi một thư tới bạn.',
  'help.guide.channels-instance.step.2':
    'Bật “Ntfy” và “Webhook” để cung cấp chúng; người dùng sau đó nhập chủ đề hoặc URL của họ trong “Cài đặt”, “Thông báo”.',
  'help.guide.channels-instance.step.3':
    '“Lời nhắc chuyến đi” bật tắt lời nhắc trước khi chuyến đi bắt đầu; “Trong ứng dụng” luôn bật và ở đây chỉ được giải thích.',
  'help.guide.channels-instance.result': 'Tab “Thông báo” của mọi người dùng hiện các kênh bạn đã bật.',
  'help.guide.channels-instance.tip.1':
    'Máy chủ ntfy mặc định nhập ở đây được điền sẵn cho người dùng; họ vẫn có thể nêu máy chủ riêng.',
  'help.guide.channels-instance.tip.2': 'Kênh của plugin tự xuất hiện khi một plugin có khả năng đó được kích hoạt.',
  // admin-channels
  'help.guide.admin-channels.title': 'Nhận sự kiện quản trị trên điện thoại của bạn',
  'help.guide.admin-channels.goal': 'Biết về sao lưu thất bại, bản phát hành mới và các sự kiện khác của phiên bản.',
  'help.guide.admin-channels.step.1':
    'Dưới “Quản trị viên Ntfy”, nhập một chủ đề và, nếu cần, máy chủ và mã thông báo; dưới “Webhook quản trị viên” một URL.',
  'help.guide.admin-channels.step.2': 'Nhấp “Gửi bài kiểm tra” hoặc “Gửi webhook thử nghiệm” để thấy một tin nhắn tới.',
  'help.guide.admin-channels.result':
    'Sự kiện quản trị đi tới đó bên cạnh chuông trong ứng dụng của mọi quản trị viên.',
  'help.guide.admin-channels.tip.1':
    'Giữ chủ đề quản trị tách khỏi chủ đề cá nhân của bạn, để một sự cố không chìm trong tin về chuyến đi.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Thu hồi quyền truy cập của AI',
  'help.guide.mcp-tokens-admin.goal':
    'Xem và cắt mọi mã thông báo và phiên mà một ứng dụng AI nắm giữ, cho bất kỳ người dùng nào.',
  'help.guide.mcp-tokens-admin.step.1':
    'Dưới “API Mã thông báo”, tìm mã theo người dùng và tên; thùng rác xóa nó và ứng dụng dừng ngay lập tức.',
  'help.guide.mcp-tokens-admin.step.2':
    'Dưới “OAuth Phiên”, tương tự cho các ứng dụng chạy trên trình duyệt: ứng dụng, người dùng và ngày, và thùng rác thu hồi phiên.',
  'help.guide.mcp-tokens-admin.result': 'Ứng dụng phải được người dùng của nó kết nối lại; không có gì khác thay đổi.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Phạm vi cho bạn biết một ứng dụng có thể làm gì; phạm vi chỉ đọc để lại cũng vô hại.',
  'help.guide.mcp-tokens-admin.tip.2': 'Tắt tiện ích MCP thu hồi mọi thứ cùng lúc.',
  // release-history
  'help.guide.release-history.title': 'Kiểm tra bản phát hành mới',
  'help.guide.release-history.goal': 'Biết TREK của bạn có mới nhất không và phiên bản tiếp theo mang gì tới.',
  'help.guide.release-history.step.1':
    'Khi có bản phát hành mới hơn, “Đã có bản cập nhật” hiện ở đầu trang quản trị; “Xem trên GitHub” mở nó, và “Cách cập nhật” giải thích việc cập nhật cho Docker và các kiểu cài đặt khác.',
  'help.guide.release-history.step.2':
    '“Lịch sử phát hành” liệt kê mọi bản phát hành cùng ghi chú; “Hiển thị chi tiết” mở rộng chúng, bản mới nhất mang nhãn “Mới nhất”, và “Tải thêm” đi lùi xa hơn.',
  'help.guide.release-history.result':
    'Việc cập nhật diễn ra trên máy chủ, bằng cách kéo image mới hoặc build tag mới; thư mục dữ liệu vẫn nguyên.',
  'help.guide.release-history.tip.1': 'Hãy sao lưu trước khi cập nhật; tab “Sao lưu” ở ngay bên cạnh.',
  'help.guide.release-history.tip.2':
    'Bản tiền phát hành được hiển thị nhưng không được báo là cập nhật trừ khi bạn đang chạy một bản như vậy.',
  // create-backup
  'help.guide.create-backup.title': 'Tạo và khôi phục một bản sao lưu',
  'help.guide.create-backup.goal': 'Chụp toàn bộ phiên bản, giữ một bản sao ở nơi khác, và có thể đưa nó trở lại.',
  'help.guide.create-backup.step.1':
    'Dưới “Sao lưu dữ liệu”, nhấp “Tạo bản sao lưu”. Nó đóng gói cơ sở dữ liệu và tệp tải lên thành một tệp trên máy chủ.',
  'help.guide.create-backup.step.2':
    '“Tải xuống” giữ một bản sao ngoài máy; thùng rác xóa các bản cũ để giải phóng dung lượng.',
  'help.guide.create-backup.step.3':
    '“Khôi phục” trên một bản sao lưu, hoặc “Tải lên bản sao lưu” với một tệp, thay thế dữ liệu hiện tại sau khi “Khôi phục bản sao lưu?” hỏi một lần.',
  'help.guide.create-backup.result':
    'Khôi phục đưa người dùng, chuyến đi, tệp và cài đặt về đúng thời điểm của bản sao lưu; mọi người bị đăng xuất.',
  'help.guide.create-backup.tip.1':
    'Khôi phục là hành động duy nhất ở đây không thể hoàn tác. Hãy tạo một bản sao lưu mới trước.',
  'help.guide.create-backup.tip.2':
    'Bản sao lưu nằm trong thư mục dữ liệu; một bản sao trên máy khác mới là thứ khiến chúng thành sao lưu thật sự.',
  // auto-backup
  'help.guide.auto-backup.title': 'Lên lịch sao lưu',
  'help.guide.auto-backup.goal': 'Để máy chủ tự sao lưu và chỉ giữ vài bản gần nhất.',
  'help.guide.auto-backup.step.1':
    'Dưới “Tự động sao lưu”, bật “Bật tự động sao lưu” và chọn “Khoảng thời gian”, “Chạy theo giờ” và, với hàng tuần hoặc hàng tháng, “Ngày trong tuần” hoặc “Ngày trong tháng”.',
  'help.guide.auto-backup.step.2':
    '“Xóa bản sao lưu cũ sau” đặt thời gian giữ một bản sao lưu; bản cũ hơn bị xóa khi bản mới được tạo.',
  'help.guide.auto-backup.result':
    'Bản sao lưu xuất hiện trong danh sách theo lịch; thất bại được gửi tới các kênh quản trị.',
  'help.guide.auto-backup.tip.1': 'Thời gian theo múi giờ của máy chủ, được hiển thị trong tab “Lịch sử”.',
  'help.guide.auto-backup.tip.2': 'Dung lượng trên máy chủ là hữu hạn; giữ ba tới năm bản thường là đủ.',
  // audit-log
  'help.guide.audit-log.title': 'Đọc nhật ký lịch sử',
  'help.guide.audit-log.goal': 'Tìm ra ai đã làm gì, và khi nào.',
  'help.guide.audit-log.step.1':
    'Đọc các hàng: thời gian, người dùng, hành động, tài nguyên, IP và chi tiết, mới nhất ở trên. Hành động được đặt tên theo việc đã xảy ra, như đăng nhập thất bại, thay đổi MFA hay khôi phục.',
  'help.guide.audit-log.step.2': '“Làm mới” tải lại phần đầu; “Tải thêm” đi lùi xa hơn.',
  'help.guide.audit-log.result': 'Một dấu vết bạn có thể đưa cho bất kỳ ai hỏi vì sao thứ gì đó đã thay đổi.',
  'help.guide.audit-log.tip.1': 'Thời gian hiển thị theo múi giờ của máy chủ, được nêu tên phía trên bảng.',
  'help.guide.audit-log.tip.2': 'Nhật ký chỉ thêm vào; không gì ở đây có thể chỉnh sửa hay xóa từ ứng dụng.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Chuyến đi',
  'help.ctx.trip.summary':
    'Một chuyến đi, trọn vẹn: kế hoạch với các ngày, bản đồ và địa điểm, cùng các tab cho di chuyển, đặt chỗ, danh sách, chi phí, tập tin và cộng tác. Mỗi phần đó có màn hình trợ giúp riêng bên dưới màn hình này.',
  'help.ctx.trip.bullet.1':
    'Thanh tab: “Kế hoạch”, “Di chuyển”, “Đặt chỗ”, “Danh sách”, “Chi phí”, “Tập tin” và “Cộng tác”. Tiện ích bổ sung và plugin quyết định tab nào có trên TREK của bạn.',
  'help.ctx.trip.bullet.2':
    '“Kế hoạch” gồm ba cột: các ngày bên trái, bản đồ ở giữa, địa điểm bên phải. Đặt chỗ và di chuyển nằm trong kế hoạch, tại điểm dừng và giữa các điểm dừng; các tab liệt kê chúng.',
  'help.ctx.trip.bullet.3':
    '“Chia sẻ” ở góc trên bên phải mở ra những người trong chuyến đi: thành viên, khách, liên kết mời và liên kết công khai chỉ đọc.',
  'help.ctx.trip.bullet.4':
    'Tiêu đề, ngày, ảnh bìa và tiền tệ được sửa từ “Chuyến đi”, bằng cây bút chì trên thẻ chuyến đi.',
  'help.ctx.trip.bullet.5':
    'Mũi tên nhỏ ở mép trong của một cột sẽ gập cột lại và bản đồ chiếm chỗ đó; vạch chia mỏng cạnh cột thay đổi độ rộng của nó.',
  'help.ctx.trip.bullet.6': 'Mũi tên hoàn tác trên thanh công cụ của các ngày lấy lại thay đổi gần nhất trên kế hoạch.',
  // add-member
  'help.guide.add-member.title': 'Thêm thành viên',
  'help.guide.add-member.goal': 'Cho một người có tài khoản TREK quyền truy cập chuyến đi này.',
  'help.guide.add-member.step.1': 'Nhấp “Chia sẻ” ở góc trên bên phải.',
  'help.guide.add-member.step.2': 'Dưới “Mời người dùng”, chọn người đó trong danh sách và nhấp “Mời”.',
  'help.guide.add-member.step.3':
    'Người đó giờ xuất hiện dưới “Truy cập”. Vương miện đánh dấu người sở hữu; biểu tượng ở cuối hàng xóa quyền truy cập trở lại.',
  'help.guide.add-member.result':
    'Thành viên xem và sửa chuyến đi như bạn, trong các mức mà quản trị viên đã đặt dưới “Cài đặt quyền”.',
  'help.guide.add-member.tip.1':
    'Ai không có trong danh sách là chưa có tài khoản TREK: thêm họ làm khách, hoặc để họ đăng ký qua liên kết mời.',
  'help.guide.add-member.tip.2':
    'Con số cạnh “Truy cập” đếm số người trong chuyến đi; khách được liệt kê riêng ở bên dưới.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Mời bằng liên kết',
  'help.guide.trip-invite-link.goal': 'Để mọi người tự tham gia chuyến đi.',
  'help.guide.trip-invite-link.step.1':
    'Nhấp “Chia sẻ”, rồi dưới “Liên kết mời tham gia chuyến đi” nhấp “Tạo liên kết mời”.',
  'help.guide.trip-invite-link.step.2':
    'Nhấp “Sao chép” và gửi liên kết. Bất kỳ ai có tài khoản TREK mở nó sẽ tham gia với tư cách thành viên.',
  'help.guide.trip-invite-link.step.3':
    '“Tạo lại” thay thế liên kết và làm liên kết cũ vô dụng; “Vô hiệu hóa” tắt nó đi.',
  'help.guide.trip-invite-link.result': 'Ai mở liên kết sẽ có mặt trong chuyến đi và hiện dưới “Truy cập”.',
  'help.guide.trip-invite-link.tip.1':
    'Người không có tài khoản không dùng được. Quản trị viên phát liên kết đăng ký dưới “Sự quản lý”, “Người dùng”, và có thể gắn một liên kết với chuyến đi này.',
  'help.guide.trip-invite-link.tip.2':
    'Tạo lại khi liên kết đã đi nhầm vào cuộc trò chuyện khác: liên kết cũ ngừng hoạt động ngay lập tức.',
  // add-guest
  'help.guide.add-guest.title': 'Thêm khách không có tài khoản',
  'help.guide.add-guest.goal': 'Tính cả một người không dùng TREK.',
  'help.guide.add-guest.step.1': 'Nhấp “Chia sẻ” và cuộn tới “Khách”.',
  'help.guide.add-guest.step.2': 'Gõ tên vào “Tên khách” và nhấp “Thêm khách”.',
  'help.guide.add-guest.result':
    'Khách có thể được gán vào chi phí, món đồ cần mang và việc cần làm, nhưng không thể đăng nhập.',
  'help.guide.add-guest.tip.1':
    'Bút chì đổi tên khách; biểu tượng ở cuối hàng xóa khách cùng với các phần chia và phân công của họ.',
  'help.guide.add-guest.tip.2': 'Nếu người đó có tài khoản sau này, hãy mời họ làm thành viên và xóa khách đi.',
  // public-link
  'help.guide.public-link.title': 'Đăng liên kết chỉ đọc',
  'help.guide.public-link.goal': 'Cho những người không nên sửa chuyến đi xem nó.',
  'help.guide.public-link.step.1':
    'Nhấp “Chia sẻ”; ở bên phải, dưới “Liên kết công khai”, đánh dấu những gì liên kết được phép hiển thị. “Bản đồ & Kế hoạch” luôn bật; “Đặt chỗ”, “Đóng gói”, “Chi phí” và “Trò chuyện” tùy bạn chọn.',
  'help.guide.public-link.step.2': 'Nhấp “Tạo liên kết”, rồi “Sao chép”.',
  'help.guide.public-link.step.3': 'Các dấu chọn có thể thay đổi khi liên kết còn tồn tại; “Xóa liên kết” dừng nó.',
  'help.guide.public-link.result':
    'Bất kỳ ai có liên kết đều xem được các phần đã chọn mà không cần đăng nhập và không thể thay đổi gì.',
  'help.guide.public-link.tip.1':
    'Liên kết không được liệt kê ở đâu cả; ai có nó đều mở được, nên hãy coi nó như mật khẩu.',
  'help.guide.public-link.tip.2': 'Để cấp quyền sửa, hãy thêm người đó làm thành viên thay vì thế.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Chuyển giao chuyến đi hoặc rời khỏi nó',
  'help.guide.transfer-ownership.goal':
    'Đặt người khác làm chủ sở hữu, hoặc rút khỏi một chuyến đi không phải của bạn.',
  'help.guide.transfer-ownership.step.1':
    'Nhấp “Chia sẻ”. Dưới “Truy cập”, vương miện trên hàng của một thành viên đặt người đó làm chủ sở hữu; xác nhận câu hỏi.',
  'help.guide.transfer-ownership.step.2':
    '“Rời khỏi chuyến đi” trên hàng của chính bạn đưa bạn ra khỏi chuyến đi; nếu là chủ sở hữu, hãy chuyển giao trước.',
  'help.guide.transfer-ownership.result':
    'Chủ sở hữu mới quản lý thành viên và có thể xóa chuyến đi; bạn vẫn là thành viên bình thường.',
  'help.guide.transfer-ownership.tip.1':
    'Chủ sở hữu là người đã tạo chuyến đi cho đến khi nó được chuyển giao; chỉ riêng họ mới xóa được chuyến đi.',
  'help.guide.transfer-ownership.tip.2':
    '“Xóa quyền truy cập” trên hàng của người khác là cùng nút đó theo chiều ngược lại: chủ sở hữu đưa một thành viên ra.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Nhường chỗ cho bản đồ',
  'help.guide.collapse-columns.goal': 'Gập một cột lại hoặc cho nó rộng hơn.',
  'help.guide.collapse-columns.step.1':
    'Nhấp mũi tên nhỏ ở mép trong của cột các ngày để thu gọn nó; bản đồ chiếm chỗ đó. Cột địa điểm có mũi tên nhỏ giống vậy.',
  'help.guide.collapse-columns.step.2': 'Nhấp mũi tên nhỏ lần nữa để đưa cột trở lại.',
  'help.guide.collapse-columns.step.3': 'Kéo vạch chia mỏng giữa cột và bản đồ để thay đổi độ rộng của cột.',
  'help.guide.collapse-columns.result': 'Độ rộng được ghi nhớ; các cột trở lại ở trạng thái mở trong lần truy cập sau.',
  'help.guide.collapse-columns.tip.1': 'Có thể gập cả hai cột cùng lúc để chỉ xem bản đồ.',
  'help.guide.collapse-columns.tip.2':
    'Trên điện thoại không có cột: “Kế hoạch” và “Địa điểm” là hai nút ở dưới cùng bản đồ.',
  // undo-change
  'help.guide.undo-change.title': 'Hoàn tác thay đổi gần nhất',
  'help.guide.undo-change.goal': 'Lấy lại điều bạn vừa làm với kế hoạch.',
  'help.guide.undo-change.step.1':
    'Nhấp mũi tên hoàn tác trên thanh công cụ phía trên các ngày; chú giải của nó nêu tên thay đổi sẽ được lấy lại.',
  'help.guide.undo-change.result': 'Kế hoạch trở lại như cũ, và mũi tên chuyển xám cho đến thay đổi tiếp theo.',
  'help.guide.undo-change.tip.1':
    'Hoàn tác bao gồm kế hoạch: gán, gỡ, sắp xếp lại và di chuyển địa điểm, tối ưu hóa tuyến đường, xóa địa điểm, đổi danh mục và nhập dữ liệu.',
  'help.guide.undo-change.tip.2':
    'Chỉ sâu một bước: chỉ thay đổi gần nhất mới lấy lại được, và một thay đổi mới sẽ thay thế nó.',
};

export default help;
