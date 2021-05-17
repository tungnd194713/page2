function Header(props) {
    return (
        <div id="header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/icon-7-ways.png'} className="logo_image" alt='something' />
            </div>
            <div className="pro_name">
                <h2>Covid-19</h2>
                <h2 className="management">Manager</h2>
                <h2>App</h2>
            </div>
            <div className="header_image_container" />
        </div>
    )
}
export default Header