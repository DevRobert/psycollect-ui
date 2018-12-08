import Activity from "./Activity";

export default class ActivityProvider {
    public getActivities(): Activity[] {
        return [
            new Activity("Tennis"),
            new Activity("Badminton"),
            new Activity("Cycling"),
            new Activity("Swimming"),
            new Activity("Friends"),
            new Activity("Work"),
            new Activity("Alcohol")
        ]
    }
}
