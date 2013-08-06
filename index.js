(function() {
  var KEY, randomString;

  KEY = 'AfZr8sSFlRV2R0oT0mGVaz';

  randomString = function() {
    return Math.random().toString(36).slice(2);
  };

  filepicker.setKey(KEY);

  $(function() {
    var $file, $progress, $upload, upload;
    $file = $('#file');
    $upload = $('#upload');
    $progress = $('#progress');
    upload = function() {
      var options;
      options = {
        filename: "" + (randomString()) + ".jpg"
      };
      $progress.text('uploading...');
      return filepicker.store($file[0], options, function(b) {
        return $progress.text('100%');
      }, function(e) {
        return console.log(e);
      }, function(p) {
        return $progress.text("" + p + "%");
      });
    };
    $file.attr('nwworkingdir', process.cwd()).change(upload);
    return $upload.click(function() {
      return $file.click();
    });
  });

}).call(this);
