---
draft: false
date: 2020-06-07T19:32:05+07:00
title: "Void Linux Untuk Desainer"
subtitle: "Jadi faktor inilah yang menjadikan voidlinux sebagai salah satu distro untuk desainer"
seotitle: "Distro Void linux untuk desainer floss"
description : "Sebagai desainer dan ilustrator, alasan penulis menggunakan voidlinux dan tetap mempertahankannya."
slug: ""
categories:
- distro
- desktop
- inkscape
- free
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Bismillahirrohmanirrohim.

[Voidlinux] mungkin terdengar asing bagi Anda, distribusi ini bukan dari projek LFS. Voidlinux juga termasuk distribusi independen, yang artinya bukan turunan dari distribusi lain.

> Void is a general purpose operating system, based on the monolithic Linux® kernel. Its package system allows you to quickly install, update and remove software; software is provided in binary packages or can be built directly from sources with the help of the XBPS source packages collection.

Ada beberapa hal yang penulis sukai hingga betah untuk memakainya, padahal sebelumnya hanya mencoba (iseng) untuk beberapa hari saja, tetapi sudah jatuh hati dengan distronya. Alasannya ada fitur dan depedensi yang membuat penulis enggan untuk berpindah.

***

# Rolling rilis, aplikasi desain rilis terbaru dan stabil

Rolling Rilis adalah alasan pertama untuk memilih distribusi OS ini. Sebab degan rolling rilis penulis mendapatkan aplikasi yang terbaru (inkscape, krita, gimp, blender dengan versi terbaru) dari repositori resmi. Sama halnya dengan Archlinux, distronya juga rolling rilis tetapi di Voidlinux paketnya lebih stabil daripada di archlinux. Repodata di Voidlinux juga lebih sedikit, tidak lebih dari 2MB sehingga proses sinkronnya lebih cepat. Repositorinya juga ada satu repositori free/utama secara bawaan, tetapi repositori non-free (void-repo-nonfree) bisa dipasang secara terpisah.

Dengan Rolling rilis ini, penulis bisa mendapatkan Inkscape versi 1.0 tanpa perlu memasang di snap, flatpak, atau PPA. Karena Inkscape 1.0 sudah masuk di repositori voidlinux.

{{< photo src="inkscape-1-0-hervyqa.png" alt="Inkscape 1.0 Rolling rilis" >}}

# Runit, sistem init yang ringan

Runit yang membuat proses booting lebih cepat, karena sistem initnya hanya memakai 1 PID, jadi tidak terlalu berat ketika booting. Runit juga lebih sederhana struktur kode dan lebih efisien dari pada systemd yang bloat (sisem init yang dipakai oleh ubuntu, fedora, openSUSE, debian dan arch). Baterai laptop juga lebih awet beberapa jam. Jika pengguna meggunakan WM (misalnya i3, dwm, bspwm) sebagai desktopnya, kurang lebih sekitar 200MB ram yang dipakai. Jadi dengan runit performanya lebih cepat, efisiensi, dan aman. Cocok sekali jika mendesain dengan perangkat lunak yang berat seperti inkscape, krita, gimp, openshot, dan blender3d.

> Runit is a process supervisor. It includes runit-init, which can replace sysv's init as pid1, or can be run from inittab or your init system of choice. Runit's simple collection of tools can be used to build flexible dependency structures and distributed systems, or blazing fast parallel runlevel changes (including the initial boot).

{{< photo src="voidlinux-hervyqa-workspace.png" alt="Hervyqa Workspace" >}}

# XBPS, paket manager yang ringkas dan rapi

Xbps ini paket manajer yang lebih rapi dari paket manajer lain yang pernah penulis coba sebelumnya (APT, DNF, Pacman, Zypper). Perintah memasang lebih mirip Pacman Archlinux tetapi tampilan keluarannya mirip DNF Fedora.
```
% xbps-install -S arc-theme

Name               Action    Version           New version            Download size
adwaita-icon-theme install   -                 3.36.1_1               -
gnome-themes-extra install   -                 3.28_2                 -
arc-theme          install   -                 20200513_1             30MB

Size required on disk:          33MB
Space available on disk:      5577MB

Do you want to continue? [Y/n] y
```

