# Time Helper JS

A lightweight TypeScript utility library for date and time formatting operations. This package provides simple and intuitive functions to format dates, convert between time formats, calculate relative times, and perform date utilities.

## Installation

```bash
npm install time-helper
```

## Usage

```typescript
import { formatDate, to12Hour, to24Hour, now, getTime, timeAgo, timeFromNow, timeDiff, isLeapYear, daysInMonth, isToday } from 'time-helper';
```

## API

### Date Formatting

#### `formatDate(date: Date | string, formatStr: string): string`

Formats a date into a custom string format using tokens: `YYYY`, `MM`, `DD`.

**Example:**
```typescript
formatDate(new Date(), 'DD/MM/YYYY'); // '12/10/2023'
formatDate('2023-10-12T19:30:00.000+00:00', 'YYYY-MM-DD'); // '2023-10-12'
```

### Time Conversion

#### `to12Hour(isoTime: Date | string): string`

Converts a date or ISO string to 12-hour time format (HH:MM AM/PM).

**Example:**
```typescript
to12Hour(new Date()); // '07:30 PM'
to12Hour('2023-10-12T19:30:00.000+00:00'); // '07:30 PM'
```

#### `to24Hour(isoTime: Date | string): string`

Converts a date or ISO string to 24-hour time format (HH:MM AM/PM). Note: This seems to be a misnomer; it returns HH:MM with AM/PM.

**Example:**
```typescript
to24Hour(new Date()); // '19:30 PM'
to24Hour('2023-10-12T19:30:00.000+00:00'); // '19:30 PM'
```

### Current Time

#### `now(): Date`

Returns the current date and time.

**Example:**
```typescript
now(); // 2023-10-12T19:30:00.000Z
```

#### `getTime(): number`

Returns the current time in milliseconds since Unix epoch.

**Example:**
```typescript
getTime(); // 1697139000000
```

### Relative Time

#### `timeAgo(date: string): string`

Returns a human-readable string representing how long ago the given date was.

**Example:**
```typescript
timeAgo('2023-10-11'); // '1 day ago'
timeAgo('2023-10-11T19:30:00.000+00:00'); // '1 day ago'
```

#### `timeFromNow(date: string): string`

Returns a human-readable string representing how long from now the given date is.

**Example:**
```typescript
timeFromNow('2023-10-13T19:30:00.000+00:00'); // 'in 1 day'
```

#### `timeDiff(d1: string, d2: string, diff: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): string`

Calculates the difference between two dates in the specified unit.

**Example:**
```typescript
timeDiff('2023-10-11T19:30:00.000+00:00', '2023-11-11T19:30:00.000+00:00', 'days'); // '31'
```

### Date Utilities

#### `isLeapYear(year: Date | string | number): boolean`

Checks if the given year is a leap year.

**Example:**
```typescript
isLeapYear(2024); // true
isLeapYear('2024-10-11'); // true
```

#### `daysInMonth(year: number, month: number): number`

Returns the number of days in the specified month and year.

**Example:**
```typescript
daysInMonth(2023, 2); // 28
daysInMonth(2024, 2); // 29
```

#### `isToday(date: string | Date): boolean`

Checks if the given date is today.

**Example:**
```typescript
isToday(new Date()); // true
isToday('2023-10-12'); // true (if today is 2023-10-12)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
