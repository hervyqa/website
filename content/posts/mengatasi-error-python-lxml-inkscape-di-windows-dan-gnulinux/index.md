---
draft: false
date: 2020-04-07T00:16:41+07:00
title: "Mengatasi Error Lxml Python Inkscape Di Windows dan GNU/Linux"
subtitle: "Mengenal lxml-python di Inkscape"
seotitle: "Mengatasi Error Lxml Python Inkscape Di Windows dan GNU/Linux"
description : "Ada beberapa ekstensi tambahan yang belum didukung oleh inkscape sendiri sehingga muncul galat. Untuk mengatasi kegalatan ini, pengguna inkscape diharuskan untuk memasang pustaka python agar ekstensi berjalan dengan lancar. Lalu pustaka apakah itu?"
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

Biasanya menggunakan ekstensi di Inkscape ada beberapa ekstensi tambahan yang belum didukung oleh inkscape sendiri sehingga muncul galat (error). untuk mengatasi kegalatan ini pengguna inkscape diharuskan untuk memasang pustaka python agar ekstensi berjalan dengan lancar.
Berikut tipsnya.

***

Bagi pengguna windows silakan mengunjungi situs laman web berikut. Pilih arsitektur komputer Anda. Apakah 32-bit (win32) atau 64-bit (amd64).

Unduh di laman web ini: [Lxml versi 3.8.0](https://pypi.org/project/lxml/3.8.0/#downloads). Pilih berkas dengan akhiran `.exe`.

Sedangkan untuk pengguna GNU/Linux dengan sebaris perintah terminal masalah terselesaikan. Caranya dengan membuka terminal emulator favorit Anda lalu pasang python lxml ini.

- **Arch/Manjaro** :
`sudo pacman -S python2-lxml`

- **Fedora/Centos/Red Hat** : 
`sudo dnf install python2-lxml`

- **Centos/Red Hat** : 
`sudo -c 'yum install python2-lxml'`

- **Ubuntu/Debian/Deepin** :
`sudo apt install python-lxml`

- **openSUSE** :
`sudo zypper install python2-lxml`

- **Void** :
`sudo xbps-install -S python-lxml`

Nah mudah sekali bukan untuk pengguna GNU/Linux.

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
