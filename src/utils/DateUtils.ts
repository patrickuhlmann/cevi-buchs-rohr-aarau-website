export class DateUtils {
  static isSameDay(a: Date, b: Date) {
    return (
      a.getUTCFullYear() == b.getUTCFullYear() &&
      a.getUTCMonth() == b.getUTCMonth() &&
      a.getUTCDay() == b.getUTCDay()
    );
  }

  static parseDateWithoutTime(str: string): Date {
    const isoFormat = /(\d{2,4})-(\d{1,2})-(\d{1,2})$/;
    const chFormat = /^(\d{1,2}).(\d{1,2}).(\d{2,4})$/;

    if (isoFormat.test(str)) {
      const match = str.match(isoFormat);
      return new Date(
        Date.UTC(+match![1], +match![2] - 1, +match![3], 0, 0, 0, 0)
      );
    } else if (chFormat.test(str)) {
      const match = str.match(chFormat);
      return new Date(
        Date.UTC(+match![3], +match![2] - 1, +match![1], 0, 0, 0, 0)
      );
    } else {
      throw new RangeError(
        str + " is neither an ISO nor a CH dateformat (without time)"
      );
    }
  }
}
