/*
 * Component: Elder
 * Desc     : an carer's photo and info
 * Params   :
 */
var elders = require('json!./../data/users.json');
import ImageGallery from 'react-image-gallery';

export default class Elder extends React.Component {

    constructor() {
        super();
        this.state = {

            showIndex: false,
            slideOnThumbnailHover: false,
            showBullets: true,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: true,
            showGalleryFullscreenButton: false,
            showPlayButton: false,
            showGalleryPlayButton: true,
            showNav: true,
            slideInterval: 2000
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }

    _onImageClick() {
        currentNum = this._imageGallery.getCurrentIndex();
        this.props.goHome();
        this.props.changeColor();
        console.debug('clicked on image', 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {

        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _getStaticImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
            images.push({
                original: 'images/elder'+i+'.jpg',
                thumbnail:'images/elder'+i+'.jpg',
                description: elders[i].REALNAME,
            });
        }

        return images;
    }


    render() {
        const images = this._getStaticImages();

        return (
            <div><h3 className="ui center aligned header">Switch Elders</h3>


            <div className="ui segment">
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    items={images}
                    lazyLoad={false}
                    onClick={() => this._onImageClick()}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                    onPause={this._onPause.bind(this)}
                    onScreenChange={this._onScreenChange.bind(this)}
                    onPlay={this._onPlay.bind(this)}
                    infinite={this.state.infinite}
                    showBullets={this.state.showBullets}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showIndex={this.state.showIndex}
                    showNav={this.state.showNav}
                    slideInterval={parseInt(this.state.slideInterval)}
                    slideOnThumbnailHover={this.state.slideOnThumbnailHover}
                    showThumbnails={this.state.showThumbnails}
                />
            </div>
                <h1> &nbsp;</h1>
                <h1> &nbsp;</h1>

            </div>


        );
    }
}
