// selects the img tag to be manipulated in the zoom pane

// const imagePane = document.getElementById('imagePane');
const imageSet = Array.from(document.getElementsByClassName('driftImg'));
const chart = document.querySelector('.chart');

// load images here to be paired with text in the scroller

// const dir = "assets/graphs/";

// const imageArray = [
//     {
//         src: dir + "Scatterplot_SnowWhite.png",
//         zoom: dir + "Scatterplot_SnowWhite.png",
//         alt: "Scatterplot of Snow White"
//     },
//     {
//         src: dir + "Scatterplot_BlairWitchProject.png",
//         zoom: dir + "Scatterplot_BlairWitchProject.png",
//         alt: "Scatterplot of Blair Witch Project"
//     },
//     {
//         src: dir + "Scatterplot_HarryPotter.png",
//         zoom: dir + "Scatterplot_HarryPotter.png",
//         alt: "Scatterplot of Harry Potter"
//     },
//     {
//         src: dir + "Scatterplot_Halloweentown.png",
//         zoom: dir + "Scatterplot_Halloweentown.png",
//         alt: "Scatterplot of Halloweentown",
//     },
//     {
//         src: dir + "Scatterplot_TheCraft.png",
//         zoom: dir + "Scatterplot_TheCraft.png",
//         alt: "Scatterplot of Witches of Eastwick",
//     },
//     {
//         src: dir + "Scatterplot_WitchesOfEastwick.png",
//         zoom: dir + "Scatterplot_WitchesOfEastwick.png",
//         alt: "Scatterplot of Witches of Eastwick",
//     },
//     // {
//     //     src: "",
//     //     zoom: "",
//     //     alt: "",
//     // },
// ]

// export { imagePane, imageArray };
export { imageSet, chart };