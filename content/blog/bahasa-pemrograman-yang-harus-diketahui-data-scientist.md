---
draft: false
date: 2023-02-01T07:30:34+07:00
title: "Bahasa Pemrograman yang harus diketahui Data Scientist"
description: "Berbagai bahasa pemrograman yang harus dikuasi untuk data
scientist pemula"
image: "images/blog/bahasa-pemrograman-yang-harus-diketahui-data-scientist.png"
type: "featured" # featured/regular
categories: # max 2
  - scientist
---

Menjadi seorang data scientist tidak diharuskan memiliki latar belakang IT.
Dari jaringan yang saya ikuti di LinkedIn banyak yang _switch career_ dari
berbagai background ke data scientist. Dan itu pun wajar, mengingat secara
global perusahaan berbondong-bondong menuju industri digital.
Di awal januari 2023, saya yang juga konsen dan switch career dari desainer.

Baik, langsung ke pembahasan. Berikut ini adalah bahasa pemrograman yang
harus diketahui untuk data scientist. Apa saja?

#### Python

- Website: https://python.org
- Dokumentasi: https://python.org/doc
- Buku:
[PythonBooks](https://pythonbooks.org),
[RealPython](https://realpython.com/best-python-books)

Python yang diciptakan oleh [Guido van
Rossum](https://gvanrossum.github.io) merupakan bahasa high-level data struktur
programming yang mana sederhana, jelas dan logis, tetapi efektif untuk
pemrograman berbasis orientasi (OOP).

Python yang disarankan untuk dipasang minimal versi `python3.10` agar
mendapat dukungan sepenuhnya. Python yang merupakan bahasa pemrograman
multi-paradigma juga menawarkan beberapa dukungan pemrograman fungsional yang
mirip `lisp`, seperti filter, map, reduce, set dan ekspresi generator.

[Pustaka](https://pypi.org) yang ditawarkan python juga banyak sekali.
Misalnya pandas, numpy, scipy, scikit-learn, matplotlib, seaborn dan masih
banyak lagi untuk kebutuhan data science. Anda dapat mencoba python sesuai
tautan diatas dan latih kemampuan pemrograman setiap hari.

{{< cmd >}}
python
{{< /cmd >}}

```python
Python 3.10.9 (main, Dec  6 2022, 18:44:57) [GCC 11.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello World")
Hello World
```

#### SQL

- Website: https://mariadb.org
- Dokumentasi: https://mariadb.org/documentation
- Buku: https://mariadb.com/kb/en/books

SQL (Structured Query Language) [baca: _sequel_] merupakan bahasa
pemrograman untuk mengakses data dalam basis data relasional (RDBMS).
Hampir semua server basis data menggunakan SQL untuk manajemen data.

Data scientist tentu akan bergulat dengan database, seperti pembuatan
database, mengolah, dan menerjemahkan data agar lebih dipahami. Sehingga
diperlukan untuk menentukan keputusan stakeholder.

Dalam penggunaan SQL, saya menyarankan menggunakan
[MariaDB](https://mariadb.org) (fork dari [MySQL](https://www.mysql.com))
sebagai manajemen data karena lebih leluasa untuk dikembagkan secara terbuka dan
tidak terikat oleh produk yang berlisensi proprietary (Oracle). Serta memiliki
storage engine yang lebih banyak dari MySQL.

{{< cmd >}}
sudo mysql -u root -p
{{< /cmd >}}

```sql
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.6.11-MariaDB MariaDB Server
Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| hervymart          |
| hervypraktek       |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0,097 sec)

MariaDB [(none)]>
```

#### R

- Website: https://r-project.org
- Dokumentasi: https://r-project.org/other-docs
- Buku: https://rstudio.com/resources/books

Bahasa pemrograman R lebih dikenal sebagai bahasa pemrograman untuk
statistika dan visualisasi grafis. Dibuat oleh [Ross
Ihaka](https://en.wikipedia.org/wiki/Ross_Ihaka) dan [Robert
Gentleman](https://en.wikipedia.org/wiki/Robert_Gentleman_(statistician)) di
Universitas Auckland, dan sekarang dikembangkan oleh R Development Core Team.

Bahasa R dibawah lisensi GNU GPL telah menjadi standar de facto di
antara statistikawan untuk pengembangan perangkat lunak statistika, serta
digunakan secara luas untuk pengembangan perangkat lunak statistika dan analisis
data.

Penggunaan bahasa R dapat dilakukan dengan [Jupyter
Notebook](https://jupyter.org) atau [RStudio](https://r-project.org.org) untuk
memudahkan data scientist untuk mengolah data.

{{< cmd >}}
R
{{< /cmd >}}

```R
R version 4.2.1 (2022-06-23) -- "Funny-Looking Kid"
Copyright (C) 2022 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

> print("HelloWorld")
[1] "HelloWorld"
```

#### Julia

- Website: https://julialang.org
- Dokumentasi: https://docs.julialang.org/en
- Buku: https://julialang.org/learning/books

Bahasa pemrograman Julia adalah salah satu bahasa yang digunakan untuk
menganalisis numerik dan visualisasi data secara efisien. Sama halnya dengan
Python, Julia termasuk bahasa high-level yang syntaxnya tergolong mudah untuk
pemula.

Bisa dibilang Julia adalah kompetitornya Python, sebab performanya jauh
lebih cepat dari python. Hal ini dikarenakan Julia dikompil dengan framework
LLVM untuk kompilasi JIT, yang sebanding dengan kecepatan bahasa C.
Selain itu, julia dapat diintegrasikan dengan VIM, Jupyter, dan
[VSCode](https://julia-vscode.org). Julia juga terdapat [julia
packages](https://www.juliapackages.com) untuk pustaka yang dibutuhkan oleh data
scientist dan menariknya julia terdapat [Flux](https://fluxml.ai) pustaka khusus
untuk Machine Learning.

{{< cmd >}}
julia
{{< /cmd >}}

```julia
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.8.5 (2023-01-08)
 _/ |\__'_|_|_|\__'_|  |
|__/                   |

julia> print("Hello World")
Hello World
julia>
```
#### Scala

- Website: https://scala-lang.org
- Dokumentasi: https://docs.scala-lang.org
- Buku: https://docs.scala-lang.org/books

Scala (Scalable language) dimulai pada 2001 oleh Martin Odersky merupakan
bahasa pemrograman untuk kebutuhan general, high-level, dan multi paradigma.

Scala, seperti Java juga salah satu bahasa pemrograman yang berorientasi
pada objek yang aman juga mendukung pemrograman fungsional. Scala berjalan pada
platform Java (Java virtual machine) dan kompatibel dengan yang ada program
Java.

{{< file "HelloWorld.scala" >}}

```scala
object HelloWorld extends App {
  println("Hello, World!")
}
```

Kompilasi:

{{< cmd >}}
scalac HelloWorld.scala
{{< /cmd >}}

Menjalankan binary:

{{< cmd >}}
scala HelloWorld
{{< /cmd >}}

```sh
Hello, World!
```

#### Kesimpulan

Apapun bahasa yang digunakan, sesuaikan dengan kebutuhan dan kriteria data
yang ada agar lebih efektif. Jika masih pemula, sudah saya urutkan pemrograman
sesuai sub-judul dari yang mudah dan umum sehingga mudah untuk dipelajari. Fokus
dan kuasai satu-persatu.

Apa bahasa yang terbaik?

Semua bahasa pemrograman adalah terbaik asalkan sesuai tempatnya, karena
setiap bahasa memiliki kelebihan dan kekurangan masing-masing. Bahkan secara
pribadi menganjurkan untuk tidak fokus kebahasanya, melainkan memahami konsep
dasar algoritma pemrograman terlebih dahulu yang lebih penting.

***

Barakallahu fiikum.
Jika Anda mempunyai pertanyaan, saran, dan kritikan silahkan komentar
di akun [telegram](https://t.me/hervyqa) atau [instagram
@hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat
untuk pembaca semuanya. Aamiin.