Keluarannya juga mudah dipahami, menggunakan bintang untuk paket yang sudah dipasang.
```
% xbps-query -Rs gimp
[*] gimp-2.10.18_1                  GNU image manipulation program
[-] gimp-devel-2.10.18_1            GNU image manipulation program - development files
[-] gimp-lqr-plugin-0.7.2_1         Gimp plugins for image resizing through seam carving
[-] gimp-python-2.10.18_1           GNU image manipulation program - Python2 bindings
[-] gmic-gimp-2.8.0_1               GREYC's Magic for Image Computing (image processing framework) - GIMP plugin
[-] gtk4-3.94.0_2                   GIMP ToolKit (v4)
[-] gtk4-demo-3.94.0_2              GIMP ToolKit (v4) - demonstration application
[-] gtk4-devel-3.94.0_2             GIMP ToolKit (v4) - development files
[-] gtk4-update-icon-cache-3.94.0_2 GIMP ToolKit (v4) - GTK4 update icon cache tool
[*] libgimp-2.10.18_1               GNU image manipulation program - runtime libraries
[-] resynthesizer-2.0.3_1           Suite of gimp plugins for texture healing and synthesis
[-] ufraw-gimp-0.22_3               Utility to read and manipulate raw images from digital cameras - gimp plugin
[-] xsane-gimp-0.999_3              GTK-based X11 frontend for SANE - plugin for GIMP
```

# Google fonts, fonta gratis untuk penggunaan personal dan komersial

Voidlinux menyediakan paket google-fonts, hal ini tentu mengejutkan bagi penulis. Anda tak perlu repot-repot mengunduh satu-persatu fonta di situs resminya. Cukup memasang google-fonts-ttf dan semua fonta di akan terpasang.

```
% xbps-query -Rs google-fonts-ttf
[*] google-fonts-ttf-20190605_1 TrueType fonts from the Google Fonts project
```
```
% xbps-install -S google-fonts-ttf

Name             Action    Version           New version            Download size
google-fonts-ttf install   20190605_1        20190605_1             194MB

Size required on disk:         784MB
Space available on disk:      5514MB

Do you want to continue? [Y/n]
```

{{< photo src="google-font-voidlinux-hervyqa.png" alt="Hervyqa Workspace" >}}

# Arsitektur dan Desktop Environment

Voidlinux menyediakan berbagai macam arsitektur dan lingkungan desktop. Mulai dari aarc64, armv7, rpi, odroid, i686 dan x86_64 (64bit). Juga menyediakan berbagai macam desktop environment seperti Cinnamon, Enlightenment, Lxde, Lxqt, XFCE, dan Mate. Tentu dengan varian desktop environment ini membuat mudah tampilan desktop. Pemasangan secara normal juga cepat, biasanya kurang dari 5 menit.

Anda dapat mengunjungi situs Voidlinux di [voidlinux.org](voidlinux.org). Untuk Awam bisa mencoba varian Cinnamon atau XFCE (pasang iso via lokal), jika menginginkan yang minimalis bisa mencoba voidlinux yang minimal iso.

# Musl libc, LibreSSL, dan XBPS-src

Sebenarnya fitur ini tidak terlalu berpengaruh dibidang Desain Grafis. Tetapi dibidang server dan cloud enginerring tentu sangat berpengaruh. LibreSSL menggantikan openSSL yang sebelumnya mempunyai bug kritis, sehingga dengan libreSSL ini lebih aman. Musl libc merupakan implementasi dari libc, sebagaimana sebagai standar pustaka C. Musl sendiri disarankan untuk server, tetapi memungkinkan juga untuk komputer desktop. Musl sebagai pengganti Glibc, tentu musl lebih efisiensi dari Glibc.

Terakhir Xbps-src, dengan ini bisa membuat paket xbps sendiri. Kompilingnya juga bisa dengan target Musl atau libc, menyesuaikan arsitektur mesinnya. Kode sumber bisa dilihat di Github [void-packages](https://github.com/void-linux/void-packages).

***

Menurut penulis, yang paling spesial dari distro voidlinux yaitu rolling rilis sehingga mendapatkan aplikasi terbaru dan lebih stabil dari arch, runit init sistem, xbps paket manajemen, dan tersedianya google-fonts.

Barakallahu fiikum. Jika kawan-kawan mempunyai pertanyaan dan saran silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Terima kasih telah mengunjungi situs [hervyqa.com](https://hervyqa.com), situs yang membahas desain dengan Floss yang bebas iklan dan pelacak. Semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

[Voidlinux]:https://www.voidlinux.org

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org

[GNOME.ID]:https://www.gnome.id
[BUKU CC-ID]:https://bit.ly/madewithccID
[Wikimedia]:https://www.wikkimedia.org/

[Behance]:https://www.b.net
[Dribbble]:https://www.dribbble.com

[AdobeStock]:https//www.stock.adobe.com
[123rf]:https//www.123rf.com
[Freepik]:https//www.freepik.com
[Dreamstime]:https//www.dreamstime.com
[Shutterstock]:https://submit.shutterstock.com/?ref=238649869

[Hervyqa]:https://hervyqa.com
[Manjaro-X]:https://manjaro-x.id
[Inkporter]:https://github.com/raniaamina/inkporter
