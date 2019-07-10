---
draft: true
title: "Perkakas Tambahan dan Ekstensi Terbaik Untuk Inkscape"
date: 2019-07-10T08:18:41+07:00
author:
  - name : "Hervy Qurrotul Ainur"
description : "memaksimalkan penggunaan inkscape dengan perkakas tambahan dan ekstensi"
comments : ""
toc: false
type:
  - post
tags:
  - desain
  - flat-desain
  - floss
  - ilustrasi
  - inkscape
  - ui
  - ux
  - ui/ux
  # ---
  - pemula
  - menengah
series:
  -
categories:
  -
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Ada beberapa perkakas tambahan yang menurut saya bermanfaat. Tapi semua perkakas ini beberapa belum tersedia dengan GUI. :") Tapi itu bukan masalah sebab CLI tak sesulit itu. Lalu Apa saja ya perkakasnya? yuk disimak ^^

## Merubah gambar RGB to CMYK dengan Inkscape Output Pro

Perlu diketahui RGB itu hanya berlaku untuk berkas `png` saja, sedangkan CMYK hanya berlaku untuk berkas `jpg` dan `jpeg`. Jadi, mustahil jika merubah CMYK dari berkas `png`, padahal aturannya `png` sendiri tidak mendukung CMYK.

Jadi, misal anda mempunyai berkas `png` ingin merubahnya ke CMYK, maka perlu merubah format atau "Save As" dulu ke `jpg`, bisa menggunakan dengan Aplikasi pembuka gambar atau pakai GIMP misalnya.

Kalau saya punya cara yang simpel merubah `png` ke `jpg`.

```
$ convert gambar.png gambar-jadi.jpg
```

### continued

## Kompresi berkas svg dengan SVGO

Perkakas favorit saya adalah `svgo`, karena dengan `svgo` ini mampu mengkompres berkas `svg` menjadi minimalis, dengan menghilangkan layer, metadata, dan objek tersembunyi. Sangat berguna untuk optimasi website jika menggunakan asset `svg`. Misalnya ilustrasi saya di [GNOME.ID], hanya sekian detik untuk menampilkan ilustrasi di bagian header dan fiture section.

Contoh saya punya 3 jenis ilustrasi.

Lihat dulu isi berkasnya.
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
$ mkdir backup
$ cp *.svg backup
```

Kemudian kompres berkas svg sekaligus
```
$ svgo *.svg
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
Perkakas `optipng` berfungsi untuk kompresi berkas `png`. Sama dengan svgo tadi, tujuannya sama-sama untuk kompresi berkas.

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
  zc = 9  zm = 8  zs = 0  f = 0  zc = 9  zm = 8  zs = 1  f = 0  zc = 1  zm = 8  zs = 2  f = 0  zc = 9  zm = 8  zs = 3  f = 0  zc = 9  zm = 8  zs = 0  f = 5		IDAT size = 273737
  zc = 9  zm = 8  zs = 1  f = 5		IDAT size = 268841
  zc = 1  zm = 8  zs = 2  f = 5  zc = 9  zm = 8  zs = 3  f = 5                               
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

Lumayan! dari 281Kib jadi 263Kib. Ukuran file yang kecil tidak terlalau signifikan berubahnya.

Lalu kapan menggunakan `optipng`? Gunakan `optipng` ketika membutuhkan foto bitmap, blur dan transparansi gambar.

## Kompresi berkas JPG dan JPEG dengan JpegOptim

Terakhir `jpegoptim`. Perkakas ini berfungsi untuk kompresi berkas `jpg` dan `jpeg`.

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

Jadi menggunakan `jpegoptim` itu ketika membutuhkan foto bitmap, blur dan **tidak** memutuhkan transparansi gambar. Jika butuh transparansi pakai `png` dan kompresinya pakai `optipng`.

Nah itu tadi 3 perkakas tambahan favorit saya untuk memaksimalkan penggunaan inkscape.

Sekian dan terima kasih sudah membaca. Semoga bermanfaat.:blush:

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org
[GNOME.ID]:https://www.gnome.id
