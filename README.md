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
前幾天過年，出去玩了兩天，另外兩天的進度實在太少，終於今天是比較完整的一天回來做作品。
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
