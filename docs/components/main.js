angular.module('protoTable')
    .controller('mainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope) {

    $scope.reactantRows = {
        metaInfo: {
            name: 'reactant',
            prefix: 'R',
            type: 'reactantType'
        },
        sticky: [
            {
                value: 'Potassium hydroxide'
            },
            {
                value: 'Hydrochloric acid'
            }
        ],
        body: [
            {
                formula: {
                    value: 'KOH'
                },
                mw: {
                    value: 56.106,
                    headUnits: 'g/mol',
                    style: {
                        headClasses: ['text-uppercase'],
                        classes: ['text-right']
                    }
                },
                equiv: {
                    value: 1,
                    style: {
                        classes: ['text-right']
                    }
                },
                mass: {
                    value: 5.00,
                    units: ['mg', 'g', 'kg'],
                    style: {
                        classes: ['text-right']
                    }
                },
                volume: {
                    value: 6,
                    style: {
                        classes: ['text-right']
                    }
                },
                purity: {
                    value: 100,
                    style: {
                        classes: ['text-right']
                    }
                },
                quantifier: {
                    value: 0.25,
                    units: ['g/mL', 'g/L', 'kg/L'],
                    style: {
                        classes: ['text-right']
                    }
                },
                n: {
                    value: 19.213,
                    units: ['mol', 'mmol'],
                    style: {
                        headClasses: ['text-lowercase'],
                        classes: ['text-right']
                    }
                },
                comment: {
                    value: ''
                }
            },
            {
                formula: {
                    value: 'HCl'
                },
                mw: {
                    value: 36.461,
                    style: {
                        classes: ['text-right']
                    }
                },
                equiv: {
                    value: 1,
                    style: {
                        classes: ['text-right']
                    }
                },
                mass: {
                    value: 3.249,
                    units: ['mg', 'g', 'kg'],
                    style: {
                        classes: ['text-right']
                    }
                },
                volume: {
                    value: 4,
                    style: {
                        classes: ['text-right']
                    }
                },
                purity: {
                    value: 100,
                    style: {
                        classes: ['text-right']
                    }
                },
                quantifier: {
                    value: 0.25,
                    units: ['g/mL', 'g/L', 'kg/L'],
                    style: {
                        classes: ['text-right']
                    }
                },
                n: {
                    value: 19.213,
                    units: ['mol', 'mmol'],
                    style: {
                        classes: ['text-right']
                    }
                },
                comment: {
                    value: 'This is a long-long-long comment'
                }
            }
        ]
    };

    $scope.agentRows = {
        sticky: [
            {
                value: 'Potassium hydroxide'
            }

        ],
        body: [
            {
                formula: {
                    value: 'KOH'
                },
                mw: {
                    value: 56.106
                },
                equiv: {
                    value: 1
                },
                mass: {
                    value: 5.00,
                    units: ['mg', 'g', 'kg']
                },
                volume: {
                    value: 6
                },
                purity: {
                    value: 100
                },
                quantifier: {
                    value: 0.25,
                    units: ['g/mL', 'g/L', 'kg/L']
                },
                n: {
                    value: 19.213,
                    units: ['mol', 'mmol']
                },
                comment: {
                    value: ''
                }
            }
        ]
    };

    $scope.productRows = {
        sticky: [{
            value: 'Very long name of the product, very-very looong'
        }],
        body: [{
            formula: {
                value: 'HF'
            },
            massExp: {
                value: 25,
                units: ['mg', 'g', 'kg']
            },
            massAct: {
                value: 4.6,
                units: ['mg', 'g', 'kg']
            },
            purity: {
                value: 86
            },
            nExp: {
                value: 1.2,
                units: ['mol', 'mmol']
            },
            nAct: {
                value: 1.1,
                units: ['mol', 'mmol']
            },
            yield: {
                value: 12
            }
        }]
    };
}

