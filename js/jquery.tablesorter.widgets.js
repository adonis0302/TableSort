/* TableSorter 2.0 Widgets */

// Add jQuery UI theme widget
$.tablesorter.addWidget({
	id: "uitheme",
	format: function(table) {
		var c = table.config,
		// ["up/down arrow (cssHeaders, unsorted)", "down arrow (cssDesc, descending)", "up arrow (cssAsc, ascending)" ]
		icons = c.uitheme || ["ui-icon-arrowthick-2-n-s", "ui-icon-arrowthick-1-s", "ui-icon-arrowthick-1-n"],
		klass, rmv = icons.join(' ');
		if (c.debug) {
			time = new Date();
		}
		if (!$(c.headerList[0]).is('.ui-theme')) {
			$(table).addClass('ui-widget ui-widget-content ui-corner-all');
			$.each(c.headerList, function(){
				$(this)
				// using "ui-theme" class in case the user adds their own ui-icon using onRenderHeader
				.addClass('ui-widget-header ui-corner-all ui-theme')
				.append('<span class="ui-theme"/>');
			});
		}
		$.each(c.headerList, function(i){
			if (c.headers[i] && c.headers[i].sorter === false) {
				// no sort arrows for disabled columns!
				$(this).find('span.ui-theme').removeClass(rmv + ' ui-icon');
			} else {
				klass = ($(this).is('.' + c.cssAsc)) ? icons[1] : ($(this).is('.' + c.cssDesc)) ? icons[2] : $(this).is('.' + c.cssHeader) ? icons[0] : '';
				$(this).find('span.ui-theme').removeClass(rmv).addClass(klass + ' ui-icon');
			}
		});
		if (c.debug) {
			$.tablesorter.benchmark("Applying uitheme widget", time);
		}
	}
});

// Add Column styles widget
$.tablesorter.addWidget({
	id: "columns",
	format: function(table) {
		var $td, time, i,
		c = table.config,
		list = c.sortList,
		len = list.length,
		css = c.widgetColumns.css,
		last = css.length-1,
		rmv = css.join(' ');
		if (c.debug) {
			time = new Date();
		}
		// loop through the visible rows
		$("tr:visible", table.tBodies[0]).each(function (i) {
			$td = $(this).children().removeClass(rmv);
			// primary sort column class
			$td.eq(list[0][0]).addClass(css[0]);
			if (len > 1) {
				for (i=1; i<len; i++){
					// secondary, tertiary, etc sort column classes
					$td.eq(list[i][0]).addClass( css[i] || css[last] );
				}
			}
		});
		if (c.debug) {
			$.tablesorter.benchmark("Applying Columns widget", time);
		}
	}
});