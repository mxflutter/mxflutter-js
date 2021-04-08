module.exports = {
  filesToCopy: [
    {
      input: '_tsconfig.json',
      output: 'tsconfig.json',
    },
    {
      input: '_tsconfig.es5.json',
      output: 'tsconfig.es5.json',
    },
    {
      input: '_.gitignore',
      output: '.gitignore',
    },
    {
      input: '.prettierrc.yml',
      output: '.prettierrc.yml',
    },
  ],
  filesToRender: [
    {
      input: '_package.json',
      output: 'package.json',
    },
    {
      input: '_README.md',
      output: 'README.md',
    },
    {
      input: 'src/_index.ts_',
      output: 'src/index.ts',
    },
  ],
  dirsToCreate: [
    'src',
  ],
};
