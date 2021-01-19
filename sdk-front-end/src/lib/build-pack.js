var fs = require('fs');
var path = require('path');
const fse = require('fs-extra');

var { execSync } = require('child_process');

console.log('[OPTSOL-REACT] Transpilando para JavaScript...');
execSync('tsc -b ./src/lib/lib.tsconfig.json');

function copyPackage() {
  fs.copyFileSync('./src/lib/package.json', './dist/otpsol-react/package.json');
}

console.log('[OPTSOL-REACT] Copiando package.json...');
copyPackage();

function copyFolderRecursiveSync(source, target) {
  var files = [];

  // Check if folder needs to be created or integrated
  var targetFolder = target;
  console.log('Targetfolder: ' + targetFolder);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    console.log('copy');
    files = fs.readdirSync(source);

    files.forEach(function (file) {
      var curSource = path.join(source, file);
      console.log(curSource);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        fs.copyFileSync(curSource, targetFolder + '/' + file);
      }
    });
  }
}

function copyAssets() {
  copyFolderRecursiveSync('./src/lib/assets', './dist/otpsol-react/assets');
}

console.log('[OPTSOL-REACT] Copiando assets...');
copyAssets();

console.log('[OPTSOL-REACT] Executando npm pack...');
execSync('cd dist/otpsol-react && npm pack');

console.log('[OPTSOL-REACT] Empacotado com sucesso!');
