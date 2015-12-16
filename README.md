# Deprecated in favor of [Apple News App](https://www.apple.com/news/)

## (Unofficial) Mac Rumors App for iOS

The app fetches the RSS feed of http://www.macrumors.com and displays them in a Table view.

### Features included:

* Works on iPhone and iPads
* Saving articles as favorites
* Sorting favorite articles based on title, date published and the order they were added in.
* Sharing articles to twitter, facebook and email by using the [TiSocial.Framework](https://github.com/viezel/TiSocial.Framework/)
* Offline Mode - Saves the feed for off-line viewing.
* Customisation option to change the colour scheme of the app.
* Sound FX - volume can be adjusted in the settings

### Screenshots

![](https://cloud.githubusercontent.com/assets/5497998/7611579/a794ae80-f9c8-11e4-90c0-5879fa6ed684.png)

### Dependency

The app uses the excellent [TiSocial.Framework](https://github.com/viezel/TiSocial.Framework/tree/master/dist) module:

To install it on Mac OS X place the extracted folder in the `~/Library/Application Support/Titanium/modules/` folder. Where `~` is your home folder

For Windows 7 extract the folder into: `C:\Users\username\AppData\Roaming`

Or in Titanium Studio you can go to `Help > Install Mobile Module`.

### Install

The app can be complied by using Titanium Studio or the [Titanium CLI](https://github.com/appcelerator/titanium). An Apple iOS Developer account with a registered UDID device is needed to install the app on the device.

#### Install using Titanium CLI
First get [Xcode](https://developer.apple.com/xcode/) and [Node.js](https://nodejs.org/)

1. Install Titanium CLI:

    ```sh
    npm install -g titanium
    ```
2. Get Titanium SDK:

    *If you install the latest version make sure that you modify `tiapp.xml` accordingly.*

    ```sh
    titanium sdk install 3.5.1.GA # or get the latest version: titanium sdk install --default
    ```

3. Install TiSocial.Framework

   Install version 1.8.2 of the [TiSocial.Framework](https://github.com/viezel/TiSocial.Framework/tree/master/dist) module.

    *If you install the latest version make sure that you modify `tiapp.xml` accordingly.*

4. cd into the directory:

    ```sh
    cd Mac-Rumors-iOS-app
    ```

5. Build:

    ```sh
    titanium build -p ios

    titanium build -p ios --target <value> # one of: simulator, device, dist-appstore, or dist-adhoc.
    titanium build -p ios --device-id <name> # Name of the device or emulator to install the application to.
    titanium build -p ios --sim-type <type> # iphone or ipad
    ```

More Titanium CLI options: http://docs.appcelerator.com/platform/latest/#!/guide/Titanium_Command-Line_Interface_Reference


### Change log
See: [CHANGELOG.md](../master/CHANGELOG.md).

# Boring legal stuff

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
