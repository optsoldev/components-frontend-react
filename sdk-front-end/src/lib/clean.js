var fs = require('fs');

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + '/' + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });

    console.log(`[OPTSOL-REACT] Deletando diretorio "${path}"...`);
    fs.rmdirSync(path);
  }
}

function deleteFile(path, fileStartsWith) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function (file, index) {
      if (file.indexOf(fileStartsWith) == 0) {
        fs.unlinkSync(path + '/' + file);
        console.log(`[OPTSOL-REACT] Deletando arquivo "${file}"...`);
      }
    });
  }
}

console.log('[OPTSOL-REACT] Iniciando limpeza...');

console.log('[OPTSOL-REACT] Deletando diretorios...');

deleteFolderRecursive('./dist/otpsol-react');

console.log('[OPTSOL-REACT] Deletando arquivos...');

deleteFile('./dist/optsol-react', 'optsol-react-');
deleteFile('./dist/optsol-react', 'package.json');

console.log('[OPTSOL-REACT] Limpeza concluida!');
