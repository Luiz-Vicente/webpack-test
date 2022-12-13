// import CSS
import './fonts.css';

// import jQuery
import $ from 'jquery';

const body = $('body');

const p = $('<p></p>').text('Texto muito louco').css('color','red');

body.append(p)