import { Logger } from '../../lib';

describe('Logger', () => {
  it('will run', () => {
    const logger = new Logger();
    logger.info('msg');
  });
});