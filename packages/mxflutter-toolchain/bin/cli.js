#!/usr/bin/env node
const program = require('commander');
const packageMod = require('../package.json');

program.version(packageMod.version, '-V, --version', '查看工具链版本');
program.helpOption('-h, --help', '显示帮助信息').addHelpCommand(false);

program
  .command('build <entry>')
  .description('构建业务包')
  .option('--app [name]', '每个业务分配的唯一标识(发布、加载相关)')
  .option('--out [dir]', '构建结果输出目录', 'dist')
  .option('--target [target]', '编译es版本[es5|es2015]', 'es2015')
  .option('-e, --env [env]', '生成包类型[development|production]', 'development')
  .option('-w, --watch', '是否开启监听模式')
  .action((entry, option) => {
    require('../build').build(entry, option);
  });

program
  .command('bootstrap')
  .option('--out [dir]', '构建结果输出目录', 'dist')
  .option('-e, --env [env]', '生成包类型[development|production]', 'development')
  .option('--target [target]', '编译es版本[es5|es2015]', 'es2015')
  .description('构建内置包, 业务开发忽略')
  .action((option) => {
    require('../build-bootstrap').build(option);
  });

program
  .command('publish')
  .option('--platform [p]', '指定特定平台[adr|ios|both]', 'both')
  .description('发布业务包, 开发中...');

program
  .command('create')
  .description('创建模板项目')
  .action((option) => {
    require('../scaffold').create(option);
  });

program.parse(process.argv);
