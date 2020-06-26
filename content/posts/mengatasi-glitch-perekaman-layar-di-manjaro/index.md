---
draft: false
date: 2020-01-30T07:10:08+07:00
title: "Mengatasi Glitch Perekaman Layar Di Manjaro"
subtitle: "Glitch.. glitch.."
seotitle: "Mengatasi Glitch Perekaman Layar Di Manjaro"
description : "Masalah yang sering ditemui ketika merekam layar adalah gitching. Entah karena driver yang tidak cocok atau kernelnya. Dan ternyata solusinya seperti ini."
slug: ""
categories:
- desktop
- free
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Bismillahirrohmanirrohim.

Permasalahan ini muncul tatkala penulis akan membuat video tutorial panduan inkscape untuk pemula. Setelah mencoba salah satu perekam `recordmydesktop` hasilnya sangat kacau. Gambar terlihat pecah dan patah-patah. Kemudian lanjut memasang `simplescreenrecorder`, `obs-studio`, `gtk-recordmydesktop`, hasilnya nihil.

{{< photoset max="2" >}}
  {{< photo src="glitch-1.jpeg" alt="glitch-1" >}}
  {{< photo src="glitch-2.jpeg" alt="glitch-2" >}}
{{</ photoset >}}

Ternyata setelah cukup lama mencari, akhirnya ditemukan juga solusinya. Yakni dengan mengganti ke pengaturan ke modeset dan menghapus paket `xf86-video-intel`.

Baik, langkah-langkahnya seperti berikut ini.

***

## Mengecek driver

Lakukan pengecekan konfigurasi driver yang tersedia

```
mhwd -l
```

Maka keluarannya mirip seperti ini:

```
~ >>> mhwd -l                                                                 
> 0000:01:00.0 (0300:1002:6760) Display controller ATI Technologies Inc:
--------------------------------------------------------------------------------
                  NAME               VERSION          FREEDRIVER           TYPE
--------------------------------------------------------------------------------
           video-linux            2018.05.04                true            PCI
     video-modesetting            2020.01.13                true            PCI
            video-vesa            2017.03.12                true            PCI


> 0000:05:00.0 (0200:10ec:8168) Network controller Realtek Semiconductor Co., Ltd.:
--------------------------------------------------------------------------------
                  NAME               VERSION          FREEDRIVER           TYPE
--------------------------------------------------------------------------------
         network-r8168            2016.04.20                true            PCI


> 0000:00:02.0 (0300:8086:0116) Display controller Intel Corporation:
--------------------------------------------------------------------------------
                  NAME               VERSION          FREEDRIVER           TYPE
--------------------------------------------------------------------------------
           video-linux            2018.05.04                true            PCI
     video-modesetting            2020.01.13                true            PCI
            video-vesa            2017.03.12                true            PCI
```

## Memasang video-modesetting


```
sudo mhwd -i pci video-modesetting
```

## Menghapus xf86-video-intel

```
sudo pacman -R xf86-video-intel
```

Kemudian muat ulang komputer. Tunggu sampai selesai. Sekarang glitch di manjaro sudah terselesaikan.

Semoga bermanfaat dan berguna bagi pembaca semuanya. Aamiin.

***
