angular
    .module('protoTable')
    .directive('keyboardNavigation', KeyboardNavigation);

KeyboardNavigation.$inject = ['keyCodes'];

function KeyboardNavigation(keyCodes) {
    return {
        restrict: "A",
        scope: {},
        link: function ($scope, el, attr) {
            return keyboardNavigationLink($scope, el, attr, keyCodes);
        }
    };
}

function keyboardNavigationLink($scope, el, attr, keyCodes) {
    el.on('click', 'tbody', handleNavigation);

    function handleNavigation(e) {

        el.find('td').keydown(function (e) {
            // shortcut for key other than keys
            //
            // if ($.inArray(e.which, [keyCodes.Left, keyCodes.Up, keyCodes.Right, keyCodes.Down, keyCodes.Tab, keyCodes.Enter]) < 0) {
            //     return;
            // }
            var td = $(e.target),
                tr = td.closest('tr'),
                moveTo = null,
                moveToRow = null,
                pos = td[0].cellIndex;
                console.log(td.parents('table'));
                var isTableSticky = td.parents('table')[0].dataset.tableType === 'sticky',
                otherTable = td.parents('table').siblings('table'),
                prevTableCurrentRowLastCell = otherTable.find('tr[tabindex="' + td.parent()[0].tabIndex + '"] > td:last-child'),
                prevTablePrevRowLastCell = otherTable.find('tr[tabindex="' + (td.parent()[0].tabIndex - 1) + '"] > td:last-child'),
                nextTableCurrentRowFirstCell = otherTable.find('tr[tabindex="' + td.parent()[0].tabIndex + '"] > td:first-child'),
                nextTableNextRowFirstCell = otherTable.find('tr[tabindex="' + (td.parent()[0].tabIndex + 1) + '"] > td:first-child');


            switch (e.which) {
                case keyCodes.Left: {
                    if (td.is(':first-child')) {
                        if (isTableSticky) {
                            moveTo = prevTablePrevRowLastCell;
                            break;
                        } else {
                            moveTo = prevTableCurrentRowLastCell;
                            break;
                        }
                    }
                    moveTo = td.prev();
                    break;
                }
                case keyCodes.Right:
                case keyCodes.Tab: {
                    e.preventDefault();
                    if (td.is(':last-child')) {
                        if (isTableSticky) {
                            moveTo = nextTableCurrentRowFirstCell;
                            break;
                        } else {
                            moveTo = nextTableNextRowFirstCell;
                            break;
                        }
                    }
                    moveTo = td.next();
                    break;
                }

                case keyCodes.Up:
                case keyCodes.Down: {
                    if (e.which === keyCodes.Down) {
                        moveToRow = tr.next('tr');
                    }
                    else if (e.which === keyCodes.Up) {
                        moveToRow = tr.prev('tr');
                    }
                    if (moveToRow.length) {
                        moveTo = $(moveToRow[0].cells[pos]);
                    }
                    break;
                }
            }
            if (moveTo && moveTo.length) {
                e.preventDefault();
                moveTo.each(function (i, td) {
                    td.focus();
                });
            }
        });
    }

}
