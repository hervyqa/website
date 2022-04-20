---
draft: false
date: 2022-04-19T16:52:37+07:00
title: "Sebelum Memulai dan Bekerja dengan Scribus"
description: "Hal-hal yang perlu diketahui sebelum memulai dengan scribus. Kamu wajib tahu."
image: "images/blog/sebelum-memulai-dan-bekerja-dengan-scribus.png"
type: "featured" # featured/regular
categories:
- scribus
---

Scribus adalah perangkat lunak untuk mendesain tata letak halaman. Umumnya digunakan dalam urusan percetakan, seperti untuk membuat majalah, koran, buku, novel, laporan, dan lain-lain. Tetapi scribus lebih berfungsi untuk hal artistik, sebab memiliki fitur yang tidak seperti perangkat perkantoran pada umumnya. Jika Anda familiar dengan adobe indesign, maka scribus lebih mirip seperti itu.

Sepengalaman penulis ketika menggunakan scribus, akan lebih baik jika mengetahui hal-hal apa saja sebelum belajar scribus. Ini penting, sebab akan meningkatkan alur kerja dan menghindari hal yang tidak perlu dilakukan.

#### Resolusi layar FHD

Minimal menggunakan resolusi 1366x768 (HD), tetapi sangat disarankan menggunakan resolusi layar 1920x1080 (FHD). Sebab ada jendela yang tidak muat untuk menampilkan "Content Properties" di layar HD. Karena terlalu banyaknya pilihan pengaturan, ada beberapa pengaturan yang tidak terlihat dalam ukuran HD ini. Jadi, saya sarankan menggunakan Full HD atau 1920x1080.

Menggunakan resolusi HD maka docker akan tertutupi seperti ini.

{{< image src="images/blog/scribus-docker-tertutup.png" alt="menutup docker scribus" >}}

Jika tidak ada monitor FHD, misalnya ada HD saja 1366x768 saja. Cara kreatif untuk melebarkan resolusi layarnya adalah dengan menyembunyikan panel taksbar bawah. Ini bisa dilakukan di windows, linux dengan KDE, Xfce, atau pengguna WM saja. Setidaknya dengan cara ini, jendela scribus dapat memenuhi layar secara penuh (fullscreen).

Dengan tampilah yang penuh akan memudahkan dalam penataan layout dan mengatur pilihan sesuai yang dikehendaki.

#### Menata tampilan docker

Secara bawaan, tampilan jendela scribus sedikit perlu dioptimalkan. Agar tidak ambigu penulis sebut "Docker" saja, meskipun di scribus berasal dari menu `Windows` > `Jenis jendela`. Hal ini mirip seperti di krita maupun di inkscape yang menyebutnya sebagai docker. Jika di krita, ada istilah layout "Workspace" yang bisa diganti-ganti dockernya sesuai yang dinginkan pengguna. Jika di inkscape, masih belum ada fitur custom workspace.

Kembali ke scribus, jendela apa saja yang perlu ditampilkan di workspace?.

1. Properties
2. Content Properties
3. Layer
4. Align and Distribute

Cukup menggunakan 4 docker ini. Yang paling sering digunakan yaitu docker properties dan content properties. Docker lain sebagai opsional saja.

{{< image src="images/blog/scribus-docker-setting.png" alt="scribus docker setting" >}}

#### Jago shortcut

Beberapa shortcut yang wajib dihafal yaitu:

- <kbd><kbd>t</kbd></kbd> = Masukkan teks
- <kbd><kbd>n</kbd></kbd> = Link teks
- <kbd><kbd>s</kbd></kbd> = Masukkan shape
- <kbd><kbd>F4</kbd></kbd> = Style manager
- <kbd><kbd>Ctrl</kbd>+<kbd>i</kbd></kbd> = Tambah gambar
- <kbd><kbd>Ctrl</kbd>+<kbd>e</kbd></kbd> = Foto efek
- <kbd><kbd>Ctrl</kbd>+<kbd>t</kbd></kbd> = Story editor
- <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>e</kbd></kbd> = Ekspor ke gambar
- <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd></kbd> = Ekspor ke pdf siap cetak

Beberapa shortcut ada perlu ditambahkan manual. Masuk ke `File` > `Preferences` > `Keyboard shortcut`. Pilih jenis fungsinya, klik `Set` lalu tekan shortcut yang dikehendaki.
- <kbd><kbd>Ctrl</kbd>+<kbd>m</kbd></kbd> = Master pages
- <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>m</kbd></kbd> = Apply Master pages
- <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>g</kbd></kbd> = Manage Guides

Jenis perintah pada umumnya.
- <kbd><kbd>Ctrl</kbd>+<kbd>c</kbd></kbd> = Copy
- <kbd><kbd>Ctrl</kbd>+<kbd>v</kbd></kbd> = Paste
- <kbd><kbd>Ctrl</kbd>+<kbd>d</kbd></kbd> = Duplikat
- <kbd><kbd>Ctrl</kbd>+<kbd>g</kbd></kbd> = Grup
- <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>g</kbd></kbd> = Ungroup

#### Ganti semua warna ke cmyk

Jika kebutuhan desain layout Anda untuk dicetak, maka rubahlah warna yang semua RGB menjadi CMYK. CMYK adalah jenis warna spot yang waras untuk percetakan. Secara pribadi, baik untuk percetakan atau pun digital saja tetap diganti ke CMYK. Cari amannya jika sewaktu-waktu akan dicetak, tentunya akan meminimalisir revisi.

Masuk ke menu `Edit` > `Color and Fill`. Pilih warna yang terdapat warna RGB. Lalu klik `Edit`.

{{< image src="images/blog/scribus-replace-color.png" alt="scribus mengganti warna" >}}

Kemudian ganti spot color menjadi CMYK. Jika kurang pas, bisa di sesuaikan nilai kodenya. Lalu klik `OK`.

{{< image src="images/blog/scribus-replace-color-cmyk.png" alt="scribus mengganti warna cmyk" >}}

***

Sebenarnya masih banyak yang perlu dituliskan disini. Seperti mengatur grid, margin, bleed, font, layout, tahapan pre-press. InsyaAllah akan berlanjut. ^^

Sekian tips awal untuk memulai belajar scribus. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

***

<!--
#### Tahapan prepress

#### Menentukan grid dan margin

#### Menentukan halaman dan bleed

#### Perencanaan font

#### Perancangan layout

##### Sub Judul
-->
