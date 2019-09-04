import React from 'react';

const VegetableFruit = () => {
    return (
        <div className="container-fluid p-0">
            <div className="container-fluid bg-white px-0">
                <div className="container position-relative">
                    <div className="row py-5 p-md-0  ep-col">
                        <div className="col-md-6 col-lg-7 d-flex flex-column justify-content-center pr-md-5 pr-lg-5">
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
                        <div className="col-md-6 col-lg-5">
                            <img src="../../../../static/images/home-eggplant.png" alt=""/>
                        </div>
                    </div>
                    <div className="row px-0 py-5">
                        <div className="col-lg-5 col-md-6 mobile-flex-center">
                            <img src="../../../../static/images/home-apple.png" alt=""/>
                        </div>
                        <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center col-nar">
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

            <style jsx>{`
                img {
                    width:100%;
                }
                
                .col-nar {
                    padding-left: 5rem;
                }
                
                .ep-col {
                    margin-top -2rem;
                }
                
                @media (max-width: 991px) {
                    .col-nar {
                        padding: 1rem;
                    }
                    
                    .ep-col {
                        margin-top 0;
                    }
                }
                
                @media (max-width: 767px) {                    
                    .ep-col {
                        margin-top 0;
                        flex-direction: column-reverse
                    }
                }
            `}</style>
        </div>
    );
};

export default VegetableFruit;
