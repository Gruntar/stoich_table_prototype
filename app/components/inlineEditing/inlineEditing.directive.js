angular
    .module('protoTable')
    .directive('inlineEditingDirective', InlineEditingDirective)
    .controller('inlineEditingController', InlineEditingController);

InlineEditingDirective.$inject = ['keyCodes'];

function InlineEditingDirective(keyCodes) {
    return {
        restrict: "E",
        scope: {
            componentData: '='
        },
        controllerAs: "vm",
        controller: 'inlineEditingController',
        templateUrl: "components/inlineEditing/inlineEditing.html",
        link: function ($scope, el) {
            return inlineEditingLink($scope, el, keyCodes);
        }
    };
}

function inlineEditingLink($scope, el, keyCodes) {
    el.closest('td').on('keydown', function (keyDownEvent) {
        switch (keyDownEvent.which) {
            case keyCodes.Right:
                $scope.editDisabled = false;
                break;
            case keyCodes.Enter:
                console.log('enter');
                $scope.editDisabled = false;
                el.closest('td').find('inline-editing-directive>span').click();
                break;
            case keyCodes.Escape:
                console.log('escape');
                $scope.editDisabled = true;
                el.closest('td').focus();
                break;
            case keyCodes.Tab:
                console.log('tab');
                keyDownEvent.preventDefault();
                $scope.editDisabled = true;
                el.closest('td').next('td').focus();
                break;
        }
    });
    el.closest('td').on('click', function (e) {
        if ($scope.editDisabled === true) {
            $scope.editDisabled = false;
        }
    });
    el.closest('td').on('blur', function (e) {
        if ($scope.editDisabled === false) {
            $scope.editDisabled = true;
        }
    });
}

InlineEditingController.$inject = ['$scope', 'keyCodes'];

function InlineEditingController($scope, keyCodes) {
    $scope.editDisabled = true;

    var vm = this,
        editableElementWrapper;

    angular.extend(vm, {
        setUnit: setUnit,
        setBehavior: setBehavior,
        focusParent: focusParent,
        toggled: toggled,
        toggleDropdown: toggleDropdown,
        unit: $scope.componentData.units ? $scope.componentData.units[0] : undefined,
        status: {
            isopen: false
        }
    });

    function setUnit(choice) {
        vm.unit = choice;
    }

    function focusParent(form) {

        console.log(form);
        //  form.hide();
        // if (form.$editables[0].inputEl[0].closest('td').is(':focus')) {
        //     console.log('uasdf');
        // }
        //form.$show();
        // } else {
        //     form.$editables[0].inputEl[0].closest('td').focus();
        //     form.$hide();
        // }
        //setBehavior(form);

    }

    function setBehavior(form) {
        var editableElement = form.$editables[0].inputEl[0];
        editableElement.selectionStart = editableElement.selectionStop = editableElement.value.length;


        editableElementWrapper = form.$editables[0].inputEl;
        editableElementWrapper
            .on('blur', blurEventHandler);
            // .on('keydown', keyDownHandler)
            // .on('keyup', keyUpHandler);
        //.on('keyup', disableOtherEditableElementsOnKeyUp);


        function blurEventHandler() {
            form.$editables[0].scope.$apply(function () {
                form.$submit();
            });
        }

        // function keyUpHandler(e) {
        //
        //     ///vm.editDisabled = false;
        //     $(e.target).closest('td').focus();
        //     editableElement.focus();
        //
        //
        //     //form.$cancel();
        // }
        //
        // function keyDownHandler(keyDownEvent) {
        //     switch (keyDownEvent.which) {
        //         case keyCodes.Enter:
        //             keyDownEvent.preventDefault();
        //             editableElement.focus();
        //             break;
        //     }
        // }

        // function disableOtherEditableElementsOnKeyUp(keyUpEvent) {
        //
        //     if (keyUpEvent.which !== keyCodes.Enter
        //         && keyUpEvent.which !== keyCodes.Tab
        //         && keyUpEvent.which !== keyCodes.Escape) {
        //         vm.disabledEdit(!(validationPatterns.numeric.test(editableLElementWrapper.val().trim())
        //         || !editableLElementWrapper.val().length));
        //     }
        // }
    }

    function toggled(open) {
    }

    function toggleDropdown($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    }

}
