declare type Formatter = (date: Date) => string;
declare type Formatters = {
    [token: string]: Formatter;
};
/**
 * Formatters are based on moment tokens. They receives a
 * Date and returns it's format.
 */
declare const formatters: Formatters;
export default formatters;
