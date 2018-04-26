// selects the img tag to be manipulated in the zoom pane

const imagePane = document.getElementById('imagePane');

// load images here to be paired with text in the scroller

const imageArray = [
    {
        src: "assets/graphs/Scatterplot_SnowWhite.png",
        zoom: "assets/graphs/Scatterplot_SnowWhite.png",
        alt: "Scatterplot of Snow White"
    },
    {
        src: "assets/graphs/Scatterplot_BlairWitchProject.png",
        zoom: "assets/graphs/Scatterplot_BlairWitchProject.png",
        alt: "Scatterplot of Blair Witch Project"
    },
    {
        src: "assets/graphs/Scatterplot_HarryPotter.png",
        zoom: "assets/graphs/Scatterplot_HarryPotter.png",
        alt: "Scatterplot of Harry Potter"
    }
]

export { imagePane, imageArray };