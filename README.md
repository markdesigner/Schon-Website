首頁連結：https://markdesigner.github.io/Schon-Website/
歡迎欣賞。

2019.2.2

這是我的第一個作品，目前正在刻畫首頁。
這次的作品是由一個完整的設計稿psd，有不同頁的psd檔案，按照原搞下去刻畫。
首次提交的版本是用html與css,bootstrap4，將
home page刻到best seller的部分。
因為
nav的部分只有用
nav，
要置換成
navbar，算是有些構造的更改，所以就先將這個草版上傳了。

2019.2.3

今天把home的架構刻完了，再來就是修改CSS拉

2019.2.6

把header & main_item上面大致調完，回來再把剩下的慢慢調到位。

略過：header的hover效果以及dropdown div內容

2019.2.9
這次的更新是把首頁主要圖片部分都修到定位，還剩下hover, carasoul, footer, 
之後再來做RWD，發現RWD要做好也不簡單。


2019.2.11
把footer, 手機版草版做好囉

2019.2.13
contact與about頁面都建立完成，接下來剩下效果以及RWD的部分。
也把css整理好了。只用一隻main.less輸出的main.css。
只有每個頁面獨有的區塊，才會特別寫在他自己的less檔案中，但仍會到main一起合併。

2019.2.14
今天把bootstrap的carousel新增到index上面了，並且找到owl carousel外掛，也用上了。還搭上了 control_bt。
也新建index.css把只有home才有的區塊移過去。


2019.2.15
靜態頁面的RWD到位，剩下col微調。
所有的RWD搞定，接下來想細修什麼就去吧！

2019.2.18
今天開始blog頁面的製作。
blog主頁製作完成RWD部分也好了。因為blog的靜態的部分構造較簡單，所以回去前面修一些之前做不夠好的地方。

2019.2.20
昨天將blog-detail草版刻畫完成，現在細節也調好了。再來就是RWD囉。
做完RWD囉。也回去把之前頁面的假圖，一些可以換成真圖的換過來了。另外對於首頁的shopnow button，還有一些細節都修正了。還有修正about頁面的title跟圖片比例。

2019.2.21

今天將newsletter 以及404 desktop RWD都做好了。想來記錄一些過程。在newsletter的部分，刻畫畫面相對順利，反而一直在找說要怎麼樣觸發，才能讓畫面一出現時，使用者滾動一下就會自己跑出來newsletter，而且只要「一次」。後來搞了很久，用了jquery的one method，是第一次使用這個method。也有查到可以計算cookie，感覺很酷，但是對cookie完全不熟，所以就沒有往那個方法去走。
另外404也相對順利，反而是中間有一個input的placeholder，要放放大鏡，做的時候才發現以前好像沒做過這種。搞來搞去發現要把icon直接寫在placeholder裡面有點困難，後來換了一個方法。在input外面包一層div並且用span的方式附上icon，就可以了。
中間雖然一個button與input看起來就是要用column，但是因為設計稿的兩個物件相離很近，用column很難那麼近，於是我就嘗試自己手刻，用float的方式。還去每個breakpoint調整。搞到後來還是有些地方會破到，於是我就放棄了，把原本寫好的media query都刪掉，用grid的方式慢慢修。雖然在某個尺寸button會變成兩行，但至少RWD的部分變得很ok。 權衡之下就採取這個方法了！

2019.2.22
今天將search 以及 menu2做完。search的部分算是比較順利。在search框左邊的直槓，原本想用｜符號呈現，後來發現用border-left比較好調整。
而在menu的部分就搞比較久了。因為設計稿的樣子比起dropdown-item來，更像modal(背景會變暗），所以後來就用modal做了。要放column在裡面，又要沿用dropdown的一些特性，刪刪剪剪搞了一陣子，最後幾乎整個nav-group的東西都刪掉，直接塞進去一個modal來做。
最後調整來調整去，差不多到位了。然而小三角形目前用absolute定位，只要螢幕稍微調整，就不會對到products。直覺的想法是直接綁到products的button底下，然而，又要是modal，點了才一起顯示，目前還不知道怎麼解決。

2019.2.27
前幾天有許多進度，但沒有記下，今天來做個紀錄。今天把shopping cart desktop RWD都完成，整個算是順利，因為很多東西是延用之前的，然而在圈圈的進度表卡比較久。原本是用grid去做，後來會跑版。所以換成一般的float去做。而直線是用 \"hr\" margin-top推下來完成的。  另外把checkout的html草版架構好了。下週來把它css雕好。
另外前幾天完成的是 product-list以及product-detail，算是整個作品複雜度比較高的部分。花了滿多時間做的。也各自有js的運用。還好最後有順利完成。也讓我更了解owl-carousel的運用。

2019.3.5
這兩天主要把之前未解決的難題來面對，首先是shopping-cart navigation的三角形，本來是用BS的modal來呈現，但發現這樣沒辦法讓額外插入的三角形順利完成，
於是打掉重練，換成dropdown，並且自己刻劃了一個遮罩，後來順利完成。
而今天主要解決了product-list price range slider的部分，用了新的套件ion-slider，並且移除了jquery-ui的使用。後來順利完成的外觀以及在RWD上的運行。
今天學到一個道理，就是有些東西反而自己刻一刻，會比用別人寫好的套件改了半天還簡單。接下來就把之前老師列表的小缺點一一補足。

2019.3.6

作品的製作也來到了尾聲，今天修改了滿多之前就想修改的東西，包括：漢堡的外觀樣式、某些RWD不夠完美的地方、圖片的對齊、menu的三角形、breadcrumb的divider等等。另外今天增加了一個media query，是在374px以下，主要是針對iphone5這種舊機型，螢幕異常的小的裝置，做一些調整。因為畫面太小，再塞也不是辦法，所以多半採取不顯示某些東西的方式，來讓版面維持整齊。
