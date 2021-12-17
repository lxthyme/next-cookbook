#### type: type 用于说明 commit 的类别，必须为以下类型的一种：
feat: 新的功能
fix: 修复 bug
docs: 只是文档的更改
style: 不影响代码含义的更改 (例如空格、格式化、少了分号)
refactor: 既不是修复 bug 也不是添加新功能的代码更改
perf: 提高性能的代码更改
test: 添加或修正测试
chore: 对构建或者辅助工具的更改，例如生成文档

#### scope: commit 影响的范围, 比如: route, component, utils, build...
scope 用于说明 commit 影响的范围，当影响的范围有多个时候，可以使用 *。

#### subject: commit 的概述, 建议符合  50/72 formatting
subject用于对 commit 变化的简洁描述：
    * 使用祈使句，一般以动词原形开始，例如使用 change 而不是 changed 或者 changes
    * 第一个字母小写
    * 结尾不加句号（.）

#### body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
body 用于对 commit 详细描述。使用祈使句，一般以动词原形开始，例如使用 change 而不是 changed 或者 changes。

body 应该包含这次变化的动机以及与之前行为的对比。

#### footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
footer 目前用于两种情况。
1. 不兼容的变动
    所有不兼容的变动都必须在 footer 区域进行说明，以 BREAKING CHANGE: 开头，后面的是对变动的描述，变动的理由和迁移注释。
2. 关闭 issue
    如果 commit 是针对某个 issue，可以在 footer 关闭这个 issue。

#### Revert
如果 commit 用于撤销之前的 commit，这个 commit 就应该以 revert: 开头，后面是撤销这个 commit 的 header。在 body 里面应该写 This reverts commit <hash>.，其中的 hash 是被撤销 commit 的 SHA 标识符。
