tablesorter is a jQuery plugin for turning a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes.
tablesorter can successfully parse and sort many types of data including linked data in a cell.

See [Alpha-numeric sort Demo](http://mottie.github.com/tablesorter/) &amp; [Full Documentation](http://mottie.github.com/tablesorter/docs/)

###Features

* Multi-column sorting.
* Parsers for sorting text, alphanumeric text, URIs, integers, currency, floats, IP addresses, dates (ISO, long and short formats), time. [Add your own easily](http://mottie.github.com/tablesorter/docs/example-parsers.html)
* Support for ROWSPAN and COLSPAN on TH elements.
* Support secondary "hidden" sorting (e.g., maintain alphabetical sort when sorting on other criteria).
* Extensibility via [widget system](http://mottie.github.com/tablesorter/docs/example-widgets.html).
* Cross-browser: IE 6.0+, FF 2+, Safari 2.0+, Opera 9.0+.
* Small code size.
* Works with jQuery 1.2.3+

###Documentation

Included all original [document pages](http://mottie.github.com/tablesorter/docs/index.html) with updates from my blog post on [undocumented options](http://wowmotty.blogspot.com/2011/06/jquery-tablesorter-missing-docs.html).

###Licensing

* Copyright (c) 2007 Christian Bach
* Main Examples and docs at: [http://tablesorter.com](http://tablesorter.com)
* Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses:

###Change Log

View the [complete listing here](http://mottie.github.com/tablesorter/changelog.txt).

#### Version 2.0.21 (2011-09-22)

* Added `sortBegin` event
  * This event is triggered immediately before the actual sort. So this event occurs after the `sortStart` and after the `sortList` option has been updated.
  * It was added to allow for changing the sort dynamically. See [issue #3](https://github.com/Mottie/tablesorter/issues/3).
* Added `removeRows` option to the pager plugin
  * When `true`, the default value, the pager plugin removes all non-active rows from the table. This greatly increases the sort speed of large tables.
  * When `false`, the pager plugin merely hides the non-active rows so they all continue to exist in the table. This should allow for better access to data within the table (i.e. submitting form elements)

#### Version 2.0.20.1 (2011-09-16)

* Oops fixed currency sorting

#### Version 2.0.20 (2011-09-16)

* Filter Widget
  * Added "filter" to the "headers" option to allow disabling the filter option for a specific column - thanks jizo!
  * Added "filter-false" class, that when applied will disable the filter widget for that column.
  * Updated the headers docs and the filter widget demo.
* Updated the currency parser to use unicode characters to better work in different document formats.

#### Version 2.0.19 (2011-09-16)

* Added code in attempt to clear the table headers between multiple tables - fix for [issue #2](https://github.com/Mottie/tablesorter/issues/2).
* Cleaned up some code and wrapped the widget code to prevent conflicts with other javascript libraries.
* Updated the columns widget:
  * Added css examples to the [demo](http://mottie.github.com/tablesorter/docs/example-widget-columns.html).
  * Removed the `widgetColumns` option from the core, but it is still used by the widget - the way it is used hasn't changed.
* Updated the uitheme widget:
  * Added `widgetUitheme` option - used by the widget, but not included in the core. See the demo for a better example.
  * Example added to the [uitheme widget demo](http://mottie.github.com/tablesorter/docs/example-widget-columns.html).

#### Version 2.0.18.1 (2011-09-14)

* Updated the "uitheme" widget with method to add zebra striping and hovered header classes.

#### Version 2.0.18 (2011-09-13)

* Fixed a bug in the column widget, it would cause an error if no initial sort was set.
* Fixed a bug where an error would occur if a widget doesn't exist.
* Updated pager widget to allow restoring the pager plugin & updated demo.
* Added column filter widget. It is designed so that each column has an filter.

#### Version 2.0.17 (2011-09-11)

* Added a jquery.tablesorter.widget.js file:
  * It contains the "uitheme" widget, to add any jQuery UI theme, and the new "columns" widget, to style columns.
  * The blue and green themes have been updated with the added styles from the columns widget.
  * Added a Columns Widget demo and instructions.
* Added a `widgetColumns` option which defines the css classes added by the columns widget.
* Added notes to the pager plugin demo page to better specify when a change was added.
* The green theme header images have been modified to better work with variable width tables.

#### Version 2.0.16 (2011-09-08)

* Added notes to demo pages to indicate if the original (version 2.0.5, at [tablesorter.com](http://tablesorter.com/docs/)) does have that option or method.
* Added "addRows" method that allows adding table rows.
  * This method differs from the "update" method in that it only adds rows to the cache.
  * Use this new method to add rows to a table with the pager plugin applied. Using the "update" method on a table with the pager plugin will remove all hidden rows from the cache.
* Added a "destroy.pager" method to remove the pager from the table - pager demo updated.

#### Version 2.0.15 (2011-08-23)

* Fixed a problem that caused a javascript error when a table header cell doesn't have a class name.

#### Version 2.0.14 (2011-08-22)

* Reverted the changes made in 2.0.13 and added checks to prevent errors.
* Allowed sorting an empty table which would then automatically sort its contents when the table is updated.
* Modified "Update" and "UpdateCell" methods to automatically resort the table using the existing sort.
* Updated the [Initializing tablesorter on an empty table](http://mottie.github.com/tablesorter/docs/example-empty-table.html) demo and [Updating a table cell](http://mottie.github.com/tablesorter/docs/example-update-cell.html).

#### Version 2.0.13 (2011-08-19)

* Fixed a problem where a javascript error would occur when initializing a multi sort on an empty table. Thanks again to Eugene Ivakhiv!

#### Version 2.0.12 (2011-08-19)

* Updated the `textExtraction` functionality
   * The original textExtraction function was only able to be applied to all cells.
   * Apparently the ability to define textExtraction on a per column basis was misinterpreted by me, so now I've added it.
   * Use the option as follows:

   ```javascript
   $("table").tablesorter({
     textExtraction: {
       0: function(node) { return $(node).find(selector1).text(); },
       1: function(node) { return $(node).find(selector2).text(); },
       // etc
     }
   });
   ```

   * Updated the [Dealing with markup inside cells](http://mottie.github.com/tablesorter/docs/example-option-text-extraction.html) demo.
   * Thanks to Eugene Ivakhiv for bringing this issue to my attention in my blog.

#### Version 2.0.11 (2011-08-04)

* Added the ability to set a column parser using a class name
   * When setting the parser, start the class name with "sorter-" followed by the parser name, e.g. "sorter-text" or "sorter-digit"
   * The column can be disabled by setting the class name to "sorter-false"
   * [Demo page](http://mottie.github.com/tablesorter/docs/example-parsers-class-name.html) included.
   * Custom parsers can also be used - see the updated [writing custom parsers demo](http://mottie.github.com/tablesorter/docs/example-parsers.html).

#### Version 2.0.10 (2011-07-31)

* Modified the numeric sort with a new method to deal with non-numeric content:
   * When sorting columns with numeric values, by default any non-numeric or empty cells are treated as if they have a zero value. This puts the text between negative and positive values in a column.
   * Adding `string : "max+"` to the `headers` option will now treat any non-numeric table cells as if they have a maxiumum positive value (a value greater than the maximum positive value in the column).
   * Adding `string : "max-"` to the `headers` option will now treat any non-numeric table cells as if they have a maxiumum negative value (a value greater than the maximum negative value in the column).
   * See the "[Dealing with text strings in numeric sorts](http://mottie.github.com/tablesorter/docs/example-options-headers-digits-strings.html)" demo for a better visual example.
* Changed UI theme widget code to use "ui-widget-header" instead of "ui-widget-default" to better match the themes.
* Renamed changelog.markdown to changelog.txt to prevent downloading when clicking on the link

#### Version 2.0.9 (2011-07-27)

* Added a jQuery UI theme and widget example. To apply the jQuery UI theme:
   * Include any jQuery UI theme on your page.
   * Add the base tablesorter ui theme (located in css/ui directory)
   * Add the jQuery UI theme widget code found on [this example page](http://mottie.github.com/tablesorter/docs/example-ui-theme.html). This demo page includes the UI theme switcher.
* Added a header index to the `onRenderHeader` function to make it easier to target specific header cells for modification. See the [render header example](http://mottie.github.com/tablesorter/docs/example-option-render-header.html) for an example.
* Pager plugin updates:
   * Removed the `separator` option and added an `output` option which allows you to completely customize the output string.
   * In the `output` string, include any of the following variables:
      * `{page}` is replaced with the current page number.
      * `{totalPages}` is replaced with the total number of pages.
      * `{startRow}` is replaced with the number of the visible start row of the pager.
      * `{endRow}` is replaced with the number of the visible end row of the pager.
      * `{totalRows}` is replaced with the total number of rows.
   * The `cssPageDisplay` option can now target any element; in previous versions, this element was an input of type text.
   * Added a `pagerArrows` and `cssDisabled` options:
      * When `pagerArrows` is true, the first and previous pager arrows have the css class name contained in the `cssDisabled` option applied when the first row is visible.
      * The next and last pager arrows will be have the `cssDisabled` class applied when the last row is visible.
      * Additionally, if the number of table rows is less than the pager size, the pager will get the `cssDisabled` class name applied.
      * If false (the default setting), the pager arrows class names will not change.
      * Please see the updated [pager demo](http://mottie.github.com/tablesorter/docs/example-pager.html) to see this working.
