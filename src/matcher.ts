import formatters from './formatters';

/**
 * Creates a matcher using formatters tokens and escape strategy.
 */
function createMatcher(): RegExp {
  const ESCAPE = '\\[[^\\[\\]]*\\]';
  const matchers = Object.keys(formatters).concat(ESCAPE);
  return new RegExp(matchers.join('|'), 'g');
}

export default createMatcher();
