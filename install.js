const download = require('./download.js')
const path = require('path')
const mkdirp = require('mkdirp')
const exec = require('child_process').exec
const os = require('os')

const dest = path.join(__dirname, './dist/')

const platform = os.platform()
const platforms = {
  darwin: 'mac',
  linux: 'linux',
  freebsd: 'linux'
}

if (!platforms[platform]) throw new Error('Unknown platform: ' + platform)

download({
  'revision': '274142',
  'platform': platforms[platform]
}, (err, file_path) => {
  mkdirp(dest, (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log("unziping " + file_path)
    var cmd = 'tar -xzf ' + file_path + ' -C ' + dest
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(stderr)
        return
      }
    })
  })
});
