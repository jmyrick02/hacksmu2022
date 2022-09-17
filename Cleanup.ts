export class Cleanup {
    title: string;
    subtitle: string;
    location: string;
    start: Date;
    end: Date;
    organizer: string;
    attendees: Array<string>;
    pictures: Array<string>;
    interested: Array<string>;

    constructor(title: string, subtitle: string, location: string, start: Date, end: Date, pictures: Array<string>) {
        this.title = title;
        this.subtitle = subtitle;
        this.location = location;
        this.start = start;
        this.end = end;
        this.organizer = 'John Doe';
        this.attendees = [];
        this.pictures = pictures;
        this.interested = [];
    }
}