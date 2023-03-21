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
  const [productImg, setProductImg] = useState('');
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
      const user = await addDoc(collection(db, "product"), {
        name: "john Do3",
        cate: "femal",
        imageUrl: url,
      });
      console.log(user);
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
      <div >
        <br />
        <h2>ADD PRODUCTS</h2>
        <hr />
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
            onChange={(e)=>setProductPrice(e.target.value)}
            value={productPrice}
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
          <button type="submit">
            ADD
          </button>
        </form>
        {error && <span className="error-msg">{error}</span>}
      </div>
    </Item>
  );
};
