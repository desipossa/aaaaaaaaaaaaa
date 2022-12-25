import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const PTF = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 },
    { id: 51 },
    { id: 52 },
    { id: 53 },
    { id: 54 },
    { id: 55 },
];




const List = ({ bookList }) => {
    const { cate } = useParams();
    // const gnrList = new Set(bookList.map(it => it.gnr.replace('/', '')));
    // console.log(gnrList)
    const cateList = bookList.filter((it) => cate === it.gnr.replaceAll('/', ''));
    // const [sortList, onSortList] = useState(cateList);
    // useEffect(() => {
    //     onSortList(cateList);
    // }, [cate]);




    // const rowPrice = [...sortList].sort((a, b) => a.price - b.price);
    // const hiPrice = [...sortList].sort((a, b) => b.price - a.price);
    // const newProduct = [...sortList].sort((a, b) => b.time - a.time);
    // const inkki = [...sortList].sort((a, b) => b.name.length - a.name.length);

    // const newSort = (it) => {
    //     onSortList(it);
    // };

    return (
        <section className="shopList pn">
            <div className="category">홈 : {cate}</div>
            <h2>{cate}</h2>
            <ul className="list">
                <li>total product : {cateList.length}</li>
                <li className="line">line</li>
                <li>
                    {/* <ul className="option">
                        <li onClick={() => newSort(rowPrice)}>낮은가격</li>
                        <li onClick={() => newSort(hiPrice)}>높은가격</li>
                        <li onClick={() => newSort(newProduct)}>신상품</li>
                        <li onClick={() => newSort(inkki)}>인기상품</li>
                    </ul> */}
                </li>

                {/* <li><Link to='/'><i className="xi-home-o"></i></Link></li> */}
            </ul>
            <div className="inner">
                {cateList.map((it, idx) => {
                    return (
                        <figure>
                            <Link to={"/Item/" + it.no}>
                                <div className="box">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/main_best0" +
                                            (it.no + 1) +
                                            ".jpg"
                                        }
                                        alt=""
                                    />
                                </div>

                                <div className="name">{it.ebk_nm}</div>
                                <div className="des">{it.cn_intro.substring(0, 100)} ...</div>
                                <div className="price">
                                    <span>{it.gnr.toLocaleString()}</span>
                                </div>
                            </Link>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

export default List;
