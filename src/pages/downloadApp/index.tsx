import './index.scss';

const DownloadApp = () => {
    return (
        <div className="background_page_download">
            <div className="download_page_content">
                <div className="background_content">
                    <div className="content_container">
                        <div className="content">
                            <h2>Хватит тратить свое время в очередях</h2>
                            <p>Приложение скоро будет доступно для бета тестирования в AppStore и Google Play</p>
                            <div className="download_market_buttons">
                                <div>
                                    <a href="/">
                                        <img src={require('./img/icons/app-store.svg').default} alt="" />
                                        <div>
                                            <p>Доступно в</p>
                                            <h3>App Store</h3>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <img src={require('./img/icons/GooglePlay.svg').default} alt="" />
                                        <div>
                                            <p>Доступно в</p>
                                            <h3>Play market</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="download_images">
                        <img className='small_phone_img' src={require('./img/mockup31.png')} alt="" />
                        <img className='big_phone_img' src={require('./img/mockup41.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;