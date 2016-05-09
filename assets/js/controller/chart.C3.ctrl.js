myApp.controller('chartC3DemoController',chartC3DemoController);

  function chartC3DemoController($scope){
    var alea = function  (){
      return (Math.random() * 100).toFixed(2) ;
    };


    var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['Q', alea(),  alea(),  alea(),  alea()],
          ['Q-1',  alea(),  alea(),  alea(),  alea()],
        ]
      }
    });

    var chartBar = c3.generate({
      bindto: '#chartBar',
      data: {
        columns: [
          ['Q', alea(),  alea(),  alea(),  alea()],
          ['Q-1',  alea(),  alea(),  alea(),  alea()],
        ],
        type: 'bar'
      }
    });

    var chartDonut = c3.generate({
      bindto: '#chartDonut',
      data: {
        columns: [
          ['Q',  alea()],
          ['Q-1',  alea()],
        ],
        type : 'donut'
      },
      donut: {
        title: "Tab Q"
      }
    });

    var Q_Advance = c3.generate({
      bindto: '#Q_Advance',
      data: {
        columns: [
          ['data', alea()]
        ],
        type: 'gauge'
      },
      color: {
        pattern: ['red', 'orange', 'yellow', 'green'], // the three color levels for the percentage values.
        threshold: {
          values: [30, 60, 90, 100]
        }
      }
    });


    $scope.anime_Progress_Advance = function(){
      Q_Advance.load({
        columns : [
          ['data', alea()]
        ]
      });

      chartBar.load({
        columns: [
          ['Q', alea(),  alea(),  alea(),  alea()],
          ['Q-1', alea(),  alea(),  alea(),  alea()],
          ['Q-2', alea(),  alea(),  alea(),  alea()]
        ]
      });

      chartDonut.load({
        columns : [
          ['Q',  alea()],
          ['Q-1',  alea()],
        ]
      });

      chart.load({
        columns : [
          ['Q',  alea(),  alea(),  alea(),  alea()],
          ['Q-1',  alea(),  alea(),  alea(),  alea()],
          ['Q-3',  alea(),  alea(),  alea(),  alea()],
        ]
      });
    };
  }
