---
draft: false
date: 2019-09-10T11:43:24+07:00
title: "5 Hal yang perlu dilakukan setelah install GNU/Linux KDE Neon"
description : "KDE Neon merupakan spesial GNU/Linux distribusi yang
merilis aplikasi KDE secara terbaru. Beberapa hal yang perlu dilakukan setelah
install KDE Neon, seperti pasang pembaruan, aplikasi, dan codec."
image: "images/blog/5-hal-yang-perlu-dilakukan-setelah-install-gnulinux-kde-neon.png"
type: "regular" # [featured/regular]
categories:
- distro
- desktop
---

KDE Neon adalah GNU/Linux Distribusi yang minimal dan mudah dikonfigurasi. KDE
Neon juga juga dikembangkan oleh KDE Project dan membawa Software KDE terbaru
setiap rilisnya. Bagusnya lagi KDE Neon bisa menjalankan dengan LiveCD.

Tulisan ini menunjukkan hal-hal apa saja yang perlu dilakukan setalah install
GNU/Linux KDE Neon untuk pengguna pemula.

#### Refresh dan update

Ada dua cara mengupdate di GNU/Linux, pertama menggunakan GUI di software
center KDE atau yang disebut Dicover dan kedua menggunakan CLI di terminal.
Hal yang penulis sukai adalah mengeksekusi perintah dengan terminal. Di
KDE Aplikasi, terminal biasa disebut `konsole`.

Buka aplikasi `konsole` di menu kemudian masukkan perintah berikut

{{< cmd >}}
sudo pkcon refresh -y && sudo pkcon update -y
{{< /cmd >}}

#### Pasang paket dasar

Selanjutnya pasang paket dasar seperti git, fonta, codec, icc-profil
dan lain-lain.

{{< cmd >}}
sudo pkcon install git kio-gdrive bluez-obexd gwenview ffmpegthumbs
kffmpegthumbnailer usb-creator-kde ttf-mscorefonts-installer fonts-font-awesome
ttf-bitstream-vera testdisk kubuntu-restricted-extras kcron
kubuntu-driver-manager icc-profiles icc-profiles-free -y
{{< /cmd >}}

#### Pasang aplikasi KDE

Memasang aplikasi QT dan KDE.

{{< cmd >}}
sudo pkcon install kamoso kate kcalc kdeconnect partitionmanager kmail kget
kdf kcolorchooser kfind k3b kaffeine elisa amarok sweeper simplescreenrecorder
ktorrent akregator konversation kleopatra korganizer kontact -y
{{< /cmd >}}

Karena sudah memasang Kaffeine player sebagai pemutar Video, sebaiknya hapus
VLC Sebab Kaffeine lebih ringan dan dikembangkan langsung oleh tim KDE.

{{< cmd >}}
sudo pkcon install kaffeine -y; sudo pkcon remove vlc -y
{{< /cmd >}}

Jika Anda kurang suka dengan browser Firefox, sebaiknya pasang Falkon
sebagai alternatifnya. Falkon juga dikembangkan oleh tim KDE.

{{< cmd >}}
sudo pkcon install falkon -y; sudo pkcon remove firefox -y;
{{< /cmd >}}

#### Pasang paket aplikasi untuk desain dan produktifitas

Pasang Aplikasi desain dan perkantoran.

{{< cmd >}}
sudo pkcon install inkscape gimp optipng libreoffice
libreoffice-kde libreoffice-style-breeze ktouch -y
{{< /cmd >}}

Jika Anda seorang pembuat Fonta pasanglah fontforge.

{{< cmd >}}
sudo pkcon install fontforge -y
{{< /cmd >}}

Jika Anda seorang editor video dan animasi pasanglah kdenlive dan synfigstudio.

{{< cmd >}}
sudo pkcon install kdenlive synfigstudio -y
{{< /cmd >}}

#### Hapus depedensi yang tidak diperlukan

{{< cmd >}}
sudo apt autoremove -y
{{< /cmd >}}

Nah, Selesai.

Sekarang sistem operasi KDE NEON sudah siap digunakan untuk sehari-hari.
Sekian, semoga bermanfaat.
