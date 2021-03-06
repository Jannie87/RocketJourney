/**
 * Interface for classes representing leaderboard data
 * @interface
 */
interface LeaderBoardData {
    name: string;
    score: number;
}

/** Class representing 'isShowingLeaderBoard' state */
class LeaderBoard {
    public leaderBoardArray: LeaderBoardData[];
    private textBlinkTimer: number;

    constructor() {
        this.leaderBoardArray = JSON.parse(localStorage.leaderboard || "[]");
        this.textBlinkTimer = 0;
    }

    public draw() {
        image(images.leaderBoard, (images.background[0].width / 20 - images.leaderBoard.width / 2), (images.background[0].height / 20 - images.leaderBoard.height / 2),);
        push()
        textSize(18);
        textAlign(CENTER);
        fill(255);
        text('LEADERBOARD', 400, 150)
        textSize(12);
        
        const nrOfScores = min(10, this.leaderBoardArray.length);
        
        for (let i = 0; i < nrOfScores; i++) {
            const y = 200 + 30 * i;
            textAlign(LEFT);
            text(i + 1, 250, y)
            text(this.leaderBoardArray[i].name, 300, y)
            textAlign(RIGHT);
            text(this.leaderBoardArray[i].score, 550, y)
        }

        this.textBlinkTimer += deltaTime;
        if (this.textBlinkTimer < 300) {
            fill(255); 
        } else {
            fill(150);
        }         
        textAlign(CENTER);
        textSize(14)
        text('PRESS ESC TO RESTART', 400, 550)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
        pop();
    }
}