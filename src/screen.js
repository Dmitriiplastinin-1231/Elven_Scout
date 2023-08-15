import { ImageLoader } from './image-loader';

export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext('2d');
        this.isImageLoader = false;
        this.images = {};
    }

    loadImages(imageFiles) {
        const loader = new ImageLoader(imageFiles);
        loader.load()
            .then(names => {
                this.images = Object.assign(this.images, loader.images);
                this.isImageLoader = true;
            })
    }

    createCanvas(width, height) {

        let element = document.getElementById('game');
        let canvas = element || document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.setAttribute('id', 'game');
        document.body.appendChild(canvas);

        return canvas;
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    print(x, y, text) {
        this.context.fillStyle = "#FFFFFF";
        this.context.font = "22px Georgia";
        this.context.fillText(text, x, y);
    }

    drawImage(x, y, imageName) {
        this.context.drawImage(this.images[imageName], x, y);
    }

    drawSprite(sprite) {
        console.log(sprite)
        this.context.drawImage(this.images[sprite.imageName],
            sprite.sourceX, sprite.sourceY, sprite.width,
            sprite.height, sprite.x, sprite.y,
            sprite.width, sprite.height
        );
    }
}