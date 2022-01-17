class Rocket extends MovingObject {

    display() {
        (<Game>this.scene).rocketSprite?.render(this.gameManager.window.x + this.x, this.gameManager.window.y + this.y);

        if (this.p5.keyIsDown(this.p5.UP_ARROW)) {
            this.moveUp();
        } else if (this.p5.keyIsDown(this.p5.DOWN_ARROW)) {
            this.moveDown();
        }
    }
}