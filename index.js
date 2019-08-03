import React, {Component} from 'react'
import {render} from 'react-dom'
import Counter from './Day3/counter_ex2.js'
import {Greetf, Greetc} from './Day3/excercise1.js'
import IncreDecreEx from './Day4/Incre-Decre_Ex.js'

render(<div><h1><u>Day 3 Exercises</u></h1>
<h2><i>Excercise 1: -</i></h2>
      <Greetf name='Vijay' />
      <Greetc name='Babu' />
      <h2><i>Excercise 2: -</i></h2>
      <Counter start='0' />
      <hr />
      <h1><u>Day 4 Exercises</u></h1>
      <h2><i>Increment & Decrement functions: -</i></h2>
      <IncreDecreEx type='0'/>
</div>, document.getElementById('root'));