// (function () {
//   'use strict';
//
//   angular 1
//       .module('app', ['inlineEditing', 'stoichSection'])
//       .controller('appController', appController);
//
//   appController.$inject = ['$scope'];
//
//   function appController($scope) {
//     $scope.reactantRows = {
//       metaInfo: {
//         name: 'reactant',
//         prefix: 'R',
//         type: 'reactantType' //need to
//       },
//       sticky: [
//         {
//           value: 'Potassium hydroxide'
//         },
//         {
//           value: 'Hydrochloric acid'
//         }
//       ],
//       body: [
//         {
//           formula: {
//             value: 'KOH'
//           },
//           mw: {
//             value: 56.106,
//             headUnits: 'g/mol',
//             style: {
//               headClasses: ['text-uppercase'],
//               classes: ['text-right']
//             }
//           },
//           equiv: {
//             value: 1,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           mass: {
//             value: 5.00,
//             units: ['mg', 'g', 'kg'],
//             style: {
//               classes: ['text-right']
//             }
//           },
//           volume: {
//             value: 6,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           purity: {
//             value: 100,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           quantifier: {
//             value: 0.25,
//             units: ['g/mL', 'g/L', 'kg/L'],
//             style: {
//               classes: ['text-right']
//             }
//           },
//           n: {
//             value: 19.213,
//             units: ['mol', 'mmol'],
//             style: {
//               headClasses: ['text-lowercase'],
//               classes: ['text-right']
//             }
//           },
//           comment: {
//             value: ''
//           }
//         },
//         {
//           formula: {
//             value: 'HCl'
//           },
//           mw: {
//             value: 36.461,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           equiv: {
//             value: 1,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           mass: {
//             value: 3.249,
//             units: ['mg', 'g', 'kg'],
//             style: {
//               classes: ['text-right']
//             }
//           },
//           volume: {
//             value: 4,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           purity: {
//             value: 100,
//             style: {
//               classes: ['text-right']
//             }
//           },
//           quantifier: {
//             value: 0.25,
//             units: ['g/mL', 'g/L', 'kg/L'],
//             style: {
//               classes: ['text-right']
//             }
//           },
//           n: {
//             value: 19.213,
//             units: ['mol', 'mmol'],
//             style: {
//               classes: ['text-right']
//             }
//           },
//           comment: {
//             value: 'This is a long-long-long comment'
//           }
//         }
//       ]
//     };
//
//     $scope.agentRows = {
//       sticky: [
//         {
//           value: 'Potassium hydroxide'
//         }
//
//       ],
//       body: [
//         {
//           formula: {
//             value: 'KOH'
//           },
//           mw: {
//             value: 56.106
//           },
//           equiv: {
//             value: 1
//           },
//           mass: {
//             value: 5.00,
//             units: ['mg', 'g', 'kg']
//           },
//           volume: {
//             value: 6
//           },
//           purity: {
//             value: 100
//           },
//           quantifier: {
//             value: 0.25,
//             units: ['g/mL', 'g/L', 'kg/L']
//           },
//           n: {
//             value: 19.213,
//             units: ['mol', 'mmol']
//           },
//           comment: {
//             value: ''
//           }
//         }
//       ]
//     };
//
//     $scope.productRows = {
//       sticky: [{
//         value: 'Very long name of the product, very-very looong'
//       }],
//       body: [{
//         formula: {
//           value: 'HF'
//         },
//         massExp: {
//           value: 25,
//           units: ['mg', 'g', 'kg']
//         },
//         massAct: {
//           value: 4.6,
//           units: ['mg', 'g', 'kg']
//         },
//         purity: {
//           value: 86
//         },
//         nExp: {
//           value: 1.2,
//           units: ['mol', 'mmol']
//         },
//         nAct: {
//           value: 1.1,
//           units: ['mol', 'mmol']
//         },
//         yield: {
//           value: 12
//         }
//       }]
//     };
//   }
//
// })();
