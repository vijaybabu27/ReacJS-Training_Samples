import React, {Component} from 'react'
import {render} from 'react-dom'
import './style.css';
import Counter from './Day3/counter_ex2.js'
import {Greetf, Greetc} from './Day3/excercise1.js'
import IncreDecreEx from './Day4/Incre-Decre_Ex.js'
import IncreDecreEx2 from './Day4/Incre-Decre_Ex2.js'
import ParentChildEx from './Day5/ParentChildEx.js'
import FormComponentEx from './Day6/FormComponentEx.js'
import RouteEx from './Day8/RouteEx.js'

render(<div><h1><u>Day 3 Exercises</u></h1>
<h2><i>Excercise 1: -</i></h2>
      <Greetf name='Vijay' />
      <Greetc name='Babu' />
      <h2><i>Excercise 2: -</i></h2>
      <Counter start='0' />
      <hr />
      <h1><u>Day 4 Exercises</u></h1>
      <h2><i>Increment & Decrement functions: -</i></h2>
      <table><tbody>
      <tr><td><IncreDecreEx type='0'/> </td>
      <td className="increWidth" />
      <td><IncreDecreEx2 type='0'/></td></tr></tbody>
      </table>
      <hr />
      <h1><u>Day 5 Exercises</u></h1>
      <h2><i>Parent & Child example: -</i></h2>
      <ParentChildEx />
      <hr />
      <h1><u>Day 6 Exercises</u></h1>
      <h2><i>Form Component example: -</i></h2>
      <FormComponentEx />
      <hr />
      <h1><u>Day 8 Exercises</u></h1>
      <h2><i>Route example: -</i></h2>
      <RouteEx />
</div>, document.getElementById('root'));