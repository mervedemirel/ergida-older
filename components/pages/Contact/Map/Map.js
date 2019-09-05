import React from 'react';
import GMap from './GMap/GMap';
import {withTranslation} from "../../../../i18n";

const Map = ({t}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="MapCard">
                        <h4 className="er-color-dark-green">{t('merkez')}</h4>
                        <GMap />
                        <p className="mt-3">
                            <b>{t('adres')}: </b> Bağlık Mahallesi Gödene Caddesi No: 189 <br/> Er Gıda Paketleme Tesisi Kumluca / Antalya
                        </p>
                        <div className="row">
                            <div className="col-sm-6">
                                <b>{t('telefon')}</b> <br/>
                                0 242 887 02 22 <br/>
                                0 242 887 02 22 <br/>
                                0 242 887 02 22
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <b>Fax</b> <br/>
                                    0 242 887 02 22
                                </div>
                                <div>
                                    <b>{t('mail')}</b> <br/>
                                    info@ergida.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="MapCard">
                        <h4 className="er-color-dark-green">{t('sube')}</h4>
                        <GMap />
                        <p className="mt-3">
                            <b>{t('adres')}: </b> Bağlık Mahallesi Gödene Caddesi No: 189 <br/> Er Gıda Paketleme Tesisi Kumluca / Antalya
                        </p>
                        <div className="row">
                            <div className="col-sm-6">
                                <b>{t('telefon')}</b> <br/>
                                0 242 887 02 22 <br/>
                                0 242 887 02 22 <br/>
                                0 242 887 02 22
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <b>Fax</b> <br/>
                                    0 242 887 02 22
                                </div>
                                <div>
                                    <b>{t('mail')}</b> <br/>
                                    info@ergida.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .MapCard {
                    padding: 2rem;
                    border: 1px solid #888888;
                }
            `}</style>
        </div>
    )
};

export default withTranslation('contact')(Map);
