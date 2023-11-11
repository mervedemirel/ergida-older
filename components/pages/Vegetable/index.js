import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import VegContainer from "./VegContainer/VegContainer";
import { i18n } from "../../../i18n";


const VegetablePageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    });

    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="/images/sebze-hero.jpg"
                     mobImage="/images/sebze-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="/images/sebze-hero-en.jpg"
                     mobImage="/images/sebze-hero-mob-en.jpg" />
    }
    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="/images/sebze-hero.jpg"
                                        mobImage="/images/sebze-hero-mob.jpg" /> :
                <Hero bigImage="/images/sebze-hero-en.jpg"
                      mobImage="/images/sebze-hero-mob-en.jpg" />}
        
        {activeLng === 'tr' ? 
             <div className="text">
        <div>Sebze tüketimi sağlıklı bir beslenmenin olmazsa olmazıdır. Posa ve diğer antioksidan özelliğe sahip bileşikler ile folik asit, beta-karoten, E, C, B2 vitamini, kalsiyum, potasyum, demir, magnezyum yönünden zengindir. Ülkemiz iklim özellikleri ve verimli toprakları ile ihraç edilen sebze ürünlerinin yetişmesine uygun ortama sahiptir. Koordineli çalışmalar kapsamında yapılan ihracatımız hem ürün kalitesi hem de ürün çeşitliliğinin artması açısından her geçen yıl daha da gelişmektedir. Firmamız yılın on iki ayı hız kesmeden üretimine devam etmektedir. Sebze sektöründe hedeflerimizin gerçekleşmesi için ihracatta önceliğimiz sürdürülebilir kalitedir. </div></div> :
        <div className="text">
        <div>Vegetables are edible parts of plants which are important sources of many nutrients, including potassium, dietary fiber, folate (folic acid), vitamin A, and vitamin C. Vegetables are important part of healthy eating. They provide health benefits and maintenance of body. Turkey has a very high production potential of vegetables. According to availability of diverse ecological conditions has resulted in growing high quality vegetables in Turkey. The growers in Mediterranean climate is more suitable for high quality vegetable. Our priority is sustainable quality in vegetable export market. We export carefully selected high quality vegetables to the world throughout the season. </div></div>}
        <VegContainer/>
        
        <style jsx>{`
      .text {
        position: absolute;
        top: 375px;
        left: 60px;
        padding: 30px;
        color: white;
        text-align : center;
        font-size : 14px;
      }
      a.text {
        text-transform: uppercase;
      }
    `}</style>
        </>
    );
};

export default VegetablePageIndex;
