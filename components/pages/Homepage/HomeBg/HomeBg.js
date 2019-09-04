import React from 'react';
import {FaCogs, FaLuggageCart, FaTruck, FaUtensils, FaTruckLoading, FaNetworkWired} from 'react-icons/fa';

import {withTranslation} from "../../../../i18n";

class HomeBg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconStyle: {
                fontSize: '4rem',
                color: 'white'
            }
        }
    }

    render() {
        const iconMap = {
            "cogs": <FaCogs style={this.state.iconStyle}/>,
            "luggage": <FaLuggageCart style={this.state.iconStyle}/>,
            "truck": <FaTruck style={this.state.iconStyle}/>,
            "utensils": <FaUtensils style={this.state.iconStyle}/>,
            "truckLoading": <FaTruckLoading style={this.state.iconStyle}/>,
            "network": <FaNetworkWired style={this.state.iconStyle}/>
        };
        return (
            <div className="container-fluid p-0 position-relative HomeBg">
                <div className="container-fluid HomeBg-top px-0 py-5">
                    <div className="container p-0">
                        <div className="row p-0">
                            <div className="col-7 pr-5 pt-5">
                                <p className="text-right font-weight-bold HomeBg-ergida">ERGIDA</p>
                                <h2 className="text-right HomeBg-h2">Hakkında</h2>
                                <br/>
                                <p className="text-right">
                                    Isıl işlem sektöründeki indüksiyon tesisi ihtiyacını karşılamak amacıyla 2009 yılı
                                    ikinci yarısında İzmit'te kuruldı. Faaliyete geçtiği günden beri hızla büyüyen Katre
                                    İndüksiyon, geçen sürede gelişen tezgah parkı, iş hacmi ve hizmet kalitesiyle İzmit
                                    ve
                                    çevre illerdeki sanaayicinin indüksiyon ihtiyaçlarını tam anlamıyla karşılayabilen
                                    güçlü
                                    bir indüksiyonla ısıl işlem firması haline geldi.
                                </p>
                                <br/>
                                <button type="button" className="btn btn-success px-4 rounded button-green">DETAYLI
                                    BİLGİ
                                </button>
                            </div>
                            <div className="col-5">
                                <img src="../../../../static/images/avokado-toplu.png" className="w-100" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid HomeBg-mid px-0 py-5">
                    <div className="container">
                        <div className="row p-0">
                            {this.props.t('icons', {returnObjects: true}).map((icon, i) => {
                                return (
                                    <div
                                        className="col-4 d-flex flex-column justify-content-center align-items-center py-5"
                                        key={i}>
                                        {iconMap[icon.icon]}
                                        <p className="text-center icon-text">{icon.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid HomeBg-top px-0 py-5">
                    <div className="container py-5">
                        <div className="row p-0">
                            <div className="col-5">
                                <img src="../../../../static/images/home-narenciye.png" alt=""/>
                            </div>
                            <div className="col-7 d-flex flex-column justify-content-center col-nar">
                                <h2 className="HomeBg-h2 font-weight-bold er-color-orange">NARENCİYE</h2>
                                <p>
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
                .HomeBg {
                    background: url('../../../../static/images/home-bg.jpg');
                    background-size: cover;
                }
            
                .HomeBg-top {
                    background: rgba(255, 255, 255, .5);
                }
                
                .HomeBg-ergida {
                    font-size:1.5rem;
                    letter-spacing: 0.1rem;
                    margin-bottom: -12px;
                }
                
                .HomeBg-h2 {
                    font-size: 2.2rem;
                    letter-spacing: 0.1rem;
                    font-weight: 300;
                }
                
                .HomeBg-mid {
                    background: rgba(0, 0, 0, .6);
                }               
                
                .icon-text {
                    color: white;
                    font-size: 1.5rem;
                }
                
                .col-nar {
                    padding-left: 5rem;
                }
            `}</style>
            </div>
        );
    }
}

export default withTranslation('homepage')(HomeBg);
