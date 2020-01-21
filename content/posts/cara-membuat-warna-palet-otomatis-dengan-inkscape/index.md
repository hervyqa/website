---
draft: false
date: 2020-01-21T05:15:34+07:00
title: "Cara Membuat Warna Palet Otomatis dengan Inkscape"
subtitle: "Ekstensi Generate Color Palette"
seotitle: "Cara Membuat Warna Palet Otomatis dengan Inkscape"
description : "Tahukah Anda cara membuat palet warna di Inkscape secara otomatis?"
slug: ""
categories:
- inkscape
- design
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Bismillahirrohmanirrohim.

Bagi pengguna GNU/Linux ada saja trik yang menarik untuk disimak. Misalnya pada penulisan ini tentang membuat palet warna secara otomatis di GNU/Linux. Lalu, apa saja langkahnya? Mari disimak.

***

## Unduh Ekstensi Generate Palet Warna

Silahkan kunjungi laman web [ekstensi palet](https://inkscape.org/~olibia/%E2%98%85generate-palette-extension). Kemudian klik ikon unduh. Atau Anda bisa langsung mengunduhnya dengan mengklik [tautan ini](https://inkscape.org/gallery/item/11353/inkscape-generate-palette_M9QCGWg.zip).

## Memasang Ekstensi

* Pertama, ekstrak berkas zip tersebut. kemudian, salin kedua berkas *generate_palette.inx* dan *generate_palette.py*.
* Lalu, untuk pengguna GNU/Linux silakan menempel kedua berkas tersebut ke:
```
~/.config/inkscape/extensions
```
* Jika Anda menggunakan Windows, silahkan menempelkannya ke:
```
~\AppData\Roaming\inkscape\ekstensions
```

## Cara Menggunakan Ekstensi

* Buka perangkat lunak Inkscape.
* Buatlah warna palet pilihan Anda. Misalnya dengan membuat beberapa objek persegi yang memiliki warna berbeda-beda.
* Seleksi warna tersebut.
* Buka menu *Ekstensi*, pilih *Palet*, klik *Generate*.
* Kemudian akan muncul kotak dialog *Generate*.
* Pada bagian Palette Name, isikan nama Palet Anda. Misalnya beri nama "Favorit".
* Pada color property, pilih *Fill color*.
* Jika Anda membutuhkan warna gradasi warna hitam-putih, cawang "Include default grey".
* Dan jika Anda ingin langsung menerapkan palet warna tersebut, cawang "Replace existing palette".
* Ketika selesai diatur, pilih *Terapkan*.

{{< photoset max="2" >}}
  {{< photo src="membuka-palet-ekstensi.png" alt="Membuka Palet Ekstensi dengan Inkscape" >}}
  {{< photo src="palet-berhasil-dibuat.png" alt="Palet Berhasil Dibuat dengan inkscape" >}}
{{</ photoset >}}

## Mengganti Warna Palet

* Pilih ikon segitiga disamping kanan palet warna.
* Kemudian, pilih palet warna yang Anda inginkan.

{{< photoset max="2" >}}
  {{< photo src="memilih-warna-palet.png" alt="Memilih Warna Palet dengan Inkscape" >}}
  {{< photo src="berhasil-menerapkan-palet.png" alt="Berhasil Menerapkan Palet" >}}
{{</ photoset >}}

## Lokasi Palet warna

Palet warna yang Anda buat akan tersimpan di direktory palette dengan format *.gpl* (gimp palette).

Lokasi berkasnya berada di:

* GNU/Linux :
```
~/.config/inkscape/palette
```
* Windows :
```
~\AppData\Roaming\inkscape\palette
```

***

Bagaimana, begitu mudah bukan? Anda dapat membuat warna pribadi, kemudian secara otomatis tercipta palet warna yang diinginkan.

Baik, sekian tutorialnya. Semoga bermanfaat untuk pembaca semuanya. Aamiin.

***

## Pranala Penting

* [Generate color palette](https://github.com/olibia/inkscape-generate-palette)
