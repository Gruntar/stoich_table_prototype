angular
    .module('protoTable')
    .directive('stoichSectionDirective', StoichSectionDirective)
    .controller('stoichSectionController', StoichSectionController);

function StoichSectionDirective() {
    return {
        restrict: "E",
        scope: {
            tableData: '='
        },
        controllerAs: "vm",
        controller: 'stoichSectionController',
        templateUrl: "components/stoichSection/stoichSection.html"
    };
}

StoichSectionController.$inject = ['$scope'];

function StoichSectionController($scope) {
    $scope.addNew = function (arr, type) {
        var reactantRowPlaceholder = makePlaceholder('reactant'),
            productRowPlaceholder = makePlaceholder('product');

        if (type === 'reactant') {
            arr.sticky.push(reactantRowPlaceholder.newStickyRow);
            arr.body.push(reactantRowPlaceholder.newBodyRow);
        } else if (type === 'product') {
            arr.sticky.push(productRowPlaceholder.newStickyRow);
            arr.body.push(productRowPlaceholder.newBodyRow);
        }
    };

    function makePlaceholder(type) {
        var placeholders = {
            reactant: {
                newStickyRow: {},
                newBodyRow: {
                    formula: {},
                    mw: {
                        style: {
                            classes: ['text-right']
                        }
                    },
                    equiv: {
                        style: {
                            classes: ['text-right']
                        }
                    },
                    mass: {
                        units: ['mg', 'g', 'kg'],
                        style: {
                            classes: ['text-right']
                        }
                    },
                    volume: {
                        style: {
                            classes: ['text-right']
                        }
                    },
                    purity: {
                        style: {
                            classes: ['text-right']
                        }
                    },
                    quantifier: {
                        units: ['g/mL', 'g/L', 'kg/L'],
                        style: {
                            classes: ['text-right']
                        }
                    },
                    n: {
                        units: ['mol', 'mmol'],
                        style: {
                            classes: ['text-right']
                        }
                    },
                    comment: {}
                }
            },
            product: {
                newStickyRow: {
                    value: ''
                },
                newBodyRow: {
                    formula: {
                        value: ''
                    },
                    massExp: {
                        value: null,
                        units: ['mg', 'g', 'kg']
                    },
                    massAct: {
                        value: null,
                        units: ['mg', 'g', 'kg']
                    },
                    purity: {
                        value: null
                    },
                    nExp: {
                        value: null,
                        units: ['mol', 'mmol']
                    },
                    nAct: {
                        value: null,
                        units: ['mol', 'mmol']
                    },
                    yield: {
                        value: ''
                    }
                }
            }
        };
        return placeholders[type];
    }

}

