import 'intersection-observer';
import scrollama from 'scrollama';

const scroller = scrollama();

scroller
    .setup({
        step: '.step'
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

alert('hi');