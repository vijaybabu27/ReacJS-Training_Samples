import React, {Component} from 'react'
import {render} from 'react-dom'
import Counter from './Day3/counter_ex2.js'
import {Greetf, Greetc} from './Day3/excercise1.js'

render(<div><h1><u>Excercise 1: -</u></h1>
      <Greetf name='Vijay' />
      <Greetc name='Babu' />
      <hr />
      <h1><u>Excercise 2: -</u></h1>
      <Counter start='0' />
</div>, document.getElementById('root'));