/*
 * Analytics Charts
 */


//Define variable condition at views
var age_chart_cont          = has_age_chart    ? document.getElementById('age-chart').getContext('2d') : null;
var gender_chart_cont       = has_gender_chart ? document.getElementById('gender-chart').getContext('2d') : null;
var hour_today_chart_cont   = has_hour_today_chart ? document.getElementById('hour-today-chart').getContext('2d') : null;
var hour_week_chart_cont    = has_hour_week_chart ? document.getElementById('hour-week-chart').getContext('2d') : null;
var content_chart_cont      = has_content_chart ? document.getElementById('content-chart').getContext('2d') : null;


//Define gender_chart_labels and gender_chart_data at views
var gender_chart = has_gender_chart ? new Chart(gender_chart_cont, {

    type: 'horizontalBar',

    data: {
        labels: gender_chart_labels,
        datasets: [{
            backgroundColor: [
                'rgb(85,143,233)',
                'rgb(213,113,220)',
            ],
            borderColor: 'rgb(27,132,237)',
            data: gender_chart_data,
        }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {display: false},
      scales: {
        yAxes: [
          {gridLines: {display:false}}
        ],
        xAxes: [{
            display: false,
            ticks: { beginAtZero:true },
          }]
      }
    }
}) : null;

var age_chart = has_age_chart ? new Chart(age_chart_cont, {

    type: 'bar',

    data: {
        labels: age_chart_labels,
        datasets: [{
            backgroundColor: 'rgb(27,132,237)',
            borderColor: 'rgb(27,132,237)',
            data: age_chart_data
        }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {display: false},
      scales: {

        xAxes: [
          {gridLines: {display:false}}
        ],
        yAxes: [{
            display: false
          }]

      }
    }
}) : null;


var hour_today_chart = has_hour_today_chart ? new Chart(hour_today_chart_cont, {

    type: 'bar',
    height: 200,

    data: {
        labels: hour_today_chart_labels,
        datasets: [{
            backgroundColor: 'rgb(27,132,237)',
            borderColor: 'rgb(27,132,237)',
            data: hour_today_chart_data,
        }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {display: false},
      scales: {

        xAxes: [
          {gridLines: {display:false}}
        ],
        yAxes: [{
            display: false
          }]

      }
    }
}) : null;

var hour_week_chart = has_hour_week_chart ? new Chart(hour_week_chart_cont, {

    type: 'bar',
    height: 200,

    data: {
        labels: hour_week_chart_labels,
        datasets: [{
            backgroundColor: 'rgb(27,132,237)',
            borderColor: 'rgb(27,132,237)',
            data: hour_week_chart_data,
        }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {display: false},
      scales: {

        xAxes: [
          {gridLines: {display:false}}
        ],
        yAxes: [{
            display: false
          }]

      }
    }
}) : null;

var content_chart = has_content_chart ? new Chart(content_chart_cont,{
    type: 'pie',
    data: {
        datasets: [{
            data: content_chart_data,
            backgroundColor: [
                'rgb(21,31,117)',
                'rgb(86,147,214)',
                'rgb(48,94,195)',
                'rgb(20,19,52)',
                'rgb(201,222,238)'
            ],
            label: 'Dataset'
        }],
        labels: content_chart_labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
            labels: {
              boxWidth: 10,
              fontSize: 12
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}) : null;


// * Display selected option at Dropdown and AJAX call

$(function(){
   var $analytics_dropdowns = $(".is-analytics-section .content .dropdown-menu");
   var $trigger;
   var $current_dropdown;
   var $display_data;
   var spinner = '<div class="w-100 h-100 total-center"><i class="fas fa-spinner fa-pulse fa-sm"></i></div>';

   $analytics_dropdowns.on('click', '.dropdown-item', function(event){

    event.preventDefault();

    $trigger           = $(this);
    $current_dropdown  = $trigger.parents('.js-dropdown-parent');
    $display_data      = $($trigger.data('display-id'));



    //Show selected option at dropdown
    $current_dropdown.find('.js-change-text').text($trigger.text());
    //Spinner
    $display_data.height($display_data.height()).html(spinner);

    $display_data.text($trigger.data('href'));

    if($display_data.hasClass('js-counter')) {//Show numbers with animation
      displayNumberAsCounter($display_data);
    };

    //AJAX call
    // $display_data.load($trigger.data('href'), function() {
    //   if($display_data.hasClass('js-counter')) {//Show numbers with animation
    //     displayNumberAsCounter($display_data);
    //   }
    // });

  });

});
