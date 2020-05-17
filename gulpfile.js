const { watch, series, parallel, src, dest } = require('gulp');

const { exec: execP } = require('child_process');

function watchT() {
  return parallel(execP('tsc -w -p ./'), watch(['**/bin/*'], copyBinfiles));
}
function BuildTs(cb) {
  return execP('tsc -p ./');
}
function copyBinfiles(cb) {
  src(['./*/bin/*','!**/node_modules/','!out/**']).pipe(dest('./out'));
  cb();
}

exports.w = watchT;
exports.c = copyBinfiles;
exports.default = series(BuildTs, copyBinfiles);
