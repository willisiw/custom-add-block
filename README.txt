
-- SUMMARY --

The Custom Add Block is an icon grid to add node types.

Authorized users can click an icon to add a node.


For a full description of the module, visit the project page:
  http://github.com/willisiw/custom-add-block

To submit bug reports and feature suggestions, or to track changes:
  http://github.com/willisiw/custom-add-block/issues


-- REQUIREMENTS --

NONE.

-- INSTALLATION --

* Install module using the zip file.  For further info visit 
  http://drupal.org/documentation/install/modules-themes/modules-7

-- CONFIGURATION --

* After enabling the module, navigate to 
  Configuration > User interface > Custom add block 
  or 
  /?q=admin/config/user-interface/custom_add_block

* Upload 48x48 pixel square icons for each node type to a folder
  publicly accesible on your site.  The module folder is one option.
 
* Set path to the image for each icon. 

* SAVE - Click SAVE on the bottom of the config page.

* Verify the icon displays on the admin page.


-- TROUBLESHOOTING --

If the Icon Image is not displaying.

Check the path in the /?q=admin/config/user-interface/custom_add_block
and verify that you can access the image directly by pasting the path 
into your browsers address bar after your sites base address.

http://example.com/sites/all/modules/custom_add_block/defaultadd.png
or 
http://example.com/somefolder/sites/all/modules/custom_add_block/defaultadd.png

The module uses your basepath, so if your drupal site is:
 http://example.com/
 browse to: 
 http://example.com/sites/all/modules/custom_add_block/defaultadd.png
 config for: /sites/all/modules/custom_add_block/defaultadd.png

If your site is
 http://example.com/somefolder
 browse to: 
 http://example.com/somefolder/sites/all/modules/custom_add_block/defaultadd.png
 config for: /sites/all/modules/custom_add_block/defaultadd.png


-- FAQ --

Q What is the best image size for the icons?
A CSS is formatted to take advantage of a 48x48 pixel image.


-- CONTACT --

Current maintainers:
* Ian Willis (willisiw) - http://github.com/willisiw
