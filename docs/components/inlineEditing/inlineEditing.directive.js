angular
    .module('protoTable')
    .directive('inlineEditingDirective', InlineEditingDirective)
    .controller('inlineEditingController', InlineEditingController);

function InlineEditingDirective() {
    return {
        restrict: "E",
        scope: {
            componentData: '='
        },
        controllerAs: "vm",
        controller: 'inlineEditingController',
        templateUrl: "components/inlineEditing/inlineEditing.html"
    };
}

InlineEditingController.$inject = ['$scope'];

function InlineEditingController($scope) {
    var vm = this,
        editableElementWrapper;

    angular.extend(vm, {
        setUnit: setUnit,
        setBehavior: setBehavior,
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

    function setBehavior(form) {
        var editableElement = form.$editables[0].inputEl[0];
        editableElement.selectionStart = editableElement.selectionStop = editableElement.value.length;


        editableElementWrapper = form.$editables[0].inputEl;
        editableElementWrapper
            .on('blur', blurEventHandler);
        // .on('keydown', keyDownHandler)
        // .on('keyup', disableOtherEditableElementsOnKeyUp);


        function blurEventHandler() {
            form.$editables[0].scope.$apply(function () {
                form.$submit();
            });
        }

        // function keyDownHandler(keyDownEvent) {
        //   switch (keyDownEvent.which) {
        //     case keyCodes.Enter:
        //       keyDownEvent.preventDefault();
        //       editableElement.blur();
        //       break;
        //   }
        // }

        // function disableOtherEditableElementsOnKeyUp(keyUpEvent) {
        //   if (keyUpEvent.which !== keyCodes.Enter
        //     && keyUpEvent.which !== keyCodes.Tab
        //     && keyUpEvent.which !== keyCodes.Escape) {
        //     vm.disabledEdit(!(validationPatterns.numeric.test(editableLElementWrapper.val().trim())
        //       || !editableLElementWrapper.val().length));
        //   }
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
