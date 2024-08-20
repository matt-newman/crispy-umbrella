import { RomanNumeralConverter, RomanNumeralConverterDemo } from './index';

describe('CaesarCipherDemo', () => {
  let numerals: RomanNumeralConverter;

  beforeAll(() => {
    numerals = new RomanNumeralConverterDemo();
  })

  describe('#toNumerals', () => {
    it('should raise an error when given value less than 1', () => {
      // Given
      const value: number = 0;

      // When
      const wrapper = () => {
        numerals.toNumerals(value)
      };

      // Then
      expect(wrapper).toThrow('Input must be greater than 0');
    });

    it('should return I for 1', () => {
      // Given
      const value: number = 1;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'I';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return V for 5', () => {
      // Given
      const value: number = 5;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'V';

      // Then
      expect(result).toMatch(expected);
    });
    it('should return X for 10', () => {
      // Given
      const value: number = 10;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'X';

      // Then
      expect(result).toMatch(expected);
    });
    it('should return L for 50', () => {
      // Given
      const value: number = 50;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'L';

      // Then
      expect(result).toMatch(expected);
    });
    it('should return C for 100', () => {
      // Given
      const value: number = 100;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'C';

      // Then
      expect(result).toMatch(expected);
    });
    it('should return D for 500', () => {
      // Given
      const value: number = 500;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'D';

      // Then
      expect(result).toMatch(expected);
    });
    it('should return M for 1000', () => {
      // Given
      const value: number = 1000;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'M';

      // Then
      expect(result).toMatch(expected);
    });


    it('should return II for 2', () => {
      // Given
      const value: number = 2;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'II';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return III for 3', () => {
      // Given
      const value: number = 3;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'III';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return IV for 4', () => {
      // Given
      const value: number = 4;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'IV';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return VI for 6', () => {
      // Given
      const value: number = 6;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'VI';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return VII for 7', () => {
      // Given
      const value: number = 7;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'VII';

      // Then
      expect(result).toMatch(expected);
    });

    it('should return XI for 11', () => {
      // Given
      const value: number = 11;

      // When
      const result = numerals.toNumerals(value);
      const expected = 'XI';

      // Then
      expect(result).toMatch(expected);
    });

    xit('should raise an error when given value is greater than 999', () => {
      // Given
      const value: number = 1000;

      // When
      const wrapper = () => {
        numerals.toNumerals(value)
      };

      // Then
      expect(wrapper).toThrow('Input must be less than 1000');
    });
  });
});
