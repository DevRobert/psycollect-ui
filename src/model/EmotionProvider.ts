import Emotion from "./Emotion";

export default class EmotionProvider {
    public getEmotions(): Emotion[] {
        return [
            new Emotion("Happy"),
            new Emotion("Sad"),
            new Emotion("Motivated"),
            new Emotion("Powerless"),
            new Emotion("Successful"),
            new Emotion("Failed")
        ]
    }
}
