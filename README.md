# clickable grid

## 使用方法
- 使用如下命令行，把myBranchName替换成你自己的github的用户名
```
git clone git@github.com:qianxueseng-com/js-projects.git
cd js-projects
git checkout -b 'myBranchName'
```

## 基本要求
- 可以使用jQuery
- 请生成一个n x n的格子，每个格子里面显示一个数字，从1到n^2为止。
- 当点击每个格子的时候，都用console.log打印出当前格子的数字。

## 额外要求
- css使用flexbox
- js使用event delegation

##完成状况
1.0版：
- 使用纯js实现
- 通过输入框输入1-36的单边格子数，可以生成n^2个格子
- 当点击确定时，提交输入的数字，点击复位，回到初始状态
- 在保持外部容器大小不变情况下，可以自动调整内部格子的大小来完整填充整个容器
- 当点击每个格子的时候，都用console.log打印出当前格子的数字
- 使用了css使用了flex，js使用event delegation
- 使用了flex兼容性较差，只能兼容到IE11

1.1版：
- 添加了数字随机分布功能，点击随机分布就能实现
- 添加了随机选定一定数量格子功能（类似于布雷），数量和n相关，点击设定就能实现
