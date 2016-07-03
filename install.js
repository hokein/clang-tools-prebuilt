const download = require('./download.js')
const path = require('path')
const mkdirp = require('mkdirp')
const exec = require('child_process').exec;

const dest = path.join(__dirname, './prebuilt_binaries/')

download({
  'revision': '274142',
  'platform': 'mac'
}, function(err, file_path) {
  mkdirp(dest, function(error) {
    if (error) {
      console.log(error);
      return;
    }
    console.log("unziping " + file_path);
    var cmd = 'tar -xzf ' + file_path + ' -C ' + dest;
    exec(cmd, function(error, stdout, stderr) {
      if (error) {
        console.log(stderr);
        return
      }
    })
  })
});
