import { Levels, Logger } from '../../src';

describe('index', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('Logger', () => {
    it('will log a message', () => {
      const logger = new Logger();
      const logSpy = jest.spyOn(console, 'log');
      const mockMessage = 'MESSAGE';

      logger.info(mockMessage);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(JSON.parse(logSpy.mock.calls[0][0])).toMatchObject({
        message: mockMessage,
        level: Levels.info,
      });
    });

    it('will log data', () => {
      const logger = new Logger();
      const logSpy = jest.spyOn(console, 'log');
      const mockData = { var1: 'VALUE' };

      logger.info(mockData);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(JSON.parse(logSpy.mock.calls[0][0])).toMatchObject({
        data: mockData,
        level: Levels.info,
      });
    });

    it('will log data and a message', () => {
      const logger = new Logger();
      const logSpy = jest.spyOn(console, 'log');
      const mockData = { var1: 'VALUE' };
      const mockMessage = 'MESSAGE';

      logger.info(mockData, mockMessage);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(JSON.parse(logSpy.mock.calls[0][0])).toMatchObject({
        data: mockData,
        message: mockMessage,
        level: Levels.info,
      });
    });

    it('will log whatever is provided as data', () => {
      const logger = new Logger();
      const logSpy = jest.spyOn(console, 'log');
      const mockInput = [1, { data: true }, 'TEXT'];

      logger.info(...mockInput);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(JSON.parse(logSpy.mock.calls[0][0])).toMatchObject({
        data: mockInput,
        level: Levels.info,
      });
    });
  });
});