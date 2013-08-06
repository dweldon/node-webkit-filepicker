KEY = 'AfZr8sSFlRV2R0oT0mGVaz'

randomString = -> Math.random().toString(36)[2..]

filepicker.setKey KEY

$ ->
  $file = $('#file')
  $upload = $('#upload')
  $progress = $('#progress')

  upload = ->
    options = filename: "#{randomString()}.jpg"
    $progress.text 'uploading...'
    filepicker.store $file[0], options,
      (b) -> $progress.text '100%'
      (e) -> console.log e
      (p) -> $progress.text "#{p}%"

  $file
    .attr('nwworkingdir', process.cwd())
    .change upload

  $upload.click ->
    $file.click()
