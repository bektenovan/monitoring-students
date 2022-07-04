import React, { useReducer } from "react";

export const favoriteContext = React.createContext();

const INIT_STATE = {
  favorite: null,
  countFav: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITE":
        return {
            ...state,
            favorite: action.payload,
            countFav: action.payload.products.length,
          };
    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      countFav: 1,
      subPrice: product.price,
    };
    let isProductInFavorite = favorite.products.some(
      item => item.item.id === product.id
    );
    // console.log(isProductInFavorite);
    if (isProductInFavorite) {
      favorite.products = favorite.products.filter(item => item.item.id !== product.id);
    } else {
      favorite.products.push(newProduct);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    // console.log(favorite);
    // console.log(product);
    getFavorite();
  }


  function checkProductInFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInFavorite = favorite.products.some(
      item => item.item.id === product.id
    );
    return isProductInFavorite;
  }
  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    favorite.totalPrice = favorite.products.reduce((prev, curr) => {
        return prev + curr.subPrice;
      }, 0);
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }
  // console.log(state.count);
  function changeProductCount(countFav, id) {
    if (countFav <= 0) {
      countFav = 1;
    }
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.map(item => {
      if (item.item.id === id) {
        item.countFav = countFav;
        item.subPrice = item.countFav * item.item.price;
      }
      return item;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.filter(item => item.item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  return (
    <favoriteContext.Provider
    value={{
      favorite: state.favorite,
      countFav: state.countFav,
      addProductToFavorite,
      checkProductInFavorite,
      getFavorite,
      changeProductCount,
      deleteFromFavorite,
    }}>
      {children}
    </favoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
