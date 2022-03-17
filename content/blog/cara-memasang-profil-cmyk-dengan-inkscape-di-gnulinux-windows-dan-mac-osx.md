---
draft: false
date: 2020-01-22T10:04:24+07:00
title: "Cara memasang Profil CMYK dengan Inkscape di GNU/Linux, Windows dan Mac OS-X"
description : "Tahukah Anda tentang cara merubah profil warna RGB menjadi CMYK dengan Inkscape? cara ini penting untuk menyelaraskan tampilan monitor, sehingga tidak terjadi perbedaan hasil warna di percetakan offset maupun digital."
image: "images/blog/cara-memasang-profil-cmyk-dengan-inkscape-di-gnulinux-windows-dan-mac-osx.png"
type: "featured" # [featured/regular]
categories:
- inkscape
---


Seringkali desainer mengalami perbedaan warna antara desain di monitor dengan hasil setelah dicetak. Hal ini terjadi karena kurangnya pemahaman tentang pengaturan [profil warna](https://en.wikipedia.org/wiki/ICC_profile). Inkscape tidak menyediakan profil warna CMYK sehingga nantinya tetap menggunakan profil warna sRGB, tetapi menerapkan warna SWOP (Specifications for Web Offset Publications) untuk profil CMYK di sRGB. Anda juga bisa menggunakan warna GRACol (Graphics Communication Association) sebagai alternatif warna SWOP.

***

Dengan menggunakan profil warna Adobe ICC, inkscape dapat mengetahui warna mana saja yang didukung oleh CMYK. Profil warna CMYK yang disediakan oleh Adobe cukup bervariasi, misalnya SWOP, Gracol, Fogra, Japan Color dan-lain-lain. Profil warna tersebut didapatkan dengan mengunduh langsung di laman web Adobe.

## Jenis profil warna Adobe ICC

### #RGB

Selain menggunakan profil warna sRGB, Inkscape dapat menggunakan profil warna lainnya, seperti:

* 8 RGB profiles
* Adobe RGB (1998)
* Apple RGB
* ColorMatch RGB
* SMPTE-C
* PAL/SECAM
* HDTV (Rec. 709)
* SDTV NTSC
* SDTV PAL

### #CMYK

Sedangkan profil warna yang dibutuhkan adalah CMYK, biasanya yang digunakan adalah profil **US Web Coated (SWOP) v2**. Selain profil warna tersebut dapat menggunakan profil warna CMYK lain, seperti:

* US Web Coated (SWOP) v2
* US Web Uncoated v2
* Coated GRACoL 2006 (ISO 12647-2:2004)
* Web Coated SWOP Grade 3 Paper
* Web Coated SWOP Grade 5 Paper
* Coated FOGRA27 (ISO 12647-2:2004)
* Web Coated FOGRA28 (ISO 12647-2:2004)
* Uncoated FOGRA29 (ISO 12647-2:2004)
* Coated FOGRA39 (ISO 12647-2:2004)
* Japan Web Coated (Ad)
* Japan Color 2001 Coated
* Japan Color 2001 Uncoated
* Japan Color 2002 Newspaper
* Japan Color 2003 Web Coated

## Memasang Adobe ICC di GNU/Linux

#### Ubuntu, Debian, Fedora, openSUSE dan turunannya.

* Unduh profil warna untuk [Adobe ICC untuk GNU/Linux](https://www.adobe.com/support/downloads/iccprofiles/iccprofiles_win.html)
* Pilih Adobe ICC for end user, pilih accept, klik Download.
* Kemudian ekstrak `AdobeICCProfilesCS4Win_end-user.zip`.
* Salin direktori **RGB** dan **CMYK**, kemudian tempelkan ke direktori dibawah ini. 

```
~/.local/share/color/icc/
```

atau jikalau ditaruh di root,taruhlah di folder.

```
/usr/share/color/icc/
```

#### Arch linux, Manjaro dan turunannya.

Untuk pengguna Arch linux dan turunannya dapat menggunakan AUR Helper (misalnya yay) untuk memasang Adobe-ICC.

```
yay adobe-icc
```

## Memasang Adobe ICC di Windows

* Unduh profil warna untuk [Adobe ICC untuk Windows](https://www.adobe.com/support/downloads/iccprofiles/iccprofiles_win.html).
* Pilih Adobe ICC for end user, pilih accept, klik Download.
* Kemudian ekstrak `AdobeICCProfilesCS4Win_end-user.zip`
* Salin direktori **RGB** dan **CMYK**, kemudian tempelkan ke direktori dibawah ini. Gunakan hak akses administrator untuk menempelkannya.
```
C:\Windows\system32\spool\drivers\color
```

## Memasang Adobe ICC di Mac OS-X

* Unduh profil warna untuk [Adobe ICC untuk Mac OSX](https://www.adobe.com/support/downloads/iccprofiles/iccprofiles_mac.html).
* Pilih Adobe ICC for end user, pilih accept, klik Download.
* Kemudian ekstrak `AdobeICCProfilesCS4Mac_end-user.zip`.
* Masuk ke direktori dibawah ini, kemudian salin **RGB** dan **CMYK**. Kemudian tempelkan ke direktori dibawah ini.
```
**namapengguna** > Library > Colorsync > Profiles
```

## Mengatur Profil warna di inkscape

* Buka Inkscape, kemudian pilih Menu >Sunting (Edit) > Pilih Preferences.
* Pada Tab Input/Output, pilih Manajemen Warna.
* Pada Pengaturan tampilan, pilihan Profil warna RGB, misalnya **Adobe RGB (1998)** atau **Apple RGB**.
* Pada Proofing cawang **Simulasi keluaran warna dilayar**.
* Pada Proofing cawang **Menandai warna diluar gamut**.
* Di Profil piranti pilih **US Web Coated (SWOP) v2** untuk profil CMYK, Anda juga bisa memilih Gracol.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pengaturan_1.png" alt="pengaturan 1 di Inkscape" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pengaturan_2.png" alt="pengaturan 2 di Inkscape" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pengaturan_3.png" alt="pengaturan 3 di Inkscape" >}}

Keterangan:
_Dengan menandai warna diluar gamut, artinya warna yang tidak didukung CMYK akan berubah menjadi abu-abu secara baku._

## Warna diluar gamut

Didalam urusan percetakan, pengecekan warna dengan soft proofing "out of gamut" sangat membantu. Terutama untuk mengetahui batasan warna CMYK didalam profil warna RGB. Juga mengetahui perubahan warna yang signifikan ketika akan dicetak.

Triknya adalah dengan tidak menggunakan warna khusus, seperti hijau pekat, biru pekat, dan fusia. Lebih baik hindari warna-warna tersebut.

Jika terpaksa menggunakan warnanya, maka kurangi saturasinya. Serta gunakan pencahayaan yang cukup, sehingga warna tidak terlalu gelap.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/out_off_gammut.png" alt="Warna diluar gamut di Inkscape" >}}
Untuk mengaktifkan profil warna, tekan tombol kanan bawah, diatas palet warna.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/profil_warna_tidak_aktif.png" alt="Profil warna tidak aktif di Inkscape" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/profil_warna_aktif.png" alt="Profil warna aktif di Inkscape" >}}

Contohnya seperti diatas. Tatkala menggunakan profil CMYK SWOP, warna yang digunakan sesuai dan tanpa keluar dari warna gamut. Maka perbedaan warna keduanya tidak terlalu berubah. Sehingga warna desain yang dicetak tidak mengalami perubahan yang signifikan baik dicetak offset maupun digital.

***

Nah, itu tadi tips untuk merubah profil warna RGB ke CMYK. Serta menggunakan soft proofing out of gamut untuk menentukan batas warna CMYK di profil warna RGB.

Sekian, semoga bermanfaat untuk pembaca semuanya. Aamiin.

***
