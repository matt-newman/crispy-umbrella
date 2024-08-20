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

    private getNumeral = (num) => {
      return this.numerals[`${num}`];
    }
  
    public toNumerals(value: number): string {
      if( value < 1 ) {
        throw new Error('Input must be greater than 0');
      }
  
      const match = this.getNumeral(value);
  
      if ( match ) {
        return match;
      }
  
      // todo: for values larger than N check
      // find where number goes into map
      // is next value - N || is more
  
      const numbers = Object.keys(this.numerals).sort((a,b) => parseInt(b) - parseInt(a));
  
      const numberBelow = numbers.find(number => {
        if ( value > parseInt(number, 10) ) {
          return true;
        }
        return false;
      })

      let numeralBelow = this.getNumeral(numberBelow);

      const remainder = value - parseInt((numberBelow || ''), 10);

      const otherNumerals = this.toNumerals(remainder);
      
      // console.log({value, numberBelow, remainder, numeralBelow, otherNumerals});
  
      let builtNumeral = numeralBelow + otherNumerals;  
  
      return builtNumeral;
    }
  
  }
  
  
  
  