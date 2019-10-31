import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid py-3 Footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-9 d-flex align-items-center">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p className="m-0 mt-3">
                                    Bağlık Mahallesi, Gödene Caddesi, No: 189 <br />
                                    Er Gıda Paketleme Tesisi, Kumluca / Antalya
                            </p>
                                <p className="p-0 m-0"><b>Tel:</b> +90 242 887 02 22</p>
                                <p className="p-0 m-0"><b>Tel:</b> +90 543 887 00 22</p>
                                <p><b>Mail:</b> ergidatarim@hotmail.com</p>
                            </div>                          
                            <div className="col-12 col-sm-6 BorderSide">
                                <p className="m-0 mt-3">
                                    Karaçulha Mahallesi, Sarnıç Sokak, Muğla Büyükşehir Belediyesi <br />
                                    Fethiye Toptancı Hali, M Blok No: 132, Fethiye/Muğla
                            </p>
                                <p className="p-0 m-0"><b>Tel:</b> +90 242 887 02 22</p>
                                <p className="p-0 m-0"><b>Tel:</b> +90 543 887 00 22</p>
                                <p><b>Mail:</b> ergidatarim@hotmail.com</p>
                            </div>,
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 d-flex align-items-end">
                        <p className="w-100 text-right">Tüm Hakları Saklıdır.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .Footer {
                    background: #545454;
                    color: white;
                }
            `}</style>
        </div>
    )
};

export default Footer;
