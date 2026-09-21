import type { TranslationStrings } from '../types';

// English fallback until 'id' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Bantuan untuk layar ini',
  'help.center.title': 'Bantuan',
  'help.center.onThisScreen': 'Di layar ini',
  'help.center.screens': 'Layar',
  'help.center.thisScreen': 'Layar ini',
  'help.center.subScreens': 'Sublayar: {count}',
  'help.center.subScreensLabel': 'Sublayar',
  'help.center.guidesCount': '{count} panduan',
  'help.center.goToScreen': 'Buka {screen}',
  'help.center.overview': 'Ikhtisar',
  'help.center.howTo': 'Bagaimana cara…',
  'help.center.searchPlaceholder': 'Cari panduan dan dokumentasi…',
  'help.center.searchEmpty': 'Tidak ada hasil untuk “{query}”.',
  'help.center.searchGuides': 'Panduan',
  'help.center.searchDocs': 'Dokumentasi',
  'help.center.searchError': 'Pencarian sedang tidak tersedia.',
  'help.center.back': 'Kembali',
  'help.center.close': 'Tutup bantuan',
  'help.center.steps': '{count} langkah',
  'help.center.step': 'Langkah {n}',
  'help.center.stepsLabel': 'Langkah',
  'help.center.stepOf': 'Langkah {n} dari {total}',
  'help.center.screenshot': 'Tangkapan layar',
  'help.center.result': 'Hasilnya',
  'help.center.tips': 'Perlu diketahui',
  'help.center.related': 'Terkait',
  'help.center.openDocs': 'Buka di Bantuan & Dokumentasi',
  'help.center.docsSection': 'Di dokumentasi',
  'help.center.noContext': 'Belum ada panduan untuk layar ini.',
  'help.center.noContextHint': 'Cari di dokumentasi, atau beri tahu kami apa yang Anda cari.',
  'help.center.feedback': 'Ada yang kurang?',
  'help.center.feedbackLink': 'Beri tahu kami di GitHub',
  'help.center.discord': 'Tanya di Discord',
  'help.center.quick': 'Singkat',
  'help.center.guide': 'Panduan',
  'help.center.tour': 'Demo',
  'help.center.imageAlt': 'Langkah {n} dari “{title}”',

  // ctx
  'help.ctx.dashboard.title': 'Dasbor',
  'help.ctx.dashboard.summary':
    'Dasbor adalah pintu masuk ke setiap perjalanan. Boarding pass di atas menyorot perjalanan yang sedang berlangsung atau berikutnya, baris di bawahnya menghitung sejauh apa Anda sudah bepergian, dan kartu-kartunya memuat semua yang Anda rencanakan, arsipkan, atau sudah selesai.',
  'help.ctx.dashboard.bullet.1':
    'Boarding pass: perjalanan yang berlangsung atau berikutnya beserta tanggal, peserta, tempat, dan hitung mundur. Klik untuk membuka perjalanan.',
  'help.ctx.dashboard.bullet.2':
    'Statistik perjalanan: negara yang dikunjungi, jumlah perjalanan, hari di jalan, dan jarak terbang, dari semua perjalanan Anda.',
  'help.ctx.dashboard.bullet.3':
    'Kartu perjalanan, disaring menurut Direncanakan, Diarsipkan, dan Selesai, dalam bentuk kisi atau daftar. Arahkan kursor ke kartu untuk mengedit, menduplikasi, mengarsipkan, dan menghapus.',
  'help.ctx.dashboard.bullet.4':
    'Widget di kanan: konverter mata uang, jam dunia, reservasi mendatang, dan koleksi. Semuanya bisa dimatikan.',
  'help.ctx.dashboard.bullet.5':
    'Kartu “Perjalanan Baru” dan tombol di pojok kanan bawah sama-sama memulai perjalanan baru.',

  // create-trip
  'help.guide.create-trip.title': 'Membuat perjalanan',
  'help.guide.create-trip.goal': 'Memulai perjalanan baru dengan nama, tanggal, dan foto sampul.',
  'help.guide.create-trip.step.1':
    'Klik “Perjalanan Baru”. Kartu di ujung daftar perjalanan dan tombol di pojok kanan bawah melakukan hal yang sama.',
  'help.guide.create-trip.step.2':
    'Beri nama perjalanan. Itu satu-satunya kolom wajib; sisanya bisa ditambahkan nanti.',
  'help.guide.create-trip.step.3':
    'Pilih tanggal mulai dan selesai. TREK membuat satu hari per tanggal, jadi rencana perjalanan siap diisi.',
  'help.guide.create-trip.step.4':
    'Opsional: tambahkan foto sampul. Unggah milik sendiri, seret ke sini, atau cari tujuannya di Unsplash.',
  'help.guide.create-trip.step.5': 'Klik “Buat Perjalanan Baru”.',
  'help.guide.create-trip.result':
    'Perjalanan muncul di dasbor. Jika ini perjalanan berikutnya, ia mengambil alih boarding pass di atas.',
  'help.guide.create-trip.tip.1':
    'Tanggal bisa diubah nanti. Jika sudah ada reservasi, TREK akan bertanya apakah reservasi ikut dipindahkan bersama harinya.',
  'help.guide.create-trip.tip.2':
    'Mata uang perjalanan yang dipilih di sini adalah tujuan konversi setiap pengeluaran. Pilih mata uang tujuan.',

  // edit-trip
  'help.guide.edit-trip.title': 'Mengedit perjalanan',
  'help.guide.edit-trip.goal': 'Mengganti nama perjalanan, mengubah tanggal, atau menyesuaikan pengaturannya.',
  'help.guide.edit-trip.step.1': 'Arahkan kursor ke kartu perjalanan (atau boarding pass) dan klik ikon pensil.',
  'help.guide.edit-trip.step.2':
    'Ubah yang diperlukan: nama, deskripsi, tanggal, sampul, mata uang, pengingat, atau anggota.',
  'help.guide.edit-trip.step.3': 'Klik “Perbarui”.',
  'help.guide.edit-trip.result': 'Kartu langsung diperbarui, untuk setiap anggota perjalanan.',
  'help.guide.edit-trip.tip.1':
    'Memindahkan tanggal perjalanan yang sudah punya reservasi membuka langkah kedua yang menanyakan apakah reservasi ikut dipindahkan.',

  // cover-image
  'help.guide.cover-image.title': 'Mengatur foto sampul',
  'help.guide.cover-image.goal': 'Memberi perjalanan gambar yang tampil di kartunya dan di boarding pass.',
  'help.guide.cover-image.step.1': 'Buka formulir edit perjalanan lewat ikon pensil di kartunya.',
  'help.guide.cover-image.step.2':
    'Di “Gambar Sampul”, jatuhkan foto, klik untuk mengunggah, atau ketik tujuan di pencarian Unsplash.',
  'help.guide.cover-image.step.3': 'Pilih foto dan klik “Perbarui”.',
  'help.guide.cover-image.result': 'Foto disimpan bersama perjalanan dan tampil di mana pun perjalanan itu terdaftar.',
  'help.guide.cover-image.tip.1':
    'Foto dari pencarian Unsplash diberi kredit otomatis; unggahan Anda sendiri tetap di server Anda.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Menduplikasi perjalanan',
  'help.guide.duplicate-trip.goal': 'Menggunakan kembali perjalanan sebagai templat untuk yang baru.',
  'help.guide.duplicate-trip.step.1': 'Arahkan kursor ke kartu dan klik ikon duplikat.',
  'help.guide.duplicate-trip.step.2': 'Baca apa yang akan disalin dan tidak, lalu konfirmasi.',
  'help.guide.duplicate-trip.result': 'Salinan muncul di samping aslinya, siap diganti nama dan tanggalnya.',
  'help.guide.duplicate-trip.tip.1':
    'Hari, tempat, reservasi, item anggaran, daftar bawaan, dan catatan harian ikut disalin. Anggota, obrolan, jajak pendapat, berkas, dan tautan berbagi tidak.',

  // archive-trip
  'help.guide.archive-trip.title': 'Mengarsipkan dan memulihkan perjalanan',
  'help.guide.archive-trip.goal': 'Menyingkirkan perjalanan tanpa menghapusnya, dan mengembalikannya nanti.',
  'help.guide.archive-trip.step.1': 'Arahkan kursor ke kartu dan klik “Arsipkan”.',
  'help.guide.archive-trip.step.2': 'Ubah filter di atas kartu ke “Diarsipkan” untuk melihatnya lagi.',
  'help.guide.archive-trip.step.3': 'Klik “Pulihkan” di kartu untuk mengembalikannya ke “Direncanakan”.',
  'help.guide.archive-trip.result':
    'Perjalanan yang diarsipkan tetap utuh. Ia hanya berhenti memenuhi dasbor dan umpan kalender semua perjalanan.',

  // delete-trip
  'help.guide.delete-trip.title': 'Menghapus perjalanan',
  'help.guide.delete-trip.goal': 'Menghapus perjalanan untuk selamanya.',
  'help.guide.delete-trip.step.1': 'Arahkan kursor ke kartu dan klik ikon tempat sampah.',
  'help.guide.delete-trip.step.2': 'Konfirmasi. Dialognya menyebut nama perjalanan, jadi Anda tahu itu yang benar.',
  'help.guide.delete-trip.result':
    'Perjalanan beserta hari, tempat, reservasi, dan berkasnya hilang. Tidak bisa dibatalkan; jika ragu, arsipkan saja.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Menemukan perjalanan selesai, beralih kisi dan daftar',
  'help.guide.filter-and-view.goal':
    'Melihat perjalanan yang selesai atau diarsipkan dan memilih tata letak yang Anda suka.',
  'help.guide.filter-and-view.step.1':
    'Gunakan “Direncanakan”, “Diarsipkan”, dan “Selesai” di atas kartu. Selesai berarti semua perjalanan yang tanggal akhirnya sudah lewat.',
  'help.guide.filter-and-view.step.2':
    'Klik ikon daftar untuk beralih ke daftar ringkas; klik lagi untuk kembali ke kisi.',
  'help.guide.filter-and-view.result': 'Dasbor mengingat tata letak Anda di perangkat ini.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Berlangganan semua perjalanan di kalender Anda',
  'help.guide.calendar-feed.goal':
    'Melihat hari dan reservasi setiap perjalanan aktif di aplikasi kalender Anda, selalu tersinkron.',
  'help.guide.calendar-feed.step.1': 'Klik ikon kalender di samping tombol pengalih tampilan.',
  'help.guide.calendar-feed.step.2': 'Klik “Enable calendar subscription”. TREK membuat tautan umpan pribadi.',
  'help.guide.calendar-feed.step.3':
    'Tambahkan umpan dengan salah satu tombol (Google, Apple, Outlook) atau salin tautannya ke aplikasi kalender apa pun yang bisa berlangganan URL.',
  'help.guide.calendar-feed.result':
    'Setiap perjalanan aktif tampil di kalender Anda dan diperbarui sendiri. Perjalanan yang diarsipkan dan yang berakhir lebih dari 90 hari lalu tidak disertakan.',
  'help.guide.calendar-feed.tip.1':
    'Tautannya rahasia. Siapa pun yang memilikinya bisa membaca umpan; cabut dari dialog yang sama jika bocor.',

  // widgets
  'help.guide.widgets.title': 'Memilih widget dasbor',
  'help.guide.widgets.goal': 'Menampilkan atau menyembunyikan baris statistik dan widget di kanan.',
  'help.guide.widgets.step.1': 'Buka menu avatar di pojok kanan atas dan pilih “Pengaturan”.',
  'help.guide.widgets.step.2': 'Beralih ke tab “Appearance”.',
  'help.guide.widgets.step.3':
    'Di bawah “Dashboard widgets”, nyalakan atau matikan setiap widget. Desktop dan ponsel diatur terpisah.',
  'help.guide.widgets.step.4': 'Kembali ke dasbor. Perubahan langsung berlaku.',
  'help.guide.widgets.result':
    'Widget yang disembunyikan memberi ruang untuk perjalanan Anda; matikan seluruh kolom kanan untuk memusatkan tata letak.',
  'help.guide.widgets.link': 'Buka pengaturan tampilan',

  // currency-widget
  'help.guide.currency-widget.title': 'Mengonversi mata uang',
  'help.guide.currency-widget.goal': 'Mengonversi jumlah antara dua mata uang dengan kurs terkini.',
  'help.guide.currency-widget.step.1': 'Ketik jumlahnya dan pilih dua mata uang.',
  'help.guide.currency-widget.step.2': 'Panah di antaranya menukar pasangan; panah melingkar menyegarkan kurs.',
  'help.guide.currency-widget.result': 'Pasangan mata uang Anda diingat di akun, jadi sama di setiap perangkat.',
  'help.guide.currency-widget.tip.1': 'Kurs berasal dari Bank Sentral Eropa dan diperbarui sekali sehari.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Menambahkan jam dunia',
  'help.guide.timezones-widget.goal': 'Memantau waktu setempat di tujuan Anda.',
  'help.guide.timezones-widget.step.1': 'Klik + di widget “Zona waktu” dan cari sebuah kota.',
  'help.guide.timezones-widget.step.2': 'Hapus jam dengan tanda × di sebelahnya.',
  'help.guide.timezones-widget.result': 'Jam Anda disimpan bersama akun Anda.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay adalah perencana cuti pribadi Anda: berapa hari cuti yang Anda punya dalam setahun, mana yang sudah dicatat, dan berapa yang tersisa. Kisi menampilkan seluruh tahun sekilas; bilah samping memuat pemilih tahun, orang yang berencana bersama Anda, kalender yang dibagikan kepada Anda, legenda, dan jatah Anda.',
  'help.ctx.vacay.bullet.1':
    'Kisi tahunan: dua belas kartu bulan, satu sel per hari. Klik sebuah hari untuk mencatat atau menghapusnya. Titik biru kecil menandai hari yang sudah tercakup perjalanan.',
  'help.ctx.vacay.bullet.2':
    'Bilah alat di bawah: mode “Cuti” atau “Hari Libur Perusahaan”, plus sakelar “Setengah hari” dan “Pengganti / Fleksi” yang mengubah apa yang dicatat sebuah klik.',
  'help.ctx.vacay.bullet.3':
    '“Jatah Cuti”: hari Anda untuk tahun ini, berapa yang terpakai dan berapa yang tersisa, dengan sisa yang dibawa dari periode sebelumnya.',
  'help.ctx.vacay.bullet.4':
    '“Orang” adalah mereka yang digabung ke rencana Anda, masing-masing dengan warnanya. “Kalender yang Dibagikan” adalah cincin hanya-baca dari hari libur orang lain.',
  'help.ctx.vacay.bullet.5':
    '“Pengaturan” mencakup akhir pekan, awal minggu, sisa cuti, tahun cuti Anda, libur perusahaan, serta kalender hari libur nasional atau libur sekolah.',
  // log-day
  'help.guide.log-day.title': 'Mencatat hari cuti',
  'help.guide.log-day.goal': 'Tandai hari libur di kisi tahunan dan lihat saldo mengikuti.',
  'help.guide.log-day.step.1':
    'Lihat bilah alat di bawah: tombol kiri, dengan warna Anda, berarti satu klik mencatat hari cuti untuk Anda.',
  'help.guide.log-day.step.2':
    'Klik sebuah hari di kartu bulan mana pun. Ia terisi warna Anda dan “Terpakai” bertambah satu hari.',
  'help.guide.log-day.step.3': 'Klik hari yang sama lagi untuk menghapusnya.',
  'help.guide.log-day.result':
    'Hari tercatat, “Hari”, “Terpakai”, dan “Sisa” langsung diperbarui, dan siapa pun yang digabung ke rencana Anda melihatnya secara langsung.',
  'help.guide.log-day.tip.1': 'Akhir pekan tidak bisa dicatat selama “Blokir Akhir Pekan” aktif di “Pengaturan”.',
  'help.guide.log-day.tip.2':
    'Titik biru di sel berarti salah satu perjalanan Anda mencakup hari itu, jadi Anda melihat di mana cuti dan perjalanan bertemu.',
  // half-day
  'help.guide.half-day.title': 'Mencatat setengah hari',
  'help.guide.half-day.goal': 'Ambil libur sore tanpa menghabiskan satu hari penuh jatah.',
  'help.guide.half-day.step.1':
    'Nyalakan “Setengah hari” di bilah alat. Titik oranyenya adalah penanda yang diterima setengah hari di kisi.',
  'help.guide.half-day.step.2': 'Klik sebuah hari. Ia dicatat sebagai 0,5 dan membawa titik oranye di sudutnya.',
  'help.guide.half-day.step.3':
    'Matikan lagi “Setengah hari” setelah selesai; mengklik setengah hari dengan pengaturan lain mengubahnya di tempat.',
  'help.guide.half-day.result':
    '“Terpakai” bertambah 0,5. “Setengah hari” dan “Pengganti / Fleksi” independen, jadi setengah hari kompensasi juga bisa.',
  'help.guide.half-day.tip.1':
    'Bilah alat selalu menampilkan penanda yang akan dipasang klik berikutnya, jadi Anda bisa memeriksa sebelum mencatat.',
  // comp-day
  'help.guide.comp-day.title': 'Mencatat kompensasi atau waktu fleksibel',
  'help.guide.comp-day.goal': 'Ambil libur pengganti yang tidak mengurangi hari cuti.',
  'help.guide.comp-day.step.1':
    'Nyalakan “Pengganti / Fleksi” di bilah alat. Cakram berarsir adalah tampilan hari kompensasi di kisi.',
  'help.guide.comp-day.step.2': 'Klik sebuah hari. Ia terisi arsiran diagonal dengan warna Anda, bukan blok padat.',
  'help.guide.comp-day.result': 'Hari kompensasi dihitung di samping ubin jatah dan tidak pernah mengurangi “Sisa”.',
  'help.guide.comp-day.tip.1':
    'Lembur yang diganti, jam fleksibel, hari libur pengganti: semua yang libur tapi bukan cuti masuk di sini.',
  // entitlement
  'help.guide.entitlement.title': 'Mengatur jatah cuti',
  'help.guide.entitlement.goal': 'Beri tahu Vacay berapa hari cuti yang Anda miliki dalam setahun.',
  'help.guide.entitlement.step.1': 'Di bilah samping, klik ubin “Hari” di bawah “Jatah Cuti”.',
  'help.guide.entitlement.step.2': 'Ketik jumlah hari Anda dan tekan Enter.',
  'help.guide.entitlement.result': '“Sisa” dihitung ulang dari jatah Anda, sisa yang dibawa, dan hari yang terpakai.',
  'help.guide.entitlement.tip.1':
    'Setiap tahun punya jatah sendiri, jadi perubahan di sini hanya memengaruhi tahun yang dipilih.',
  // years
  'help.guide.years.title': 'Menambah dan berpindah tahun',
  'help.guide.years.goal': 'Rencanakan tahun depan dari sekarang, atau lihat kembali tahun lalu.',
  'help.guide.years.step.1':
    'Klik + di kanan tahun untuk menambah tahun berikutnya, atau + di kiri untuk tahun sebelumnya.',
  'help.guide.years.step.2': 'Berpindah tahun dengan panah atau chip tahun di bawahnya.',
  'help.guide.years.step.3':
    'Untuk menghapus tahun, arahkan kursor ke chip-nya dan klik minus kecil. Entrinya ikut hilang, jadi konfirmasi dengan hati-hati.',
  'help.guide.years.result': 'Setiap tahun menyimpan jatah dan entrinya sendiri; sisa cuti menghubungkannya.',
  // company-holidays
  'help.guide.company-holidays.title': 'Menandai libur perusahaan',
  'help.guide.company-holidays.goal': 'Blokir hari saat seluruh perusahaan libur tanpa menghabiskan jatah siapa pun.',
  'help.guide.company-holidays.step.1':
    'Buka “Pengaturan” dan pastikan “Hari Libur Perusahaan” aktif. Ini aktif secara bawaan; bilah alat hanya menawarkan modenya selama aktif.',
  'help.guide.company-holidays.step.2': 'Kembali di kisi, alihkan bilah alat ke mode “Hari Libur Perusahaan”.',
  'help.guide.company-holidays.step.3': 'Klik hari-harinya. Warnanya jadi kuning ambar dan muncul di legenda.',
  'help.guide.company-holidays.result':
    'Libur perusahaan terlihat oleh semua yang digabung ke rencana dan tidak pernah mengurangi “Sisa”.',
  'help.guide.company-holidays.tip.1':
    'Siapa pun yang digabung bisa mengedit libur perusahaan, jadi sepakati siapa yang mengelolanya.',
  // public-holidays
  'help.guide.public-holidays.title': 'Menampilkan hari libur nasional',
  'help.guide.public-holidays.goal': 'Tampilkan hari libur nasional negara atau wilayah Anda di kisi.',
  'help.guide.public-holidays.step.1': 'Buka “Pengaturan” dan nyalakan “Hari Libur Nasional”.',
  'help.guide.public-holidays.step.2':
    'Klik “Tambah kalender”, lalu pilih negara dan, jika perlu, wilayah. Beri warna dan label jika mau.',
  'help.guide.public-holidays.step.3': 'Tutup “Pengaturan”. Hari libur muncul di kisi dan di legenda.',
  'help.guide.public-holidays.result':
    'Hari libur nasional ditandai dengan warna kalender dan tidak pernah dihitung terhadap jatah Anda.',
  'help.guide.public-holidays.tip.1':
    'Anda bisa menambahkan beberapa kalender, misalnya wilayah Anda dan wilayah rekan yang digabung.',
  // school-holidays
  'help.guide.school-holidays.title': 'Menampilkan libur sekolah',
  'help.guide.school-holidays.goal': 'Lihat libur sekolah wilayah Anda berdampingan dengan hari libur Anda sendiri.',
  'help.guide.school-holidays.step.1': 'Buka “Pengaturan” dan nyalakan “School Holidays”.',
  'help.guide.school-holidays.step.2':
    'Klik “Tambah kalender” dan pilih negara. Jika negara membagi kalendernya, pilih juga wilayah atau kelompoknya.',
  'help.guide.school-holidays.step.3':
    'Tutup “Pengaturan”. Setiap libur mendapat pita berwarna di bagian bawah hari-harinya.',
  'help.guide.school-holidays.result': 'Libur sekolah murni visual: tidak pernah mengurangi jatah siapa pun.',
  'help.guide.school-holidays.tip.1':
    'Wilayah tidak ada? Administrator dapat mengelola libur sekolah secara manual di “Admin”, “Personalisasi”, “Liburan sekolah”.',
  // weekends
  'help.guide.weekends.title': 'Memblokir akhir pekan dan mengatur awal minggu',
  'help.guide.weekends.goal': 'Jauhkan akhir pekan dari hitungan dan mulai minggu di hari yang biasa Anda pakai.',
  'help.guide.weekends.step.1': 'Buka “Pengaturan”.',
  'help.guide.weekends.step.2':
    'Nyalakan “Blokir Akhir Pekan” dan pilih hari mana yang dihitung sebagai akhir pekan Anda.',
  'help.guide.weekends.step.3': 'Di “Awal minggu”, pilih Senin atau Minggu.',
  'help.guide.weekends.result':
    'Hari yang diblokir tampak abu-abu di kisi dan tidak bisa dicatat secara tidak sengaja.',
  // leave-year
  'help.guide.leave-year.title': 'Mengatur tahun cuti',
  'help.guide.leave-year.goal':
    'Hitung jatah Anda berdasarkan tahun fiskal atau sejak tanggal mulai kerja, bukan Januari sampai Desember.',
  'help.guide.leave-year.step.1': 'Buka “Pengaturan” dan cari “Tahun cuti”.',
  'help.guide.leave-year.step.2':
    'Pilih “Kalender”, “Fiskal” (dengan bulan dan hari mulainya), atau “Tanggal masuk” (dengan tanggal Anda dipekerjakan).',
  'help.guide.leave-year.result':
    'Jatah, hari terpakai, dan sisa cuti mengikuti periode itu, dan kisi dimulai dari bulan pertamanya.',
  'help.guide.leave-year.tip.1':
    'Pengaturan ini bersifat pribadi: dalam rencana gabungan, setiap orang menyimpan tahun cuti dan angkanya sendiri.',
  // carry-over
  'help.guide.carry-over.title': 'Membawa sisa hari yang tak terpakai',
  'help.guide.carry-over.goal': 'Tambahkan sisa di akhir periode ke periode berikutnya.',
  'help.guide.carry-over.step.1': 'Buka “Pengaturan”.',
  'help.guide.carry-over.step.2': 'Nyalakan “Carry Over Cuti”.',
  'help.guide.carry-over.result':
    'Jumlah yang dibawa dihitung ulang di semua tahun Anda dan ditampilkan di bawah jatah.',
  'help.guide.carry-over.tip.1': 'Mematikannya mengembalikan setiap saldo bawaan ke nol.',
  // invite
  'help.guide.invite.title': 'Berencana bersama seseorang',
  'help.guide.invite.goal':
    'Gabungkan rencana Anda dengan pengguna TREK lain agar Anda saling melihat hari libur dalam satu kisi.',
  'help.guide.invite.step.1': 'Klik ikon orang di panel “Orang”.',
  'help.guide.invite.step.2': 'Pilih pengguna dan kirim undangan.',
  'help.guide.invite.step.3':
    'Ia menerima notifikasi dan menyetujui. Sampai saat itu undangan tampil sebagai tertunda.',
  'help.guide.invite.result':
    'Kedua rencana menyatu: setiap orang punya warna, Anda bisa saling mencatat hari, dan semuanya tersinkron langsung.',
  'help.guide.invite.tip.1':
    'Untuk membatalkan penggabungan, gunakan “Pisahkan” di “Pengaturan”. Entri setiap orang kembali ke rencananya sendiri.',
  'help.guide.invite.tip.2':
    'Jika orang lain hanya perlu melihat hari Anda, bagikan kalender Anda alih-alih menggabung.',
  // share-calendar
  'help.guide.share-calendar.title': 'Membagikan kalender hanya-baca',
  'help.guide.share-calendar.goal':
    'Biarkan seseorang melihat kapan Anda libur tanpa memberinya kendali atas rencana Anda.',
  'help.guide.share-calendar.step.1': 'Klik ikon bagikan di panel “Kalender yang Dibagikan”.',
  'help.guide.share-calendar.step.2': 'Pilih pengguna dan klik “Bagikan”. Tidak perlu persetujuan.',
  'help.guide.share-calendar.step.3':
    'Kalender yang dibagikan kepada Anda muncul di panel yang sama; ikon mata menyembunyikan satu, “Berhenti berbagi” mencabut milik Anda.',
  'help.guide.share-calendar.result':
    'Hari libur Anda muncul sebagai cincin berwarna di kisinya. Tidak ada yang Anda bagikan bisa diedit dari sana.',
  'help.guide.share-calendar.tip.1':
    'Berbagi dan menggabung independen: Anda bisa digabung dengan satu orang dan berbagi dengan yang lain.',
  'help.guide.share-calendar.tip.2': 'Arahkan kursor ke hari bercincin untuk melihat siapa yang libur dan berapa lama.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas adalah jejak perjalanan Anda di peta dunia: setiap negara yang pernah Anda datangi lewat sebuah perjalanan diwarnai, dan negara yang Anda kunjungi sebelum TREK bisa ditambahkan secara manual. Perbesar peta untuk melihat wilayah, simpan daftar impian berisi tempat yang masih ingin Anda lihat, dan baca angka-angka Anda di panel kaca di bagian bawah.',
  'help.ctx.atlas.bullet.1':
    'Peta: negara yang dikunjungi memakai warna yang tetap menjadi miliknya, negara yang direncanakan bergaris tepi putus-putus, negara di daftar impian berarsir diagonal, sisanya abu-abu. Arahkan kursor ke sebuah negara untuk melihat perjalanan, tempat, serta kunjungan pertama dan terakhirnya.',
  'help.ctx.atlas.bullet.2':
    'Pencarian di atas: ketik nama negara atau tempat. Memilih negara membawa peta terbang ke sana dan membuka popup-nya; memilih tempat mendarat di wilayahnya sehingga Anda bisa menandainya.',
  'help.ctx.atlas.bullet.3':
    '“Tampilkan negara yang direncanakan”, di kanan atas: menampilkan negara dari perjalanan Anda yang akan datang. Sakelar ini hanya muncul selama Anda memilikinya.',
  'help.ctx.atlas.bullet.4':
    'Panel di bawah: tab Statistik dengan negara, perjalanan, tempat, kota, hari, benua, dan rentetan Anda; tab Daftar Impian dengan apa yang masih menanti.',
  'help.ctx.atlas.bullet.5':
    'Wilayah: mulai tingkat zoom 5, peta beralih ke negara bagian dan provinsi, masing-masing bisa diklik untuk ditandai atau dihapus tandanya.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: dengan addon terhubung, sebuah panel di kiri statistik mencentang impian dan menambahkan negara dari rekaman Anda, tidak pernah tanpa konfirmasi Anda.',
  // mark-country
  'help.guide.mark-country.title': 'Menandai negara sebagai sudah dikunjungi',
  'help.guide.mark-country.goal':
    'Tambahkan negara yang pernah Anda kunjungi sebelum TREK, agar peta dan hitungan Anda menyertakannya.',
  'help.guide.mark-country.step.1': 'Ketik nama negara di kotak pencarian di bagian atas peta.',
  'help.guide.mark-country.step.2':
    'Pilih dari daftar. Peta terbang ke sana dan sebuah popup terbuka untuk negara itu.',
  'help.guide.mark-country.step.3': 'Pilih “Tandai sudah dikunjungi”.',
  'help.guide.mark-country.result':
    'Negara itu mendapat warnanya di peta dan Negara bertambah satu. Warna itu permanen: menandai negara lain tidak pernah mengacak warna yang sudah ada.',
  'help.guide.mark-country.tip.1':
    'Mengklik negara abu-abu di peta membuka popup yang sama; pencarian adalah jalan yang pasti untuk negara kecil.',
  'help.guide.mark-country.tip.2':
    'Negara yang Anda tandai secara manual selalu dihitung sebagai sudah dikunjungi, apa pun tanggal perjalanan ke sana.',
  // unmark-country
  'help.guide.unmark-country.title': 'Menghapus negara yang Anda tandai',
  'help.guide.unmark-country.goal': 'Mengeluarkan kembali negara yang ditandai manual dari peta.',
  'help.guide.unmark-country.step.1':
    'Cari negara itu dan pilih, atau klik di peta. Untuk negara yang Anda tandai sendiri, popup bertanya apakah negara itu mau dihapus.',
  'help.guide.unmark-country.step.2': 'Konfirmasi dengan “Hapus”.',
  'help.guide.unmark-country.result': 'Negara kembali abu-abu dan keluar dari hitungan Anda.',
  'help.guide.unmark-country.tip.1':
    'Hanya negara yang ditandai manual yang bisa dihapus dengan cara ini. Negara dengan perjalanan atau tempat tetap ada selama perjalanan atau tempat itu ada; “Hapus” juga tersedia di kartu detailnya di panel jika negara itu ditandai manual.',
  // country-details
  'help.guide.country-details.title': 'Melihat apa yang Anda lakukan di sebuah negara',
  'help.guide.country-details.goal':
    'Buka negara yang sudah dikunjungi dan lompat ke perjalanan yang membawa Anda ke sana.',
  'help.guide.country-details.step.1': 'Cari negara yang pernah Anda kunjungi.',
  'help.guide.country-details.step.2':
    'Pilih. Peta terbang ke sana dan panel di bawah memunculkan kartu dengan bendera, tempat, perjalanan, dan satu chip per perjalanan.',
  'help.guide.country-details.result': 'Klik chip perjalanan untuk membuka perjalanan itu di perencana.',
  'help.guide.country-details.tip.1':
    'Mengarahkan kursor ke negara di peta menampilkan angka yang sama ditambah kunjungan pertama dan terakhir.',
  // planned-countries
  'help.guide.planned-countries.title': 'Menampilkan negara yang akan Anda kunjungi',
  'help.guide.planned-countries.goal':
    'Bawa negara dari perjalanan Anda yang akan datang ke peta tanpa menghitungnya sebagai sudah dikunjungi.',
  'help.guide.planned-countries.step.1':
    'Nyalakan “Tampilkan negara yang direncanakan” di kanan atas. Angka di sebelahnya adalah jumlah negara yang menanti.',
  'help.guide.planned-countries.step.2':
    'Cari negara yang direncanakan dan pilih: panel menampilkan Direncanakan dan tooltip peta menunjukkan kapan Anda berangkat.',
  'help.guide.planned-countries.result':
    'Negara yang direncanakan tampil dengan garis tepi putus-putus, jadi tidak pernah terlihat seperti tempat yang sudah Anda datangi. Sakelar mengingat pilihan Anda.',
  'help.guide.planned-countries.tip.1':
    'Sebuah negara dihitung sebagai sudah dikunjungi begitu perjalanan ke sana dimulai; perjalanan yang sedang berlangsung juga dihitung. Perjalanan tanpa tanggal sama sekali tidak masuk statistik.',
  'help.guide.planned-countries.tip.2': 'Sakelar ini hanya ada selama Anda punya perjalanan yang akan datang.',
  // regions
  'help.guide.regions.title': 'Menandai wilayah',
  'help.guide.regions.goal':
    'Lebih rinci daripada negara: tandai negara bagian, provinsi, atau prefektur yang pernah Anda kunjungi.',
  'help.guide.regions.step.1':
    'Perbesar sebuah negara sampai wilayahnya muncul, mulai tingkat zoom 5. Mencari negara itu dan memilihnya membawa Anda cukup dekat.',
  'help.guide.regions.step.2':
    'Klik sebuah wilayah. Mengarahkan kursor menampilkan namanya; popup menunjukkan wilayah dan negaranya.',
  'help.guide.regions.step.3': 'Pilih “Tandai sudah dikunjungi”.',
  'help.guide.regions.result':
    'Wilayah terisi warna negaranya. Menandai wilayah juga menghitung negaranya sebagai sudah dikunjungi jika belum.',
  'help.guide.regions.tip.1':
    'Mengklik wilayah yang sudah dikunjungi menawarkan “Hapus”, baik Anda yang menandainya maupun sebuah tempat yang menempatkannya di sana.',
  'help.guide.regions.tip.2':
    'Wilayah yang berisi tempat sungguhan ditandai otomatis untuk Anda; tidak ada yang perlu dilakukan di sana.',
  // search-place
  'help.guide.search-place.title': 'Menemukan tempat dan menandai wilayahnya',
  'help.guide.search-place.goal':
    'Tandai Lombardia dengan mencari Milan, tanpa perlu tahu sebuah kota ada di wilayah mana.',
  'help.guide.search-place.step.1':
    'Ketik kota, landmark, atau alamat di kotak pencarian. Negara muncul lebih dulu; tempat yang cocok tampil di bawahnya di bagian Tempat.',
  'help.guide.search-place.step.2':
    'Pilih tempat itu. Peta terbang ke sana dan menentukan titik itu ada di wilayah mana.',
  'help.guide.search-place.step.3':
    'Pilih “Tandai sudah dikunjungi” untuk wilayah itu, atau “Tambah ke bucket list” jika masih menanti Anda.',
  'help.guide.search-place.result':
    'Wilayah ditandai, dan negaranya ikut. Negara tanpa data wilayah di paket peta kembali ke negara itu sendiri.',
  'help.guide.search-place.tip.1':
    'Tempat berasal dari pencarian yang sama seperti di seluruh TREK, jadi mengikuti penyedia yang disiapkan admin Anda.',
  // bucket-country
  'help.guide.bucket-country.title': 'Memasukkan negara ke daftar impian',
  'help.guide.bucket-country.goal':
    'Simpan daftar impian berisi negara langsung di peta, terpisah dari negara yang sudah Anda kunjungi.',
  'help.guide.bucket-country.step.1': 'Cari negara itu dan pilih, atau klik di peta.',
  'help.guide.bucket-country.step.2': 'Pilih “Tambah ke bucket list”.',
  'help.guide.bucket-country.step.3':
    'Pilih bulan dan tahun jika Anda sudah tahu kapan, lalu konfirmasi dengan “Tambah ke bucket list”.',
  'help.guide.bucket-country.result':
    'Negara digambar dengan arsiran diagonal dalam warna yang akan dipakainya begitu Anda tiba di sana, dan muncul di tab Daftar Impian di panel.',
  'help.guide.bucket-country.tip.1':
    'Popup yang sama menawarkan “Hapus dari bucket list” begitu negara itu ada di daftar.',
  'help.guide.bucket-country.tip.2':
    'Satu entri per tanggal target: negara yang sama bisa ada di daftar untuk dua bulan berbeda, tetapi tidak dua kali untuk bulan yang sama.',
  // bucket-place
  'help.guide.bucket-place.title': 'Menambahkan tempat ke daftar impian',
  'help.guide.bucket-place.goal':
    'Simpan kota, objek wisata, atau alamat yang Anda impikan, lengkap dengan koordinat dan tanggal target.',
  'help.guide.bucket-place.step.1': 'Buka tab Daftar Impian di panel bawah.',
  'help.guide.bucket-place.step.2': 'Klik “Tambah tempat”.',
  'help.guide.bucket-place.step.3':
    'Ketik namanya dan tekan tombol cari; pilih hasil yang cocok agar tempat itu punya koordinat. Mengetik nama saja dan melewati pencarian juga bisa.',
  'help.guide.bucket-place.step.4': 'Pilih bulan dan tahun jika mau, lalu klik “Tambah”.',
  'help.guide.bucket-place.result':
    'Tempat itu berada di urutan teratas daftar impian Anda dengan tanggal targetnya; tanda × di sebelahnya menghapusnya lagi.',
  'help.guide.bucket-place.tip.1':
    'Impian yang punya koordinat adalah yang nanti bisa dicentang Dawarich untuk Anda, begitu rekaman Anda menunjukkan Anda pernah di sana.',
  // stats
  'help.guide.stats.title': 'Membaca statistik Anda',
  'help.guide.stats.goal': 'Ketahui apa yang dihitung angka-angka di panel, dan apa yang tidak.',
  'help.guide.stats.step.1':
    'Negara adalah jumlah negara berbeda yang benar-benar pernah Anda kunjungi; yang direncanakan ditampilkan di sebelahnya, bukan di dalamnya. Perjalanan, Tempat, dan Hari adalah total dari semua perjalanan Anda. Kota dihitung dari alamat tempat-tempat Anda, jadi berupa perkiraan.',
  'help.guide.stats.step.2':
    'Benua menampilkan negara yang dikunjungi per benua; Antarktika bergabung ke barisan begitu Anda pernah ke sana. Lalu rentetan Anda, tahun berturut-turut dengan setidaknya satu perjalanan, dan berapa perjalanan yang Anda lakukan tahun ini.',
  'help.guide.stats.result':
    'Angka-angka mengikuti perjalanan Anda seiring Anda merencanakannya; tidak ada yang perlu dirawat di sini.',
  'help.guide.stats.tip.1':
    'Kota dibaca dari teks alamat, bukan dicari, jadi alamat pendek seperti “Osteria Francescana, Italy” atau yang berakhir dengan prefektur bisa menghasilkan wilayah, bukan kota.',
  'help.guide.stats.tip.2':
    'Negara yang Anda tandai manual dihitung di Negara dan benua, tetapi tidak membawa perjalanan, tempat, atau hari.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Koleksi',
  'help.ctx.collections.summary':
    'Collections adalah pustaka tempat Anda di luar perjalanan mana pun: daftar bernama berisi tempat yang Anda temukan dan ingin simpan, tiap tempat dengan status “Ide”, “Ingin ke sana”, atau “Dikunjungi”. Tempat disalin ke dalam dan ke luar perjalanan, tidak pernah ditautkan, sehingga daftar dan perjalanan tidak pernah saling mengubah.',
  'help.ctx.collections.bullet.1':
    'Bilah daftar di kiri: daftar Anda sendiri, daftar yang dibagikan kepada Anda, undangan yang menunggu persetujuan, “Semua tersimpan” sebagai gabungan semua yang Anda miliki, serta “Daftar baru” dan impor berkas di bagian atas.',
  'help.ctx.collections.bullet.2':
    'Header daftar yang terbuka: warna, sampul, deskripsi, dan tautannya, para anggota, serta aksi “Sunting”, “Ekspor”, dan “Bagikan” di kanan.',
  'help.ctx.collections.bullet.3':
    'Baris filter di atas tempat: status, kategori, penilaian, dan urutan, filter label, tombol + untuk menambah tempat, impor perjalanan, dan “Pilih” untuk aksi massal.',
  'help.ctx.collections.bullet.4':
    'Baris tempat: avatar, nama dan alamat, label dan kategori, serta pil status di kanan yang berganti dengan satu klik.',
  'help.ctx.collections.bullet.5':
    'Peta di kanan: satu pin per tempat yang punya koordinat, sakelar daftar atau peta, kotak pencarian, dan filter label. Mengklik pin membuka tempat itu.',
  'help.ctx.collections.bullet.6':
    'Lembar detail: klik sebuah baris untuk melihat sampul, kategori, label, status, deskripsi, dan tautan, dengan “Sunting”, “Salin ke perjalanan”, dan “Hapus dari daftar”.',
  // create-list
  'help.guide.create-list.title': 'Membuat daftar',
  'help.guide.create-list.goal': 'Mulai daftar bernama yang baru, dengan warna dan sampul, siap diisi tempat.',
  'help.guide.create-list.step.1': 'Klik “Daftar baru” di bagian atas bilah daftar.',
  'help.guide.create-list.step.2':
    'Beri nama daftar dan pilih warna. Gambar sampul, deskripsi, dan tautan bersifat opsional; Anda bisa menambahkannya nanti lewat “Sunting”.',
  'help.guide.create-list.step.3': 'Klik “Buat”.',
  'help.guide.create-list.result':
    'Daftar terbuka dalam keadaan kosong, dengan “Tambah tempat” dan “Impor dari perjalanan” sebagai dua cara mengisinya.',
  'help.guide.create-list.tip.1':
    'Sampul bisa berupa unggahan Anda sendiri atau gambar yang ditemukan lewat pencarian Unsplash di dialog yang sama.',
  // add-place
  'help.guide.add-place.title': 'Menambah tempat',
  'help.guide.add-place.goal':
    'Temukan sebuah tempat dan simpan ke daftar yang terbuka dengan nama, kategori, status, dan catatan sekaligus.',
  'help.guide.add-place.step.1': 'Klik + di baris filter di atas tempat.',
  'help.guide.add-place.step.2':
    'Ketik tempat di kolom pencarian dan pilih sebuah hasil. Nama, alamat, dan koordinat terisi darinya.',
  'help.guide.add-place.step.3':
    'Atur status dan, jika mau, kategori, deskripsi, dan tautan, lalu klik “Tambah”. Dialog tetap terbuka untuk tempat berikutnya; “Batal” menutupnya.',
  'help.guide.add-place.result': 'Tempat muncul di daftar dan, jika punya koordinat, sebagai pin di peta.',
  'help.guide.add-place.tip.1':
    'Dari dalam perjalanan, “Simpan ke Koleksi” di inspektur tempat atau menu tempat memasukkan tempat perjalanan ke sebuah daftar tanpa meninggalkan perjalanan.',
  'help.guide.add-place.tip.2':
    'Daftar harus milik Anda atau daftar tempat Anda menjadi editor atau admin; tombol + tidak ada di “Semua tersimpan” atau di daftar yang hanya Anda tinjau.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Mengimpor tempat dari perjalanan',
  'help.guide.import-from-trip.goal':
    'Bawa semua tempat dari satu perjalanan ke sebuah daftar sekaligus, alih-alih menyimpannya satu per satu.',
  'help.guide.import-from-trip.step.1':
    'Klik tombol impor dengan panah awan di baris filter. Pada daftar kosong, aksi yang sama ada di sebelah “Tambah tempat”.',
  'help.guide.import-from-trip.step.2': 'Pilih salah satu perjalanan Anda.',
  'help.guide.import-from-trip.step.3':
    'Centang tempat yang Anda inginkan. Tempat yang sudah ada di daftar tampak redup; tempat yang tidak dipegang hari mana pun dalam perjalanan sudah terpilih sejak awal. “Hanya yang baru” menyembunyikan yang sudah Anda miliki.',
  'help.guide.import-from-trip.step.4': 'Klik “Impor”. Tombol selalu menyebutkan berapa banyak yang akan ditambahkan.',
  'help.guide.import-from-trip.result':
    'Tempat disalin ke daftar dengan nama, alamat, koordinat, deskripsi, dan kategorinya. Perjalanan tetap seperti semula.',
  'help.guide.import-from-trip.tip.1':
    'Duplikat berdasarkan nama atau koordinat dilewati secara otomatis, jadi mengimpor dua kali tidak merugikan.',
  'help.guide.import-from-trip.tip.2':
    'Di dalam daftar tempat sebuah perjalanan, mode pilih menawarkan “Simpan ke Koleksi” untuk sekumpulan tempat yang Anda pilih sendiri.',
  // place-status
  'help.guide.place-status.title': 'Mengatur status tempat',
  'help.guide.place-status.goal':
    'Pantau mana yang masih ide, mana yang ada di daftar pendek, dan ke mana Anda sudah pergi.',
  'help.guide.place-status.step.1': 'Klik pil status di ujung kanan baris tempat. “Ide” menjadi “Ingin ke sana”.',
  'help.guide.place-status.step.2': 'Klik lagi untuk “Dikunjungi”, dan sekali lagi untuk kembali ke “Ide”.',
  'help.guide.place-status.result': 'Pil dan warnanya langsung berubah; filter status di atas daftar ikut menghitung.',
  'help.guide.place-status.tip.1':
    'Status adalah urusan Collections: menyalin tempat ke perjalanan tidak membawanya serta.',
  'help.guide.place-status.tip.2':
    'Dari sebuah perjalanan, “Simpan ke Koleksi” menampilkan pil status untuk tiap daftar yang memuat tempat itu, dan panel tempat punya aksi “Tandai dikunjungi” untuk sebuah pilihan.',
  // place-detail
  'help.guide.place-detail.title': 'Membuka tempat tersimpan',
  'help.guide.place-detail.goal':
    'Lihat semua hal tentang sebuah tempat dan lakukan sesuatu: sunting, salin ke perjalanan, hapus.',
  'help.guide.place-detail.step.1':
    'Klik baris tempat. Lembar detail terbuka di samping daftar dan peta bergeser ke tempat itu.',
  'help.guide.place-detail.step.2':
    'Di bagian bawah ada “Sunting”, “Salin ke perjalanan”, dan “Hapus dari daftar”; ikon kamera di sampul menukar foto otomatis dengan foto Anda sendiri.',
  'help.guide.place-detail.result':
    '“Sunting” membuka nama, kategori, label, alamat, koordinat, deskripsi, dan tautan untuk diubah langsung di lembar itu.',
  'help.guide.place-detail.tip.1':
    'Sampul diambil secara otomatis jika tempat tidak punya gambar sendiri. Unggahan Anda bisa berupa JPG, PNG, GIF, atau WebP hingga 20 MB.',
  'help.guide.place-detail.tip.2':
    'Anggota daftar yang dibagikan juga bisa memberi penilaian bintang di sini, dan filter penilaian di baris filter memakai rata-ratanya.',
  // labels
  'help.guide.labels.title': 'Mengelompokkan tempat dengan label',
  'help.guide.labels.goal': 'Beri daftar label miliknya sendiri, misalnya distrik atau hari, di luar kategori bersama.',
  'help.guide.labels.step.1': 'Buka pengelola label dari kontrol label di baris filter.',
  'help.guide.labels.step.2':
    'Ketik nama, pilih warna, dan klik “Tambah label”. Ubah nama, ganti warna, atau hapus label yang ada di dialog yang sama.',
  'help.guide.labels.step.3':
    'Nyalakan “Pilih”, centang tempat, dan klik “Beri label” di bilah pilihan. Satu tempat juga bisa menerima label lewat “Sunting” di lembar detailnya.',
  'help.guide.labels.step.4':
    'Pilih satu atau beberapa label di baris filter untuk mempersempit daftar dan peta ke tempat yang membawa salah satunya.',
  'help.guide.labels.result':
    'Tempat berlabel menampilkan labelnya di baris; filter label tersedia untuk setiap anggota, termasuk peninjau.',
  'help.guide.labels.tip.1':
    'Label hanya milik daftar tempat label itu dibuat. Memindahkan tempat ke daftar lain akan melepaskannya.',
  'help.guide.labels.tip.2': 'Mengelola dan memberi label memerlukan hak sunting pada daftar.',
  // filter-select
  'help.guide.filter-select.title': 'Memfilter dan memilih tempat',
  'help.guide.filter-select.goal': 'Persempit daftar dan lakukan aksi pada banyak tempat sekaligus.',
  'help.guide.filter-select.step.1':
    'Gunakan dropdown di baris filter: status, kategori, penilaian minimum, dan urutan. Masing-masing menunjukkan berapa banyak tempat yang akan tersisa.',
  'help.guide.filter-select.step.2': 'Klik “Pilih”. Setiap baris mendapat kotak centang dan bilah pilihan muncul.',
  'help.guide.filter-select.step.3':
    'Centang tempat atau gunakan “Pilih semua” untuk semua yang sedang terfilter, lalu pilih “Beri label”, “Pindahkan ke daftar”, “Duplikat ke daftar”, “Salin ke perjalanan”, atau “Hapus”.',
  'help.guide.filter-select.result':
    'Aksi berlaku untuk seluruh pilihan sekaligus. Tanda × di kanan keluar dari mode pilih.',
  'help.guide.filter-select.tip.1':
    '“Pilih semua” mengikuti filter, jadi memfilter ke “Ingin ke sana” lalu memilih semua adalah cara cepat untuk menangani daftar pendek.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Menyalin tempat ke perjalanan',
  'help.guide.copy-to-trip.goal': 'Ubah tempat tersimpan menjadi persinggahan di salah satu perjalanan Anda.',
  'help.guide.copy-to-trip.step.1':
    'Nyalakan “Pilih” dan centang tempat, atau buka satu tempat dan gunakan “Salin ke perjalanan” di lembar detailnya.',
  'help.guide.copy-to-trip.step.2': 'Klik “Salin ke perjalanan” di bilah pilihan.',
  'help.guide.copy-to-trip.step.3': 'Pilih perjalanannya. Kotak pencarian mempersempit daftar yang panjang.',
  'help.guide.copy-to-trip.result':
    'Tempat mendarat di daftar tempat perjalanan itu dengan nama, deskripsi, kategori, catatan, harga, koordinat, foto, dan tag. Tidak ada yang berubah di koleksi.',
  'help.guide.copy-to-trip.tip.1':
    'Peninjau daftar yang dibagikan juga bisa melakukannya; ini menyalin keluar dari daftar, bukan mengubahnya.',
  // share-list
  'help.guide.share-list.title': 'Membagikan daftar kepada seseorang',
  'help.guide.share-list.goal': 'Rencanakan sebuah daftar bersama orang lain di TREK ini, secara langsung.',
  'help.guide.share-list.step.1': 'Klik “Bagikan” di header daftar Anda.',
  'help.guide.share-list.step.2': 'Pilih pengguna dan sebuah peran: “Peninjau”, “Editor”, atau “Admin”.',
  'help.guide.share-list.step.3':
    'Klik “Kirim undangan”. Orang itu tampil sebagai “undangan tertunda” sampai ia menerima undangan di bilah daftarnya.',
  'help.guide.share-list.result':
    'Setelah diterima, daftar muncul di bawah “Dibagikan” untuknya dan setiap perubahan tersinkron langsung. Anggota dan perannya tetap bisa diubah di dialog yang sama.',
  'help.guide.share-list.tip.1':
    'Peninjau bisa melihat, menilai, dan menyalin tempat ke perjalanan mereka sendiri. Editor menambah dan menyunting tempat serta label. Admin juga bisa menghapus.',
  'help.guide.share-list.tip.2':
    'Hanya pemilik yang mengundang dan mengeluarkan orang; seorang anggota bisa keluar sendiri dari daftar yang dibagikan.',
  // export-list
  'help.guide.export-list.title': 'Mengekspor daftar sebagai berkas',
  'help.guide.export-list.goal': 'Serahkan daftar kepada seseorang di TREK lain, atau bawa ke aplikasi peta.',
  'help.guide.export-list.step.1': 'Klik “Ekspor” di header daftar.',
  'help.guide.export-list.step.2':
    'Pilih “Daftar TREK” untuk TREK lain, dengan label dan status, atau GPX untuk OsmAnd, Organic Maps, perangkat Garmin, dan aplikasi lain yang membaca waypoint.',
  'help.guide.export-list.result': 'Berkas terunduh. Setiap anggota daftar yang dibagikan boleh mengekspornya.',
  'help.guide.export-list.tip.1':
    'Tempat tanpa koordinat tidak bisa menjadi waypoint GPX; tempat itu dilewati dan TREK memberi tahu berapa banyak yang dilewati.',
  'help.guide.export-list.tip.2':
    'Penilaian, anggota, dan foto unggahan sengaja tidak ikut; semuanya milik TREK ini, bukan milik daftar.',
  // import-file
  'help.guide.import-file.title': 'Mengimpor daftar dari berkas',
  'help.guide.import-file.goal':
    'Masukkan berkas daftar TREK atau berkas GPX, sebagai daftar baru atau ke dalam daftar yang Anda miliki.',
  'help.guide.import-file.step.1': 'Klik tombol impor dengan panah unggah di sebelah “Daftar baru” di bilah daftar.',
  'help.guide.import-file.step.2':
    'Pilih berkasnya. TREK menunjukkan isinya sebelum terjadi apa pun: nama, berapa banyak tempat dan label.',
  'help.guide.import-file.step.3':
    'Pertahankan “Daftar baru” dan ubah namanya jika mau, atau pilih “Tambahkan ke daftar” untuk memasukkan tempat ke daftar yang bisa Anda sunting, lalu klik “Impor”.',
  'help.guide.import-file.result':
    'Anda tiba di daftar dengan tempat yang diimpor. Menambahkan ke daftar hanya pernah menambah; tempat yang sudah ada tetap mempertahankan status, catatan, dan labelnya.',
  'help.guide.import-file.tip.1':
    'Dari GPX, setiap waypoint yang bernama menjadi tempat; track adalah garis dan dilewati, dan pratinjau menyebutkan berapa banyak titiknya.',
  'help.guide.import-file.tip.2':
    'Berkas yang bukan daftar TREK maupun GPX ditolak dengan alasannya; satu tempat yang tidak terbaca dilewati, bukan seluruh berkas.',
  // edit-list
  'help.guide.edit-list.title': 'Menyunting atau menghapus daftar',
  'help.guide.edit-list.goal': 'Ubah nama, warna, sampul, deskripsi, atau tautan daftar, atau hapus daftarnya.',
  'help.guide.edit-list.step.1': 'Klik “Sunting” di header daftar. Hanya pemilik yang melihatnya.',
  'help.guide.edit-list.step.2':
    'Ubah apa yang Anda mau dan klik “Simpan”. “Hapus daftar” di kiri bawah menghapus daftar beserta semua tempatnya, setelah konfirmasi.',
  'help.guide.edit-list.result': 'Header langsung memakai warna, sampul, dan deskripsi yang baru.',
  'help.guide.edit-list.tip.1':
    'Menghapus daftar tidak bisa dibatalkan. Ekspor dulu jika Anda ingin menyimpan salinannya.',
  // all-saved
  'help.guide.all-saved.title': 'Mencari di seluruh pustaka Anda',
  'help.guide.all-saved.goal': 'Lihat semua daftar yang Anda miliki sekaligus.',
  'help.guide.all-saved.step.1':
    'Klik “Semua tersimpan” di bilah daftar. Ini menggabungkan tempat dari setiap daftar yang Anda miliki atau miliki bersama.',
  'help.guide.all-saved.step.2':
    'Gunakan kotak pencarian dan filter seperti di daftar mana pun; “Pilih” juga berfungsi di sini untuk menyalin ke perjalanan.',
  'help.guide.all-saved.result':
    'Satu tampilan atas semua tempat tersimpan Anda, tanpa menambah atau mengimpor, karena tidak ada satu daftar tertentu untuk menampungnya.',
  'help.guide.all-saved.tip.1': 'Label berlaku per daftar, jadi filter label tidak ditawarkan di “Semua tersimpan”.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Journey',
  'help.ctx.journey.summary':
    'Journey adalah jurnal perjalanan Anda yang mengutamakan foto. Setiap journey terikat pada satu perjalanan atau lebih dan tumbuh hari demi hari dari entri berisi cerita, foto, suasana hati, dan cuaca. Layar ini mencantumkan journey Anda; buka salah satunya untuk menulis.',
  'help.ctx.journey.bullet.1':
    'Banner di bagian atas menampilkan journey yang sedang berjalan, atau yang terbaru, beserta jumlah entri, foto, dan tempatnya. “Lanjutkan menulis” membukanya di hari ini.',
  'help.ctx.journey.bullet.2':
    'Di bawahnya, satu kartu per journey dengan sampul, subjudul, tanggal, dan jumlahnya. Klik sebuah kartu untuk membukanya.',
  'help.ctx.journey.bullet.3': 'Kartu terakhir di grid, “Buat Journey baru”, memulai journey dari perjalanan Anda.',
  // create-journey
  'help.guide.create-journey.title': 'Membuat journey',
  'help.guide.create-journey.goal':
    'Mulai jurnal untuk sebuah perjalanan, dengan tempat-tempat perjalanan itu sudah menunggu sebagai saran.',
  'help.guide.create-journey.step.1': 'Klik “Buat Journey baru”, kartu terakhir di grid.',
  'help.guide.create-journey.step.2':
    'Beri nama dan, jika mau, subjudul, lalu centang perjalanan yang menjadi bagiannya. Penghitung menunjukkan berapa banyak tempat yang akan masuk.',
  'help.guide.create-journey.step.3': 'Klik “Buat Journey”.',
  'help.guide.create-journey.result':
    'Jurnal terbuka. Setiap tempat dari perjalanan yang ditautkan duduk di linimasa sebagai saran, satu untuk setiap hari tempat itu berada, siap untuk ditulis.',
  'help.guide.create-journey.tip.1': 'Perjalanan lain bisa ditautkan belakangan dari “Pengaturan Journey”.',
  'help.guide.create-journey.tip.2': 'Journey tanpa perjalanan juga bisa; Anda lalu menambahkan entri secara manual.',
  // open-journey
  'help.guide.open-journey.title': 'Membuka journey',
  'help.guide.open-journey.goal': 'Masuk ke sebuah jurnal, dan tahu di mana ia terbuka.',
  'help.guide.open-journey.step.1':
    'Klik sebuah kartu. Masing-masing menampilkan sampul, tanggal, dan berapa banyak entri, foto, dan tempat yang dimiliki journey itu.',
  'help.guide.open-journey.result':
    'Journey yang sedang berjalan terbuka di hari ini, atau di entri terakhir sebelum hari ini jika belum ada yang ditulis; journey yang sudah selesai terbuka di awal.',
  'help.guide.open-journey.tip.1':
    'Sampulnya adalah foto pertama journey kecuali Anda menetapkannya di “Pengaturan Journey”.',
  // continue-writing
  'help.guide.continue-writing.title': 'Melanjutkan journey yang sedang berjalan',
  'help.guide.continue-writing.goal': 'Langsung masuk ke halaman hari ini dari journey yang sedang Anda jalani.',
  'help.guide.continue-writing.step.1':
    'Klik “Lanjutkan menulis” di banner bagian atas. Banner itu menampilkan journey yang sedang berjalan, atau yang terbaru jika tidak ada.',
  'help.guide.continue-writing.result':
    'Jurnal terbuka di hari ini, atau di entri terakhir sebelum hari ini jika belum ada yang ditulis.',
  'help.guide.continue-writing.tip.1':
    'Banner juga menawarkan saran untuk perjalanan yang belum punya journey; “Tutup” menyembunyikan saran itu.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Jurnal',
  'help.ctx.journey-detail.summary':
    'Satu journey yang terbuka: linimasa di kiri, hari demi hari, dan peta di kanan dengan setiap entri serta tempat-tempat dari perjalanan yang ditautkan. Semua yang menambah isi jurnal ada di bagian atas; header memuat jumlah, “Studio”, sakelar saran, dan “Pengaturan Journey”.',
  'help.ctx.journey-detail.bullet.1':
    'Header: sampul, judul dan subjudul, jumlah hari, tempat, entri, dan foto, serta di kanan “Studio”, sakelar saran, dan “Pengaturan Journey”.',
  'help.ctx.journey-detail.bullet.2':
    'Toolbar: tab “Linimasa” dan “Galeri”, “Cari di perjalanan ini”, dan “Tambah Entri”.',
  'help.ctx.journey-detail.bullet.3':
    'Linimasa: satu bagian per hari dengan + untuk menambah entri di hari itu; kartu entri dengan foto, suasana hati, cuaca, dan cerita; saran dari perjalanan dalam gaya yang lebih terang dengan “Abaikan saran ini”.',
  'help.ctx.journey-detail.bullet.4':
    'Peta: entri sebagai pin, dihubungkan berdasarkan urutan tanggal oleh garis putus-putus, tempat-tempat perjalanan, dan jalur GPX apa pun yang diimpor ke perjalanan itu.',
  'help.ctx.journey-detail.bullet.5':
    '“Pengaturan Journey”: sampul, nama dan subjudul, jalur di peta, bidang entri, saran yang diabaikan, perjalanan yang ditautkan, kontributor, berbagi publik, arsip, dan hapus.',
  'help.ctx.journey-detail.bullet.6':
    'Dua tombol bulat melayang di atas linimasa yang panjang: kembali ke atas, dan lompat ke entri terakhir.',
  // add-entry
  'help.guide.add-entry.title': 'Menulis entri',
  'help.guide.add-entry.goal': 'Tambahkan cerita sebuah hari dengan judul, teks, suasana hati, dan cuaca.',
  'help.guide.add-entry.step.1': 'Klik “Tambah Entri” di toolbar, atau + di header hari untuk memulai di hari itu.',
  'help.guide.add-entry.step.2':
    'Beri nama momen itu dan tulis ceritanya. Toolbar di atas teks menambahkan tebal, miring, judul, kutipan, tautan, dan daftar dalam Markdown.',
  'help.guide.add-entry.step.3':
    'Pilih suasana hati dan cuaca, periksa tanggalnya, dan sematkan lokasi jika mau: cari tempat atau gunakan posisi Anda saat ini.',
  'help.guide.add-entry.step.4': 'Klik “Simpan”.',
  'help.guide.add-entry.result':
    'Entri muncul di harinya di linimasa dan sebagai pin di peta. Jumlahnya diperbarui di header.',
  'help.guide.add-entry.tip.1': 'Menulis ke dalam saran memakai editor yang sama, dengan tempat yang sudah ditetapkan.',
  'help.guide.add-entry.tip.2':
    'Tag di bagian bawah adalah teks bebas, “hidden gem” atau “best meal”, dan pencarian menemukannya.',
  // entry-photos
  'help.guide.entry-photos.title': 'Menambahkan foto dan video ke entri',
  'help.guide.entry-photos.goal': 'Letakkan gambar di sebuah hari; yang pertama menjadi sampul entri.',
  'help.guide.entry-photos.step.1': 'Buka menu entri dengan ⋯ di kartunya dan pilih “Sunting”.',
  'help.guide.entry-photos.step.2':
    'Klik “Unggah foto” dan pilih berkasnya. “Dari Galeri” mengambil gambar yang sudah ada di galeri journey; “External photos” mencari pustaka Immich atau Synology yang terhubung untuk hari itu.',
  'help.guide.entry-photos.step.3':
    'Arahkan kursor ke sebuah gambar untuk “Jadikan ke-1” guna memilih sampul, lalu klik “Simpan”.',
  'help.guide.entry-photos.result': 'Foto tampil di kartu dan di galeri; yang pertama menjadi thumbnail di mana-mana.',
  'help.guide.entry-photos.tip.1':
    'Video masuk ke entri dengan cara yang sama: mp4, m4v, webm, atau mov hingga 500 MB, disimpan apa adanya seperti saat diunggah.',
  'help.guide.entry-photos.tip.2':
    'Berkas HEIC dari iPhone dikonversi ke JPEG saat diunggah, yang menghilangkan metadata GPS dan kameranya.',
  // suggestions
  'help.guide.suggestions.title': 'Memakai atau mengabaikan saran',
  'help.guide.suggestions.goal':
    'Ubah tempat-tempat perjalanan Anda menjadi entri, dan singkirkan yang tidak akan Anda tulis.',
  'help.guide.suggestions.step.1':
    'Saran adalah kartu yang lebih terang dengan nama tempat dalam huruf miring. Klik untuk membuka editor dengan tempat dan hari yang sudah ditetapkan.',
  'help.guide.suggestions.step.2':
    'Klik “Abaikan saran ini” pada kartu yang tidak akan Anda pakai. Kartu itu keluar dari linimasa tanpa dihapus, dan sinkronisasi perjalanan tidak akan menawarkannya lagi.',
  'help.guide.suggestions.step.3':
    'Berubah pikiran? “Pengaturan Journey” menunjukkan berapa banyak yang diabaikan, dan “Kembalikan saran yang diabaikan” mengembalikan semuanya.',
  'help.guide.suggestions.result':
    'Linimasa hanya berisi apa yang memang ingin Anda tulis; sakelar di header menyembunyikan semua saran sekaligus saat Anda membaca.',
  'help.guide.suggestions.tip.1': 'Tempat yang berlangsung selama dua hari memberi saran di masing-masing hari.',
  'help.guide.suggestions.tip.2':
    'Saran tidak pernah dihitung dalam statistik; hanya entri yang ditulis yang dihitung.',
  // add-on-day
  'help.guide.add-on-day.title': 'Menambahkan entri di hari yang sudah lewat',
  'help.guide.add-on-day.goal': 'Menulis tentang hari yang sudah berlalu tanpa memperbaiki tanggalnya belakangan.',
  'help.guide.add-on-day.step.1': 'Klik + di header hari itu.',
  'help.guide.add-on-day.step.2':
    'Editor terbuka dengan tanggal itu sudah ditetapkan. Tulis dan “Simpan” seperti biasa.',
  'help.guide.add-on-day.result': 'Entri langsung mendarat di hari yang tepat.',
  'help.guide.add-on-day.tip.1': 'Dalam satu hari, panah di menu entri memindahkannya lebih awal atau lebih akhir.',
  // pros-cons
  'help.guide.pros-cons.title': 'Menambahkan penilaian',
  'help.guide.pros-cons.goal': 'Rangkum sebuah hari dengan apa yang hebat dan apa yang tidak.',
  'help.guide.pros-cons.step.1':
    'Di editor, cari “Pro & Kontra” di bawah cerita. Ketik satu poin ke “Pro” atau “Kontra” dan gunakan “Tambah lagi” untuk poin berikutnya.',
  'help.guide.pros-cons.step.2': 'Simpan. Penilaian tampil di kartu sebagai dua daftar pendek.',
  'help.guide.pros-cons.result': 'Jempol ke atas dan jempol ke bawah sekali pandang, di bawah cerita.',
  'help.guide.pros-cons.tip.1':
    'Journey yang tidak memakai penilaian bisa mematikan bagian ini di bawah “Bidang catatan” di “Pengaturan Journey”.',
  // search-journey
  'help.guide.search-journey.title': 'Menemukan sesuatu di jurnal yang panjang',
  'help.guide.search-journey.goal': 'Sampai ke entri yang Anda maksud tanpa menggulir berminggu-minggu.',
  'help.guide.search-journey.step.1':
    'Ketik ke “Cari di perjalanan ini” di toolbar. Linimasa tersaring saat Anda mengetik, mencakup judul, cerita, tempat, dan tag. Aksen dan huruf besar-kecil tidak berpengaruh.',
  'help.guide.search-journey.step.2':
    'Sakelar saran di header menyembunyikan kartu yang belum ditulis saat Anda membaca. Begitu linimasa panjang, dua tombol bulat melayang di atas tepi bawahnya: kembali ke atas, dan lompat ke entri terakhir.',
  'help.guide.search-journey.result':
    'Hanya entri yang cocok yang tinggal; kosongkan kotaknya untuk melihat semuanya lagi.',
  'help.guide.search-journey.tip.1':
    'Journey yang sedang berjalan terbuka di hari ini, jadi halaman saat ini biasanya sudah terlihat.',
  'help.guide.search-journey.tip.2':
    'Tag juga dihitung: mencari “hidden gem” menemukan setiap entri yang diberi tag itu.',
  // gallery-map
  'help.guide.gallery-map.title': 'Menjelajahi galeri dan peta',
  'help.guide.gallery-map.goal': 'Lihat seluruh journey sebagai gambar, dan sebagai tempat di peta.',
  'help.guide.gallery-map.step.1':
    'Beralih ke “Galeri” di toolbar: setiap foto dari setiap entri, ditambah gambar yang diunggah langsung ke galeri. Klik salah satunya untuk lightbox.',
  'help.guide.gallery-map.step.2':
    'Peta di kanan menampilkan entri sebagai pin dalam urutan tanggal, tempat-tempat dari perjalanan yang ditautkan, dan jalur GPX apa pun yang diimpor ke perjalanan itu, dalam warna yang dimilikinya di perencana.',
  'help.guide.gallery-map.result':
    'Arahkan kursor ke sebuah jalur untuk melihat namanya. Garis putus-putus antar entri digambar oleh TREK; jalur adalah rute yang benar-benar Anda rekam.',
  'help.guide.gallery-map.tip.1': 'Jalur bisa dimatikan untuk sebuah journey di bawah “Pengaturan Journey”.',
  'help.guide.gallery-map.tip.2':
    'Foto galeri yang punya lokasi juga muncul di peta publik, jika “Galeri” dan “Peta” sama-sama dibagikan.',
  // entry-fields
  'help.guide.entry-fields.title': 'Mematikan bidang entri',
  'help.guide.entry-fields.goal': 'Batasi editor pada apa yang dipakai journey ini.',
  'help.guide.entry-fields.step.1': 'Buka “Pengaturan Journey” dari header.',
  'help.guide.entry-fields.step.2':
    'Di bawah “Bidang catatan”, matikan “Suasana hati”, “Cuaca”, atau “Kelebihan & kekurangan”.',
  'help.guide.entry-fields.result':
    'Editor berhenti menanyakannya. Tidak ada tulisan yang hilang: menyalakan kembali sebuah bidang memunculkan nilai yang tersimpan, dan journey yang dibagikan menyembunyikan bidang yang sama.',
  'help.guide.entry-fields.tip.1': 'Sakelarnya berlaku per journey, jadi perjalanan kerja dan liburan bisa berbeda.',
  // link-trip
  'help.guide.link-trip.title': 'Menautkan perjalanan lain',
  'help.guide.link-trip.goal': 'Bawa tempat-tempat dari perjalanan kedua ke dalam jurnal sebagai saran.',
  'help.guide.link-trip.step.1': 'Buka “Pengaturan Journey” dari header.',
  'help.guide.link-trip.step.2': 'Di bawah perjalanan yang ditautkan, klik “Tambah Perjalanan”.',
  'help.guide.link-trip.step.3': 'Pilih perjalanannya.',
  'help.guide.link-trip.result':
    'Tempat-tempatnya tiba di linimasa sebagai saran pada hari masing-masing, dan jalur GPX-nya bergabung ke peta.',
  'help.guide.link-trip.tip.1':
    'Tanda × di sebelah perjalanan yang ditautkan melepas tautannya lagi; entri yang Anda tulis tetap ada.',
  'help.guide.link-trip.tip.2':
    'Entri pada sebuah hari hanya dihitung sekali, berapa pun perjalanan yang mencakup hari itu.',
  // share-public
  'help.guide.share-public.title': 'Membagikan journey secara publik',
  'help.guide.share-public.goal': 'Beri orang tanpa akun TREK sebuah tautan hanya-baca.',
  'help.guide.share-public.step.1': 'Buka “Pengaturan Journey” dan cari “Berbagi Publik”.',
  'help.guide.share-public.step.2': 'Klik “Buat tautan berbagi”.',
  'help.guide.share-public.step.3':
    'Pilih apa yang dilihat pengunjung: “Linimasa”, “Galeri”, dan “Peta” adalah sakelar terpisah. “Salin” menaruh tautan di papan klip Anda.',
  'help.guide.share-public.result':
    'Siapa pun yang punya tautan melihat bagian yang diaktifkan dan tidak ada yang lain; bidang yang Anda matikan di “Bidang catatan” tetap tersembunyi di sana juga.',
  'help.guide.share-public.tip.1':
    'Foto muncul di peta publik hanya jika “Galeri” dan “Peta” sama-sama menyala; dengan “Peta” mati, koordinatnya dihapus sebelum meninggalkan server.',
  'help.guide.share-public.tip.2': 'Hapus tautan di tempat yang sama untuk mengakhiri berbagi.',
  // contributors
  'help.guide.contributors.title': 'Menulis bersama',
  'help.guide.contributors.goal': 'Biarkan teman seperjalanan menambahkan entri dan foto mereka sendiri.',
  'help.guide.contributors.step.1': 'Buka “Pengaturan Journey” dan gulir ke kontributor.',
  'help.guide.contributors.step.2': 'Klik “Undang Kontributor” dan cari pengguna berdasarkan nama atau email.',
  'help.guide.contributors.step.3': 'Pilih peran dan konfirmasi.',
  'help.guide.contributors.result':
    'Journey muncul di daftar mereka dan entri mereka membawa nama mereka. Hapus kontributor dengan tanda × di sebelahnya.',
  'help.guide.contributors.tip.1':
    'Kontributor adalah untuk orang-orang di TREK ini. Untuk yang lain ada tautan publik.',
  // studio
  'help.guide.studio.title': 'Menata journey sebagai buku foto',
  'help.guide.studio.goal': 'Ubah jurnal menjadi halaman yang bisa dicetak.',
  'help.guide.studio.step.1': 'Klik “Studio” di header. Perancang terbuka di atas journey.',
  'help.guide.studio.step.2':
    'Nama journey di sisi kiri bilah atas adalah jalan kembali; ia mengantar Anda ke tempat semula.',
  'help.guide.studio.result':
    'Rel halaman di kiri, spread di meja kerja, properti di kanan. “Auto layout” membangun buku dari entri Anda; “Export” membuat PDF siap cetak.',
  'help.guide.studio.tip.1': 'Studio membutuhkan jendela selebar minimal 1024 px dan tidak ditawarkan di ponsel.',
  'help.guide.studio.tip.2':
    'Buku mewarisi akses journey: siapa pun yang boleh membaca journey boleh membukanya, siapa pun yang boleh menyunting boleh menyimpan.',
  // archive-journey
  'help.guide.archive-journey.title': 'Mengarsipkan atau menghapus journey',
  'help.guide.archive-journey.goal': 'Tutup journey yang sudah selesai, atau hapus untuk selamanya.',
  'help.guide.archive-journey.step.1': 'Buka “Pengaturan Journey”.',
  'help.guide.archive-journey.step.2':
    'Di bagian bawah, “Arsipkan Perjalanan” mengakhirinya dan menandainya sebagai diarsipkan; “Pulihkan Perjalanan” mengembalikannya. “Hapus” menghapusnya beserta semua entri dan foto, setelah konfirmasi.',
  'help.guide.archive-journey.result':
    'Journey yang diarsipkan tetap bisa dibaca dan dibagikan; hanya saja tidak lagi terbuka di hari ini.',
  'help.guide.archive-journey.tip.1':
    'Penghapusan tidak bisa dibatalkan, dan tidak menyentuh perjalanan yang pernah ditautkan ke journey itu.',
  'help.guide.archive-journey.tip.2': 'Sampul, nama, dan subjudul ada di dialog yang sama, di bagian atas.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio menata sebuah perjalanan menjadi buku foto yang siap cetak. Studio terbuka di atas jurnal: bilah halaman dan konten di kiri, halaman ganda yang sedang Anda kerjakan di tengah, propertinya di kanan. Auto layout membangun draf pertama dari entri Anda; setelah itu semuanya terserah Anda untuk dipindahkan, dipotong, dan ditata ulang, dengan Undo untuk setiap langkah.',
  'help.ctx.journey-studio.bullet.1':
    'Bilah atas: Back to the journey, Book view, Undo dan Redo, Page format, Auto layout, dan Export. Tanda “Tersimpan” di samping judul memberi tahu Anda kapan buku sudah disimpan.',
  'help.ctx.journey-studio.bullet.2':
    'Bilah samping di kiri dengan lima bagian: Pages, Content (foto dan entri perjalanan), Elements (teks, bentuk, garis, kisi, bingkai, ikon), “Perjalanan” (peta, negara, bendera, dan tanda yang dibangun dari perjalanan), dan Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Area kerja: halaman ganda saat ini dengan margin bleed dan margin amannya, bilah zoom di bawahnya, Fit to view, dan “Unduh halaman ganda ini” di kanan.',
  'help.ctx.journey-studio.bullet.4':
    'Properties di kanan: posisi dan ukuran, potongan dan titik fokus, Fill atau Fit, tampilan, sudut, bingkai, urutan tumpukan, dan kunci dari apa pun yang dipilih; nomor halaman dan dokumen jika tidak ada yang dipilih.',
  'help.ctx.journey-studio.bullet.5':
    'Buku ini berbentuk buku jilid: sampul, satu halaman pertama, halaman-halaman ganda, satu halaman terakhir, dan sampul belakang. Nomor halaman dihitung dari halaman pertama dan dicetak seperti yang ditampilkan.',
  'help.ctx.journey-studio.bullet.6':
    'Beberapa orang bisa mendesain sekaligus: semua orang melihat penunjuk orang lain beserta namanya, dan menyimpan versi yang sudah diubah orang lain akan kembali sebagai konflik, bukan menimpa pekerjaan mereka.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Membangun buku secara otomatis',
  'help.guide.studio-auto-layout.goal':
    'Dapatkan draf pertama yang lengkap dari entri dan foto jurnal dengan satu klik.',
  'help.guide.studio-auto-layout.step.1': 'Klik Auto layout di bilah atas.',
  'help.guide.studio-auto-layout.step.2':
    'Pilih “Seluruh buku”: ini mengganti setiap halaman, dengan tetap mempertahankan judul dan pengaturan halaman Anda. “Halaman ini” hanya membangun ulang halaman yang ada di layar, dan ditawarkan pada halaman ganda yang berasal dari sebuah entri.',
  'help.guide.studio-auto-layout.step.3':
    'Periksa bilah halaman. Undo mengembalikan seluruh tata letak jika Anda lebih suka yang sebelumnya.',
  'help.guide.studio-auto-layout.result':
    'Satu halaman ganda per entri, berurutan, dengan foto, judul, dan kisahnya sudah ditempatkan untuk Anda. Setiap elemen tetap mengikuti entrinya sampai Anda mengeditnya.',
  'help.guide.studio-auto-layout.tip.1': 'Kedua pilihan itu adalah langkah undo biasa, jadi cobalah dengan bebas.',
  'help.guide.studio-auto-layout.tip.2':
    'Elemen yang diikat Auto layout ke sebuah entri terus mengikuti perubahan entri itu sampai Anda menyentuhnya di Properties; itu memutus tautannya.',
  // studio-pages
  'help.guide.studio-pages.title': 'Menambah, memindahkan, dan menghapus halaman ganda',
  'help.guide.studio-pages.goal': 'Bentuk buku halaman demi halaman.',
  'help.guide.studio-pages.step.1':
    'Buka Pages di bilah samping. Thumbnail-nya adalah buku dalam urutannya: sampul, halaman pertama, halaman ganda, halaman terakhir, sampul belakang.',
  'help.guide.studio-pages.step.2':
    '“Tambah halaman” di bagian bawah menempatkan halaman ganda baru sebelum halaman terakhir; tanda + di antara dua thumbnail menyisipkannya tepat di sana.',
  'help.guide.studio-pages.step.3':
    'Arahkan kursor ke thumbnail untuk melihat tindakannya: “Pindah ke depan”, “Pindah ke belakang”, “Duplikat halaman”, dan “Hapus halaman”. Klik thumbnail untuk membuka halaman ganda itu di area kerja.',
  'help.guide.studio-pages.result':
    'Sampul, halaman pertama dan terakhir, serta sampul belakang tetap di tempatnya; halaman ganda baru selalu masuk di antaranya.',
  'help.guide.studio-pages.tip.1':
    'Book view di bilah atas menampilkan seluruh buku sebagai lembaran, seperti saat dijilid.',
  'help.guide.studio-pages.tip.2':
    'Nomor halaman diaktifkan di bawah “Dokumen” di Properties, saat tidak ada yang dipilih.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Menerapkan tata letak ke halaman ganda',
  'help.guide.studio-layouts.goal': 'Beri halaman ganda susunan bingkai foto dan teks yang sudah jadi.',
  'help.guide.studio-layouts.step.1':
    'Buka Layouts di bilah samping. Tiga belas tata letak halaman ganda, dan satu set terpisah untuk sampul, sampul belakang, dan halaman tunggal.',
  'help.guide.studio-layouts.step.2':
    'Klik salah satu. Halaman ganda di area kerja mengambil bingkainya; foto dan teks yang sudah Anda miliki dituangkan ke dalamnya.',
  'help.guide.studio-layouts.result':
    'Bingkai kosong menunggu konten: seret foto dari Content ke salah satunya, atau gunakan Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Tata letak adalah langkah undo seperti yang lain.',
  // studio-content
  'help.guide.studio-content.title': 'Menempatkan foto dan entri di halaman',
  'help.guide.studio-content.goal': 'Bawa materi perjalanan itu sendiri ke halaman ganda.',
  'help.guide.studio-content.step.1':
    'Buka Content di bilah samping. Photos mencantumkan setiap gambar dari perjalanan; Entries mencantumkan entri beserta teksnya.',
  'help.guide.studio-content.step.2':
    'Seret foto ke halaman ganda, atau ke bingkai kosong, atau klik Add to this page di bawahnya. “Unggah foto” menambahkan gambar yang belum ada di perjalanan.',
  'help.guide.studio-content.step.3':
    'Di bawah sebuah entri, Title, Story, dan Place menempatkan teks itu di halaman sebagai elemen teks; tanggal dan koordinat datang sebagai tanda, dan foto entri itu tercantum tepat di sana.',
  'help.guide.studio-content.result':
    'Foto yang dijatuhkan menjadi elemen foto; teks terus mengikuti entri sampai Anda mengeditnya.',
  'help.guide.studio-content.tip.1': 'Kotak pencarian di bagian atas Content menyaring kedua daftar.',
  'help.guide.studio-content.tip.2':
    'Menjatuhkan berkas dari desktop Anda ke area kerja mengunggah dan menempatkannya sekaligus.',
  // studio-elements
  'help.guide.studio-elements.title': 'Menambahkan teks, bentuk, dan ikon',
  'help.guide.studio-elements.goal': 'Hiasi halaman ganda lebih dari sekadar foto dan kisah.',
  'help.guide.studio-elements.step.1': 'Buka Elements di bilah samping.',
  'help.guide.studio-elements.step.2':
    'Klik gaya teks untuk judul atau keterangan, sebuah bentuk, garis, kisi, bingkai kosong dengan gaya bingkai, atau ikon dari pustaka yang bisa dicari. Masing-masing mendarat di tengah halaman ganda, siap dipindahkan.',
  'help.guide.studio-elements.result':
    'Klik dua kali elemen teks untuk mengetik di dalamnya; Properties memuat font, ketebalan, ukuran, spasi, dan perataan.',
  'help.guide.studio-elements.tip.1': 'Bingkai adalah slot foto kosong: jatuhkan gambar ke dalamnya nanti.',
  // studio-travel
  'help.guide.studio-travel.title': 'Menambahkan peta, bendera, dan angka',
  'help.guide.studio-travel.goal': 'Ubah perjalanan itu sendiri menjadi angka di halaman.',
  'help.guide.studio-travel.step.1': 'Buka “Perjalanan” di bilah samping.',
  'help.guide.studio-travel.step.2':
    'Pilih yang ingin ditambahkan: peta rute dari entri, garis luar negara, daftar atau kisi negara, bendera, tanda tanggal, hari, atau jarak, atau ringkasan seluruh perjalanan. Masing-masing dibangun dari data perjalanan dan diperbarui bersamanya.',
  'help.guide.studio-travel.result':
    'Elemen muncul di halaman ganda; Properties menyesuaikan gayanya, dan peta menyesuaikan areanya.',
  'help.guide.studio-travel.tip.1':
    'Tanda mengikuti entri asal halaman ganda itu, jadi tanda tanggal pada halaman ganda hasil auto layout sudah menampilkan hari itu.',
  // studio-properties
  'help.guide.studio-properties.title': 'Mengedit yang Anda pilih',
  'help.guide.studio-properties.goal': 'Pindahkan, potong, tata, dan susun elemen dengan panel properti.',
  'help.guide.studio-properties.step.1':
    'Klik sebuah elemen di halaman ganda. Pegangan muncul untuk ukuran dan rotasi; seret untuk memindahkannya.',
  'help.guide.studio-properties.step.2':
    'Properties di kanan mengikuti pilihan: posisi dan ukuran, Crop dengan titik fokus yang menentukan apa yang tetap dalam bingkai, Fill atau Fit, filter Look, radius Corner, gaya Bingkai, urutan tumpukan, dan Lock.',
  'help.guide.studio-properties.step.3':
    'Duplikat dan Delete ada di bagian atas panel properti; Undo di bilah atas membatalkan semuanya.',
  'help.guide.studio-properties.result':
    'Elemen yang dikunci tidak bisa lagi diambil di halaman, sehingga tata letak yang sudah selesai tetap aman saat Anda bekerja di sekitarnya.',
  'help.guide.studio-properties.tip.1':
    'Shift-klik memilih beberapa elemen; panel properti lalu mengeditnya bersama-sama.',
  'help.guide.studio-properties.tip.2':
    'Mengedit elemen yang ditempatkan Auto layout memutus tautannya ke entri; elemen itu berhenti mengikuti perubahan berikutnya pada entri tersebut.',
  // studio-format
  'help.guide.studio-format.title': 'Memilih format halaman',
  'help.guide.studio-format.goal': 'Tetapkan ukuran cetak buku, sebelum tata letak bergantung padanya.',
  'help.guide.studio-format.step.1': 'Klik Page format di bilah atas.',
  'help.guide.studio-format.step.2':
    'Pilih Square 21 × 21 cm, Square 30 × 30 cm, A4 atau A5 lanskap atau potret, atau masukkan lebar dan tinggi sendiri dalam milimeter. Bleed dan margin aman ada di bawahnya.',
  'help.guide.studio-format.result':
    'Setiap halaman ganda digambar pada ukuran itu, dengan bleed 3 mm dan margin aman 5 mm secara bawaan.',
  'help.guide.studio-format.tip.1':
    'Ubah format lebih dulu, lalu jalankan Auto layout; tata letak dibangun untuk ukuran yang ditemukannya.',
  'help.guide.studio-format.tip.2': 'Tanyakan nilai bleed dan margin aman ke percetakan Anda dan masukkan nilai itu.',
  // studio-export
  'help.guide.studio-export.title': 'Mengekspor buku sebagai PDF',
  'help.guide.studio-export.goal': 'Dapatkan berkas siap cetak, atau berkas untuk dibaca di layar.',
  'help.guide.studio-export.step.1': 'Klik Export di bilah atas.',
  'help.guide.studio-export.step.2':
    'Pilih “Halaman tunggal”, satu lembar per halaman dalam urutan baca, yang diinginkan percetakan, atau “Halaman ganda”, dua halaman sekaligus seperti buku terbuka. “Tanda potong” menambahkan bleed di setiap tepi dan menandai tempat memotong.',
  'help.guide.studio-export.step.3':
    'Klik “Tampilan cetak”. Browser Anda membuka halaman-halamannya dan “Simpan sebagai PDF” mengubahnya menjadi berkas.',
  'help.guide.studio-export.result':
    'PDF dengan jumlah lembar sebanyak yang diumumkan dialog, pada format halaman yang Anda tetapkan.',
  'help.guide.studio-export.tip.1': 'Membuat PDF hanya bisa di desktop, seperti Studio itu sendiri.',
  'help.guide.studio-export.tip.2':
    'Untuk contoh cetak, ekspor “Halaman ganda” tanpa tanda potong; untuk percetakan, “Halaman tunggal” dengan tanda potong.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Menggunakan ulang halaman ganda di buku lain',
  'help.guide.studio-spread-file.goal': 'Bawa desain yang Anda sukai dari buku satu perjalanan ke perjalanan lain.',
  'help.guide.studio-spread-file.step.1':
    'Dengan halaman ganda di area kerja, klik “Unduh halaman ganda ini” di ujung kanan bilah zoom. Berkas itu berisi desainnya, bukan fotonya.',
  'help.guide.studio-spread-file.step.2':
    'Di buku lain, buka Pages dan klik “Impor” di samping “Tambah halaman”, lalu pilih berkasnya.',
  'help.guide.studio-spread-file.result':
    'Halaman ganda tiba dengan bingkai dan gaya teksnya; jatuhkan foto perjalanan baru ke dalam bingkainya.',
  'help.guide.studio-spread-file.tip.1': 'Berkas yang bukan desain halaman ganda ditolak dengan alasannya.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Pengaturan',
  'help.ctx.settings.summary':
    'Pengaturan pribadi Anda, satu tab per topik di bilah samping kiri. Sebagian besar sakelar langsung berlaku begitu Anda mengubahnya; formulir dengan tombol “Simpan” di bawahnya menunggu tombol itu ditekan. Tidak ada yang di sini mengubah TREK milik orang lain.',
  'help.ctx.settings.bullet.1':
    'Bilah samping kiri: “Tampilan”, “Appearance”, “Peta”, “Notifikasi”, “Integrasi”, “Offline”, dan “Akun”. “Plugin” muncul begitu ada satu yang terpasang, “Tentang” pada TREK yang dihosting sendiri.',
  'help.ctx.settings.bullet.2':
    '“Tampilan” berisi bahasa, satuan, mata uang, dan apa yang dibuka aplikasi saat mulai; “Appearance” berisi tema, warna, ukuran teks, dan widget dasbor.',
  'help.ctx.settings.bullet.3':
    '“Peta” memilih mesin peta dan gayanya; “Notifikasi” saluran yang menjangkau Anda; “Integrasi” pustaka foto, kunci API, dan MCP; “Offline” apa yang disimpan aplikasi di perangkat ini.',
  'help.ctx.settings.bullet.4':
    '“Akun” memuat profil, kata sandi, autentikasi dua faktor, passkey, dan penghapusan akun Anda.',
  'help.ctx.settings-display.title': 'Tampilan',
  'help.ctx.settings-display.summary':
    'Bahasa, satuan, dan mata uang, cara peta dan pemesanan berperilaku, serta apa yang dibuka TREK saat mulai. Setiap perubahan di sini langsung berlaku.',
  'help.ctx.settings-display.bullet.1':
    '“Language & region”: bahasa antarmuka, format waktu, mata uang tampilan, serta satuan jarak dan suhu.',
  'help.ctx.settings-display.bullet.2':
    '“Travel & map”: rute pemesanan selalu di peta, pil Jelajahi tempat, optimalisasi rute dari akomodasi Anda, kode pemesanan yang disamarkan, dan rute pemesanan berlabel.',
  'help.ctx.settings-display.bullet.3':
    '“Mulai”: apakah TREK membuka dasbor atau perjalanan aktif, dan tab perjalanan mana yang muncul pertama.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Tampilan TREK di akun ini: terang atau gelap, warna aksen, kaca dan gerakan, ukuran teks, dan widget mana yang ditampilkan dasbor. Semuanya berlaku langsung, di setiap perangkat tempat Anda masuk.',
  'help.ctx.settings-appearance.bullet.1':
    '“Theme”: “Terang”, “Gelap”, atau “Otomatis”, dan “Color scheme” dengan “Custom accent” pilihan Anda sendiri.',
  'help.ctx.settings-appearance.bullet.2':
    '“Readability”: “Transparency”, “Reduce motion”, “Density”, dan “Text size”, dengan ukuran lanjutan per tingkat.',
  'help.ctx.settings-appearance.bullet.3':
    '“Dashboard widgets”: satu sakelar per widget, terpisah untuk “Desktop” dan “Mobile”.',
  'help.ctx.settings-appearance.bullet.4': '“Reset to defaults” di bagian bawah mengembalikan semuanya.',
  'help.ctx.settings-map.title': 'Peta',
  'help.ctx.settings-map.summary':
    'Mesin mana yang menggambar peta dan dengan gaya apa. Leaflet adalah peta raster klasik, MapLibre menggambar tile vektor tanpa token apa pun, Mapbox menambahkan bangunan 3D dan medan dengan token Anda sendiri.',
  'help.ctx.settings-map.bullet.1':
    '“Penyedia peta”: Leaflet, MapLibre, atau Mapbox, masing-masing dengan satu baris tentang apa yang dibutuhkannya.',
  'help.ctx.settings-map.bullet.2':
    '“Gaya peta” dan “Template Peta”: tampilan tile, ditambah token atau kunci yang diminta penyedia.',
  'help.ctx.settings-map.bullet.3':
    '“Mode kualitas tinggi” untuk antialiasing dan proyeksi bola dunia; “Simpan Peta” menulis pilihannya.',
  'help.ctx.settings-notifications.title': 'Notifikasi',
  'help.ctx.settings-notifications.summary':
    'Di mana TREK menjangkau Anda di luar aplikasi: topik ntfy, webhook, atau saluran yang disediakan plugin. Di bawah saluran, satu baris per peristiwa menentukan apa yang dikirim ke mana.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: topik, server Anda sendiri yang opsional, dan token akses yang opsional, dengan “Uji” untuk langsung mengirim satu pesan.',
  'help.ctx.settings-notifications.bullet.2':
    'Webhook: satu URL yang menerima setiap peristiwa sebagai JSON, dengan “Uji”.',
  'help.ctx.settings-notifications.bullet.3':
    'Baris preferensi: per peristiwa, saluran mana yang aktif. Saluran plugin menampilkan “Konfigurasi” sampai selesai disiapkan.',
  'help.ctx.settings-integrations.title': 'Integrasi',
  'help.ctx.settings-integrations.summary':
    'Semua yang terhubung ke TREK dari luar: pustaka foto untuk jurnal, kunci API untuk skrip, dan endpoint MCP dengan token serta klien OAuth-nya untuk asisten AI.',
  'help.ctx.settings-integrations.bullet.1':
    'Penyedia foto: Immich dan Synology Photos, masing-masing dengan URL dan kuncinya, “Uji koneksi”, dan “Simpan”.',
  'help.ctx.settings-integrations.bullet.2':
    '“Kunci API”: kunci pribadi untuk skrip dan alat lain yang memanggil API TREK atas nama Anda.',
  'help.ctx.settings-integrations.bullet.3':
    '“Konfigurasi MCP”: endpoint, konfigurasi klien siap salin, dan token API.',
  'help.ctx.settings-integrations.bullet.4':
    '“Klien OAuth 2.1”: aplikasi yang masuk lewat TREK, dengan redirect URI, cakupan yang diizinkan, klien mesin, dan sesi yang aktif.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Apa yang disimpan TREK di perangkat ini agar perjalanan tetap bisa dibuka tanpa koneksi, dan apa yang terjadi ketika perubahan yang dibuat offline bertabrakan dengan perubahan yang dibuat di tempat lain.',
  'help.ctx.settings-offline.bullet.1':
    '“Mode offline”: “Paksa mode offline” membuat aplikasi berperilaku seolah jaringan hilang, untuk pengujian atau koneksi berkuota.',
  'help.ctx.settings-offline.bullet.2':
    '“Persiapkan untuk offline”: “Unduh untuk penggunaan offline” mengambil perjalanan Anda dan tile petanya sekarang.',
  'help.ctx.settings-offline.bullet.3':
    '“Apa yang disimpan offline”: tile peta aktif atau nonaktif, dan satu sakelar per perjalanan.',
  'help.ctx.settings-offline.bullet.4':
    '“Konflik sinkronisasi” dan “Cache offline”: strategi untuk tabrakan, jumlah yang tertunda dan gagal, “Sinkronkan ulang sekarang”, dan “Hapus cache”.',
  'help.ctx.settings-account.title': 'Akun',
  'help.ctx.settings-account.summary':
    'Siapa Anda di TREK ini dan cara Anda masuk: profil dan avatar, kata sandi, autentikasi dua faktor, passkey, dan di paling bawah penghapusan akun.',
  'help.ctx.settings-account.bullet.1': 'Profil: nama pengguna, email, dan avatar, disimpan dengan “Simpan Profil”.',
  'help.ctx.settings-account.bullet.2':
    '“Ganti Kata Sandi”: kata sandi saat ini, kata sandi baru dua kali, “Perbarui kata sandi”.',
  'help.ctx.settings-account.bullet.3':
    '“Autentikasi dua faktor (2FA)” dengan aplikasi autentikator dan kode cadangan; “Passkey” untuk masuk tanpa kata sandi.',
  'help.ctx.settings-account.bullet.4':
    '“Hapus akun” di bagian bawah, di balik sebuah konfirmasi. Admin terakhir tidak bisa menghapus dirinya sendiri.',
  // language-region
  'help.guide.language-region.title': 'Mengatur bahasa, satuan, dan mata uang',
  'help.guide.language-region.goal': 'Buat TREK berbicara dalam bahasa Anda dan menghitung seperti cara Anda.',
  'help.guide.language-region.step.1':
    'Pilih bahasa antarmuka di “Language & region”. TREK langsung beralih, di setiap perangkat tempat Anda masuk.',
  'help.guide.language-region.step.2':
    'Di bawahnya, pilih format waktu, mata uang tampilan, serta satuan jarak dan suhu.',
  'help.guide.language-region.result':
    'Tanggal, jarak, dan uang terbaca seperti yang Anda harapkan; mata uang perjalanan itu sendiri tetap tampil di samping jumlah yang dikonversi.',
  'help.guide.language-region.tip.1':
    'Mata uang tampilan dipakai untuk total lintas perjalanan; setiap perjalanan mempertahankan mata uang yang Anda berikan.',
  'help.guide.language-region.tip.2': 'Bahasa juga menentukan nama hari dan bulan di Vacay dan jurnal.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Menyetel perilaku peta dan pemesanan',
  'help.guide.travel-map-prefs.goal': 'Tentukan apa yang ditampilkan peta perjalanan secara default.',
  'help.guide.travel-map-prefs.step.1':
    'Di “Travel & map”, “Selalu tampilkan rute pemesanan” mempertahankan penerbangan dan kereta di peta bahkan saat harinya tidak sedang dibuka; “Jelajahi tempat di peta” menampilkan pil untuk mencari tempat; “Optimalkan rute dari akomodasi” memulai rute dari tempat Anda menginap.',
  'help.guide.travel-map-prefs.step.2':
    '“Sembunyikan Kode Pemesanan” menyamarkan nomor konfirmasi sampai Anda mengarahkan kursor; “Label rute pemesanan” menulis nama pemesanan di sepanjang rutenya.',
  'help.guide.travel-map-prefs.result':
    'Peta perjalanan mengikuti pilihan ini di setiap perjalanan, sampai Anda mengubahnya kembali.',
  'help.guide.travel-map-prefs.tip.1':
    'Ini berlaku per akun, bukan per perjalanan. Anggota perjalanan bersama masing-masing melihat pilihannya sendiri.',
  // startup
  'help.guide.startup.title': 'Memilih apa yang dibuka TREK saat mulai',
  'help.guide.startup.goal': 'Mendarat di tempat Anda paling sering bekerja, bukan di dasbor setiap kali.',
  'help.guide.startup.step.1': 'Di “Mulai”, atur “Halaman awal” ke “Dasbor” atau “Perjalanan aktif”.',
  'help.guide.startup.step.2':
    '“Tab awal” memilih tab perjalanan mana yang muncul pertama saat Anda membuka satu perjalanan.',
  'help.guide.startup.result': 'Login berikutnya dan ketukan berikutnya pada logo langsung menuju ke sana.',
  'help.guide.startup.tip.1':
    '“Perjalanan aktif” berarti perjalanan yang sedang berlangsung hari ini, atau yang berikutnya jika tidak ada.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Mengatur tema dan warna aksen',
  'help.guide.theme-scheme.goal': 'Buat TREK terang, gelap, atau mengikuti perangkat Anda, dalam warna yang Anda suka.',
  'help.guide.theme-scheme.step.1':
    'Di “Theme”, pilih “Terang”, “Gelap”, atau “Otomatis”. “Otomatis” mengikuti perangkat Anda.',
  'help.guide.theme-scheme.step.2':
    'Pilih “Color scheme”: “Default”, “High contrast”, “Indigo”, “Teal”, “Rose”, “Amber”, “Violet”, atau “Custom”.',
  'help.guide.theme-scheme.step.3':
    'Dengan “Custom”, pilih aksen dari preset atau masukkan warna Anda sendiri. Pemeriksaan kontras di sebelahnya memberi tahu apakah teks tetap terbaca di atasnya.',
  'help.guide.theme-scheme.result':
    'Tombol, tautan, dan sorotan memakai aksen itu di mana-mana, di setiap perangkat tempat Anda masuk.',
  'help.guide.theme-scheme.tip.1':
    'Bilah navigasi juga punya sakelar cepat terang atau gelap; sakelar itu mengatur tema yang sama.',
  'help.guide.theme-scheme.tip.2':
    '“High contrast” adalah skema yang dipilih ketika yang default terasa terlalu lembut untuk dibaca.',
  // readability
  'help.guide.readability.title': 'Menyesuaikan keterbacaan dan ukuran teks',
  'help.guide.readability.goal':
    'Lebih sedikit kaca, lebih sedikit gerakan, lebih banyak ruang, atau huruf yang lebih besar.',
  'help.guide.readability.step.1':
    'Di “Readability”, “Transparency” mengganti panel kaca menjadi permukaan pekat, “Reduce motion” meminimalkan animasi, dan “Density” memilih “Comfortable” atau “Compact”.',
  'help.guide.readability.step.2':
    '“Text size” menskalakan “Everything” sekaligus; “Advanced text sizes” membiarkan judul, subjudul, isi, dan keterangan berbeda.',
  'help.guide.readability.result': 'Seluruh aplikasi langsung mengikuti, termasuk panel peta dan jurnal.',
  'help.guide.readability.tip.1': '“Reduce motion” juga mengikuti pengaturan sistem Anda ketika Anda membiarkannya.',
  'help.guide.readability.tip.2':
    'Ukuran teks diterapkan lewat tingkatan tipografi, jadi tidak ada yang terpotong; ukuran yang tidak lagi muat akan turun baris.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Memilih widget dasbor',
  'help.guide.dashboard-widgets.goal': 'Tampilkan hanya widget yang Anda pakai, terpisah di desktop dan di ponsel.',
  'help.guide.dashboard-widgets.step.1':
    'Di “Dashboard widgets”, nyalakan atau matikan setiap widget untuk “Desktop” dan untuk “Mobile”: bilah samping kanan secara keseluruhan, mata uang, Collections, zona waktu, reservasi mendatang, negara Atlas, dan angka perjalanan.',
  'help.guide.dashboard-widgets.step.2':
    '“Reset to defaults” di bagian bawah mengembalikan seluruh tab ke kondisi bawaannya.',
  'help.guide.dashboard-widgets.result':
    'Dasbor langsung menata ulang; dengan bilah samping kanan mati, dasbor berada di tengah.',
  'help.guide.dashboard-widgets.tip.1': 'Widget dari sebuah addon hanya muncul selama admin mengaktifkan addon itu.',
  'help.guide.dashboard-widgets.tip.2':
    'Dasbor sendiri mengingat tampilan kisi atau daftar dan urutan pengurutan per perangkat.',
  // map-provider
  'help.guide.map-provider.title': 'Memilih mesin dan gaya peta',
  'help.guide.map-provider.goal': 'Beralih antara peta klasik, tile vektor, dan peta 3D Mapbox.',
  'help.guide.map-provider.step.1':
    'Di “Penyedia peta”, pilih Leaflet untuk peta 2D klasik dengan tile raster apa pun, MapLibre untuk tile vektor OpenFreeMap tanpa token, atau Mapbox untuk tile vektor dengan bangunan 3D dan medan.',
  'help.guide.map-provider.step.2':
    'Pilih “Gaya peta” atau “Template Peta” untuk tampilannya. Mapbox membutuhkan “Token akses Mapbox”, beberapa gaya raster membutuhkan “Kunci API CARTO”; tautan di sebelah kolom mengarah ke tempat Anda mendapatkannya.',
  'help.guide.map-provider.step.3':
    '“Mode kualitas tinggi” menambahkan antialiasing dan proyeksi bola dunia. Klik “Simpan Peta”.',
  'help.guide.map-provider.result':
    'Setiap peta di TREK, perjalanan, Atlas, Collections, dan jurnal, digambar oleh mesin yang Anda pilih.',
  'help.guide.map-provider.tip.1': 'Tanpa token, Mapbox kembali ke peta default alih-alih tidak menampilkan apa pun.',
  'help.guide.map-provider.tip.2':
    'Tile peta yang Anda simpan offline berasal dari penyedia yang aktif saat Anda mengunduhnya.',
  // notification-channels
  'help.guide.notification-channels.title': 'Menyiapkan tempat notifikasi menjangkau Anda',
  'help.guide.notification-channels.goal':
    'Dapatkan pengingat perjalanan dan peristiwa kolaborasi di ponsel Anda atau di alat lain.',
  'help.guide.notification-channels.step.1':
    'Di “Notifikasi”, isi “Topik Ntfy”; tambahkan “URL Server Ntfy” Anda sendiri dan “Token Akses” jika Anda menjalankannya. “Uji” langsung mengirim pesan.',
  'help.guide.notification-channels.step.2':
    'Atau berikan “Webhook URL” yang menerima setiap peristiwa sebagai JSON, dan “Uji” dengan cara yang sama.',
  'help.guide.notification-channels.step.3':
    'Di baris-baris di bawahnya, nyalakan atau matikan setiap peristiwa per saluran. Saluran plugin menampilkan “Konfigurasi” sampai disiapkan di pengaturan plugin; “Kirim tes” mencoba satu.',
  'help.guide.notification-channels.result':
    'Peristiwa dikirim lewat saluran yang aktif. Lonceng di bilah navigasi tetap menampilkannya di dalam aplikasi apa pun yang terjadi.',
  'help.guide.notification-channels.tip.1':
    'Preferensi per perjalanan ada di perjalanan itu sendiri, di bawah pengaturan notifikasinya.',
  'help.guide.notification-channels.tip.2':
    'Admin bisa mengisi server ntfy default untuk semua orang; Anda tetap memilih topik Anda sendiri.',
  // photo-providers
  'help.guide.photo-providers.title': 'Menghubungkan pustaka foto',
  'help.guide.photo-providers.goal': 'Biarkan jurnal menarik foto hari itu dari Immich atau Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Di “Integrasi”, cari bagian penyedia dan masukkan URL serta kunci API-nya. Immich juga menawarkan untuk mencerminkan unggahan journey kembali ke pustaka.',
  'help.guide.photo-providers.step.2': 'Klik “Uji koneksi”, lalu “Simpan”.',
  'help.guide.photo-providers.result':
    'Tab “External photos” di editor entri mencari pustaka yang terhubung untuk hari entri itu, yang terdekat dengan lokasi entri lebih dulu.',
  'help.guide.photo-providers.tip.1':
    'Koneksi ini milik Anda: anggota lain dari sebuah journey menghubungkan pustaka mereka sendiri.',
  'help.guide.photo-providers.tip.2':
    'Penyedia tanpa data GPS di fotonya tetap berfungsi; daftarnya lalu berurutan menurut waktu.',
  // api-keys
  'help.guide.api-keys.title': 'Membuat kunci API',
  'help.guide.api-keys.goal': 'Biarkan skrip atau alat lain memanggil API TREK sebagai Anda.',
  'help.guide.api-keys.step.1':
    'Di “Kunci API”, klik “Buat kunci” dan beri nama yang menunjukkan di mana kunci itu akan dipakai.',
  'help.guide.api-keys.step.2':
    'Salin kunci dari dialog: kunci hanya ditampilkan sekali. Hapus kunci dari daftar ketika alat itu tidak lagi membutuhkannya.',
  'help.guide.api-keys.result':
    'Permintaan dengan kunci itu bertindak dengan izin Anda; daftar menunjukkan kapan setiap kunci dibuat dan terakhir dipakai.',
  'help.guide.api-keys.tip.1': 'Satu kunci per alat membuat pencabutan tidak merepotkan.',
  'help.guide.api-keys.tip.2':
    'Untuk asisten AI, gunakan MCP dengan OAuth; kunci API ditujukan untuk klien HTTP biasa.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Menghubungkan asisten AI lewat MCP',
  'help.guide.mcp-oauth.goal': 'Beri Claude, IDE, atau klien MCP lain akses ke perjalanan Anda.',
  'help.guide.mcp-oauth.step.1':
    'Di “Konfigurasi MCP”, salin “MCP Endpoint”, atau seluruh “Konfigurasi Client” untuk klien yang menerima potongan JSON.',
  'help.guide.mcp-oauth.step.2':
    'Klien yang masuk lewat browser memakai OAuth 2.1: “Klien Baru” di bawah “Klien OAuth 2.1”, dengan “Redirect URI”, “Cakupan yang Diizinkan”, dan, untuk server tanpa browser, “Klien mesin”.',
  'help.guide.mcp-oauth.step.3':
    '“Putar Ulang Secret” dan “Hapus Klien” ada di setiap klien; “Sesi OAuth Aktif” mencantumkan apa yang sedang masuk dan memungkinkan Anda mencabutnya. “API Tokens” dengan “Buat Token Baru” adalah jalan masuk yang lebih lama.',
  'help.guide.mcp-oauth.result':
    'Klien bisa membaca dan mengubah apa yang diizinkan cakupannya, sebagai Anda, dan setiap tindakan tampil atas nama Anda.',
  'help.guide.mcp-oauth.tip.1':
    'Cakupan adalah jaring pengaman: beri klien hanya cakupan baca sampai ia membutuhkan lebih.',
  'help.guide.mcp-oauth.tip.2': 'Admin bisa mematikan MCP untuk seluruh instans; bagian ini lalu tidak ada.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Membawa perjalanan offline',
  'help.guide.offline-prepare.goal': 'Miliki perjalanan Anda dan petanya di perangkat ini sebelum koneksi terputus.',
  'help.guide.offline-prepare.step.1':
    'Di “Apa yang disimpan offline”, biarkan “Simpan tile peta offline” menyala dan nyalakan perjalanan yang Anda inginkan di perangkat ini.',
  'help.guide.offline-prepare.step.2':
    'Klik “Unduh untuk penggunaan offline” di bawah “Persiapkan untuk offline”. Ini mengambil perjalanan dan tile di sekitar tempat-tempatnya.',
  'help.guide.offline-prepare.step.3':
    '“Paksa mode offline” di bawah “Mode offline” memungkinkan Anda memeriksa bahwa semuanya sudah ada sebelum berangkat.',
  'help.guide.offline-prepare.result':
    'Perjalanan terbuka tanpa koneksi; perubahan yang Anda buat menunggu dalam antrean dan dikirim saat tersambung kembali.',
  'help.guide.offline-prepare.tip.1':
    'Tile memakan ruang paling banyak: bagian “Cache offline” menunjukkan apa yang tersimpan, per perjalanan.',
  'help.guide.offline-prepare.tip.2': 'Pasang TREK sebagai aplikasi dari browser untuk awal offline yang paling mulus.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Menentukan siapa yang menang saat konflik sinkronisasi',
  'help.guide.offline-conflicts.goal':
    'Pilih cara TREK menyelesaikan perubahan yang dibuat offline terhadap perubahan yang dibuat di tempat lain.',
  'help.guide.offline-conflicts.step.1':
    'Di “Konflik sinkronisasi”, pilih “Tanya aku setiap kali”, “Selalu simpan versiku”, atau “Selalu simpan versi server”.',
  'help.guide.offline-conflicts.step.2':
    '“Cache offline” menampilkan perjalanan, perubahan yang tertunda dan gagal, serta konflik; “Sinkronkan ulang sekarang” mendorong antrean, “Hapus cache” mengosongkan perangkat.',
  'help.guide.offline-conflicts.result':
    'Dengan “Tanya aku setiap kali”, konflik menampilkan kedua versi dan membiarkan Anda memilih; dengan dua pilihan lainnya, konflik diselesaikan diam-diam.',
  'help.guide.offline-conflicts.tip.1':
    '“Hapus cache” hanya menghapus salinan di perangkat ini; tidak ada yang disentuh di server.',
  // profile
  'help.guide.profile.title': 'Mengubah profil Anda',
  'help.guide.profile.goal': 'Perbarui nama, email, dan foto Anda.',
  'help.guide.profile.step.1':
    'Di “Akun”, ubah “Nama pengguna” dan “Email”. Avatar menerima unggahan Anda sendiri; hapus untuk kembali ke inisial.',
  'help.guide.profile.step.2': 'Klik “Simpan Profil”.',
  'help.guide.profile.result':
    'Nama dan foto Anda langsung diperbarui di mana-mana, termasuk di perjalanan yang Anda bagikan.',
  'help.guide.profile.tip.1':
    'Akun yang masuk lewat OIDC menunjukkan hal itu di sini; email lalu berasal dari penyedia.',
  // password
  'help.guide.password.title': 'Mengganti kata sandi Anda',
  'help.guide.password.goal': 'Tetapkan kata sandi baru.',
  'help.guide.password.step.1': 'Di “Ganti Kata Sandi”, masukkan kata sandi Anda saat ini, lalu yang baru dua kali.',
  'help.guide.password.step.2': 'Klik “Perbarui kata sandi”.',
  'help.guide.password.result': 'Kata sandi baru berlaku pada login berikutnya; sesi lain tetap masuk.',
  'help.guide.password.tip.1': 'Akun yang masuk lewat OIDC tidak punya kata sandi TREK untuk diganti.',
  // mfa
  'help.guide.mfa.title': 'Mengaktifkan autentikasi dua faktor',
  'help.guide.mfa.goal': 'Lindungi akun dengan kode dari aplikasi autentikator.',
  'help.guide.mfa.step.1': 'Di “Autentikasi dua faktor (2FA)”, klik “Atur autentikator”.',
  'help.guide.mfa.step.2':
    'Pindai kode QR dengan aplikasi Anda, atau masukkan rahasianya secara manual, lalu ketik kode enam digit yang ditampilkan dan klik “Aktifkan 2FA”.',
  'help.guide.mfa.step.3':
    'Simpan kode cadangan: salin, unduh, atau cetak. Masing-masing berlaku sekali, saat ponsel tidak ada di tangan Anda.',
  'help.guide.mfa.result': 'Setiap login meminta kode setelah kata sandi.',
  'help.guide.mfa.tip.1': '“Nonaktifkan 2FA” membutuhkan kata sandi Anda dan kode yang sedang berlaku.',
  'help.guide.mfa.tip.2': 'Admin bisa mewajibkan 2FA untuk semua orang; 2FA lalu tidak bisa dimatikan di sini.',
  // passkeys
  'help.guide.passkeys.title': 'Masuk dengan passkey',
  'help.guide.passkeys.goal': 'Gunakan sidik jari, wajah, atau PIN perangkat Anda alih-alih kata sandi.',
  'help.guide.passkeys.step.1':
    'Di “Passkey”, klik “Tambah passkey” dan konfirmasi dengan perangkat Anda. Beri nama yang menunjukkan perangkat mana itu.',
  'help.guide.passkeys.step.2':
    'Daftar menampilkan setiap passkey dengan namanya dan kapan terakhir dipakai; tombol hapus menghilangkan satu.',
  'help.guide.passkeys.result': 'Halaman login menawarkan passkey; kata sandi tetap ada sebagai cadangan.',
  'help.guide.passkeys.tip.1':
    'Passkey tersimpan di perangkat atau di pengelola kata sandinya, jadi tambahkan satu per perangkat.',
  'help.guide.passkeys.tip.2':
    'Passkey membutuhkan HTTPS; pada instans HTTP biasa, bagian ini menjelaskan mengapa passkey tidak tersedia.',
  // delete-account
  'help.guide.delete-account.title': 'Menghapus akun Anda',
  'help.guide.delete-account.goal': 'Hapus akun Anda dan data yang hanya milik Anda.',
  'help.guide.delete-account.step.1': 'Di paling bawah “Akun”, klik “Hapus akun” dan konfirmasi.',
  'help.guide.delete-account.result':
    'Akun Anda, perjalanan Anda sendiri, dan journey Anda hilang; perjalanan yang Anda bagikan dengan orang lain tetap ada pada mereka.',
  'help.guide.delete-account.tip.1':
    'Admin terakhir dari sebuah instans tidak bisa menghapus dirinya sendiri; jadikan orang lain admin lebih dulu.',
  'help.guide.delete-account.tip.2': 'Tidak ada pembatalan. Ekspor apa yang ingin Anda simpan sebelum mengonfirmasi.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administrasi',
  'help.ctx.admin.summary':
    'Instans di balik TREK semua orang: siapa yang boleh masuk dan bagaimana caranya, apa yang aktif, di mana file disimpan, bagaimana server menghubungi orang, dan bagaimana semuanya dicadangkan. Hanya admin yang melihat halaman ini; setiap tab adalah layar tersendiri di bilah samping.',
  'help.ctx.admin.bullet.1':
    'Empat kartu di atas menghitung pengguna, perjalanan, tempat, dan file; sebuah spanduk di atasnya mengumumkan rilis TREK yang lebih baru.',
  'help.ctx.admin.bullet.2':
    '“Pengguna” dan “Pengaturan Default Pengguna”: akun, tautan undangan, dan pengaturan peta yang menjadi awal sebuah akun baru.',
  'help.ctx.admin.bullet.3':
    '“Personalisasi”, “Pengaturan”, “Addon”, dan “Plugins”: template packing, kategori, dan liburan sekolah; metode masuk dan kunci API; modul fitur; plugin pihak ketiga.',
  'help.ctx.admin.bullet.4':
    '“Penyimpanan”, “Notifikasi”, “Akses MCP”, dan “GitHub”: ke mana unggahan pergi, saluran seluruh instans, token dan sesi klien AI, serta riwayat rilis.',
  'help.ctx.admin.bullet.5':
    '“Backup” dan “Audit”: cadangan sesuai permintaan dan terjadwal, serta log peristiwa yang relevan bagi keamanan.',
  'help.ctx.admin-users.title': 'Pengguna',
  'help.ctx.admin-users.summary':
    'Setiap akun di TREK ini, dengan peran, email, dan login terakhir, serta tautan undangan yang memungkinkan orang mendaftar di instans yang tertutup.',
  'help.ctx.admin-users.bullet.1':
    'Tabel: nama pengguna, email, peran, tanggal pembuatan, login terakhir, dan tindakan per baris. Anda ditandai sebagai diri Anda sendiri.',
  'help.ctx.admin-users.bullet.2':
    '“Buat Pengguna” di atas menambahkan akun secara manual, dengan kata sandi yang Anda serahkan.',
  'help.ctx.admin-users.bullet.3':
    '“Tautan Undangan” di bawah: tautan pendaftaran sekali pakai dengan batas penggunaan, masa berlaku, dan, jika Anda mau, perjalanan yang langsung diikuti pengguna baru saat tiba.',
  'help.ctx.admin-users.bullet.4':
    '“Pengaturan Izin” di bagian bawah: per tindakan, siapa yang boleh melakukannya, “Semua orang”, “Anggota perjalanan”, “Pemilik perjalanan”, atau “Hanya Admin”.',
  'help.ctx.admin-defaults.title': 'Pengaturan Default Pengguna',
  'help.ctx.admin-defaults.summary':
    'Pengaturan awal sebuah akun baru, agar tidak ada yang harus mencari tab peta lebih dulu: penyedia peta, gaya, token, dan kualitas.',
  'help.ctx.admin-defaults.bullet.1':
    'Penyedia peta, gaya dan token Mapbox, kunci CARTO, dan kualitas Mapbox, persis seperti yang diatur pengguna di “Pengaturan”, “Peta”.',
  'help.ctx.admin-defaults.bullet.2':
    '“atur ulang” per bidang mengembalikan pilihan bawaan TREK; pengaturan milik pengguna sendiri selalu menang atas nilai ini.',
  'help.ctx.admin-config.title': 'Personalisasi',
  'help.ctx.admin-config.summary':
    'Apa yang dibagi setiap perjalanan di instans ini: template packing, kumpulan kategori untuk tempat dan koleksi, serta katalog liburan sekolah yang dipakai Vacay.',
  'help.ctx.admin-config.bullet.1':
    '“Template Packing”: daftar bernama berisi kategori dan barang yang bisa menjadi awal daftar packing sebuah perjalanan.',
  'help.ctx.admin-config.bullet.2':
    '“Kategori”: nama, ikon, dan warna kategori yang dipakai di seluruh TREK, dari inspektur tempat hingga Koleksi.',
  'help.ctx.admin-config.bullet.3':
    '“Liburan sekolah”: katalog negara dan wilayah, untuk tempat yang tidak dicakup feed bawaan.',
  'help.ctx.admin-settings.title': 'Pengaturan',
  'help.ctx.admin-settings.summary':
    'Bagaimana orang masuk dan dengan apa server boleh berbicara: metode masuk dan pendaftaran, SSO, passkey, kebijakan dua faktor, kunci API untuk peta, tempat, dan gambar, penyedia pencarian dan transportasi umum, serta jenis file yang boleh diunggah.',
  'help.ctx.admin-settings.bullet.1':
    '“Metode Autentikasi”: “Login dengan Kata Sandi”, “Pendaftaran dengan Kata Sandi”, “Login SSO”, “Penyediaan Otomatis SSO”, dan “Wajibkan autentikasi dua faktor (2FA)”.',
  'help.ctx.admin-settings.bullet.2':
    '“Single Sign-On (OIDC)” dengan issuer, klien, dan nama tampilan; “Login dengan passkey” dengan Relying Party ID dan origin.',
  'help.ctx.admin-settings.bullet.3':
    '“Kunci API”: Google Maps, Unsplash, dan Amap, masing-masing dengan “Uji”; “Kunci ini dipakai untuk apa” membatasi kunci Google pada fitur yang mau Anda bayar.',
  'help.ctx.admin-settings.bullet.4':
    '“Penyedia pencarian tempat” dan “Penyedia transportasi umum” memilih siapa yang menjawab pencarian dan rute; “Jenis File yang Diizinkan” membatasi unggahan.',
  'help.ctx.admin-addons.title': 'Addon',
  'help.ctx.admin-addons.summary':
    'Modul fitur TREK, masing-masing dengan sakelar: Daftar, Biaya, Dokumen, Vacay, Atlas, Collab, Journey, Koleksi, Perjalanan darat, MCP, AirTrail, Dawarich, dan penguraian AI. Nonaktif berarti entri navigasi, rute, dan API-nya hilang bagi semua orang.',
  'help.ctx.admin-addons.bullet.1': 'Satu ubin per addon dengan sakelarnya dan, jika ada, sub-baris untuk opsinya.',
  'help.ctx.admin-addons.bullet.2':
    'Penyedia foto dan penyedia dokumen juga muncul di sini sebagai ubin, sehingga Immich atau Synology bisa ditawarkan kepada pengguna.',
  'help.ctx.admin-addons.bullet.3': '“Pelacak Tas” punya sakelar sendiri di bawah ubin.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugin pihak ketiga yang berjalan di proses sendiri di samping TREK, masing-masing dengan izin yang dimintanya saat dipasang. Pasang dari katalog, unggah paket, atau tautkan folder saat sedang mengembangkan satu.',
  'help.ctx.admin-plugins.bullet.1':
    'Daftar: setiap plugin terpasang dengan versi, status, tanda tangan, dan izin yang dipegangnya; aktifkan, nonaktifkan, perbarui, atau copot per baris.',
  'help.ctx.admin-plugins.bullet.2':
    '“Unggah plugin” menerima file paket; “Pindai ulang” mengambil folder plugin yang ditautkan untuk pengembangan.',
  'help.ctx.admin-plugins.bullet.3':
    '“Host yang diizinkan” per plugin: alamat yang boleh dipanggil sebuah plugin, karena akses keluar ditolak secara default.',
  'help.ctx.admin-storage.title': 'Penyimpanan',
  'help.ctx.admin-storage.summary':
    'Tempat unggahan disimpan: disk lokal, bucket S3, atau cermin yang menulis ke keduanya. Setiap kategori unggahan bisa ke backend yang berbeda, dan “Kesehatan” memberi tahu apakah setiap backend menjawab.',
  'help.ctx.admin-storage.bullet.1':
    '“Backend”: nama dan tipe masing-masing, dengan “Uji”, “Sunting”, dan “Hapus”; yang diatur lewat lingkungan hanya bisa dibaca di sini.',
  'help.ctx.admin-storage.bullet.2':
    '“Kategori”: sampul, dokumen, foto journey, dan sisanya, masing-masing ditugaskan ke sebuah backend; mengubah satu menawarkan untuk memindahkan file yang ada.',
  'help.ctx.admin-storage.bullet.3':
    '“Kesehatan”: satu pemeriksaan per backend, dan file benih yang membuktikan bahwa konfigurasinya sama dengan yang dilihat server.',
  'help.ctx.admin-notifications.title': 'Notifikasi',
  'help.ctx.admin-notifications.summary':
    'Saluran yang ditawarkan instans kepada penggunanya, dan saluran yang menjangkau Anda sebagai admin. Pengguna memilih topik dan URL mereka sendiri di “Pengaturan”; Anda menentukan apa yang tersedia dan mengonfigurasi email.',
  'help.ctx.admin-notifications.bullet.1':
    '“In-App”, “Email (SMTP)”, “Ntfy”, dan “Webhook”: satu panel masing-masing, dengan sakelar yang menawarkan saluran itu kepada pengguna dan konfigurasi sisi server yang dibutuhkannya.',
  'help.ctx.admin-notifications.bullet.2':
    '“Pengingat Perjalanan”: apakah server mengirim pengingat sebelum perjalanan dimulai.',
  'help.ctx.admin-notifications.bullet.3':
    '“Admin Ntfy” dan “Admin Webhook”: ke mana peristiwa admin seperti cadangan yang gagal atau rilis baru dikirim, dengan “Uji”.',
  'help.ctx.admin-mcp-tokens.title': 'Akses MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Setiap token dan sesi OAuth yang dipegang klien AI terhadap TREK ini, di semua pengguna, dengan kewenangan untuk mencabut salah satunya.',
  'help.ctx.admin-mcp-tokens.bullet.1': '“Token API”: siapa yang membuatnya, kapan terakhir dipakai, dan “Hapus”.',
  'help.ctx.admin-mcp-tokens.bullet.2': '“Sesi OAuth”: klien, pengguna, dan cakupan yang diberikan, serta “Cabut”.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Apa yang baru di TREK: riwayat rilis dari GitHub, versi yang Anda jalankan, dan apakah ada versi yang lebih baru. Pembaruan itu sendiri terjadi di luar aplikasi, di host.',
  'help.ctx.admin-github.bullet.1':
    '“Riwayat Rilis” mencantumkan rilis beserta catatannya; yang terbaru membawa “Terbaru”, dan versi Anda ditandai.',
  'help.ctx.admin-github.bullet.2':
    '“Pembaruan tersedia” muncul di header begitu ada rilis yang lebih baru, dengan cara memperbarui untuk Docker dan instalasi lainnya.',
  'help.ctx.admin-backup.title': 'Backup',
  'help.ctx.admin-backup.summary':
    'Cadangan penuh basis data dan unggahan, dibuat secara manual atau terjadwal, disimpan di server dan bisa diunduh sebagai satu file. “Pulihkan” mengembalikan salah satunya.',
  'help.ctx.admin-backup.bullet.1':
    '“Pencadangan Data”: “Buat Cadangan”, dan daftar cadangan yang ada dengan “Unduh”, “Pulihkan”, dan hapus.',
  'help.ctx.admin-backup.bullet.2':
    '“Unggah Cadangan” membawa file yang dibuat di instans lain atau pada hari sebelumnya.',
  'help.ctx.admin-backup.bullet.3':
    '“Cadangan Otomatis”: aktif atau nonaktif, interval, jam dan hari, serta berapa banyak yang disimpan.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Log peristiwa keamanan dan administratif: login dan kegagalannya, perubahan MFA, perubahan pengguna dan pengaturan, pencadangan dan pemulihan. Hanya bisa dibaca, yang terbaru di atas.',
  'help.ctx.admin-audit.bullet.1':
    'Satu baris per peristiwa dengan waktu, pengguna, tindakan, sumber daya, IP, dan detail.',
  'help.ctx.admin-audit.bullet.2': '“Segarkan” memuat ulang; “Muat lebih banyak” menelusuri lebih jauh ke belakang.',
  // create-user
  'help.guide.create-user.title': 'Membuat pengguna',
  'help.guide.create-user.goal': 'Tambahkan akun secara manual, tanpa undangan.',
  'help.guide.create-user.step.1': 'Klik “Buat Pengguna” di bagian atas tab “Pengguna”.',
  'help.guide.create-user.step.2':
    'Masukkan “Nama pengguna”, “Email”, dan “Kata sandi”, lalu pilih “Peran”: “Pengguna” atau “Administrator”.',
  'help.guide.create-user.step.3': 'Klik “Buat Pengguna”.',
  'help.guide.create-user.result':
    'Akun muncul di tabel dan bisa langsung masuk; serahkan kata sandi lewat saluran yang Anda percaya.',
  'help.guide.create-user.tip.1':
    'Untuk orang yang sebaiknya memilih kata sandinya sendiri, tautan undangan adalah jalan masuk yang lebih baik.',
  'help.guide.create-user.tip.2': 'Admin melihat halaman ini dan log audit; selebihnya sama untuk kedua peran.',
  // edit-user
  'help.guide.edit-user.title': 'Mengubah peran atau kata sandi pengguna',
  'help.guide.edit-user.goal':
    'Naikkan atau turunkan peran seseorang, atau bantu mereka masuk lagi setelah kata sandi hilang.',
  'help.guide.edit-user.step.1': 'Klik pensil di baris pengguna. “Edit Pengguna” terbuka dengan detail akun.',
  'help.guide.edit-user.step.2':
    'Ubah “Peran”, atur “Kata Sandi Baru”, atau klik “Reset passkey” jika orang itu kehilangan perangkat tempat passkey-nya berada, lalu “Simpan”.',
  'help.guide.edit-user.result':
    'Perubahan berlaku pada permintaan berikutnya; kata sandi baru berfungsi mulai login berikutnya.',
  'help.guide.edit-user.tip.1': 'Anda tidak bisa mencabut peran admin dari diri sendiri selama Anda admin terakhir.',
  'help.guide.edit-user.tip.2':
    'Mereset passkey tidak mengubah kata sandi; orang itu menambahkan passkey baru di “Pengaturan”, “Akun”.',
  // invite-links
  'help.guide.invite-links.title': 'Mengundang seseorang dengan tautan',
  'help.guide.invite-links.goal':
    'Biarkan seseorang mendaftar di instans yang tertutup, dan langsung masuk ke sebuah perjalanan jika Anda mau.',
  'help.guide.invite-links.step.1': 'Di bawah “Tautan Undangan”, klik “Buat Tautan”.',
  'help.guide.invite-links.step.2':
    'Atur “Maks. Penggunaan” dan “Kedaluwarsa setelah”, jika perlu “Tambahkan ke perjalanan (opsional)”, lalu klik “Buat & Salin”.',
  'help.guide.invite-links.step.3':
    'Kirim tautannya. Setiap baris menunjukkan berapa kali tautan dipakai dan siapa yang membuatnya; “Salin tautan” menyalinnya lagi, dan tautan yang habis dipakai atau kedaluwarsa ditandai.',
  'help.guide.invite-links.result':
    'Siapa pun yang membuka tautan mendaftar dengan kata sandinya sendiri dan, jika ada perjalanan yang dipilih, langsung bergabung.',
  'help.guide.invite-links.tip.1':
    'Tautan undangan tetap berfungsi meski “Pendaftaran dengan Kata Sandi” dinonaktifkan di “Pengaturan”.',
  'help.guide.invite-links.tip.2':
    'Tautan dengan satu kali pakai dan masa berlaku singkat adalah default paling aman untuk satu orang.',
  // delete-user
  'help.guide.delete-user.title': 'Menghapus pengguna',
  'help.guide.delete-user.goal': 'Hapus sebuah akun dan semua yang hanya dimilikinya.',
  'help.guide.delete-user.step.1': 'Klik ikon tempat sampah di baris pengguna dan konfirmasi “Hapus pengguna”.',
  'help.guide.delete-user.result':
    'Akun, perjalanan miliknya sendiri, dan journey-nya hilang; perjalanan yang dibagikan dengan orang lain tetap ada pada anggota yang tersisa.',
  'help.guide.delete-user.tip.1': 'Tidak ada pembatalan. Buat cadangan dulu jika Anda tidak yakin.',
  'help.guide.delete-user.tip.2': 'Admin terakhir tidak bisa dihapus; jadikan orang lain admin lebih dulu.',
  // permissions
  'help.guide.permissions.title': 'Menentukan siapa boleh melakukan apa',
  'help.guide.permissions.goal': 'Tetapkan, per tindakan, peran mana yang boleh melakukannya di TREK ini.',
  'help.guide.permissions.step.1':
    'Di bawah “Pengaturan Izin”, cari tindakan di grupnya, misalnya “Hapus perjalanan” di bawah “Manajemen Perjalanan”, lalu pilih tingkatnya: “Semua orang”, “Anggota perjalanan”, “Pemilik perjalanan”, atau “Hanya Admin”. Baris yang diubah ditandai “dikustomisasi”.',
  'help.guide.permissions.step.2':
    'Klik “Simpan”. “Kembalikan ke default” mengembalikan setiap baris ke tingkat bawaan.',
  'help.guide.permissions.result':
    'Aturan berlaku untuk semua perjalanan sekaligus; tombol dan menu orang di bawah tingkat itu menghilang.',
  'help.guide.permissions.tip.1':
    '“Pemilik perjalanan” berarti orang yang membuat perjalanan; admin selalu boleh melakukan segalanya.',
  'help.guide.permissions.tip.2':
    'Turunkan tingkatnya alih-alih menghapus anggota: anggota yang tidak boleh mengedit masih bisa membaca dan berkomentar.',
  // default-map
  'help.guide.default-map.title': 'Mengatur default peta untuk pengguna baru',
  'help.guide.default-map.goal': 'Beri setiap akun baru peta yang berfungsi tanpa token pribadi.',
  'help.guide.default-map.step.1':
    'Di bawah “Peta”, pilih “Mesin peta” dan, untuk Mapbox atau MapLibre, “Gaya peta”, “Token Mapbox bersama”, dan “Mode kualitas tinggi”; untuk peta raster, “Template Peta” dan “Kunci CARTO bersama”.',
  'help.guide.default-map.step.2':
    'Di samping bidang mana pun yang Anda ubah, “atur ulang” mengembalikan pilihan bawaan TREK. “Pengaturan Default Pengguna” di kiri melakukan hal yang sama untuk “Mode Warna”, satuan, dan mata uang.',
  'help.guide.default-map.result':
    'Akun baru memulai dengan pengaturan ini; siapa pun yang mengatur petanya sendiri di “Pengaturan” tetap memakai miliknya.',
  'help.guide.default-map.tip.1':
    'Token yang dimasukkan di sini dipakai bersama oleh semua orang yang tidak punya token sendiri, jadi perhatikan kuotanya.',
  'help.guide.default-map.tip.2': 'Akun lama yang tidak pernah menyentuh tab peta juga mengikuti default ini.',
  // packing-templates
  'help.guide.packing-templates.title': 'Membuat template packing',
  'help.guide.packing-templates.goal': 'Beri perjalanan daftar packing sebagai titik awal, bukan daftar kosong.',
  'help.guide.packing-templates.step.1': 'Klik “Template Baru”, ketik nama, dan konfirmasi dengan tanda centang.',
  'help.guide.packing-templates.step.2':
    'Buka template dan klik “Tambah kategori”; di bawah setiap kategori, tanda + menambahkan barang, dan sebuah barang hanya butuh nama.',
  'help.guide.packing-templates.step.3':
    'Semuanya tersimpan seketika. Pensil mengganti nama template, kategori, atau barang, tempat sampah menghapusnya.',
  'help.guide.packing-templates.result':
    'Template ditawarkan di daftar packing setiap perjalanan; menerapkannya menyalin barang-barangnya, sehingga perjalanan bisa mengubahnya dengan bebas.',
  'help.guide.packing-templates.tip.1':
    'Satu template per jenis perjalanan, pantai, kota, pendakian, lebih baik daripada satu daftar raksasa.',
  'help.guide.packing-templates.tip.2': 'Menghapus template tidak memengaruhi perjalanan yang sudah menerapkannya.',
  // categories
  'help.guide.categories.title': 'Mengelola kumpulan kategori',
  'help.guide.categories.goal':
    'Tentukan kategori mana yang bisa dimiliki tempat dan koleksi, dan seperti apa tampilannya.',
  'help.guide.categories.step.1':
    'Klik “Kategori Baru”, beri nama, pilih ikon dan warna; “Pratinjau” menunjukkan hasilnya. Klik “Buat”.',
  'help.guide.categories.step.2':
    'Arahkan kursor ke sebuah kategori di daftar untuk menyunting atau menghapusnya. Menghapus meminta konfirmasi.',
  'help.guide.categories.result':
    'Kumpulan ini berlaku di mana-mana sekaligus: inspektur tempat, pin peta, Koleksi, dan filter.',
  'help.guide.categories.tip.1':
    'Tempat menyimpan id kategorinya, jadi mengganti nama kategori mengganti namanya di setiap tempat.',
  'help.guide.categories.tip.2':
    'Kategori yang dihapus meninggalkan tempat-tempatnya tanpa kategori; tugaskan ulang dulu jika itu penting.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Mengelola liburan sekolah secara manual',
  'help.guide.school-holiday-catalog.goal': 'Lengkapi negara atau wilayah yang tidak dicakup feed liburan bawaan.',
  'help.guide.school-holiday-catalog.step.1':
    'Di bawah “Liburan sekolah”, klik “Tambah negara”, masukkan “Negara” dan “Kode negara (mis. US)”, lalu “Simpan”; kemudian “Tambah wilayah” untuk setiap bagiannya yang berbeda.',
  'help.guide.school-holiday-catalog.step.2':
    'Klik sebuah wilayah untuk membuka “Wilayah atau distrik sekolah”: “Tambah periode liburan”, beri masing-masing “Nama liburan”, “Tanggal mulai”, dan “Tanggal selesai”, lalu “Simpan”. Tempat sampah menghapus sebuah periode, sebuah wilayah, atau, begitu tidak ada wilayah tersisa, sebuah negara.',
  'help.guide.school-holiday-catalog.result':
    'Pengguna menemukan negara dan wilayah itu di “Pengaturan” Vacay dan melihat periodenya di kisi tahunan mereka.',
  'help.guide.school-holiday-catalog.tip.1':
    'Wilayah dari feed bawaan tidak bisa disunting di sini; tambahkan wilayah manual di sampingnya jika ada tanggal yang salah.',
  // auth-methods
  'help.guide.auth-methods.title': 'Menentukan cara orang masuk',
  'help.guide.auth-methods.goal': 'Buka atau tutup login dengan kata sandi, SSO, dan pendaftaran, serta wajibkan 2FA.',
  'help.guide.auth-methods.step.1':
    'Di bawah “Metode Autentikasi”, aktifkan atau nonaktifkan “Login dengan Kata Sandi” dan “Pendaftaran dengan Kata Sandi”. Pendaftaran nonaktif berarti akun baru hanya lewat tautan undangan, SSO, atau secara manual.',
  'help.guide.auth-methods.step.2':
    '“Login SSO” dan “Penyediaan Otomatis SSO” membutuhkan “Single Sign-On (OIDC)” yang dikonfigurasi di bawah; penyediaan otomatis membuat akun saat seseorang pertama kali masuk lewat SSO.',
  'help.guide.auth-methods.step.3':
    '“Wajibkan autentikasi dua faktor (2FA)” membuat setiap login dengan kata sandi harus menyiapkan aplikasi autentikator pada login berikutnya. “Login dengan passkey” membutuhkan Relying Party ID dan origin tempat TREK Anda diakses.',
  'help.guide.auth-methods.result': 'Halaman masuk menawarkan persis metode yang Anda biarkan aktif.',
  'help.guide.auth-methods.tip.1':
    'Sebuah peringatan muncul sebelum Anda mengunci diri sendiri: setidaknya satu jalan masuk untuk admin tetap aktif.',
  'help.guide.auth-methods.tip.2': 'Nilai yang diatur lewat variabel lingkungan tampil hanya-baca di sini.',
  // oidc
  'help.guide.oidc.title': 'Menghubungkan single sign-on',
  'help.guide.oidc.goal': 'Biarkan orang masuk dengan penyedia identitas Anda.',
  'help.guide.oidc.step.1':
    'Di bawah “Single Sign-On (OIDC)”, masukkan “Nama Tampilan” untuk tombolnya serta “Issuer URL”, “Client ID”, dan “Client Secret” dari penyedia Anda, lalu “Simpan”.',
  'help.guide.oidc.step.2': 'Aktifkan “Login SSO” di bawah “Metode Autentikasi”.',
  'help.guide.oidc.result':
    'Halaman masuk menampilkan tombol SSO; dengan “Penyediaan Otomatis SSO” aktif, pengguna yang baru pertama kali masuk mendapat akun secara otomatis.',
  'help.guide.oidc.tip.1':
    'URI pengalihan yang dibutuhkan penyedia Anda adalah alamat TREK Anda ditambah jalur callback OIDC dari dokumentasi.',
  'help.guide.oidc.tip.2':
    'Pemetaan klaim menentukan grup SSO mana yang menjadi admin; lihat halaman OIDC di dokumentasi.',
  // instance-keys
  'help.guide.instance-keys.title': 'Memasukkan kunci API',
  'help.guide.instance-keys.goal': 'Aktifkan pencarian tempat Google, sampul Unsplash, dan Amap untuk seluruh instans.',
  'help.guide.instance-keys.step.1':
    'Di bawah “Kunci API”, tempel “Kunci API Google Maps” dan klik “Uji”; bidangnya memberi tahu apakah kunci itu menjawab.',
  'help.guide.instance-keys.step.2':
    'Di bawah “Kunci ini dipakai untuk apa”, aktifkan hanya fitur yang mau Anda tagihkan ke kunci itu: pelengkapan otomatis, detail, foto, pengayaan, log pencarian tempat.',
  'help.guide.instance-keys.step.3':
    '“Kunci API Unsplash” menggerakkan pencarian sampul; “Kunci API Amap (高德地图)” pencarian tempat di Tiongkok. Uji masing-masing dengan cara yang sama.',
  'help.guide.instance-keys.result':
    'Pengguna mendapat fitur-fitur itu tanpa kunci sendiri; tanpa kunci Google, TREK mencari lewat tumpukan OpenStreetMap yang gratis dan TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'Kunci pribadi seorang pengguna di “Pengaturan” menang atas kunci instans bagi pengguna itu.',
  'help.guide.instance-keys.tip.2':
    'Kunci juga bisa berasal dari variabel lingkungan; yang seperti itu tampil hanya-baca di sini.',
  // places-transit
  'help.guide.places-transit.title': 'Memilih penyedia pencarian dan transportasi umum',
  'help.guide.places-transit.goal': 'Tentukan siapa yang menjawab pencarian tempat dan rute transportasi umum.',
  'help.guide.places-transit.step.1':
    'Di bawah “Penyedia pencarian tempat”, pilih “Otomatis”, “Google Places”, “Amap (高德地图)”, atau “OpenStreetMap”. “Otomatis” memakai kunci terbaik yang ada.',
  'help.guide.places-transit.step.2':
    'Di bawah “Penyedia transportasi umum”, pilih “Transitous (gratis)”, mencakup seluruh dunia dan tanpa kunci, atau “Google”, yang membutuhkan kunci Google.',
  'help.guide.places-transit.result':
    'Setiap kotak pencarian dan setiap rute transportasi umum di TREK mengikuti pilihan ini.',
  'help.guide.places-transit.tip.1':
    'Penyedia tanpa kuncinya menampilkan peringatan di sini dan kembali ke OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Rute transportasi umum Google ditagih per permintaan; Transitous tidak.',
  // file-types
  'help.guide.file-types.title': 'Membatasi jenis file',
  'help.guide.file-types.goal': 'Tentukan ekstensi file mana yang boleh diunggah.',
  'help.guide.file-types.step.1':
    'Di bawah “Jenis File yang Diizinkan”, sunting daftar ekstensi yang dipisahkan koma dan simpan.',
  'help.guide.file-types.result':
    'Unggahan jenis lain ditolak dengan pesan yang jelas, di dokumen, jurnal, dan sampul.',
  'help.guide.file-types.tip.1':
    'Pertahankan jenis gambar di daftar; sampul dan foto journey melewati pemeriksaan yang sama.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Mengaktifkan atau menonaktifkan addon',
  'help.guide.toggle-addon.goal': 'Tawarkan sebuah modul fitur kepada semua orang, atau tarik kembali.',
  'help.guide.toggle-addon.step.1':
    'Geser sakelar di ubin addon. Entri navigasinya muncul atau hilang bagi semua orang sekaligus.',
  'help.guide.toggle-addon.step.2':
    'Beberapa ubin membawa sub-baris untuk opsinya, seperti “Pelacak Tas” di bawah “Daftar” atau penyedia foto di bawah “Journey”; sub-baris hanya tampil selama addon aktif.',
  'help.guide.toggle-addon.result':
    'Data addon yang dinonaktifkan tetap tersimpan; mengaktifkannya kembali menampilkannya lagi.',
  'help.guide.toggle-addon.tip.1': 'MCP nonaktif menghapus endpoint dan bagian “Integrasi” yang bergantung padanya.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas, dan Journey adalah addon yang paling sering diminta pengguna; Dokumen membutuhkan penyimpanan untuk unggahan.',
  // install-plugin
  'help.guide.install-plugin.title': 'Memasang plugin',
  'help.guide.install-plugin.goal': 'Tambahkan plugin pihak ketiga dan beri persis izin yang dimintanya.',
  'help.guide.install-plugin.step.1':
    'Buka “Jelajahi”, pilih plugin dan klik “Pasang”; atau klik “Unggah plugin” dan pilih paket .zip atau .tar.gz.',
  'help.guide.install-plugin.step.2':
    'Kembali ke “Terpasang”, baca barisnya: apa yang boleh dibaca atau ditulis plugin, host yang dipanggilnya, dan apakah ia ditandatangani. Aktifkan “Aktifkan plugin”.',
  'help.guide.install-plugin.step.3':
    'Menu baris menawarkan “Mulai ulang”, “Lihat log error”, “Host yang diizinkan”, dan “Ubah versi…”; “Hapus” mencopotnya. Pembaruan ditawarkan di baris saat ada versi yang lebih baru, dan yang meminta hak baru tetap nonaktif sampai Anda menyetujuinya.',
  'help.guide.install-plugin.result':
    'Plugin berjalan di prosesnya sendiri; apa yang ditambahkannya, widget, lapisan peta, alat, muncul di tempat yang dideklarasikan plugin.',
  'help.guide.install-plugin.tip.1':
    '“Pindai ulang” mengambil folder plugin yang ditautkan untuk pengembangan tanpa paket.',
  'help.guide.install-plugin.tip.2':
    'Plugin tanpa tanda tangan ditandai demikian; pasang hanya jika Anda memercayai sumbernya.',
  // storage-backends
  'help.guide.storage-backends.title': 'Memindahkan unggahan ke S3 atau cermin',
  'help.guide.storage-backends.goal': 'Simpan file di penyimpanan objek, atau di disk dan bucket sekaligus.',
  'help.guide.storage-backends.step.1':
    'Di bawah “Backend”, klik “Tambah backend”, beri “Nama”, pilih “Tipe”, “Lokal”, “S3”, atau “Cermin”, isi bidangnya dan “Terapkan”. “Uji” memeriksa koneksi, “Simpan perubahan” menuliskannya.',
  'help.guide.storage-backends.step.2':
    'Di bawah “Kategori”, tugaskan setiap kategori unggahan ke sebuah backend. Mengubah satu menanyakan apakah “Pindahkan objek yang ada” atau “Hanya arahkan penulisan baru”.',
  'help.guide.storage-backends.step.3':
    '“Kesehatan” di atas memeriksa setiap backend; entri merah menyebutkan apa yang gagal.',
  'help.guide.storage-backends.result':
    'Unggahan baru masuk ke backend yang ditugaskan; file yang dipindahkan disajikan dari sana.',
  'help.guide.storage-backends.tip.1':
    'Backend yang dikonfigurasi lewat variabel lingkungan ditampilkan tetapi tidak bisa disunting di sini.',
  'help.guide.storage-backends.tip.2':
    'Cermin menulis ke kedua target dan membaca dari yang pertama; gunakan untuk migrasi tanpa waktu henti.',
  // channels-instance
  'help.guide.channels-instance.title': 'Mengonfigurasi saluran notifikasi',
  'help.guide.channels-instance.goal': 'Tentukan saluran mana yang boleh dipilih pengguna, dan siapkan email.',
  'help.guide.channels-instance.step.1':
    'Di bawah “Email (SMTP)”, masukkan SMTP Host, SMTP Port, SMTP User, SMTP Password, dan From Address; “Kirim email uji” mengirim surat kepada Anda.',
  'help.guide.channels-instance.step.2':
    'Aktifkan “Ntfy” dan “Webhook” untuk menawarkannya; pengguna lalu memasukkan topik atau URL mereka sendiri di “Pengaturan”, “Notifikasi”.',
  'help.guide.channels-instance.step.3':
    '“Pengingat Perjalanan” mengatur pengingat sebelum perjalanan dimulai; “In-App” selalu aktif dan di sini hanya dijelaskan.',
  'help.guide.channels-instance.result': 'Tab “Notifikasi” setiap pengguna menampilkan saluran yang Anda aktifkan.',
  'help.guide.channels-instance.tip.1':
    'Server ntfy default yang dimasukkan di sini diisi otomatis untuk pengguna; mereka tetap bisa menyebutkan server mereka sendiri.',
  'help.guide.channels-instance.tip.2':
    'Saluran plugin muncul dengan sendirinya begitu plugin dengan kemampuan itu aktif.',
  // admin-channels
  'help.guide.admin-channels.title': 'Menerima peristiwa admin di ponsel Anda',
  'help.guide.admin-channels.goal':
    'Dapatkan kabar tentang cadangan yang gagal, rilis baru, dan peristiwa instans lainnya.',
  'help.guide.admin-channels.step.1':
    'Di bawah “Admin Ntfy”, masukkan topik dan, jika perlu, server dan token; di bawah “Admin Webhook” sebuah URL.',
  'help.guide.admin-channels.step.2': 'Klik “Kirim uji Ntfy” atau “Kirim test webhook” untuk melihat pesan tiba.',
  'help.guide.admin-channels.result':
    'Peristiwa admin dikirim ke sana, di samping lonceng dalam aplikasi setiap admin.',
  'help.guide.admin-channels.tip.1':
    'Pisahkan topik admin dari topik pribadi Anda, agar sebuah gangguan tidak tenggelam di antara obrolan perjalanan.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Mencabut akses AI',
  'help.guide.mcp-tokens-admin.goal':
    'Lihat dan putus setiap token dan sesi yang dipegang klien AI, untuk pengguna mana pun.',
  'help.guide.mcp-tokens-admin.step.1':
    'Di bawah “Token API”, temukan token berdasarkan pengguna dan nama; tempat sampah menghapusnya dan klien berhenti seketika.',
  'help.guide.mcp-tokens-admin.step.2':
    'Di bawah “Sesi OAuth”, hal yang sama untuk klien berbasis browser: klien, pengguna, dan tanggal, dan tempat sampah mencabut sesinya.',
  'help.guide.mcp-tokens-admin.result':
    'Klien harus dihubungkan lagi oleh penggunanya; tidak ada hal lain yang berubah.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Cakupan memberi tahu Anda apa yang bisa dilakukan klien; cakupan hanya-baca tidak berbahaya jika dibiarkan.',
  'help.guide.mcp-tokens-admin.tip.2': 'Menonaktifkan addon MCP mencabut semuanya sekaligus.',
  // release-history
  'help.guide.release-history.title': 'Memeriksa rilis baru',
  'help.guide.release-history.goal': 'Ketahui apakah TREK Anda mutakhir dan apa yang dibawa versi berikutnya.',
  'help.guide.release-history.step.1':
    'Saat ada rilis yang lebih baru, “Pembaruan tersedia” tampil di bagian atas halaman admin; “Lihat di GitHub” membukanya, dan “Cara Memperbarui” menjelaskan pembaruan untuk Docker dan instalasi lainnya.',
  'help.guide.release-history.step.2':
    '“Riwayat Rilis” mencantumkan setiap rilis beserta catatannya; “Tampilkan detail” membentangkannya, yang terbaru membawa “Terbaru”, dan “Muat lebih banyak” menelusuri lebih jauh ke belakang.',
  'help.guide.release-history.result':
    'Pembaruan terjadi di host, dengan menarik image baru atau membangun tag baru; direktori data tetap ada.',
  'help.guide.release-history.tip.1': 'Buat cadangan sebelum memperbarui; tab “Backup” ada di sebelah.',
  'help.guide.release-history.tip.2':
    'Pra-rilis ditampilkan tetapi tidak diumumkan sebagai pembaruan kecuali Anda menjalankan salah satunya.',
  // create-backup
  'help.guide.create-backup.title': 'Membuat dan memulihkan cadangan',
  'help.guide.create-backup.goal':
    'Ambil potret seluruh instans, simpan salinannya di tempat lain, dan pastikan bisa dikembalikan.',
  'help.guide.create-backup.step.1':
    'Di bawah “Pencadangan Data”, klik “Buat Cadangan”. Basis data dan unggahan dikemas menjadi satu file di server.',
  'help.guide.create-backup.step.2':
    '“Unduh” menyimpan salinan di luar mesin ini; tempat sampah menghapus yang lama untuk membebaskan ruang.',
  'help.guide.create-backup.step.3':
    '“Pulihkan” pada sebuah cadangan, atau “Unggah Cadangan” dengan sebuah file, menggantikan data saat ini setelah “Pulihkan Cadangan?” bertanya sekali.',
  'help.guide.create-backup.result':
    'Pemulihan mengembalikan pengguna, perjalanan, file, dan pengaturan seperti pada cadangan itu; semua orang dikeluarkan dari sesi.',
  'help.guide.create-backup.tip.1':
    'Memulihkan adalah satu-satunya tindakan di sini yang tidak bisa dibatalkan. Buat cadangan baru lebih dulu.',
  'help.guide.create-backup.tip.2':
    'Cadangan tersimpan di direktori data; salinan di mesin lain yang menjadikannya cadangan sungguhan.',
  // auto-backup
  'help.guide.auto-backup.title': 'Menjadwalkan cadangan',
  'help.guide.auto-backup.goal':
    'Biarkan server mencadangkan dirinya sendiri dan hanya menyimpan beberapa yang terakhir.',
  'help.guide.auto-backup.step.1':
    'Di bawah “Cadangan Otomatis”, aktifkan “Aktifkan cadangan otomatis” dan pilih “Interval”, “Jalankan pada jam”, dan, untuk mingguan atau bulanan, “Hari dalam seminggu” atau “Tanggal dalam sebulan”.',
  'help.guide.auto-backup.step.2':
    '“Hapus cadangan lama setelah” mengatur berapa lama sebuah cadangan disimpan; yang lebih lama dihapus saat cadangan baru dibuat.',
  'help.guide.auto-backup.result': 'Cadangan muncul di daftar sesuai jadwal; kegagalan disampaikan ke saluran admin.',
  'help.guide.auto-backup.tip.1': 'Waktu mengikuti zona waktu server, yang ditampilkan di tab “Audit”.',
  'help.guide.auto-backup.tip.2': 'Penyimpanan di server terbatas; menyimpan tiga sampai lima biasanya cukup.',
  // audit-log
  'help.guide.audit-log.title': 'Membaca log audit',
  'help.guide.audit-log.goal': 'Cari tahu siapa melakukan apa, dan kapan.',
  'help.guide.audit-log.step.1':
    'Baca barisnya: waktu, pengguna, tindakan, sumber daya, IP, dan detail, yang terbaru di atas. Tindakan dinamai menurut apa yang terjadi, seperti kegagalan login, perubahan MFA, atau pemulihan.',
  'help.guide.audit-log.step.2':
    '“Segarkan” memuat ulang bagian atas; “Muat lebih banyak” menelusuri lebih jauh ke belakang.',
  'help.guide.audit-log.result':
    'Jejak yang bisa Anda serahkan kepada siapa pun yang bertanya mengapa sesuatu berubah.',
  'help.guide.audit-log.tip.1': 'Waktu ditampilkan dalam zona waktu server, yang disebutkan di atas tabel.',
  'help.guide.audit-log.tip.2': 'Log hanya bisa ditambah; tidak ada yang bisa disunting atau dihapus dari aplikasi.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Perjalanan',
  'help.ctx.trip.summary':
    'Satu perjalanan, seluruhnya: rencana dengan hari-harinya, peta dan tempat, serta tab untuk transportasi, pemesanan, daftar, biaya, file, dan kolaborasi. Masing-masing punya layar bantuan sendiri di bawah layar ini.',
  'help.ctx.trip.bullet.1':
    'Bilah tab: “Rencana”, “Transportasi”, “Pemesanan”, “Daftar”, “Biaya”, “File”, dan “Collab”. Addon dan plugin menentukan tab mana yang ada di TREK Anda.',
  'help.ctx.trip.bullet.2':
    '“Rencana” terdiri dari tiga kolom: hari di kiri, peta di tengah, tempat di kanan. Pemesanan dan transportasi hidup di dalam rencana, pada perhentian dan di antara perhentian; tab-tab itu mendaftarnya.',
  'help.ctx.trip.bullet.3':
    '“Bagikan” di kanan atas membuka orang-orang dalam perjalanan: anggota, tamu, tautan undangan, dan tautan publik hanya-baca.',
  'help.ctx.trip.bullet.4':
    'Judul, tanggal, sampul, dan mata uang disunting dari “Perjalananku”, dengan ikon pensil di kartu perjalanan.',
  'help.ctx.trip.bullet.5':
    'Chevron di tepi dalam sebuah kolom melipatnya dan peta mengambil ruangnya; pembatas tipis di sebelah kolom mengubah lebarnya.',
  'help.ctx.trip.bullet.6': 'Panah batalkan di bilah alat hari mengembalikan perubahan terakhir pada rencana.',
  // add-member
  'help.guide.add-member.title': 'Menambahkan anggota',
  'help.guide.add-member.goal': 'Beri seseorang yang punya akun TREK akses ke perjalanan ini.',
  'help.guide.add-member.step.1': 'Klik “Bagikan” di kanan atas.',
  'help.guide.add-member.step.2': 'Di bawah “Undang Pengguna”, pilih orangnya dari daftar dan klik “Undang”.',
  'help.guide.add-member.step.3':
    'Orang itu kini muncul di bawah “Akses”. Mahkota menandai pemilik; ikon di ujung baris menghapus akses lagi.',
  'help.guide.add-member.result':
    'Anggota melihat dan menyunting perjalanan seperti Anda, dalam batas tingkat yang ditetapkan admin di bawah “Pengaturan Izin”.',
  'help.guide.add-member.tip.1':
    'Seseorang yang tidak ada di daftar belum punya akun TREK: tambahkan sebagai tamu, atau biarkan mereka mendaftar lewat tautan undangan.',
  'help.guide.add-member.tip.2':
    'Angka di sebelah “Akses” menghitung orang dalam perjalanan; tamu didaftar terpisah di bawahnya.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Mengundang lewat tautan',
  'help.guide.trip-invite-link.goal': 'Biarkan orang bergabung ke perjalanan sendiri.',
  'help.guide.trip-invite-link.step.1':
    'Klik “Bagikan”, lalu di bawah “Tautan undangan perjalanan” klik “Buat tautan undangan”.',
  'help.guide.trip-invite-link.step.2':
    'Klik “Salin” dan kirim tautannya. Siapa pun yang punya akun TREK dan membukanya bergabung sebagai anggota.',
  'help.guide.trip-invite-link.step.3':
    '“Buat ulang” mengganti tautan dan membuat yang lama tidak berguna; “Nonaktifkan” mematikannya.',
  'help.guide.trip-invite-link.result':
    'Siapa pun yang membuka tautan masuk ke perjalanan dan muncul di bawah “Akses”.',
  'help.guide.trip-invite-link.tip.1':
    'Orang tanpa akun tidak bisa memakainya. Admin membagikan tautan pendaftaran di bawah “Administrasi”, “Pengguna”, dan bisa mengaitkan satu tautan ke perjalanan ini.',
  'help.guide.trip-invite-link.tip.2':
    'Buat ulang ketika tautan terkirim ke chat yang salah: yang lama langsung berhenti bekerja.',
  // add-guest
  'help.guide.add-guest.title': 'Menambahkan tamu tanpa akun',
  'help.guide.add-guest.goal': 'Ikutkan seseorang yang tidak memakai TREK.',
  'help.guide.add-guest.step.1': 'Klik “Bagikan” dan gulir ke “Tamu”.',
  'help.guide.add-guest.step.2': 'Ketik namanya di “Nama tamu” dan klik “Tambah tamu”.',
  'help.guide.add-guest.result': 'Tamu bisa ditugaskan ke biaya, barang bawaan, dan tugas, tetapi tidak bisa masuk.',
  'help.guide.add-guest.tip.1':
    'Pensil mengganti nama tamu; ikon di ujung baris menghapusnya beserta bagian dan penugasannya.',
  'help.guide.add-guest.tip.2': 'Jika orang itu nanti punya akun, undang sebagai anggota dan hapus tamunya.',
  // public-link
  'help.guide.public-link.title': 'Menerbitkan tautan hanya-baca',
  'help.guide.public-link.goal': 'Tunjukkan perjalanan kepada orang yang tidak boleh menyuntingnya.',
  'help.guide.public-link.step.1':
    'Klik “Bagikan”; di kanan, di bawah “Tautan Publik”, centang apa yang boleh ditampilkan tautan. “Peta & Rencana” selalu aktif; “Pemesanan”, “Bawaan”, “Biaya”, dan “Chat” terserah Anda.',
  'help.guide.public-link.step.2': 'Klik “Buat tautan”, lalu “Salin”.',
  'help.guide.public-link.step.3': 'Centangnya bisa diubah selama tautan ada; “Hapus tautan” menghentikannya.',
  'help.guide.public-link.result':
    'Siapa pun yang punya tautan melihat bagian yang dipilih tanpa masuk dan tidak bisa mengubah apa pun.',
  'help.guide.public-link.tip.1':
    'Tautan ini tidak terdaftar di mana pun; siapa pun yang memegangnya bisa membukanya, jadi perlakukan seperti kata sandi.',
  'help.guide.public-link.tip.2': 'Untuk hak menyunting, tambahkan orang itu sebagai anggota saja.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Menyerahkan perjalanan atau keluar darinya',
  'help.guide.transfer-ownership.goal':
    'Jadikan orang lain pemilik, atau keluar dari perjalanan yang bukan milik Anda.',
  'help.guide.transfer-ownership.step.1':
    'Klik “Bagikan”. Di bawah “Akses”, mahkota di baris seorang anggota menjadikan orang itu pemilik; konfirmasi pertanyaannya.',
  'help.guide.transfer-ownership.step.2':
    '“Keluar dari perjalanan” di baris Anda sendiri mengeluarkan Anda dari perjalanan; sebagai pemilik, serahkan dulu.',
  'help.guide.transfer-ownership.result':
    'Pemilik baru mengelola anggota dan bisa menghapus perjalanan; Anda tetap anggota biasa.',
  'help.guide.transfer-ownership.tip.1':
    'Pemilik adalah siapa pun yang membuat perjalanan sampai diserahkan; menghapus perjalanan hanya bisa dilakukan olehnya.',
  'help.guide.transfer-ownership.tip.2':
    '“Hapus akses” di baris orang lain adalah tombol yang sama dari arah sebaliknya: pemilik mengeluarkan seorang anggota.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Memberi ruang untuk peta',
  'help.guide.collapse-columns.goal': 'Lipat sebuah kolom atau beri lebar lebih.',
  'help.guide.collapse-columns.step.1':
    'Klik chevron di tepi dalam kolom hari untuk melipatnya; peta mengambil ruangnya. Kolom tempat punya chevron yang sama.',
  'help.guide.collapse-columns.step.2': 'Klik chevron lagi untuk mengembalikan kolom.',
  'help.guide.collapse-columns.step.3': 'Seret pembatas tipis antara kolom dan peta untuk mengubah lebar kolom.',
  'help.guide.collapse-columns.result': 'Lebarnya diingat; kolom kembali terbuka pada kunjungan berikutnya.',
  'help.guide.collapse-columns.tip.1': 'Kedua kolom bisa dilipat sekaligus untuk tampilan peta saja.',
  'help.guide.collapse-columns.tip.2':
    'Di ponsel tidak ada kolom: “Rencana” dan “Tempat” adalah dua tombol di bagian bawah peta.',
  // undo-change
  'help.guide.undo-change.title': 'Membatalkan perubahan terakhir',
  'help.guide.undo-change.goal': 'Tarik kembali apa yang baru saja Anda lakukan pada rencana.',
  'help.guide.undo-change.step.1':
    'Klik panah batalkan di bilah alat di atas hari; tooltip-nya menyebut perubahan yang akan ditarik kembali.',
  'help.guide.undo-change.result':
    'Rencana kembali seperti semula, dan panahnya berubah abu-abu sampai perubahan berikutnya.',
  'help.guide.undo-change.tip.1':
    'Batalkan mencakup rencana: menugaskan, menghapus, mengurutkan ulang, dan memindahkan tempat, mengoptimalkan rute, menghapus tempat, perubahan kategori, dan impor.',
  'help.guide.undo-change.tip.2':
    'Dalamnya satu langkah: hanya perubahan terakhir yang bisa ditarik kembali, dan perubahan baru menggantikannya.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Tempat',
  'help.ctx.trip-places.summary':
    'Kolom kanan rencana: setiap tempat perjalanan, direncanakan atau belum, dengan pencarian dan filter, serta cara-cara memasukkan tempat, dengan tangan, dari sebuah file atau dari daftar yang dibagikan.',
  'help.ctx.trip-places.bullet.1':
    '“Tambah Tempat/Aktivitas” di atas membuka formulir untuk tempat yang Anda ketik atau cari. Selama sebuah hari terbuka, tombol itu berbunyi “Tempat baru”, dan “Ke hari” di sebelahnya membuat tempat langsung pada hari tersebut.',
  'help.ctx.trip-places.bullet.2':
    '“Impor file” menerima file .gpx, .kml dan .kmz; “Impor Daftar” menerima daftar Google Maps atau Naver Maps yang dibagikan. Sebuah file juga bisa cukup dijatuhkan ke kolom ini.',
  'help.ctx.trip-places.bullet.3':
    'Menu tarik-turun beralih antara “Semua”, “Belum direncanakan”, “Direncanakan” dan, setelah sebuah trek diimpor, “Trek”; di bawahnya ada pencarian, filter kategori dan bintang untuk penilaian minimum.',
  'help.ctx.trip-places.bullet.4':
    'Sebuah baris menampilkan gambar, nama dan deskripsi atau alamat. Klik untuk melihat detail tempat, seret ke sebuah hari, atau klik kanan untuk “Sunting”, “+ Hari”, “Buka Situs Web”, “Google Maps”, “Simpan ke Koleksi” dan “Hapus”.',
  'help.ctx.trip-places.bullet.5':
    'Dengan sebuah hari terbuka, tanda + di ujung baris yang belum direncanakan menaruh tempat itu pada hari tersebut, dan “Direncanakan” hanya mendaftar hari itu, dengan “Tampilkan seluruh perjalanan” untuk melebarkan lagi.',
  'help.ctx.trip-places.bullet.6':
    'Tanda centang di ujung kanan baris filter memulai pemilihan: beberapa baris sekaligus mendapat kategori baru, masuk ke sebuah koleksi atau dihapus.',
  // create-place
  'help.guide.create-place.title': 'Membuat tempat',
  'help.guide.create-place.goal':
    'Tambahkan tempat atau aktivitas dengan tangan, lengkap dengan semua yang perlu diketahui rencana tentangnya.',
  'help.guide.create-place.step.1':
    'Klik “Tambah Tempat/Aktivitas” di atas kolom tempat (“Tempat baru” selama sebuah hari terbuka). Formulir terbuka.',
  'help.guide.create-place.step.2':
    'Ketik tempatnya di “Cari tempat...” di atas dan pilih satu hasil. “Nama”, “Alamat”, “Lintang” dan “Bujur” terisi, dan “Detail tempat” di sebelah kanan menampilkan gambar, sebuah deskripsi dan fakta tentangnya. “Bukan tempat yang tepat? Cari di Google saja” menjalankan pencarian sekali lagi lewat Google.',
  'help.guide.create-place.step.3':
    'Di “Detail tempat”, klik pada sebuah gambar di bawah “Pilih gambar” menjadikannya gambar tempat itu; “Gunakan teks ini” memindahkan deskripsinya ke formulir.',
  'help.guide.create-place.step.4':
    'Periksa kolom-kolomnya: “Nama” wajib; “Deskripsi” dan “Catatan” milik Anda; “Alamat”, “Lintang” dan “Bujur” datang dari pencarian atau diketik; “Kategori” memilih salah satu kategori perjalanan, dan tanda + di sebelahnya membuat kategori baru saat itu juga; “Situs web” menerima tautannya.',
  'help.guide.create-place.step.5':
    'Klik “Tambah”. Jika tempat dengan nama yang sama sudah ada di perjalanan, formulir mengatakannya dan tombolnya berubah menjadi “Tetap tambahkan”.',
  'help.guide.create-place.result':
    'Tempat itu ada di daftar dan di peta, di bawah “Belum direncanakan” sampai ditaruh pada sebuah hari.',
  'help.guide.create-place.tip.1':
    '“File” dan “Costs” di bagian bawah formulir melampirkan dokumen ke tempat itu, atau membuka editor “Costs” untuk pengeluarannya tepat setelah menyimpan.',
  'help.guide.create-place.tip.2':
    'Tanpa kunci Google, pencarian berjalan lewat indeks TREK dan OpenStreetMap: tempatnya tetap ketemu, hanya saja tanpa penilaian, jam buka dan foto.',
  'help.guide.create-place.tip.3':
    'Sebuah tempat juga bisa dimulai dari peta: klik kanan titiknya, dan formulir terbuka dengan koordinat serta alamat sudah terisi.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Menambahkan tempat langsung ke hari yang dibuka',
  'help.guide.place-to-open-day.goal':
    'Lewati langkah kedua: buat atau pilih tempatnya dan langsung taruh pada hari itu.',
  'help.guide.place-to-open-day.step.1':
    'Klik judul sebuah hari di kolom hari. Hari itu terbuka: kartunya disorot, dan kolom tempat mendapat tombol “Ke hari”.',
  'help.guide.place-to-open-day.step.2':
    '“Ke hari” membuka formulir yang sama seperti “Tempat baru”, hanya saja tempat itu mendarat pada hari yang dibuka begitu Anda klik “Tambah”.',
  'help.guide.place-to-open-day.step.3':
    'Tempat yang sudah ada masuk ke hari yang dibuka lewat tanda + di ujung barisnya, atau dengan klik kanan, “+ Hari”.',
  'help.guide.place-to-open-day.result':
    'Tempat itu terdaftar di bawah hari tersebut, di urutan terakhir; seret ke atas atau ke bawah ke posisi yang semestinya.',
  'help.guide.place-to-open-day.tip.1':
    'Menyeret sebuah baris ke sebuah hari juga bisa, dan itu langsung dapat menjatuhkan tempat di antara dua perhentian.',
  'help.guide.place-to-open-day.tip.2': '“Batalkan” di bilah alat di atas hari-hari menarik kembali penugasan itu.',
  // filter-places
  'help.guide.filter-places.title': 'Menemukan tempat dalam daftar',
  'help.guide.filter-places.goal': 'Persempit kolom ke tempat-tempat yang Anda cari.',
  'help.guide.filter-places.step.1':
    'Menu tarik-turun di atas beralih antara “Semua”, “Belum direncanakan” (belum ada di hari mana pun), “Direncanakan” (ada di sebuah hari) dan “Trek” (trek GPX yang diimpor), masing-masing dengan jumlahnya.',
  'help.guide.filter-places.step.2': 'Ketik di “Cari tempat...”; daftarnya menyempit sambil Anda mengetik.',
  'help.guide.filter-places.step.3':
    '“Semua Kategori” membuka daftar untuk mencentang satu kategori atau lebih, termasuk “Tanpa Kategori”; “Hapus filter” di bagian bawahnya mengembalikannya.',
  'help.guide.filter-places.step.4':
    'Bintang di sebelahnya mengatur penilaian minimum: 5+, 4+ dan seterusnya hanya menampilkan tempat yang Anda beri nilai setidaknya setinggi itu.',
  'help.guide.filter-places.result':
    'Angka di atas baris-baris itu mengatakan berapa tempat yang cocok; filternya saling menggabung.',
  'help.guide.filter-places.tip.1':
    'Dengan sebuah hari terbuka, “Direncanakan” hanya mendaftar hari itu dan mengatakannya: “Hanya menampilkan hari yang dibuka”, dengan “Tampilkan seluruh perjalanan” di sebelahnya.',
  'help.guide.filter-places.tip.2':
    'Peta juga menyempit ke hari yang dibuka; “Semua” di daftar tetap menampilkan setiap tempat perjalanan.',
  // edit-place
  'help.guide.edit-place.title': 'Mengubah tempat',
  'help.guide.edit-place.goal': 'Perbaiki nama, geser pin, tambahkan situs web atau ganti kategori.',
  'help.guide.edit-place.step.1':
    'Klik kanan barisnya dan pilih “Sunting”, atau buka tempatnya dan klik “Sunting” di detailnya.',
  'help.guide.edit-place.step.2':
    'Ubah yang Anda perlukan: “Nama”, “Deskripsi”, “Catatan”, “Alamat”, “Lintang” dan “Bujur”, “Kategori”, “Situs web”. Bila dibuka dari sebuah hari, formulir juga punya “Catatan untuk hari ini” serta “Mulai” dan “Selesai” untuk hari itu.',
  'help.guide.edit-place.step.3': 'Klik “Perbarui”.',
  'help.guide.edit-place.result':
    'Perubahan berlaku di mana pun tempat itu muncul: daftar, peta dan setiap hari yang memuatnya.',
  'help.guide.edit-place.tip.1':
    '“Catatan untuk hari ini” milik tempat itu pada satu hari tersebut; “Catatan” milik tempat itu sendiri.',
  'help.guide.edit-place.tip.2':
    '“Selesai” sebelum “Mulai” memblokir “Perbarui”; “Waktu tumpang tindih dengan:” hanya memperingatkan bahwa perhentian lain pada hari itu punya waktu yang sama.',
  // delete-place
  'help.guide.delete-place.title': 'Menghapus tempat',
  'help.guide.delete-place.goal': 'Keluarkan sebuah tempat dari perjalanan untuk selamanya.',
  'help.guide.delete-place.step.1': 'Klik kanan barisnya dan pilih “Hapus”, atau klik “Hapus” di detail tempat itu.',
  'help.guide.delete-place.step.2':
    'Konfirmasikan. Jika sebuah malam dipesan di tempat itu, atau sebuah pemesanan terkait dengannya, pertanyaannya mengatakan apa saja yang ikut terbawa.',
  'help.guide.delete-place.result':
    'Tempat itu hilang dari daftar, peta dan setiap hari; “Batalkan” di bilah alat di atas hari-hari mengembalikannya.',
  'help.guide.delete-place.tip.1':
    'Untuk mengeluarkan tempat dari satu hari saja, gunakan “Hapus dari Hari” pada perhentian itu sebagai gantinya.',
  'help.guide.delete-place.tip.2': 'Beberapa tempat sekaligus: tanda centang di sebelah filter memulai pemilihan.',
  // select-places
  'help.guide.select-places.title': 'Mengubah atau menghapus beberapa tempat sekaligus',
  'help.guide.select-places.goal': 'Rapikan daftar dalam satu kali jalan alih-alih satu per satu.',
  'help.guide.select-places.step.1':
    'Klik tanda centang di ujung kanan baris filter. Baris-baris mendapat kotak centang dan muncul sebuah bilah berisi tindakannya.',
  'help.guide.select-places.step.2':
    'Centang baris-barisnya, atau “Pilih semua” di bilah itu; bilah itu menghitung apa yang terpilih.',
  'help.guide.select-places.step.3':
    '“Change category” memberi semuanya satu kategori; “Simpan ke Koleksi” menyalinnya ke salah satu koleksi Anda; “Hapus yang dipilih” menghapusnya setelah sebuah konfirmasi.',
  'help.guide.select-places.step.4': 'Klik tanda centang itu lagi untuk keluar dari pemilihan.',
  'help.guide.select-places.result':
    'Perubahan berlaku untuk setiap tempat yang terpilih; penghapusan bisa dibatalkan dari bilah alat di atas hari-hari.',
  'help.guide.select-places.tip.1':
    'Filter tetap bekerja sambil Anda memilih: saring ke “Belum direncanakan” dulu, lalu “Pilih semua” menangkap persis yang itu.',
  'help.guide.select-places.tip.2':
    '“Tandai dikunjungi di daftar Anda” muncul di bilah itu saat addon Koleksi aktif: ia mencentang tempat-tempat itu di koleksi tempat mereka disimpan.',
  // import-places-file
  'help.guide.import-places-file.title': 'Mengimpor tempat dari file GPX, KML atau KMZ',
  'help.guide.import-places-file.goal': 'Masukkan apa yang diekspor Google My Maps, Google Earth atau pelacak GPS.',
  'help.guide.import-places-file.step.1': 'Klik “Impor file”, atau jatuhkan filenya di mana saja pada kolom tempat.',
  'help.guide.import-places-file.step.2':
    'Pilih filenya atau seret ke dalam kotak. Untuk GPX, centang apa yang akan diimpor: “Titik jalan”, “Rute”, “Trek (dengan geometri jalur)”; untuk KML dan KMZ, “Titik (Placemarks)” dan “Jalur (LineStrings)”.',
  'help.guide.import-places-file.step.3':
    '“Perkaya tempat via Google” mencari setiap tempat yang diimpor untuk mengisi foto, alamat dan detail; ini membutuhkan kunci Google.',
  'help.guide.import-places-file.step.4':
    'Klik “Impor”. Ringkasannya mengatakan berapa tempat yang dibuat dan berapa yang dilewati karena sudah ada di perjalanan.',
  'help.guide.import-places-file.result':
    'Tempat-tempatnya ada di daftar; sebuah trek membawa penanda rute di barisnya, tergambar di peta dan mendapat filter “Trek” sendiri.',
  'help.guide.import-places-file.tip.1':
    'File yang terlalu besar ditolak dengan menyebut batas ukurannya; ekspor ulang tanpa foto, atau pecah menjadi beberapa bagian.',
  'help.guide.import-places-file.tip.2': 'Impor itu bisa dibatalkan seluruhnya dari bilah alat di atas hari-hari.',
  // import-places-list
  'help.guide.import-places-list.title': 'Mengimpor daftar Google Maps atau Naver Maps yang dibagikan',
  'help.guide.import-places-list.goal': 'Ubah tautan daftar yang dibagikan menjadi tempat.',
  'help.guide.import-places-list.step.1': 'Klik “Impor Daftar” dan pilih “Daftar Google” atau “Daftar Naver”.',
  'help.guide.import-places-list.step.2':
    'Tempelkan tautan berbagi daftar itu. Tautan rute Google Maps juga bisa: perhentiannya menjadi tempat, dalam urutan berkendara.',
  'help.guide.import-places-list.step.3': 'Klik “Impor”.',
  'help.guide.import-places-list.result':
    'Setiap tempat dari daftar itu ada di perjalanan, dengan nama seperti di daftar; tempat yang sudah ada di perjalanan dilewati.',
  'help.guide.import-places-list.tip.1':
    'Daftarnya harus dibagikan secara publik; tautan daftar pribadi tidak mengimpor apa pun.',
  'help.guide.import-places-list.tip.2':
    '“Daftar Naver” membutuhkan addon Naver List Import, yang dinyalakan admin di bawah “Addon”; tanpa itu tombolnya berbunyi “Daftar Google”.',
};

export default help;
