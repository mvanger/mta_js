var n_line = ['Times Square',
          '34th',
          '28th and Broadway',
          '23rd and Broadway',
          'Union Square',
          '8th'];
var l_line = ['8th Ave',
          '6th Ave',
          'Union Square',
          '3rd Ave',
          '1st Ave'];
var six_line = ['Grand Central',
            '33rd',
            '28th and Park',
            '23rd and Park',
            'Union Square',
            'Astor Place'];

var mta = {
  n: n_line,
  l: l_line,
  six: six_line
};

var first_stop = '34th';
var last_stop = '33rd';
var on_line = 'n';
var off_line = 'six';

if (on_line == off_line) {
  var index_one = mta[on_line].indexOf(first_stop);
  var index_two = mta[off_line].indexOf(last_stop);
  var diff = Math.abs((index_one - index_two));
  console.log(diff);
} else {
  var entrance_index = mta[on_line].indexOf(first_stop);
  var union_first_line_index = mta[on_line].indexOf('Union Square');
  var first_leg_length = Math.abs((entrance_index - union_first_line_index));

  var exit_index = mta[off_line].indexOf(last_stop);
  var union_second_line_index = mta[off_line].indexOf('Union Square');
  var second_leg_length = Math.abs((exit_index - union_second_line_index));

  var diff = (first_leg_length + second_leg_length);

  console.log(diff);
}