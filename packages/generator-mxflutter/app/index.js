const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const config = require('./config');
const commandExists = require('command-exists').sync;

module.exports = class extends Generator {
  initializing() {
    this.pkg = require('../package.json');
  }
  defaults() {
  }
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'appname',
        message: '请输入项目名字',
        default: 'my-app',
      },
      {
        type: 'input',
        name: 'flutterJsSrc',
        message: 'flutter项目对应mxflutter_js_src绝对路径',
        default: './release',
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入你的名字',
        default: this.user.git.name(),
      },
      {
        type: 'input',
        name: 'email',
        message: '请输入你的邮箱',
        default: this.user.git.email(),
      },
    ]).then((answers) => {
      this.props = answers;
    });
  }
  writing() {
    mkdirp(this.destinationPath(this.props.appname));

    this.destinationRoot(this.destinationPath(this.props.appname));

    this.log(`创建目录: ${this.destinationPath()}, 拷贝文件...`);

    const templateData = {
      ...this.props,
    };

    const copy = (input, output) => {
      this.fs.copy(this.templatePath(input), this.destinationPath(output));
    };
    const copyTpl = (input, output, data) => {
      this.fs.copyTpl(this.templatePath(input), this.destinationPath(output), data);
    };

    // Create extra directories
    config.dirsToCreate.forEach((item) => {
      mkdirp(item);
    });

    // Render Files
    config.filesToRender.forEach((file) => {
      copyTpl(file.input, file.output, templateData);
    });

    // Copy Files
    config.filesToCopy.forEach((file) => {
      copy(file.input, file.output);
    });
  }
  install() {
    this.log('开始安装依赖...');

    const hasYarn = commandExists('yarn');

    if (hasYarn) {
      this.spawnCommand('yarn', []);
    } else {
      this.spawnCommand('npm', ['install']);
    }
  }
};
