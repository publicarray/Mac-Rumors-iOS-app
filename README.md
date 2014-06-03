# (Unofficial) Mac Rumors App for iOS

The app fetches the RSS feed of http://www.macrumors.com and displays them in a Table view.

### Features included:

* Support for iOS 7 and iOS 6 (iOS 5 should work but it is *not* tested)
* A Tablet version is included
* Saving of favorite articles
* Sorting favorite articles based on title, date published and the order they were added in.
* Sharing articles to twitter, facebook and email by using the [TiSocial.Framework](https://github.com/viezel/TiSocial.Framework/tree/1.7.3)
* Saves the feed for off-line viewing.
* Customisation option to change the colour scheme of the app.
* Sound FX - volume can be adjusted in the settings

### Screenshots

![Main View](http://raw.githubusercontent.com/publicarray/Mac-Rumors-iOS-app/gh-pages/images/screenshots/main.png)

![Sharing View](http://raw.githubusercontent.com/publicarray/Mac-Rumors-iOS-app/gh-pages/images/screenshots/Share.png)

### Dependency

The app uses the excellent [TiSocial.Framework v1.7.3](https://github.com/viezel/TiSocial.Framework/tree/1.7.3) module:

To install it on Mac OS X place the extracted folder in the `~/Library/Application Support/Titanium/modules/` folder. Where `~` is your home folder

For Windows 7 extract the folder into: `C:\Users\username\AppData\Roaming (or C:\ProgramData\Titanium on Titanium Studio 1.0.1 and earlier)` 

Or in Titanium Studio you can go to `Help > Install Mobile Module`.

### Install

The app can be complied by using titanium or using the [Xcode build (see releases)](https://github.com/publicarray/Mac-Rumors-iOS-app/releases). An Apple iOS Developer account with a registered UDID device is needed to install the app.

### Change log
The change log can be found in the [CHANGELOG.md](../master/CHANGELOG.md) file.

#Boring legal stuff

### Appcelerator License:
----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are
trademarks of Appcelerator, Inc.

Titanium is Copyright (c) 2008-2013 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.


### The MIT License (MIT)

Copyright (c) 2013 Sebstian Schmidt and Paris Moletti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
