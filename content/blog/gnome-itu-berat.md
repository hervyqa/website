---
draft: false
date: 2020-01-01T10:59:18+07:00
title: "GNOME itu Berat!"
description : "Tulisan ini merupakan pengalaman pribadi dengan GNOME.
Lingkungan destop yang sederhana, kuat, dan elegan. Mengapa pakai GNOME,
bukannya lebih berat? Mari kita simak."
image: "images/blog/gnome-itu-berat.png"
type: "regular" # [featured/regular]
categories:
- gnome
---

Di awal 2016 saya sebagai _DE Hoppers_ (baca: penjelajah dan _opreker_
DE) tujuannya untuk mencari lingkungan destop yang sesuai dengan kebutuhan.
Akhirnya memilih GNOME sebagai lingkungan desktop utama mulai di pertengahan
2018.

Sebelumnya, berbagai lingkungan destop (Desktop Environment) dan manajer
jendela (Window manager) sudah pernah saya pakai. Diantaranya GNOME, Xfce,
Mate, Cinnamon, KDE, Lxde, Lxqt, dan Nomad. Pernah juga memakai i3wm, dwm dan
bspwm. Terakhir kali menggunakan bspwm karena suka dengan tilingnya, kostumisasi
dan polybarnya yang indah
([bspwm-dotfiles](https://gitlab.com/hervyqa/bspwm-dotfiles.git/)). Sekitar 8
bulan kemudian memakai GNOME lagi.

Mengapa pakai GNOME, bukannya pakai WM lebih ringan? Mari kita simak alasannya.

***

#### Banyak distribusi yang menyediakan GNOME

GNOME merupakan lingkungan destop yang tersedia di banyak distribusi mirip
Unix maupun di BSD. Jadi GNOME merupakan lingkungan destop yang universal.

#### Handal dan stabil

Banyak distribusi yang menggunakan GNOME sebagai lingkungan destop bakunya.
Hal ini sudah pasti GNOME dipercayai sebagai lingkungan destop yang kuat dan
stabil. Apalagi distribusi seperti RedHat dan Ubuntu menjadikannya sebagai
lingkungan destop utama.

#### Tampilan yang bersih dan dekorasi yang minimal

Tampilan GNOME yang bersih dan mudah ditebak. Pengalaman pengguna yang pas
dan pastinya pengguna baru tidaklah sulit untuk memakai GNOME.

Benar-benar minimalis sampai UI yang tidak diperlukan itu dinonakifkan,
jika perlu dihapus.

Misalnya di GNOME 3 mengapa tidak ada tombol minimize? karena pada tombol
minimize digunakan jika ada panel bawah, padahal di GNOME 3 tidak memilikinya.
Andai punya panel bawah pasti pengguna harus menggeser tetikus/touchpad-nya ke
arah jendela lainnya. Padahal dengan menekan tombol `super`, jendela aplikasi
akan terbuka. Terlalu lama hanya sekedar untuk minimize, lebih baik
dinonaktifkan.

Lagi, mengapa tidak ada tombol layar penuh (fulscreen)?, karena di titlebar
jika diklik dua kali sudah bisa layar penuh tanpa menggeser kursor ke tombol
pojokan. Mudah dan sederhana.

#### Kebutuhan saya tercukupi dengan aplikasi GNOME

Banyak aplikasi GNOME Gtk3+ yang memudahkan penggunanya. Seperti epiphany
untuk penjelajah web, evince untuk pembuka dokumen pdf, brasero untuk pembakar
optik DVD, fragment untuk pengunduh berkas torrent, totem dan rhythmbox untuk
pemutar berkas multimedia.

Belum lagi cheese untuk kamera, deja-dup untuk pencadangan data, drawing
untuk menggambar sederhana, poscast untuk mengunduh dan mendengarkan podcast,
feedreader untuk membaca RSS, dan recipes untuk mencari resep masakan.

Aplikasi komunikasi seperti empathy untuk perpesanan, evolution untuk pembuka
surel, fractal untuk perpesanan matrix, dan polari untuk klien IRC.

Aplikasi grafis gthumb untuk pembuka gambar, glade untuk mendesain UI aplikasi,
builder untuk membangun aplikasi dan masih banyak lagi.

Jika dibahas satu-persatu pasti panjang tetapi bukan ranah artikel ini. Belum
lagi aplikasi tak resmi GNOME dari GTK3+.

{{< image src="images/blog/gtk-aplikasi.png" alt="GTK Aplikasi" >}}

#### Kaya dengan ekstensi dan tema

GNOME menyediakan ekstensi untuk mempercepat alur kerja dengan [GNOME
Extensions](https://extensions.gnome.org) dan [GNOME
Look](https://gnome-look.org) untuk merubah tampilan GNOME.

Tetapi untuk GNOME yang saya gunakan, bersih tanpa ekstensi dan tema tambahan.
Mengapa? karena dengan menonaktifkan ekstensi dan tema merupakan cara untuk
mengurangi penggunaan daya RAM. Bahkan saya nonaktifkan semua ekstensi
_gnome-shell_-nya. Kalau untuk tema tetap menggunakan Adwaita, karena Adwaita
lebih minimalis dan bawaannya GNOME.

#### Mudah mencadangkan data dengan deja-dup

Salah satu aplikasi favorit yaitu deja-dup. Fungsinya untuk mencadangkan data
baik secara daring maupun luring. Data ini bukan yang tampak saja seperti
direktori dokumen, gambar, video, musik, dan di destop. Tetapi dengan deja-dup
akan mencadangkan data seperti autentifikasi akun, surel, konfigurasi dConf,
SSH, gnuPG, catatan, sejarah, dan berkas tersembunyi. Jadi, dengan deja-dup
hanya dengan sekali klik data akan sinkronisasi secara otomatis dan terenkripsi.
Mana mungkin mencadangkan direktori satu-persatu secara manual. Pastinya dengan
deja-dup lebih mudah dan aman.

#### Autentifikasi akun

Fitur andalan lainnya yaitu akun daring. Dengan akun daring pekerjaan jadi lebih
mudah. Sebab kalender, surel, notifikasi acara, catatan, pencadangan, dan kata
sandi sudah sinkron otomatis. Setelah masuk dengan akun daring, misalnya
evolution sebagai pembuka surel akan terdeteksi otomatis. jika menggunakan
google drive nautilus juga mendeteksi secara otimatis. Ya memang benar, semuanya
sudah terintegrasi. Jadi membuka surel tak perlu lagi membuka di penjelajah web,
cukup klik evolution selesai sudah.

{{< image src="images/blog/akun-daring.png" alt="Akun Daring" >}}
{{< image src="images/blog/evolution.png" alt="Evolution" >}}

#### Mudah menyambungkan tampilan ke monitor atau proyektor

Dengan GNOME mudah mendeteksi resolusi layar. Ya, umumnya menggunakan
<kbd><kbd>Super</kbd>+<kbd>p</kbd></kbd> kemudian memilih mode tampilan.

#### Adanya fitur tampilan dinamis

Fitur ini menarik, karena membuat layar kerja lebih fleksibel. Cukup dengan
<kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>???</kbd>/<kbd>???</kbd></kbd> layar bisa
berpindah tempat, atau memindahkan jendela aktif dengan
<kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>???</kbd>/<kbd>???</kbd></
kbd>.

#### Faktanya!

GNOME merupakan lingkungan destop dengan berbagai fitur yang memudahkan
penggunanya seperti yang sudah saya sebutkan diatas. Faktanya semakin banyak
fitur maka semakin banyak aplikasi yang berjalan di atar belakang, hal ini
menyebabkan penggunaan daya yang kurang bersahabat. Apalagi dengan pemakaian RAM
lebih dari 25% sudah dikatakan berat, khususnya untuk orang Indonesia.

Padahal GNOME tidak terlalu berat juga. RAM yang digunakan sekitar 775 MiB dari
4GB, kurang dari 20% ketika idle.

{{< cmd >}}
free
{{< /cmd >}}

```
              total        used        free      shared  buff/cache   available
Mem:           3851         775        2050         251        1025        2580
Swap:         15258           0       15258
```

Dengan ps_mem, pemakaian sekitar 790.5 MiB

{{< cmd >}}
sudo ps_mem
{{< /cmd >}}

```
 Private  +   Shared  =  RAM used	Program

360.0 KiB +  46.5 KiB = 406.5 KiB	rtkit-daemon
380.0 KiB +  46.5 KiB = 426.5 KiB	lvmetad
804.0 KiB +  69.5 KiB = 873.5 KiB	gsd-screensaver-proxy
772.0 KiB + 110.5 KiB = 882.5 KiB	gvfsd-metadata
952.0 KiB +  75.5 KiB =   1.0 MiB	gvfs-mtp-volume-monitor
...
...
...
 19.9 MiB +   1.6 MiB =  21.5 MiB	tracker-miner-fs
 14.7 MiB +   9.7 MiB =  24.4 MiB	evolution-alarm-notify
 32.6 MiB +   3.3 MiB =  35.9 MiB	systemd-journald
 33.9 MiB +   7.0 MiB =  40.9 MiB	goa-daemon
 64.6 MiB +  35.9 MiB = 100.5 MiB	Xorg (2)
194.0 MiB +  36.5 MiB = 230.5 MiB	gnome-shell (2)
---------------------------------
                        790.5 MiB
=================================
```

Tes lain yang sederhana yaitu membuka banyak aplikasi bersamaan. Ternyata CPU
saya masih tenang dan grafiknya masih wajar. Jadi saya semakin optimis untuk
menggunakan GNOME.

{{< image src="images/blog/membuka-aplikasi-gnome-1.png"
alt="Membuka Aplikasi Gnome 1" >}}
{{< image src="images/blog/membuka-aplikasi-gnome-2.png"
alt="Membuka Aplikasi Gnome 2" >}}

CPU yang saya gunakan keluaran intel SandyBridge generasi 2, bisa dikatakan
jadul. Padahal saat ini generasi 10 sudah rilis.

{{< image src="images/blog/ihwal-1.png" alt="ihwal 1" >}}
{{< image src="images/blog/ihwal-2.png" alt="ihwal 2" >}}

***

#### Sebagai pengguna GNOME biasa

Sampai di sebuah titik dimana saya sebagai pengguna GNOME biasa harus
memperkenalkan aplikasi GNOME dan GTK lainnya kepada teman, rekan, dan pengguna
GNU/Linux lainnya. Alhasil saya meremaster distro Manjaro dengan lingkungan
dektop GNOME yang bersih dan penuh dengan aplikasi GNOME, sebut saja
[Manjaro-X](https://manjaro-x.netlify.com).

#### Kesimpulan

Jika memilih fitur dan kemudahan, maka GNOME lebih tepat digunakan. Terlebih
banyak aplikasi GNOME yang sudah siap untuk medukung aktifitas sehari-hari.

Sebaliknya, jika memilih lingkungan destop yang ringan, maka pilih DE selain
GNOME, misalnya XFCE. Namun, saya secara pribadi enggan mengutamakan DE yang
ringan karena bisa saja akan mempersulit aktifitas lainnya.

Perlu diingat semakin minim fitur maka semakin ringan, semakin banyak fitur
sudah tentu berat. Pastinya dengan banyak fitur akan memudahkan aktifitas
penggunanya. Jadi, pilihlah dengan bijak sesuai kebutuhan dan spesifikasi
mesin.

Sepertinya sudah cukup tulisannya. itu tadi sedikit ulasan tentang GNOME. Jika
kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di akun
[telegram](https://t.me/hervyqa) atau [instagram
@hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat
untuk pembaca semuanya. Aamiin.

***
