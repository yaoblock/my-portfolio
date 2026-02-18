# 如何更新个人主页内容

只改 **`content.json`** 即可，不要改其他代码文件。

## 文件位置

项目根目录下的 **`content.json`**

## 字段说明

| 字段 | 说明 |
|------|------|
| **siteTitle** | 页面顶部显示的站点标题 |
| **intro** | 简介多行文案，用 `\n` 换行 |
| **contact** | 可选。`email`、`twitter`，用于简介下方「Email · Twitter」链接 |
| **working** | 工作/项目列表，每项包含： |
| → title | 项目名称（可加 ↗ 表示外链，也可不加） |
| → url | 点击后跳转的链接 |
| → description | 后面的灰色说明，如「一句话描述 #标签 2024 – Now」 |
| **writing** | 文章/博客列表，结构同上 |
| **watching** | 影视列表，结构同上 |
| **watchingStats** | 可选。`watched`（看过 xx 部）、`wish`（想看 xx 部），用于 Featured 页顶部展示，按豆瓣个人主页数字手动更新 |
| **readingStats** | 可选。`read`（读过 xx 本）、`wish`（想读 xx 本）、`reading`（在读 xx 本），用于 Reading Favorites 页顶部英文展示 |
| **reading** | 读书列表，结构同上 |
| **readingPosters** | 可选。首页 Reading 下展示的书籍封面，结构同 watchingPosters（title、subtitle、image），点击跳转 Favorites |

## 增加一条

在对应区块的数组里多复制一段 `{ ... }`，改里面的 `title`、`url`、`description`。

示例：Working 里加一条

```json
{
  "title": "我的项目",
  "url": "https://github.com/xxx",
  "description": "开源项目。 #Open Source 2023 – Now"
}
```

## 注意

- 每行末尾的逗号：最后一条后面不要逗号，其它每条后面要有英文逗号 `,`
- 链接没想好可以先用 `"url": ""`，页面会当成本页
- 改完保存，刷新浏览器即可看到更新
