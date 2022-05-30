import { acceptHMRUpdate, defineStore } from 'pinia';

class TimePoint {
    year: number;
    month: number;

    // 0 month represents just the year
    constructor(year: number, month: number = 0) {
        if (month < 0 || month > 12) {
            throw new Error('Invalid month' + month);
        }
        this.year = year;
        this.month = month;
    }

    // is time before
    isBefore(tp: TimePoint): boolean {
        if (this.year < tp.year) {
            return true;
        } else if (this.year > tp.year) {
            return false;
        } else if (this.month === 0 || tp.month === 0) {
            // one of the points covers entire year
            return true;
        } else {
            return this.month <= tp.month;
        }
    }

    // is time after (inclusive)
    isAfter(tp: TimePoint): boolean {
        if (this.year > tp.year) {
            return true;
        } else if (this.year < tp.year) {
            return false;
        } else if (this.month === 0 || tp.month === 0) {
            // one of the points covers entire year
            return true;
        } else {
            return this.month >= tp.month;
        }
    }

    toText(): string {
        if (this.month === 0) {
            return this.year.toString();
        } else {
            const m = TimePoint.monthNames();
            return `${m[this.month - 1]} ${this.year.toString()}`;
        }
    }

    static monthNames(): Array<string> {
        // switch to keys that work with the lang framework?
        // have lang framework working here?
        return [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
    }
}

class TimeRange {
    start: TimePoint;
    end: TimePoint;

    constructor(start: TimePoint, end: TimePoint) {
        // TODO could have integrity check, but given the inclusivity the
        //      check would be almost same size as our worker functions
        this.start = start;
        this.end = end;
    }

    isIn(tp: TimePoint): boolean {
        return this.start.isBefore(tp) && this.end.isAfter(tp);
    }

    toText(): string {
        return `${this.start.toText()} - ${this.end.toText()}`;
    }

    static fromRaw(y1: number, m1: number, y2: number, m2: number): TimeRange {
        return new TimeRange(new TimePoint(y1, m1), new TimePoint(y2, m2));
    }
}

class Tag {
    name: string;
    range: TimeRange;

    constructor(name: string, range: TimeRange) {
        this.name = name;
        this.range = range;
    }
}

export const useTagStore = defineStore('tags', () => {
    // List of tags.
    const tagList = reactive([
        new Tag('germs', TimeRange.fromRaw(2020, 3, 2022, 4)),
        new Tag('eps', TimeRange.fromRaw(1983, 9, 1992, 6))
    ]);

    function newTag(
        name: string,
        y1: number,
        m1: number,
        y2: number,
        m2: number
    ) {
        tagList.push(new Tag(name, TimeRange.fromRaw(y1, m1, y2, m2)));
    }

    function monthNames(): Array<string> {
        return TimePoint.monthNames();
    }

    return {
        monthNames,
        newTag,
        tagList
    };
});

// this allows you to persist data across a hot reload.
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useTagStore, import.meta.hot));
