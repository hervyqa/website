---
draft: false
date: 2020-04-07T01:11:50+07:00
title: "Cara Impor dan Ekspor EPS Inkscape di Windows dan GNU/Linux"
subtitle: "Memasang Interpreter Postscript di Inkscape"
seotitle: "Cara Impor dan Ekspor EPS Inkscape di Windows dan GNU/Linux"
description : "Adakalanya untuk pengguna Windows dan GNU/Linux mengalam kegalatan saat mengimpor EPS. Lalu bagaimana mengatasi masalah ini? yuk silakan baca tutorialnya."
slug: ""
categories:
- tips
- inkscape
- desain
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Bismillahirrohmanirrohim.

Untuk pengguna windows biasanya ketika mengimpor berkas `.eps` mengalami kendala di inkscape. Muncul galat (error) saat mengimpor. Sehingga perlu memasang pustaka `.eps` agar dapat mengimpornya. Caranya dengan memasang interpreter untuk bahasa postscript.

***

Bagi pengguna windows silakan mengunjungi situs laman web berikut. Pilih arsitektur komputer Anda. Apakah 32-bit (win32) atau 64-bit (amd64).

Unduh di: [Laman web Ghostscript](https://ghostscript.com/download/gsdnld.html)

Sedangkan untuk pengguna **GNU/Linux** dengan sebaris perintah terminal masalah terselesaikan. Caranya dengan membuka terminal emulator favorit Anda lalu pasang python lxml2 ini.

- **Arch/Manjaro** :
`sudo pacman -S ghostscript`

- **Fedora/Centos/Red Hat** : 
`sudo dnf install ghostscript`

- **Centos/Red Hat** : 
`sudo -c 'yum install ghostscript'`

- **Ubuntu/Debian/Deepin** :
`sudo apt install ghostscript`

- **openSUSE** :
`sudo zypper install ghostscript`

- **Void** :
`sudo xbps-install -S ghostscript`

Nah mudah sekali bukan untuk pengguna GNU/Linux.

Dengan demikian setelah menginstall ghostscript mengimpor maupun mengekspor `.eps` tidak terjadi galat lagi.

***

Barakallahu fiikum. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar dibawah ini. Atau silakan sapa penulis via [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

***

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
