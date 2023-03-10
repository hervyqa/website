---
draft: false
date: 2019-07-04T23:33:14+07:00
title: "Inkscape untuk Pemula"
description : "Artikel ini sangat relevan untuk pemula yang mau hijrah ke
inkscape. Serta hal-hal yang perlu diketahui tentang inkscape dasar mulai dari
pemasangan, performa, komunitas, dan kebebasan perangkat lunak."
image: "images/blog/inkscape-untuk-pemula.png"
type: "regular" # [featured/regular]
categories:
- inkscape
- ilustrasi
---

Artikel ini sangat relevan untuk pemula yang mau hijrah ke inkscape.
Sebab, Inkscape termasuk Free Software yang benar-benar menuaikan hak-hak
penggunanya.

***

#### Free

[Inkscape] merupakan perangkat lunak pengolah vektor yang bersifat
perangkat lunak bebas dibawah lisensi [GNU
GPL](https://id.m.wikipedia.org/wiki/GNU_GPL) yang artinya bebas untuk
dimodifikasi, dikembangkan, didapatkan dan bahkan dijual. Tujuan inkscape
sendiri menjadi pengolah vektor yang mutakhir yang mendukung XML, SVG, dan CSS.

#### Proyek Fork

Pada 2003 Inkscape merupakan fork (perkembangan) dari proyek
[Sodipodi](https://id.m.wikipedia.org/wiki/Sodipodi) dan Sodipodi sendiri pada
1999 merupakan fork dari Gill (Gnome Ilustration Application). Dari Sodipodi
tersebut inkscape berganti bahasa pemrograman C ke C++, berubah ke GTK+ alias
_gtkmm_ dan menerapkan standar SVG. Inkscape juga menambahkan fitur dan
antarmuka baru di setiap rilis terbarunya.

#### Cross-Platform

Inkscape mampu berjalan di Mac OS X, sistem operasi berbasis Unix dan di sistem
Microsoft Windows. Inkscape juga tersedia Flatpak, Snap, ApppImage. Jadi Anda
tak perlu khawatir, karena inkscape bisa di install dimana saja.

#### Performa

Inkscape juga merupakan pengolah vektor yang ringan, ringan segi ukuran dan
performa. Versi 0.92.4x64 untuk windows inkscape memiliki ukuran tidak lebih
dari 70 Mb. Kecil-kecil cabe rawit. Berbeda dengan software propietary
(non-free) yang memiliki ratusan Mb bahkan ada yang bergiga-giga.

Performa inkscape juga cukup ringan, di PC saya membuka aplikasi inkscape cuma
sekitar 3 detik dan menggunakan resource RAM sekitar 150 Mb ketika idle (proses
diam). Jelas lebih ringan dari software propietary (non-free). Kecuali jika Anda
memakai puluhan gradien, banyak layer, banyak blur dan efek.

#### Mudah di Install

Inkscape paling mudah di install lewat Software Center, tinggal klik install
saja dan tunggu sampai selesai. Jika tidak biasa dengan GUI bisa menggunakan
perintah Command Promt.

##### Cara install:

* LangitKetujuh

{{< cmd >}}
get inkscape
{{< /cmd >}}

* Void linux

{{< cmd >}}
sudo xbps-install -S inkscape
{{< /cmd >}}

* openSUSE

{{< cmd >}}
sudo zypper install inkscape
{{< /cmd >}}

* Centos/RedHat

{{< cmd >}}
su -c 'yum install inkscape'
{{< /cmd >}}

* Fedora

{{< cmd >}}
sudo dnf install inkscape
{{< /cmd >}}

* Debian/Ubuntu

{{< cmd >}}
sudo apt update; sudo apt upgrade
{{< /cmd >}}

{{< cmd >}}
sudo apt install inkscape
{{< /cmd >}}

* Ubuntu PPA

{{< cmd >}}
sudo add-apt-repository ppa:inkscape.dev/stable
{{< /cmd >}}

{{< cmd >}}
sudo apt-get update
{{< /cmd >}}

{{< cmd >}}
sudo apt install inkscape
{{< /cmd >}}

* Arch/Manjaro

{{< cmd >}}
sudo pacman -Syyu
{{< /cmd >}}

{{< cmd >}}
sudo pacman -S inkscape
{{< /cmd >}}

* Snap

{{< cmd >}}
sudo snap install inkscape
{{< /cmd >}}

* Flatpak

{{< cmd >}}
flatpak install flathub org.inkscape.Inkscape
{{< /cmd >}}

* Microsoft Windows & Mac OS

Laman Unduh [Inkscape]

#### Ekstensi Berkas

Ekstensi Inkscape menggunakan `SVG` (Scalable Vector Graphics) yaitu format
gambar yang menggunakan XML (eXtensible Markup Language). `svg` merupakan
ekstensi universal dan standar Word Wide Web Consortium (W3C). Jadi, sudah
dipastikan `svg` bisa digunakan di inkscape versi berapapun, sehingga Anda tidak
perlu khawatir ketika pindah platform ke Mac OS, Unix atau Microsoft Windows.
Toh, `svg` bisa dibaca dimana saja, bahkan dibuka di peramban web sekali pun, ya
karena faktor Cross-platform tadi.

Kalau dibandingkan dengan `CDR` (CorelDraw) memiliki versi sendiri-sendiri.
Contohnya pada versi `cdr` X3, X4, X5, X6, X7, X8. Pada versi X6 tidak bisa
membaca berkas X5, X5 tidak bisa membaca berkas X4 dan seterusnya. Artinya `cdr`
tidak bisa membaca versi kebawah. Padahal percetakan kebanyakan menggunakan
versi X4-X5 agar ringan katanya. Jadi, sangat merepotkan sekali.

Contoh berkas svg.
```svg
<svg width="100px" height="50px">
<text style="fill:red" x ="10" y="20">Hello World !</text>
</svg>
```

#### Line Art

Inkscape memudahkan penggunanya untuk membuat line art. Ini berguna untuk
membuat ilustrasi yang sederhana sampai dengan kerumitan yang tinggi. Apalagi
Inkscape mudah untuk membuat lengkungan dengan menarik garisnya saja. Beda
dengan Aplikasi sebelah yang haru mengeklik node lalu muncul kedua pangkal, baru
bisa membuat lengkungan.

Sebenarnya ada dua kunci utama membuat line art yang bagus. Yaitu,
_banyak-banyak latihan dan ekstra sabar_.

#### Menghindari Not-Responding

Tipsnya saya untuk meminimalisir macet/not-responding/_nge-hang_ antara lain:

* Jangan terlalu banyak impor gambar bitmap.
* Jangan zoom terlalu dekat.
* Jangan terlalu banyak mengaktifkan snap <kbd><kbd>%</kbd></kbd>.
* Jangan undo/redo ketika mode teks. Biasakan tekan
<kbd><kbd>Esc</kbd></kbd>, <kbd><kbd>s</kbd></kbd> ketika akan undo/redo.
* Jangan buru-buru Union <kbd><kbd>Ctrl</kbd>+<kbd>+</kbd></kbd>, Artinya anda
tidak perlu menggabungkan banyak objek dulu. Khawatirnya nanti ketika tak
sengaja menekan <kbd><kbd>n</kbd></kbd> akan macet inkscapenya.

#### Konsultasi Ke Komunitas

Ada fakta menarik tentang Free Software. Salah satunya tentang cara marketing.
Marketing dalam Perangkat Propietary pasti banyak, karena ada produk yang jelas
dan harus mereka jual. Berbeda dengan marketing FLOSS (Free/Libre Open Source
Software), Marketing FLOSS itu nyaris tidak ada, yang ada hanyalah _Customer
Service_ yang bisa disebut dengan "Komunitas". Komunitas FLOSS membantu dengan
kesuka-relaan, saling berusaha menjawab dan membantu. Anda bisa bertanya-tanya
di komunitas, meminta bantuan dan memberikan solusi. Tetapi alangkah baiknya
jika meminta bantuan mengucakpkan "Tolong" di awal dan "Terima kasih" di akhir.

Jujur saja artikel ini ditulis bukan tentang inkscapenya, melainkan karena
[komunitasnya](https://t.me/gimpscape). Mulai dari semangat gotong royong,
berusaha membuat karya sebagus mungkin (cek karya di
[RuangKaryaGimpscape](https:www.t.me/gimpscape_ruang_karya)), dan menamkan
ideologi bahwa _"free software benar-benar menuaikan hak-hak Anda"_. ^^

***

#### Perlu Dukungan

Menjadi anggota komunitas Open Source telah menyadarkan saya tentang arti
_"Semangat berbagi dan Gotong royong"_. Inkscape sendiri juga butuh dukungan
baik berupa donasi, bantuan perbaikan kutu, dokumentasi dan lain-lain. bahkan
membantu perbaikan typo juga telah dianggap sudah berkontribusi.

Alhamdullillah, Sepertinya cukup artikelnya. Lumayan untuk pemanasan pemula
inkscape. Sekian dan terima kasih sudah membaca. Semoga bermanfaat.

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org
[GNOME.ID]:https://www.gnome.id
