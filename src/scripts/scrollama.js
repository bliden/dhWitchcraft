import scrollama from 'scrollama';
import { driftPanel } from './driftZoom';
import { imagePane, imageArray } from './imagePane';

const container = document.querySelector('#scroll');
const graphic = document.querySelector('.scroll__graphic');
const chart = document.querySelector('.chart');
const text = document.querySelector('.scroll__text');
const step = document.querySelectorAll('.step');

const scroller = scrollama();

function handleResize() {
    // 1. update height of step elems for room between steps

    const stepHeight = Math.floor(window.innerHeight * 0.75);
    step.forEach(function(singleStep){
        singleStep.style.height = stepHeight + 'px';
    });

    // 2. update height of graphic elem

    graphic.style.height = window.innerHeight + 'px';

    // 3. update width of chart by subrtacting from text width
    console.dir(text);
    const textWidth = text.offsetWidth;
    console.dir(document.body);
    const bodyWidth = document.body.offsetWidth;
    // const chartWidth = graphic.offsetWidth - textWidth - chartMargin;
    const chartWidth = bodyWidth - textWidth - (bodyWidth / 10);

    console.log(chartWidth, bodyWidth, textWidth );
    
    // make the height of 1/2 of viewport
    const chartHeight = Math.floor(window.innerHeight / 1.5);

    chart.style.width = chartWidth + 'px';
    chart.style.height = chartHeight + 'px';

    // zoom factor recalced on resize. smaller screen > larger zoom
    driftPanel.zoomFactor = 10 * ( 400 / bodyWidth );

    // 4. tell scrollama to update new elem dmensions
    scroller.resize();

}

function handleStepEnter(response) {
    // response = { element, direction, index }

    // fade in current step
    // step.forEach(function(singleStep, idx){
    //     if(idx === response.index){
    //         singleStep.classList.add('is-active');
    //     };
    // });

    step[response.index].classList.add('is-active');

    // change img displayed based on active step
    // imageArray.forEach(function(image, idx){
    //     if(idx === response.index){
    //         imagePane.src = image.src;
    //         imagePane.dataset.zoom = image.zoom;
    //         imagePane.alt = image.alt;
    //     };
    // });

    imagePane.src = imageArray[response.index].src;
    imagePane.dataset.zoom = imageArray[response.index].zoom;
    imagePane.alt = imageArray[response.index].alt;

    // update graphic based on step here
    // const stepData = Array.from(step).map((item)=> item.dataset.step);
    // console.log(stepData);

    // console.dir(response.element.dataset.step);
    // chart.querySelector('p').textContent = response.index + 1;
}

function handleContainerEnter(response) {
    // response = { direction }

    // sticky the graphic
    graphic.classList.add('is-fixed');
    graphic.classList.remove('is-bottom');
}

function handleContainerExit(response) {
    // response = { direction }

    // un-sticky the graphic, and pin to top/bottom of container
    graphic.classList.remove('is-fixed');
    if(response.direction === 'down'){
        graphic.classList.add('is-bottom');
    } else {
        graphic.classList.remove('is-bottom');
    }
}

function init(){
    // call a resize on load to update w/h/pos or elems
    handleResize();

    // set up scrollama instance
    // bind scrollama event handlers
    scroller
        .setup({
            container: '#scroll', // outermost element
            graphic: '.scroll__graphic', // the graphic
            text: '.scroll__text', // the step container
            step: '.scroll__text .step', // the step elems
            offset: 0.7, // set trigger @ 50% of screen
            // debug: true, // display the trigger for testing
        })
        .onStepEnter(handleStepEnter)
        .onContainerEnter(handleContainerEnter)
        .onContainerExit(handleContainerExit);

        // setup resize event
        window.addEventListener('resize', handleResize)
}

// document.addEventListener('DOMContentLoaded', init);
init();