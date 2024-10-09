import style from './Card.module.css'


export function Card({image,name,price}){
    return(
        <div className={style.item}>
        <img src={image} alt="" />
        <p >{name}</p>
        <div className={style.item_q}>
            <p>{price} ₽</p>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )
}