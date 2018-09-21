import './sass/styles.scss';
import 'bootstrap';
import $ from 'jquery';

$(document).ready(function(){
  $("#toggle-nav").click(function(){
    $(".nav-container").slideToggle();
  });
});
