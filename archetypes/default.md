---
layout: blog
draft: true
date: {{ .Date }}
title: "{{ replace .Name "-" " " | title }}"
description: "This is meta description"
image: "images/blog/{{ .Name }}.png"
type: "regular" # featured/regular
categories: # max 2
-
-
---

#### Judul

Paragraf

##### Sub Judul

Paragraf

- <kbd><kbd>a</kbd></kbd> = Fungsi
- <kbd><kbd>Ctrl</kbd>+<kbd>a</kbd></kbd> = Fungsi
- <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>a</kbd></kbd> = Fungsi
- <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>a</kbd></kbd> = Fungsi

{{< file "HelloWorld.scala" >}}

```scala
object HelloWorld extends App {
  println("Hello, World!")
}
```

{{< cmd >}}
hx learn.py
{{< /cmd >}}

{{< image src="images/blog/group-telegram.png" alt="alternate title" >}}

***

Jika Anda mempunyai pertanyaan, saran, dan kritikan silahkan komentar
dibawah ini atau di akun [telegram @hervyqa](https://t.me/hervyqa).
Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.
