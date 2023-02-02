---
draft: false
date: 2020-04-07T00:16:41+07:00
title: "Mengatasi Error Lxml Python Inkscape Di Windows dan GNU/Linux"
description : "Ada beberapa ekstensi tambahan yang belum didukung oleh inkscape
sendiri sehingga muncul galat. Untuk mengatasi kegalatan ini, pengguna inkscape
diharuskan untuk memasang pustaka python agar ekstensi berjalan dengan lancar.
Lalu pustaka apakah itu?"
image: "images/blog/mengatasi-error-python-lxml-inkscape-di-windows-dan-gnulinux.png"
type: "regular" # [featured/regular]
categories:
- tips
---

Biasanya menggunakan ekstensi di Inkscape ada beberapa ekstensi tambahan yang
belum didukung oleh inkscape sendiri sehingga muncul galat (error). untuk
mengatasi kegalatan ini pengguna inkscape diharuskan untuk memasang pustaka
python agar ekstensi berjalan dengan lancar.
Berikut tipsnya.

***

## Instalasi

<!--Bagi pengguna windows silakan mengunjungi situs laman web berikut. Pilih
arsitektur komputer Anda. Apakah 32-bit (win32) atau 64-bit (amd64).
Unduh di laman web ini: [lxml](https://pypi.org/project/lxml/). Pilih berkas
dengan akhiran `.whl`.
Sedangkan untuk -->

Catatan: Cara ini khusus pengguna GNU/Linux saja. Buka terminal favorit Anda
lalu pasang python lxml ini.

- Arch/Manjaro:

{{< cmd >}}
sudo pacman -S python-lxml
{{< /cmd >}}

- Fedora/Centos/Red Hat:

{{< cmd >}}
sudo dnf install python3-lxml
{{< /cmd >}}

- Centos/Red Hat:

{{< cmd >}}
sudo -c 'yum install python3-lxml'
{{< /cmd >}}

- Ubuntu/Debian/Deepin:

{{< cmd >}}
sudo apt install python3-lxml
{{< /cmd >}}

- openSUSE:

{{< cmd >}}
sudo zypper install python3-lxml
{{< /cmd >}}

- Void & LangitKetujuh:

{{< cmd >}}
sudo xbps-install -S python3-lxml
{{< /cmd >}}

Nah mudah sekali bukan untuk pengguna GNU/Linux.

***

Barakallahu fiikum. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan
silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram
@hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat
untuk pembaca semuanya. Aamiin.

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

[Hervyqa]:https://hervyqa.id
[Manjaro-X]:https://manjaro-x.id
[Inkporter]:https://github.com/raniaamina/inkporter
