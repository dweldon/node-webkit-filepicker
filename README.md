# Node Webkit Filepicker

1. Place the necessary nw files in this directory
2. Run nw
3. Click the button
4. Choose cat.jpg
5. Wait for the upload text to reach 100%

The files are compiled from jade and coffeescript but you do not need to
recompile them in order to make the example work. In an ideal world, we could
replace `$file.click();` with something like:

    $file.val(process.cwd() + '/cat.jpg');
    upload();
