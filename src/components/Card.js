const Card = ({ title, imgurl, }) => {
    const amenities = ["Wooden house", "Beach facing view", "Local food"];
    return (
        <div className="village-card">
            <h2 className="card-heading">Villagr Abcd</h2>
            <img src="https://million-wallpapers.com/wallpapers/1/96/17951126031723536385/view-of-the-village-from-afar-at-the-entrance.jpg" alt="img here" className="card-img" />
            {/* amenities  */}
            <ul>
                {
                    amenities.map((item) => {
                        return (
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Card