import React from 'react';
import {FaChevronRight} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid py-3 Footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 d-flex align-items-center">
                        <div>
                            <p className="m-0 mt-3">
                                <b>Adres:</b> Sanayi Mah. İzmit Sanayi Sitesi <br/> 9. Cadde 404. Blok No:
                                1 <br/> İzmit/Kocaeli
                            </p>
                            <p className="p-0 m-0"><b>Tel:</b> 0 262 335 56 06</p>
                            <p className="p-0 m-0"><b>Tel:</b> 0 262 335 56 26</p>
                            <p><b>Mail:</b> info@ergida.com</p>
                            <p>Tüm hakları saklıdır.</p>
                        </div>
                        <div className="vl ml-2 mr-4"></div>
                        <div>
                            <p className="m-0 mt-3">
                                <b>Adres:</b> 75. Yıl Mah. Oto Sanayiciler Sitesi <br/> E Blok No:
                                11 <br/> Odunpazarı/Eskişehir
                            </p>
                            <p className="p-0 m-0"><b>Tel:</b> 0 222 246 06 17</p>
                            <p className="p-0 m-0"><b>Tel:</b> 0 222 246 06 18</p>
                            <p><b>Mail:</b> info@ergida.com</p>
                            <p className="invisible">Tüm hakları saklıdır.</p>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <div className="d-flex align-items-center" style={{height: "40%"}}>
                            <p className="p-0 m-0 w-75">E-BÜLTEN</p>
                            <div className="vl ml-2 mr-4"></div>
                            <p className="p-0 m-0">Hizmetlerimizden ve kampanyalardan haberdar olmak için e-bültenimize
                                kayıt olabilirsiniz.</p>
                        </div>
                        <div className="d-flex">
                            <input className="mr-2 form-control" placeholder="E-Posta Adresiniz"/>
                            <button color="primary" style={{background: "#e85d24", border: 'none'}}
                                    className="btn btn-primary"><FaChevronRight/></button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .Footer {
                    background: #545454;
                    color: white;
                }
                
                .vl {
                    border-left: 1px solid white;
                    height: 80%;
                }
            `}</style>
        </div>
    )
};

export default Footer;
