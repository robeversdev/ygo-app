
const titleButtonClicked = () => {
    console.log("Home Button Clicked");
}

export const HeaderTitle = () => {
    return (
        <a className="navbar-brand" href="#" onClick={titleButtonClicked}>YGO App</a>
    )
}