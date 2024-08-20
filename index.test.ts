import { RomanNumeralConverter, RomanNumeralConverterDemo } from './index';

const batchTestFunction = (data) => {
  let numerals = new RomanNumeralConverterDemo;
  Object.keys(data).forEach((number) => {
    const input = parseInt(number, 10);
    const expected = data[number];
    const result = numerals.toNumerals(input);
    return expect(result).toMatch(expected);
  })
}

describe('RomanNumerals', () => {
  const baseNumbers = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  }

  const subtractionNumbers = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  }

  const singleAdditionNumbers = {
    2: "II",
    6: "VI",

    11: "XI",
    15: "XV",

    51: "LI",
    55: "LV",

    101: "CI",
    105: "CV",
    110: "CX",
    150: "CL",

    501: "DI",
    505: "DV",
    510: "DX",
    550: "DL",
    600: "DC",

    1001: "MI",
    1005: "MV",
    1010: "MX",
    1050: "ML",
    1100: "MC",
    1500: "MD",
  }

  const multipleAdditionNumbers = {
    3: "III",
    8: "VIII",
    18: "XVIII",
    38: "XXXVIII",
    88: "LXXXVIII",
    188: "CLXXXVIII",
    688: "DCLXXXVIII",
    1888: "MDCCCLXXXVIII",
  }

  const additionToSubtractionNumbers = {
    14: "XIV",
    44: "XLIV",
    94: "XCIV",
    444: "CDXLIV",
    994: "CMXCIV"
  }

  const complexNumbers = {
    78: "LXXVIII",
    484: "CDLXXXIV",
    678: "DCLXXVIII",
    999: "CMXCIX",
    1768: "MDCCLXVIII",
    1999: "MCMXCIX",
    2909: "MMCMIX",
    3768: "MMMDCCLXVIII",
    3999: "MMMCMXCIX",
  }

  describe('#toNumerals', () => {
    it('should raise an error when given value less than 1', () => {
      // Given
      const numerals = new RomanNumeralConverterDemo();
      const value: number = 0;

      // When
      const wrapper = () => {
        numerals.toNumerals(value)
      };

      // Then
      expect(wrapper).toThrow('Input must be greater than 0');
    });

    describe("basic numerals", () => {
      it('should return the correct value for the basic numerals', () => {
        batchTestFunction(baseNumbers);
      })
    });

    describe("basic subtractions", () => {
      it('should return the correct value for the set of single subtraction numerals', () => {
        batchTestFunction(subtractionNumbers);
      })
    });

    describe("basic additions", () => {
      it('should return the correct value for numerals added together', () => {
        batchTestFunction(singleAdditionNumbers);
      })
    });

    describe("multiple additions", () => {
      it('should return the correct value for numerals added together', () => {
        batchTestFunction(multipleAdditionNumbers);
      })
    });

    describe("additions with subtractions", () => {
      it('should return the correct value for numerals with subtraction added to others', () => {
        batchTestFunction(additionToSubtractionNumbers);
      })
    });

    describe("complex numbers", () => {
      it('should return the correct values for any number', () => {
        batchTestFunction(complexNumbers);
      })
    });
  });
});
