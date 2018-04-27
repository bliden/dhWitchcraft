import Drift from 'drift-zoom';
import { imageSet, chart } from './imagePane';

const text = document.querySelector('.scroll__text');

// fns below blur & transparency the text & img on zoom

function onShow(){
    // chart.style.opacity = .5;
	imageSet.forEach(function(image){
		image.classList.toggle('blurry');
	// text.classList.toggle('blurry');
	});
};

function onHide(){
    // chart.style.opacity = 1;
	// chart.classList.toggle('blurry');
	imageSet.forEach(function(image){
		image.classList.toggle('blurry');
	})
    // text.classList.toggle('blurry');
}

var options = {
	// Prefix for generated element class names (e.g. `my-ns` will
	// result in classes such as `my-ns-pane`. Default `drift-`
	// prefixed classes will always be added as well.
	namespace: null,
	// Whether the ZoomPane should show whitespace when near the edges.
	showWhitespaceAtEdges: false,
	// Whether the inline ZoomPane should stay inside
	// the bounds of its image.
	
	containInline: false,
	// containInline: true,
	
	// How much to offset the ZoomPane from the
	// interaction point when inline.
	inlineOffsetX: 0,
	inlineOffsetY: 0,
	// A DOM element to append the inline ZoomPane to.
	inlineContainer: document.body,
	// Which trigger attribute to pull the ZoomPane image source from.
	sourceAttribute: 'src',
	// How much to magnify the trigger by in the ZoomPane.
	// (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane image
	// if the trigger is displayed at 300 px wide)
	zoomFactor: 3,
	// A DOM element to append the non-inline ZoomPane to.
	// Required if `inlinePane !== true`.
	
	// paneContainer: document.querySelector('.scroll__graphic'),
	paneContainer: document.querySelector('.chart'),
	
	// When to switch to an inline ZoomPane. This can be a boolean or
	// an integer. If `true`, the ZoomPane will always be inline,
	// if `false`, it will switch to inline when `windowWidth <= inlinePane`

	// inlinePane: true,
	inlinePane: 375,

	// If `true`, touch events will trigger the zoom, like mouse events.
	handleTouch: true,
	// If present (and a function), this will be called
	// whenever the ZoomPane is shown.
	onShow: onShow,
	// If present (and a function), this will be called
	// whenever the ZoomPane is hidden.
	onHide: onHide,
	// Add base styles to the page. See the "Theming"
	// section of README.md for more information.
	injectBaseStyles: true,
	// An optional number that determines how long to wait before
	// showing the ZoomPane because of a `mouseenter` event.
	hoverDelay: 0,
	// An optional number that determines how long to wait before
	// showing the ZoomPane because of a `touchstart` event.
	// It's unlikely that you would want to use this option, since
	// "tap and hold" is much more intentional than a hover event.
	touchDelay: 0,
	// If true, a bounding box will show the area currently being previewed
	// during mouse hover
	hoverBoundingBox: false,
	// If true, a bounding box will show the area currently being previewed
	// during touch events
	touchBoundingBox: false,
};

// iterate over imageSet && set up driftZoom on all.

const driftSet = [];
for( let image of imageSet ){
	let drift = new Drift(image, options);
	driftSet.push(drift);
}

export { driftSet };