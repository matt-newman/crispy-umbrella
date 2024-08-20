export interface RomanNumeralConverter {
  toNumerals: (value: number) => string;
}

export class RomanNumeralConverterDemo implements RomanNumeralConverter {

  private numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }

  private numbersOrderedHighToLow = ['1000', '900', '500', '400', '100', '90', '50', '40', '10', '9', '5', '4', '1']; // to go from high to low, because its a small unchanging data set I can just have this stored

  private getNumeral = (num) => {
    return this.numerals[`${num}`] || '';
  }

  public toNumerals(value: number): string {
    if (value < 1) {
      throw new Error('Input must be greater than 0');
    }

    const match = this.getNumeral(value);

    if (match) {
      return match;
    }

    const highestNumberBelow = parseInt(this.numbersOrderedHighToLow.find(number => value > parseInt(number, 10)) || '', 10); // succinct version
    const highestNumeralBelow = this.getNumeral(highestNumberBelow);

    const remainingValue = value - highestNumberBelow;
    const remaningNumerals = this.toNumerals(remainingValue); // recusrion

    return highestNumeralBelow + remaningNumerals; // string concat, if no value then concats empty string;
  }
}
