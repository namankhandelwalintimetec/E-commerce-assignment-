
const WishlistCard=()=>{

	return(
	<>
	<div className="product-card1">
                <div className="card-wishlist">
                  {/* <img src={Item.image} className="wish-image" /> */}
                  <div className="comment-div">
                    {/* <p className="align-rating">{Item.rating}⭐</p> */}
                    <div className="vertrical-line"></div>
                    <p>{1}K</p>
                  </div>
                  {/* <p>{Item.Name}</p> */}
                  <div className="wish-price">
                    {/* <p>Rs. {Item.rating} </p> */}
                    <p>1800</p>
                    <p>Red</p>
                  </div>
                  <div className="wish-border"></div>
                  <button className="wish-button">Move To Cart</button>
                </div>
            </div>
	</>
	)
}

export default WishlistCard;