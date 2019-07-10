---
draft: false
title: "Hal-hal yang perlu diketahui tentang Inkscape untuk Pemula"
date: 2019-07-04T23:33:14+07:00
author:
  - name : "Hervy Qurrotul Ainur"
description : "Berkaitan dengan Inkscape untuk pemula"
comments : ""
toc: false
type:
  - post
tags:
  - desain
  - floss
  - inkscape
  - ui/ux
  - pemula
series:
  -
categories:
  -
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Tulisan ini tidak membandingkan antara sofware vektor manapun. Penulis juga pernah memakai software Open Source (Bebas) dan Propietary (Berbayar). Jadi, untuk pemula yang mau hijrah dan mau _kepo_ tentang inkscape, Simak baik-baik ya.

## Free.

[Inkscape] merupakan perangkat lunak pengolah vektor yang bersifat perangkat lunak bebas dibawah lisensi [GNU GPL](https://id.m.wikipedia.org/wiki/GNU_GPL) yang artinya bebas untuk dimodifikasi, dikembangkan, dan didapatkan. Tujuan inkscape sendiri menjadi pengolah vektor yang mutakhir yang mendukung XML, SVG, dan CSS.

Uniknya, masyarakat menganggapnya inkscape itu _gratis_, bukan bebas. Padahal tidak demikian. Cara mendapatkan mengunduh inkscape itu _(kebanyakan)_ memang terlihat mudah, hanya klik `Download` saja, padahal mengunduh inkscape juga membutuhkan biaya internet, listrik, dan tenaga juga.

Indonesia sebagai negara berkembang yang mayoritas masyarakatnya ketika membeli perangkat lunak mungkin berfikir dua kali _(atau lebih)_. Inilah alasannya mengapa perangkat lunak berbasis Open Source sangat cocok membantu dalam perekonomian. Relatif lebih hemat sekian kali dari pada membeli aplikasi Propietary.

## Proyek Fork.

Pada 2003 Inkscape merupakan fork (perkembangan) dari proyek [Sodipodi](https://id.m.wikipedia.org/wiki/Sodipodi) dan Sodipodi sendiri pada 1999 meupakan fork dari Gill (Gnome Ilustration Application). Dari Sodipodi tersebut inkscape berganti bahasa pemrograman C ke C++, berubah ke GTK+ alias _gtkmm_ dan menerapkan standar SVG. Inkscape juga menambahkan fitur dan antarmuka baru di setiap rilis terbarunya.

## Cross-platform.

Inkscape mampu berjalan di Mac OS X, sistem operasi berbasis Unix dan di sistem Microsoft Windows. Inkscape juga tersedia Flatpak, Snap, ApppImage. Jadi Anda tak perlu khawatir, karena inkscape bisa di install dimana saja.

## Performa.

Inkscape juga merupakan pengolah vektor yang ringan, ringan segi ukuran dan performa. Versi 0.92.4x64 untuk windows inkscape memiliki ukuran tidak lebih dari 70 Mb. Kecil-kecil cabe rawit. Berbeda dengan software sebelah yang memiliki ratusan Mb bahkan ada yang bergiga-giga.

Performa inkscape juga cukup ringan, di PC saya membuka aplikasi inkscape cuma sekitar 3 detik dan menggunakan resource RAM sekitar 150 Mb ketika idle (proses diam). Jelas lebih ringan dari yang sebelah. Kecuali jika Anda memakai puluhan gradien, banyak layer, banyak blur dan efek. Performanya gimana? ya silahkan dicoba sendiri. :)

## Mudah di Install.

Inkscape paling mudah di install lewat Software Center, tinggal klik install saja dan tunggu sampai selesai. Atau Anda yang tidak biasa dengan GUI bisa menggunakan CLI. _(* mending lewat CLI aja deh)_

**openSUSE**

```
sudo zypper install inkscape
```
**Centos/RedHat**

```
su -c 'yum install inkscape'
```

**Fedora**

```
sudo dnf install inkscape
```

**Debian/Ubuntu**

```
# update dulu (opsi)
sudo apt update; sudo apt upgrade

# kemudian install
sudo apt install inkscape
```

**Arch/Manjaro**

```
# update dulu (opsi)
sudo pacman -Syyu

# kemudian install
sudo pacman -S install inkscape
```

**Portabel**

* AppImage. Laman Unduh [Inkscape].

* Snap. Laman Unduh [Inkscape].

**Microsoft Windows**

Laman Unduh [Inkscape].

## Ekstensi berkas.

Ekstensi Inkscape menggunakan `SVG` (Scalable Vector Graphics) yaitu format gambar yang menggunakan XML (eXtensible Markup Language). `svg` merupakan ekstensi universal dan standar Word Wide Web Consortium (W3C). Jadi, sudah dipastikan `svg` bisa digunakan di inkscape versi berapapun, sehingga Anda tidak perlu khawatir ketika pindah platform ke Mac OS, Unix atau Microsoft Windows. Toh, `svg` bisa dibaca dimana saja, bahkan dibuka di peramban web sekali pun, ya karena faktor Cross-platform tadi.

Kalau dibandingkan dengan `CDR` (CorelDraw) memiliki versi sendiri-sendiri. Contohnya pada versi `cdr` X3, X4, X5, X6, X7, X8. Pada versi X6 tidak bisa membaca berkas X5, X5 tidak bisa membaca berkas X4 dan seterusnya. Artinya `cdr` tidak bisa membaca versi kebawah. Padahal percetakan kebanyakan menggunakan versi X4-X5 biar ringan katanya. Jadi, so so ribet sekali.

Contoh berkas svg.
```svg
<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD svg 20000303 Stylable//EN"
"http://www.w3.org/TR/2000/03/WD-SVG-20000303/DTD/svg-20000303 stylable.dtd">
<svg width="100px" height="50px">
<text style="fill:red" x ="10" y="20">Hello World !</text>
</svg>
```

## Mudah membuat line art yang detail.

Inkscape memudahkan penggunanya untuk membuat line art. Ini berguna untuk membuat ilustrasi low dan high detail. Apalagi Inkscape mudah untuk membuat lengkungan dengan menarik garisnya saja. Beda dengan Aplikasi sebelah yang haru mengeklik node lalu muncul kedua pangkal, baru bisa membuat lengkungan.

Sebenarnya ada dua kunci utama membuat line art yang bagus. Yaitu, _banyak-banyak latihan dan ekstra sabar_. ^^


## Hang. Oh no..

Tipsnya saya untuk meminimalisir macet/not-responding/_nge-hang_ antara lain:

* Jangan terlalu banyak impor gambar bitmap.
* Jangan zoom terlalu dekat.
* Jangan terlalu banyak mengaktifkan snap (**<kbd>%</kbd>**)
* Jangan buru-buru Union (**<kbd><kbd>Ctrl</kbd>+<kbd>plus</kbd></kbd>**), Artinya anda tidak perlu menggabungkan banyak objek dulu. Khawatirnya nanti ketika tak sengaja menekan (**<kbd>n</kbd>**) akan macet inkscapenya.

Sudah itu saja, sisanya aman.

## Konsultasi ke komunitas.

Ada fakta menarik tentang Open Source. Salah satunya tentang Sales. Sales dalam Perangkat Propietary pasti banyak, soalnya ada produk yang harus mereka jual. Berbeda dengan sales FLOSS (Free Open Source Software), sales FLOSS itu nyaris tidak ada, yang ada hanyalah _Customer Service_ yang bisa disebut dengan komunitas. Komunitas FLOSS membantu dengan kesuka-relaan, saling berusaha menjawab dan membantu. Anda bisa bertanya-tanya di komunitas, meminta bantuan dan memberikan solusi. Tapi tolong, ketika Anda meminta bantuan gunakan 2T, "Tolong" dan "Terima kasih".

Jujur saja artikel ini ditulis bukan tentang inkscapenya, melainkan karena [komunitasnya](https:www.t.me/gimpscape). Mulai dari semangat gotong royong, berusaha membuat karya sebagus mungkin (cek saja di [RuangKaryaGimpscape](https:www.t.me/gimpscape_ruang_karya)), dan menamkan ideologi bahwa _"software gratisan itu tak selamanya buruk"_. ^^

## Perlu Dukungan.

Menjadi anggota komunitas Open Source telah menyadarkan saya tentang arti _"Semangat berbagi dan Gotong royong"_. Inkscape sendiri juga butuh dukungan baik berupa donasi, bantuan perbaikan kutu, dokumentasi dan lain-lain. Mmm.. berat ya. membantu perbaikan typo juga dianggap sudah berkontribusi. Bikin Stori IG atau WA tentang ajakan pakai inkscape juga bisa dibilang kontribusi (meskipun tak resmi), retweet apapun tentang inkscape juga boleh. Masih punya kuota kan ya. ^^

Sepertinya cukup artikelnya, lumayan buat pemanasan untuk pemula inkscape. Sekian dan terima kasih sudah membaca. Semoga bermanfaat.:blush:

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org
[GNOME.ID]:https://www.gnome.id
