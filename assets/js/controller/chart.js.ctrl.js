myApp.controller('chartDemoController',chartDemoController);

function chartDemoController ($scope){
  var alea = function  (){
    return (Math.random() * 100).toFixed(2) ;
  };


  var  options = {
    responsive: true
  };

  function create_ContextCanvas( name_Context, type_Context){
    type_Context = type_Context || "2d" ;
    if( document.getElementById( name_Context ) ){
      return  document.getElementById( name_Context ).getContext(type_Context);
    }
    return  null ;
  }

  var data = function(){
    return {
      labels: ["Q1", "Q2", "Q3", "Q4" ],
      datasets: [
        {
          label: "Q",
          fillColor: "rgba(250,0,0,0.2)",
          strokeColor: "black",
          pointColor: "green",
          pointStrokeColor: "#fff",
          pointHighlightFill: "green",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [ alea(),  alea(),  alea(),  alea()]
        },
        {
          label: "Q-1",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [ alea(),  alea(),  alea(),  alea()]
        }
      ]
    };
  };

  var dataDonut = function(){
    return [
      {
        value: alea(),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Q1"
      },
      {
        value: alea(),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Q2"
      },
      {
        value: alea(),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Q3"
      },
      {
        value: alea(),
        color: "green",
        highlight: "#FFC870",
        label: "Q4"
      }
    ] ;
  };

  var dataBar =function(){
    return  {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Q",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [ alea(),  alea(),  alea(),  alea()]
        },
        {
          label: "Q-1",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [ alea(),  alea(),  alea(),  alea()]
        }
      ]};
    };

  var lineContext =function(){
      return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Q",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [ alea(),  alea(),  alea(),  alea()]
          },
          {
            label: "Q-1",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [ alea(),  alea(),  alea(),  alea()]
          }
        ]
      };
    } ;

  $scope.anime_Progress_Advances = function(){
      var a = new Chart(create_ContextCanvas("lineContext")).Line(lineContext(),options);
      var b = new Chart(create_ContextCanvas("barContexte")).Bar(dataBar());
      var c =  new Chart(create_ContextCanvas("DonutContexte")).Doughnut(dataDonut(),options);
      var d =  new Chart(create_ContextCanvas("radarContexte")).Radar(data(),options);
    };



    $scope.anime_Progress_Advances();
  }
