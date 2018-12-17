OS X AppleScripts
=================

My collection of AppleScripts.

Installation
------------

* Run `rake compile` to compile the plain-text scripts into `.scpt` files.
* Copy the compiled script(s) to your `~/Library/Scripts` folder, or add the
  build directory to the [FastScripts](http://www.red-sweater.com/fastscripts/)
  search path:

        defaults write com.red-sweater.FastScripts ScriptTreePathsKey -array-add "~/path/to/AppleScripts/build"

About the Scripts
-----------------

* [Mail/Deselect All](Applications/Mail/Deselect%20All.applescript)
    * Deselects all messages and mailboxes in your current message viewer.

* [Safari/Open Page With Google Chrome](Applications/Safari/Open%20Page%20With%20Google%20Chrome.js)
    * A better version of Safari's `Develop → Open Page With → Google Chrome.app (…)` menu-item.
    * You can assign a shortcut key in FastScripts. This isn't possible with
      Safari's built-in menu-item, as the text includes the version number
      (which often changes).
    * Doesn't needlessly create new tabs if the frontmost one is empty.
    * If the URL is already open in Chrome, then it activates that tab and
      reloads the page.

* [Safari/New Tab](Applications/Safari/New%20Tab.applescript)
    * Better `New Tab` functionality, via [Daring Fireball & Jeff Johnson](https://daringfireball.net/2018/12/safari_new_tab_next_to_current_tab)

License
-------

This project is released under the MIT license. See LICENSE.txt for more
information.
