import React from 'react';

const VegetableFruit = () => {
    return (
        <div className="container-fluid p-0">
            <div className="container-fluid bg-white">
                <div className="container position-relative">
                    <div className="row p-0" style={{marginTop: '-2rem'}}>
                        <div className="col-7 d-flex flex-column justify-content-center pr-5">
                            <h2 className="font-weight-bold er-color-orange text-right pb-2">SEBZE</h2>
                            <p className="text-right pb-2">
                                Isıl işlem sektöründeki indüksiyon tesisi ihtiyacını karşılama amacıyla 2009 yılı
                                ikinci yarısında İzmit'te kuruldu. Faaliyete geçtiği günden beri hızla büyüyen Katre
                                İndüksiyon, geçen sürede gelişen tezgah parkı, iş hacmi ve hizmet kalitesiyle İzmit
                                ve çevre illerdeki sanayicinin indüksiyon ihtiyaçlarını tam anlamıyla karşılayabilen
                                güçlü bir indüksiyonla ısıl işlem firması haline geldi.
                            </p>
                            <button type="button"
                                    className="btn btn-success px-4 rounded button-green align-self-end">DETAYLI
                                BİLGİ
                            </button>
                        </div>
                        <div className="col-5">
                            <img src="../../../../static/images/home-eggplant.png" alt=""/>
                        </div>
                    </div>
                    <div className="row px-0 py-5">
                        <div className="col-5">
                            <img src="../../../../static/images/home-apple.png" alt=""/>
                        </div>
                        <div className="col-7 d-flex flex-column justify-content-center" style={{paddingLeft: '5rem'}}>
                            <h2 className="font-weight-bold er-color-orange pb-2">MEYVE</h2>
                            <p className="pb-2">
                                Isıl işlem sektöründeki indüksiyon tesisi ihtiyacını karşılama amacıyla 2009 yılı
                                ikinci yarısında İzmit'te kuruldu. Faaliyete geçtiği günden beri hızla büyüyen Katre
                                İndüksiyon, geçen sürede gelişen tezgah parkı, iş hacmi ve hizmet kalitesiyle İzmit
                                ve çevre illerdeki sanayicinin indüksiyon ihtiyaçlarını tam anlamıyla karşılayabilen
                                güçlü bir indüksiyonla ısıl işlem firması haline geldi.
                            </p>
                            <button type="button"
                                    className="btn btn-success px-4 rounded button-green align-self-baseline">DETAYLI
                                BİLGİ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VegetableFruit;
