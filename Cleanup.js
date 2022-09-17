"use strict";
exports.__esModule = true;
exports.Cleanup = void 0;
var Cleanup = /** @class */ (function () {
    function Cleanup(title, subtitle, location, start, end, pictures) {
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
    return Cleanup;
}());
exports.Cleanup = Cleanup;
