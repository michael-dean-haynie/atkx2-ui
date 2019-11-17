export class Util {
    /**
     * Returns an array containing all the string representation values of an enum
     * @param arg the enum type
     */
    static getEnumValueList<T>(arg: T): string[] {
        return Object.values(arg).filter(key => {
            return typeof key === 'string';
        });
    }
}
