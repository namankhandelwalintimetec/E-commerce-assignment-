import { useState } from "react";
import { storage } from "../../Services/Firebase/Firebaseconfiguration";
import { Item } from "./AddProductStyle";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productRating, setProductRating] = useState(0);
  const [productCate, setProductcate] = useState("");
  const [productDescription, setproductDescription] = useState("");

  const [productImg, setProductImg] = useState("");
  const [error, setError] = useState("");

  // const types = ["image/png", "image/jpeg"]; // image types

  // const productImgHandler = (e) => {
  //   let selectedFile = e.target.files[0];
  //   if (selectedFile && types.includes(selectedFile.type)) {
  //     setProductImg(selectedFile);
  //     setError("");
  //   } else {
  //     setProductImg(null);
  //     setError("Please select a valid image type (jpg or png)");
  //   }
  // };

  const addProduct = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${productImg}`);
    try {
      await uploadBytes(imageRef, productImg);
      const url = await getDownloadURL(imageRef);
      console.log(url);
      const user = await addDoc(collection(db, "products"), {
        Name: productName,
        cate: productCate,
        desc: productDescription,
        image: url,
        price: productPrice,
        rating: productRating,
      });
      console.log("hii"+user);
      setProductName("");
      setProductPrice(0);
      setProductImg("");
      setError("");
    } catch (err) {
      setError(err.message);
      console.log("error occure");
    }
  };

  return (
    <Item>
      <div>
        <br />
        <h2>ADD PRODUCTS</h2>
        <div className="border"></div>
        <form autoComplete="off" onSubmit={addProduct}>
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            required
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />

          <label htmlFor="product-price">Product Price</label>
          <input
            type="number"
            required
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <label htmlFor="product-price">Product Rating</label>
          <input
            type="number"
            required
            onChange={(e) => setProductRating(e.target.value)}
            value={productRating}
          />
          <label htmlFor="product-price">cate</label>
          <input
            type="string"
            required
            onChange={(e) => setProductcate(e.target.value)}
            value={productCate}
          />
          <label htmlFor="product-price">Description</label>
          <input
            type="string"
            required
            onChange={(e) => setproductDescription(e.target.value)}
            value={productDescription}
          />

          <label htmlFor="product-img">Product Image</label>
          <input
            type="file"
            id="file"
            required
            onChange={(event) => {
              setProductImg(event.target.files[0]);
            }}
          />
          <br />
          <button type="submit">ADD</button>
        </form>
        {error && <span className="error-msg">{error}</span>}
      </div>
    </Item>
  );
};
