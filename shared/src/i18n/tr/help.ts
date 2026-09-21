import type { TranslationStrings } from '../types';

// English fallback until 'tr' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Bu ekran için yardım',
  'help.center.title': 'Yardım',
  'help.center.onThisScreen': 'Bu ekranda',
  'help.center.screens': 'Ekranlar',
  'help.center.thisScreen': 'Bu ekran',
  'help.center.subScreens': 'Alt ekranlar: {count}',
  'help.center.subScreensLabel': 'Alt ekranlar',
  'help.center.guidesCount': '{count} kılavuz',
  'help.center.goToScreen': '{screen} ekranına git',
  'help.center.overview': 'Genel bakış',
  'help.center.howTo': 'Nasıl yaparım…',
  'help.center.searchPlaceholder': 'Kılavuzlarda ve belgelerde ara…',
  'help.center.searchEmpty': '“{query}” için sonuç bulunamadı.',
  'help.center.searchGuides': 'Kılavuzlar',
  'help.center.searchDocs': 'Belgeler',
  'help.center.searchError': 'Arama şu anda kullanılamıyor.',
  'help.center.back': 'Geri',
  'help.center.close': 'Yardımı kapat',
  'help.center.steps': '{count} adım',
  'help.center.step': '{n}. adım',
  'help.center.stepsLabel': 'Adımlar',
  'help.center.stepOf': '{total} adımdan {n}.',
  'help.center.screenshot': 'Ekran görüntüsü',
  'help.center.result': 'Sonuç',
  'help.center.tips': 'Bilmekte fayda var',
  'help.center.related': 'İlgili',
  'help.center.openDocs': "Yardım ve Belgeler'de aç",
  'help.center.docsSection': 'Belgelerde',
  'help.center.noContext': 'Bu ekran için henüz kılavuz yok.',
  'help.center.noContextHint': 'Belgelerde arayın ya da ne aradığınızı bize söyleyin.',
  'help.center.feedback': 'Eksik bir şey mi var?',
  'help.center.feedbackLink': "GitHub'da bize söyleyin",
  'help.center.discord': "Discord'da sorun",
  'help.center.quick': 'Hızlı',
  'help.center.guide': 'Kılavuz',
  'help.center.tour': 'Gösterim',
  'help.center.imageAlt': '“{title}” kılavuzunun {n}. adımı',

  // ctx
  'help.ctx.dashboard.title': 'Pano',
  'help.ctx.dashboard.summary':
    'Pano, her seyahatin giriş kapısıdır. Üstteki biniş kartı süren ya da sıradaki seyahati öne çıkarır, altındaki satır şimdiye kadar ne kadar yol aldığınızı sayar, kartlar ise planladığınız, arşivlediğiniz ya da tamamladığınız her şeyi listeler.',
  'help.ctx.dashboard.bullet.1':
    'Biniş kartı: süren ya da sıradaki seyahat; tarihleri, yolcuları, yerleri ve geri sayımıyla. Seyahati açmak için tıklayın.',
  'help.ctx.dashboard.bullet.2':
    'Seyahat istatistikleri: tüm seyahatlerinizde ziyaret edilen ülkeler, seyahatler, yolda geçen günler ve uçulan mesafe.',
  'help.ctx.dashboard.bullet.3':
    'Planlanan, Arşivlendi ve Tamamlandı olarak süzülen seyahat kartları, ızgara ya da liste halinde. Düzenlemek, çoğaltmak, arşivlemek ve silmek için bir kartın üzerine gelin.',
  'help.ctx.dashboard.bullet.4':
    'Sağdaki bileşenler: döviz çevirici, dünya saatleri, yaklaşan rezervasyonlar ve koleksiyonlar. Her biri kapatılabilir.',
  'help.ctx.dashboard.bullet.5': '“Yeni Seyahat” kartı ve sağ alt köşedeki düğme, ikisi de yeni bir seyahat başlatır.',

  // create-trip
  'help.guide.create-trip.title': 'Seyahat oluşturma',
  'help.guide.create-trip.goal': 'Ad, tarihler ve kapak fotoğrafıyla yeni bir seyahat başlatın.',
  'help.guide.create-trip.step.1':
    '“Yeni Seyahat”e tıklayın. Seyahatlerinizin sonundaki kart ile sağ alt köşedeki düğme aynı işi yapar.',
  'help.guide.create-trip.step.2': 'Seyahate bir ad verin. Zorunlu tek alan budur; gerisini sonradan ekleyebilirsiniz.',
  'help.guide.create-trip.step.3':
    'Başlangıç ve bitiş tarihi seçin. TREK her tarih için bir gün oluşturur, böylece rotanız doldurulmaya hazır olur.',
  'help.guide.create-trip.step.4':
    "İsteğe bağlı: bir kapak fotoğrafı ekleyin. Kendi fotoğrafınızı yükleyin, sürükleyip bırakın ya da hedefi Unsplash'ta arayın.",
  'help.guide.create-trip.step.5': '“Yeni Seyahat Oluştur”a tıklayın.',
  'help.guide.create-trip.result': 'Seyahat panonuzda görünür. Sıradaki seyahatinizse üstteki biniş kartını devralır.',
  'help.guide.create-trip.tip.1':
    'Tarihler sonradan değiştirilebilir. Rezervasyonlar zaten varsa TREK, günlerle birlikte taşınıp taşınmayacağını sorar.',
  'help.guide.create-trip.tip.2':
    'Burada seçtiğiniz seyahat para birimi, her harcamanın çevrileceği birimdir. Gideceğiniz yerin para birimini seçin.',

  // edit-trip
  'help.guide.edit-trip.title': 'Seyahati düzenleme',
  'help.guide.edit-trip.goal': 'Bir seyahati yeniden adlandırın, tarihlerini değiştirin ya da ayarlarını düzenleyin.',
  'help.guide.edit-trip.step.1': 'Seyahat kartının (ya da biniş kartının) üzerine gelin ve kaleme tıklayın.',
  'help.guide.edit-trip.step.2':
    'Gerekeni değiştirin: ad, açıklama, tarihler, kapak, para birimi, hatırlatıcı ya da üyeler.',
  'help.guide.edit-trip.step.3': '“Güncelle”ye tıklayın.',
  'help.guide.edit-trip.result': 'Kart, seyahatin her üyesi için anında güncellenir.',
  'help.guide.edit-trip.tip.1':
    'Rezervasyonu olan bir seyahatin tarihlerini taşımak, rezervasyonların da taşınıp taşınmayacağını soran ikinci bir adım açar.',

  // cover-image
  'help.guide.cover-image.title': 'Kapak fotoğrafı belirleme',
  'help.guide.cover-image.goal': 'Seyahate, kartında ve biniş kartında görünen bir görsel verin.',
  'help.guide.cover-image.step.1': 'Kartındaki kalemle seyahatin düzenleme formunu açın.',
  'help.guide.cover-image.step.2':
    '“Kapak Görseli” altında bir fotoğrafı bırakın, yüklemek için tıklayın ya da Unsplash aramasına bir hedef yazın.',
  'help.guide.cover-image.step.3': 'Bir fotoğraf seçin ve “Güncelle”ye tıklayın.',
  'help.guide.cover-image.result':
    'Fotoğraf seyahatle birlikte kaydedilir ve seyahatin listelendiği her yerde görünür.',
  'help.guide.cover-image.tip.1':
    'Unsplash aramasından gelen fotoğraflara otomatik olarak fotoğrafçı bilgisi eklenir; kendi yüklemeleriniz sunucunuzda kalır.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Seyahati çoğaltma',
  'help.guide.duplicate-trip.goal': 'Bir seyahati yenisi için şablon olarak yeniden kullanın.',
  'help.guide.duplicate-trip.step.1': 'Kartın üzerine gelin ve çoğaltma simgesine tıklayın.',
  'help.guide.duplicate-trip.step.2': 'Nelerin kopyalanıp nelerin kopyalanmayacağını okuyun, sonra onaylayın.',
  'help.guide.duplicate-trip.result':
    'Orijinalin yanında, yeniden adlandırılmaya ve tarihlendirilmeye hazır bir kopya belirir.',
  'help.guide.duplicate-trip.tip.1':
    'Günler, yerler, rezervasyonlar, bütçe kalemleri, valiz listeleri ve gün notları kopyalanır. Üyeler, sohbet, anketler, dosyalar ve paylaşım bağlantıları kopyalanmaz.',

  // archive-trip
  'help.guide.archive-trip.title': 'Seyahati arşivleme ve geri alma',
  'help.guide.archive-trip.goal': 'Bir seyahati silmeden kenara kaldırın ve sonra geri getirin.',
  'help.guide.archive-trip.step.1': 'Kartın üzerine gelin ve “Arşivle”ye tıklayın.',
  'help.guide.archive-trip.step.2': 'Yeniden görmek için kartların üstündeki süzgeci “Arşivlendi” yapın.',
  'help.guide.archive-trip.step.3': '“Planlanan”a geri taşımak için karttaki “Geri al”a tıklayın.',
  'help.guide.archive-trip.result':
    'Arşivlenen seyahatler her şeyi korur. Yalnızca panoyu ve tüm seyahatler takvim akışını meşgul etmeyi bırakırlar.',

  // delete-trip
  'help.guide.delete-trip.title': 'Seyahati silme',
  'help.guide.delete-trip.goal': 'Bir seyahati kalıcı olarak kaldırın.',
  'help.guide.delete-trip.step.1': 'Kartın üzerine gelin ve çöp kutusuna tıklayın.',
  'help.guide.delete-trip.step.2':
    'Onaylayın. İletişim kutusu seyahatin adını gösterir, böylece doğru olanı sildiğinizden emin olursunuz.',
  'help.guide.delete-trip.result':
    'Seyahat; günleri, yerleri, rezervasyonları ve dosyalarıyla birlikte gider. Geri alma yoktur; emin değilseniz arşivleyin.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Tamamlanan seyahatleri bulma, ızgara ve liste arasında geçiş',
  'help.guide.filter-and-view.goal': 'Biten ya da arşivlenen seyahatleri görün ve sevdiğiniz düzeni seçin.',
  'help.guide.filter-and-view.step.1':
    'Kartların üstündeki “Planlanan”, “Arşivlendi” ve “Tamamlandı”yı kullanın. Tamamlandı, bitiş tarihi geçmiş her seyahattir.',
  'help.guide.filter-and-view.step.2':
    'Sıkışık bir listeye geçmek için liste simgesine tıklayın; ızgara için yeniden tıklayın.',
  'help.guide.filter-and-view.result': 'Pano, bu cihazdaki düzeninizi hatırlar.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Tüm seyahatlere takviminizde abone olma',
  'help.guide.calendar-feed.goal':
    'Her etkin seyahatin günlerini ve rezervasyonlarını takvim uygulamanızda, hep eşitlenmiş olarak görün.',
  'help.guide.calendar-feed.step.1': 'Görünüm düğmesinin yanındaki takvim simgesine tıklayın.',
  'help.guide.calendar-feed.step.2':
    '“Enable calendar subscription”a tıklayın. TREK özel bir akış bağlantısı oluşturur.',
  'help.guide.calendar-feed.step.3':
    "Akışı düğmelerden biriyle ekleyin (Google, Apple, Outlook) ya da bağlantıyı URL'lere abone olabilen herhangi bir takvim uygulamasına kopyalayın.",
  'help.guide.calendar-feed.result':
    'Her etkin seyahat takviminizde görünür ve kendiliğinden güncellenir. Arşivlenen seyahatler ve 90 günden uzun süre önce biten seyahatler dışarıda kalır.',
  'help.guide.calendar-feed.tip.1':
    'Bağlantı bir sırdır. Elinde olan herkes akışı okuyabilir; sızarsa aynı iletişim kutusundan iptal edin.',

  // widgets
  'help.guide.widgets.title': 'Pano bileşenlerini seçme',
  'help.guide.widgets.goal': 'İstatistik satırını ve sağdaki bileşenleri gösterin ya da gizleyin.',
  'help.guide.widgets.step.1': 'Sağ üstteki avatar menüsünü açın ve “Ayarlar”ı seçin.',
  'help.guide.widgets.step.2': '“Appearance” sekmesine geçin.',
  'help.guide.widgets.step.3':
    '“Dashboard widgets” altında her bileşeni açın ya da kapatın. Masaüstü ve mobil ayrı ayrı ayarlanır.',
  'help.guide.widgets.step.4': 'Panoya geri dönün. Değişiklik anında uygulanır.',
  'help.guide.widgets.result':
    'Gizlenen bileşenler seyahatlerinize yer açar; düzeni ortalamak için sağ sütunun tamamını kapatın.',
  'help.guide.widgets.link': 'Görünüm ayarlarını aç',

  // currency-widget
  'help.guide.currency-widget.title': 'Döviz çevirme',
  'help.guide.currency-widget.goal': 'Bir tutarı güncel kurlarla iki para birimi arasında çevirin.',
  'help.guide.currency-widget.step.1': 'Tutarı yazın ve iki para birimini seçin.',
  'help.guide.currency-widget.step.2': 'Aradaki ok çifti yer değiştirir; dairesel ok kuru yeniler.',
  'help.guide.currency-widget.result': 'Para birimi çiftiniz hesabınızda hatırlanır, yani her cihazda aynıdır.',
  'help.guide.currency-widget.tip.1': "Kurlar Avrupa Merkez Bankası'ndan gelir ve günde bir kez güncellenir.",

  // timezones-widget
  'help.guide.timezones-widget.title': 'Dünya saatleri ekleme',
  'help.guide.timezones-widget.goal': 'Gideceğiniz yerlerdeki yerel saati göz önünde tutun.',
  'help.guide.timezones-widget.step.1': '“Saat dilimleri” bileşeninde + simgesine tıklayın ve bir şehir arayın.',
  'help.guide.timezones-widget.step.2': 'Bir saati yanındaki × ile kaldırın.',
  'help.guide.timezones-widget.result': 'Saatleriniz hesabınızla birlikte kaydedilir.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay kişisel izin planlayıcınızdır: yılda kaç izin gününüz var, hangilerini kaydettiniz ve ne kadar kaldı. Izgara tüm yılı tek bakışta gösterir; kenar çubuğunda yıl seçici, birlikte planladığınız kişiler, sizinle paylaşılan takvimler, açıklama ve izin hakkınız yer alır.',
  'help.ctx.vacay.bullet.1':
    'Yıl ızgarası: on iki ay kartı, gün başına bir hücre. Bir günü kaydetmek veya silmek için tıklayın. Küçük mavi nokta, bir seyahatin zaten kapsadığı günleri işaretler.',
  'help.ctx.vacay.bullet.2':
    'Alttaki araç çubuğu: Tatil veya Şirket Tatili modu, ayrıca tıklamanın ne kaydedeceğini değiştiren Yarım gün ve Serbest zaman anahtarları.',
  'help.ctx.vacay.bullet.3':
    'Hakediş: yıl için günleriniz, kaçının kullanıldığı ve kaçının kaldığı, önceki dönemden devirle birlikte.',
  'help.ctx.vacay.bullet.4':
    'Kişiler, planınızla birleşen insanlardır; her biri kendi renginde. Paylaşılan Takvimler, başkalarının izin günlerini gösteren salt okunur halkalardır.',
  'help.ctx.vacay.bullet.5':
    'Ayarlar hafta sonlarını, hafta başlangıcını, devri, izin yılınızı, şirket tatillerini ve resmi tatil ya da okul tatili takvimlerini kapsar.',
  // log-day
  'help.guide.log-day.title': 'İzin günü kaydetme',
  'help.guide.log-day.goal': 'Yıl ızgarasında bir izin günü işaretleyin ve bakiyenin değişmesini izleyin.',
  'help.guide.log-day.step.1':
    'Alttaki araç çubuğuna bakın: sizin renginizdeki sol düğme, tıklamanın sizin için bir izin günü kaydedeceği anlamına gelir.',
  'help.guide.log-day.step.2':
    'Herhangi bir ay kartında bir güne tıklayın. Renginizle dolar ve Kullanılan bir gün fazla sayar.',
  'help.guide.log-day.step.3': 'Silmek için aynı güne yeniden tıklayın.',
  'help.guide.log-day.result':
    'Gün kaydedilir; Gün, Kullanılan ve Kalan hemen güncellenir ve planınızla birleşen herkes bunu canlı görür.',
  'help.guide.log-day.tip.1': "Ayarlar'da Hafta Sonlarını Engelle açıkken hafta sonları kaydedilemez.",
  'help.guide.log-day.tip.2':
    'Hücredeki mavi nokta, seyahatlerinizden birinin o günü kapsadığı anlamına gelir; böylece izin ve seyahatin nerede çakıştığını görürsünüz.',
  // half-day
  'help.guide.half-day.title': 'Yarım gün kaydetme',
  'help.guide.half-day.goal': 'Tam bir izin günü harcamadan bir öğleden sonra izin alın.',
  'help.guide.half-day.step.1':
    "Araç çubuğunda Yarım gün'ü açın. Turuncu nokta, yarım günün ızgarada aldığı işarettir.",
  'help.guide.half-day.step.2': 'Bir güne tıklayın. 0,5 olarak kaydedilir ve köşesinde turuncu nokta taşır.',
  'help.guide.half-day.step.3':
    "İşiniz bitince Yarım gün'ü yeniden kapatın; farklı ayarlarla bir yarım güne tıklamak onu yerinde dönüştürür.",
  'help.guide.half-day.result':
    'Kullanılan 0,5 artar. Yarım gün ile Serbest zaman bağımsızdır, yani yarım telafi günü de mümkündür.',
  'help.guide.half-day.tip.1':
    'Araç çubuğu her zaman bir sonraki tıklamanızın koyacağı işareti gösterir; kaydetmeden önce kontrol edebilirsiniz.',
  // comp-day
  'help.guide.comp-day.title': 'Telafi veya esnek zaman kaydetme',
  'help.guide.comp-day.goal': 'İzin günü harcamayan telafi izni kullanın.',
  'help.guide.comp-day.step.1':
    "Araç çubuğunda Serbest zaman'ı açın. Taralı disk, telafi gününün ızgaradaki görünümüdür.",
  'help.guide.comp-day.step.2': 'Bir güne tıklayın. Düz bir blok yerine renginizde çapraz taramayla dolar.',
  'help.guide.comp-day.result': "Telafi günleri izin hakkı kutucuklarının yanında sayılır ve Kalan'ı asla azaltmaz.",
  'help.guide.comp-day.tip.1':
    'Geri alınan fazla mesai, esnek çalışma, telafi izni: izin olmayan ama boş olan her şey buraya girer.',
  // entitlement
  'help.guide.entitlement.title': 'İzin hakkınızı ayarlama',
  'help.guide.entitlement.goal': "Vacay'e yılda kaç izin gününüz olduğunu söyleyin.",
  'help.guide.entitlement.step.1': 'Kenar çubuğunda Hakediş altındaki Gün kutucuğuna tıklayın.',
  'help.guide.entitlement.step.2': "Gün sayınızı yazın ve Enter'a basın.",
  'help.guide.entitlement.result': 'Kalan; izin hakkınız, varsa devir ve kullandığınız günlerden yeniden hesaplanır.',
  'help.guide.entitlement.tip.1':
    'Her yılın kendi izin hakkı vardır; buradaki değişiklik yalnızca seçili yılı etkiler.',
  // years
  'help.guide.years.title': 'Yıl ekleme ve yıllar arasında geçiş',
  'help.guide.years.goal': 'Gelecek yılı şimdiden planlayın ya da geçen yıla dönüp bakın.',
  'help.guide.years.step.1':
    "Sonraki yılı eklemek için yılın sağındaki +'ya, öncekini eklemek için soldaki +'ya tıklayın.",
  'help.guide.years.step.2': 'Yıllar arasında oklarla ya da alttaki yıl etiketleriyle geçiş yapın.',
  'help.guide.years.step.3':
    'Bir yılı kaldırmak için etiketinin üzerine gelin ve küçük eksiye tıklayın. Kayıtları onunla birlikte gider, dikkatle onaylayın.',
  'help.guide.years.result': 'Her yıl kendi izin hakkını ve kayıtlarını tutar; devir onları birbirine bağlar.',
  // company-holidays
  'help.guide.company-holidays.title': 'Şirket tatillerini işaretleme',
  'help.guide.company-holidays.goal': 'Tüm şirketin tatil olduğu günleri kimsenin izin hakkını harcamadan bloke edin.',
  'help.guide.company-holidays.step.1':
    "Ayarlar'ı açın ve Şirket Tatilleri'nin açık olduğunu kontrol edin. Varsayılan olarak açıktır; araç çubuğu modu yalnızca açıkken sunar.",
  'help.guide.company-holidays.step.2': 'Izgaraya dönüp araç çubuğunu Şirket Tatili moduna alın.',
  'help.guide.company-holidays.step.3': 'Günlere tıklayın. Kehribar rengine döner ve açıklamada görünürler.',
  'help.guide.company-holidays.result': "Şirket tatilleri planla birleşen herkese görünür ve Kalan'ı asla azaltmaz.",
  'help.guide.company-holidays.tip.1':
    'Birleşen herkes şirket tatillerini düzenleyebilir; kimin sürdüreceğinde anlaşın.',
  // public-holidays
  'help.guide.public-holidays.title': 'Resmi tatilleri gösterme',
  'help.guide.public-holidays.goal': 'Ülkenizin veya bölgenizin resmi tatillerini ızgaraya koyun.',
  'help.guide.public-holidays.step.1': "Ayarlar'ı açın ve Resmi Tatiller'i açın.",
  'help.guide.public-holidays.step.2':
    "Takvim ekle'ye tıklayın, ülkeyi ve önemliyse bölgeyi seçin. İsterseniz renk ve etiket verin.",
  'help.guide.public-holidays.step.3': "Ayarlar'ı kapatın. Tatiller ızgarada ve açıklamada görünür.",
  'help.guide.public-holidays.result': 'Resmi tatiller takvimin renginde işaretlenir ve izin hakkınızdan asla düşmez.',
  'help.guide.public-holidays.tip.1':
    'Birden fazla takvim ekleyebilirsiniz, örneğin kendi bölgeniz ve birleştiğiniz bir iş arkadaşınızınki.',
  // school-holidays
  'help.guide.school-holidays.title': 'Okul tatillerini gösterme',
  'help.guide.school-holidays.goal': 'Bölgenizin okul tatillerini kendi izin günlerinizin yanında görün.',
  'help.guide.school-holidays.step.1': "Ayarlar'ı açın ve School Holidays'i açın.",
  'help.guide.school-holidays.step.2':
    "Takvim ekle'ye tıklayın ve ülkeyi seçin. Ülke takvimini bölüyorsa bölgeyi veya grubu da seçin.",
  'help.guide.school-holidays.step.3': "Ayarlar'ı kapatın. Her tatil, günlerinin altında renkli bir şerit alır.",
  'help.guide.school-holidays.result': 'Okul tatilleri yalnızca görseldir: kimsenin izin hakkını azaltmaz.',
  'help.guide.school-holidays.tip.1':
    'Bölgeniz yok mu? Yöneticiniz Yönetici, Kişiselleştirme, Okul tatilleri altında okul tatillerini elle yönetebilir.',
  // weekends
  'help.guide.weekends.title': 'Hafta sonlarını engelleme ve hafta başlangıcını ayarlama',
  'help.guide.weekends.goal': 'Hafta sonlarını sayımın dışında tutun ve haftayı alıştığınız günde başlatın.',
  'help.guide.weekends.step.1': "Ayarlar'ı açın.",
  'help.guide.weekends.step.2': "Hafta Sonlarını Engelle'yi açın ve hangi günlerin hafta sonunuz sayılacağını seçin.",
  'help.guide.weekends.step.3': "Hafta başlangıcı altında Pazartesi veya Pazar'ı seçin.",
  'help.guide.weekends.result': 'Engellenen günler ızgarada gri görünür ve yanlışlıkla kaydedilemez.',
  // leave-year
  'help.guide.leave-year.title': 'İzin yılınızı ayarlama',
  'help.guide.leave-year.goal':
    'İzin hakkınızı Ocak ile Aralık arası yerine mali yıl üzerinden ya da işe giriş tarihinden itibaren sayın.',
  'help.guide.leave-year.step.1': "Ayarlar'ı açın ve Tatil yılı'nı bulun.",
  'help.guide.leave-year.step.2':
    'Takvim, Mali (başladığı ay ve günle) veya İşe giriş (işe alındığınız tarihle) seçeneğini seçin.',
  'help.guide.leave-year.result':
    'İzin hakkı, kullanılan günler ve devir bu dönemi izler; ızgara dönemin ilk ayıyla başlar.',
  'help.guide.leave-year.tip.1':
    'Bu ayar kişiseldir: birleşik bir planda herkes kendi izin yılını ve rakamlarını korur.',
  // carry-over
  'help.guide.carry-over.title': 'Kullanılmayan günleri devretme',
  'help.guide.carry-over.goal': 'Bir dönemin sonunda kalanı sonrakine ekleyin.',
  'help.guide.carry-over.step.1': "Ayarlar'ı açın.",
  'help.guide.carry-over.step.2': "Devret'i açın.",
  'help.guide.carry-over.result':
    'Devredilen miktar tüm yıllarınız için yeniden hesaplanır ve izin hakkının altında gösterilir.',
  'help.guide.carry-over.tip.1': 'Kapatmak her devir bakiyesini sıfırlar.',
  // invite
  'help.guide.invite.title': 'Biriyle birlikte planlama',
  'help.guide.invite.goal':
    'Planınızı başka bir TREK kullanıcısıyla birleştirin ki birbirinizin izin günlerini tek ızgarada görün.',
  'help.guide.invite.step.1': 'Kişiler panelindeki kişi simgesine tıklayın.',
  'help.guide.invite.step.2': 'Kullanıcıyı seçin ve daveti gönderin.',
  'help.guide.invite.step.3': 'Bir bildirim alır ve kabul eder. O zamana kadar davet beklemede görünür.',
  'help.guide.invite.result':
    'İki plan birleşir: herkesin bir rengi olur, birbiriniz için gün kaydedebilirsiniz ve her şey canlı eşitlenir.',
  'help.guide.invite.tip.1':
    "Birleşmeyi geri almak için Ayarlar'daki Ayır'ı kullanın. Herkesin kayıtları kendi planına döner.",
  'help.guide.invite.tip.2': 'Diğer kişi yalnızca günlerinizi görecekse, birleştirmek yerine takviminizi paylaşın.',
  // share-calendar
  'help.guide.share-calendar.title': 'Takviminizi salt okunur paylaşma',
  'help.guide.share-calendar.goal':
    'Birinin planınıza söz sahibi olmadan ne zaman izinli olduğunuzu görmesine izin verin.',
  'help.guide.share-calendar.step.1': 'Paylaşılan Takvimler panelindeki paylaş simgesine tıklayın.',
  'help.guide.share-calendar.step.2': "Kullanıcıyı seçin ve Paylaş'a tıklayın. Kabul gerekmez.",
  'help.guide.share-calendar.step.3':
    'Sizinle paylaşılan takvimler aynı panelde görünür; göz birini gizler, Paylaşımı durdur sizinkini geri alır.',
  'help.guide.share-calendar.result':
    'İzin günleriniz onun ızgarasında renkli bir halka olarak görünür. Paylaştığınız hiçbir şey oradan düzenlenemez.',
  'help.guide.share-calendar.tip.1':
    'Paylaşma ve birleştirme bağımsızdır: bir kişiyle birleşip başkalarıyla paylaşabilirsiniz.',
  'help.guide.share-calendar.tip.2': 'Halkalı bir günün üzerine gelerek kimin ne kadar süre izinli olduğunu görün.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas, dünya haritasındaki seyahat iziniz: bir gezinin sizi götürdüğü her ülke renklendirilir, TREK’ten önce gittiklerinizi ise elle eklersiniz. Bölgeler için yakınlaştırın, hâlâ görmek istediğiniz yerlerin bir yapılacaklar listesini tutun ve rakamlarınızı alttaki cam panelden okuyun.',
  'help.ctx.atlas.bullet.1':
    'Harita: gidilen ülkeler kendilerine kalan bir renk taşır, planlanan ülkelerin kesikli çerçevesi, yapılacaklar listesindekilerin çapraz taraması vardır, geri kalan her yer gridir. Gezileri, yerleri ve ilk ile son ziyareti görmek için bir ülkenin üzerine gelin.',
  'help.ctx.atlas.bullet.2':
    'Üstteki arama: bir ülke ya da yer yazın. Bir ülkeyi seçmek haritayı oraya uçurur ve açılır penceresini açar; bir yeri seçmek onun bölgesine iner, böylece onu işaretleyebilirsiniz.',
  'help.ctx.atlas.bullet.3':
    'Planlanan ülkeleri göster, sağ üstte: yaklaşan gezilerinizin ülkelerini ortaya çıkarır. Anahtar yalnızca böyle gezileriniz olduğu sürece görünür.',
  'help.ctx.atlas.bullet.4':
    'Alttaki panel: ülkeler, geziler, yerler, şehirler, günler, kıtalar ve serinizle İstatistikler sekmesi; hâlâ önünüzde olanlarla Yapılacaklar Listesi sekmesi.',
  'help.ctx.atlas.bullet.5':
    'Bölgeler: yakınlaştırma seviyesi 5’ten itibaren harita eyaletlere ve illere geçer, her biri işaretlemek ya da kaldırmak için tıklanabilir.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: eklenti bağlıyken istatistiklerin solundaki bir panel dilekleri işaretler ve kayıtlarınızdan ülke ekler, asla sizin onayınız olmadan değil.',
  // mark-country
  'help.guide.mark-country.title': 'Bir ülkeyi ziyaret edildi olarak işaretleyin',
  'help.guide.mark-country.goal': 'TREK’ten önce gittiğiniz bir ülkeyi ekleyin ki harita ve sayacınız onu içersin.',
  'help.guide.mark-country.step.1': 'Ülkeyi haritanın üstündeki arama kutusuna yazın.',
  'help.guide.mark-country.step.2': 'Listeden seçin. Harita oraya uçar ve o ülke için bir pencere açılır.',
  'help.guide.mark-country.step.3': 'Ziyaret edildi olarak işaretle seçeneğini seçin.',
  'help.guide.mark-country.result':
    'Ülke haritada rengini alır ve Ülkeler bir fazla sayar. Bu renk kalıcıdır: başka ülkeleri işaretlemek diğerlerini asla karıştırmaz.',
  'help.guide.mark-country.tip.1':
    'Haritada gri bir ülkeye tıklamak aynı pencereyi açar; küçük ülkeler için arama en güvenli yoldur.',
  'help.guide.mark-country.tip.2':
    'Elle işaretlediğiniz bir ülke, oraya giden gezinin tarihleri ne olursa olsun her zaman gidildi sayılır.',
  // unmark-country
  'help.guide.unmark-country.title': 'İşaretlediğiniz bir ülkeyi kaldırın',
  'help.guide.unmark-country.goal': 'Elle işaretlenmiş bir ülkeyi haritadan yeniden kaldırın.',
  'help.guide.unmark-country.step.1':
    'Ülkeyi arayıp seçin ya da haritada tıklayın. Kendi işaretlediğiniz bir ülke için pencere kaldırılıp kaldırılmayacağını sorar.',
  'help.guide.unmark-country.step.2': 'Kaldırmak ile onaylayın.',
  'help.guide.unmark-country.result': 'Ülke yeniden griye döner ve sayacınızdan çıkar.',
  'help.guide.unmark-country.tip.1':
    'Bu şekilde yalnızca elle işaretlenen ülkeler kaldırılabilir. Gezisi ya da yeri olan bir ülke onlar oldukça kalır; elle işaretlendiyse Kaldırmak paneldeki ayrıntı kartında da bulunur.',
  // country-details
  'help.guide.country-details.title': 'Bir ülkede ne yaptığınızı görün',
  'help.guide.country-details.goal': 'Gidilen bir ülkeyi açın ve sizi oraya götüren gezilere atlayın.',
  'help.guide.country-details.step.1': 'Gittiğiniz bir ülkeyi arayın.',
  'help.guide.country-details.step.2':
    'Seçin. Harita oraya uçar ve alttaki panele bayrağı, yerleri, gezileri ve gezi başına bir çip içeren bir kart eklenir.',
  'help.guide.country-details.result': 'O geziyi planlayıcıda açmak için bir gezi çipine tıklayın.',
  'help.guide.country-details.tip.1':
    'Haritada ülkenin üzerine gelmek aynı rakamları artı ilk ve son ziyareti gösterir.',
  // planned-countries
  'help.guide.planned-countries.title': 'Gideceğiniz ülkeleri gösterin',
  'help.guide.planned-countries.goal': 'Yaklaşan gezilerinizin ülkelerini gidildi saymadan haritaya getirin.',
  'help.guide.planned-countries.step.1':
    'Sağ üstteki Planlanan ülkeleri göster anahtarını açın. Yanındaki sayı kaç tanesinin beklediğini söyler.',
  'help.guide.planned-countries.step.2':
    'Planlanan bir ülkeyi arayıp seçin: panel Planlandı der ve haritadaki ipucu ne zaman gideceğinizi gösterir.',
  'help.guide.planned-countries.result':
    'Planlanan ülkeler kesikli çerçeveyle görünür, böylece asla zaten gittiğiniz bir yer gibi durmazlar. Anahtar seçiminizi hatırlar.',
  'help.guide.planned-countries.tip.1':
    'Bir ülke, oraya olan gezi başladığında gidildi sayılır; süren bir gezi de sayılır. Tarihsiz geziler istatistiklerin tamamen dışında kalır.',
  'help.guide.planned-countries.tip.2': 'Anahtar yalnızca yaklaşan gezileriniz olduğu sürece vardır.',
  // regions
  'help.guide.regions.title': 'Bir bölgeyi işaretleyin',
  'help.guide.regions.goal': 'Ülkelerden daha ince: gittiğiniz eyaletleri, illeri ya da vilayetleri işaretleyin.',
  'help.guide.regions.step.1':
    'Bölgeleri görünene kadar bir ülkeye yakınlaştırın, yakınlaştırma seviyesi 5’ten itibaren. Ülkeyi arayıp seçmek sizi yeterince yaklaştırır.',
  'help.guide.regions.step.2':
    'Bir bölgeye tıklayın. Üzerine gelmek adını söyler; pencere bölgeyi ve ülkesini gösterir.',
  'help.guide.regions.step.3': 'Ziyaret edildi olarak işaretle seçeneğini seçin.',
  'help.guide.regions.result':
    'Bölge ülkenin rengiyle dolar. Bir bölgeyi işaretlemek, henüz değilse ülkeyi de gidildi sayar.',
  'help.guide.regions.tip.1':
    'Gidilen bir bölgeye tıklamak Kaldırmak seçeneğini sunar; ister siz işaretlemiş olun, ister bir yer onu oraya koymuş olsun.',
  'help.guide.regions.tip.2': 'Gerçek yerlerinizin olduğu bölgeler sizin için işaretlenir; orada yapacak bir şey yok.',
  // search-place
  'help.guide.search-place.title': 'Bir yer bulun ve bölgesini işaretleyin',
  'help.guide.search-place.goal':
    'Bir şehrin hangi bölgede olduğunu bilmeden, Münih’i arayarak Bavyera’yı işaretleyin.',
  'help.guide.search-place.step.1':
    'Arama kutusuna bir şehir, bir simge yapı ya da bir adres yazın. Önce ülkeler gelir; eşleşen yerler altlarında Yerler başlığı altında görünür.',
  'help.guide.search-place.step.2': 'Yeri seçin. Harita oraya uçar ve noktanın hangi bölgede olduğunu bulur.',
  'help.guide.search-place.step.3':
    'O bölge için Ziyaret edildi olarak işaretle ya da hâlâ önünüzdeyse Yapılacaklar listesine ekle seçeneğini seçin.',
  'help.guide.search-place.result':
    'Bölge işaretlenir ve onunla birlikte ülke de. Harita paketinde bölge verisi olmayan ülkeler ülkenin kendisine döner.',
  'help.guide.search-place.tip.1':
    'Yerler TREK’in her yerindeki aynı aramadan gelir, dolayısıyla yöneticinizin kurduğu sağlayıcıyı izler.',
  // bucket-country
  'help.guide.bucket-country.title': 'Bir ülkeyi yapılacaklar listesine koyun',
  'help.guide.bucket-country.goal':
    'Gittiklerinizden ayrı olarak, doğrudan haritada bir ülke yapılacaklar listesi tutun.',
  'help.guide.bucket-country.step.1': 'Ülkeyi arayıp seçin ya da haritada tıklayın.',
  'help.guide.bucket-country.step.2': 'Yapılacaklar listesine ekle seçeneğini seçin.',
  'help.guide.bucket-country.step.3':
    'Ne zaman olduğunu biliyorsanız ay ve yıl seçin, sonra Yapılacaklar listesine ekle ile onaylayın.',
  'help.guide.bucket-country.result':
    'Ülke, oraya vardığınızda taşıyacağı renkte çapraz taramayla çizilir ve panelin Yapılacaklar Listesi sekmesinde görünür.',
  'help.guide.bucket-country.tip.1':
    'Ülke listeye girdiğinde aynı pencere Yapılacaklar listesinden kaldır seçeneğini sunar.',
  'help.guide.bucket-country.tip.2':
    'Hedef tarih başına bir kayıt: aynı ülke iki farklı ay için listede olabilir ama aynı ay için iki kez olamaz.',
  // bucket-place
  'help.guide.bucket-place.title': 'Yapılacaklar listesine bir yer ekleyin',
  'help.guide.bucket-place.goal':
    'Hayalini kurduğunuz bir şehri, bir yeri ya da bir adresi koordinatları ve hedef tarihiyle kaydedin.',
  'help.guide.bucket-place.step.1': 'Alttaki panelde Yapılacaklar Listesi sekmesini açın.',
  'help.guide.bucket-place.step.2': 'Yer ekle düğmesine tıklayın.',
  'help.guide.bucket-place.step.3':
    'Adı yazın ve arama düğmesine basın; yerin koordinatları olsun diye eşleşmeyi seçin. Yalnızca bir ad yazıp aramayı atlamak da işe yarar.',
  'help.guide.bucket-place.step.4': 'İsterseniz ay ve yıl seçin ve Ekle düğmesine tıklayın.',
  'help.guide.bucket-place.result':
    'Yer, hedef tarihiyle yapılacaklar listenizin en üstünde durur; yanındaki × onu yeniden kaldırır.',
  'help.guide.bucket-place.tip.1':
    'Koordinatlı bir dilek, kayıtlarınız orada olduğunuzu gösterdiğinde Dawarich’in sizin için sonradan işaretleyebileceği şeydir.',
  // stats
  'help.guide.stats.title': 'İstatistiklerinizi okuyun',
  'help.guide.stats.goal': 'Paneldeki rakamların neyi saydığını ve neyi saymadığını bilin.',
  'help.guide.stats.step.1':
    'Ülkeler, gerçekten gittiğiniz farklı ülkelerin sayısıdır; planlananlar yanında gösterilir, içinde değil. Geziler, Yer ve Günler tüm gezilerinizin toplamlarıdır. Şehirler yerlerinizin adreslerinden çıkarılır, yani bir tahmindir.',
  'help.guide.stats.step.2':
    'Kıtalar kıta başına gidilen ülkeleri gösterir; Antarktika, oraya gittiğinizde sıraya katılır. Sonra seriniz, en az bir geziyle ardışık yıllar, ve bu yıl kaç gezi yaptığınız.',
  'help.guide.stats.result': 'Rakamlar gezilerinizi planladıkça onları izler; burada bakım gerektiren bir şey yok.',
  'help.guide.stats.tip.1':
    'Şehirler adres metninden okunur, aranmaz; bu yüzden “Osteria Francescana, Italy” gibi kısa bir adres ya da bir vilayetle biten bir adres şehir yerine bölge verebilir.',
  'help.guide.stats.tip.2':
    'Elle işaretlenen ülkeler Ülkeler’de ve kıtalarda sayılır ama gezi, yer ya da gün getirmez.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Koleksiyonlar',
  'help.ctx.collections.summary':
    'Collections, herhangi bir gezinin dışındaki yer kitaplığınızdır: bulduğunuz ve saklamak istediğiniz yerlerin adlandırılmış listeleri, her yerin Fikir, Gitmek istiyorum ya da Gidildi durumu vardır. Yerler gezilere ve gezilerden kopyalanır, asla bağlanmaz; bu yüzden bir liste ile bir gezi birbirini asla değiştirmez.',
  'help.ctx.collections.bullet.1':
    'Soldaki liste çubuğu: kendi listeleriniz, sizinle paylaşılanlar, onay bekleyen davetler, sahip olduğunuz her şeyin birleşimi olarak Tüm kayıtlılar ve en üstte Yeni liste ile dosya içe aktarma.',
  'help.ctx.collections.bullet.2':
    'Açık listenin başlık alanı: rengi, kapağı, açıklaması ve bağlantıları, üyeler ve sağda Düzenle, Dışa aktar ve Paylaş eylemleri.',
  'help.ctx.collections.bullet.3':
    'Yerlerin üstündeki filtre satırı: durum, kategori, puan ve sıralama, etiket filtresi, yer eklemek için +, geziden içe aktarma ve toplu eylemler için Seç.',
  'help.ctx.collections.bullet.4':
    'Yer satırları: avatar, ad ve adres, etiketler ve kategori, sağda ise tek tıkla değişen durum rozeti.',
  'help.ctx.collections.bullet.5':
    'Sağdaki harita: koordinatı olan her yer için bir iğne, liste ya da harita geçişi, arama kutusu ve etiket filtresi. Bir iğneye tıklamak o yeri açar.',
  'help.ctx.collections.bullet.6':
    'Ayrıntı paneli: kapak, kategori, etiketler, durum, açıklama ve bağlantılar için bir satıra tıklayın; Düzenle, Geziye kopyala ve Listeden kaldır da oradadır.',
  // create-list
  'help.guide.create-list.title': 'Bir liste oluşturun',
  'help.guide.create-list.goal': 'Rengi ve kapağı olan, yerlere hazır, adlandırılmış yeni bir liste başlatın.',
  'help.guide.create-list.step.1': 'Liste çubuğunun en üstündeki Yeni liste seçeneğine tıklayın.',
  'help.guide.create-list.step.2':
    'Listeye bir ad verin ve bir renk seçin. Kapak resmi, açıklama ve bağlantılar isteğe bağlıdır; bunları daha sonra Düzenle ile ekleyebilirsiniz.',
  'help.guide.create-list.step.3': 'Oluştur seçeneğine tıklayın.',
  'help.guide.create-list.result':
    'Liste boş açılır; doldurmanın iki yolu olarak Yer ekle ve Bir geziden içe aktar sunulur.',
  'help.guide.create-list.tip.1':
    'Kapak, kendi yüklediğiniz bir görsel ya da aynı iletişim kutusundaki Unsplash aramasıyla bulunan bir fotoğraf olabilir.',
  // add-place
  'help.guide.add-place.title': 'Bir yer ekleyin',
  'help.guide.add-place.goal':
    'Bir yer bulun ve onu ad, kategori, durum ve notlarla tek seferde açık listeye kaydedin.',
  'help.guide.add-place.step.1': 'Yerlerin üstündeki filtre satırında + simgesine tıklayın.',
  'help.guide.add-place.step.2': 'Yeri arama alanına yazın ve bir sonuç seçin. Ad, adres ve koordinatlar ondan dolar.',
  'help.guide.add-place.step.3':
    'Durumu ve isterseniz bir kategori, bir açıklama ve bağlantıları ayarlayın, sonra Ekle seçeneğine tıklayın. İletişim kutusu sonraki yer için açık kalır; İptal kapatır.',
  'help.guide.add-place.result': 'Yer listede görünür ve koordinatı varsa haritada bir iğne olarak da görünür.',
  'help.guide.add-place.tip.1':
    'Bir gezinin içinden, yer denetçisindeki ya da yer menüsündeki Koleksiyona kaydet, geziden ayrılmadan bir gezi yerini bir listeye koyar.',
  'help.guide.add-place.tip.2':
    'Liste sizin olmalı ya da editör veya yönetici olduğunuz bir liste olmalıdır; + işareti Tüm kayıtlılar üzerinde ya da yalnızca görüntülediğiniz bir listede yoktur.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Bir geziden yerleri içe aktarın',
  'help.guide.import-from-trip.goal':
    'Bütün bir gezinin yerlerini tek tek kaydetmek yerine hepsini bir kerede listeye getirin.',
  'help.guide.import-from-trip.step.1':
    'Filtre satırındaki bulut oklu içe aktarma düğmesine tıklayın. Boş bir listede aynı eylem Yer ekle seçeneğinin yanındadır.',
  'help.guide.import-from-trip.step.2': 'Gezilerinizden birini seçin.',
  'help.guide.import-from-trip.step.3':
    'İstediğiniz yerleri işaretleyin. Listede zaten bulunan yerler soluk görünür; gezinin hiçbir gününde yer almayanlar baştan seçili gelir. Yalnızca yeniler, zaten sahip olduklarınızı gizler.',
  'help.guide.import-from-trip.step.4':
    'İçe aktar seçeneğine tıklayın. Düğme her zaman kaç yerin eklenmek üzere olduğunu söyler.',
  'help.guide.import-from-trip.result':
    'Yerler adı, adresi, koordinatları, açıklaması ve kategorisiyle listeye kopyalanır. Gezi olduğu gibi kalır.',
  'help.guide.import-from-trip.tip.1':
    'Ada ya da koordinata göre yinelenenler otomatik atlanır, bu yüzden iki kez içe aktarmak zarar vermez.',
  'help.guide.import-from-trip.tip.2':
    'Bir gezinin yer listesinde ise seçim modu, elle seçilmiş bir yer kümesi için bunun yerine Koleksiyona kaydet sunar.',
  // place-status
  'help.guide.place-status.title': 'Bir yerin durumunu ayarlayın',
  'help.guide.place-status.goal': 'Neyin fikir, neyin kısa listede olduğunu ve nereye gittiğinizi takip edin.',
  'help.guide.place-status.step.1':
    'Bir yer satırının sağ ucundaki durum rozetine tıklayın. Fikir, Gitmek istiyorum olur.',
  'help.guide.place-status.step.2':
    'Gidildi için yeniden tıklayın, Fikir ile baştan başlamak için bir kez daha tıklayın.',
  'help.guide.place-status.result':
    'Rozet ve rengi hemen değişir; listenin üstündeki durum filtresi de buna göre sayar.',
  'help.guide.place-status.tip.1':
    'Durum bir Collections özelliğidir: bir yeri geziye kopyalamak onu beraberinde taşımaz.',
  'help.guide.place-status.tip.2':
    'Bir geziden Listeye kaydet, yerin bulunduğu her liste için bir durum rozeti gösterir ve yerler panelinde bir seçim için Ziyaret edildi işaretle eylemi vardır.',
  // place-detail
  'help.guide.place-detail.title': 'Kaydedilmiş bir yeri açın',
  'help.guide.place-detail.goal':
    'Bir yer hakkındaki her şeyi görün ve harekete geçin: düzenleyin, bir geziye kopyalayın, kaldırın.',
  'help.guide.place-detail.step.1':
    'Bir yer satırına tıklayın. Ayrıntı paneli listenin yanında açılır ve harita yere kayar.',
  'help.guide.place-detail.step.2':
    'Altta Düzenle, Geziye kopyala ve Listeden kaldır bulunur; kapaktaki kamera otomatik fotoğrafı kendi fotoğrafınızla değiştirir.',
  'help.guide.place-detail.result':
    'Düzenle, doğrudan panelde ad, kategori, etiketler, adres, koordinatlar, açıklama ve bağlantıların kilidini açar.',
  'help.guide.place-detail.tip.1':
    'Yerin kendi resmi yoksa kapak otomatik getirilir. Kendi yüklemeniz 20 MB’a kadar JPG, PNG, GIF ya da WebP olabilir.',
  'help.guide.place-detail.tip.2':
    'Paylaşılan bir listenin üyeleri burada yıldızlı puan da bırakabilir ve filtre satırındaki puan filtresi ortalamayı kullanır.',
  // labels
  'help.guide.labels.title': 'Yerleri etiketlerle gruplayın',
  'help.guide.labels.goal':
    'Ortak kategorilerin ötesinde, bir listeye semtler ya da günler gibi kendi etiketlerini verin.',
  'help.guide.labels.step.1': 'Filtre satırındaki etiket denetiminden etiket yöneticisini açın.',
  'help.guide.labels.step.2':
    'Bir ad yazın, bir renk seçin ve Etiket ekle seçeneğine tıklayın. Mevcut etiketleri aynı iletişim kutusunda yeniden adlandırın, yeniden renklendirin ya da silin.',
  'help.guide.labels.step.3':
    'Seç seçeneğini açın, yerleri işaretleyin ve seçim çubuğundaki Etiket ata seçeneğine tıklayın. Tek bir yer, ayrıntı panelindeki Düzenle üzerinden de etiket alır.',
  'help.guide.labels.step.4':
    'Listeyi ve haritayı bunlardan herhangi birini taşıyan yerlere daraltmak için filtre satırında bir ya da daha fazla etiket seçin.',
  'help.guide.labels.result':
    'Etiketli yerler etiketlerini satırda gösterir; etiket filtresi görüntüleyiciler dahil her üye için oradadır.',
  'help.guide.labels.tip.1':
    'Etiketler, oluşturuldukları tek listeye aittir. Bir yeri başka bir listeye taşımak onları düşürür.',
  'help.guide.labels.tip.2': 'Etiketleri yönetmek ve atamak, listede düzenleme hakkı gerektirir.',
  // filter-select
  'help.guide.filter-select.title': 'Yerleri filtreleyin ve seçin',
  'help.guide.filter-select.goal': 'Listeyi daraltın ve birçok yer üzerinde tek seferde işlem yapın.',
  'help.guide.filter-select.step.1':
    'Filtre satırındaki açılır menüleri kullanın: durum, kategori, en düşük puan ve sıralama düzeni. Her biri kaç yer bırakacağını gösterir.',
  'help.guide.filter-select.step.2':
    'Seç seçeneğine tıklayın. Her satır bir onay kutusu alır ve bir seçim çubuğu belirir.',
  'help.guide.filter-select.step.3':
    'Yerleri işaretleyin ya da o an filtrelenmiş her şey için Tümünü seç kullanın, sonra Etiket ata, Listeye taşı, Listeye çoğalt, Geziye kopyala ya da Sil seçeneklerinden birini seçin.',
  'help.guide.filter-select.result': 'Eylemler tüm seçime bir kerede uygulanır. Sağdaki × seçim modundan çıkar.',
  'help.guide.filter-select.tip.1':
    'Tümünü seç filtreyi izler; bu yüzden Gitmek istiyorum ile filtreleyip tümünü seçmek, kısa liste üzerinde işlem yapmanın hızlı yoludur.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Yerleri bir geziye kopyalayın',
  'help.guide.copy-to-trip.goal': 'Kaydedilmiş yerleri gezilerinizden birinde duraklara dönüştürün.',
  'help.guide.copy-to-trip.step.1':
    'Seç seçeneğini açıp yerleri işaretleyin ya da bir yeri açıp ayrıntı panelindeki Geziye kopyala seçeneğini kullanın.',
  'help.guide.copy-to-trip.step.2': 'Seçim çubuğundaki Geziye kopyala seçeneğine tıklayın.',
  'help.guide.copy-to-trip.step.3': 'Geziyi seçin. Arama kutusu uzun bir listeyi daraltır.',
  'help.guide.copy-to-trip.result':
    'Yerler o gezinin yer listesine ad, açıklama, kategori, notlar, fiyat, koordinatlar, fotoğraf ve etiketlerle iner. Koleksiyonda hiçbir şey değişmez.',
  'help.guide.copy-to-trip.tip.1':
    'Paylaşılan bir listenin görüntüleyicileri de bunu yapabilir; listeden dışarı kopyalar, listeyi değiştirmez.',
  // share-list
  'help.guide.share-list.title': 'Bir listeyi biriyle paylaşın',
  'help.guide.share-list.goal': 'Bir listeyi bu TREK’teki başka kişilerle birlikte, canlı olarak planlayın.',
  'help.guide.share-list.step.1': 'Listenizin başlık alanındaki Paylaş seçeneğine tıklayın.',
  'help.guide.share-list.step.2': 'Kullanıcıyı ve bir rol seçin: Görüntüleyici, Editör ya da Yönetici.',
  'help.guide.share-list.step.3':
    'Davet gönder seçeneğine tıklayın. Kişi, daveti liste çubuğunda kabul edene kadar bekleyen davet olarak görünür.',
  'help.guide.share-list.result':
    'Kabul edildiğinde liste onlar için Paylaşılan altında görünür ve her değişiklik canlı eşitlenir. Üyeler ve rolleri aynı iletişim kutusunda düzenlenebilir kalır.',
  'help.guide.share-list.tip.1':
    'Görüntüleyiciler bakabilir, puan verebilir ve yerleri kendi gezilerine kopyalayabilir. Editörler yer ve etiket ekler ve düzenler. Yöneticiler ayrıca silebilir.',
  'help.guide.share-list.tip.2':
    'Yalnızca sahip kişi davet eder ve çıkarır; bir üye paylaşılan listeden kendisi ayrılabilir.',
  // export-list
  'help.guide.export-list.title': 'Bir listeyi dosya olarak dışa aktarın',
  'help.guide.export-list.goal': 'Bir listeyi başka bir TREK’teki birine verin ya da bir harita uygulamasına götürün.',
  'help.guide.export-list.step.1': 'Listenin başlık alanındaki Dışa aktar seçeneğine tıklayın.',
  'help.guide.export-list.step.2':
    'Başka bir TREK için etiketler ve durumla TREK listesi seçin ya da OsmAnd, Organic Maps, bir Garmin ve yol noktası okuyan diğer uygulamalar için GPX seçin.',
  'help.guide.export-list.result': 'Dosya indirilir. Paylaşılan bir listenin her üyesi onu dışa aktarabilir.',
  'help.guide.export-list.tip.1':
    'Koordinatı olmayan bir yer GPX yol noktası olamaz; dışarıda bırakılır ve TREK kaç tane olduğunu söyler.',
  'help.guide.export-list.tip.2':
    'Puanlar, üyeler ve yüklenen fotoğraflar bilerek geride kalır; bunlar listeye değil, bu TREK’e aittir.',
  // import-file
  'help.guide.import-file.title': 'Dosyadan bir liste içe aktarın',
  'help.guide.import-file.goal':
    'Bir TREK liste dosyasını ya da bir GPX dosyasını yeni bir liste olarak ya da sahip olduğunuz bir listeye getirin.',
  'help.guide.import-file.step.1':
    'Liste çubuğunda Yeni liste seçeneğinin yanındaki yükleme oklu içe aktarma düğmesine tıklayın.',
  'help.guide.import-file.step.2':
    'Dosyayı seçin. TREK, herhangi bir şey olmadan önce içinde ne olduğunu gösterir: adı, kaç yer ve etiket olduğu.',
  'help.guide.import-file.step.3':
    'Yeni liste seçeneğini koruyup isterseniz adı değiştirin ya da yerleri düzenleyebildiğiniz bir listeye koymak için Bir listeye ekle seçin, sonra İçe aktar seçeneğine tıklayın.',
  'help.guide.import-file.result':
    'İçe aktarılan yerlerle listeye inersiniz. Bir listeye eklemek yalnızca ekler; zaten orada olan yerler durumunu, notlarını ve etiketlerini korur.',
  'help.guide.import-file.tip.1':
    'Bir GPX’ten adlandırılmış her yol noktası bir yer olur; izler çizgidir ve dışarıda bırakılır, önizleme bunun kaç nokta olduğunu söyler.',
  'help.guide.import-file.tip.2':
    'Ne TREK listesi ne de GPX olan bir dosya bir gerekçeyle reddedilir; okunamayan tek bir yer atlanır, dosyanın tamamı değil.',
  // edit-list
  'help.guide.edit-list.title': 'Bir listeyi düzenleyin ya da silin',
  'help.guide.edit-list.goal':
    'Bir listenin adını, rengini, kapağını, açıklamasını ya da bağlantılarını değiştirin ya da listeyi kaldırın.',
  'help.guide.edit-list.step.1': 'Listenin başlık alanındaki Düzenle seçeneğine tıklayın. Onu yalnızca sahip görür.',
  'help.guide.edit-list.step.2':
    'İstediğinizi değiştirin ve Kaydet seçeneğine tıklayın. Sol alttaki Listeyi sil, bir onaydan sonra listeyi tüm yerleriyle birlikte kaldırır.',
  'help.guide.edit-list.result': 'Başlık alanı yeni rengi, kapağı ve açıklamayı hemen alır.',
  'help.guide.edit-list.tip.1': 'Bir listeyi silmek geri alınamaz. Bir kopya saklamak istiyorsanız önce dışa aktarın.',
  // all-saved
  'help.guide.all-saved.title': 'Tüm kitaplığınızda arayın',
  'help.guide.all-saved.goal': 'Sahip olduğunuz her listeye tek seferde bakın.',
  'help.guide.all-saved.step.1':
    'Liste çubuğundaki Tüm kayıtlılar seçeneğine tıklayın. Sahip ya da ortak sahip olduğunuz her listenin yerlerini birleştirir.',
  'help.guide.all-saved.step.2':
    'Arama kutusunu ve filtreleri herhangi bir listedeki gibi kullanın; Seç burada da bir geziye kopyalamak için çalışır.',
  'help.guide.all-saved.result':
    'Ekleme ya da içe aktarma olmadan tüm kayıtlı yerlerinize tek bir bakış; çünkü onları koyacak tek bir listesi yoktur.',
  'help.guide.all-saved.tip.1':
    'Etiketler liste başınadır, bu yüzden etiket filtresi Tüm kayıtlılar üzerinde sunulmaz.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Seyahat',
  'help.ctx.journey.summary':
    'Journey, fotoğrafı öne alan seyahat günlüğünüzdür. Her Journey bir ya da daha fazla geziye bağlıdır ve hikâye, fotoğraf, ruh hali ve hava durumu içeren kayıtlarla gün gün büyür. Bu ekran Journey’lerinizi listeler; yazmak için birini açın.',
  'help.ctx.journey.bullet.1':
    'Üstteki afiş süren Journey’i ya da en son Journey’inizi kayıt, fotoğraf ve yer sayılarıyla gösterir. Yazmaya devam et onu bugünde açar.',
  'help.ctx.journey.bullet.2':
    'Altta her Journey için kapağı, alt başlığı, tarihleri ve sayılarıyla bir kart. Açmak için bir karta tıklayın.',
  'help.ctx.journey.bullet.3': 'Izgaradaki son kart, Yeni Journey oluştur, gezilerinizden bir tane başlatır.',
  // create-journey
  'help.guide.create-journey.title': 'Bir Journey oluşturun',
  'help.guide.create-journey.goal': 'Bir gezi için günlük başlatın; gezinin yerleri öneri olarak zaten bekler.',
  'help.guide.create-journey.step.1': 'Izgaradaki son kart olan Yeni Journey oluştur seçeneğine tıklayın.',
  'help.guide.create-journey.step.2':
    'Bir ad ve isterseniz bir alt başlık verin, ardından ait olduğu gezileri işaretleyin. Sayaç kaç yerin geleceğini söyler.',
  'help.guide.create-journey.step.3': 'Journey Oluştur seçeneğine tıklayın.',
  'help.guide.create-journey.result':
    'Günlük açılır. Bağlı gezilerin her yeri, üzerinde durduğu her gün için bir tane olmak üzere, zaman çizelgesinde yazılmaya hazır bir öneri olarak durur.',
  'help.guide.create-journey.tip.1': 'Daha fazla gezi daha sonra Journey Ayarları içinden bağlanabilir.',
  'help.guide.create-journey.tip.2': 'Gezisiz bir Journey de çalışır; kayıtları o zaman elle eklersiniz.',
  // open-journey
  'help.guide.open-journey.title': 'Bir Journey açın',
  'help.guide.open-journey.goal': 'Bir günlüğe girin ve nerede açılacağını bilin.',
  'help.guide.open-journey.step.1':
    'Bir karta tıklayın. Her kart kapağı, tarihleri ve Journey’in kaç kayıt, fotoğraf ve yer barındırdığını gösterir.',
  'help.guide.open-journey.result':
    'Süren bir Journey bugünde açılır ya da henüz hiçbir şey yazılmamışsa bugünden önceki son kayıtta; bitmiş olan başta açılır.',
  'help.guide.open-journey.tip.1':
    'Journey Ayarları içinde bir kapak seçmediyseniz kapak, Journey’in ilk fotoğrafıdır.',
  // continue-writing
  'help.guide.continue-writing.title': 'Süren Journey’e devam edin',
  'help.guide.continue-writing.goal': 'İçinde olduğunuz Journey’in bugünkü sayfasına doğrudan atlayın.',
  'help.guide.continue-writing.step.1':
    'Üstteki afişte Yazmaya devam et seçeneğine tıklayın. Afiş süren Journey’i, süren yoksa en sonuncusunu gösterir.',
  'help.guide.continue-writing.result':
    'Günlük bugünde açılır ya da henüz hiçbir şey yazılmamışsa bugünden önceki son kayıtta.',
  'help.guide.continue-writing.tip.1':
    'Afiş henüz Journey’i olmayan bir gezi için de öneri sunar; Kapat o öneriyi gizler.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Günlük',
  'help.ctx.journey-detail.summary':
    'Açık bir Journey: solda gün gün zaman çizelgesi, sağda her kayıt ve bağlı gezilerin yerleriyle harita. Günlüğe bir şey ekleyen her şey üsttedir; başlık sayıları, Studio’yu, öneri anahtarını ve Journey Ayarları’nı taşır.',
  'help.ctx.journey-detail.bullet.1':
    'Başlık: kapak, ad ve alt başlık, gün, yer, kayıt ve fotoğraf sayıları ve sağda Studio, öneri anahtarı ve Journey Ayarları.',
  'help.ctx.journey-detail.bullet.2':
    'Araç çubuğu: Zaman çizelgesi ve Galeri sekmeleri, Bu yolculukta ara ve Kayıt Ekle.',
  'help.ctx.journey-detail.bullet.3':
    'Zaman çizelgesi: her gün için o güne kayıt eklemek üzere bir + ile bir bölüm; fotoğraf, ruh hali, hava durumu ve hikâyeli kayıt kartları; gezilerden gelen öneriler daha açık bir stilde ve Bu öneriyi yok say ile.',
  'help.ctx.journey-detail.bullet.4':
    'Harita: kesikli bir çizgiyle tarih sırasında bağlanmış iğneler olarak kayıtlar, gezilerin yerleri ve o gezilere aktarılmış GPX izleri.',
  'help.ctx.journey-detail.bullet.5':
    'Journey Ayarları: kapak, ad ve alt başlık, haritadaki izler, kayıt alanları, yok sayılan öneriler, bağlı geziler, katkıda bulunanlar, herkese açık paylaşım, arşivleme ve silme.',
  'help.ctx.journey-detail.bullet.6':
    'Uzun bir zaman çizelgesinin üzerinde iki yuvarlak düğme yüzer: en üste dön ve son kayda atla.',
  // add-entry
  'help.guide.add-entry.title': 'Bir kayıt yazın',
  'help.guide.add-entry.goal': 'Bir günün hikâyesini başlık, metin, ruh hali ve hava durumuyla ekleyin.',
  'help.guide.add-entry.step.1':
    'Araç çubuğunda Kayıt Ekle seçeneğine ya da o günde başlamak için gün başlığındaki + işaretine tıklayın.',
  'help.guide.add-entry.step.2':
    'O ana bir ad verin ve hikâyeyi yazın. Metnin üstündeki araç çubuğu Markdown ile kalın, italik, başlık, alıntı, bağlantı ve liste ekler.',
  'help.guide.add-entry.step.3':
    'Bir ruh hali ve hava durumu seçin, tarihi kontrol edin ve isterseniz bir konum sabitleyin: bir yer arayın ya da mevcut konumunuzu kullanın.',
  'help.guide.add-entry.step.4': 'Kaydet seçeneğine tıklayın.',
  'help.guide.add-entry.result':
    'Kayıt zaman çizelgesinde kendi gününde ve haritada bir iğne olarak görünür. Sayıları başlıkta güncellenir.',
  'help.guide.add-entry.tip.1': 'Bir öneriye yazmak aynı düzenleyicidir, yer zaten ayarlıdır.',
  'help.guide.add-entry.tip.2':
    'Alttaki etiketler serbest metindir, gizli hazine ya da en iyi yemek gibi, ve arama onları bulur.',
  // entry-photos
  'help.guide.entry-photos.title': 'Bir kayda fotoğraf ve video ekleyin',
  'help.guide.entry-photos.goal': 'Bir güne resimler koyun; ilki kaydın kapağı olur.',
  'help.guide.entry-photos.step.1': 'Kartındaki ⋯ ile bir kaydın menüsünü açın ve Düzenle seçeneğini seçin.',
  'help.guide.entry-photos.step.2':
    'Fotoğraf yükle seçeneğine tıklayın ve dosyaları seçin. Galeriden, Journey’in galerisinde zaten bulunan resimleri alır; External photos o gün için bağlı bir Immich ya da Synology kitaplığında arar.',
  'help.guide.entry-photos.step.3':
    'Kapağı seçmek için bir resmin üzerine gelip 1. yap seçeneğini kullanın, ardından Kaydet seçeneğine tıklayın.',
  'help.guide.entry-photos.result': 'Fotoğraflar kartta ve galeride görünür; ilki her yerde küçük resimdir.',
  'help.guide.entry-photos.tip.1':
    'Videolar bir kayda aynı şekilde eklenir: 500 MB’a kadar mp4, m4v, webm ya da mov, yüklendiği gibi saklanır.',
  'help.guide.entry-photos.tip.2':
    'iPhone’dan gelen HEIC dosyaları yüklenirken JPEG’e dönüştürülür, bu da GPS ve kamera meta verilerini düşürür.',
  // suggestions
  'help.guide.suggestions.title': 'Önerileri kullanın ya da yok sayın',
  'help.guide.suggestions.goal':
    'Gezilerinizin yerlerini kayıtlara dönüştürün ve hakkında yazmayacaklarınızı kaldırın.',
  'help.guide.suggestions.step.1':
    'Öneri, yer adı italik olan daha açık renkli bir karttır. Yer ve gün zaten ayarlı olarak düzenleyiciyi açmak için ona tıklayın.',
  'help.guide.suggestions.step.2':
    'Kullanmayacağınız bir kartta Bu öneriyi yok say seçeneğine tıklayın. Silinmeden zaman çizelgesinden ayrılır ve gezi eşitlemesi onu bir daha sunmaz.',
  'help.guide.suggestions.step.3':
    'Fikir mi değiştirdiniz? Journey Ayarları kaç tanesinin yok sayıldığını gösterir ve Yok sayılan önerileri geri getir hepsini geri getirir.',
  'help.guide.suggestions.result':
    'Zaman çizelgesi yalnızca yazmayı düşündüklerinizi tutar; başlıktaki anahtar siz okurken tüm önerileri bir kerede gizler.',
  'help.guide.suggestions.tip.1': 'İki güne yayılan bir yer her birinde bir öneri verir.',
  'help.guide.suggestions.tip.2': 'Öneriler istatistiklerde asla sayılmaz; yalnızca yazılmış kayıtlar sayılır.',
  // add-on-day
  'help.guide.add-on-day.title': 'Daha önceki bir güne kayıt ekleyin',
  'help.guide.add-on-day.goal': 'Geçmiş bir gün hakkında, tarihi sonradan düzeltmeden yazın.',
  'help.guide.add-on-day.step.1': 'O günün başlığındaki + işaretine tıklayın.',
  'help.guide.add-on-day.step.2': 'Düzenleyici o tarih ayarlı olarak açılır. Her zamanki gibi yazın ve Kaydet.',
  'help.guide.add-on-day.result': 'Kayıt doğrudan doğru güne düşer.',
  'help.guide.add-on-day.tip.1': 'Bir gün içinde, bir kaydın menüsündeki oklar onu öne ya da arkaya taşır.',
  // pros-cons
  'help.guide.pros-cons.title': 'Bir değerlendirme ekleyin',
  'help.guide.pros-cons.goal': 'Bir günü neyin harika olduğu ve neyin olmadığıyla özetleyin.',
  'help.guide.pros-cons.step.1':
    'Düzenleyicide hikâyenin altında Artılar ve Eksiler bölümünü bulun. Artılar ya da Eksiler alanına bir madde yazın ve bir sonraki için Bir tane daha ekle seçeneğini kullanın.',
  'help.guide.pros-cons.step.2': 'Kaydet. Değerlendirme kartta iki kısa liste olarak görünür.',
  'help.guide.pros-cons.result': 'Hikâyenin altında bir bakışta başparmak yukarı ve başparmak aşağı.',
  'help.guide.pros-cons.tip.1':
    'Değerlendirme kullanmayan bir Journey, bölümü Journey Ayarları içindeki Kayıt alanları altından kapatabilir.',
  // search-journey
  'help.guide.search-journey.title': 'Uzun bir günlükte bir şey bulun',
  'help.guide.search-journey.goal': 'Haftalarca kaydırmadan aradığınız kayda ulaşın.',
  'help.guide.search-journey.step.1':
    'Araç çubuğundaki Bu yolculukta ara alanına yazın. Zaman çizelgesi siz yazdıkça başlıklar, hikâyeler, yerler ve etiketler üzerinden süzülür. Aksanlar ve büyük-küçük harf önemli değildir.',
  'help.guide.search-journey.step.2':
    'Başlıktaki öneri anahtarı siz okurken yazılmamış kartları gizler. Zaman çizelgesi uzadığında alt kenarının üstünde iki yuvarlak düğme yüzer: en üste dön ve son kayda atla.',
  'help.guide.search-journey.result':
    'Yalnızca eşleşen kayıtlar kalır; her şeyi yeniden görmek için kutuyu temizleyin.',
  'help.guide.search-journey.tip.1':
    'Süren bir Journey bugünde açılır, bu yüzden güncel sayfa genellikle zaten görünürdedir.',
  'help.guide.search-journey.tip.2': 'Etiketler de sayılır: gizli hazine araması o etiketi taşıyan her kaydı bulur.',
  // gallery-map
  'help.guide.gallery-map.title': 'Galeriye ve haritaya göz atın',
  'help.guide.gallery-map.goal': 'Tüm Journey’i resimler olarak ve haritada yerler olarak görün.',
  'help.guide.gallery-map.step.1':
    'Araç çubuğunda Galeri sekmesine geçin: her kaydın her fotoğrafı, artı doğrudan galeriye yüklenen resimler. Işık kutusu için birine tıklayın.',
  'help.guide.gallery-map.step.2':
    'Sağdaki harita kayıtları tarih sırasında iğneler olarak, bağlı gezilerin yerlerini ve o gezilere aktarılmış her GPX izini planlayıcıdaki rengiyle gösterir.',
  'help.guide.gallery-map.result':
    'Adı için bir izin üzerine gelin. Kayıtlar arasındaki kesikli çizgiyi TREK çizer; iz ise gerçekten kaydettiğiniz rotadır.',
  'help.guide.gallery-map.tip.1': 'İzler bir Journey için Journey Ayarları altından kapatılabilir.',
  'help.guide.gallery-map.tip.2':
    'Konumu olan galeri fotoğrafları, hem Galeri hem Harita paylaşıldığında herkese açık haritada da görünür.',
  // entry-fields
  'help.guide.entry-fields.title': 'Kayıt alanlarını kapatın',
  'help.guide.entry-fields.goal': 'Düzenleyiciyi bu Journey’in kullandıklarıyla sınırlı tutun.',
  'help.guide.entry-fields.step.1': 'Başlıktan Journey Ayarları’nı açın.',
  'help.guide.entry-fields.step.2':
    'Kayıt alanları altında Ruh hâli, Hava durumu ya da Artılar ve eksiler seçeneğini kapatın.',
  'help.guide.entry-fields.result':
    'Düzenleyici artık onları sormaz. Yazılmış hiçbir şey kaybolmaz: bir alanı yeniden açmak saklanan değerleri görünür kılar ve paylaşılan bir günlük aynı alanları gizler.',
  'help.guide.entry-fields.tip.1':
    'Anahtarlar Journey başınadır, bu yüzden bir iş gezisi ile bir tatil farklı olabilir.',
  // link-trip
  'help.guide.link-trip.title': 'Başka bir gezi bağlayın',
  'help.guide.link-trip.goal': 'İkinci bir gezinin yerlerini öneri olarak günlüğe getirin.',
  'help.guide.link-trip.step.1': 'Başlıktan Journey Ayarları’nı açın.',
  'help.guide.link-trip.step.2': 'Bağlı gezilerin altında Seyahat Ekle seçeneğine tıklayın.',
  'help.guide.link-trip.step.3': 'Geziyi seçin.',
  'help.guide.link-trip.result':
    'Yerleri kendi günlerinde öneri olarak zaman çizelgesine gelir ve GPX izleri haritaya katılır.',
  'help.guide.link-trip.tip.1': 'Bağlı bir gezinin yanındaki × bağını yeniden çözer; yazdığınız kayıtlar kalır.',
  'help.guide.link-trip.tip.2': 'Bir günü olan kayıtlar, o günü kaç gezi kapsarsa kapsasın yalnızca bir kez sayılır.',
  // share-public
  'help.guide.share-public.title': 'Journey’i herkese açık paylaşın',
  'help.guide.share-public.goal': 'TREK hesabı olmayan kişilere salt okunur bir bağlantı verin.',
  'help.guide.share-public.step.1': 'Journey Ayarları’nı açın ve Herkese açık paylaşım bölümünü bulun.',
  'help.guide.share-public.step.2': 'Paylaşım bağlantısı oluştur seçeneğine tıklayın.',
  'help.guide.share-public.step.3':
    'Ziyaretçilerin ne göreceğini seçin: Zaman çizelgesi, Galeri ve Harita ayrı anahtarlardır. Kopyala bağlantıyı panonuza koyar.',
  'help.guide.share-public.result':
    'Bağlantıya sahip herkes etkin bölümleri görür, başka hiçbir şeyi değil; Kayıt alanları içinde kapattığınız alanlar orada da gizli kalır.',
  'help.guide.share-public.tip.1':
    'Fotoğraflar herkese açık haritada yalnızca Galeri ve Harita birlikte açıkken görünür; Harita kapalıyken koordinatları sunucudan ayrılmadan önce silinir.',
  'help.guide.share-public.tip.2': 'Paylaşımı bitirmek için bağlantıyı aynı yerden silin.',
  // contributors
  'help.guide.contributors.title': 'Birlikte yazın',
  'help.guide.contributors.goal': 'Bir yol arkadaşının kendi kayıtlarını ve fotoğraflarını eklemesine izin verin.',
  'help.guide.contributors.step.1': 'Journey Ayarları’nı açın ve katkıda bulunanlara kaydırın.',
  'help.guide.contributors.step.2':
    'Katkıda bulunan davet et seçeneğine tıklayın ve kullanıcıyı ada ya da e-postaya göre arayın.',
  'help.guide.contributors.step.3': 'Bir rol seçin ve onaylayın.',
  'help.guide.contributors.result':
    'Journey onların listesinde görünür ve kayıtları adlarını taşır. Bir katkıda bulunanı yanındaki × ile kaldırın.',
  'help.guide.contributors.tip.1':
    'Katkıda bulunanlar bu TREK’teki kişiler içindir. Diğer herkes için herkese açık bağlantı vardır.',
  // studio
  'help.guide.studio.title': 'Journey’i fotoğraf kitabı olarak yerleştirin',
  'help.guide.studio.goal': 'Günlüğü yazdırılabilir sayfalara dönüştürün.',
  'help.guide.studio.step.1': 'Başlıkta Studio seçeneğine tıklayın. Tasarımcı Journey’in üstünde açılır.',
  'help.guide.studio.step.2': 'Üst çubuğun solundaki Journey adı geri dönüş yoludur; sizi bulunduğunuz yere bırakır.',
  'help.guide.studio.result':
    'Solda sayfa rayı, tezgâhta çift sayfa, sağda özellikler. Auto layout kitabı kayıtlarınızdan kurar; Export baskıya hazır bir PDF üretir.',
  'help.guide.studio.tip.1': 'Studio en az 1024 px genişliğinde bir pencere ister ve telefonda sunulmaz.',
  'help.guide.studio.tip.2':
    'Kitap Journey’in erişimini devralır: Journey’i okuyabilen açabilir, düzenleyebilen kaydedebilir.',
  // archive-journey
  'help.guide.archive-journey.title': 'Bir Journey’i arşivleyin ya da silin',
  'help.guide.archive-journey.goal': 'Bitmiş bir Journey’i kapatın ya da birini kalıcı olarak kaldırın.',
  'help.guide.archive-journey.step.1': 'Journey Ayarları’nı açın.',
  'help.guide.archive-journey.step.2':
    "En altta Journey'i Arşivle onu bitirir ve arşivlenmiş olarak işaretler; Journey'i geri aç geri getirir. Sil, onaydan sonra tüm kayıt ve fotoğraflarıyla kaldırır.",
  'help.guide.archive-journey.result':
    'Arşivlenmiş bir Journey okunabilir ve paylaşılabilir kalır; yalnızca artık bugünde açılmaz.',
  'help.guide.archive-journey.tip.1': 'Silme geri alınamaz ve Journey’in bağlı olduğu gezilere dokunmaz.',
  'help.guide.archive-journey.tip.2': 'Kapak, ad ve alt başlık aynı iletişim kutusunda, en üsttedir.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio bir journey’i basılabilir bir fotoğraf kitabı olarak düzenler. Günlüğün üzerinde açılır: solda sayfa şeridi ve içerik, ortada üzerinde çalıştığınız çift sayfa, sağda onun özellikleri. Auto layout kayıtlarınızdan ilk taslağı kurar; sonrası tamamen sizindir: taşıyın, kırpın ve yeniden biçimlendirin, her adım için geri alma ile.',
  'help.ctx.journey-studio.bullet.1':
    'Üst çubuk: Back to the journey, Book view, Undo ve Redo, Page format, Auto layout ve Export. Başlığın yanındaki Kaydedildi işareti kitabın ne zaman kaydedildiğini söyler.',
  'help.ctx.journey-studio.bullet.2':
    'Solda beş bölümlü şerit: Pages, Content (journey’in fotoğrafları ve kayıtları), Elements (metin, şekiller, çizgiler, ızgaralar, çerçeveler, simgeler), Seyahat (journey’den kurulan haritalar, ülkeler, bayraklar ve işaretler) ve Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Çalışma alanı: taşma payı ve güvenli kenar boşluklarıyla geçerli çift sayfa, altında yakınlaştırma çubuğu, Fit to view ve sağda Bu çift sayfayı indir.',
  'help.ctx.journey-studio.bullet.4':
    'Sağda Properties: seçili olanın konumu ve boyutu, kırpma ve odak noktası, doldurma ya da sığdırma, görünüm, köşeler, çerçeve, katman sırası ve kilidi; hiçbir şey seçili değilken sayfa numaraları ve belge.',
  'help.ctx.journey-studio.bullet.5':
    'Kitap ciltli bir kitabın biçimindedir: kapak, tek bir ilk sayfa, çift sayfalar, tek bir son sayfa ve arka kapak. Sayfa numaraları ilk sayfadan başlar ve gösterildiği gibi basılır.',
  'help.ctx.journey-studio.bullet.6':
    'Birden çok kişi aynı anda tasarlayabilir: herkes diğerlerinin imleçlerini adlarıyla görür ve başkasının bu arada değiştirdiği bir sürümü kaydetmek, onun çalışmasının üzerine yazmak yerine bir çakışma olarak geri döner.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Kitabı otomatik kurun',
  'help.guide.studio-auto-layout.goal':
    'Günlüğün kayıtlarından ve fotoğraflarından tek tıkla eksiksiz bir ilk taslak alın.',
  'help.guide.studio-auto-layout.step.1': 'Üst çubukta Auto layout öğesine tıklayın.',
  'help.guide.studio-auto-layout.step.2':
    'Tüm kitap seçeneğini seçin: başlığınızı ve sayfa ayarlarınızı koruyarak her sayfayı değiştirir. Bu sayfa yalnızca ekrandakini yeniden kurar ve bir kayıttan gelen çift sayfada sunulur.',
  'help.guide.studio-auto-layout.step.3':
    'Sayfa şeridine göz atın. Öncekini daha çok beğendiyseniz Undo düzenin tamamını geri alır.',
  'help.guide.studio-auto-layout.result':
    'Kayıt başına bir çift sayfa, sırayla, fotoğrafları, başlığı ve hikâyesi sizin için yerleştirilmiş olarak. Her öğe, siz düzenleyene kadar kaydını izlemeye devam eder.',
  'help.guide.studio-auto-layout.tip.1': 'İki seçenek de sıradan geri alma adımlarıdır, o yüzden rahatça deneyin.',
  'help.guide.studio-auto-layout.tip.2':
    'Auto layout’un bir kayda bağladığı öğe, siz Properties içinde ona dokunana kadar o kaydın düzenlemelerine ayak uydurur; bu, bağlantıyı koparır.',
  // studio-pages
  'help.guide.studio-pages.title': 'Çift sayfa ekleyin, taşıyın ve kaldırın',
  'help.guide.studio-pages.goal': 'Kitabı sayfa sayfa biçimlendirin.',
  'help.guide.studio-pages.step.1':
    'Şeritte Pages bölümünü açın. Küçük resimler kitabın sırasıdır: kapak, ilk sayfa, çift sayfalar, son sayfa, arka kapak.',
  'help.guide.studio-pages.step.2':
    'Alttaki Sayfa ekle yeni bir çift sayfayı son sayfanın önüne koyar; iki küçük resim arasındaki + tam oraya ekler.',
  'help.guide.studio-pages.step.3':
    'İşlemleri için bir küçük resmin üzerine gelin: Öne al, Arkaya al, Sayfayı çoğalt ve Sayfayı sil. O çift sayfayı çalışma alanında açmak için küçük resme tıklayın.',
  'help.guide.studio-pages.result':
    'Kapak, ilk ve son sayfalar ile arka kapak yerinde kalır; yeni çift sayfalar her zaman bunların arasına düşer.',
  'help.guide.studio-pages.tip.1':
    'Üst çubuktaki Book view, kitabın tamamını ciltleneceği biçimde yapraklar olarak gösterir.',
  'help.guide.studio-pages.tip.2':
    'Sayfa numaraları, hiçbir şey seçili değilken Properties içindeki Belge altından açılır.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Bir çift sayfaya düzen uygulayın',
  'help.guide.studio-layouts.goal': 'Bir çift sayfaya hazır bir fotoğraf ve metin çerçevesi yerleşimi verin.',
  'help.guide.studio-layouts.step.1':
    'Şeritte Layouts bölümünü açın. On üç çift sayfa düzeni ve kapak, arka kapak ile tek sayfalar için ayrı bir küme.',
  'help.guide.studio-layouts.step.2':
    'Birine tıklayın. Çalışma alanındaki çift sayfa onun çerçevelerini alır; zaten sahip olduğunuz fotoğraflar ve metin bunların içine dökülür.',
  'help.guide.studio-layouts.result':
    'Boş çerçeveler içerik bekler: Content içinden birine bir fotoğraf sürükleyin ya da Add to this page kullanın.',
  'help.guide.studio-layouts.tip.1': 'Bir düzen, diğerleri gibi bir geri alma adımıdır.',
  // studio-content
  'help.guide.studio-content.title': 'Fotoğrafları ve kayıtları bir sayfaya koyun',
  'help.guide.studio-content.goal': 'Journey’in kendi malzemesini çift sayfaya taşıyın.',
  'help.guide.studio-content.step.1':
    'Şeritte Content bölümünü açın. Photos journey’in her resmini listeler; Entries kayıtları metinleriyle listeler.',
  'help.guide.studio-content.step.2':
    'Bir fotoğrafı çift sayfaya ya da boş bir çerçeveye sürükleyin veya altındaki Add to this page öğesine tıklayın. Fotoğraf yükle, henüz journey’de olmayan resimleri ekler.',
  'help.guide.studio-content.step.3':
    'Bir kaydın altında Title, Story ve Place o metni sayfaya bir metin öğesi olarak koyar; Tarih ve koordinatlar işaret olarak gelir ve kaydın fotoğrafları hemen orada listelenir.',
  'help.guide.studio-content.result':
    'Bırakılan fotoğraf bir fotoğraf öğesi olur; metin siz düzenleyene kadar kaydı izlemeye devam eder.',
  'help.guide.studio-content.tip.1': 'Content’in üstündeki arama kutusu iki listeyi de süzer.',
  'help.guide.studio-content.tip.2':
    'Masaüstünüzden çalışma alanına bir dosya bırakmak onu tek seferde yükler ve yerleştirir.',
  // studio-elements
  'help.guide.studio-elements.title': 'Metin, şekil ve simge ekleyin',
  'help.guide.studio-elements.goal': 'Bir çift sayfayı fotoğraf ve hikâyelerin ötesinde süsleyin.',
  'help.guide.studio-elements.step.1': 'Şeritte Elements bölümünü açın.',
  'help.guide.studio-elements.step.2':
    'Başlık ya da alt yazı için bir metin stiline, bir şekle, bir çizgiye, bir ızgaraya, çerçeve stilli boş bir çerçeveye ya da aranabilir kitaplıktan bir simgeye tıklayın. Her biri çift sayfanın ortasına, taşınmaya hazır olarak düşer.',
  'help.guide.studio-elements.result':
    'İçine yazmak için bir metin öğesine çift tıklayın; yazı tipi, kalınlık, boyut, aralık ve hizalama Properties içindedir.',
  'help.guide.studio-elements.tip.1': 'Çerçeveler boş fotoğraf yuvalarıdır: resmi sonra bırakın.',
  // studio-travel
  'help.guide.studio-travel.title': 'Harita, bayrak ve rakamlar ekleyin',
  'help.guide.studio-travel.goal': 'Journey’in kendisini sayfadaki rakamlara dönüştürün.',
  'help.guide.studio-travel.step.1': 'Şeritte Seyahat bölümünü açın.',
  'help.guide.studio-travel.step.2':
    'Ne ekleyeceğinizi seçin: kayıtların rota haritası, ülke sınırları, ülke listesi ya da ızgarası, bayraklar, tarih, gün ya da mesafe işareti veya tüm gezinin özeti. Her biri journey’in verisinden kurulur ve onunla yenilenir.',
  'help.guide.studio-travel.result': 'Öğe çift sayfada belirir; Properties stilini, haritanın ise alanını ayarlar.',
  'help.guide.studio-travel.tip.1':
    'İşaretler çift sayfanın geldiği kaydı izler, bu yüzden otomatik kurulmuş bir çift sayfadaki tarih işareti o günü zaten gösterir.',
  // studio-properties
  'help.guide.studio-properties.title': 'Seçtiğinizi düzenleyin',
  'help.guide.studio-properties.goal': 'Denetleyici ile bir öğeyi taşıyın, kırpın, biçimlendirin ve katmanlayın.',
  'help.guide.studio-properties.step.1':
    'Çift sayfada bir öğeye tıklayın. Boyut ve döndürme için tutamaçlar belirir; taşımak için sürükleyin.',
  'help.guide.studio-properties.step.2':
    'Sağdaki Properties seçimi izler: konum ve boyut, çerçevede neyin kalacağına karar veren odak noktasıyla Crop, Dolgu ya da sığdırma, Look filtreleri, Corner yarıçapı, Çerçeve, katman sırası ve Lock.',
  'help.guide.studio-properties.step.3':
    'Çoğalt ve Delete denetleyicinin üstündedir; üst çubuktaki Undo bunların hepsini geri alır.',
  'help.guide.studio-properties.result':
    'Kilitli bir öğe artık sayfada tutulamaz, bu da siz çevresinde çalışırken bitmiş bir düzeni güvende tutar.',
  'help.guide.studio-properties.tip.1':
    'Shift ile tıklamak birden çok öğe seçer; denetleyici o zaman hepsini birlikte düzenler.',
  'help.guide.studio-properties.tip.2':
    'Auto layout’un yerleştirdiği bir öğeyi düzenlemek kayıtla bağlantısını koparır; o kaydın sonraki değişikliklerini izlemeyi bırakır.',
  // studio-format
  'help.guide.studio-format.title': 'Sayfa biçimini seçin',
  'help.guide.studio-format.goal': 'Düzen ona bağlı hale gelmeden önce kitabın basılacağı boyutu ayarlayın.',
  'help.guide.studio-format.step.1': 'Üst çubukta Page format öğesine tıklayın.',
  'help.guide.studio-format.step.2':
    'Square 21 × 21 cm, Square 30 × 30 cm, A4 ya da A5 landscape veya portrait seçin ya da milimetre cinsinden özel bir genişlik ve yükseklik girin. Taşma ve Güvenli bunların altındadır.',
  'help.guide.studio-format.result':
    'Her çift sayfa o boyutta çizilir, varsayılan olarak 3 mm taşma payı ve 5 mm güvenli kenar boşluğu ile.',
  'help.guide.studio-format.tip.1':
    'Önce biçimi değiştirin, sonra Auto layout çalıştırın; düzen bulduğu boyut için kurulur.',
  'help.guide.studio-format.tip.2': 'Matbaanıza taşma payı ve güvenli alan değerlerini sorun ve onları girin.',
  // studio-export
  'help.guide.studio-export.title': 'Kitabı PDF olarak dışa aktarın',
  'help.guide.studio-export.goal': 'Baskıya hazır bir dosya ya da ekranda okunacak bir dosya alın.',
  'help.guide.studio-export.step.1': 'Üst çubukta Export öğesine tıklayın.',
  'help.guide.studio-export.step.2':
    'Tek sayfa seçin, okuma sırasında yaprak başına bir sayfa, ki matbaanın istediği budur, ya da Çift sayfa, kitabın açıldığı gibi her seferinde iki sayfa. Kesim işaretleri her kenara taşma payını ekler ve nereden kesileceğini işaretler.',
  'help.guide.studio-export.step.3':
    'Yazdırma görünümü öğesine tıklayın. Tarayıcınız sayfaları açar ve PDF olarak kaydet onları dosyaya dönüştürür.',
  'help.guide.studio-export.result':
    'İletişim kutusunun duyurduğu kadar yapraklı, ayarladığınız sayfa biçiminde bir PDF.',
  'help.guide.studio-export.tip.1': 'PDF oluşturmak, Studio’nun kendisi gibi yalnızca masaüstünde çalışır.',
  'help.guide.studio-export.tip.2':
    'Prova için Çift sayfa seçeneğini kesim işaretleri olmadan, matbaa için Tek sayfa seçeneğini kesim işaretleriyle dışa aktarın.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Bir çift sayfayı başka bir kitapta yeniden kullanın',
  'help.guide.studio-spread-file.goal': 'Beğendiğiniz bir tasarımı bir journey’in kitabından diğerine taşıyın.',
  'help.guide.studio-spread-file.step.1':
    'Çift sayfa çalışma alanındayken yakınlaştırma çubuğunun sağ ucundaki Bu çift sayfayı indir öğesine tıklayın. Dosya tasarımı içerir, fotoğrafları değil.',
  'help.guide.studio-spread-file.step.2':
    'Diğer kitapta Pages bölümünü açın, Sayfa ekle yanındaki İçe aktar öğesine tıklayın ve dosyayı seçin.',
  'help.guide.studio-spread-file.result':
    'Çift sayfa çerçeveleri ve metin stilleriyle gelir; yeni journey’in fotoğraflarını çerçevelere bırakın.',
  'help.guide.studio-spread-file.tip.1': 'Çift sayfa tasarımı olmayan bir dosya, nedeni belirtilerek reddedilir.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Ayarlar',
  'help.ctx.settings.summary':
    'Kişisel ayarlarınız, soldaki kenar çubuğunda her konu için bir sekme. Anahtarların çoğu çevirdiğiniz anda uygulanır; altında Kaydet düğmesi olan bir form onu bekler. Buradaki hiçbir şey başkasının TREK’ini değiştirmez.',
  'help.ctx.settings.bullet.1':
    'Soldaki kenar çubuğu: Görünüm, Appearance, Harita, Bildirimler, Entegrasyonlar, Çevrimdışı ve Hesap. Eklentiler bir tane kurulduğunda, Hakkında ise kendi barındırdığınız bir TREK’te görünür.',
  'help.ctx.settings.bullet.2':
    'Görünüm dil, birimler, para birimi ve uygulamanın neyle açılacağıdır; Appearance tema, renkler, metin boyutu ve pano bileşenleridir.',
  'help.ctx.settings.bullet.3':
    'Harita çizim motorunu ve stilini seçer; Bildirimler size ulaşan kanalları; Entegrasyonlar fotoğraf kitaplıklarını, API anahtarlarını ve MCP’yi; Çevrimdışı uygulamanın bu cihazda tuttuklarını.',
  'help.ctx.settings.bullet.4':
    'Hesap profilinizi, şifrenizi, iki faktörlü kimlik doğrulamayı, passkey’leri ve hesabınızın silinmesini barındırır.',
  'help.ctx.settings-display.title': 'Görünüm',
  'help.ctx.settings-display.summary':
    'Dil, birimler ve para birimi, haritanın ve rezervasyonların nasıl davrandığı ve TREK’in neyle açılacağı. Buradaki her değişiklik hemen uygulanır.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: arayüz dili, saat biçimi, görüntüleme para birimi ile mesafe ve sıcaklık birimleri.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: rezervasyon rotaları her zaman haritada, Yerleri keşfet hapı, konaklamadan rota optimizasyonu, bulanık rezervasyon kodları ve etiketli rezervasyon rotaları.',
  'help.ctx.settings-display.bullet.3':
    'Başlangıç: TREK’in panoda mı yoksa aktif gezide mi açılacağı ve bir gezinin hangi sekmesinin önce geleceği.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'TREK’in bu hesapta nasıl göründüğü: açık ya da koyu, vurgu rengi, cam ve hareket, metin boyutu ve panonun hangi bileşenleri gösterdiği. Her şey canlı olarak, oturum açtığınız her cihazda uygulanır.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Açık, Koyu ya da Otomatik ve size ait bir Custom accent ile Color scheme.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density ve Text size, kademe başına gelişmiş boyutlarla.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: bileşen başına bir anahtar, Desktop ve Mobile için ayrı ayrı.',
  'help.ctx.settings-appearance.bullet.4': 'Alttaki Reset to defaults her şeyi geri alır.',
  'help.ctx.settings-map.title': 'Harita',
  'help.ctx.settings-map.summary':
    'Haritaları hangi motorun hangi stilde çizdiği. Leaflet klasik raster haritadır, MapLibre hiçbir anahtar olmadan vektör kutucukları çizer, Mapbox kendi anahtarınızla 3B binalar ve arazi ekler.',
  'help.ctx.settings-map.bullet.1':
    'Harita Sağlayıcısı: Leaflet, MapLibre ya da Mapbox, her biri neye ihtiyaç duyduğunu söyleyen bir satırla.',
  'help.ctx.settings-map.bullet.2':
    'Harita Stili ve Harita Şablonu: kutucukların görünümü, artı bir sağlayıcının istediği anahtar ya da token.',
  'help.ctx.settings-map.bullet.3':
    'Kenar yumuşatma ve küre projeksiyonu için Yüksek Kalite Modu; Haritayı Kaydet seçimi yazar.',
  'help.ctx.settings-notifications.title': 'Bildirimler',
  'help.ctx.settings-notifications.summary':
    'TREK’in size uygulama dışında nereden ulaştığı: bir ntfy konusu, bir web kancası ya da bir eklentinin sağladığı kanal. Kanalların altında, olay başına bir satır neyin nereye gideceğine karar verir.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: konu, isteğe bağlı kendi sunucunuz ve isteğe bağlı bir erişim anahtarı, hemen bir tane göndermek için Dene ile.',
  'help.ctx.settings-notifications.bullet.2': 'Web kancası: her olayı JSON olarak alan tek bir URL, Dene ile.',
  'help.ctx.settings-notifications.bullet.3':
    'Tercih satırları: olay başına hangi kanalın açık olduğu. Eklenti kanalları kurulana kadar Yapılandır gösterir.',
  'help.ctx.settings-integrations.title': 'Entegrasyonlar',
  'help.ctx.settings-integrations.summary':
    'TREK’e dışarıdan bağlanan her şey: günlük için fotoğraf kitaplıkları, betikler için API anahtarları ve yapay zekâ asistanları için jetonları ve OAuth istemcileriyle MCP uç noktası.',
  'help.ctx.settings-integrations.bullet.1':
    'Fotoğraf sağlayıcıları: Immich ve Synology Photos, her biri URL’si ve anahtarıyla, Bağlantıyı test et ve Kaydet.',
  'help.ctx.settings-integrations.bullet.2':
    'API Anahtarları: TREK API’sini sizin adınıza çağıran betikler ve diğer araçlar için kişisel anahtarlar.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP Yapılandırması: uç nokta, kopyalamak için hazır bir istemci yapılandırması ve API jetonları.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1 İstemcileri: TREK üzerinden oturum açan uygulamalar, yönlendirme URI’leri, izin verilen kapsamlar, makine istemcileri ve aktif oturumlarla.',
  'help.ctx.settings-offline.title': 'Çevrimdışı',
  'help.ctx.settings-offline.summary':
    'Bir gezinin bağlantı olmadan da açılması için TREK’in bu cihazda tuttukları ve çevrimdışı yapılan bir değişiklik başka yerde yapılanla çakıştığında ne olacağı.',
  'help.ctx.settings-offline.bullet.1':
    'Çevrimdışı mod: Çevrimdışı modu zorla, test için ya da kotalı bir bağlantıda uygulamayı ağ yokmuş gibi davrandırır.',
  'help.ctx.settings-offline.bullet.2':
    'Çevrimdışı için hazırlan: Çevrimdışı kullanım için indir gezilerinizi ve harita kutucuklarını şimdi getirir.',
  'help.ctx.settings-offline.bullet.3':
    'Çevrimdışı olarak ne saklanacak: harita kutucukları açık ya da kapalı ve gezi başına bir anahtar.',
  'help.ctx.settings-offline.bullet.4':
    'Senkronizasyon çakışmaları ve Çevrimdışı önbellek: çakışma stratejisi, bekleyen ve başarısız sayıları, Şimdi yeniden senkronize et ve Önbelleği temizle.',
  'help.ctx.settings-account.title': 'Hesap',
  'help.ctx.settings-account.summary':
    'Bu TREK’te kim olduğunuz ve nasıl oturum açtığınız: profil ve avatar, şifre, iki faktörlü kimlik doğrulama, passkey’ler ve en altta hesabın silinmesi.',
  'help.ctx.settings-account.bullet.1': 'Profil: kullanıcı adı, e-posta ve avatar, Profili Kaydet ile kaydedilir.',
  'help.ctx.settings-account.bullet.2': 'Şifre Değiştir: mevcut şifre, yeni şifre iki kez, Şifreyi güncelle.',
  'help.ctx.settings-account.bullet.3':
    'Bir kimlik doğrulayıcı uygulaması ve yedekleme kodlarıyla İki faktörlü kimlik doğrulama (2FA); şifresiz oturum açmak için Passkey’ler.',
  'help.ctx.settings-account.bullet.4': 'En altta, bir onayın arkasında Hesabı sil. Son yönetici kendini silemez.',
  // language-region
  'help.guide.language-region.title': 'Dil, birimler ve para birimini ayarlayın',
  'help.guide.language-region.goal': 'TREK sizin dilinizi konuşsun ve sizin saydığınız gibi saysın.',
  'help.guide.language-region.step.1':
    'Language & region altında arayüz dilini seçin. TREK oturum açtığınız her cihazda hemen geçiş yapar.',
  'help.guide.language-region.step.2':
    'Altında saat biçimini, görüntüleme para birimini ile mesafe ve sıcaklık birimlerini seçin.',
  'help.guide.language-region.result':
    'Tarihler, mesafeler ve para beklediğiniz gibi okunur; bir gezinin kendi para birimi dönüştürülen tutarların yanında görünmeye devam eder.',
  'help.guide.language-region.tip.1':
    'Görüntüleme para birimi geziler arası toplamlar içindir; her gezi ona verdiğiniz para birimini korur.',
  'help.guide.language-region.tip.2': 'Dil, Vacay’deki ve günlükteki gün ve ay adlarını da belirler.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Haritanın ve rezervasyonların davranışını ayarlayın',
  'help.guide.travel-map-prefs.goal': 'Gezi haritasının varsayılan olarak ne göstereceğine karar verin.',
  'help.guide.travel-map-prefs.step.1':
    'Travel & map altında Rezervasyon rotalarını her zaman göster, günleri açık olmasa bile uçuşları ve trenleri haritada tutar; Haritada yerleri keşfet yer bulma hapını gösterir; Rotayı konaklamadan optimize et rotayı uyuduğunuz yerden başlatır.',
  'help.guide.travel-map-prefs.step.2':
    'Rezervasyon Kodlarını Bulanıklaştır, üzerine gelene kadar onay numaralarını gizler; Rezervasyon rota etiketleri rezervasyon adını rotası boyunca yazar.',
  'help.guide.travel-map-prefs.result': 'Gezi haritası, siz geri çevirene kadar bunlara her gezide uyar.',
  'help.guide.travel-map-prefs.tip.1':
    'Bunlar gezi başına değil, hesap başınadır. Paylaşılan bir gezinin üyeleri her biri kendi seçimlerini görür.',
  // startup
  'help.guide.startup.title': 'TREK’in neyle açılacağını seçin',
  'help.guide.startup.goal': 'Her seferinde panoya değil, en çok çalıştığınız yere inin.',
  'help.guide.startup.step.1':
    'Başlangıç altında Başlangıç sayfası seçeneğini Pano ya da Aktif seyahat olarak ayarlayın.',
  'help.guide.startup.step.2': 'Başlangıç sekmesi, bir gezi açtığınızda hangi sekmesinin önce geleceğini seçer.',
  'help.guide.startup.result': 'Bir sonraki oturum açma ve logoya bir sonraki dokunuş doğrudan oraya gider.',
  'help.guide.startup.tip.1': 'Aktif seyahat bugün süren gezi, hiçbiri sürmüyorsa bir sonraki demektir.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Temayı ve vurgu rengini ayarlayın',
  'help.guide.theme-scheme.goal': 'TREK’i açık, koyu ya da cihazınızı izler yapın, sevdiğiniz renkte.',
  'help.guide.theme-scheme.step.1': 'Theme altında Açık, Koyu ya da Otomatik seçin. Otomatik cihazınızı izler.',
  'help.guide.theme-scheme.step.2':
    'Bir Color scheme seçin: Default, High contrast, Indigo, Teal, Rose, Amber, Violet ya da Custom.',
  'help.guide.theme-scheme.step.3':
    'Custom ile hazır seçeneklerden bir vurgu seçin ya da kendinizinkini girin. Yanındaki kontrast denetimi metnin üzerinde okunur kalıp kalmayacağını söyler.',
  'help.guide.theme-scheme.result':
    'Düğmeler, bağlantılar ve vurgular oturum açtığınız her cihazda, her yerde bu rengi alır.',
  'help.guide.theme-scheme.tip.1':
    'Gezinti çubuğunda da hızlı bir açık ya da koyu anahtarı vardır; aynı temayı ayarlar.',
  'help.guide.theme-scheme.tip.2': 'High contrast, varsayılan fazla yumuşak okunduğunda seçilecek şemadır.',
  // readability
  'help.guide.readability.title': 'Okunabilirliği ve metin boyutunu ayarlayın',
  'help.guide.readability.goal': 'Daha az cam, daha az hareket, daha fazla yer ya da daha büyük yazı.',
  'help.guide.readability.step.1':
    'Readability altında Transparency cam panelleri düz yüzeylere çevirir, Reduce motion animasyonları en aza indirir ve Density Comfortable ya da Compact seçer.',
  'help.guide.readability.step.2':
    'Text size, Everything seçeneğiyle hepsini bir kerede ölçekler; Advanced text sizes başlıkların, alt başlıkların, gövde metninin ve açıklamaların farklı olmasına izin verir.',
  'help.guide.readability.result': 'Harita panelleri ve günlük dahil tüm uygulama hemen uyar.',
  'help.guide.readability.tip.1': 'Reduce motion, ona dokunmadığınızda sisteminizin ayarını da izler.',
  'help.guide.readability.tip.2':
    'Metin boyutu tipografi kademeleri üzerinden uygulanır, bu yüzden hiçbir şey kesilmez; artık sığmayan bir boyut satır kaydırır.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Pano bileşenlerini seçin',
  'help.guide.dashboard-widgets.goal':
    'Yalnızca kullandığınız bileşenleri gösterin, masaüstünde ve telefonda ayrı ayrı.',
  'help.guide.dashboard-widgets.step.1':
    'Dashboard widgets altında her bileşeni Desktop ve Mobile için açın ya da kapatın: sağ kenar çubuğunun tamamı, para birimi, koleksiyonlar, saat dilimleri, yaklaşan rezervasyonlar, Atlas ülkeleri ve seyahat rakamları.',
  'help.guide.dashboard-widgets.step.2': 'Alttaki Reset to defaults sekmenin tamamını ilk haline döndürür.',
  'help.guide.dashboard-widgets.result': 'Pano hemen yeniden düzenlenir; sağ kenar çubuğu kapalıyken ortalanır.',
  'help.guide.dashboard-widgets.tip.1':
    'Bir eklentinin bileşenleri yalnızca yönetici o eklentiyi açık tuttuğu sürece görünür.',
  'help.guide.dashboard-widgets.tip.2':
    'Panonun kendisi ızgara ya da liste görünümünüzü ve sıralama düzenini cihaz başına hatırlar.',
  // map-provider
  'help.guide.map-provider.title': 'Harita motorunu ve stilini seçin',
  'help.guide.map-provider.goal': 'Klasik harita, vektör kutucukları ve Mapbox’ın 3B haritası arasında geçiş yapın.',
  'help.guide.map-provider.step.1':
    'Harita Sağlayıcısı altında herhangi bir raster kutucuklu klasik 2B harita için Leaflet, anahtarsız OpenFreeMap vektör kutucukları için MapLibre ya da 3B binalı ve arazili vektör kutucukları için Mapbox seçin.',
  'help.guide.map-provider.step.2':
    'Görünüm için bir Harita Stili ya da Harita Şablonu seçin. Mapbox bir Mapbox Erişim Anahtarı, bazı raster stiller bir CARTO API anahtarı ister; alanın yanındaki bağlantı bir tane alacağınız yere götürür.',
  'help.guide.map-provider.step.3':
    'Yüksek Kalite Modu kenar yumuşatma ve küre projeksiyonu ekler. Haritayı Kaydet seçeneğine tıklayın.',
  'help.guide.map-provider.result':
    'TREK’teki her harita, geziler, Atlas, Koleksiyonlar ve günlük, seçtiğiniz motor tarafından çizilir.',
  'help.guide.map-provider.tip.1': 'Anahtar olmadan Mapbox hiçbir şey göstermek yerine varsayılan haritaya döner.',
  'help.guide.map-provider.tip.2':
    'Çevrimdışı sakladığınız harita kutucukları, onları indirdiğinizde etkin olan sağlayıcıdan gelir.',
  // notification-channels
  'help.guide.notification-channels.title': 'Bildirimlerin size nereden ulaşacağını ayarlayın',
  'help.guide.notification-channels.goal':
    'Gezi hatırlatmalarını ve iş birliği olaylarını telefonunuza ya da başka bir araca alın.',
  'help.guide.notification-channels.step.1':
    "Bildirimler altında bir Ntfy Konusu doldurun; kendi sunucunuz varsa Ntfy sunucu URL'si ve bir Erişim anahtarı ekleyin. Dene hemen bir mesaj gönderir.",
  'help.guide.notification-channels.step.2':
    "Ya da her olayı JSON olarak alan bir Web kancası URL'si verin ve aynı şekilde Dene ile deneyin.",
  'help.guide.notification-channels.step.3':
    'Alttaki satırlarda her olayı kanal başına açın ya da kapatın. Bir eklenti kanalı, eklentinin ayarlarında kurulana kadar Yapılandır der; Test gönder bir tane dener.',
  'help.guide.notification-channels.result':
    'Olaylar açık olan kanallardan gider. Gezinti çubuğundaki zil her durumda onları uygulamada göstermeye devam eder.',
  'help.guide.notification-channels.tip.1':
    'Gezi başına tercihler gezinin kendisinde, bildirim ayarlarının altında durur.',
  'help.guide.notification-channels.tip.2':
    'Yönetici herkes için varsayılan bir ntfy sunucusunu önceden doldurabilir; konunuzu yine siz seçersiniz.',
  // photo-providers
  'help.guide.photo-providers.title': 'Bir fotoğraf kitaplığı bağlayın',
  'help.guide.photo-providers.goal': 'Günlük günün fotoğraflarını Immich ya da Synology Photos’tan çeksin.',
  'help.guide.photo-providers.step.1':
    'Entegrasyonlar altında sağlayıcının bölümünü bulun ve URL’sini ile API anahtarını girin. Immich ayrıca Journey yüklemelerini kitaplığa geri yansıtmayı da önerir.',
  'help.guide.photo-providers.step.2': 'Bağlantıyı test et seçeneğine, sonra Kaydet seçeneğine tıklayın.',
  'help.guide.photo-providers.result':
    'Kayıt düzenleyicisinin External photos sekmesi bağlı kitaplıkta kaydın gününü arar, önce kaydın konumuna en yakın olanlar.',
  'help.guide.photo-providers.tip.1': 'Bağlantı sizindir: bir Journey’in diğer üyeleri kendi kitaplıklarını bağlar.',
  'help.guide.photo-providers.tip.2':
    'Fotoğraflarında GPS verisi olmayan bir sağlayıcı da çalışır; liste o zaman zaman sırasındadır.',
  // api-keys
  'help.guide.api-keys.title': 'Bir API anahtarı oluşturun',
  'help.guide.api-keys.goal': 'Bir betik ya da başka bir araç TREK API’sini sizin olarak çağırsın.',
  'help.guide.api-keys.step.1':
    'API Anahtarları altında Anahtar oluştur seçeneğine tıklayın ve ona nerede kullanılacağını söyleyen bir ad verin.',
  'help.guide.api-keys.step.2':
    'Anahtarı iletişim kutusundan kopyalayın: bir kez gösterilir. Araç artık ihtiyaç duymadığında anahtarı listeden silin.',
  'help.guide.api-keys.result':
    'O anahtarla yapılan istekler sizin izinlerinizle hareket eder; liste her anahtarın ne zaman oluşturulduğunu ve en son ne zaman kullanıldığını gösterir.',
  'help.guide.api-keys.tip.1': 'Araç başına bir anahtar iptali zahmetsiz kılar.',
  'help.guide.api-keys.tip.2':
    'Bir yapay zekâ asistanı için bunun yerine OAuth ile MCP kullanın; API anahtarları düz HTTP istemcileri içindir.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'MCP üzerinden bir yapay zekâ asistanı bağlayın',
  'help.guide.mcp-oauth.goal': 'Claude’a, bir IDE’ye ya da başka bir MCP istemcisine gezilerinize erişim verin.',
  'help.guide.mcp-oauth.step.1':
    'MCP Yapılandırması altında MCP Uç Noktası seçeneğini, ya da JSON parçası alan bir istemci için İstemci Yapılandırması bloğunun tamamını kopyalayın.',
  'help.guide.mcp-oauth.step.2':
    "Tarayıcı üzerinden oturum açan istemciler OAuth 2.1 kullanır: OAuth 2.1 İstemcileri altında Yeni Müşteri, URI'leri Yönlendir, İzin Verilen Kapsamlar ve tarayıcısız bir sunucu için Makine istemcisi ile.",
  'help.guide.mcp-oauth.step.3':
    'Gizli Anahtarı Döndür ve İstemciyi Sil her istemcide durur; Aktif OAuth Oturumları oturum açmış olanları listeler ve iptal etmenize izin verir. Yeni Jeton Oluştur ile API Belirteçleri daha eski giriş yoludur.',
  'help.guide.mcp-oauth.result':
    'İstemci kapsamlarının izin verdiğini sizin olarak okuyabilir ve değiştirebilir, her eylem sizin adınızın altında görünür.',
  'help.guide.mcp-oauth.tip.1':
    'Kapsamlar güvenlik ağıdır: bir istemciye daha fazlasına ihtiyaç duyana kadar yalnızca okuma kapsamını verin.',
  'help.guide.mcp-oauth.tip.2': 'Yönetici MCP’yi tüm örnek için kapatabilir; o zaman bu bölüm yoktur.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Gezileri çevrimdışına alın',
  'help.guide.offline-prepare.goal': 'Bağlantı kopmadan önce gezileriniz ve haritaları bu cihazda olsun.',
  'help.guide.offline-prepare.step.1':
    'Çevrimdışı olarak ne saklanacak altında Harita kutucuklarını çevrimdışı sakla seçeneğini açık tutun ve bu cihazda istediğiniz gezileri açın.',
  'help.guide.offline-prepare.step.2':
    'Çevrimdışı için hazırlan altındaki Çevrimdışı kullanım için indir seçeneğine tıklayın. Gezileri ve yerlerinin çevresindeki kutucukları getirir.',
  'help.guide.offline-prepare.step.3':
    'Çevrimdışı mod altındaki Çevrimdışı modu zorla, yola çıkmadan önce her şeyin yerinde olduğunu denetlemenizi sağlar.',
  'help.guide.offline-prepare.result':
    'Geziler bağlantı olmadan açılır; yaptığınız değişiklikler bir kuyrukta bekler ve yeniden bağlanınca gider.',
  'help.guide.offline-prepare.tip.1':
    'En çok yeri kutucuklar kaplar: Çevrimdışı önbellek bölümü gezi başına neyin saklandığını gösterir.',
  'help.guide.offline-prepare.tip.2': 'En sorunsuz çevrimdışı başlangıç için TREK’i tarayıcıdan uygulama olarak kurun.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Senkronizasyon çakışmasında neyin kazanacağına karar verin',
  'help.guide.offline-conflicts.goal':
    'TREK’in çevrimdışı yapılan bir değişikliği başka yerde yapılana karşı nasıl çözeceğini seçin.',
  'help.guide.offline-conflicts.step.1':
    'Senkronizasyon çakışmaları altında Her seferinde bana sor, Her zaman benim sürümümü sakla ya da Her zaman sunucu sürümünü sakla seçin.',
  'help.guide.offline-conflicts.step.2':
    'Çevrimdışı önbellek gezileri, bekleyen ve başarısız değişiklikleri ve çakışmaları gösterir; Şimdi yeniden senkronize et kuyruğu gönderir, Önbelleği temizle cihazı boşaltır.',
  'help.guide.offline-conflicts.result':
    'Sor ile bir çakışma iki sürümü de gösterir ve seçmenize izin verir; diğer ikisinde sessizce çözülür.',
  'help.guide.offline-conflicts.tip.1':
    'Önbelleği temizle yalnızca bu cihazdaki kopyayı kaldırır; sunucudaki hiçbir şeye dokunulmaz.',
  // profile
  'help.guide.profile.title': 'Profilinizi değiştirin',
  'help.guide.profile.goal': 'Adınızı, e-postanızı ve resminizi güncelleyin.',
  'help.guide.profile.step.1':
    'Hesap altında Kullanıcı adı ve E-posta alanlarını düzenleyin. Avatar kendi yüklemenizi alır; baş harflere dönmek için kaldırın.',
  'help.guide.profile.step.2': 'Profili Kaydet seçeneğine tıklayın.',
  'help.guide.profile.result': 'Adınız ve resminiz paylaştığınız geziler dahil her yerde bir kerede güncellenir.',
  'help.guide.profile.tip.1':
    'OIDC üzerinden oturum açan bir hesap bunu burada gösterir; e-posta o zaman sağlayıcıdan gelir.',
  // password
  'help.guide.password.title': 'Şifrenizi değiştirin',
  'help.guide.password.goal': 'Yeni bir şifre belirleyin.',
  'help.guide.password.step.1': 'Şifre Değiştir altında mevcut şifrenizi, sonra yenisini iki kez girin.',
  'help.guide.password.step.2': 'Şifreyi güncelle seçeneğine tıklayın.',
  'help.guide.password.result': 'Yeni şifre bir sonraki oturum açmada geçerlidir; diğer oturumlar açık kalır.',
  'help.guide.password.tip.1': 'OIDC üzerinden oturum açan bir hesabın değiştirecek bir TREK şifresi yoktur.',
  // mfa
  'help.guide.mfa.title': 'İki faktörlü kimlik doğrulamayı açın',
  'help.guide.mfa.goal': 'Hesabı bir kimlik doğrulayıcı uygulamasından gelen kodla koruyun.',
  'help.guide.mfa.step.1':
    'İki faktörlü kimlik doğrulama (2FA) altında Kimlik doğrulayıcıyı ayarla seçeneğine tıklayın.',
  'help.guide.mfa.step.2':
    "QR kodunu uygulamanızla tarayın ya da gizli anahtarı elle girin, sonra gösterdiği altı haneli kodu yazın ve 2FA'yı Etkinleştir seçeneğine tıklayın.",
  'help.guide.mfa.step.3':
    'Yedekleme kodlarını saklayın: kopyalayın, indirin ya da yazdırın. Her biri, telefonunuz elinizde olmadığında bir kez çalışır.',
  'help.guide.mfa.result': 'Her oturum açma şifreden sonra bir kod ister.',
  'help.guide.mfa.tip.1': "2FA'yı devre dışı bırak şifrenizi ve güncel bir kod ister.",
  'help.guide.mfa.tip.2': 'Yönetici 2FA’yı herkes için zorunlu kılabilir; o zaman burada kapatılamaz.',
  // passkeys
  'help.guide.passkeys.title': 'Passkey ile oturum açın',
  'help.guide.passkeys.goal': 'Şifre yerine cihazınızın parmak izini, yüzünü ya da PIN’ini kullanın.',
  'help.guide.passkeys.step.1':
    'Passkey’ler altında Passkey ekle seçeneğine tıklayın ve cihazınızla onaylayın. Ona hangi cihaz olduğunu söyleyen bir ad verin.',
  'help.guide.passkeys.step.2':
    'Liste her passkey’i adı ve en son ne zaman kullanıldığıyla gösterir; silme düğmesi birini kaldırır.',
  'help.guide.passkeys.result': 'Oturum açma sayfası passkey’i sunar; şifre yedek olarak kalır.',
  'help.guide.passkeys.tip.1':
    'Bir passkey cihazda ya da şifre yöneticisinde yaşar, bu yüzden cihaz başına bir tane ekleyin.',
  'help.guide.passkeys.tip.2':
    'Passkey’ler HTTPS ister; düz HTTP’li bir örnekte bölüm neden kullanılamadıklarını açıklar.',
  // delete-account
  'help.guide.delete-account.title': 'Hesabınızı silin',
  'help.guide.delete-account.goal': 'Hesabınızı ve yalnızca size ait olan verileri kaldırın.',
  'help.guide.delete-account.step.1': 'Hesap bölümünün en altında Hesabı sil seçeneğine tıklayın ve onaylayın.',
  'help.guide.delete-account.result':
    'Hesabınız, kendi gezileriniz ve Journey’leriniz gider; başkalarıyla paylaştığınız geziler onlarda kalır.',
  'help.guide.delete-account.tip.1': 'Bir örneğin son yöneticisi kendini silemez; önce başkasını yönetici yapın.',
  'help.guide.delete-account.tip.2': 'Geri alma yoktur. Onaylamadan önce saklamak istediklerinizi dışa aktarın.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Yönetim',
  'help.ctx.admin.summary':
    'Herkesin TREK’inin arkasındaki örnek: kimin nasıl oturum açabileceği, nelerin açık olduğu, dosyaların nerede durduğu, sunucunun insanlara nasıl ulaştığı ve nasıl yedeklendiği. Bu sayfayı yalnızca yöneticiler görür; her sekme kenar çubuğunda kendi başına bir ekrandır.',
  'help.ctx.admin.bullet.1':
    'Üstteki dört kart kullanıcıları, seyahatleri, yerleri ve dosyaları sayar; üstlerindeki bir şerit daha yeni bir TREK sürümünü duyurur.',
  'help.ctx.admin.bullet.2':
    'Kullanıcılar ve Kullanıcı Varsayılanları: hesaplar, davet bağlantıları ve yeni bir hesabın başladığı harita ayarları.',
  'help.ctx.admin.bullet.3':
    'Kişiselleştirme, Ayarlar, Eklentiler ve Plugins: paketleme şablonları, kategoriler ve okul tatilleri; oturum açma yöntemleri ve API anahtarları; özellik modülleri; üçüncü taraf pluginler.',
  'help.ctx.admin.bullet.4':
    'Depolama, Bildirimler, MCP Erişimi ve GitHub: yüklemelerin nereye gittiği, örnek genelindeki kanallar, yapay zekâ istemcilerinin belirteçleri ve oturumları ve sürüm geçmişi.',
  'help.ctx.admin.bullet.5':
    'Yedekleme ve Denetim: isteğe bağlı ve zamanlanmış yedekler ve güvenlikle ilgili olayların günlüğü.',
  'help.ctx.admin-users.title': 'Kullanıcılar',
  'help.ctx.admin-users.summary':
    'Bu TREK’teki her hesap, rolü, e-postası ve son oturum açmasıyla, ve kapalı bir örnekte insanların kaydolmasını sağlayan davet bağlantıları.',
  'help.ctx.admin-users.bullet.1':
    'Tablo: kullanıcı adı, e-posta, rol, oluşturulma tarihi, son giriş ve satır başına eylemler. Siz, siz olarak işaretlisiniz.',
  'help.ctx.admin-users.bullet.2': 'Üstteki Kullanıcı Oluştur, teslim edeceğiniz bir şifreyle elle bir hesap ekler.',
  'help.ctx.admin-users.bullet.3':
    'Alttaki Bağlantıları Davet Et: kullanım sınırı, son kullanma tarihi ve isterseniz yeni kullanıcının geldiğinde katılacağı bir seyahat içeren tek seferlik kayıt bağlantıları.',
  'help.ctx.admin-users.bullet.4':
    'En alttaki İzin Ayarları: eylem başına kimin yapabileceği, Herkes, Seyahat üyeleri, Seyahat sahibi ya da Yalnızca yönetici.',
  'help.ctx.admin-defaults.title': 'Kullanıcı Varsayılanları',
  'help.ctx.admin-defaults.summary':
    'Yeni bir hesabın başladığı ayarlar, böylece kimse önce harita sekmesini bulmak zorunda kalmaz: harita sağlayıcısı, stil, jetonlar ve kalite.',
  'help.ctx.admin-defaults.bullet.1':
    'Harita sağlayıcısı, Mapbox stili ve jetonu, CARTO anahtarı ve Mapbox kalitesi, tam bir kullanıcının Ayarlar, Harita altında ayarlayacağı gibi.',
  'help.ctx.admin-defaults.bullet.2':
    'Alan başına yerleşik varsayılana sıfırlama TREK’in kendi seçimini geri getirir; bir kullanıcının kendi ayarı bunlara her zaman üstün gelir.',
  'help.ctx.admin-config.title': 'Kişiselleştirme',
  'help.ctx.admin-config.summary':
    'Örnekteki her seyahatin paylaştıkları: paketleme şablonları, yerler ve koleksiyonlar için kategori kümesi ve Vacay’in yararlandığı okul tatili kataloğu.',
  'help.ctx.admin-config.bullet.1':
    'Paketleme Şablonları: bir seyahatin paketleme listesinin başlangıç alabileceği, adlandırılmış kategori ve öğe listeleri.',
  'help.ctx.admin-config.bullet.2':
    'Kategoriler: yer denetçisinden Koleksiyonlar’a kadar TREK genelinde kullanılan kategorilerin adı, simgesi ve rengi.',
  'help.ctx.admin-config.bullet.3':
    'Okul tatilleri: yerleşik kaynakların kapsamadığı yerler için ülke ve bölge kataloğu.',
  'help.ctx.admin-settings.title': 'Ayarlar',
  'help.ctx.admin-settings.summary':
    'İnsanların nasıl içeri girdiği ve sunucunun neyle konuşabileceği: oturum açma ve kayıt yöntemleri, SSO, passkey’ler, iki faktör politikası, haritalar, yerler ve görseller için API anahtarları, arama ve toplu taşıma sağlayıcıları ve yüklemelerin sahip olabileceği dosya türleri.',
  'help.ctx.admin-settings.bullet.1':
    'Kimlik Doğrulama Yöntemleri: Şifre Girişi, Şifre Kaydı, TOA Girişi, SSO Otomatik Temel Hazırlığı ve İki faktörlü kimlik doğrulama (2FA) gerektir.',
  'help.ctx.admin-settings.bullet.2':
    'Veren, istemci ve ekran adıyla Tek Oturum Açma (OIDC); Relying Party ID (alan adı) ve İzin verilen kaynaklar ile Passkey ile oturum açma.',
  'help.ctx.admin-settings.bullet.3':
    'API Anahtarları: Google Maps, Unsplash ve Amap, her biri Test et ile; Anahtarın ne için kullanıldığı, Google anahtarını ödemek istediğiniz özelliklerle sınırlar.',
  'help.ctx.admin-settings.bullet.4':
    'Yer arama sağlayıcısı ve Toplu taşıma sağlayıcısı aramalara ve rotalara kimin yanıt vereceğini seçer; İzin Verilen Dosya Türleri yüklemeleri sınırlar.',
  'help.ctx.admin-addons.title': 'Eklentiler',
  'help.ctx.admin-addons.summary':
    'TREK’in özellik modülleri, her biri bir anahtarla: Listeler, Maliyetler, Belgeler, Vacay, Atlas, İş birliği, Seyahat, Koleksiyonlar, Yol gezisi, MCP, AirTrail, Dawarich ve yapay zekâ ayrıştırma. Kapalı, gezinme girdisinin, rotaların ve API’nin herkes için gittiği anlamına gelir.',
  'help.ctx.admin-addons.bullet.1':
    'Eklenti başına bir kutucuk, anahtarıyla ve varsa seçenekleri için alt satırlarıyla.',
  'help.ctx.admin-addons.bullet.2':
    'Fotoğraf sağlayıcıları ve belge sağlayıcıları da burada kutucuk olarak görünür, böylece kullanıcılara Immich ya da Synology sunulabilir.',
  'help.ctx.admin-addons.bullet.3': 'Çanta Takibi’nin kutucukların altında kendi anahtarı vardır.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'TREK’in yanında kendi süreçlerinde çalışan üçüncü taraf pluginler, her biri kurulumda istediği izinlerle. Katalogdan kurun, bir paket yükleyin ya da birini geliştirirken bir klasör bağlayın.',
  'help.ctx.admin-plugins.bullet.1':
    'Liste: sürümü, durumu, imzası ve sahip olduğu izinlerle kurulu her plugin; satır başına etkinleştirin, devre dışı bırakın, güncelleyin ya da kaldırın.',
  'help.ctx.admin-plugins.bullet.2':
    'Eklenti yükle bir paket dosyası alır; Yeniden tara geliştirme için bağlanmış bir plugin klasörünü alır.',
  'help.ctx.admin-plugins.bullet.3':
    'Plugin başına İzin verilen ana bilgisayarlar: bir pluginin çağırabileceği adresler, çünkü dışa çıkış varsayılan olarak reddedilir.',
  'help.ctx.admin-storage.title': 'Depolama',
  'help.ctx.admin-storage.summary':
    'Yüklemelerin durduğu yer: yerel disk, bir S3 kovası ya da her ikisine de yazan bir ayna. Her yükleme kategorisi farklı bir arka uca gidebilir ve Sağlık her arka ucun yanıt verip vermediğini söyler.',
  'help.ctx.admin-storage.bullet.1':
    'Arka uçlar: her birinin adı ve türü, Test et, Düzenle ve Kaldır ile; ortam tarafından ayarlanan biri burada salt okunurdur.',
  'help.ctx.admin-storage.bullet.2':
    'Kategoriler: kapaklar, belgeler, seyahat fotoğrafları ve gerisi, her biri bir arka uca atanmış; birini değiştirmek mevcut dosyaları taşımayı önerir.',
  'help.ctx.admin-storage.bullet.3':
    'Sağlık: arka uç başına bir kontrol ve yapılandırmanın sunucunun gördüğü şey olduğunu kanıtlayan tohum dosyası.',
  'help.ctx.admin-notifications.title': 'Bildirimler',
  'help.ctx.admin-notifications.summary':
    'Örneğin kullanıcılarına sunduğu kanallar ve yönetici olarak size ulaşanlar. Kullanıcılar kendi konularını ve URL’lerini Ayarlar altında seçer; neyin var olduğuna siz karar verir ve e-postayı yapılandırırsınız.',
  'help.ctx.admin-notifications.bullet.1':
    'Uygulama içi, E-posta (SMTP), Ntfy ve Web kancası: her biri için bir panel, kanalı kullanıcılara sunan bir anahtar ve ihtiyaç duyduğu sunucu tarafı yapılandırmasıyla.',
  'help.ctx.admin-notifications.bullet.2':
    'Seyahat Hatırlatıcıları: sunucunun bir seyahat başlamadan önce hatırlatıcı gönderip göndermediği.',
  'help.ctx.admin-notifications.bullet.3':
    'Yönetici Ntfy ve Yönetici Webhook: başarısız bir yedek ya da yeni bir sürüm gibi yönetici olaylarının gittiği yer, test ile.',
  'help.ctx.admin-mcp-tokens.title': 'MCP Erişimi',
  'help.ctx.admin-mcp-tokens.summary':
    'Yapay zekâ istemcilerinin bu TREK’e karşı tuttuğu her belirteç ve OAuth oturumu, tüm kullanıcılar genelinde, herhangi birini iptal etme gücüyle.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API Belirteçleri: kimin oluşturduğu, en son ne zaman kullanıldığı ve Sil.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'OAuth Oturumları: istemci, kullanıcı ve verilen kapsamlar, ve İptal et.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'TREK’te yeni olanlar: GitHub’dan sürüm geçmişi, çalıştırdığınız sürüm ve daha yenisinin çıkıp çıkmadığı. Güncellemenin kendisi uygulamanın dışında, ana bilgisayarda olur.',
  'help.ctx.admin-github.bullet.1':
    'Sürüm Geçmişi sürümleri notlarıyla listeler; en yenisi En sonuncu etiketini taşır ve sizin sürümünüz işaretlidir.',
  'help.ctx.admin-github.bullet.2':
    'Daha yeni bir sürüm çıktığında Güncelleme mevcut üst bilgide görünür, Docker ve diğer kurulumlar için nasıl güncelleneceğiyle birlikte.',
  'help.ctx.admin-backup.title': 'Yedekleme',
  'help.ctx.admin-backup.summary':
    'Veritabanının ve yüklemelerin tam yedekleri, elle ya da zamanlanmış olarak alınır, sunucuda tutulur ve tek dosya olarak indirilebilir. Geri yükle birini geri koyar.',
  'help.ctx.admin-backup.bullet.1':
    'Veri Yedekleme: Yedek Oluştur ve İndir, Geri yükle ve silme ile mevcut yedeklerin listesi.',
  'help.ctx.admin-backup.bullet.2':
    'Yedek Yükle başka bir örnekte ya da daha önceki bir günde alınmış bir dosyayı getirir.',
  'help.ctx.admin-backup.bullet.3':
    'Otomatik yedekleme: açık ya da kapalı, aralık, saat ve gün ve kaç tanesinin tutulacağı.',
  'help.ctx.admin-audit.title': 'Denetim',
  'help.ctx.admin-audit.summary':
    'Güvenlikle ilgili ve yönetsel olayların günlüğü: oturum açmalar ve başarısızlıklar, MFA değişiklikleri, kullanıcı ve ayar değişiklikleri, yedekler ve geri yüklemeler. Salt okunur, en yenisi önce.',
  'help.ctx.admin-audit.bullet.1': 'Olay başına bir satır: zaman, kullanıcı, eylem, kaynak, IP ve ayrıntılar.',
  'help.ctx.admin-audit.bullet.2': 'Yenile yeniden yükler; Daha fazlasını yükle daha geriye gider.',
  // create-user
  'help.guide.create-user.title': 'Kullanıcı oluşturun',
  'help.guide.create-user.goal': 'Davet olmadan elle bir hesap ekleyin.',
  'help.guide.create-user.step.1': 'Kullanıcılar sekmesinin üstündeki Kullanıcı Oluştur’a tıklayın.',
  'help.guide.create-user.step.2': 'Kullanıcı adı, E-posta ve bir Şifre girin ve Rol seçin: Kullanıcı ya da Yönetici.',
  'help.guide.create-user.step.3': 'Kullanıcı Oluştur’a tıklayın.',
  'help.guide.create-user.result':
    'Hesap tabloda görünür ve hemen oturum açabilir; şifreyi güvendiğiniz bir kanaldan teslim edin.',
  'help.guide.create-user.tip.1':
    'Kendi şifresini seçmesi gereken biri için davet bağlantısı daha iyi bir giriş yoludur.',
  'help.guide.create-user.tip.2':
    'Yöneticiler bu sayfayı ve denetim günlüğünü görür; geri kalan her şey iki rol için aynıdır.',
  // edit-user
  'help.guide.edit-user.title': 'Bir kullanıcının rolünü ya da şifresini değiştirin',
  'help.guide.edit-user.goal': 'Birini yükseltin, düşürün ya da kaybolan bir şifreden sonra yeniden içeri alın.',
  'help.guide.edit-user.step.1':
    'Kullanıcının satırındaki kaleme tıklayın. Kullanıcıyı Düzenle hesabın bilgileriyle açılır.',
  'help.guide.edit-user.step.2':
    'Rol’ü değiştirin, bir Yeni Şifre belirleyin ya da kişi passkey’lerinin bulunduğu cihazı kaybettiyse Passkey’leri sıfırla’ya tıklayın, ardından Kaydet.',
  'help.guide.edit-user.result':
    'Değişiklik bir sonraki istekte uygulanır; yeni bir şifre bir sonraki oturum açmadan itibaren çalışır.',
  'help.guide.edit-user.tip.1': 'Son yönetici olduğunuz sürece yönetici rolünü kendinizden alamazsınız.',
  'help.guide.edit-user.tip.2':
    'Passkey’leri sıfırlamak şifreyi korur; kişi yeni passkey’leri Ayarlar, Hesap altında ekler.',
  // invite-links
  'help.guide.invite-links.title': 'Birini bağlantıyla davet edin',
  'help.guide.invite-links.goal':
    'Bir kişinin kapalı bir örnekte kaydolmasını ve isterseniz bir seyahate inmesini sağlayın.',
  'help.guide.invite-links.step.1': 'Bağlantıları Davet Et altında Bağlantı Oluştur’a tıklayın.',
  'help.guide.invite-links.step.2':
    'Maks. Kullanım Alanları ve Şu tarihten sonra sona erer: ayarlayın, isteğe bağlı olarak Seyahate ekle (isteğe bağlı) seçin ve Oluştur ve Kopyala’ya tıklayın.',
  'help.guide.invite-links.step.3':
    'Bağlantıyı gönderin. Her satır ne sıklıkla kullanıldığını ve kimin oluşturduğunu gösterir; Bağlantıyı kopyala onu yeniden kopyalar ve tükenmiş ya da süresi dolmuş bağlantılar Kullanılmış ya da Günü geçmiş olarak işaretlenir.',
  'help.guide.invite-links.result':
    'Bağlantıyı açan kişi kendi şifresiyle kaydolur ve bir seyahat seçilmişse ona hemen katılır.',
  'help.guide.invite-links.tip.1': 'Davet bağlantıları, Ayarlar altında Şifre Kaydı kapalıyken bile çalışır.',
  'help.guide.invite-links.tip.2':
    'Tek kullanımlık ve kısa süreli bir bağlantı tek bir kişi için en güvenli varsayılandır.',
  // delete-user
  'help.guide.delete-user.title': 'Kullanıcı silin',
  'help.guide.delete-user.goal': 'Bir hesabı ve yalnızca ona ait olan her şeyi kaldırın.',
  'help.guide.delete-user.step.1':
    'Kullanıcının satırındaki çöp kutusu simgesine tıklayın ve Kullanıcıyı sil’i onaylayın.',
  'help.guide.delete-user.result':
    'Hesap, kendi seyahatleri ve günlükleri gider; başkalarıyla paylaşılan seyahatler kalan üyelerde kalır.',
  'help.guide.delete-user.tip.1': 'Geri alma yoktur. Emin değilseniz önce bir yedek alın.',
  'help.guide.delete-user.tip.2': 'Son yönetici silinemez; önce başkasını yönetici yapın.',
  // permissions
  'help.guide.permissions.title': 'Kimin ne yapabileceğine karar verin',
  'help.guide.permissions.goal': 'Her eylem için bu TREK’te hangi rolün onu yapmasına izin verildiğini belirleyin.',
  'help.guide.permissions.step.1':
    'İzin Ayarları altında eylemi kendi grubunda bulun, örneğin Seyahat Yönetimi altındaki Seyahatleri sil, ve düzeyi seçin: Herkes, Seyahat üyeleri, Seyahat sahibi ya da Yalnızca yönetici. Değiştirilen bir satır özelleştirildi olarak işaretlenir.',
  'help.guide.permissions.step.2':
    'Kaydet’e tıklayın. Varsayılanlara sıfırla her satırı yerleşik düzeye geri döndürür.',
  'help.guide.permissions.result':
    'Kural tüm seyahatlere aynı anda uygulanır; düzeyin altındaki kişilerin düğmeleri ve menüleri kaybolur.',
  'help.guide.permissions.tip.1':
    'Seyahat sahibi, seyahati oluşturan kişi demektir; yöneticiler her zaman her şeyi yapabilir.',
  'help.guide.permissions.tip.2':
    'Bir üyeyi silmek yerine düzeyi düşürün: düzenleyemeyen bir üye yine de okuyabilir ve yorum yapabilir.',
  // default-map
  'help.guide.default-map.title': 'Yeni kullanıcılar için harita varsayılanlarını ayarlayın',
  'help.guide.default-map.goal': 'Her yeni hesaba kişisel jeton olmadan çalışan bir harita verin.',
  'help.guide.default-map.step.1':
    'Harita altında Harita motoru’nu ve Mapbox ya da MapLibre için Harita stili, Paylaşılan Mapbox jetonu ve Yüksek kalite modu’nu; raster bir harita için Harita Şablonu ve Paylaşılan CARTO anahtarı’nı seçin.',
  'help.guide.default-map.step.2':
    'Değiştirdiğiniz her alanın yanında sıfırlama TREK’in kendi seçimini geri getirir. Soldaki Varsayılan Kullanıcı Ayarları aynısını Renk Modu, birimler ve para birimi için yapar.',
  'help.guide.default-map.result':
    'Yeni hesaplar bunlarla başlar; Ayarlar altında kendi haritasını ayarlayan herkes kendininkini korur.',
  'help.guide.default-map.tip.1':
    'Buraya girilen bir jeton kendisininki olmayan herkes tarafından paylaşılır, bu yüzden kotasına dikkat edin.',
  'help.guide.default-map.tip.2': 'Harita sekmesine hiç dokunmamış mevcut hesaplar da bu varsayılanları izler.',
  // packing-templates
  'help.guide.packing-templates.title': 'Paketleme şablonu oluşturun',
  'help.guide.packing-templates.goal':
    'Seyahatlere boş bir liste yerine başlangıç alacakları bir paketleme listesi verin.',
  'help.guide.packing-templates.step.1': 'Yeni Şablon’a tıklayın, bir ad yazın ve onay işaretiyle onaylayın.',
  'help.guide.packing-templates.step.2':
    'Şablonu açın ve Kategori ekle’ye tıklayın; her kategorinin altında + öğe ekler ve bir öğenin yalnızca ada ihtiyacı vardır.',
  'help.guide.packing-templates.step.3':
    'Her şey siz ilerledikçe kaydedilir. Kalem bir şablonu, kategoriyi ya da öğeyi yeniden adlandırır, çöp kutusu siler.',
  'help.guide.packing-templates.result':
    'Şablon her seyahatin paketleme listesinde sunulur; uygulamak öğeleri kopyalar, böylece bir seyahat onları serbestçe değiştirebilir.',
  'help.guide.packing-templates.tip.1':
    'Seyahat türü başına bir şablon, plaj, şehir, yürüyüş, tek bir dev listeden iyidir.',
  'help.guide.packing-templates.tip.2': 'Bir şablonu silmek onu zaten uygulamış seyahatlere dokunmaz.',
  // categories
  'help.guide.categories.title': 'Kategori kümesini yönetin',
  'help.guide.categories.goal':
    'Yerlerin ve koleksiyonların hangi kategorileri taşıyabileceğine ve nasıl görüneceklerine karar verin.',
  'help.guide.categories.step.1':
    'Yeni Kategori’ye tıklayın, bir ad verin, bir simge ve renk seçin; Önizleme sonucu gösterir. Oluştur’a tıklayın.',
  'help.guide.categories.step.2':
    'Düzenlemek ya da silmek için listede bir kategorinin üzerine gelin. Silme onay ister.',
  'help.guide.categories.result':
    'Küme her yerde aynı anda geçerli olur: yer denetçisi, harita iğneleri, Koleksiyonlar ve filtreler.',
  'help.guide.categories.tip.1':
    'Yerler kategori kimliğini korur, bu yüzden bir kategoriyi yeniden adlandırmak onu her yerde yeniden adlandırır.',
  'help.guide.categories.tip.2': 'Silinen bir kategori yerlerini kategorisiz bırakır; önemliyse önce yeniden atayın.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Okul tatillerini elle yönetin',
  'help.guide.school-holiday-catalog.goal':
    'Yerleşik tatil kaynaklarının kapsamadığı bir ülkeyi ya da bölgeyi kapsayın.',
  'help.guide.school-holiday-catalog.step.1':
    'Okul tatilleri altında Ülke ekle’ye tıklayın, Ülke ve Ülke kodu (ör. US) girin ve Kaydet; ardından farklılık gösteren her parçası için Bölge ekle.',
  'help.guide.school-holiday-catalog.step.2':
    'Bölge veya okul bölgesi’ni açmak için bir bölgeye tıklayın: Tatil dönemi ekle, her birine Tatil adı, Başlangıç tarihi ve Bitiş tarihi verin ve Kaydet. Çöp kutusu bir dönemi, bir bölgeyi ya da bölgesi kalmadığında bir ülkeyi kaldırır.',
  'help.guide.school-holiday-catalog.result':
    'Kullanıcılar ülkeyi ve bölgeyi Vacay’deki Ayarlar altında bulur ve dönemleri yıl ızgaralarında görür.',
  'help.guide.school-holiday-catalog.tip.1':
    'Yerleşik kaynaklardan gelen bölgeler burada düzenlenemez; bir tarih yanlışsa yanına elle bir bölge ekleyin.',
  // auth-methods
  'help.guide.auth-methods.title': 'İnsanların nasıl oturum açacağına karar verin',
  'help.guide.auth-methods.goal': 'Şifreyle oturum açmayı, SSO’yu ve kaydı açın ya da kapatın ve 2FA gerektirin.',
  'help.guide.auth-methods.step.1':
    'Kimlik Doğrulama Yöntemleri altında Şifre Girişi ve Şifre Kaydı’nı açın ya da kapatın. Kayıt kapalıysa yeni hesaplar yalnızca davet bağlantıları, SSO ya da elle açılır.',
  'help.guide.auth-methods.step.2':
    'TOA Girişi ve SSO Otomatik Temel Hazırlığı aşağıda yapılandırılmış Tek Oturum Açma (OIDC) gerektirir; otomatik hazırlık biri SSO ile ilk kez oturum açtığında bir hesap oluşturur.',
  'help.guide.auth-methods.step.3':
    'İki faktörlü kimlik doğrulama (2FA) gerektir, şifreyle yapılan her oturum açmanın bir sonraki girişte bir doğrulayıcı kurmasını sağlar. Passkey ile oturum açma, Relying Party ID (alan adı) ve İzin verilen kaynaklar alanlarını, yani TREK’inize ulaşılan adresleri gerektirir.',
  'help.guide.auth-methods.result': 'Oturum açma sayfası tam olarak açık bıraktığınız yöntemleri sunar.',
  'help.guide.auth-methods.tip.1':
    'Kendinizi dışarıda bırakmadan önce bir uyarı görünür: yöneticiler için en az bir giriş yolu açık kalır.',
  'help.guide.auth-methods.tip.2': 'Ortam değişkenleriyle ayarlanan değerler burada salt okunur görünür.',
  // oidc
  'help.guide.oidc.title': 'Tek oturum açmayı bağlayın',
  'help.guide.oidc.goal': 'İnsanların kimlik sağlayıcınızla oturum açmasını sağlayın.',
  'help.guide.oidc.step.1':
    "Tek Oturum Açma (OIDC) altında düğme için Ekran Adı’nı ve sağlayıcınızdan Veren URL'si, Client ID ve Client Secret’ı girin, ardından Kaydet.",
  'help.guide.oidc.step.2': 'Kimlik Doğrulama Yöntemleri altında TOA Girişi’ni açın.',
  'help.guide.oidc.result':
    'Oturum açma sayfası SSO düğmesini gösterir; SSO Otomatik Temel Hazırlığı açıkken ilk kez gelen kullanıcılar otomatik olarak bir hesap alır.',
  'help.guide.oidc.tip.1':
    'Sağlayıcınızın ihtiyaç duyduğu yönlendirme URI’si, TREK’inizin adresi artı belgelerdeki OIDC geri çağırma yoludur.',
  'help.guide.oidc.tip.2':
    'Talep eşleme hangi SSO gruplarının yönetici olacağına karar verir; belgelerdeki OIDC sayfasına bakın.',
  // instance-keys
  'help.guide.instance-keys.title': 'API anahtarlarını girin',
  'help.guide.instance-keys.goal': 'Google yer aramasını, Unsplash kapaklarını ve Amap’i tüm örnek için açın.',
  'help.guide.instance-keys.step.1':
    'API Anahtarları altında Google Haritalar API Anahtarı’nı yapıştırın ve Test et’e tıklayın; alan anahtarın yanıt verip vermediğini söyler.',
  'help.guide.instance-keys.step.2':
    'Anahtarın ne için kullanıldığı altında yalnızca o anahtara faturalanmasını istediğiniz özellikleri açın: Otomatik Tamamlamayı Yerleştir, Yer Detayları, Fotoğrafları Yerleştir, Yer zenginleştirme, Yer arama günlüğü.',
  'help.guide.instance-keys.step.3':
    'Unsplash API Anahtarı kapak aramasını; Amap (高德地图) API Anahtarı Çin’de yer aramasını çalıştırır. Her birini aynı şekilde test edin.',
  'help.guide.instance-keys.result':
    'Kullanıcılar özellikleri kendi anahtarları olmadan alır; Google anahtarı olmadan TREK ücretsiz OpenStreetMap yığını ve TREK Places API üzerinden arar.',
  'help.guide.instance-keys.tip.1':
    'Bir kullanıcının Ayarlar altındaki kişisel anahtarı, o kullanıcı için örnek anahtarına üstün gelir.',
  'help.guide.instance-keys.tip.2':
    'Anahtarlar ortam değişkenlerinden de gelebilir; bunlar burada salt okunur görünür.',
  // places-transit
  'help.guide.places-transit.title': 'Arama ve toplu taşıma sağlayıcılarını seçin',
  'help.guide.places-transit.goal': 'Yer aramalarına ve toplu taşıma rotalarına kimin yanıt vereceğine karar verin.',
  'help.guide.places-transit.step.1':
    'Yer arama sağlayıcısı altında Otomatik, Google Places, Amap (高德地图) ya da OpenStreetMap seçin. Otomatik var olan en iyi anahtarı kullanır.',
  'help.guide.places-transit.step.2':
    'Toplu taşıma sağlayıcısı altında dünya çapında ve anahtarsız Transitous (ücretsiz) ya da Google anahtarı gerektiren Google seçin.',
  'help.guide.places-transit.result': 'TREK’teki her arama kutusu ve her toplu taşıma rotası bu seçimi izler.',
  'help.guide.places-transit.tip.1':
    'Anahtarı olmayan bir sağlayıcı burada bir uyarı gösterir ve OpenStreetMap’e geri düşer.',
  'help.guide.places-transit.tip.2': 'Google toplu taşıma rotaları istek başına faturalanır; Transitous faturalanmaz.',
  // file-types
  'help.guide.file-types.title': 'Dosya türlerini sınırlayın',
  'help.guide.file-types.goal': 'Yüklemelerin hangi dosya uzantılarına sahip olabileceğine karar verin.',
  'help.guide.file-types.step.1':
    'İzin Verilen Dosya Türleri altında virgülle ayrılmış uzantı listesini düzenleyin ve kaydedin.',
  'help.guide.file-types.result':
    'Başka türde yüklemeler belgelerde, günlükte ve kapaklarda net bir mesajla reddedilir.',
  'help.guide.file-types.tip.1':
    'Görsel türlerini listede tutun; kapaklar ve seyahat fotoğrafları aynı kontrolden geçer.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Bir eklentiyi açın ya da kapatın',
  'help.guide.toggle-addon.goal': 'Bir özellik modülünü herkese sunun ya da geri alın.',
  'help.guide.toggle-addon.step.1':
    'Eklentinin kutucuğundaki anahtarı çevirin. Gezinme girdisi herkes için aynı anda görünür ya da kaybolur.',
  'help.guide.toggle-addon.step.2':
    'Bazı kutucuklar seçenekleri için alt satırlar taşır, Listeler altındaki Çanta Takibi ya da Seyahat altındaki fotoğraf sağlayıcıları gibi; yalnızca eklenti açıkken görünürler.',
  'help.guide.toggle-addon.result': 'Kapatılan bir eklentinin verileri korunur; yeniden açmak onları yeniden gösterir.',
  'help.guide.toggle-addon.tip.1': 'MCP kapalıyken uç nokta ve ona bağlı Entegrasyonlar bölümleri kaldırılır.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas ve Seyahat kullanıcıların en çok istediği eklentilerdir; Belgeler yüklemeler için depolama gerektirir.',
  // install-plugin
  'help.guide.install-plugin.title': 'Plugin kurun',
  'help.guide.install-plugin.goal': 'Üçüncü taraf bir plugin ekleyin ve ona tam olarak istediği izinleri verin.',
  'help.guide.install-plugin.step.1':
    'Keşfet’i açın, bir plugin seçin ve Yükle’ye tıklayın; ya da Eklenti yükle’ye tıklayın ve bir .zip ya da .tar.gz paketi seçin.',
  'help.guide.install-plugin.step.2':
    'Yüklü altına dönüp satırı okuyun: pluginin neyi okuyup yazabileceği, çağırdığı ana bilgisayarlar ve imzalı olup olmadığı. Eklentiyi etkinleştir’i açın.',
  'help.guide.install-plugin.step.3':
    'Satırın menüsü Yeniden başlat, Hata günlüğünü görüntüle, İzin verilen ana bilgisayarlar ve Sürüm değiştir… sunar; Sil onu kaldırır. Daha yeni bir sürüm olduğunda satırda bir güncelleme sunulur ve yeni haklar isteyen biri siz onaylayana kadar kapalı kalır.',
  'help.guide.install-plugin.result':
    'Plugin kendi sürecinde çalışır; eklediği şeyler, bileşenler, harita katmanları, araçlar, pluginin bildirdiği yerde görünür.',
  'help.guide.install-plugin.tip.1': 'Yeniden tara, geliştirme için bağlanmış bir plugin klasörünü paket olmadan alır.',
  'help.guide.install-plugin.tip.2': 'İmzasız bir plugin öyle işaretlenir; yalnızca kaynağına güvendiğinizde kurun.',
  // storage-backends
  'help.guide.storage-backends.title': 'Yüklemeleri S3’e ya da bir aynaya taşıyın',
  'help.guide.storage-backends.goal': 'Dosyaları nesne depolamada ya da hem diskte hem kovada tutun.',
  'help.guide.storage-backends.step.1':
    'Arka uçlar altında Arka uç ekle’ye tıklayın, bir Ad verin, Tür seçin, Yerel, S3 ya da Ayna, alanları doldurun ve Uygula. Test et bağlantıyı kontrol eder, Değişiklikleri kaydet yazar.',
  'help.guide.storage-backends.step.2':
    'Kategoriler altında her yükleme kategorisini bir arka uca atayın. Birini değiştirmek Mevcut nesneleri taşı mı yoksa Yalnızca yeni yazmaları yönlendir mi diye sorar.',
  'help.guide.storage-backends.step.3':
    'Üstteki Sağlık her arka ucu kontrol eder; kırmızı bir girdi neyin başarısız olduğunu adlandırır.',
  'help.guide.storage-backends.result': 'Yeni yüklemeler atanan arka uca gider; taşınan dosyalar oradan sunulur.',
  'help.guide.storage-backends.tip.1':
    'Ortam değişkenleriyle yapılandırılmış bir arka uç gösterilir ama burada düzenlenemez.',
  'help.guide.storage-backends.tip.2':
    'Bir ayna her iki hedefe yazar ve ilkinden okur; kesinti olmadan geçiş yapmak için kullanın.',
  // channels-instance
  'help.guide.channels-instance.title': 'Bildirim kanallarını yapılandırın',
  'help.guide.channels-instance.goal': 'Kullanıcıların hangi kanalları seçebileceğine karar verin ve e-postayı kurun.',
  'help.guide.channels-instance.step.1':
    'E-posta (SMTP) altında SMTP Host, SMTP Port, SMTP User, SMTP Password ve From Address girin; Test e-postası gönder size bir posta gönderir.',
  'help.guide.channels-instance.step.2':
    'Sunmak için Ntfy ve Web kancası’nı açın; kullanıcılar sonra kendi konularını ya da URL’lerini Ayarlar, Bildirimler altında girer.',
  'help.guide.channels-instance.step.3':
    'Seyahat Hatırlatıcıları bir seyahat başlamadan önceki hatırlatıcıyı açıp kapatır; Uygulama içi her zaman açıktır ve burada yalnızca açıklanır.',
  'help.guide.channels-instance.result': 'Her kullanıcının Bildirimler sekmesi açtığınız kanalları gösterir.',
  'help.guide.channels-instance.tip.1':
    'Buraya girilen varsayılan ntfy sunucusu kullanıcılar için önceden doldurulur; yine de kendilerininkini belirtebilirler.',
  'help.guide.channels-instance.tip.2':
    'Plugin kanalları, o yeteneğe sahip bir plugin etkin olduğunda kendiliğinden görünür.',
  // admin-channels
  'help.guide.admin-channels.title': 'Yönetici olaylarını telefonunuza alın',
  'help.guide.admin-channels.goal':
    'Başarısız yedeklerden, yeni sürümlerden ve diğer örnek olaylarından haberdar olun.',
  'help.guide.admin-channels.step.1':
    'Yönetici Ntfy altında bir konu ve gerekirse sunucu ve jeton girin; Yönetici Webhook altında bir URL.',
  'help.guide.admin-channels.step.2':
    'Bir mesajın geldiğini görmek için Test ntfy gönder ya da Test webhook gönder’e tıklayın.',
  'help.guide.admin-channels.result': 'Yönetici olayları her yöneticinin uygulama içi ziline ek olarak oraya gider.',
  'help.guide.admin-channels.tip.1':
    'Yönetici konusunu kişisel konunuzdan ayrı tutun ki bir kesinti seyahat sohbetinde boğulmasın.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Yapay zekâ erişimini iptal edin',
  'help.guide.mcp-tokens-admin.goal':
    'Bir yapay zekâ istemcisinin tuttuğu her belirteci ve oturumu herhangi bir kullanıcı için görün ve kesin.',
  'help.guide.mcp-tokens-admin.step.1':
    'API Belirteçleri altında belirteci kullanıcı ve ada göre bulun; çöp kutusu onu siler ve istemci hemen durur.',
  'help.guide.mcp-tokens-admin.step.2':
    'OAuth Oturumları altında tarayıcı tabanlı istemciler için aynısı: istemci, kullanıcı ve tarih, ve çöp kutusu oturumu iptal eder.',
  'help.guide.mcp-tokens-admin.result':
    'İstemcinin kullanıcısı tarafından yeniden bağlanması gerekir; başka hiçbir şey değişmez.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Kapsamlar bir istemcinin ne yapabildiğini söyler; salt okunur bir kapsamı bırakmak zararsızdır.',
  'help.guide.mcp-tokens-admin.tip.2': 'MCP eklentisini kapatmak her şeyi aynı anda iptal eder.',
  // release-history
  'help.guide.release-history.title': 'Yeni sürüm olup olmadığına bakın',
  'help.guide.release-history.goal': 'TREK’inizin güncel olup olmadığını ve bir sonraki sürümün ne getirdiğini bilin.',
  'help.guide.release-history.step.1':
    "Daha yeni bir sürüm olduğunda Güncelleme mevcut yönetim sayfasının üstünde görünür; GitHub'da görüntüle onu açar ve Nasıl Güncellenir? Docker ve diğer kurulumlar için güncellemeyi açıklar.",
  'help.guide.release-history.step.2':
    'Sürüm Geçmişi her sürümü notlarıyla listeler; Ayrıntıları göster onları genişletir, en yenisi En sonuncu etiketini taşır ve Daha fazlasını yükle daha geriye gider.',
  'help.guide.release-history.result':
    'Güncelleme ana bilgisayarda olur, yeni imajı çekerek ya da yeni etiketi derleyerek; veri dizini kalır.',
  'help.guide.release-history.tip.1': 'Güncellemeden önce bir yedek alın; Yedekleme sekmesi hemen yanda.',
  'help.guide.release-history.tip.2':
    'Ön sürümler gösterilir ama siz birini çalıştırmadıkça güncelleme olarak duyurulmaz.',
  // create-backup
  'help.guide.create-backup.title': 'Yedek alın ve geri yükleyin',
  'help.guide.create-backup.goal':
    'Tüm örneğin anlık görüntüsünü alın, bir kopyasını başka yerde tutun ve geri koyabilin.',
  'help.guide.create-backup.step.1':
    'Veri Yedekleme altında Yedek Oluştur’a tıklayın. Veritabanını ve yüklemeleri sunucuda tek bir dosyaya paketler.',
  'help.guide.create-backup.step.2':
    'İndir bir kopyayı makinenin dışında tutar; çöp kutusu yer açmak için eskileri siler.',
  'help.guide.create-backup.step.3':
    'Bir yedekteki Geri yükle ya da bir dosyayla Yedek Yükle, Yedek geri yüklensin mi? bir kez sorduktan sonra mevcut verileri değiştirir.',
  'help.guide.create-backup.result':
    'Bir geri yükleme kullanıcıları, seyahatleri, dosyaları ve ayarları o yedek anındaki haliyle geri getirir; herkesin oturumu kapatılır.',
  'help.guide.create-backup.tip.1': 'Geri yükleme buradaki geri alınamayan tek eylemdir. Önce taze bir yedek alın.',
  'help.guide.create-backup.tip.2':
    'Yedekler veri dizininde durur; onları yedek yapan şey başka bir makinedeki kopyadır.',
  // auto-backup
  'help.guide.auto-backup.title': 'Yedekleri zamanlayın',
  'help.guide.auto-backup.goal': 'Sunucunun kendini yedeklemesini ve yalnızca son birkaçını tutmasını sağlayın.',
  'help.guide.auto-backup.step.1':
    'Otomatik yedekleme altında Otomatik yedeklemeyi etkinleştir’i açın ve Aralık, Çalışma saati ve haftalık ya da aylık için Haftanın günü ya da Ayın günü’nü seçin.',
  'help.guide.auto-backup.step.2':
    'Eski yedekleri şu süreden sonra sil bir yedeğin ne kadar tutulacağını belirler; yenisi alındığında eskileri gider.',
  'help.guide.auto-backup.result': 'Yedekler listede zamanında görünür; bir başarısızlık yönetici kanallarına ulaşır.',
  'help.guide.auto-backup.tip.1': 'Saatler, Denetim sekmesinde gösterilen sunucu saat dilimini izler.',
  'help.guide.auto-backup.tip.2': 'Sunucudaki depolama sınırlıdır; üç ila beş tane tutmak genellikle yeterlidir.',
  // audit-log
  'help.guide.audit-log.title': 'Denetim günlüğünü okuyun',
  'help.guide.audit-log.goal': 'Kimin neyi ne zaman yaptığını öğrenin.',
  'help.guide.audit-log.step.1':
    'Satırları okuyun: zaman, kullanıcı, eylem, kaynak, IP ve ayrıntılar, en yenisi önce. Eylemler olana göre adlandırılır, bir giriş hatası, bir MFA değişikliği ya da bir geri yükleme gibi.',
  'help.guide.audit-log.step.2': 'Yenile en üstü yeniden yükler; Daha fazlasını yükle daha geriye gider.',
  'help.guide.audit-log.result': 'Bir şeyin neden değiştiğini soran herkese verebileceğiniz bir iz.',
  'help.guide.audit-log.tip.1': 'Saatler, tablonun üstünde adı geçen sunucu saat diliminde gösterilir.',
  'help.guide.audit-log.tip.2':
    'Günlük yalnızca eklemelidir; buradaki hiçbir şey uygulamadan düzenlenemez ya da silinemez.',
};

export default help;
