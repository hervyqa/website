---
draft: false
date: 2020-01-01T10:59:18+07:00
title: "GNOME itu Berat!"
subtitle: "Alasan saya menggunakan GNOME sebagai lingkungan dektop utama, meskipun berat."
seotitle: "Alasan saya menggunakan GNOME sebagai lingkungan dektop utama, meskipun berat."
description : "Tulisan ini merupakan pengalaman pribadi dengan GNOME. Lingkungan destop yang sederhana, kuat, dan elegan."
slug: ""
categories:
- desktop
- gnome
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Bismillahirrohmanirrohim.

Di awal 2016 saya sebagai _DE Hopper_ (baca: penjelajah DE) untuk mencari lingkungan destop yang sesuai dengan kebutuhan. Akhirnya memilih GNOME sebagai lingkungan desktop utama mulai di pertengahan 2018.

Sebelumnya, berbagai lingkungan destop (Desktop Environment) dan manajer jendela (Window manager) sudah pernah saya pakai. Diantaranya GNOME, Xfce, Mate, Cinnamon, KDE, Lxde, Lxqt, Nomad. Pernah juga memakai i3wm, dwm, bspwm. Terakhir kali menggunakan bspwm karena suka dengan tilingnya, kostumisasi dan polybarnya yang indah ([bspwm-dotfiles](https://gitlab.com/hervyqa/bspwm-dotfiles.git/)). Sekitar 8 bulan kemudian kembali memakai GNOME.

Mengapa pakai GNOME, bukannya pakai WM lebih ringan? Mari kita simak alasannya.

***

## Banyak Distribusi yang menyediakan GNOME

GNOME merupakan lingkungan destop yang tersedia di banyak distribusi mirip Unix maupun BSD. Jadi GNOME merupakan lingkungan destop yang universal.

## Handal dan Stabil

Banyak distribusi yang menggunakan GNOME sebagai lingkungan destop baku. Hal ini pasti GNOME sudah dipercayai sebagai lingkungan destop yang kuat dan stabil. Apalagi distribusi seperti RedHat dan Ubuntu menjadikan GNOME sebagai lingkungan destop utama.

## Tampilan yang Bersih dan Dekorasi yang minimal

Tampilan GNOME yang bersih dan mudah ditebak. Pengalaman pengguna yang pas dan pastinya pengguna baru tidaklah sulit untuk menggunakan GNOME.

Benar-benar minimalis sampai UI yang tidak diperlukan dinonakifkan kalau perlu dihapus.

Misalnya mengapa tidak ada tombol minimize dan fullscreen, sebab minimize digunakan jika ada panel bawah padahal GNOME 3 tidak memilikinya, andai pun punya pasti pengguna harus menggeser tetikus/touchpad-nya, padahal dengan menekan tombol **super** jendela aplikasi sudah terbuka. Terlalu lama hanya sekedar untuk minimize, lebih baik dinonaktifkan saja.

Lagi, mengapa tidak ada tombol layar penuh (fulscreen), karena titlebar di klik dua kali sudah bisa layar penuh tanpa menggeser kursor ke tombol pojokan. Mudah dan sederhana.

## Kebutuhan saya tercukupi dengan GNOME Aplikasi

Banyak aplikasi GNOME Gtk3+ yang memudahkan penggunanya. Seperti epiphany untuk penjelajah web, evince pembuka dokumen pdf, brasero pembakar optik DVD, fragment pengunduh torrent, totem dan rhythmbox sebagai pemutar multimedia.

Belum lagi cheese untuk kamera, deja-dup untuk pencadangan data, drawing untuk menggambar sederhana, poscast untuk mengunduh dan mendengarkan podcast, feedreader untuk membaca RSS, recipes untuk mencari resep masak.

Aplikasi komunikasi seperti empathy untuk perpesanan, evolution untuk pembuka surel, fractal untuk perpesanan matrix, polari untuk klien IRC.

Aplikasi grafis gthumb untuk pembuka gambar, peek untuk merekam gif, glade untuk mendesain UI aplikasi, builder untuk membangun aplikasi dan masih banyak lagi.

Jika dibahas satu-persatu pasti panjang tetapi bukan ranah artikel ini. Belum lagi aplikasi tak resmi GTK3+ dari GNOME.

{{< photo src="gtk-aplikasi.jpeg" alt="gtk-aplikasi" >}}

## Kaya dengan Ekstensi dan Tema

GNOME menyediakan ekstensi untuk memperecepat alur kerja dengan [GNOME Extensions](https://extensions.gnome.org) dan [GNOME Look](https://gnome-look.org) untuk merubah tampilan GNOME.

Tetapi untuk GNOME yang saya gunakan bersih tanpa ekstensi dan tema tambahan. Mengapa? karena dengan menonaktifkan ekstensi dan tema, merupakan cara untuk mengurangi penggunaan daya. Bahkan perlu ekstensi gnome saya nonaktifkan semua. Kalau saya, tema tetap menggunakan Adwaita, sebab Adwaita lebih minimalis dan bawaannya GNOME.

## Mudah mencadangan Data dengan deja-dup

Salah satu aplikasi favorit yaitu deja-dup. Fungsinya untuk mencadangkan data baik secara daring maupun luring. Data ini bukan yang tampak saja seperti direktori dokumen, gambar, video, musik, dan destop. Tetapi dengan deja-dup akan mencadangkan data seperti autentifikasi akun, surel, pengaturan gnome, konfigurasi dconf, ssh, gnupg, catatan, sejarah, dan berkas tersembunyi. Jadi dengan deja-dup dengan sekali klik data akan sinkron secara otomatis dan tersandikan. Mana mungkin mencadangkan direktori satu-persatu. Pastinya dengan deja-dup lebih mudah dan aman.

## Autentifikasi Akun

Fitur andalan lainnya yaitu akun daring. Dengan akun daring pekerjaan jadi lebih mudah. Sebab kalender, surel, notifikasi acara, catatan, pencadangan, kata sandi sudah tersinkron otomatis. Setelah masuk dengan akun daring, evolution pembuka surel akan terdeteksi otomatis. jika menggunakan google drive secara otomatis nautilus juga mendeteksi. Ya memang benar, semuanya sudah terintegrasi. Jadi membuka surel tak perlu lagi membuka di penjelajah web cukup klik evolution, selesai sudah.

{{< photoset max="2" >}}
  {{< photo src="akun-daring.jpeg" alt="akun-daring" >}}
  {{< photo src="evolution.jpeg" alt="evolution" >}}
{{</ photoset >}}

## Mudah menyabungkan tampilan ke Monitor atau Proyektor

Dengan GNOME mudah mendeteksi resolusi layar. Ya, umumnya menggunakan `super+p` kemudian memilih mode tampilan.

## Adanya Fitur Tampilan Dinamis

Fitur ini menarik, karena membuat layar kerja lebih fleksibel. Cukup dengan `ctrl+alt+atas/bawah` layar bisa berpindah tempat, atau memindahkan jendela aktif dengan `ctrl+shift+alt+atas/bawah`.

## Faktanya!

GNOME merupakan lingkungan destop dengan berbagai fitur yang memudahkan penggunanya seperti yang sudah saya sebutkan diatas. Faktanya semakin banyak fitur maka semakin banyak aplikasi yang berjalan di atar belakang, hal ini menyebabkan penggunaan daya yang kurang bersahabat. Apalagi jika RAM pemakaian lebih dari 25% sudah dikatakan berat khususnya untuk orang Indonesia.

Padahal GNOME juga tidak terlalu berat juga. RAM yang digunakan sekitar 775 MiB dari 4GB, kurang dari 20% ketika idle.

```
[hervyqa@dell ~]$ free
              total        used        free      shared  buff/cache   available
Mem:           3851         775        2050         251        1025        2580
Swap:         15258           0       15258
```

Dengan ps_mem, pemakaian sekitar 790.5 MiB

```
[hervyqa@dell ~]$ sudo ps_mem
[sudo] password for hervyqa:
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

Tes lain yang sederhana yaitu membuka banyak aplikasi bersamaan. Ternyata CPU masih tenang dengan grafik yang wajar. Jadi saya semakin optimis tak perlu ragu lagi menggunakan GNOME.

{{< photoset max="2" >}}
  {{< photo src="membuka-aplikasi-gnome-1.jpeg" alt="membuka-aplikasi-gnome-1" >}}
  {{< photo src="membuka-aplikasi-gnome-2.jpeg" alt="membuka-aplikasi-gnome-2" >}}
{{</ photoset >}}

Padahal CPU saya hanya keluaran intel generasi kedua (penulis mengetahui generasi 10 sudah rilis).

{{< photoset max="2" >}}
  {{< photo src="ihwal-1.jpeg" alt="ihwal-1" >}}
  {{< photo src="ihwal-2.jpeg" alt="ihwal-2" >}}
{{</ photoset >}}

***

## Kesimpulan

Jika memilih fitur dan kemudahan maka GNOME lebih tepat digunakan, terlebih banyak aplikasi GNOME yang sudah siap mendukung.

Sebaliknya, jika memilih lingkungan destop yang ringan, maka pilihlah DE selain GNOME seperti xfce, tetapi saya pribadi tidak rela jika saya mengutamakan DE yang ringan tetapi malah mempersulit aktifitas lainnya.

Perlu diingat semakin minim fitur maka semakin ringan, semakin berat maka sudah tentu banyak fitur. Tentu dengan banyak fitur sudah pasti memudahkan. Pilihlah dengan bijak sesuai kebutuhan dan spesifikasi mesin.

Sepertinya sudah cukup artikelnya. Anda pengguna WM ataupun mempunyai pengalaman dengan GNOME silahkan berkomentar dibawah ini. Sekian, semoga bermanfaat. ^^

***