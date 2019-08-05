---
draft: false
title: "Mengoptimalkan Aset SVG, PNG, dan JPG Di Linux"
cover: "post/mengoptimalkan-aset-svg-png-dan-jpg-di-linux/cover.webp"
date: 2019-07-10T08:18:41+07:00
description : "Cara Mudah untuk mengoptimalkan asset SVG, PNG, dan JPG di Linux"
comments : ""
toc: false
type:
  - post
tags:
  - floss
  - gambar
  - menengah
  - cli
  - kompresi
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Ada beberapa perkakas yang menurut saya bermanfaat untuk mengoptimalkan berkas svg, png, dan jpg. Manfaatnya nanti untuk aset website, icon, background, patern, mockup, cover dan lain-lain. Tapi sayangnya belum ada versi GUI, semuanya serba Command Promnt. :)

<!--more-->

## Pertama, kompresi berkas svg dengan SVGO

Homepage: https://github.com/svg/svgo

Perkakas favorit saya adalah `svgo`, karena dengan `svgo` ini mampu mengkompres berkas `svg` menjadi minimalis, dengan menghilangkan layer, metadata, dan objek tersembunyi. Sangat berguna untuk optimasi website jika menggunakan asset `svg`. Misalnya ilustrasi saya di [GNOME.ID], hanya sekian detik untuk menampilkan ilustrasi di bagian header dan fiture section.

Cara Install `svgo` di distro linux

```
$ sudo npm install -g svgo
```

Kalau di repo Fedora

```
$ sudo dnf install nodejs-svgo
```

Oke lanjut ke Demo. Contoh saya punya 3 jenis ilustrasi. Lihat dulu isi berkasnya.
```
$ ls -lh
total 680K
-rw-r--r-- 1 hervyqa users 224K May 14 11:02 ilustrasi-1.svg
-rw-r--r-- 1 hervyqa users 174K May 14 11:02 ilustrasi-2.svg
-rw-r--r-- 1 hervyqa users 280K May 14 11:02 ilustrasi-3.svg
```

Kompresi berkas svg dengan nama lain.
```
$ svgo ilustrasi-1.svg -o ilustrasi-1-hasil.svg
ilustrasi-1.svg:
Done in 664 ms!
223.576 KiB - 82.8% = 38.366 KiB
```

Dari contoh diatas svgo berhasil merubah `ilustrasi-1.svg` menjadi `ilustrasi-1-hasil.svg`. Dari 223.567 Kib manjadi 38.366 Kib.

Anda juga bisa kompresi berkas svg sekaligus. Tapi jika anda melakukan ini harap backup dulu berkas svg inkscape aslinya.
```
mkdir backup
```

```
cp *.svg backup
```

Kemudian kompres berkas svg sekaligus
```
svgo *.svg
```

```
ilustrasi-1.svg:
Done in 451 ms!
223.576 KiB - 82.8% = 38.366 KiB

ilustrasi-2.svg:
Done in 536 ms!
173.315 KiB - 88.5% = 19.988 KiB

ilustrasi-3.svg:
Done in 336 ms!
279.723 KiB - 94.3% = 15.963 KiB
```
Taraa..

## Kompresi berkas PNG dengan OptiPng

Homepage: http://optipng.sourceforge.net/

Perkakas `optipng` berfungsi untuk kompresi berkas `png`. Sama dengan svgo tadi, tujuannya sama-sama untuk kompresi berkas.

Cara install di linux:

* openSUSE

```
$ sudo zypper install optipng
```

* Debian/Ubuntu/Mint

```
$ sudo apt install optipng
```

* Fedora

```
$ sudo dnf install optipng
```

* Centos dengan repo epel

```
$ su -c 'yum install optipng'
```

* Arch/Manjaro

```
$ sudo pacman -S optipng
```

Mari kita coba.
Kita lihat ukuran berkasnya dulu.

```
$ ls -lh
total 284K
-rw-r--r-- 1 hervyqa users 281K Jul  6 13:05 gambar.png
```

Kemudian kompres berkas pngnya.

```
$ optipng gambar.png
** Processing: /home/hervyqa/Documents/ilustrasi/2019/gambar.png
1000x661 pixels, 4x8 bits/pixel, RGB+alpha
Input IDAT size = 286837 bytes
Input file size = 287388 bytes

Trying:
  zc = 9  zm = 8  zs = 0  f = 0
  zc = 9  zm = 8  zs = 1  f = 5		IDAT size = 268841
  zc = 1  zm = 8  zs = 2  f = 5
Selecting parameters:
  zc = 9  zm = 8  zs = 1  f = 5		IDAT size = 268841

Output IDAT size = 268841 bytes (17996 bytes decrease)
Output file size = 268972 bytes (18416 bytes = 6.41% decrease)
```

Kemudian cek lagi.
```
$ ls -lh
total 264K
-rw-r--r-- 1 hervyqa users 263K Jul 10 07:58 gambar.png
```

Lumayan! dari 281Kib jadi 263Kib. Ukuran file yang kecil tidak terlalu signifikan berubahnya.

**Tips:** Lalu kapan menggunakan `optipng`? Gunakan `optipng` ketika membutuhkan foto bitmap, blur dan transparansi gambar.

## Kompresi berkas JPG dan JPEG dengan JpegOptim

Homepage: https://github.com/tjko/jpegoptim

Terakhir `jpegoptim`. Perkakas ini berfungsi untuk kompresi berkas `jpg` dan `jpeg`.

Cara install di linux:

* openSUSE

```
$ sudo zypper install jpegoptim
```

* Debian/Ubuntu/Mint

```
$ sudo apt install jpegoptim
```

* Fedora

```
$ sudo dnf install jpegoptim
```

* Centos dengan repo epel

```
$ su -c 'yum install jpegoptim'
```

* Arch/Manjaro

```
$ sudo pacman -S jpegoptim
```

Caranya hampir sama dengan `optipng`. kita cek dulu berkasnya.

```
$ ls -lh
total 308K
-rw-r--r-- 1 hervyqa users 302K Jul  6 14:58 gambar.jpg
```

Kemudian kompres berkas jpgnya.

```
$ jpegoptim gambar.jpg
/home/hervyqa/Documents/ilustrasi/2019/gambar.jpg 750x600 24bit P Exif IPTC XMP Adobe  [OK] 308454 --> 295806 bytes (4.10%), optimized.
```

**Tips:** Jadi, menggunakan `jpegoptim` itu ketika membutuhkan foto bitmap, blur dan **tidak** memutuhkan transparansi gambar. Jika butuh transparansi pakai `png` dan kompresinya pakai `optipng`.

Nah itu tadi 3 perkakas tambahan favorit untuk memaksimalkan aset. Sekian dan terima kasih sudah membaca. Semoga bermanfaat.:blush:

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org
[GNOME.ID]:https://www.gnome.id